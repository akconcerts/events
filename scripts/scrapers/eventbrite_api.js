import fetch from 'node-fetch';

export async function scrapeEventbrite() {
  console.log('  [Worker] Scraping Eventbrite API / public search for Alaska events...');
  const events = [];

  try {
    // Query Eventbrite public search endpoint or RSS/API for Alaska music
    const searchUrl = 'https://www.eventbrite.com/api/v3/destination/events/?event_search.state=AK&event_search.page_size=50&expand.destination_event=primary_venue,ticket_availability';
    const res = await fetch(searchUrl, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
      }
    });

    if (res.ok) {
      const data = await res.json();
      const items = data.events?.results || data.events || [];
      for (const item of items) {
        if (item.name && item.start_date) {
          const venue = item.primary_venue?.name || 'Alaska Venue';
          const city = item.primary_venue?.address?.city || 'Anchorage';
          const title = item.name;
          const date = item.start_date.slice(0, 10);
          const ticketUrl = item.url || '';

          events.push({
            title,
            venue,
            city,
            date,
            time: item.start_time || '',
            ticketUrl,
            category: 'music',
            cost: item.ticket_availability?.is_free ? 'Free' : ''
          });
        }
      }
    }
  } catch (err) {
    console.warn('  [Worker] Eventbrite search notice:', err.message);
  }

  console.log(`  [Worker] Eventbrite worker extracted ${events.length} events.`);
  return events;
}
