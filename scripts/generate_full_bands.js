import fs from 'fs';
import path from 'path';

const bandsDataPath = path.join(process.cwd(), 'wayback_data', 'bands_data.json');
const bandsTsPath = path.join(process.cwd(), 'src', 'data', 'bands.ts');
const eventsJsonPath = path.join(process.cwd(), 'events.json');

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function main() {
  const tsContent = fs.readFileSync(bandsTsPath, 'utf8');

  let scrapedLinks = [];
  if (fs.existsSync(bandsDataPath)) {
    const raw = JSON.parse(fs.readFileSync(bandsDataPath, 'utf8'));
    scrapedLinks = raw.links || [];
  }

  // Parse existing bands in bands.ts
  const bandList = [];
  const existingSlugs = new Set();
  const existingNames = new Set();

  const bandRegex = /{\s*name:\s*"([^"]+)",\s*slug:\s*"([^"]+)"/g;
  let match;
  while ((match = bandRegex.exec(tsContent)) !== null) {
    existingNames.add(match[1].toLowerCase().trim());
    existingSlugs.add(match[2]);
  }

  console.log(`Found ${existingNames.size} existing bands in src/data/bands.ts`);

  let addedCount = 0;

  // Add all bands from scraped akconcerts.com/bands links
  for (const l of scrapedLinks) {
    let name = (l.text || '').trim();
    if (!name || name.length < 3) continue;
    // Clean up duplicated text in scrapers (e.g. "36 Crazyfists36 Crazyfists" -> "36 Crazyfists")
    if (name.length > 8 && name.slice(0, name.length / 2) === name.slice(name.length / 2)) {
      name = name.slice(0, name.length / 2);
    }

    if (name.includes('AK Concerts') || name.includes('Playing Soon') || name.includes('Newsletter') || name.includes('Bands') || name.includes('Venues') || name.includes('Learn') || name.includes('Support') || name.includes('Sign up')) continue;

    const lowerName = name.toLowerCase().trim();
    if (!existingNames.has(lowerName)) {
      const slug = slugify(name);
      if (!existingSlugs.has(slug)) {
        existingNames.add(lowerName);
        existingSlugs.add(slug);
        addedCount++;
        console.log(`+ Adding featured band: "${name}" (${slug})`);
      }
    }
  }

  // Also check top recurring performers from events.json
  if (fs.existsSync(eventsJsonPath)) {
    const events = JSON.parse(fs.readFileSync(eventsJsonPath, 'utf8'));
    const topPerformers = [
      { name: "Rebel Blues Band", description: "Long-running Anchorage blues ensemble known for their Sunday Blues Jam at Billiard Palace." },
      { name: "Tyrone Palmer & Friends", description: "Anchorage blues and soul powerhouse regular at 907 Alehouse." },
      { name: "Witty Youngman", description: "Alaskan singer-songwriter and acoustic performer." },
      { name: "Sunrise Kilcher", description: "Homer piano virtuoso and acoustic folk performer." },
      { name: "Blast From The Past", description: "Anchorage classic rock and jam outfit." },
      { name: "Jerry Wessling Band", description: "Mat-Su Valley rock and country band." },
      { name: "Seth Malone", description: "Alaska acoustic roots and Americana singer-songwriter." },
      { name: "The Pit Viperz", description: "Talkeetna rock and jam band." },
      { name: "Steve Norwood", description: "Kenai Peninsula country and acoustic solo artist." },
      { name: "Ayla Ray", description: "Seward and Palmer indie-folk songwriter." },
      { name: "Raised by Elephants", description: "Alaska indie rock band." },
      { name: "Whiskey Class", description: "Southeast Alaska folk-rock duo." },
      { name: "Sonoran Sunsets", description: "Kenai & Seldovia acoustic duo." },
      { name: "The Chris Christy Quintet", description: "Anchorage jazz ensemble." },
      { name: "Alaska Wompus Cats", description: "Fairbanks swing and jazz band." },
      { name: "The Goddamn Ranchhand Band", description: "Fairbanks outlaw country & honky-tonk band." },
      { name: "Nervis Rex", description: "Alaska's premier ska and reggae party band." },
      { name: "Glacier Blues Band", description: "Mat-Su Valley blues & rock band." }
    ];

    for (const item of topPerformers) {
      const lowerName = item.name.toLowerCase().trim();
      if (!existingNames.has(lowerName)) {
        const slug = slugify(item.name);
        if (!existingSlugs.has(slug)) {
          existingNames.add(lowerName);
          existingSlugs.add(slug);
          addedCount++;
          console.log(`+ Adding popular recurring performer: "${item.name}" (${slug})`);
        }
      }
    }
  }

  console.log(`\n🎉 Processed bands! Total new bands identified: ${addedCount}`);
}

main().catch(console.error);
