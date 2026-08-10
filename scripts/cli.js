#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const eventsJsonPath = path.join(rootDir, 'events.json');

if (!fs.existsSync(eventsJsonPath)) {
  console.error("Error: events.json not found at " + eventsJsonPath);
  process.exit(1);
}

const events = JSON.parse(fs.readFileSync(eventsJsonPath, 'utf8'));

const args = process.argv.slice(2);
let cityFilter = null;
let categoryFilter = null;
let searchQuery = null;
let limit = 20;

for (let i = 0; i < args.length; i++) {
  if (args[i] === '--city' && args[i + 1]) {
    cityFilter = args[++i].toLowerCase();
  } else if (args[i] === '--category' && args[i + 1]) {
    categoryFilter = args[++i].toLowerCase();
  } else if (args[i] === '--search' && args[i + 1]) {
    searchQuery = args[++i].toLowerCase();
  } else if (args[i] === '--limit' && args[i + 1]) {
    limit = parseInt(args[++i], 10);
  } else if (args[i] === '--help' || args[i] === '-h') {
    console.log(`
🎸 AK Concerts CLI Tool

Usage:
  npx akconcerts [options]
  node scripts/cli.js [options]

Options:
  --city <city>        Filter by Alaskan city (e.g. Anchorage, Fairbanks, Juneau)
  --category <type>    Filter by category (music, comedy, dance, theatre, community, festival)
  --search <query>     Search titles, artists, or venues
  --limit <number>     Number of results to display (default: 20)
  --help               Show this help message
`);
    process.exit(0);
  }
}

let filtered = events;

if (cityFilter) {
  filtered = filtered.filter(e => e.city.toLowerCase().includes(cityFilter));
}
if (categoryFilter) {
  filtered = filtered.filter(e => e.category && e.category.toLowerCase() === categoryFilter);
}
if (searchQuery) {
  filtered = filtered.filter(e =>
    e.title.toLowerCase().includes(searchQuery) ||
    e.venue.toLowerCase().includes(searchQuery) ||
    e.city.toLowerCase().includes(searchQuery)
  );
}

console.log(`\n🎸 AK Concerts Dataset — Showing ${Math.min(limit, filtered.length)} of ${filtered.length} matching events:\n`);
console.log('=' .repeat(90));
console.log(`${'DATE'.padEnd(12)} | ${'CITY'.padEnd(12)} | ${'VENUE'.padEnd(20)} | ${'TITLE / ARTIST'}`);
console.log('='.repeat(90));

filtered.slice(0, limit).forEach(e => {
  const dateStr = (e.date || '').padEnd(12);
  const cityStr = (e.city || '').padEnd(12).slice(0, 12);
  const venueStr = (e.venue || '').padEnd(20).slice(0, 20);
  console.log(`${dateStr} | ${cityStr} | ${venueStr} | ${e.title} ${e.time ? '(' + e.time + ')' : ''}`);
});

console.log('=' .repeat(90));
console.log(`💡 Total Dataset Size: ${events.length} events across Alaska\n`);
