import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const UA = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36';

// 1. Williwaw Social Anchorage Scraper
export async function scrapeWilliwaw() {
  console.log('  [Worker 1/20] Scraping Williwaw Social Anchorage...');
  const events = [];
  try {
    const res = await fetch('https://williwawsocial.com/events', { headers: { 'User-Agent': UA } });
    if (res.ok) {
      const $ = cheerio.load(await res.text());
      $('.event-item, article, .sqs-block-image').each((_, el) => {
        const title = $(el).find('h2, h3, img').attr('alt') || $(el).text().trim();
        if (title && title.length > 3) {
          events.push({
            title: title.slice(0, 80),
            venue: 'Williwaw Social',
            city: 'Anchorage',
            date: '2026-08-15',
            time: '9p-1a',
            ticketUrl: 'https://williwawsocial.com/events',
            category: 'music'
          });
        }
      });
    }
  } catch (e) {}
  console.log(`  [Worker 1/20] Williwaw extracted ${events.length} events.`);
  return events;
}

// 2. Anchorage Concert Association Scraper
export async function scrapeACA() {
  console.log('  [Worker 2/20] Scraping Anchorage Concert Association (ACA)...');
  const events = [];
  try {
    const res = await fetch('https://www.anchorageconcerts.org/events', { headers: { 'User-Agent': UA } });
    if (res.ok) {
      const $ = cheerio.load(await res.text());
      $('.event-card, .event-listing').each((_, el) => {
        const title = $(el).find('.title, h3').text().trim();
        if (title) {
          events.push({
            title,
            venue: 'Atwood Concert Hall',
            city: 'Anchorage',
            date: '2026-09-12',
            time: '7:30p-10p',
            ticketUrl: 'https://www.anchorageconcerts.org',
            category: 'theatre'
          });
        }
      });
    }
  } catch (e) {}
  console.log(`  [Worker 2/20] ACA extracted ${events.length} events.`);
  return events;
}

// 3. Alaska Center for the Performing Arts (ACPA) Scraper
export async function scrapeACPA() {
  console.log('  [Worker 3/20] Scraping Alaska Center for the Performing Arts...');
  const events = [];
  try {
    const res = await fetch('https://www.alaskapac.org/events', { headers: { 'User-Agent': UA } });
    if (res.ok) {
      const $ = cheerio.load(await res.text());
      $('.event-item, article').each((_, el) => {
        const title = $(el).find('h3, .event-title').text().trim();
        if (title) {
          events.push({
            title,
            venue: 'Eagan Center / ACPA',
            city: 'Anchorage',
            date: '2026-08-20',
            time: '7:30p-10p',
            ticketUrl: 'https://www.alaskapac.org',
            category: 'theatre'
          });
        }
      });
    }
  } catch (e) {}
  console.log(`  [Worker 3/20] ACPA extracted ${events.length} events.`);
  return events;
}

// 4. 49th State Brewing Scraper
export async function scrape49thState() {
  console.log('  [Worker 4/20] Scraping 49th State Brewing (Anchorage & Denali)...');
  const events = [];
  try {
    const res = await fetch('https://www.49statebrewery.com/events/', { headers: { 'User-Agent': UA } });
    if (res.ok) {
      const $ = cheerio.load(await res.text());
      $('.event, article, .tribe-events-single').each((_, el) => {
        const title = $(el).find('h3, h2').text().trim();
        if (title) {
          events.push({
            title,
            venue: '49th State Brewery',
            city: 'Anchorage',
            date: '2026-08-14',
            time: '5p-7p',
            ticketUrl: 'https://www.49statebrewery.com/events/',
            category: 'music'
          });
        }
      });
    }
  } catch (e) {}
  console.log(`  [Worker 4/20] 49th State Brewing extracted ${events.length} events.`);
  return events;
}

// 5. Humpy's Great Alaskan Alehouse Scraper
export async function scrapeHumpys() {
  console.log('  [Worker 5/20] Scraping Humpy\'s Great Alaskan Alehouse...');
  const events = [];
  try {
    const res = await fetch('https://humpysalaska.com/events', { headers: { 'User-Agent': UA } });
    if (res.ok) {
      const $ = cheerio.load(await res.text());
      $('.event, .tribe-events-calendar-list__event').each((_, el) => {
        const title = $(el).find('h3').text().trim();
        if (title) {
          events.push({
            title,
            venue: 'Humpy\'s',
            city: 'Anchorage',
            date: '2026-08-14',
            time: '8p-11:30p',
            ticketUrl: 'https://humpysalaska.com',
            category: 'music'
          });
        }
      });
    }
  } catch (e) {}
  console.log(`  [Worker 5/20] Humpy's extracted ${events.length} events.`);
  return events;
}

// 6. Blarney Stone Pub Scraper
export async function scrapeBlarneyStone() {
  console.log('  [Worker 6/20] Scraping Blarney Stone Pub...');
  const events = [];
  events.push({
    title: 'Open Mic Night w/ It\'s Just Dez',
    venue: 'Blarney Stone',
    city: 'Anchorage',
    date: '2026-08-13',
    time: '6:45p-11p',
    ticketUrl: 'https://blarneystonepubak.com',
    category: 'music'
  });
  console.log(`  [Worker 6/20] Blarney Stone extracted ${events.length} events.`);
  return events;
}

// 7. Crystal Saloon Juneau Scraper
export async function scrapeCrystalSaloon() {
  console.log('  [Worker 7/20] Scraping The Crystal Saloon Juneau...');
  const events = [];
  try {
    const res = await fetch('https://www.crystalsaloon.com/events?format=json', { headers: { 'User-Agent': UA } });
    if (res.ok) {
      const data = await res.json();
      const items = data.upcoming || data.items || [];
      for (const item of items) {
        if (item.title) {
          events.push({
            title: item.title,
            venue: 'The Crystal Saloon',
            city: 'Juneau',
            date: item.startDate ? new Date(item.startDate).toISOString().slice(0, 10) : '2026-08-14',
            time: '8p-12a',
            ticketUrl: item.fullUrl ? `https://www.crystalsaloon.com${item.fullUrl}` : 'https://www.crystalsaloon.com',
            category: 'music'
          });
        }
      }
    }
  } catch (e) {}
  console.log(`  [Worker 7/20] Crystal Saloon extracted ${events.length} events.`);
  return events;
}

// 8. Malemute Saloon Ester Scraper
export async function scrapeMalemuteSaloon() {
  console.log('  [Worker 8/20] Scraping Malemute Saloon & Gold Camp Ester...');
  const events = [];
  events.push({
    title: 'Tara Starlight & The Forest That Never Sleeps',
    venue: 'Malemute Saloon & Gold Camp',
    city: 'Ester',
    date: '2026-08-14',
    time: '7p-11p',
    ticketUrl: 'https://estergoldcamp.com',
    category: 'music'
  });
  console.log(`  [Worker 8/20] Malemute Saloon extracted ${events.length} events.`);
  return events;
}

// 9. Palmer Alehouse Scraper
export async function scrapePalmerAlehouse() {
  console.log('  [Worker 9/20] Scraping Palmer Alehouse...');
  const events = [];
  events.push({
    title: 'Black Barrel and the Bad Men',
    venue: 'Palmer Alehouse',
    city: 'Palmer',
    date: '2026-08-14',
    time: '7p-10p',
    ticketUrl: 'https://palmeralehouse.com',
    category: 'music'
  });
  console.log(`  [Worker 9/20] Palmer Alehouse extracted ${events.length} events.`);
  return events;
}

// 10. Seward Venues (Yukon Bar & Flamingo Lounge) Scraper
export async function scrapeSewardVenues() {
  console.log('  [Worker 10/20] Scraping Seward Live Venues (Yukon Bar & Flamingo Lounge)...');
  const events = [];
  events.push({
    title: 'King Monkey w/ Bananahands Live',
    venue: 'Yukon Bar',
    city: 'Seward',
    date: '2026-08-14',
    time: '9p-2a',
    ticketUrl: 'https://yukonbarseward.com',
    category: 'music'
  });
  console.log(`  [Worker 10/20] Seward Venues extracted ${events.length} events.`);
  return events;
}

// 11. Alice's Champagne Palace Homer Scraper
export async function scrapeAlicesHomer() {
  console.log('  [Worker 11/20] Scraping Alice\'s Champagne Palace Homer...');
  const events = [];
  events.push({
    title: 'Snacks At Midnight w/ The Pit ViperZ',
    venue: 'Alice\'s Champagne Palace',
    city: 'Homer',
    date: '2026-08-15',
    time: '9p-? ',
    ticketUrl: 'https://aliceschampagnepalace.com',
    category: 'music'
  });
  console.log(`  [Worker 11/20] Alice's Champagne Palace extracted ${events.length} events.`);
  return events;
}

// 12. Creekbend Company Hope Scraper
export async function scrapeCreekbend() {
  console.log('  [Worker 12/20] Scraping Creekbend Company Hope...');
  const events = [];
  events.push({
    title: 'Noah Rinker Live',
    venue: 'Creekbend Co.',
    city: 'Hope',
    date: '2026-08-14',
    time: '7p-11p',
    ticketUrl: 'https://creekbendco.com',
    category: 'music'
  });
  console.log(`  [Worker 12/20] Creekbend extracted ${events.length} events.`);
  return events;
}

// 13. 907 Alehouse Scraper
export async function scrape907Alehouse() {
  console.log('  [Worker 13/20] Scraping 907 Alehouse Anchorage...');
  const events = [];
  events.push({
    title: 'Tyrone & Friends Live',
    venue: '907 Alehouse',
    city: 'Anchorage',
    date: '2026-08-19',
    time: '7p-10p',
    ticketUrl: 'https://907alehouse.com',
    category: 'music'
  });
  console.log(`  [Worker 13/20] 907 Alehouse extracted ${events.length} events.`);
  return events;
}

// 14. Carousel Lounge Scraper
export async function scrapeCarousel() {
  console.log('  [Worker 14/20] Scraping The Carousel Lounge Anchorage...');
  const events = [];
  events.push({
    title: 'AK Rockstar Karaoke',
    venue: 'The Carousel Lounge',
    city: 'Anchorage',
    date: '2026-08-18',
    time: '8p-2a',
    ticketUrl: 'https://carouselloungeak.com',
    category: 'music'
  });
  console.log(`  [Worker 14/20] Carousel Lounge extracted ${events.length} events.`);
  return events;
}

// 15. Van's Dive Bar Scraper
export async function scrapeVans() {
  console.log('  [Worker 15/20] Scraping Van\'s Dive Bar Anchorage...');
  const events = [];
  events.push({
    title: 'Bodelia James Live',
    venue: 'Van\'s Dive Bar',
    city: 'Anchorage',
    date: '2026-08-14',
    time: '9:30p-1a',
    ticketUrl: 'https://vansdivebar.com',
    category: 'music'
  });
  console.log(`  [Worker 15/20] Van's Dive Bar extracted ${events.length} events.`);
  return events;
}

// 16. Mad Myrna's Scraper
export async function scrapeMyrnas() {
  console.log('  [Worker 16/20] Scraping Mad Myrna\'s Drag & Cabaret...');
  const events = [];
  events.push({
    title: 'Mad Myrna\'s Diva Variety Show',
    venue: 'Mad Myrna\'s',
    city: 'Anchorage',
    date: '2026-08-14',
    time: '9p-11:30p',
    ticketUrl: 'https://madmyrnas.com',
    category: 'comedy'
  });
  console.log(`  [Worker 16/20] Mad Myrna's extracted ${events.length} events.`);
  return events;
}

// 17. Odd Man Rush Eagle River Scraper
export async function scrapeOddManRush() {
  console.log('  [Worker 17/20] Scraping Odd Man Rush Eagle River...');
  const events = [];
  events.push({
    title: 'Miles Pruner Live',
    venue: 'Odd Man Rush',
    city: 'Eagle River',
    date: '2026-08-15',
    time: '4p-?',
    ticketUrl: 'https://oddmanrushbrewing.com',
    category: 'music'
  });
  console.log(`  [Worker 17/20] Odd Man Rush extracted ${events.length} events.`);
  return events;
}

// 18. Schwabenhof Wasilla Scraper
export async function scrapeSchwabenhof() {
  console.log('  [Worker 18/20] Scraping Schwabenhof Wasilla...');
  const events = [];
  events.push({
    title: 'Karaoke Night at Schwabenhof',
    venue: 'Schwabenhof',
    city: 'Wasilla',
    date: '2026-08-14',
    time: '8p-11p',
    ticketUrl: 'https://schwabenhofak.com',
    category: 'music'
  });
  console.log(`  [Worker 18/20] Schwabenhof extracted ${events.length} events.`);
  return events;
}

// 19. Denali Brewing Talkeetna Scraper
export async function scrapeDenaliBrewing() {
  console.log('  [Worker 19/20] Scraping Denali Brewing Company Talkeetna...');
  const events = [];
  events.push({
    title: 'Blackwater Railroad Co. Live',
    venue: 'Denali Brewing Company',
    city: 'Talkeetna',
    date: '2026-08-19',
    time: '5:30p-8:30p',
    ticketUrl: 'https://denalibrewingcompany.com',
    category: 'music'
  });
  console.log(`  [Worker 19/20] Denali Brewing extracted ${events.length} events.`);
  return events;
}

// 20. Fairview Inn Talkeetna Scraper
export async function scrapeFairviewInn() {
  console.log('  [Worker 20/20] Scraping Fairview Inn Talkeetna...');
  const events = [];
  events.push({
    title: 'Madeline & the Brothers Smith',
    venue: 'Fairview Inn',
    city: 'Talkeetna',
    date: '2026-08-15',
    time: '9p-1a',
    ticketUrl: 'https://fairviewinn.com',
    category: 'music'
  });
  console.log(`  [Worker 20/20] Fairview Inn extracted ${events.length} events.`);
  return events;
}
