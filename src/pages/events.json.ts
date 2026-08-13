import { events } from '../data/events';
import { getAlaskaTodayDate } from '../utils/date';

export async function GET() {
  const today = getAlaskaTodayDate();
  const upcoming = events.filter(e => e.date >= today).sort((a, b) => a.date.localeCompare(b.date));

  return new Response(JSON.stringify({
    title: "AK Concerts — Live Events Data API",
    description: "Alaska statewide live music, comedy, and festival calendar data.",
    updated: new Date().toISOString(),
    totalEvents: upcoming.length,
    events: upcoming
  }, null, 2), {
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
}
