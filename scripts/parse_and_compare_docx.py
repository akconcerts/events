import re
import json
import os

VALID_CITIES = [
    'Anchorage', 'Fairbanks', 'Juneau', 'Eagle River', 'Girdwood', 'Homer', 'Hope', 'Kenai',
    'Ketchikan', 'Palmer', 'Seward', 'Soldotna', 'Talkeetna', 'Wasilla', 'Kodiak', 'Valdez',
    'Sitka', 'Petersburg', 'Wrangell', 'Utqiagvik', 'Barrow', 'Nome', 'Bethel', 'Kotzebue',
    'Cordova', 'Cooper Landing', 'Chiniak', 'Moose Pass', 'Willow', 'Ninilchik', 'Kasilof',
    'Delta Junction', 'Tok', 'Healy', 'Nenana', 'Sutton', 'JBER'
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
    'festival': ['festival', 'fair', 'bazaar', 'market', 'open house', 'fest', 'expo', 'parade', 'cat video fest'],
    'community': ['storytime', 'story time', 'toddler', 'library', 'trivia', 'bingo', 'run', 'pub run', 'book club', 'class', 'workshop', 'yappy hour', 'bird', 'trails in motion'],
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

def parse_doc():
    with open('wayback_data/doc_extracted_text.txt', 'r', encoding='utf-8') as f:
        text = f.read()

    lines = [l.strip() for l in text.split('\n') if l.strip()]

    current_city = 'Anchorage'
    current_date = None

    parsed_events = []

    # Regular expressions for dates
    date_regex = re.compile(
        r'(Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2})(?:st|nd|rd|th)?',
        re.IGNORECASE
    )

    for line in lines:
        # Check if line is a city header
        for city in VALID_CITIES:
            if line.lower() == city.lower():
                current_city = city
                break
        
        # Look for all date markers in the line
        matches = list(date_regex.finditer(line))

        if matches:
            # Line contains date(s) and potentially events following them
            # Let's slice line into date blocks
            for idx, match in enumerate(matches):
                day_of_week, month_name, day_num = match.groups()
                month_num = MONTHS[month_name.lower()]
                day_num = day_num.zfill(2)
                current_date = f"2026-{month_num}-{day_num}"

                start_pos = match.end()
                end_pos = matches[idx + 1].start() if idx + 1 < len(matches) else len(line)
                content = line[start_pos:end_pos].strip()

                if content:
                    extract_events_from_text(content, current_city, current_date, parsed_events)
        else:
            if current_date:
                extract_events_from_text(line, current_city, current_date, parsed_events)

    return parsed_events

def extract_events_from_text(text, city, date_str, results):
    # Events in text are generally structured as:
    # "Venue Name – Event Title 5p-7p" or "Venue Name – Event Title  8p-12a"
    # Notice the dash/en-dash '–' or '-' separating Venue and Title, followed by time
    
    # Split text by venue pattern or time pattern
    # Pattern matching: Venue – Title [Time]
    pattern = re.compile(r'([A-Za-z0-9\s\'\.\&\/\#\-\,\+]+?)\s*[–\-]\s*(.*?)(?=(\d{1,2}(?::\d{2})?[apmAPM]*(?:-\d{1,2}(?::\d{2})?[apmAPM]*|-Close|-?))|(?=[A-Za-z0-9\s\'\.\&\/\#\-\,\+]+?\s*[–\-])|$)')

    # Better approach: find all occurrences of '–' or '-' with a time tag or next venue
    # Let's split on space before venue names that have a '–' or '-'
    tokens = re.split(r'(?=[A-Z0-9\u00C0-\u024F][A-Za-z0-9\s\'\.\&\/\#\+\,\(\)]*?\s*[–\-])', text)

    for tok in tokens:
        tok = tok.strip()
        if not tok or len(tok) < 5:
            continue
        
        # Check if tok contains '–' or '-'
        if '–' in tok or ' - ' in tok or '-' in tok:
            # Split into venue and title+time
            parts = re.split(r'\s*[–\-]\s*', tok, maxsplit=1)
            if len(parts) == 2:
                venue = parts[0].strip()
                rest = parts[1].strip()

                # Extract time if present at the end of rest
                time_match = re.search(r'(\d{1,2}(?::\d{2})?\s*[apmAPM]*(?:\s*-\s*\d{1,2}(?::\d{2})?\s*[apmAPM]*|\s*-\s*Close|\s*-\s*\?)?)$', rest)
                
                if time_match:
                    time_str = time_match.group(1).strip()
                    title = rest[:time_match.start()].strip()
                else:
                    time_str = ""
                    title = rest

                # Clean up title trailing spaces/invisible chars
                title = re.sub(r'[\xa0\s]+', ' ', title).strip()
                venue = re.sub(r'[\xa0\s]+', ' ', venue).strip()

                if title and venue and len(venue) > 2 and len(title) > 2:
                    # Ignore headers or misparses
                    if "Hyperlinks to each event" in venue or "Sign up on our page" in venue:
                        continue

                    category = detect_category(title, venue)
                    slug = slugify(f"{title}-{venue}-{date_str}")

                    results.append({
                        "id": slug,
                        "title": title,
                        "venue": venue,
                        "city": city,
                        "date": date_str,
                        "time": time_str,
                        "category": category,
                        "slug": slug,
                        "description": f"{title} live at {venue} in {city}, Alaska on {date_str}."
                    })

def main():
    parsed_doc_events = parse_doc()
    print(f"Total parsed events from DOCX: {len(parsed_doc_events)}")

    with open('events.json', 'r', encoding='utf-8') as f:
        existing_events = json.load(f)

    existing_keys = set(
        f"{e['title'].lower().strip()}|{e['venue'].lower().strip()}|{e['date']}" for e in existing_events
    )

    missing_events = []
    found_count = 0

    for e in parsed_doc_events:
        key = f"{e['title'].lower().strip()}|{e['venue'].lower().strip()}|{e['date']}"
        if key in existing_keys:
            found_count += 1
        else:
            # Check fuzzy match
            title_clean = re.sub(r'[^a-z0-9]', '', e['title'].lower())
            venue_clean = re.sub(r'[^a-z0-9]', '', e['venue'].lower())
            
            fuzzy_matched = False
            for ex in existing_events:
                if ex['date'] == e['date']:
                    ex_title = re.sub(r'[^a-z0-9]', '', ex['title'].lower())
                    ex_venue = re.sub(r'[^a-z0-9]', '', ex['venue'].lower())
                    if title_clean in ex_title or ex_title in title_clean:
                        if venue_clean in ex_venue or ex_venue in venue_clean:
                            fuzzy_matched = True
                            break
            
            if fuzzy_matched:
                found_count += 1
            else:
                missing_events.append(e)

    print(f"Matched/Already in Repo: {found_count}")
    print(f"Missing Events: {len(missing_events)}")

    if missing_events:
        print("\n--- MISSING EVENTS LIST ---")
        for i, m in enumerate(missing_events):
            print(f"{i+1}. {m['date']} | {m['city']} | {m['venue']} – {m['title']} ({m['time']})")

        # Save missing events to file
        with open('wayback_data/missing_doc_events.json', 'w', encoding='utf-8') as f:
            json.dump(missing_events, f, indent=2)

if __name__ == '__main__':
    main()
