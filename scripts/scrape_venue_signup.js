import fetch from 'node-fetch';
import * as cheerio from 'cheerio';
import fs from 'fs';
import path from 'path';

async function main() {
  console.log('Scraping https://www.akconcerts.com/venue-pages...');
  try {
    const res = await fetch('https://www.akconcerts.com/venue-pages', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (res.ok) {
      const html = await res.text();
      const $ = cheerio.load(html);

      const title = $('title').text();
      const text = $('body').text().replace(/\s+/g, ' ').trim();

      const paragraphs = [];
      $('p, h1, h2, h3, h4, li').each((_, el) => {
        const t = $(el).text().trim();
        if (t.length > 10) paragraphs.push(t);
      });

      const data = {
        title,
        paragraphs,
        rawText: text,
        html
      };

      fs.writeFileSync(
        path.join(process.cwd(), 'wayback_data', 'venue_pages_scraped.json'),
        JSON.stringify(data, null, 2),
        'utf8'
      );
      console.log('Successfully scraped venue-pages!');
    } else {
      console.warn('HTTP error:', res.status, res.statusText);
    }
  } catch (err) {
    console.error('Error scraping venue-pages:', err.message);
  }
}

main();
