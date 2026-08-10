import fs from 'fs';
import path from 'path';

const waybackDir = path.join(process.cwd(), 'wayback_data');
const parsedEventsPath = path.join(waybackDir, 'parsed_events.json');
const eventsTsPath = path.join(process.cwd(), 'src', 'data', 'events.ts');

function getFormattedDateComment(dateStr) {
  const [year, month, day] = dateStr.split('-');
  const date = new Date(Number(year), Number(month) - 1, Number(day));
  const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
  const monthName = date.toLocaleDateString('en-US', { month: 'long' });
  const dayNum = Number(day);
  // Add ordinal suffix (st, nd, rd, th)
  let suffix = 'th';
  if (dayNum === 1 || dayNum === 21 || dayNum === 31) suffix = 'st';
  else if (dayNum === 2 || dayNum === 22) suffix = 'nd';
  else if (dayNum === 3 || dayNum === 23) suffix = 'rd';
  
  return `${weekday} ${monthName} ${dayNum}${suffix}`;
}

async function run() {
  if (!fs.existsSync(parsedEventsPath)) {
    console.error(`Parsed events file not found at ${parsedEventsPath}. Run parse_live.js first.`);
    process.exit(1);
  }

  const newEvents = JSON.parse(fs.readFileSync(parsedEventsPath, 'utf8'));
  console.log(`Loaded ${newEvents.length} new events from live site.`);

  // Load parsed historical events from Wayback if it exists
  const waybackParsedEventsPath = path.join(waybackDir, 'wayback_parsed_events.json');
  let waybackEvents = [];
  if (fs.existsSync(waybackParsedEventsPath)) {
    waybackEvents = JSON.parse(fs.readFileSync(waybackParsedEventsPath, 'utf8'));
    console.log(`Loaded ${waybackEvents.length} historical events from Wayback.`);
  }

  // Load and parse existing events from events.ts line-by-line using regex
  const tsContent = fs.readFileSync(eventsTsPath, 'utf8');
  const lines = tsContent.split('\n');
  
  const existingEvents = [];
  const evRegex = /ev\(\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*,\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*,\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*,\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*,\s*"([^"\\]*(?:\\.[^"\\]*)*)"\s*,\s*"([^"\\]*(?:\\.[^"\\]*)*)"(?:\s*,\s*"([^"\\]*(?:\\.[^"\\]*)*)")?\)/;

  for (const line of lines) {
    const match = line.match(evRegex);
    if (match) {
      const title = match[1].replace(/\\"/g, '"');
      const venue = match[2].replace(/\\"/g, '"');
      const city = match[3].replace(/\\"/g, '"');
      const date = match[4].replace(/\\"/g, '"');
      const time = match[5].replace(/\\"/g, '"');
      const ticketUrl = match[6].replace(/\\"/g, '"');
      const category = (match[7] || 'music').replace(/\\"/g, '"');
      
      existingEvents.push({ title, venue, city, date, time, ticketUrl, category });
    }
  }

  console.log(`Loaded ${existingEvents.length} existing events from src/data/events.ts.`);

  // Merge events and remove duplicates
  const allEvents = [...existingEvents, ...newEvents, ...waybackEvents];
  const seen = new Set();
  const uniqueEvents = [];

  for (const ev of allEvents) {
    // Generate unique key based on title, venue, city, date
    const key = `${ev.title.toLowerCase().trim()}|${ev.venue.toLowerCase().trim()}|${ev.city.toLowerCase().trim()}|${ev.date}`;
    if (!seen.has(key)) {
      seen.add(key);
      uniqueEvents.push(ev);
    }
  }

  console.log(`Merged events list contains ${uniqueEvents.length} unique events.`);

  // Sort events: date ascending, then city, then time
  uniqueEvents.sort((a, b) => {
    const dateCompare = a.date.localeCompare(b.date);
    if (dateCompare !== 0) return dateCompare;
    const cityCompare = a.city.localeCompare(b.city);
    if (cityCompare !== 0) return cityCompare;
    return a.time.localeCompare(b.time);
  });

  // Construct new src/data/events.ts content
  const header = `export interface AKEvent {
  id: string;
  slug: string;
  title: string;
  venue: string;
  city: string;
  date: string;
  time: string;
  ticketUrl: string;
  category: 'music' | 'comedy' | 'dance' | 'theatre' | 'community' | 'festival';
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

let _id = 0;
function ev(title: string, venue: string, city: string, date: string, time: string, ticketUrl: string, category: AKEvent['category'] = 'music'): AKEvent {
  _id++;
  return { id: String(_id), slug: slugify(\`\${title}-\${venue}-\${date}\`), title, venue, city, date, time, ticketUrl, category };
}

export const events: AKEvent[] = [`;

  const footer = `];

export const cities = [...new Set(events.map(e => e.city))].sort();

export function getEventsByCity(city: string): AKEvent[] {
  return events.filter(e => e.city === city);
}

export function getEventsByDate(date: string): AKEvent[] {
  return events.filter(e => e.date === date);
}
`;

  const eventLines = [];
  let currentGroupKey = "";

  for (const e of uniqueEvents) {
    const groupKey = `${e.date}|${e.city}`;
    if (groupKey !== currentGroupKey) {
      currentGroupKey = groupKey;
      eventLines.push(`\n  // ═══ ${e.city.toUpperCase()} — ${getFormattedDateComment(e.date)} ═══`);
    }

    const args = [
      JSON.stringify(e.title),
      JSON.stringify(e.venue),
      JSON.stringify(e.city),
      JSON.stringify(e.date),
      JSON.stringify(e.time),
      JSON.stringify(e.ticketUrl)
    ];

    if (e.category && e.category !== 'music') {
      args.push(JSON.stringify(e.category));
    }

    eventLines.push(`  ev(${args.join(', ')}),`);
  }

  const finalContent = header + eventLines.join('\n') + '\n' + footer;

  fs.writeFileSync(eventsTsPath, finalContent, 'utf8');
  console.log(`Successfully updated ${eventsTsPath} with merged events!`);

  // Prepare objects for JSON, CSV, and XLSX exports
  const formattedEvents = uniqueEvents.map((e, idx) => ({
    id: String(idx + 1),
    date: e.date,
    city: e.city,
    venue: e.venue,
    category: e.category || 'music',
    title: e.title,
    time: e.time || '',
    ticketUrl: e.ticketUrl || '',
    cost: e.cost || ''
  }));

  // 1. Export JSON (Root and src/data/)
  const jsonContent = JSON.stringify(formattedEvents, null, 2);
  fs.writeFileSync(path.join(process.cwd(), 'events.json'), jsonContent, 'utf8');
  fs.writeFileSync(path.join(process.cwd(), 'src', 'data', 'events.json'), jsonContent, 'utf8');
  console.log('Successfully updated events.json (root & src/data/)!');

  // 2. Export CSV (Root)
  function escapeCsv(val) {
    const s = String(val || '').replace(/"/g, '""');
    return `"${s}"`;
  }
  const csvHeaders = ['id', 'date', 'city', 'venue', 'category', 'title', 'time', 'ticketUrl', 'cost'];
  const csvRows = [
    csvHeaders.join(','),
    ...formattedEvents.map(e => [
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
  fs.writeFileSync(path.join(process.cwd(), 'events.csv'), csvRows.join('\n'), 'utf8');
  console.log('Successfully updated events.csv!');

  // 3. Export XLSX (Root)
  try {
    const XLSX = (await import('xlsx')).default;
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.json_to_sheet(formattedEvents);
    XLSX.utils.book_append_sheet(wb, ws, "Events_Database");
    XLSX.writeFile(wb, path.join(process.cwd(), 'events.xlsx'));
    console.log('Successfully updated events.xlsx!');
  } catch (err) {
    console.warn('Could not generate events.xlsx:', err.message);
  }
}

run().catch(console.error);
