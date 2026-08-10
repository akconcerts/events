# 🎸 AK Concerts — Project Roadmap & Implementation Plan

## Phase 1: Core Dataset & Public Repository Setup (COMPLETED)
- [x] Create public GitHub repository [`akconcerts/events`](https://github.com/akconcerts/events).
- [x] Scrape 281 active live events from `akconcerts.com`.
- [x] Scrape 4,355 historical events via Wayback Machine (2018–2026).
- [x] Smart fuzzy deduplication (`dedupe_engine.js`) resulting in 4,411 unique events.
- [x] Multi-format feed exporters (`events.json`, `events.csv`, `events.xlsx`, `events.ics`, `events.xml`, `events.geojson`, `stats.json`, `venues.json`).
- [x] Partitioned archives (`years/` directory for 2019–2026, `cities/` directory for 28 cities).

## Phase 2: Web Application & Components (COMPLETED)
- [x] Modern Astro SSG web application with 1,910 statically compiled pages.
- [x] Interactive Leaflet dark-mode venue map component (`ConcertMap.astro`).
- [x] Web-based Event Submission & Venue Claim form (`submit.astro`).
- [x] Support & Donate page (`support.astro`) featuring Cody's authentic story and live PayPal, Venmo, Patreon links.
- [x] Learn & Music Lessons Directory (`learn/index.astro`) with dynamic individual child pages for all Alaskan instructors (`learn/[slug].astro`).

## Phase 3: Master Google Sheet & Apps Script Suite (COMPLETED)
- [x] 30 Tool Google Apps Script Suite ([`scripts/google_apps_script.js`](file:///Volumes/homes/Kevin/AI_BUILDS/AKCONCERTS-COM_AG-v101/akconcerts-com/scripts/google_apps_script.js)).
- [x] Custom Google Sheets Admin Header Menu (`🎸 AK Concerts Admin`).
- [x] 1-Click Dropdown Approval with auto-timestamping and Event ID generation.
- [x] Real-time Duplicate Event Warning & Flagging.
- [x] Automatic Yearly Tab Partitioner (`autoOrganizeYearlyTabs()`).
- [x] 1-Click Database Backup to Google Drive (`createDatabaseBackup()`).
- [x] Thursday Weekend Email Digest Generator.
- [x] Venue Manager CRM Tab (`Venue_CRM`) & Master Artists Index (`Master_Artists`).
- [x] Multi-User Audit Trail Log (`Audit_Trail`).

## Phase 4: Automated Scraper Workers & CD Pipeline (COMPLETED)
- [x] Scraper workers for Ticketmaster API, Eventbrite API, Bandsintown API, Koot's, Bear Tooth.
- [x] Daily automated GitHub Actions workflow (`.github/workflows/scrape-events.yml`).
- [x] GitHub Repository Dispatch Webhook for instant ~30s live site rebuilds.
