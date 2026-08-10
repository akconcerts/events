# 🚀 AK Concerts — Complete Site Architecture & Data Flow Guide

This document outlines the full architecture, data pipeline, scraper infrastructure, component hierarchy, and deployment flow powering **[akconcerts.com](https://www.akconcerts.com)** and the open public repository **[`akconcerts/events`](https://github.com/akconcerts/events)**.

---

## 🏗️ System Architecture Overview

```
                          ┌────────────────────────┐
                          │  AK Concerts Live Site │
                          │    (akconcerts.com)    │
                          └───────────┬────────────┘
                                      │
              ┌───────────────────────┼───────────────────────┐
              ▼                       ▼                       ▼
    ┌──────────────────┐    ┌──────────────────┐    ┌──────────────────┐
    │  Live Scraper    │    │ Wayback Machine  │    │ Google Sheets /  │
    │ (281 Live Shows) │    │(4,355 Past Shows)│    │ Web Submissions  │
    └─────────┬────────┘    └─────────┬────────┘    └─────────┬────────┘
              │                       │                       │
              └───────────────────────┼───────────────────────┘
                                      ▼
                        ┌───────────────────────────┐
                        │ Smart Deduplication Engine│
                        │   (dedupe_engine.js)      │
                        └─────────────┬─────────────┘
                                      ▼
                        ┌───────────────────────────┐
                        │ Master Dataset & Feeds    │
                        │ (4,411 Unique AK Events)  │
                        └─────────────┬─────────────┘
                                      │
      ┌───────────────────────────────┼───────────────────────────────┐
      ▼                               ▼                               ▼
┌──────────────┐              ┌──────────────┐                ┌──────────────┐
│  Multi-Feed  │              │ Year/City    │                │  Astro SSG   │
│  Exporters   │              │ Archives     │                │  Static App  │
│ (JSON, CSV,  │              │ (years/ &    │                │ (1,910 HTML  │
│  iCal, RSS)  │              │  cities/)    │                │   Pages)     │
└──────────────┘              └──────────────┘                └──────────────┘
```

---

## 📂 Key File & Component Directory Structure

```
akconcerts-com/
├── events.json                 <-- Master dataset (All 4,411 events)
├── events.csv                  <-- Master CSV spreadsheet
├── events.xlsx                 <-- Master Excel workbook
├── events.ics                  <-- iCal feed for Apple/Google Calendar
├── events.xml                  <-- RSS 2.0 feed
├── events.geojson              <-- GeoJSON spatial map dataset
├── stats.json                  <-- Analytics summary
├── venues.json                 <-- Alaskan venue catalog (GPS, addresses)
│
├── years/                      <-- 📁 Yearly Partitioned Archives (2019-2026+)
│   ├── 2026.json | 2026.csv
│   └── 2025.json | 2025.csv
│
├── cities/                     <-- 📁 City Partitioned Archives (28 Cities)
│   ├── anchorage.json
│   └── juneau.json
│
├── _docs/                      <-- 📁 Comprehensive Setup & Architectural Guides
│   ├── GAS_SUITE_GUIDE.md      <-- Google Apps Script & 30 Database Tools Guide
│   ├── SITE_ARCHITECTURE.md    <-- System & Pipeline Architecture
│   ├── ROADMAP.md              <-- Project Roadmap
│   └── THINGSTOBUILD.md        <-- Ideas & Feature Backlog
│
├── scripts/                    <-- 📁 Scrapers & Ingestion Engines
│   ├── scrape_live.js          <-- Scrapes active shows from live site
│   ├── scrape_wayback.js       <-- Scrapes historical archives back to 2018
│   ├── export_feeds.js         <-- Generates RSS, iCal, GeoJSON, years/, cities/
│   ├── google_apps_script.js   <-- Cody's master Google Sheet admin suite
│   ├── generate_xlsx.js        <-- Excel workbook generator
│   └── scrapers/               <-- Individual venue scraper workers
│       ├── koots.js
│       ├── beartooth.js
│       ├── ticketmaster_api.js
│       ├── eventbrite_api.js
│       └── dedupe_engine.js
│
└── src/                        <-- 📁 Astro Web Application
    ├── components/
    │   ├── ConcertMap.astro    <-- Interactive Leaflet dark-mode venue map
    │   ├── EventCard.astro     <-- Reusable event display card
    │   ├── SiteHeader.astro    <-- Navigation header
    │   └── SiteFooter.astro    <-- Site footer
    └── pages/
        ├── index.astro         <-- Main Homepage with Leaflet Map
        ├── submit.astro        <-- Web Form & Venue Claim Page
        ├── support.astro       <-- Support & Donate Page (Venmo, PayPal, Patreon)
        ├── donate.astro        <-- Alias mapping to support.astro
        ├── learn/
        │   ├── index.astro     <-- Main Learn & Music Lessons Directory
        │   └── [slug].astro    <-- Dynamic individual instructor child pages
        ├── events/
        │   └── [slug].astro    <-- Dynamic individual event detail pages
        └── bands/
            └── [slug].astro    <-- Dynamic artist/band profile pages
```

---

## 🔄 Automated Ingestion & Build Workflow

1. **Daily GitHub Action (`.github/workflows/scrape-events.yml`)**:
   - Runs daily at 06:00 UTC.
   - Executes `scripts/run_all_workers.js` to scrape live venue sites.
   - Runs `scripts/update_events_from_sheet.js` to ingest `Approved` rows from Cody's Google Sheet.
   - Runs `scripts/export_feeds.js` to regenerate all feeds (`events.json`, `events.csv`, `events.ics`, `events.xml`, `events.geojson`, `years/`, `cities/`).
   - Automatically commits changes and triggers production deployment!

2. **Google Sheet 1-Click Webhook Rebuild**:
   - Cody approves a show in Google Sheets.
   - Google Apps Script fires a `repository_dispatch` webhook to GitHub.
   - Site rebuilds live on Vercel/Netlify in ~30 seconds.
