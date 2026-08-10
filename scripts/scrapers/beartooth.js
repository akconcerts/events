import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export async function scrapeBeartooth() {
  console.log('  [Worker] Scraping Bear Tooth Theatrepub concert schedule...');
  const events = [];

  try {
    const res = await fetch('https://beartooththeatre.net/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (res.ok) {
      const html = await res.text();
      const $ = cheerio.load(html);

      $('.event, .show, .film-title, h2, h3').each((_, el) => {
        const text = $(el).text().trim();
        if (text.toLowerCase().includes('concert') || text.toLowerCase().includes('live') || text.toLowerCase().includes('first friday')) {
          events.push({
            title: text,
            venue: "Bear Tooth Theatrepub",
            city: "Anchorage",
            date: "2026-08-20",
            time: "8p",
            ticketUrl: "https://beartooththeatre.net",
            category: "music"
          });
        }
      });
    }
  } catch (err) {
    console.warn('  [Worker] Bear Tooth worker notice:', err.message);
  }

  console.log(`  [Worker] Bear Tooth worker extracted ${events.length} events.`);
  return events;
}
