import { events } from '../data/events';
import { getAlaskaTodayDate } from '../utils/date';

export async function GET() {
  const today = getAlaskaTodayDate();
  const upcoming = events.filter(e => e.date >= today).slice(0, 100);

  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
  <channel>
    <title>AK Concerts — Live Music &amp; Events in Alaska</title>
    <link>https://akconcerts.com</link>
    <description>Upcoming concerts, festivals, comedy shows, and live music across Alaska.</description>
    <language>en-us</language>
${upcoming.map(e => `    <item>
      <title>${escapeXml(e.title)}</title>
      <link>https://akconcerts.com/events/${e.slug}</link>
      <description>${escapeXml(`${e.title} live at ${e.venue} in ${e.city}, Alaska on ${e.date} at ${e.time}`)}</description>
      <pubDate>${new Date(e.date).toUTCString()}</pubDate>
      <guid>https://akconcerts.com/events/${e.slug}</guid>
    </item>`).join('\n')}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}

function escapeXml(str: string) {
  return str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&apos;');
}
