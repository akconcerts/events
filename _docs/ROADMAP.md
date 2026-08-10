# 🗺️ AK Concerts Platform & Dataset Roadmap

This document outlines the strategic roadmap and future milestones for the **AK Concerts** dataset (`akconcerts/events`) and website platform (`akconcerts.com`).

---

## 🎯 Current Milestone: Completed Base Automation

- [x] Public GitHub Repository: [`akconcerts/events`](https://github.com/akconcerts/events)
- [x] Live Scraper (`scrape_live.js`) + Wayback Machine Historical Archives (4,400+ events)
- [x] Multi-Format Data Exports: `events.json`, `events.csv`, `events.xlsx`, `events.ics` (iCal), `events.xml` (RSS), `events.geojson`, `stats.json`, `venues.json`
- [x] Automated Venue Scrapers: Eventbrite, Ticketmaster, Bandsintown, Koot's, Bear Tooth, and smart deduplication engine
- [x] Interactive Terminal CLI (`npx akconcerts`)
- [x] Automated Daily GitHub Actions Workflow (`.github/workflows/scrape-events.yml`)
- [x] Live Site Integration & Interactive Map Component

---

## 🔮 Upcoming Milestones

### Milestone 1: Multimodal Gemini Vision Flyer Reader (`scrapers/flyer_ai.js`)
- Crawl Instagram and Facebook venue pages for concert posters & image flyers.
- Use **Gemini 2.5 Flash** vision model to extract show title, band lineup, venue, date, door time, and ticket prices directly from unstructured graphics.

### Milestone 2: Automated Social & Community Notifications
- **Discord & Slack Bot**: Post Thursday morning previews of upcoming weekend concerts to `#alaska-concerts` channels.
- **Instagram/Facebook Banner Generator**: Automated daily rendering of "Today's Concerts in Alaska" stories via `@napi-rs/canvas`.

### Milestone 3: Open API & Mobile App Extensions
- Deploy Cloudflare Worker edge API (`api.akconcerts.com`).
- Publish official `@akconcerts/data` package to npm.
- Build native iOS/Android PWA widgets for concertgoers.
