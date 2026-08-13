import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

const bandUrls = [
  "https://www.akconcerts.com/36-crazyfists",
  "https://www.akconcerts.com/adam-patterson-and-the-heavy-hearts",
  "https://www.akconcerts.com/against-the-grain",
  "https://www.akconcerts.com/alaska-thunder-funk",
  "https://www.akconcerts.com/ava-earl",
  "https://www.akconcerts.com/becky-kotter",
  "https://www.akconcerts.com/ben-swann",
  "https://www.akconcerts.com/beyond-the-shak",
  "https://www.akconcerts.com/big-fat-buddha",
  "https://www.akconcerts.com/blackwater-railroad-company",
  "https://www.akconcerts.com/blue-voodoo-band",
  "https://www.akconcerts.com/boogie-shoes",
  "https://www.akconcerts.com/casey-smith-project",
  "https://www.akconcerts.com/chromies",
  "https://www.akconcerts.com/city-in-ashes",
  "https://www.akconcerts.com/cliff-and-ivy",
  "https://www.akconcerts.com/conway-seavey",
  "https://www.akconcerts.com/danger-money",
  "https://www.akconcerts.com/decepticide",
  "https://www.akconcerts.com/denali-cooks",
  "https://www.akconcerts.com/the-jephries",
  "https://www.akconcerts.com/john-budnik-band",
  "https://www.akconcerts.com/ken-peltier-band",
  "https://www.akconcerts.com/killbill-sax",
  "https://www.akconcerts.com/medium-build",
  "https://www.akconcerts.com/melissa-mitchell",
  "https://www.akconcerts.com/misandr",
  "https://www.akconcerts.com/the-modern-savage",
  "https://www.akconcerts.com/parker-longbough",
  "https://www.akconcerts.com/road-krill",
  "https://www.akconcerts.com/rogues-wenches",
  "https://www.akconcerts.com/sean-northover",
  "https://www.akconcerts.com/silhouette",
  "https://www.akconcerts.com/silhouettes",
  "https://www.akconcerts.com/spitshine",
  "https://www.akconcerts.com/sundog",
  "https://www.akconcerts.com/super-saturated-sugar-strings",
  "https://www.akconcerts.com/tanana-rafters",
  "https://www.akconcerts.com/devilwitch",
  "https://www.akconcerts.com/the-dirty-hands",
  "https://www.akconcerts.com/dj-blaque",
  "https://www.akconcerts.com/dj-covy",
  "https://www.akconcerts.com/dj-gre",
  "https://www.akconcerts.com/dj-just-adam",
  "https://www.akconcerts.com/djmilitant",
  "https://www.akconcerts.com/dj-spencer-lee",
  "https://www.akconcerts.com/emma-hill",
  "https://www.akconcerts.com/the-eternal-cowboys",
  "https://www.akconcerts.com/fiona-rose",
  "https://www.akconcerts.com/forest-that-never-sleeps",
  "https://www.akconcerts.com/thehallelujahjones",
  "https://www.akconcerts.com/harpdaddy-the-backcountry-mojo",
  "https://www.akconcerts.com/harpers-farce",
  "https://www.akconcerts.com/thehereticfoundation",
  "https://www.akconcerts.com/thehighpets",
  "https://www.akconcerts.com/hopesocialclub",
  "https://www.akconcerts.com/hwy9",
  "https://www.akconcerts.com/jared-woods",
  "https://www.akconcerts.com/termination-dust",
  "https://www.akconcerts.com/thera",
  "https://www.akconcerts.com/turquoise-boy",
  "https://www.akconcerts.com/ukelele-russ",
  "https://www.akconcerts.com/zen-trembles"
];

async function scrapeSingle(url) {
  const slug = url.split('/').pop();
  try {
    const res = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      },
      timeout: 10000
    });

    if (!res.ok) return { slug, url, error: res.statusText };
    const html = await res.text();
    const $ = cheerio.load(html);

    // Extract YouTube embed
    let youtubeId = null;
    $('iframe').each((_, el) => {
      const src = $(el).attr('src') || '';
      const match = src.match(/(?:embed\/|v=|\/)([a-zA-Z0-9_-]{11})/);
      if (match) youtubeId = match[1];
    });

    if (!youtubeId) {
      const ytMatch = html.match(/youtube\.com\/embed\/([a-zA-Z0-9_-]{11})/);
      if (ytMatch) youtubeId = ytMatch[1];
    }

    // Extract links
    const facebookUrl = $('a[href*="facebook.com"]').attr('href') || null;
    const spotifyUrl = $('a[href*="spotify.com"]').attr('href') || null;
    const appleUrl = $('a[href*="apple.com"]').attr('href') || null;
    const instagramUrl = $('a[href*="instagram.com"]').attr('href') || null;

    // Extract meta description or body paragraphs
    const metaDesc = $('meta[property="og:description"]').attr('content') || $('meta[name="description"]').attr('content') || '';
    const ogImage = $('meta[property="og:image"]').attr('content') || null;

    return {
      slug,
      url,
      bio: metaDesc.trim(),
      youtubeId,
      facebookUrl,
      spotifyUrl,
      appleUrl,
      instagramUrl,
      imageUrl: ogImage
    };
  } catch (err) {
    return { slug, url, error: err.message };
  }
}

async function main() {
  console.log(`Scraping ${bandUrls.length} band pages concurrently...`);
  const results = await Promise.all(bandUrls.map(scrapeSingle));

  fs.writeFileSync(
    path.join(process.cwd(), 'wayback_data', 'scraped_band_details_fast.json'),
    JSON.stringify(results, null, 2),
    'utf8'
  );
  console.log('🎉 Fast band detail scraping completed!');
}

main().catch(console.error);
