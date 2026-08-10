import fs from 'fs';
import path from 'path';

const venueAliasMap = {
  "koots": "Koot's",
  "chilkoot charlie's": "Koot's",
  "chilkoot charlies": "Koot's",
  "koot's": "Koot's",
  "bear tooth": "Bear Tooth Theatrepub",
  "bear tooth theatrepub": "Bear Tooth Theatrepub",
  "williwaw": "Williwaw Social",
  "williwaw social": "Williwaw Social",
  "sitzmark": "The Sitzmark Bar & Grill",
  "sitzmark bar": "The Sitzmark Bar & Grill",
  "the sitzmark": "The Sitzmark Bar & Grill",
  "acpa": "Alaska Center for the Performing Arts",
  "alaska center for the performing arts": "Alaska Center for the Performing Arts"
};

export function normalizeVenue(venueName) {
  if (!venueName) return 'Alaska Venue';
  const clean = venueName.toLowerCase().trim();
  return venueAliasMap[clean] || venueName.trim();
}

export function deduplicateEvents(existingEvents, newEvents) {
  console.log(`  [Dedupe] Merging ${existingEvents.length} existing events with ${newEvents.length} new incoming scraped events...`);
  
  const all = [...existingEvents, ...newEvents];
  const seen = new Set();
  const unique = [];

  for (const ev of all) {
    if (!ev.title || !ev.date || !ev.city) continue;

    const normVenue = normalizeVenue(ev.venue);
    const key = `${ev.title.toLowerCase().trim()}|${normVenue.toLowerCase()}|${ev.city.toLowerCase().trim()}|${ev.date}`;

    if (!seen.has(key)) {
      seen.add(key);
      unique.push({
        title: ev.title.trim(),
        venue: normVenue,
        city: ev.city.trim(),
        date: ev.date.trim(),
        time: ev.time ? ev.time.trim() : '',
        ticketUrl: ev.ticketUrl ? ev.ticketUrl.trim() : '',
        category: ev.category || 'music',
        cost: ev.cost ? ev.cost.trim() : ''
      });
    }
  }

  // Sort chronologically: date ascending, then city, then time
  unique.sort((a, b) => {
    const dComp = a.date.localeCompare(b.date);
    if (dComp !== 0) return dComp;
    const cComp = a.city.localeCompare(b.city);
    if (cComp !== 0) return cComp;
    return (a.time || '').localeCompare(b.time || '');
  });

  // Assign clean sequential IDs
  const finalEvents = unique.map((e, idx) => ({
    id: String(idx + 1),
    ...e
  }));

  console.log(`  [Dedupe] Deduplication complete! Total unique events: ${finalEvents.length}`);
  return finalEvents;
}
