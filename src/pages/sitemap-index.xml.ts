import { events } from '../data/events';
import { bands } from '../data/bands';
import venuesData from '../../venues.json';

export async function GET() {
  const baseUrl = 'https://akconcerts.com';
  
  const staticPages = [
    '',
    '/past',
    '/venues',
    '/bands',
    '/learn',
    '/submit',
    '/subscribe',
    '/support',
    '/donate'
  ];

  const citySet = new Set(events.map(e => e.city.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')));
  const cityPages = [...citySet].map(c => `/cities/${c}`);

  const bandPages = bands.map(b => `/bands/${b.slug}`);

  const venueMap = new Map();
  venuesData.forEach(v => {
    const slug = (v.id || v.name).toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
    venueMap.set(slug, true);
  });
  events.forEach(e => {
    if (e.venue) {
      const slug = e.venue.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
      venueMap.set(slug, true);
    }
  });
  const venuePages = [...venueMap.keys()].map(v => `/venues/${v}`);

  const eventPages = events.map(e => `/events/${e.slug}`);

  const allUrls = [
    ...staticPages,
    ...cityPages,
    ...bandPages,
    ...venuePages,
    ...eventPages
  ];

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls.map(url => `  <url>
    <loc>${baseUrl}${url}</loc>
    <changefreq>daily</changefreq>
    <priority>${url === '' ? '1.0' : url.startsWith('/cities/') || url.startsWith('/venues/') ? '0.8' : '0.6'}</priority>
  </url>`).join('\n')}
</urlset>`;

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
}
