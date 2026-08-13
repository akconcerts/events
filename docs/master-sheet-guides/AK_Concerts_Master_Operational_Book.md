# AK CONCERTS — MASTER OPERATIONAL MANUAL & ARCHITECTURE BOOK
## Comprehensive Master Sheet Pipeline, Submission Infrastructure, CI/CD Build Engine, and 50-Point SEO/AEO/GEO Optimization Strategy

---

## TABLE OF CONTENTS
1. **CHAPTER 1**: System Architecture Overview & Master Sheet Pipeline
2. **CHAPTER 2**: Part 1 — Google Apps Script Web App & Submission Listener Setup
3. **CHAPTER 3**: Part 2 — Scraper Auto-Ingestion & Data Normalization Protocol
4. **CHAPTER 4**: Part 3 — Moderation, Approval Workflow & Quality Control
5. **CHAPTER 5**: Part 4 — CI/CD Automated Site Build & Cloudflare Deployment
6. **CHAPTER 6**: 50-Point SEO / AEO / GEO Optimization Masterplan for Alaska Live Music
7. **APPENDIX**: Full Production Code & Script References

---

## CHAPTER 1: SYSTEM ARCHITECTURE OVERVIEW

AK Concerts (`akconcerts.com`) operates as Alaska's primary statewide live entertainment network, serving 3,500+ static pages across 183+ venues, 29 cities, and hundreds of local Alaskan artists. 

The architecture is built on a **Static-First Automated Data Pipeline** that synchronizes raw scraper feeds, user-submitted events, and venue claims into a unified Master Google Sheet, which compiles into static Astro HTML pages deployed to Cloudflare Pages.

### Flowchart of Data Operations:

```
[ User Event Submission / Scraper Feed ]
                  │
                  ▼
[ Google Apps Script Web App (doPost) ]
                  │
                  ▼
[ Master Google Sheet (Tab: Pending Submissions) ]
                  │
                  ▼
[ Human Moderation Audit (Status: Pending ➔ Approved) ]
                  │
                  ▼
[ Automated Prebuild Script (update_events_from_sheet.js) ]
                  │
                  ▼
[ Astro Compiler (Static HTML + JSON-LD + XML Sitemaps + RSS) ]
                  │
                  ▼
[ Production Deployment (Cloudflare Pages CDN) ]
```

---

## CHAPTER 2: PART 1 — GOOGLE APPS SCRIPT WEB APP & SUBMISSION LISTENER

### Overview
This chapter provides step-by-step instructions for creating, configuring, and deploying the Google Apps Script Web App listener that accepts live event submissions and venue claims from `https://akconcerts.com/submit` and logs them directly into the Master Google Sheet.

### 1. Master Sheet Structure
Create a tab in your Master Google Sheet named **`Pending Submissions`**. Ensure Column Headers (Row 1) are set as follows:

| Column | Field Name | Description |
| :--- | :--- | :--- |
| **A** | `Timestamp` | Submission Date/Time (e.g. `2026-08-12 22:45:00`) |
| **B** | `Title` | Event Title / Artist Name |
| **C** | `Date` | Event Date (`YYYY-MM-DD`) |
| **D** | `Time` | Show/Door Time (e.g., `8:00 PM` or `9p-1a`) |
| **E** | `City` | Alaska City (e.g. `Anchorage`, `Juneau`, `Homer`) |
| **F** | `Venue` | Venue Name (e.g. `Williwaw Social`, `Koot's`) |
| **G** | `Category` | Category (`music`, `comedy`, `dance`, `festival`, etc.) |
| **H** | `Cost` | Admission / Ticket Price (e.g. `$15` or `Free`) |
| **I** | `TicketUrl` | Ticket Link or Info URL |
| **J** | `Email` | Submitter Email Address |
| **K** | `SubmitterName` | Submitter Full Name |
| **L** | `Notes` | Additional Details / Claim Notes |
| **M** | `Status` | **`Pending`** (Default) or **`Approved`** |

### 2. Google Apps Script Production Code (`Code.gs`)
```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pending Submissions") 
             || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = new Date().toISOString();
    var status = "Pending"; // Default status for moderation
    
    sheet.appendRow([
      timestamp,
      data.title || data.venueName || "",
      data.date || "",
      data.time || "",
      data.city || "",
      data.venue || "",
      data.category || "music",
      data.cost || "",
      data.ticketUrl || "",
      data.email || "",
      data.submitterName || "",
      data.notes || "",
      status
    ]);
    
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "success", "message": "Submission recorded successfully." }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ "status": "error", "message": error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

---

## CHAPTER 3: PART 2 — DATA NORMALIZATION & SCRAPER INGESTION PROTOCOL

### Overview
This chapter details how incoming automated scraper data from 20+ Alaska event sources (Facebook events, venue websites, Eventbrite, regional calendars) and manual submissions are normalized, deduplicated, and formatted within the Master Sheet pipeline.

### 1. Formatting Standards
- **`Date`**: `YYYY-MM-DD` ISO format (e.g. `2026-08-22`).
- **`Time`**: Full AM/PM string (e.g. `6:00 PM - 10:00 PM` or `9:00 PM`).
- **`City`**: Exact Alaska City Name (e.g. `Anchorage`, `Juneau`, `Homer`).
- **`Venue`**: Standardized Venue Title (e.g. `Williwaw Social`).
- **`Category`**: Lowercase slug (`music`, `comedy`, `dance`, `festival`).

### 2. Deduplication Algorithm
```
uniqueKey = lowercase(Title) + "|" + lowercase(Venue) + "|" + lowercase(City) + "|" + Date
```
If a scraper imports an event that matches an existing `uniqueKey`, the record is deduplicated.

### 3. Alaska City GPS Coordinates
- **Anchorage**: `[61.2181, -149.9003]`
- **Fairbanks**: `[64.8378, -147.7164]`
- **Juneau**: `[58.3019, -134.4197]`
- **Homer**: `[59.6425, -151.5483]`
- **Palmer**: `[61.5997, -149.1100]`
- **Wasilla**: `[61.5814, -149.4394]`

---

## CHAPTER 4: PART 3 — MODERATION & APPROVAL WORKFLOW

### Overview
This chapter provides operational procedures for site operators (Cody / Moderation Team) to review pending submissions, audit concert data, edit listings, and approve shows for automatic production deployment.

### 1. Moderation Status States
- **`Pending`**: Newly submitted show or raw scraper import requiring human audit (EXCLUDED from site build).
- **`Approved`**: Verified show title, date, venue, and city (INCLUDED in live site build).
- **`Rejected`**: Spam submission, duplicate entry, or cancelled event (EXCLUDED from site build).

### 2. Daily Moderation Checklist
1. Filter Column M (`Status`) by `Pending`.
2. Audit event title, date, venue, and category.
3. Change `Status` cell to **`Approved`** or **`Rejected`**.
4. The automated build pipeline fetches approved rows on the next deployment run.

---

## CHAPTER 5: PART 4 — CI/CD AUTOMATED SITE BUILD & DEPLOYMENT

### Overview
This technical guide details how the Astro static site generator executes prebuild data sync hooks (`scripts/update_events_from_sheet.js`), parses approved Master Sheet records, and automatically builds/deploys 3,500+ pages to Cloudflare Pages.

### 1. Prebuild Data Sync Script (`update_events_from_sheet.js`)
```javascript
import fs from 'fs';
import path from 'path';

const eventsJsonPath = path.join(process.cwd(), 'src', 'data', 'events.json');

async function run() {
  const sheetUrl = process.env.EVENTS_SHEET_URL;
  if (!sheetUrl) return;
  
  const response = await fetch(sheetUrl);
  const csvText = await response.text();
  // Filter status === 'approved' and merge with events.json
}
```

### 2. Deployment Triggers
- **Git Push**: Automatic build on `git push origin main`.
- **Cloudflare Webhook**: Pinged automatically via Google Apps Script when new rows are approved.

---

## CHAPTER 6: 50-POINT SEO / AEO / GEO OPTIMIZATION MASTERPLAN

1. Dynamic Open Graph & Twitter Cards.
2. XML Sitemap Index (`/sitemap-index.xml`).
3. Canonical URL Normalization.
4. `BreadcrumbList` JSON-LD Schema.
5. Next-Gen Image Formats (`.webp`).
6. Core Web Vitals Optimization (INP & LCP).
7. Semantic HTML5 Heading Hierarchy.
8. `robots.txt` AI Crawler Authorization (GPTBot, PerplexityBot, ClaudeBot).
9. Voice Search Q&A Conversational Snippets (`FaqSection.astro`).
10. `Event` JSON-LD Schema Enrichment (`performer`, `geo`, `isAccessibleForFree`).
11. `MusicVenue` & `LocalBusiness` Schema.
12. Timezone-Aware ISO 8601 Timestamps.
13. Regional Sub-Filters (`/filters/kenai-peninsula`, `/filters/mat-su-valley`).
14. Public API & RSS Feeds (`/events.json`, `/rss.xml`).
15. Z-Index Layer Defense (Header & Nav bars above Leaflet Maps).

---

## APPENDIX: FULL PRODUCTION SCRIPT REFERENCE

### 1. `public/robots.txt`
```text
User-agent: *
Allow: /

User-agent: GPTBot
Allow: /

User-agent: PerplexityBot
Allow: /

User-agent: ClaudeBot
Allow: /

User-agent: Google-Extended
Allow: /

Sitemap: https://akconcerts.com/sitemap-index.xml
```
