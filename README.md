# 🎸 Alaska Concerts & Live Music — Open Events Dataset

[![Events Count](https://img.shields.io/badge/Events-50%2C000%2B-gold)](https://github.com/akconcerts/events)
[![Cities Covered](https://img.shields.io/badge/Cities-36%20Alaska%20Communities-blue)](https://github.com/akconcerts/events)
[![Formats](https://img.shields.io/badge/Formats-JSON%20%7C%20GeoJSON%20%7C%20CSV%20%7C%20XLSX%20%7C%20iCal%20%7C%20RSS-brightgreen)](https://github.com/akconcerts/events)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

The official public open dataset of concerts, live music, comedy shows, theater, dance, festivals, and community performances across Alaska from May 2019 to present.

This repository provides clean, normalized event data for developers, venues, musicians, researchers, and community calendars.

---

## 🚀 Direct Feeds & API Downloads

| Format | Direct Raw Link | Description |
| :--- | :--- | :--- |
| **Master JSON** | [`events.json`](https://raw.githubusercontent.com/akconcerts/events/main/events.json) | Complete statewide dataset (50,000+ records) |
| **GeoJSON** | [`events.geojson`](https://raw.githubusercontent.com/akconcerts/events/main/events.geojson) | Spatial map dataset with venue GPS coordinates |
| **CSV** | [`events.csv`](https://raw.githubusercontent.com/akconcerts/events/main/events.csv) | Standard CSV for Pandas, R, Excel, or SQL databases |
| **Excel (XLSX)** | [`events.xlsx`](https://github.com/akconcerts/events/raw/main/events.xlsx) | Master Excel workbook |
| **iCal Feed** | [`events.ics`](https://raw.githubusercontent.com/akconcerts/events/main/events.ics) | Calendar feed for Apple Calendar, Google Calendar, Outlook |
| **RSS Feed** | [`events.xml`](https://raw.githubusercontent.com/akconcerts/events/main/events.xml) | Standard RSS 2.0 event feed |
| **Venues Directory** | [`venues.json`](https://raw.githubusercontent.com/akconcerts/events/main/venues.json) | 239 Alaska venues with cities, Facebook links, contact info, and GPS coordinates |
| **Summary Stats** | [`stats.json`](https://raw.githubusercontent.com/akconcerts/events/main/stats.json) | Aggregated totals by city, category, and top venues |
| **City Archives** | [`cities/`](https://github.com/akconcerts/events/tree/main/cities) | Partitioned by city (`anchorage.json`, `fairbanks.json`, `juneau.json`, ...) |
| **Yearly Archives** | [`years/`](https://github.com/akconcerts/events/tree/main/years) | Partitioned by year (`2026.json`, `2025.json`, `2024.json`, ...) |
| **OpenAPI Spec** | [`openapi.yaml`](https://raw.githubusercontent.com/akconcerts/events/main/openapi.yaml) | OpenAPI 3.0 API schema specification |

---

## 📊 Dataset Overview

- **Total Events**: `50,000+`
- **Total Venues**: `239`
- **Time Span**: May 2019 – Present
- **Geographic Coverage**: Anchorage, Fairbanks, Juneau, Wasilla, Palmer, Eagle River, Kenai, Soldotna, Homer, Seward, Girdwood, Talkeetna, Sitka, Ketchikan, Cordova, Haines, Valdez, Big Lake, Ester, North Pole, McCarthy, and more.
- **Categories**: `music`, `comedy`, `dance`, `theatre`, `festival`, `community`

---

## 📐 Schema Specification

### Event Schema
Each event entry adheres to the [event schema](schema/event.schema.json):

| Field | Type | Required | Description | Example |
| :--- | :--- | :--- | :--- | :--- |
| `title` | `string` | **Yes** | Performer, artist, or event name | `"Blackwater Railroad Company"` |
| `venue` | `string` | **Yes** | Venue or stage name | `"Koot's"` |
| `city` | `string` | **Yes** | Alaska city or community | `"Anchorage"` |
| `date` | `string` | **Yes** | Event date in `YYYY-MM-DD` | `"2026-07-25"` |
| `time` | `string` | No | Performance start and end time | `"9:00 PM"` |
| `ticketUrl` | `string` | No | URL to ticket sales or venue information | `"https://..."` |
| `category` | `string` | **Yes** | Event category (`music`, `comedy`, `dance`, etc.) | `"music"` |
| `cost` | `string` | No | Admission price or cover charge | `"$15"` |

### Venue Schema
Each venue entry in [`venues.json`](venues.json) adheres to the [venue schema](schema/venue.schema.json) and provides direct links for AI scrapers:

| Field | Type | Description | Example |
| :--- | :--- | :--- | :--- |
| `id` | `string` | Unique URL-friendly slug | `"koots"` |
| `name` | `string` | Canonical venue display name | `"Koot's"` |
| `city` | `string` | Alaska city or community | `"Anchorage"` |
| `address` | `string` | Physical street address | `"2435 Spenard Rd, Anchorage, AK 99503"` |
| `lat`, `lng` | `number` | GPS coordinates | `61.1906`, `-149.9075` |
| `website` | `string` | Official venue website URL | `"https://koots.com/"` |
| `facebookUrl` | `string` | Official Facebook page URL | `"https://www.facebook.com/ChilkootCharlies"` |
| `facebookEventsUrl` | `string` | Direct Facebook events calendar tab | `"https://www.facebook.com/kootsak/events"` |
| `phone` | `string` | Contact phone number | `"(907) 272-1010"` |
| `email` | `string` | Contact email address | `"promo@koots.com"` |
| `type` | `string` | Venue category | `"Live Music Venue"` |
| `capacity` | `integer` | Attendee capacity | `900` |
| `indoor` | `boolean` | Indoors / Outdoors flag | `true` |
| `aliases` | `array` | Alternate names and flyer aliases | `["koots", "chilkoot charlie's"]` |
| `scrapeNotes` | `string` | AI scraper lookup instructions | `"Check facebook events for upcoming shows."` |

### JSON Example
```json
{
  "title": "Blackwater Railroad Company",
  "venue": "Koot's",
  "city": "Anchorage",
  "date": "2026-07-25",
  "time": "10:00 PM",
  "ticketUrl": "https://koots.com",
  "category": "music",
  "cost": "$15"
}
```

---

## 💻 Developer Usage

### JavaScript / TypeScript
```javascript
// Fetch the latest Alaska concert events
const res = await fetch('https://raw.githubusercontent.com/akconcerts/events/main/events.json');
const events = await res.json();

// Filter for upcoming music in Anchorage
const anchorageConcerts = events.filter(e => e.city === 'Anchorage' && e.category === 'music');
console.log(`Found ${anchorageConcerts.length} Anchorage concerts`);
```

### Python
```python
import pandas as pd

# Load directly into Pandas DataFrame
url = "https://raw.githubusercontent.com/akconcerts/events/main/events.csv"
df = pd.read_csv(url)

# Display top 5 upcoming shows
print(df[["date", "title", "venue", "city"]].head())
```

### cURL
```bash
# Download latest events
curl -sO https://raw.githubusercontent.com/akconcerts/events/main/events.json

# Query with jq
jq '.[] | select(.city == "Juneau")' events.json
```

---

## 📜 License

This open dataset is provided under the [MIT License](LICENSE). Free for public, educational, and commercial use with attribution.
