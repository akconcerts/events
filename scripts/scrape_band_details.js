import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'wayback_data', 'bands');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

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

async function main() {
  console.log(`Launching Puppeteer to scrape details for ${bandUrls.length} band pages...`);
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  const scrapedDetails = [];

  for (let i = 0; i < bandUrls.length; i++) {
    const url = bandUrls[i];
    const slug = url.split('/').pop();
    console.log(`[${i + 1}/${bandUrls.length}] Scraping ${slug} (${url})...`);

    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      await new Promise(r => setTimeout(r, 2500));

      const details = await page.evaluate(() => {
        // Extract paragraph texts
        const paragraphs = Array.from(document.querySelectorAll('p, div[data-testid="richTextElement"]'))
          .map(p => p.textContent.trim())
          .filter(t => t.length > 30 && !t.includes('Click HERE') && !t.includes('What\'s Happening') && !t.includes('Copyright'));

        // Extract YouTube embeds
        const iframes = Array.from(document.querySelectorAll('iframe'))
          .map(f => f.getAttribute('src') || '')
          .filter(src => src.includes('youtube.com') || src.includes('youtu.be'));

        let youtubeId = null;
        if (iframes.length > 0) {
          const match = iframes[0].match(/(?:embed\/|v=|\/)([a-zA-Z0-9_-]{11})/);
          if (match) youtubeId = match[1];
        }

        // Extract external links (Facebook, Spotify, Bandcamp, Website)
        const links = Array.from(document.querySelectorAll('a[href]'))
          .map(a => a.getAttribute('href') || '')
          .filter(h => h.startsWith('http'));

        const facebookUrl = links.find(l => l.includes('facebook.com'));
        const spotifyUrl = links.find(l => l.includes('spotify.com'));
        const appleUrl = links.find(l => l.includes('apple.com'));
        const instagramUrl = links.find(l => l.includes('instagram.com'));

        // Extract image
        const images = Array.from(document.querySelectorAll('img'))
          .map(img => img.getAttribute('src') || '')
          .filter(src => src.includes('static.wixstatic.com') || src.includes('images'));

        return {
          bio: paragraphs.join('\n\n'),
          youtubeId,
          facebookUrl,
          spotifyUrl,
          appleUrl,
          instagramUrl,
          imageUrl: images[0] || null
        };
      });

      scrapedDetails.push({
        slug,
        url,
        ...details
      });

    } catch (err) {
      console.warn(`  Notice scraping ${slug}: ${err.message}`);
    }
  }

  fs.writeFileSync(path.join(process.cwd(), 'wayback_data', 'scraped_band_details.json'), JSON.stringify(scrapedDetails, null, 2), 'utf8');
  console.log(`\n🎉 Scraped all band details! Saved to wayback_data/scraped_band_details.json`);

  await browser.close();
}

main().catch(console.error);
