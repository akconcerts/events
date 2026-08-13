import fs from 'fs';
import path from 'path';

const waybackDir = path.join(process.cwd(), 'wayback_data');
const liveDataPath = path.join(waybackDir, 'live_data.json');

const monthMap = {
  january: '01', february: '02', march: '03', april: '04',
  may: '05', june: '06', july: '07', august: '08',
  september: '09', october: '10', november: '11', december: '12'
};

const cityMap = {
  'anchorag': 'Anchorage'
};

// Available categories: 'music' | 'comedy' | 'dance' | 'theatre' | 'community' | 'festival'
function getCategory(title) {
  const t = title.toLowerCase();
  if (t.includes('comedy') || t.includes('standup') || t.includes('joke') || t.includes('scared scriptless') || t.includes('drag show')) return 'comedy';
  if (t.includes('dance') || t.includes('swing') || t.includes('salsa') || t.includes('rose garden') || t.includes('bachata') || t.includes('tango') || t.includes('square dance') || t.includes('two-step') || t.includes('two step')) return 'dance';
  if (t.includes('theatre') || t.includes('theater') || t.includes('musical') || t.includes('broadway') || t.includes('opera') || t.includes('play')) return 'theatre';
  if (t.includes('festival') || t.includes('fest') || t.includes('fair') || t.includes('regatta')) return 'festival';
  if (t.includes('music') || t.includes('concert') || t.includes('band') || t.includes('live music') || t.includes('karaoke') || t.includes('open mic') || t.includes('jam') || t.includes('blues') || t.includes('jazz') || t.includes('piano') || t.includes('sing') || t.includes('dj') || t.includes('orchestra') || t.includes('guitar') || t.includes('accoustic') || t.includes('acoustic') || t.includes('song circle') || t.includes('songwriters')) return 'music';
  if (t.includes('storytime') || t.includes('story time') || t.includes('library') || t.includes('marathon') || t.includes('5k') || t.includes('10k') || t.includes('run') || t.includes('market') || t.includes('community') || t.includes('class') || t.includes('meetup') || t.includes('reading program') || t.includes('story') || t.includes('crafternoon') || t.includes('baseball') || t.includes('obstable') || t.includes('golf')) return 'community';
  return 'music'; // default
}

function normalizeSpaces(str) {
  return str.replace(/\u00a0/g, ' ').replace(/\u200b/g, '').replace(/\s+/g, ' ').trim();
}

function parseDateLine(line) {
  // Regex matches: Saturday July 18th
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

function run() {
  if (!fs.existsSync(liveDataPath)) {
    console.error(`Scraped file not found at ${liveDataPath}. Run scrape_live.js first.`);
    process.exit(1);
  }

  const rawData = JSON.parse(fs.readFileSync(liveDataPath, 'utf8'));

  // Find the huge text block containing events
  const largeTextObj = rawData.find(item => item.text.includes("What's Happening in Alaska") && item.text.length > 1000);
  if (!largeTextObj) {
    console.error("Could not find the main events text block in live_data.json.");
    process.exit(1);
  }

  // Extract all <a> tags with non-empty href
  const links = rawData.filter(item => item.tag === 'a' && item.href && item.text.trim().length > 3);
  console.log(`Found ${links.length} total links to match events with.`);

  const rawText = largeTextObj.text;
  const lines = rawText.split('\n').map(normalizeSpaces).filter(l => l.length > 0);

  const parsedEvents = [];
  let currentCity = 'Anchorage'; // Default to Anchorage for the first block
  let currentDate = null;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    // Skip helper lines
    if (line.includes("What's Happening in Alaska") || line.includes("Next week's schedule")) {
      continue;
    }

    // Try parsing date line for Anchorage (e.g. Saturday July 18th)
    const dateParsed = parseDateLine(line);
    if (dateParsed) {
      currentDate = dateParsed;
      continue;
    }

    // Check if other cities format: M/D (e.g. 7/18) followed by details
    const otherCityEventMatch = line.match(/^(\d+)\/(\d+)\s+(.+)$/);
    if (otherCityEventMatch) {
      const month = otherCityEventMatch[1].padStart(2, '0');
      const day = otherCityEventMatch[2].padStart(2, '0');
      const eventDetails = otherCityEventMatch[3].trim();
      const date = `2026-${month}-${day}`;

      parseEventLine(eventDetails, currentCity, date);
      continue;
    }

    // Check if it's a known city
    const VALID_CITIES = new Set([
      'anchorage', 'anchorag', 'barrow', 'bethel', 'big lake', 'chugiak', 'cooper landing',
      'cordova', 'eagle river', 'ester', 'fairbanks', 'girdwood', 'haines', 'homer', 'hope',
      'juneau', 'kasilof', 'kenai', 'ketchikan', 'kodiak', 'mccarthy', 'moose pass', 'ninilchik',
      'north pole', 'palmer', 'seldovia', 'seward', 'sitka', 'skagway', 'soldotna', 'sterling',
      'talkeetna', 'tok', 'valdez', 'wasilla', 'willow'
    ]);
    const normalizedLine = line.toLowerCase().trim();
    if (VALID_CITIES.has(normalizedLine)) {
      let city = line;
      if (cityMap[normalizedLine]) {
        city = cityMap[normalizedLine];
      }
      currentCity = city;
      console.log(`Switched current city to: ${currentCity}`);
      continue;
    }

    const hasSeparator = line.includes(' – ') || line.includes(' - ') || line.includes(' -') || line.includes('- ');

    // If it's an event line in Anchorage (currentCity === 'Anchorage' and we have currentDate)
    if (currentCity === 'Anchorage' && currentDate && hasSeparator) {
      parseEventLine(line, currentCity, currentDate);
    } else {
      console.log(`Skipping line (could not classify): "${line}"`);
    }
  }

  function parseEventLine(eventLine, city, date) {
    // Split by separator
    // Wix uses different dash characters. Let's normalize it to a standard hyphen with spaces or en-dash.
    const normalizedLine = eventLine.replace(/ – /g, ' - ').replace(/ - /g, ' - ').replace(/ — /g, ' - ');
    const parts = normalizedLine.split(' - ');
    if (parts.length < 2) {
      console.log(`  -> Warning: Could not parse event line parts: "${eventLine}"`);
      return;
    }

    const venue = parts[0].trim();
    const rest = parts.slice(1).join(' - ').trim();

    // Extract time from the end of "rest"
    // Time patterns: 5p-7p, 8p-?, 9:30p-1a, 10p, 11a-?, 4p-5p & 6:30p-7:30p, etc.
    const timeRegex = /\b(\d+(?::\d+)?(?:a|p)?\s*-\s*(?:\d+(?::\d+)?(?:a|p)?|\?)(?:\s*(?:&|and)\s*\d+(?::\d+)?(?:a|p)?\s*-\s*(?:\d+(?::\d+)?(?:a|p)?|\?))?|\d+p|\d+a)\s*$/i;
    const timeMatch = rest.match(timeRegex);

    let title = rest;
    let time = "";
    if (timeMatch) {
      time = timeMatch[1].trim();
      title = rest.slice(0, rest.lastIndexOf(timeMatch[1])).trim();
      // Remove trailing space, dash or comma from title
      title = title.replace(/[-\s,]$/g, '').trim();
    }

    // Categorize
    const category = getCategory(title);

    // Find ticket link
    let ticketUrl = "";
    // Find a link whose text is a substring of the title, or matches the title, or is close
    const matchedLink = links.find(l => {
      const linkText = l.text.toLowerCase().trim();
      const titleLower = title.toLowerCase().trim();
      return titleLower === linkText || titleLower.includes(linkText) || linkText.includes(titleLower);
    });

    if (matchedLink) {
      ticketUrl = matchedLink.href;
    }

    parsedEvents.push({
      title,
      venue,
      city,
      date,
      time,
      ticketUrl,
      category
    });
  }

  console.log(`Parsed ${parsedEvents.length} events successfully.`);

  // Write to parsed_events.json
  fs.writeFileSync(
    path.join(waybackDir, 'parsed_events.json'),
    JSON.stringify(parsedEvents, null, 2)
  );
  console.log('Saved parsed events to wayback_data/parsed_events.json');
}

run();
