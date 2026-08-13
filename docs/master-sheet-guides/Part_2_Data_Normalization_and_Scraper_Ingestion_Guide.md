# AK CONCERTS — MASTER SHEET GUIDE
## PART 2: Scraper Auto-Ingestion & Data Normalization Protocol

---

### 📋 Overview
This guide details how incoming automated scraper data from 20+ Alaska event sources (Facebook events, venue websites, Eventbrite, regional calendars) and manual submissions are normalized, deduplicated, and formatted within the Master Sheet pipeline.

---

### 1. Mandatory Data Formatting Rules

To maintain high data quality across 3,500+ static site pages, all incoming rows must adhere to these standards:

| Field | Required Format | Example | Incorrect Format |
| :--- | :--- | :--- | :--- |
| `Date` | `YYYY-MM-DD` ISO format | `2026-08-22` | `8/22/26` or `Aug 22` |
| `Time` | Full AM/PM string | `6:00 PM - 10:00 PM` or `9:00 PM` | `6pm-10pm` or `20:00` |
| `City` | Exact Alaska City Name | `Anchorage`, `Juneau`, `Homer` | `anchorage ak` or `ANC` |
| `Venue` | Standardized Venue Title | `Williwaw Social` | `Williwaw Bar & Grill` |
| `Category` | Lowercase predefined slug | `music`, `comedy`, `festival` | `Live Band` or `SHOW` |

---

### 2. Deduplication & Unique Identifier Key
The build pipeline generates a unique hash key for every incoming event:
```
uniqueKey = lowercase(Title) + "|" + lowercase(Venue) + "|" + lowercase(City) + "|" + Date
```

**Deduplication Rules:**
- If a scraper imports an event that matches an existing `uniqueKey`, the record is deduplicated.
- If details differ (e.g. ticket price or updated description), the Master Sheet record overrides the scraped fallback.

---

### 3. Alaska City & Coordinate Mapping
When scrapers import events from new venues, the pipeline automatically maps the venue to one of the 14 major Alaska regional coordinate centers:

- **Anchorage**: `[61.2181, -149.9003]`
- **Fairbanks**: `[64.8378, -147.7164]`
- **Juneau**: `[58.3019, -134.4197]`
- **Homer**: `[59.6425, -151.5483]`
- **Palmer**: `[61.5997, -149.1100]`
- **Wasilla**: `[61.5814, -149.4394]`
- **Seward**: `[60.1042, -149.4422]`
- **Girdwood**: `[60.9422, -149.1678]`
- **Talkeetna**: `[62.3208, -150.1066]`
- **Kenai / Soldotna**: `[60.5544, -151.2583]`

---

### 4. Automated CSV Export Configuration
To allow the build script to read the sheet automatically:
1. In Google Sheets, click **File** ➔ **Share** ➔ **Publish to web**.
2. Under Link, select **Entire Document** (or `Approved Events` tab) as **Comma-separated values (.csv)**.
3. Click **Publish** and copy the public CSV URL.
