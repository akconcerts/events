import re
import json
import os

VALID_CITIES = [
    'Anchorage', 'Fairbanks', 'Juneau', 'Eagle River', 'Girdwood', 'Homer', 'Hope', 'Kenai',
    'Ketchikan', 'Palmer', 'Seward', 'Soldotna', 'Talkeetna', 'Wasilla', 'Kodiak', 'Valdez',
    'Sitka', 'Petersburg', 'Wrangell', 'Utqiagvik', 'Barrow', 'Nome', 'Bethel', 'Kotzebue',
    'Cordova', 'Cooper Landing', 'Chiniak', 'Moose Pass', 'Willow', 'Ninilchik', 'Kasilof',
    'Delta Junction', 'Tok', 'Healy', 'Nenana', 'Sutton', 'JBER', 'Big Lake', 'Skagway', 'Central'
]

MONTHS = {
    'january': '01', 'february': '02', 'march': '03', 'april': '04',
    'may': '05', 'june': '06', 'july': '07', 'august': '08',
    'september': '09', 'october': '10', 'november': '11', 'december': '12'
}

CATEGORY_KEYWORDS = {
    'comedy': ['comedy', 'open mic comedy', 'stand-up', 'roast', 'improv', 'laugh'],
    'dance': ['dance', 'line dancing', 'swing', 'tango', 'latin night', 'salsa', 'bachata', 'two-step', 'ballet', 'waltz', 'hip hop'],
    'theatre': ['theatre', 'theater', 'play', 'musical', 'acting', 'drama', 'revue', 'recital'],
    'festival': ['festival', 'fair', 'bazaar', 'market', 'open house', 'fest', 'expo', 'parade', 'cat video fest', 'yappy hour', 'luau'],
    'community': ['storytime', 'story time', 'toddler', 'library', 'trivia', 'bingo', 'run', 'pub run', 'book club', 'class', 'workshop', 'bird', 'trails in motion', 'mobile library', 'summer bash', 'marathon'],
    'music': []
}

def detect_category(title, venue):
    text = f"{title} {venue}".lower()
    for cat, words in CATEGORY_KEYWORDS.items():
        if any(w in text for w in words):
            return cat
    return 'music'

def slugify(text):
    s = re.sub(r'[^a-z0-9]+', '-', text.lower())
    return s.strip('-')

def main():
    with open('wayback_data/doc_extracted_text.txt', 'r', encoding='utf-8') as f:
        text = f.read()

    lines = [l.strip() for l in text.split('\n') if l.strip()]

    parsed_events = []
    current_city = 'Anchorage'
    current_date = None

    date_header_re = re.compile(
        r'(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2})(?:st|nd|rd|th)?',
        re.IGNORECASE
    )

    for line in lines:
        # Check city header
        clean_line = line.strip()
        matched_city = None
        for c in VALID_CITIES:
            if clean_line.lower() == c.lower():
                matched_city = c
                break
        
        if matched_city:
            current_city = matched_city
            continue

        # Look for date headers or embedded dates
        # E.g. "Thursday August 13th" or "Friday August 14th   49th State Brewery..."
        matches = list(date_header_re.finditer(line))

        if matches:
            for idx, match in enumerate(matches):
                dow, month, day = match.groups()
                m_num = MONTHS[month.lower()]
                d_num = day.zfill(2)
                current_date = f"2026-{m_num}-{d_num}"

                start_idx = match.end()
                end_idx = matches[idx + 1].start() if idx + 1 < len(matches) else len(line)
                block_text = line[start_idx:end_idx].strip()

                if block_text:
                    process_event_block(block_text, current_city, current_date, parsed_events)
        else:
            if current_date:
                process_event_block(line, current_city, current_date, parsed_events)

    print(f"Total events parsed from Word DOCX: {len(parsed_events)}")

    # Load repo events.json
    with open('events.json', 'r', encoding='utf-8') as f:
        existing_events = json.load(f)

    # Build normalized set of existing events
    existing_keys = set()
    for e in existing_events:
        t_norm = re.sub(r'[^a-z0-9]', '', e['title'].lower())
        v_norm = re.sub(r'[^a-z0-9]', '', e['venue'].lower())
        existing_keys.add(f"{t_norm}|{v_norm}|{e['date']}")

    missing_events = []
    already_present_events = []

    for pe in parsed_events:
        t_norm = re.sub(r'[^a-z0-9]', '', pe['title'].lower())
        v_norm = re.sub(r'[^a-z0-9]', '', pe['venue'].lower())

        # Direct match key
        key = f"{t_norm}|{v_norm}|{pe['date']}"
        
        if key in existing_keys:
            already_present_events.append(pe)
            continue

        # Substring / fuzzy match check
        found = False
        for e in existing_events:
            if e['date'] == pe['date']:
                ex_t = re.sub(r'[^a-z0-9]', '', e['title'].lower())
                ex_v = re.sub(r'[^a-z0-9]', '', e['venue'].lower())

                # If title substring & venue substring match
                if (t_norm in ex_t or ex_t in t_norm) and (v_norm in ex_v or ex_v in v_norm):
                    found = True
                    break
        
        if found:
            already_present_events.append(pe)
        else:
            missing_events.append(pe)

    print(f"\nAlready Present in Repo: {len(already_present_events)}")
    print(f"Missing from Repo: {len(missing_events)}")

    if missing_events:
        print("\n--- MISSING EVENTS DETAILS ---")
        for i, m in enumerate(missing_events, 1):
            print(f"{i}. [{m['date']}] {m['city']} | {m['venue']} – {m['title']} ({m['time']})")

    # Write missing events report to JSON
    with open('wayback_data/missing_doc_events_parsed.json', 'w', encoding='utf-8') as f:
        json.dump(missing_events, f, indent=2)

def process_event_block(text, city, date_str, results):
    # Items are delimited by time stamps or double spaces between events
    # Examples:
    # 49th State Brewery – Garden Grooves: Music in the Beer Garden 5p-7p
    # Anchorage Museum – Lunch on the Lawn: Live Music w/ Santoro 11:30a-1:30p
    # Beartooth Theatrepub – Trails in Motion 14 6p-8p
    
    # Split text on pattern where a time format (e.g., 5p-7p, 8p-12a, 10p-Close) ends an item
    # or before a Venue Name followed by '–' or '-'
    pattern = re.compile(
        r'([A-Za-z0-9\s\'\.\&\/\#\+\,\(\)\:\-]+?)\s*[–\-]\s*(.*?)(?=(\d{1,2}(?::\d{2})?\s*[apmAPM]*(?:\s*-\s*\d{1,2}(?::\d{2})?\s*[apmAPM]*|\s*-\s*Close|\s*-\s*\?)?)|$)'
    )

    # Let's split raw text by regex matching: Venue – Title [Time]
    # Simple split strategy:
    items = re.split(r'(?=[A-Z0-9\u00C0-\u024F][A-Za-z0-9\s\'\.\&\/\#\+\,\(\)]*?\s*[–\-])', text)

    for item in items:
        item = item.strip()
        if not item or len(item) < 6:
            continue
        
        if '–' in item or ' - ' in item or '-' in item:
            # Separate by dash/en-dash
            parts = re.split(r'\s*[–\-]\s*', item, maxsplit=1)
            if len(parts) == 2:
                venue = parts[0].strip()
                rest = parts[1].strip()

                if not venue or not rest:
                    continue

                # Extract time from end of rest
                time_match = re.search(r'(\d{1,2}(?::\d{2})?\s*[apmAPM]*(?:\s*-\s*\d{1,2}(?::\d{2})?\s*[apmAPM]*|\s*-\s*Close|\s*-\s*\?)?)$', rest, re.IGNORECASE)
                
                if time_match:
                    time_str = time_match.group(1).strip()
                    title = rest[:time_match.start()].strip()
                else:
                    time_str = ""
                    title = rest

                # Clean up title & venue whitespace
                title = re.sub(r'[\xa0\s]+', ' ', title).strip()
                venue = re.sub(r'[\xa0\s]+', ' ', venue).strip()

                # Clean up trailing junk
                title = re.sub(r'\s*\d{1,2}(?::\d{2})?[apmAPM]*$', '', title).strip()

                if venue and title and len(venue) > 2 and len(title) > 2:
                    if "Hyperlinks to each event" in venue or "Sign up on our page" in venue:
                        continue
                    
                    cat = detect_category(title, venue)
                    slug_str = slugify(f"{title}-{venue}-{date_str}")

                    results.append({
                        "id": slug_str,
                        "title": title,
                        "venue": venue,
                        "city": city,
                        "date": date_str,
                        "time": time_str,
                        "category": cat,
                        "slug": slug_str,
                        "description": f"{title} live at {venue} in {city}, Alaska."
                    })

if __name__ == '__main__':
    main()
