import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'wayback_data');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

async function run() {
  console.log('Launching browser to scrape bands page from https://www.akconcerts.com/bands...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  console.log('Navigating to https://www.akconcerts.com/bands...');
  try {
    await page.goto('https://www.akconcerts.com/bands', { waitUntil: 'networkidle2', timeout: 60000 });
    await new Promise(r => setTimeout(r, 10000));
  } catch (err) {
    console.warn('Navigation notice:', err.message);
  }

  const html = await page.content();
  fs.writeFileSync(path.join(outDir, 'bands_page.html'), html);

  const bandData = await page.evaluate(() => {
    const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div[data-testid="richTextElement"], a'));
    const items = elements.map(el => {
      const href = el.tagName.toLowerCase() === 'a' ? el.getAttribute('href') : null;
      return {
        tag: el.tagName.toLowerCase(),
        text: el.textContent.trim(),
        href: href
      };
    }).filter(item => item.text.length > 0);

    const links = Array.from(document.querySelectorAll('a[href]')).map(a => ({
      text: a.textContent.trim(),
      href: a.getAttribute('href')
    })).filter(l => l.href && l.href.startsWith('http'));

    return {
      items,
      links,
      bodyHtml: document.body.innerHTML
    };
  });

  fs.writeFileSync(path.join(outDir, 'bands_data.json'), JSON.stringify(bandData, null, 2));
  console.log(`Scraped bands page successfully! Extracted ${bandData.links.length} total links.`);

  await browser.close();
}

run().catch(err => {
  console.error('Error running scrape_bands.js:', err);
  process.exit(1);
});
