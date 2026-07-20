import fs from 'fs';
import path from 'path';

const waybackDir = path.join(process.cwd(), 'wayback_data');
const outputParsedPath = path.join(waybackDir, 'wayback_parsed_events.json');

const monthMap = {
  january: '01', february: '02', march: '03', april: '04',
  may: '05', june: '06', july: '07', august: '08',
  september: '09', october: '10', november: '11', december: '12'
};

const cityMap = {
  'anchorag': 'Anchorage'
};

const VALID_CITIES = new Set([
  'anchorage', 'anchorag', 'barrow', 'bethel', 'big lake', 'chugiak', 'cooper landing',
  'cordova', 'eagle river', 'ester', 'fairbanks', 'girdwood', 'haines', 'homer', 'hope',
  'juneau', 'kenai', 'ketchikan', 'kodiak', 'mccarthy', 'north pole', 'palmer',
  'seldovia', 'seward', 'skagway', 'soldotna', 'sterling', 'talkeetna', 'wasilla',
  'valdez', 'sitka'
]);

const UI_STRINGS = new Set([
  'top of page', 'ak concerts', 'playing soon', 'email newsletter',
  'bands', 'venues', 'learn', 'support ak concerts', 'more',
  'click here to get the calendar & newsletter emailed to you each week.',
  'click here to get the calender & newsletter emailed to you each week.',
  'home', 'contact', 'about', 'subscribe', 'next week\'s schedule & newsletter comes out every wednesday!'
]);

function getCategory(title) {
  const t = title.toLowerCase();
  if (t.includes('comedy') || t.includes('standup') || t.includes('joke') || t.includes('scared scriptless') || t.includes('drag show')) return 'comedy';
  if (t.includes('dance') || t.includes('swing') || t.includes('salsa') || t.includes('rose garden') || t.includes('bachata') || t.includes('tango') || t.includes('square dance') || t.includes('two-step') || t.includes('two step')) return 'dance';
  if (t.includes('theatre') || t.includes('theater') || t.includes('musical') || t.includes('broadway') || t.includes('opera') || t.includes('play')) return 'theatre';
  if (t.includes('festival') || t.includes('fest') || t.includes('fair') || t.includes('regatta')) return 'festival';
  if (t.includes('music') || t.includes('concert') || t.includes('band') || t.includes('live music') || t.includes('karaoke') || t.includes('open mic') || t.includes('jam') || t.includes('blues') || t.includes('jazz') || t.includes('piano') || t.includes('sing') || t.includes('dj') || t.includes('orchestra') || t.includes('guitar') || t.includes('accoustic') || t.includes('acoustic') || t.includes('song circle') || t.includes('songwriters')) return 'music';
  if (t.includes('storytime') || t.includes('story time') || t.includes('library') || t.includes('marathon') || t.includes('5k') || t.includes('10k') || t.includes('run') || t.includes('market') || t.includes('community') || t.includes('class') || t.includes('meetup') || t.includes('reading program') || t.includes('story') || t.includes('crafternoon') || t.includes('baseball') || t.includes('obstable') || t.includes('golf')) return 'community';
  return 'music';
}

function normalizeSpaces(str) {
  return str.replace(/\u00a0/g, ' ').replace(/\u200b/g, '').replace(/\s+/g, ' ').trim();
}

function getEventYear(snapshotTimestamp, dateMonthNum) {
  const snapshotYear = parseInt(snapshotTimestamp.slice(0, 4), 10);
  const snapshotMonth = parseInt(snapshotTimestamp.slice(4, 6), 10);
  
  // Dec/Jan boundary adjustments
  if (snapshotMonth === 1 && dateMonthNum === 12) {
    return snapshotYear - 1;
  }
  if (snapshotMonth === 12 && dateMonthNum === 1) {
    return snapshotYear + 1;
  }
  return snapshotYear;
}

function parseDateLine(line, timestamp) {
  const match = line.match(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d+)(?:st|nd|rd|th)?/i);
  if (match) {
    const monthName = match[1].toLowerCase();
    const day = match[2].padStart(2, '0');
    const month = monthMap[monthName];
    const monthNum = parseInt(month, 10);
    const eventYear = getEventYear(timestamp, monthNum);
    return `${eventYear}-${month}-${day}`;
  }
  return null;
}

function parseEventLine(eventLine, city, date) {
  const normalizedLine = eventLine.replace(/ – /g, ' - ').replace(/ - /g, ' - ').replace(/ — /g, ' - ');
  const parts = normalizedLine.split(' - ');
  if (parts.length < 2) {
    return null;
  }

  const venue = parts[0].trim();
  const rest = parts.slice(1).join(' - ').trim();

  const timeRegex = /\b(\d+(?::\d+)?(?:a|p)?\s*-\s*(?:\d+(?::\d+)?(?:a|p)?|\?)(?:\s*(?:&|and)\s*\d+(?::\d+)?(?:a|p)?\s*-\s*(?:\d+(?::\d+)?(?:a|p)?|\?))?|\d+p|\d+a)\s*$/i;
  const timeMatch = rest.match(timeRegex);

  let title = rest;
  let time = "";
  if (timeMatch) {
    time = timeMatch[1].trim();
    title = rest.slice(0, rest.lastIndexOf(timeMatch[1])).trim();
    title = title.replace(/[-\s,]$/g, '').trim();
  }

  const category = getCategory(title);

  return {
    title,
    venue,
    city,
    date,
    time,
    ticketUrl: "",
    category
  };
}

function run() {
  const files = fs.readdirSync(waybackDir).filter(f => /^\d{14}\.json$/.test(f));
  console.log(`Found ${files.length} wayback snapshot JSON files.`);

  const allEvents = [];

  for (const file of files) {
    const filePath = path.join(waybackDir, file);
    const fileData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    const timestamp = fileData.timestamp;
    const textArray = fileData.text || [];

    if (textArray.length === 0) {
      continue;
    }

    // Split any multi-line text elements by newline
    const lines = [];
    for (const text of textArray) {
      const splitLines = text.split('\n');
      for (const splitLine of splitLines) {
        lines.push(normalizeSpaces(splitLine));
      }
    }

    let currentCity = 'Anchorage';
    let currentDate = null;
    let fileEventCount = 0;

    for (const line of lines) {
      // Skip helper UI lines
      if (UI_STRINGS.has(line.toLowerCase())) {
        continue;
      }

      // Check date header (Anchorage style: e.g. Saturday July 18th)
      const dateParsed = parseDateLine(line, timestamp);
      if (dateParsed) {
        currentDate = dateParsed;
        continue;
      }

      // Check other cities format: M/D (e.g. 7/18) followed by details
      const otherCityEventMatch = line.match(/^(\d+)\/(\d+)\s+(.+)$/);
      if (otherCityEventMatch) {
        const monthNum = parseInt(otherCityEventMatch[1], 10);
        const month = String(monthNum).padStart(2, '0');
        const day = otherCityEventMatch[2].padStart(2, '0');
        const eventDetails = otherCityEventMatch[3].trim();
        const eventYear = getEventYear(timestamp, monthNum);
        const date = `${eventYear}-${month}-${day}`;

        const parsed = parseEventLine(eventDetails, currentCity, date);
        if (parsed) {
          allEvents.push(parsed);
          fileEventCount++;
        }
        continue;
      }

      // Check city switch
      const normalizedLine = line.toLowerCase().trim();
      if (VALID_CITIES.has(normalizedLine)) {
        let city = line;
        if (cityMap[normalizedLine]) {
          city = cityMap[normalizedLine];
        }
        currentCity = city;
        continue;
      }

      // If it's an event line in Anchorage (currentCity === 'Anchorage' and we have currentDate)
      const hasSeparator = line.includes(' – ') || line.includes(' - ') || line.includes(' -') || line.includes('- ');
      if (currentCity === 'Anchorage' && currentDate && hasSeparator) {
        const parsed = parseEventLine(line, currentCity, currentDate);
        if (parsed) {
          allEvents.push(parsed);
          fileEventCount++;
        }
      }
    }

    console.log(`  Processed ${file}: parsed ${fileEventCount} events.`);
  }

  console.log(`Parsed a total of ${allEvents.length} historical events from all snapshots.`);

  // Write results
  fs.writeFileSync(outputParsedPath, JSON.stringify(allEvents, null, 2), 'utf8');
  console.log(`Saved wayback parsed events to ${outputParsedPath}`);
}

run();
