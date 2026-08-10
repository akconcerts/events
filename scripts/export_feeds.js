import fs from 'fs';
import path from 'path';

const rootDir = process.cwd();
const eventsPath = path.join(rootDir, 'events.json');
const venuesPath = path.join(rootDir, 'venues.json');

if (!fs.existsSync(eventsPath)) {
  console.error("events.json not found.");
  process.exit(1);
}

const events = JSON.parse(fs.readFileSync(eventsPath, 'utf8'));
const venues = fs.existsSync(venuesPath) ? JSON.parse(fs.readFileSync(venuesPath, 'utf8')) : [];

// Map venue name -> venue object for coordinates
const venueMap = {};
for (const v of venues) {
  venueMap[v.name.toLowerCase().trim()] = v;
  // Also index by key substrings (e.g. koots)
  if (v.id) venueMap[v.id.toLowerCase()] = v;
}

function findVenue(name) {
  if (!name) return null;
  const n = name.toLowerCase().trim();
  if (venueMap[n]) return venueMap[n];
  for (const key of Object.keys(venueMap)) {
    if (n.includes(key) || key.includes(n)) return venueMap[key];
  }
  return null;
}

// 1. Generate events.ics (iCal Feed)
function generateICS(eventsList) {
  // Only include upcoming or recent events in ICS feed to keep file light
  const upcomingEvents = eventsList.slice(-500); // Last 500 events chronologically
  const lines = [
    'BEGIN:VCALENDAR',
    'VERSION:2.0',
    'PRODID:-//AK Concerts//Alaska Event Calendar//EN',
    'CALSCALE:GREGORIAN',
    'METHOD:PUBLISH',
    'X-WR-CALNAME:AK Concerts Calendar',
    'X-WR-TIMEZONE:America/Anchorage'
  ];

  for (const e of upcomingEvents) {
    if (!e.date) continue;
    const cleanDate = e.date.replace(/-/g, '');
    const uid = `ev-${e.id || Math.random()}@akconcerts.com`;
    lines.push('BEGIN:VEVENT');
    lines.push(`UID:${uid}`);
    lines.push(`DTSTAMP:${cleanDate}T000000Z`);
    lines.push(`DTSTART;VALUE=DATE:${cleanDate}`);
    lines.push(`SUMMARY:${e.title.replace(/[,;\\]/g, ' ')}`);
    lines.push(`LOCATION:${(e.venue + ', ' + e.city).replace(/[,;\\]/g, ' ')}`);
    lines.push(`DESCRIPTION:${e.title} at ${e.venue} in ${e.city}. Time: ${e.time || 'TBD'}. Category: ${e.category || 'music'}`);
    if (e.ticketUrl) lines.push(`URL:${e.ticketUrl}`);
    lines.push('END:VEVENT');
  }

  lines.push('END:VCALENDAR');
  return lines.join('\r\n');
}

// 2. Generate events.xml (RSS 2.0 Feed)
function generateRSS(eventsList) {
  const recentEvents = [...eventsList].reverse().slice(0, 100);
  const items = recentEvents.map(e => `
    <item>
      <title><![CDATA[${e.title} — ${e.venue} (${e.city})]]></title>
      <description><![CDATA[Date: ${e.date} | Venue: ${e.venue}, ${e.city} | Category: ${e.category || 'music'} | Time: ${e.time || 'TBD'}]]></description>
      <link>${e.ticketUrl || 'https://www.akconcerts.com'}</link>
      <guid isPermaLink="false">akconcerts-${e.id}</guid>
      <pubDate>${new Date(e.date).toUTCString()}</pubDate>
    </item>`).join('');

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AK Concerts &amp; Events Feed</title>
    <link>https://www.akconcerts.com</link>
    <description>Live concerts, music shows, comedy, theatre, and events across Alaska.</description>
    <language>en-us</language>
    <atom:link href="https://raw.githubusercontent.com/akconcerts/events/main/events.xml" rel="self" type="application/rss+xml" />
    ${items}
  </channel>
</rss>`;
}

// 3. Generate events.geojson
function generateGeoJSON(eventsList) {
  const features = [];
  for (const e of eventsList) {
    const v = findVenue(e.venue);
    // Use venue coords if found, or fallback to city center coords
    let lat = v ? v.lat : null;
    let lng = v ? v.lng : null;

    if (!lat) {
      if (e.city.toLowerCase() === 'anchorage') { lat = 61.2181; lng = -149.9003; }
      else if (e.city.toLowerCase() === 'fairbanks') { lat = 64.8378; lng = -147.7164; }
      else if (e.city.toLowerCase() === 'juneau') { lat = 58.3019; lng = -134.4197; }
      else if (e.city.toLowerCase() === 'girdwood') { lat = 60.9422; lng = -149.1667; }
      else if (e.city.toLowerCase() === 'palmer') { lat = 61.5997; lng = -149.1100; }
      else if (e.city.toLowerCase() === 'homer') { lat = 59.6425; lng = -151.5483; }
    }

    if (lat && lng) {
      features.push({
        type: "Feature",
        geometry: {
          type: "Point",
          coordinates: [lng, lat]
        },
        properties: {
          id: e.id,
          title: e.title,
          venue: e.venue,
          city: e.city,
          date: e.date,
          time: e.time || "",
          category: e.category || "music",
          ticketUrl: e.ticketUrl || ""
        }
      });
    }
  }

  return JSON.stringify({
    type: "FeatureCollection",
    features
  }, null, 2);
}

// 4. Generate stats.json
function generateStats(eventsList) {
  const cityCounts = {};
  const categoryCounts = {};
  const venueCounts = {};

  for (const e of eventsList) {
    cityCounts[e.city] = (cityCounts[e.city] || 0) + 1;
    categoryCounts[e.category || 'music'] = (categoryCounts[e.category || 'music'] || 0) + 1;
    venueCounts[e.venue] = (venueCounts[e.venue] || 0) + 1;
  }

  const topVenues = Object.entries(venueCounts)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 15)
    .reduce((acc, [k, v]) => ({ ...acc, [k]: v }), {});

  return JSON.stringify({
    totalEvents: eventsList.length,
    timeframe: {
      earliestDate: eventsList[0]?.date || null,
      latestDate: eventsList[eventsList.length - 1]?.date || null
    },
    cities: cityCounts,
    categories: categoryCounts,
    topVenues,
    lastUpdated: new Date().toISOString()
  }, null, 2);
}

// Write outputs
fs.writeFileSync(path.join(rootDir, 'events.ics'), generateICS(events), 'utf8');
console.log('Successfully generated events.ics (iCal Feed)!');

fs.writeFileSync(path.join(rootDir, 'events.xml'), generateRSS(events), 'utf8');
console.log('Successfully generated events.xml (RSS 2.0 Feed)!');

fs.writeFileSync(path.join(rootDir, 'events.geojson'), generateGeoJSON(events), 'utf8');
console.log('Successfully generated events.geojson (GeoJSON Map Dataset)!');

fs.writeFileSync(path.join(rootDir, 'stats.json'), generateStats(events), 'utf8');
console.log('Successfully generated stats.json (Dataset Analytics)!');
