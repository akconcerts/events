import fs from 'fs';
import path from 'path';

import { scrapeEventbrite } from './scrapers/eventbrite_api.js';
import { scrapeTicketmaster } from './scrapers/ticketmaster_api.js';
import { scrapeBandsintown } from './scrapers/bandsintown_api.js';
import { scrapeKoots } from './scrapers/koots.js';
import { scrapeBeartooth } from './scrapers/beartooth.js';
import { deduplicateEvents } from './scrapers/dedupe_engine.js';
import { execSync } from 'child_process';

const rootDir = process.cwd();
const eventsJsonPath = path.join(rootDir, 'events.json');

async function main() {
  console.log('🚀 Running AK Concerts Automated Scraper Workers Pipeline...\n');

  // Load existing events
  let existingEvents = [];
  if (fs.existsSync(eventsJsonPath)) {
    existingEvents = JSON.parse(fs.readFileSync(eventsJsonPath, 'utf8'));
    console.log(`Loaded ${existingEvents.length} existing events from events.json`);
  }

  // Run all scraper workers in parallel
  console.log('\n--- Launching Scraper Workers ---');
  const workerResults = await Promise.allSettled([
    scrapeEventbrite(),
    scrapeTicketmaster(),
    scrapeBandsintown(),
    scrapeKoots(),
    scrapeBeartooth()
  ]);

  const newEvents = [];
  for (const r of workerResults) {
    if (r.status === 'fulfilled' && Array.isArray(r.value)) {
      newEvents.push(...r.value);
    }
  }

  console.log(`\nExtracted total of ${newEvents.length} raw scraped events from worker pool.`);

  // Deduplicate and merge
  const mergedEvents = deduplicateEvents(existingEvents, newEvents);

  // Write outputs to root and src/data/
  const jsonContent = JSON.stringify(mergedEvents, null, 2);
  fs.writeFileSync(eventsJsonPath, jsonContent, 'utf8');
  fs.writeFileSync(path.join(rootDir, 'src', 'data', 'events.json'), jsonContent, 'utf8');
  console.log('\n✓ Updated events.json (root & src/data/)');

  // Write CSV
  function escapeCsv(val) {
    const s = String(val || '').replace(/"/g, '""');
    return `"${s}"`;
  }
  const csvHeaders = ['id', 'date', 'city', 'venue', 'category', 'title', 'time', 'ticketUrl', 'cost'];
  const csvRows = [
    csvHeaders.join(','),
    ...mergedEvents.map(e => [
      escapeCsv(e.id),
      escapeCsv(e.date),
      escapeCsv(e.city),
      escapeCsv(e.venue),
      escapeCsv(e.category),
      escapeCsv(e.title),
      escapeCsv(e.time),
      escapeCsv(e.ticketUrl),
      escapeCsv(e.cost)
    ].join(','))
  ];
  fs.writeFileSync(path.join(rootDir, 'events.csv'), csvRows.join('\n'), 'utf8');
  console.log('✓ Updated events.csv');

  // Write XLSX
  try {
    const XLSX = (await import('xlsx')).default;
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(mergedEvents);
    XLSX.utils.book_append_sheet(wb, ws, "Events_Database");
    XLSX.writeFile(wb, path.join(rootDir, 'events.xlsx'));
    console.log('✓ Updated events.xlsx');
  } catch (err) {
    console.warn('XLSX export notice:', err.message);
  }

  // Update feeds
  console.log('\n--- Regenerating Calendar Feeds, GeoJSON & Analytics ---');
  execSync('node scripts/export_feeds.js', { stdio: 'inherit' });

  console.log('\n🎉 AK Concerts Worker Pipeline execution complete!');
}

main().catch(console.error);
