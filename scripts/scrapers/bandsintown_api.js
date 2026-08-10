import fetch from 'node-fetch';

export async function scrapeBandsintown() {
  console.log('  [Worker] Querying Bandsintown for Alaska venue concerts...');
  const events = [];

  const akVenues = ['Chilkoot Charlies', 'Bear Tooth Theatrepub', 'Williwaw Social', 'Sitzmark', 'Blue Loon'];

  for (const vName of akVenues) {
    try {
      const url = `https://rest.bandsintown.com/venues/${encodeURIComponent(vName)}/events?app_id=akconcerts`;
      const res = await fetch(url);
      if (res.ok) {
        const data = await res.json();
        if (Array.isArray(data)) {
          for (const item of data) {
            const title = item.lineup?.join(', ') || item.title || 'Live Music';
            const venue = item.venue?.name || vName;
            const city = item.venue?.city || 'Anchorage';
            const date = item.datetime ? item.datetime.slice(0, 10) : '';
            const ticketUrl = item.offers?.[0]?.url || item.url || '';

            if (title && date) {
              events.push({
                title,
                venue,
                city,
                date,
                time: item.datetime ? item.datetime.slice(11, 16) : '',
                ticketUrl,
                category: 'music'
              });
            }
          }
        }
      }
    } catch (err) {
      // Quiet fail if venue not found on Bandsintown
    }
  }

  console.log(`  [Worker] Bandsintown worker extracted ${events.length} events.`);
  return events;
}
