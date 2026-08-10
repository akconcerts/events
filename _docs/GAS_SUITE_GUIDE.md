# 🎸 AK Concerts — Master Google Sheet & Apps Script Suite (30 Tool Management Suite)

This guide documents how Cody's Google Sheet & Google Apps Script (GAS) suite powers the entire automated live event pipeline for [akconcerts.com](https://www.akconcerts.com) and the public repository [`akconcerts/events`](https://github.com/akconcerts/events).

---

## 🛠️ Step-by-Step Installation Instructions for Cody

1. Open your **Google Sheet** (or import [`akconcerts_database.xlsx`](file:///Volumes/homes/Kevin/AI_BUILDS/AKCONCERTS-COM_AG-v101/akconcerts-com/akconcerts_database.xlsx)).
2. Click **Extensions > Apps Script**.
3. Replace all default code with the contents of [`scripts/google_apps_script.js`](file:///Volumes/homes/Kevin/AI_BUILDS/AKCONCERTS-COM_AG-v101/akconcerts-com/scripts/google_apps_script.js) and click **Save**.
4. Click **Deploy > New deployment**.
5. Select type **Web app**, set:
   - **Execute as**: `Me`
   - **Who has access**: `Anyone`
6. Copy the generated **Web App URL** and set it as `PUBLIC_SUBMIT_FORM_URL` in your Vercel/Netlify environment variables.
7. Open your Google Sheet — the new header menu **`🎸 AK Concerts Admin`** will appear automatically!

---

## 📱 Google Sheet Admin Submenu Breakdown (`🎸 AK Concerts Admin`)

```
🎸 AK Concerts Admin
├── ⚡ Site & GitHub Sync
│   ├── 🚀 Trigger Website Rebuild (Automated Webhook Dispatch)
│   ├── 🔄 Sync Database Feeds
│   ├── 📡 Verify Webhook Health
│   └── ⚡ Run Live API Pull (Ticketmaster/Eventbrite)
│
├── ✅ Approvals & Queue
│   ├── ⚡ Batch Approve Clean Rows (1-Click approves all non-duplicate pending rows)
│   ├── 🚫 Reject Flagged Duplicates
│   ├── 🎨 Reset Approval Highlighting
│   └── 🚨 Toggle Cancelled / Postponed Status
│
├── 📂 Automatic Tabs & Archiving
│   ├── 📅 Auto-Organize Yearly Tabs (2018-2027+)
│   ├── 📍 Partition by City Tabs
│   ├── 📦 Archive Expired Past Events
│   └── 💾 1-Click Database Backup to Google Drive
│
├── 📧 Marketing & Socials
│   ├── ✉️ Draft Thursday Weekend Email (Creates formatted Gmail draft)
│   ├── 🎨 Generate Instagram Story Graphic (1080x1920 PNG preview)
│   ├── 📱 Generate Social Media Posts
│   └── 📊 Export Newsletter Subscribers
│
├── 🧹 Data Hygiene & Intelligence
│   ├── 🔍 Scan & Flag Duplicates
│   ├── ⏱️ Standardize Dates & Times (Normalizes YYYY-MM-DD and 9p-1a)
│   ├── 🔗 Check Broken Ticket Links
│   ├── 🗺️ Geocode Missing Venue Coordinates
│   └── 🤖 Machine Learning Category Classifier
│
└── 📊 Directories & Analytics
    ├── 🎸 Build Master Artists Index Tab
    ├── 🏛️ Build Venue CRM Directory Tab
    ├── 💵 Calculate Ticket Price & Free Show Stats
    ├── 📈 Refresh Dashboard Summary
    └── 📜 View Multi-User Audit Trail Log
```

---

## 💡 Comprehensive 30 Management Tool Features Index

### 1. ⚡ 1-Click Dropdown Approval with Auto-Timestamping
Selecting `Approved` from Column 1 automatically highlights the row green (`#dcfce7`), assigns an Event ID (`AKC-849201`), and timestamps approval date.

### 2. 🚀 Automated GitHub Dispatch Webhook
Sends an instant HTTPS POST request to GitHub Actions (`repository_dispatch`). `akconcerts.com` rebuilds live in **30 seconds** without touching a terminal.

### 3. ⚠️ Real-Time Duplicate Event Detector
Automatically flags incoming submissions matching existing date + venue + title as `⚠️ DUPLICATE MATCH` in orange.

### 4. 🏛️ Master Venue & City Auto-Populator
`VLOOKUP` integration populates City, Street Address, and GPS coordinates automatically when typing venue names like `Koot's` or `Bear Tooth`.

### 5. ⏱️ Automated Date & Time Formatter
Normalizes dates to `YYYY-MM-DD` and standardizes start times to clean Alaskan format (`9p-1a`).

### 6. 📦 1-Click Past Event Archiver (`archivePastEvents()`)
Moves events past `TODAY()` into `Past_Events_Archive`, keeping the main queue clean.

### 7. 📬 Thursday Newsletter Email Digest Generator
Compiles all `Approved` weekend shows into a formatted HTML draft inside Cody's Gmail ready to send to subscribers.

### 8. 🎨 Conditional Category Color Badges
Visual formatting for `music` (gold), `comedy` (blue), `dance` (pink), `theatre` (purple), `festival` (green).

### 9. 🗺️ Google Maps Address & GPS Geocoder
Looks up new venue addresses using Google Maps API and auto-fills `Latitude` and `Longitude` for the Leaflet interactive map.

### 10. 📊 Real-Time Analytics Dashboard
Visual summary charts tracking Total Events Approved, Submissions by City, and Top 5 Venues.

### 11. 🤖 Automated Scraper Health Monitoring Tab (`Scraper_Status`)
Tab tracking daily health status of 20 venue scrapers, highlighting broken venue layouts in red.

### 12. 🎨 Instagram Story Graphic Auto-Generator (Bannerbear API)
Outputs a 1080x1920 PNG graphic for Instagram & Facebook Stories featuring the top 5 weekend concerts.

### 13. 📱 SMS Instant Alert for Major Touring Acts (Twilio API)
Sends SMS notifications to Cody's phone whenever a major touring act or arena concert is submitted.

### 14. 🎸 Bands & Artists Master Index Tab (`Master_Artists`)
Auto-aggregating tab logging every band that has played in Alaska since 2018, show count, last venue, and city.

### 15. 🏛️ Venue Manager & Booking CRM Tab (`Venue_CRM`)
Directory tab storing venue manager names, phone numbers, booking emails, load-in hours, and soundman contacts for 100+ Alaskan venues.

### 16. 💵 Average Ticket Price & Free Show Analytics
Calculates average ticket prices per city and flags free community events with a `$0 / FREE` badge.

### 17. ⚡ Instant Ticketmaster & Eventbrite API Pull Trigger
Menu button `Run Live API Pull` that triggers an instant API fetch for new listings into the queue.

### 18. 🛡️ Multi-User Permission & Audit Trail Log (`Audit_Trail`)
Logs every edit, approval, rejection, or submission with timestamp, user email, and IP address.

### 19. 📅 Automated Public Google Calendar Sync (`SyncToGoogleCalendar`)
Syncs approved events directly into a public Google Calendar (`akconcerts@gmail.com`) for iOS/Android subscriber feeds.

### 20. 💾 1-Click Database Backup & Restore (`createDatabaseBackup()`)
Creates a timestamped `.xlsx` and `.csv` backup in Cody's Google Drive before major edits.

### 21. 📅 Smart Dynamic Yearly Tab Partitioner (`autoOrganizeYearlyTabs()`)
Auto-routes shows into `2026_Events`, `2027_Events`, etc., automatically creating new year tabs when new dates arrive.

### 22. 📍 Regional City-by-City Tab Partitioning (`partitionByCityTabs()`)
Organizes regional tabs (`Anchorage_Events`, `Fairbanks_Events`, `Juneau_Events`, `Kenai_Peninsula_Events`).

### 23. 🎨 Automated Row Highlighting by Approval Status
Green for Approved, Red for Rejected, Orange for Duplicates.

### 24. 🏷️ Recurring Weekly Event Auto-Generator
Generates 52 weekly event instances across the year for weekly shows with 1 click.

### 25. 🚨 Emergency Cancel / Postponed Status Toggle
Dropdown option `Cancelled` or `Postponed` that triggers an instant update to the RSS feed, iCal feed, and site banner.

### 26. 🔗 Smart Broken Ticket Link Checker
Pings submitted ticket links in the background, flagging broken/expired links in red.

### 27. 👥 Promoter & Band Contact Rolodex Tab (`Promoter_Directory`)
Stores band contacts, press kits, and performance history.

### 28. 📊 Automatic Monthly Data Backup to Google Drive
Exports timestamped backup snapshots on the 1st of every month.

### 29. 🤖 Machine Learning Category Auto-Classifier
Parses event titles and automatically pre-selects `music`, `comedy`, `theatre`, or `festival`.

### 30. 📱 WhatsApp & Telegram Webhook Broadcast
Sends instant webhook notifications to an Alaskan music community broadcast group when major shows are announced.
