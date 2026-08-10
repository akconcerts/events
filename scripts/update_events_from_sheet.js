import fs from 'fs';
import path from 'path';

const eventsJsonPath = path.join(process.cwd(), 'src', 'data', 'events.json');
const localCsvTemplatePath = path.join(process.cwd(), 'events_template.csv');

// Lightweight CSV line parser supporting quoted fields
function parseCSVLine(line) {
  const result = [];
  let cur = '';
  let inQuotes = false;
  
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQuotes = !inQuotes;
    } else if (c === ',' && !inQuotes) {
      result.push(cur);
      cur = '';
    } else {
      cur += c;
    }
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
      if (header) {
        row[header] = values[idx] ? values[idx].trim() : '';
      }
    });
    results.push(row);
  }
  return results;
}

async function run() {
  const sheetUrl = process.env.EVENTS_SHEET_URL;
  let csvText = '';

  if (sheetUrl) {
    console.log(`Fetching updated events from Google Sheet: ${sheetUrl}`);
    try {
      const response = await fetch(sheetUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      csvText = await response.text();
      console.log(`Successfully downloaded Google Sheet CSV (${csvText.length} bytes).`);
    } catch (err) {
      console.error('Failed to fetch from Google Sheet URL. Falling back to local template.', err);
    }
  } else {
    console.log('No EVENTS_SHEET_URL environment variable set. Reading local events_template.csv...');
  }

  // Fallback to local template if no sheet fetched
  if (!csvText && fs.existsSync(localCsvTemplatePath)) {
    csvText = fs.readFileSync(localCsvTemplatePath, 'utf8');
    console.log(`Loaded ${localCsvTemplatePath} for local updates.`);
  }

  if (!csvText) {
    console.log('No CSV data available to merge. Exiting.');
    return;
  }

  const sheetEvents = parseCSV(csvText).filter(e => {
    const isApproved = !e.status || e.status.toLowerCase().trim() === 'approved';
    return isApproved && e.date && e.title && e.city && e.venue;
  });
  console.log(`Parsed ${sheetEvents.length} approved events from sheet/CSV.`);

  // Load existing database events
  let existingEvents = [];
  if (fs.existsSync(eventsJsonPath)) {
    existingEvents = JSON.parse(fs.readFileSync(eventsJsonPath, 'utf8'));
    console.log(`Loaded ${existingEvents.length} existing events from database.`);
  }

  // Merge events and remove duplicates
  const allEvents = [...existingEvents, ...sheetEvents];
  const seen = new Set();
  const uniqueEvents = [];

  for (const ev of allEvents) {
    const key = `${ev.title.toLowerCase().trim()}|${ev.venue.toLowerCase().trim()}|${ev.city.toLowerCase().trim()}|${ev.date}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueEvents.push({
        title: ev.title,
        venue: ev.venue,
        city: ev.city,
        date: ev.date,
        time: ev.time || 'TBD',
        ticketUrl: ev.ticketurl || ev.ticketUrl || '',
        category: ev.category || 'music',
        cost: ev.cost || ''
      });
    }
  }

  // Sort events chronologically (date, then city, then time)
  uniqueEvents.sort((a, b) => {
    const dateCompare = a.date.localeCompare(b.date);
    if (dateCompare !== 0) return dateCompare;
    const cityCompare = a.city.localeCompare(b.city);
    if (cityCompare !== 0) return cityCompare;
    return a.time.localeCompare(b.time);
  });

  // Write back to database
  fs.writeFileSync(eventsJsonPath, JSON.stringify(uniqueEvents, null, 2), 'utf8');
  console.log(`Database events.json successfully updated! Total unique events: ${uniqueEvents.length}`);
}

run().catch(console.error);
