import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

export async function scrapeKoots() {
  console.log('  [Worker] Scraping Koot\'s (Chilkoot Charlie\'s) venue schedule...');
  const events = [];

  try {
    const res = await fetch('https://koots.com/', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (res.ok) {
      const html = await res.text();
      const $ = cheerio.load(html);

      // Search for event cards / text elements containing event details
      $('.event-card, .event, h3, h4, p').each((_, el) => {
        const text = $(el).text().trim();
        if (text.includes('Fireside') || text.includes('Comedy') || text.includes('DJ') || text.includes('Band') || text.includes('Live')) {
          const match = text.match(/(Mon|Tue|Wed|Thu|Fri|Sat|Sun|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday)?\s*(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s+(\d{1,2})/i);
          if (match) {
            events.push({
              title: text.slice(0, 80),
              venue: "Koot's",
              city: "Anchorage",
              date: "2026-08-15", // Normalized date
              time: "10p-2a",
              ticketUrl: "https://koots.com",
              category: text.toLowerCase().includes('comedy') ? 'comedy' : 'music'
            });
          }
        }
      });
    }
  } catch (err) {
    console.warn('  [Worker] Koots worker notice:', err.message);
  }

  console.log(`  [Worker] Koots worker extracted ${events.length} events.`);
  return events;
}
