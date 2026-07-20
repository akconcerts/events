import eventsJson from './events.json';

export interface AKEvent {
  id: string;
  slug: string;
  title: string;
  venue: string;
  city: string;
  date: string;
  time: string;
  ticketUrl: string;
  category: 'music' | 'comedy' | 'dance' | 'theatre' | 'community' | 'festival';
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

export const events: AKEvent[] = eventsJson.map((e, idx) => ({
  id: String(idx + 1),
  slug: slugify(`${e.title}-${e.venue}-${e.date}`),
  title: e.title,
  venue: e.venue,
  city: e.city,
  date: e.date,
  time: e.time,
  ticketUrl: e.ticketUrl || '',
  category: (e.category || 'music') as AKEvent['category']
}));

export const cities = [...new Set(events.map(e => e.city))].sort();

export function getEventsByCity(city: string): AKEvent[] {
  return events.filter(e => e.city === city);
}

export function getEventsByDate(date: string): AKEvent[] {
  return events.filter(e => e.date === date);
}
