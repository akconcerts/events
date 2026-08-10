# 🎸 Alaska Concerts & Events Database (`akconcerts/events`)

[![Auto Scrape & Update](https://github.com/akconcerts/events/actions/workflows/scrape-events.yml/badge.svg)](https://github.com/akconcerts/events/actions/workflows/scrape-events.yml)
[![Dataset Format](https://img.shields.io/badge/Formats-JSON%20%7C%20CSV%20%7C%20XLSX%20%7C%20TS-blue)](https://github.com/akconcerts/events)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)

A comprehensive, public open dataset of live music, concerts, comedy shows, theater, dance, festivals, and community events across Alaska. 

This repository contains both **live events scraped from [akconcerts.com](https://www.akconcerts.com)** and **historical archives retrieved via the Internet Archive (Wayback Machine)** dating back to 2018.

---

## 🚀 Quick Download & API Links

| Format | Direct Raw Link | Description |
| :--- | :--- | :--- |
| **JSON (Master)** | [Download `events.json`](https://raw.githubusercontent.com/akconcerts/events/main/events.json) | Complete master dataset as structured JSON |
| **CSV (Master)** | [Download `events.csv`](https://raw.githubusercontent.com/akconcerts/events/main/events.csv) | Standard master CSV format for spreadsheets, pandas, SQL |
| **Excel (XLSX)** | [Download `events.xlsx`](https://github.com/akconcerts/events/raw/main/events.xlsx) | Formatted Excel workbook for manual review & editing |
| **Yearly Archives** | [Browse `years/`](https://github.com/akconcerts/events/tree/main/years) | Partitioned yearly archives (`2026.json`, `2025.json`, `2024.json`, ...) |
| **City Archives** | [Browse `cities/`](https://github.com/akconcerts/events/tree/main/cities) | Partitioned city archives (`anchorage.json`, `fairbanks.json`, ...) |
| **iCal Feed** | [Subscribe `events.ics`](https://raw.githubusercontent.com/akconcerts/events/main/events.ics) | Apple Calendar / Google Calendar subscription feed |
| **RSS Feed** | [Subscribe `events.xml`](https://raw.githubusercontent.com/akconcerts/events/main/events.xml) | Standard RSS 2.0 feed |
| **GeoJSON Map** | [Download `events.geojson`](https://raw.githubusercontent.com/akconcerts/events/main/events.geojson) | Spatial map dataset with GPS venue coordinates |
| **TypeScript** | [View `events.ts`](https://github.com/akconcerts/events/blob/main/src/data/events.ts) | Typed TypeScript exports for Web / Astro apps |

---

## 📊 Dataset Statistics

- **Total Unique Events**: `4,400+`
- **Timeframe Covered**: August 2018 – Present
- **Geographic Coverage**: Anchorage, Fairbanks, Juneau, Kenai, Soldotna, Homer, Seward, Girdwood, Palmer, Wasilla, Talkeetna, Sitka, Ketchikan, Cordova, Haines, Valdez, Seldovia, Chugiak, Eagle River, and more.
- **Categories**: `music`, `comedy`, `dance`, `theatre`, `community`, `festival`

---

## 📐 Data Schema

Each event entry adheres to the following structure:

| Field | Type | Required | Description | Example |
| :--- | :--- | :--- | :--- | :--- |
| `id` | `string` | Yes | Unique sequential identifier | `"412"` |
| `date` | `string` | Yes | Event date in `YYYY-MM-DD` format | `"2026-07-25"` |
| `city` | `string` | Yes | Alaskan city where event takes place | `"Anchorage"` |
| `venue` | `string` | Yes | Venue or location name | `"Koot's"` |
| `category` | `string` | Yes | Event category (`music`, `comedy`, `dance`, `theatre`, `community`, `festival`) | `"music"` |
| `title` | `string` | Yes | Name of artist, show, or event | `"The Deadlocks Live"` |
| `time` | `string` | No | Performance start / end time | `"9p-1a"` |
| `ticketUrl` | `string` | No | Link to purchase tickets or view event page | `"https://... "` |
| `cost` | `string` | No | Admission price or ticket details | `"$15"` |

### JSON Sample
```json
{
  "id": "1",
  "date": "2026-07-17",
  "city": "Anchorage",
  "venue": "Chilkoot Charlie's",
  "category": "music",
  "title": "Super Sucker & The Hounds",
  "time": "10p-2a",
  "ticketUrl": "https://chilkootcharlies.com",
  "cost": "$10"
}
```

---

## 🔄 Automated Data Pipeline

This repository runs an automated **GitHub Action** (`.github/workflows/scrape-events.yml`) that executes daily:
1. **Live Scrape**: Launches Puppeteer to render and parse client-side dynamic text elements from [akconcerts.com](https://www.akconcerts.com).
2. **Wayback Machine Retrieval**: Queries the Internet Archive CDX API for snapshots of `akconcerts.com` and `www.akconcerts.com` across all historical capture months.
3. **Parsing & Normalization**: Extracts city headers, dates, venues, titles, times, and ticket links into structured events.
4. **Deduplication & Merge**: Merges new and historical records, deduplicating on `(title, venue, city, date)`.
5. **Multi-Format Export**: Re-compiles and commits updated `events.json`, `events.csv`, `events.xlsx`, and `src/data/events.ts`.

---

## 🛠️ Local Development & Scraping

To run the scrapers and parse data locally:

```bash
# 1. Clone the repository
git clone https://github.com/akconcerts/events.git
cd events

# 2. Install dependencies
npm install

# 3. Scrape the current live site
npm run scrape:live

# 4. Scrape historical Wayback Machine snapshots
npm run scrape:wayback

# 5. Parse live and historical raw files
npm run parse:live
npm run parse:wayback

# 6. Merge, deduplicate, and export all formats
npm run merge
```

---

## 📜 License

This dataset and scraper codebase are open source under the [MIT License](LICENSE).
