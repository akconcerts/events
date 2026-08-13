import fs from 'fs';
import path from 'path';

const VALID_CITIES = [
  'Anchorage', 'Fairbanks', 'Juneau', 'Eagle River', 'Girdwood', 'Homer', 'Hope', 'Kenai',
  'Ketchikan', 'Palmer', 'Seward', 'Soldotna', 'Talkeetna', 'Wasilla', 'Kodiak', 'Valdez',
  'Sitka', 'Petersburg', 'Wrangell', 'Utqiagvik', 'Barrow', 'Nom', 'Bethel', 'Kotzebue',
  'Cordova', 'Cooper Landing', 'Chiniak', 'Moose Pass', 'Willow', 'Ninilchik', 'Kasilof',
  'Delta Junction', 'Tok', 'Healy', 'Nenana', 'Sutton', 'Talkeetna'
];

const CATEGORY_KEYWORDS = {
  comedy: ['comedy', 'open mic comedy', 'stand-up', 'roast', 'improv', 'laugh'],
  dance: ['dance', 'line dancing', 'swing', 'tango', 'latin night', 'salsa', 'bachata', 'two-step', 'ballet', 'waltz', 'hip hop'],
  theatre: ['theatre', 'theater', 'play', 'musical', 'acting', 'drama', 'revue', 'recital'],
  festival: ['festival', 'fair', 'bazaar', 'market', 'open house', 'fest', 'expo', 'parade'],
  community: ['storytime', 'story time', 'toddler', 'library', 'trivia', 'bingo', 'run', 'pub run', 'book club', 'class', 'workshop', 'yappy hour', 'bird'],
  music: [] // default
};

function detectCategory(title, venue) {
  const text = (title + ' ' + venue).toLowerCase();
  for (const [cat, words] of Object.entries(CATEGORY_KEYWORDS)) {
    if (words.some(w => text.includes(w))) return cat;
  }
  return 'music';
}

function slugify(text) {
  return text.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}

async function main() {
  console.log('Reading doc extracted text...');
  const docText = fs.readFileSync('wayback_data/doc_extracted_text.txt', 'utf8');
  const existingEvents = JSON.parse(fs.readFileSync('events.json', 'utf8'));

  // Existing keys for fast lookup
  const existingSet = new Set(
    existingEvents.map(e => `${e.title.toLowerCase().trim()}|${e.venue.toLowerCase().trim()}|${e.date}`)
  );

  const lines = docText.split('\n');
  let currentCity = 'Anchorage';
  let currentDate = null;

  const parsedDocEvents = [];

  for (let i = 0; i < lines.length; i++) {
    let line = lines[i].trim();
    if (!line) continue;

    // Check if city header
    const matchedCity = VALID_CITIES.find(c => c.toLowerCase() === line.toLowerCase());
    if (matchedCity) {
      currentCity = matchedCity;
      continue;
    }

    // Check date pattern e.g. "Thursday August 13th" or "Friday August 14th"
    const dateMatch = line.match(/(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2})(st|nd|rd|th)?/i);
    
    if (dateMatch) {
      const monthStr = dateMatch[2];
      const dayStr = dateMatch[3].padStart(2, '0');
      // Year is 2026 based on document title 8_13_2026
      const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      const monthNum = String(monthNames.findIndex(m => m.toLowerCase() === monthStr.toLowerCase()) + 1).padStart(2, '0');
      currentDate = `2026-${monthNum}-${dayStr}`;

      // Remove the date prefix from line if there are event items attached to it
      line = line.replace(dateMatch[0], '').trim();
      if (!line) continue;
    }

    if (!currentDate) continue;

    // Parse event items separated by dashes or tabs e.g. "49th State Brewery – Garden Grooves: Music in the Beer Garden 5p-7p"
    // Multiple items can be concatenated in a single paragraph
    // Split by time patterns e.g. "5p-7p", "8p-12a", "10p-Close", "11:30a-1:30p", "9:30p-12a"
    const itemMatches = line.split(/(?<=[0-9a-z])(?=[A-Z0-9\u00C0-\u024F\u4E00-\u9FFF\p{L}\S]+[–\-])/u);

    // Let's refine splitting by " – " or venue dashes
    const segments = line.split(/(?<=\d{1,2}(?::\d{2})?[apmAPM]*(?:-\d{1,2}(?::\d{2})?[apmAPM]*|-Close|-?))(.*?–.*?)/);
    
    // Simpler regex split for venue – title time
    // Matches: Venue Name – Event Title (optional time)
    const eventRegex = /([A-Za-z0-9\s'\.\&\/\#\-\,\+]+?)\s*[–\-]\s*(.*?)(?=(\s+\d{1,2}(?::\d{2})?[apmAPM]*(?:-\d{1,2}(?::\d{2})?[apmAPM]*|-Close)?|$))/g;
  }

  console.log('Finished initial inspection.');
}

main();
