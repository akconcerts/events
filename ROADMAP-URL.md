# AK Concerts — Production Launch Roadmap & Domain Migration Guide

> **Target Custom Domain**: `https://akconcerts.com` (and `https://www.akconcerts.com`)  
> **Cloudflare Pages Staging URL**: `https://akconcerts-com.pages.dev`  
> **GitHub Source Repositories**:  
> - `https://github.com/akconcerts/events.git` (Origin)  
> - `https://github.com/kb907alaska/akconcerts-com.git`  
> **Target Launch Date**: Today (August 13, 2026)

---

## 1. Pre-Flight Production Verification Checklist

All items below have been audited, tested, verified, and pushed to `main` branch.

- [x] **America/Anchorage Centralized Timezone Architecture**
  - All date evaluations, sorting, feed filters, and status calculations use `America/Anchorage` as the single source of truth (`src/utils/date.ts`).
  - Single start-time events include a 4-hour duration buffer before being marked past.
  - UTC date string offset bugs fixed across `EventCard.astro` and `events/[slug].astro`.
- [x] **Event & Artist Dataset Audit**
  - 5,043 unique events across 28 Alaska communities fully audited.
  - 100% of event titles cleaned of timestamp fragments (e.g. `5p-`, `6:30p-`).
  - 102 venue names cleaned of trailing time artifacts.
- [x] **New Key Pages & Features**
  - **Full-Screen Venue Map** (`/map`): Full-viewport Leaflet canvas with top overlay filter bar (search + city pills).
  - **Band Registration** (`/submit-band`): Complete press kit submission form with Google Drive Staging (`/Pending Bands/` -> `/Approved Bands/`) workflow.
  - **Contact Page** (`/contact`): Direct email cards (`hello@`, `events@`, `media@akconcerts.com`), social tiles, and interactive contact form.
  - **Past Events Archive** (`/past/`): Filterable archive with `PAST EVENT` badges grouped chronologically.
- [x] **SEO / AEO / GEO Search Engine Infrastructure**
  - `@astrojs/sitemap` integration configured (`/sitemap-index.xml`).
  - Schema.org JSON-LD Graph (`Organization`, `WebSite` with `SearchAction`, `FAQPage`, `MusicEvent`).
  - Geo-targeting meta tags (`geo.region: US-AK`, `geo.placename: Anchorage, Alaska`).

---

## 2. Cloudflare Pages Custom Domain DNS Switchover

Follow these steps to transition `https://akconcerts.com` from the legacy Wix hosting to Cloudflare Pages:

### Step 1: Add Custom Domain in Cloudflare Pages
1. Log in to the [Cloudflare Dashboard](https://dash.cloudflare.com).
2. Navigate to **Workers & Pages** $\rightarrow$ Select project **`akconcerts-com`**.
3. Select the **Custom Domains** tab $\rightarrow$ Click **Set up a custom domain**.
4. Enter `akconcerts.com` and click **Continue**.
5. Repeat for `www.akconcerts.com`.

### Step 2: Update DNS Records (Cloudflare DNS or Domain Registrar)
Delete existing Wix A/CNAME records and add the following records:

| Type | Name / Host | Target / Content | TTL | Proxy Status |
| :--- | :--- | :--- | :--- | :--- |
| **CNAME** | `@` (apex) | `akconcerts-com.pages.dev` | Auto | Proxied (Orange Cloud) |
| **CNAME** | `www` | `akconcerts-com.pages.dev` | Auto | Proxied (Orange Cloud) |

*(Note: If your DNS provider does not support CNAME flattening on apex `@`, use an **ALIAS** or **ANAME** record pointing to `akconcerts-com.pages.dev`)*.

### Step 3: SSL / TLS & Redirection Rules
1. In Cloudflare, navigate to **SSL/TLS** $\rightarrow$ Set encryption mode to **Full (Strict)**.
2. Enable **Always Use HTTPS** under **SSL/TLS** $\rightarrow$ **Edge Certificates**.
3. Set up an Automatic HTTPS / Page Rule to redirect `http://akconcerts.com/*` $\rightarrow$ `https://akconcerts.com/$1` (301 Permanent Redirect).

---

## 3. Post-Launch Verification & Indexing Protocol

Once DNS propagation completes (5–15 minutes):

1. **Live Domain Audit**:
   - Visit `https://akconcerts.com/` and confirm SSL certificate is valid.
   - Verify `https://akconcerts.com/map` loads the full-screen interactive Leaflet map.
   - Verify `https://akconcerts.com/submit-band` loads the Band Registration form.
   - Verify `https://akconcerts.com/past/` displays past shows with red pills.
2. **Search Engine Indexing Submission**:
   - Submit `https://akconcerts.com/sitemap-index.xml` in **Google Search Console**.
   - Submit `https://akconcerts.com/sitemap-index.xml` in **Bing Webmaster Tools**.
3. **Structured Data Validation**:
   - Run `https://akconcerts.com/` through [Google Rich Results Test](https://search.google.com/test/rich-results) to verify Schema.org JSON-LD graphs.

---

## 4. Ongoing Operations & Sheet Auto-Sync

- **Google Sheet Event Sync**:
  - Script path: `scripts/update_events_from_sheet.js`
  - Set `EVENTS_SHEET_URL` environment variable in Cloudflare Pages Build Settings to auto-pull live approved events from Google Sheets on every build trigger.
- **Band Registration Review Pipeline**:
  - Submissions arrive in `/AK Concerts Master Drive/Pending Bands/[Band Name]/`.
  - Approve media & bio $\rightarrow$ Transfer folder to `/AK Concerts Master Drive/Approved Bands/[Band Name]/` $\rightarrow$ Deploy updated band profile page.

---

*Document generated on August 13, 2026 for AK Concerts Production Launch.*
