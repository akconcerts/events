import fs from 'fs';
import path from 'path';

/**
 * AK CONCERTS — FUTURE AUTOMATION 2-WAY SYNC ENGINE
 * Automatically synchronizes Bands_Artists_CRM & Venues_CRM tabs from Google Sheets
 * directly into local database files (venues.json & bands.ts) on every build!
 */

const venuesJsonPath = path.join(process.cwd(), 'venues.json');
const bandsTsPath = path.join(process.cwd(), 'src', 'data', 'bands.ts');

function parseCSVLine(line) {
  const result = [];
  let cur = '';
  let inQuotes = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') { inQuotes = !inQuotes; }
    else if (c === ',' && !inQuotes) { result.push(cur); cur = ''; }
    else { cur += c; }
  }
  result.push(cur);
  return result;
}

function parseCSV(text) {
  const lines = text.split(/\r?\n/);
  if (lines.length < 2) return [];
  const headers = parseCSVLine(lines[0]).map(h => h.trim().toLowerCase());
  const results = [];
  for (let i = 1; i < lines.length; i++) {
    const line = lines[i].trim();
    if (!line) continue;
    const values = parseCSVLine(line);
    const row = {};
    headers.forEach((header, idx) => {
      if (header) row[header] = values[idx] ? values[idx].trim() : '';
    });
    results.push(row);
  }
  return results;
}

async function syncVenues() {
  const venuesSheetUrl = process.env.VENUES_SHEET_URL;
  if (!venuesSheetUrl) return;
  console.log('🔄 Syncing Venues CRM tab from Google Sheet...');
  try {
    const res = await fetch(venuesSheetUrl);
    const csv = await res.text();
    const rows = parseCSV(csv);
    if (rows.length > 0) {
      const venues = rows.map(r => ({
        id: r['venue id'] || r['name'].toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        name: r['venue name'] || r['name'],
        city: r['city'] || 'Anchorage',
        address: r['address'] || '',
        lat: parseFloat(r['latitude']) || null,
        lng: parseFloat(r['longitude']) || null,
        website: r['website'] || '',
        facebookUrl: r['facebook page'] || r['facebookurl'] || '',
        capacity: parseInt(r['capacity']) || null,
        indoor: r['type'] ? r['type'].toLowerCase().includes('indoor') : true
      }));
      fs.writeFileSync(venuesJsonPath, JSON.stringify(venues, null, 2));
      console.log(`✅ Successfully synced ${venues.length} venues into venues.json!`);
    }
  } catch (err) {
    console.error('Failed to sync venues from sheet:', err);
  }
}

async function syncBands() {
  const bandsSheetUrl = process.env.BANDS_SHEET_URL;
  if (!bandsSheetUrl) return;
  console.log('🔄 Syncing Bands & Artists CRM tab from Google Sheet...');
  try {
    const res = await fetch(bandsSheetUrl);
    const csv = await res.text();
    const rows = parseCSV(csv);
    if (rows.length > 0) {
      const bands = rows.map(r => ({
        name: r['band name'] || r['name'],
        slug: r['band slug'] || r['slug'] || r['name'].toLowerCase().replace(/[^a-z0-9]+/g, '-'),
        description: r['bio description'] || r['description'] || '',
        facebookUrl: r['facebook url'] || r['facebookurl'] || '',
        youtubeId: r['youtube video id'] || r['youtubeid'] || '',
        hasImage: r['has image'] ? r['has image'].toLowerCase() === 'yes' : false
      }));

      const tsContent = `export interface Band {\n  name: string;\n  slug: string;\n  description?: string;\n  facebookUrl?: string;\n  amazonUrl?: string;\n  youtubeId?: string;\n  hasImage?: boolean;\n}\n\nexport const bands: Band[] = ${JSON.stringify(bands, null, 2)};\n`;
      fs.writeFileSync(bandsTsPath, tsContent);
      console.log(`✅ Successfully synced ${bands.length} local artists into src/data/bands.ts!`);
    }
  } catch (err) {
    console.error('Failed to sync bands from sheet:', err);
  }
}

async function run() {
  await syncVenues();
  await syncBands();
}

run();
