/**
 * Utility functions for Alaska Time (America/Anchorage)
 */

export function getAlaskaTodayDate(): string {
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Anchorage',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    return formatter.format(new Date()); // Returns "YYYY-MM-DD"
  } catch (e) {
    // Fallback if Intl is unavailable
    const d = new Date();
    d.setHours(d.getHours() - 8); // Alaska Time UTC-8 offset
    return d.toISOString().slice(0, 10);
  }
}

export function getAlaskaDaysAgoDate(daysAgo: number): string {
  const d = new Date();
  d.setDate(d.getDate() - daysAgo);
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Anchorage',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    return formatter.format(d);
  } catch (e) {
    d.setHours(d.getHours() - 8);
    return d.toISOString().slice(0, 10);
  }
}

export function getAlaskaDaysAheadDate(daysAhead: number): string {
  const d = new Date();
  d.setDate(d.getDate() + daysAhead);
  try {
    const formatter = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'America/Anchorage',
      year: 'numeric',
      month: '2-digit',
      day: '2-digit'
    });
    return formatter.format(d);
  } catch (e) {
    d.setHours(d.getHours() - 8);
    return d.toISOString().slice(0, 10);
  }
}

/**
 * Checks if an event is in the past based on Alaska Date and optional time string (e.g. "9p-1a", "7p-10p")
 */
export function isEventPast(eventDate: string, eventTimeStr: string = ''): boolean {
  const alaskaToday = getAlaskaTodayDate();

  if (eventDate < alaskaToday) return true;
  if (eventDate > alaskaToday) return false;

  // If eventDate === alaskaToday, check if time has passed in Alaska
  if (!eventTimeStr) return false; // Default to showing as current if no time specified

  // Parse time (e.g., "9p-1a", "11:30a-1:30p", "8p")
  try {
    const alaskaNow = new Date();
    // Get current Alaska hour and minute
    const alaskaTimeStr = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/Anchorage',
      hour: 'numeric',
      minute: 'numeric',
      hour12: false
    }).format(alaskaNow);

    const [curHourStr, curMinStr] = alaskaTimeStr.split(':');
    const curMinutes = parseInt(curHourStr, 10) * 60 + parseInt(curMinStr, 10);

    // Try parsing start/end time from eventTimeStr
    // Match end time if available, e.g. "9p-12a" -> 12a (midnight), "11:30a-1:30p" -> 1:30p (13:30)
    const endMatch = eventTimeStr.match(/(?:-\s*)?(\d{1,2})(?::(\d{2}))?\s*(a|p|am|pm)?\s*$/i);
    
    if (endMatch) {
      let endHour = parseInt(endMatch[1], 10);
      const endMin = endMatch[2] ? parseInt(endMatch[2], 10) : 0;
      const ampm = (endMatch[3] || '').toLowerCase();

      if (ampm.startsWith('p') && endHour < 12) endHour += 12;
      if (ampm.startsWith('a') && endHour === 12) endHour = 0;

      // Handle late night end times crossing midnight (e.g. 1a, 2a, 3a)
      let endMinutes = endHour * 60 + endMin;
      if (endHour < 5 && eventTimeStr.toLowerCase().includes('p')) {
        // Late night closing time next morning (e.g. 1am, 2am, 3am)
        endMinutes += 24 * 60;
      }

      // If current Alaska time is past the event end time, it's past
      if (curMinutes > endMinutes) {
        return true;
      }
    }
  } catch (e) {
    // If time parsing fails, err on the side of showing event as active for today
    return false;
  }

  return false;
}

/**
 * Helper to convert time strings (e.g. "6:00 PM", "9:30 PM", "10a", "6p")
 * into total minutes from midnight for accurate chronological time sorting.
 */
export function getTimeMinutes(timeStr: string = ''): number {
  if (!timeStr || timeStr === 'TBA' || timeStr === '?') return 9999;
  const match = timeStr.match(/(\d{1,2})(?::(\d{2}))?\s*(a|p|am|pm)?/i);
  if (!match) return 9999;
  let hour = parseInt(match[1], 10);
  const min = match[2] ? parseInt(match[2], 10) : 0;
  const ampm = (match[3] || '').toLowerCase();

  if (ampm.startsWith('p') && hour < 12) hour += 12;
  if (ampm.startsWith('a') && hour === 12) hour = 0;

  return hour * 60 + min;
}

/**
 * Formats shorthand time strings (e.g., "10a-6p", "6p-?", "6:30p-?", "9p-1a", "7p-10p")
 * into clean, readable full AM/PM formats (e.g. "10:00 AM - 6:00 PM", "6:00 PM - ?", "6:30 PM - ?")
 */
export function formatFullTime(timeStr: string = ''): string {
  if (!timeStr) return '';
  let trimmed = timeStr.trim();
  if (!trimmed || trimmed === '?') return 'TBA';

  // Strip seconds (e.g. "9:30:00 PM" -> "9:30 PM", "1:00:00 AM" -> "1:00 AM", "09:30:00" -> "09:30")
  trimmed = trimmed.replace(/:(\d{2}):\d{2}/g, ':$1');

  let formatted = trimmed
    .replace(/\s*-\s*/g, ' - ')
    .replace(/(\d+)(:\d+)?\s*a\b/gi, (match, p1, p2) => `${p1}${p2 || ':00'} AM`)
    .replace(/(\d+)(:\d+)?\s*p\b/gi, (match, p1, p2) => `${p1}${p2 || ':00'} PM`)
    .replace(/(\d+)\s*AM\b/g, '$1:00 AM')
    .replace(/(\d+)\s*PM\b/g, '$1:00 PM')
    .replace(/:(\d{2}):\d{2}/g, ':$1');

  return formatted;
}
