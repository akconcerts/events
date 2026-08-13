import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

/**
 * Showdown Alaska Event Scraper
 * Promoter site: https://www.showdownalaska.com/
 */
export async function scrapeShowdown() {
  console.log('  [Worker] Scraping Showdown Alaska (showdownalaska.com) schedule...');
  const events = [];

  try {
    const res = await fetch('https://www.showdownalaska.com/events?format=json', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (res.ok) {
      const data = await res.json();
      const items = data.upcoming || data.items || [];

      for (const item of items) {
        if (!item.title) continue;

        const dateStr = item.startDate ? new Date(item.startDate).toISOString().slice(0, 10) : '2026-08-15';
        let venueName = 'Williwaw Social';
        let cityName = 'Anchorage';

        if (item.location && item.location.addressTitle) {
          venueName = item.location.addressTitle;
        }
        if (item.location && item.location.addressLine2) {
          cityName = item.location.addressLine2;
        }

        events.push({
          title: item.title,
          venue: venueName,
          city: cityName,
          date: dateStr,
          time: '8p-12a',
          ticketUrl: item.fullUrl ? `https://www.showdownalaska.com${item.fullUrl}` : 'https://www.showdownalaska.com/events',
          category: detectCategory(item.title)
        });
      }
    }
  } catch (err) {
    console.warn('  [Worker] Showdown JSON API notice:', err.message);
  }

  // Fallback / Supplementary HTML Scraping
  try {
    const htmlRes = await fetch('https://www.showdownalaska.com/events', {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (htmlRes.ok) {
      const html = await htmlRes.text();
      const $ = cheerio.load(html);

      $('a').each((_, el) => {
        const href = $(el).attr('href') || '';
        const img = $(el).find('img');
        const imgSrc = img.attr('data-src') || img.attr('src') || '';
        const imgAlt = img.attr('alt') || '';

        if (href.includes('tixr.com') || href.includes('eventbrite.com')) {
          let title = imgAlt;
          if (!title && imgSrc) {
            const fileMatch = imgSrc.match(/\/([^/]+)\.(jpeg|jpg|png|webp)/i);
            if (fileMatch) {
              title = fileMatch[1].replace(/[-_]/g, ' ');
            }
          }

          if (title && title.length > 2 && !title.toLowerCase().includes('logo') && !title.toLowerCase().includes('screen shot')) {
            const cleanTitle = title.replace(/\b(jpeg|jpg|png|webp|enhanced|nr)\b/gi, '').trim();

            events.push({
              title: cleanTitle.toUpperCase(),
              venue: 'Williwaw Social',
              city: 'Anchorage',
              date: '2026-08-15',
              time: '8p-12a',
              ticketUrl: href,
              category: detectCategory(cleanTitle)
            });
          }
        }
      });
    }
  } catch (err) {
    console.warn('  [Worker] Showdown HTML scraping notice:', err.message);
  }

  console.log(`  [Worker] Showdown Alaska worker extracted ${events.length} events.`);
  return events;
}

function detectCategory(text) {
  const t = str(text).toLowerCase();
  if (t.includes('comedy') || t.includes('standup')) return 'comedy';
  if (t.includes('dance') || t.includes('disco') || t.includes('rave')) return 'dance';
  if (t.includes('fest') || t.includes('block party')) return 'festival';
  return 'music';
}

function str(val) {
  return String(val || '');
}
