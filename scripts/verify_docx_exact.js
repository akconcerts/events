import fs from 'fs';
import path from 'path';

const waybackDir = path.join(process.cwd(), 'wayback_data');
const docTextPath = path.join(waybackDir, 'doc_extracted_text.txt');
const eventsJsonPath = path.join(process.cwd(), 'events.json');

const monthMap = {
  january: '01', february: '02', march: '03', april: '04',
  may: '05', june: '06', july: '07', august: '08',
  september: '09', october: '10', november: '11', december: '12'
};

function getCategory(title) {
  const t = title.toLowerCase();
  if (t.includes('comedy') || t.includes('standup') || t.includes('joke') || t.includes('drag show')) return 'comedy';
  if (t.includes('dance') || t.includes('swing') || t.includes('salsa') || t.includes('bachata') || t.includes('tango') || t.includes('two-step') || t.includes('two step')) return 'dance';
  if (t.includes('theatre') || t.includes('theater') || t.includes('musical') || t.includes('opera') || t.includes('play')) return 'theatre';
  if (t.includes('festival') || t.includes('fest') || t.includes('fair') || t.includes('luau')) return 'festival';
  if (t.includes('storytime') || t.includes('story time') || t.includes('library') || t.includes('marathon') || t.includes('5k') || t.includes('run') || t.includes('market') || t.includes('community') || t.includes('class') || t.includes('workshop')) return 'community';
  return 'music';
}

function normalizeSpaces(str) {
  return str.replace(/\u00a0/g, ' ').replace(/\u200b/g, '').replace(/\s+/g, ' ').trim();
}

function parseDateLine(line) {
  const match = line.match(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d+)(?:st|nd|rd|th)?/i);
  if (match) {
    const monthName = match[1].toLowerCase();
    const day = match[2].padStart(2, '0');
    const month = monthMap[monthName];
    if (month) {
      return `2026-${month}-${day}`;
    }
  }
  return null;
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function run() {
  const rawText = fs.readFileSync(docTextPath, 'utf8');
  const existingEvents = JSON.parse(fs.readFileSync(eventsJsonPath, 'utf8'));

  const lines = rawText.split('\n').map(normalizeSpaces).filter(l => l.length > 0);

  const docEvents = [];
  let currentCity = 'Anchorage';
  let currentDate = null;

  const VALID_CITIES = new Set([
    'anchorage', 'anchorag', 'barrow', 'bethel', 'big lake', 'chugiak', 'cooper landing',
    'cordova', 'eagle river', 'ester', 'fairbanks', 'girdwood', 'haines', 'homer', 'hope',
    'juneau', 'kasilof', 'kenai', 'ketchikan', 'kodiak', 'mccarthy', 'moose pass', 'ninilchik',
    'north pole', 'palmer', 'seldovia', 'seward', 'sitka', 'skagway', 'soldotna', 'sterling',
    'talkeetna', 'tok', 'valdez', 'wasilla', 'willow', 'jber'
  ]);

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.includes("Hyperlinks to each event") || line.includes("Sign up on our page") || line.includes("🎶➡️")) {
      continue;
    }

    const normLine = line.toLowerCase().trim();
    if (VALID_CITIES.has(normLine)) {
      currentCity = line.charAt(0).toUpperCase() + line.slice(1);
      continue;
    }

    // Try parsing date header
    const parsedDate = parseDateLine(line);
    if (parsedDate) {
      currentDate = parsedDate;
      
      // Check if event details are attached to the date line itself
      const dateHeaderMatch = line.match(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\s+(?:January|February|March|April|May|June|July|August|September|October|November|December)\s+\d+(?:st|nd|rd|th)?/i);
      if (dateHeaderMatch) {
        const remainder = line.slice(dateHeaderMatch[0].length).trim();
        if (remainder.length > 5 && (remainder.includes(' – ') || remainder.includes(' - '))) {
          parseEventSegments(remainder, currentCity, currentDate, docEvents);
        }
      }
      continue;
    }

    // Check if format is M/D e.g. 8/13 Venue – Title
    const otherCityMatch = line.match(/^(\d+)\/(\d+)\s+(.+)$/);
    if (otherCityMatch) {
      const m = otherCityMatch[1].padStart(2, '0');
      const d = otherCityMatch[2].padStart(2, '0');
      const eventDetails = otherCityMatch[3].trim();
      parseEventSegments(eventDetails, currentCity, `2026-${m}-${d}`, docEvents);
      continue;
    }

    if (currentDate && (line.includes(' – ') || line.includes(' - ') || line.includes(' — '))) {
      parseEventSegments(line, currentCity, currentDate, docEvents);
    }
  }

  console.log(`\nExtracted ${docEvents.length} total event items from 8_13_2026.docx.`);

  // Compare against repository events.json
  const existingSet = new Set();
  for (const e of existingEvents) {
    const key = `${e.title.toLowerCase().replace(/[^a-z0-9]/g, '')}|${e.venue.toLowerCase().replace(/[^a-z0-9]/g, '')}|${e.date}`;
    existingSet.add(key);
  }

  const missingEvents = [];
  let matchedCount = 0;

  for (const de of docEvents) {
    const key = `${de.title.toLowerCase().replace(/[^a-z0-9]/g, '')}|${de.venue.toLowerCase().replace(/[^a-z0-9]/g, '')}|${de.date}`;
    if (existingSet.has(key)) {
      matchedCount++;
    } else {
      // Fuzzy check
      let fuzzy = false;
      const deTitle = de.title.toLowerCase().replace(/[^a-z0-9]/g, '');
      const deVenue = de.venue.toLowerCase().replace(/[^a-z0-9]/g, '');

      for (const ex of existingEvents) {
        if (ex.date === de.date) {
          const exTitle = ex.title.toLowerCase().replace(/[^a-z0-9]/g, '');
          const exVenue = ex.venue.toLowerCase().replace(/[^a-z0-9]/g, '');

          if ((deTitle.includes(exTitle) || exTitle.includes(deTitle)) &&
              (deVenue.includes(exVenue) || exVenue.includes(deVenue))) {
            fuzzy = true;
            break;
          }
        }
      }

      if (fuzzy) {
        matchedCount++;
      } else {
        missingEvents.append ? missingEvents.append(de) : missingEvents.push(de);
      }
    }
  }

  console.log(`Matched with Repository Database: ${matchedCount}`);
  console.log(`Missing from Repository Database: ${missingEvents.length}`);

  if (missingEvents.length > 0) {
    console.log(`\n=== LIST OF ${missingEvents.length} MISSING EVENTS FROM DOCX ===`);
    missingEvents.forEach((m, idx) => {
      console.log(`${idx + 1}. [${m.date}] ${m.city} | ${m.venue} – ${m.title} (${m.time})`);
    });

    fs.writeFileSync(
      path.join(waybackDir, 'missing_docx_events.json'),
      JSON.stringify(missingEvents, null, 2),
      'utf8'
    );
  } else {
    console.log(`\n🎉 GREAT NEWS! All ${docEvents.length} events from 8_13_2026.docx are ALREADY present in the repository database!`);
  }
}

function parseEventSegments(text, city, date, results) {
  // Split multiple event entries concatenated together in text
  // Delimited by time followed by next Venue Name
  const normalized = text.replace(/ – /g, ' - ').replace(/ — /g, ' - ');
  
  // Regex to split concatenated entries:
  // e.g. "49th State Brewery - Garden Grooves 5p-7pAnchorage Museum - Lunch 11:30a-1:30p"
  const entries = normalized.split(/(?<=\d{1,2}(?::\d{2})?[apmAPM]*(?:-\d{1,2}(?::\d{2})?[apmAPM]*|-Close|-|\?)?)(?=[A-Z0-9\u00C0-\u024F][A-Za-z0-9\s\'\.\&\/\#\+\,\(\)]*?\s*-\s*)/);

  for (const entry of entries) {
    const trimmed = entry.trim();
    if (!trimmed || !trimmed.includes(' - ')) continue;

    const parts = trimmed.split(' - ');
    if (parts.length < 2) continue;

    const venue = parts[0].trim();
    const rest = parts.slice(1).join(' - ').trim();

    const timeRegex = /\b(\d+(?::\d+)?(?:a|p)?\s*-\s*(?:\d+(?::\d+)?(?:a|p)?|\?|Close)(?:\s*(?:&|and)\s*\d+(?::\d+)?(?:a|p)?\s*-\s*(?:\d+(?::\d+)?(?:a|p)?|\?))?|\d+p|\d+a)\s*$/i;
    const timeMatch = rest.match(timeRegex);

    let title = rest;
    let time = "";
    if (timeMatch) {
      time = timeMatch[1].trim();
      title = rest.slice(0, rest.lastIndexOf(timeMatch[1])).trim();
      title = title.replace(/[-\s,]$/g, '').trim();
    }

    if (venue.length > 2 && title.length > 2) {
      const category = getCategory(title);
      const slug = slugify(`${title}-${venue}-${date}`);

      results.push({
        id: slug,
        title,
        venue,
        city,
        date,
        time,
        category,
        slug,
        ticketUrl: "",
        description: `${title} live at ${venue} in ${city}, Alaska.`
      });
    }
  }
}

run();
