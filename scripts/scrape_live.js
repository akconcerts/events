import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'wayback_data');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

async function run() {
  console.log('Launching browser to scrape live site...');
  const browser = await puppeteer.launch({ headless: true });
  const page = await browser.newPage();

  // Set user agent to make it look like a regular browser
  await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36');

  console.log('Navigating to https://www.akconcerts.com/...');
  await page.goto('https://www.akconcerts.com/', { waitUntil: 'networkidle2', timeout: 60000 });

  console.log('Waiting 105 seconds for Wix dynamic content to load...');
  await new Promise(r => setTimeout(r, 10000));

  console.log('Extracting page source and text fragments...');
  const html = await page.content();
  fs.writeFileSync(path.join(outDir, 'live_page.html'), html);

  const data = await page.evaluate(() => {
    // Extract all text elements
    const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div[data-testid="richTextElement"], a'));
    const textFragments = elements.map(el => {
      const href = el.tagName.toLowerCase() === 'a' ? el.getAttribute('href') : null;
      return {
        tag: el.tagName.toLowerCase(),
        text: el.textContent.trim(),
        href: href
      };
    }).filter(item => item.text.length > 0);

    return {
      textFragments,
      bodyHtml: document.body.innerHTML
    };
  });

  fs.writeFileSync(path.join(outDir, 'live_data.json'), JSON.stringify(data.textFragments, null, 2));
  fs.writeFileSync(path.join(outDir, 'live_body.html'), data.bodyHtml);

  console.log('Scraped live site successfully! Data saved to wayback_data/live_data.json and wayback_data/live_body.html');
  await browser.close();
}

run().catch(err => {
  console.error('Error running scrape_live.js:', err);
  process.exit(1);
});
