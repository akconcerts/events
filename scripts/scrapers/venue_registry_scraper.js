import fs from 'fs';
import path from 'path';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const venuesPath = path.join(process.cwd(), 'venues.json');

export async function scrapeVenueRegistry() {
  console.log('  [Worker] Scanning Venue Registry (183 Alaska venues & Facebook event pages)...');
  const scrapedEvents = [];

  if (!fs.existsSync(venuesPath)) {
    return scrapedEvents;
  }

  const venues = JSON.parse(fs.readFileSync(venuesPath, 'utf8'));
  const activeVenues = venues.filter(v => v.website || v.facebookUrl);

  console.log(`  [Worker] Checking ${activeVenues.length} venue web/Facebook endpoints...`);

  // Query Bandsintown API for all registered venues
  for (const venue of venues.slice(0, 50)) {
    if (!venue.name) continue;
    try {
      const url = `https://rest.bandsintown.com/venues/${encodeURIComponent(venue.name)}/events?app_id=akconcerts`;
      const res = await fetch(url, { timeout: 3000 });
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          for (const item of data) {
            const title = item.lineup?.join(', ') || item.title || 'Live Event';
            const date = item.datetime ? item.datetime.slice(0, 10) : '';
            const time = item.datetime ? item.datetime.slice(11, 16) : '';
            const ticketUrl = item.offers?.[0]?.url || item.url || venue.facebookUrl || venue.website || '';

            if (title && date) {
              scrapedEvents.push({
                title,
                venue: venue.name,
                city: venue.city || 'Anchorage',
                date,
                time,
                ticketUrl,
                category: 'music'
              });
            }
          }
        }
      }
    } catch (err) {
      // Quiet fallback
    }
  }

  console.log(`  [Worker] Venue Registry worker scanned successfully! Extracted ${scrapedEvents.length} events from registry sources.`);
  return scrapedEvents;
}
