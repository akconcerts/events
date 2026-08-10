import fetch from 'node-fetch';

export async function scrapeTicketmaster() {
  console.log('  [Worker] Scraping Ticketmaster Discovery API for Alaska events...');
  const events = [];

  const apiKey = process.env.TICKETMASTER_API_KEY;
  if (!apiKey) {
    console.log('  [Worker] Skipping Ticketmaster API (no TICKETMASTER_API_KEY environment variable provided).');
    return events;
  }

  try {
    const url = `https://app.ticketmaster.com/discovery/v2/events.json?stateCode=AK&classificationName=music&apikey=${apiKey}`;
    const res = await fetch(url);
    if (res.ok) {
      const data = await res.json();
      const items = data._embedded?.events || [];
      for (const item of items) {
        const title = item.name;
        const venue = item._embedded?.venues?.[0]?.name || 'Alaska Venue';
        const city = item._embedded?.venues?.[0]?.city?.name || 'Anchorage';
        const date = item.dates?.start?.localDate;
        const time = item.dates?.start?.localTime || '';
        const ticketUrl = item.url || '';

        if (title && date) {
          events.push({
            title,
            venue,
            city,
            date,
            time,
            ticketUrl,
            category: 'music',
            cost: item.priceRanges?.[0] ? `$${item.priceRanges[0].min}-$${item.priceRanges[0].max}` : ''
          });
        }
      }
    }
  } catch (err) {
    console.warn('  [Worker] Ticketmaster API notice:', err.message);
  }

  console.log(`  [Worker] Ticketmaster worker extracted ${events.length} events.`);
  return events;
}
