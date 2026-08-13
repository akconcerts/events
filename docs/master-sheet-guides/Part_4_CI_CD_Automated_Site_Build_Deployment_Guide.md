# AK CONCERTS — MASTER SHEET GUIDE
## PART 4: CI/CD Automated Site Build & Cloudflare Deployment

---

### 📋 Overview
This technical guide details how the Astro static site generator executes prebuild data sync hooks (`scripts/update_events_from_sheet.js`), parses approved Master Sheet records, and automatically builds/deploys 3,500+ pages to Cloudflare Pages.

---

### 1. Build Pipeline Lifecycle

```
[ Trigger Build (Git Push / Webhook / Daily Cron) ]
                       │
                       ▼
[ Prebuild Hook: update_events_from_sheet.js ]
  ├── 1. Check process.env.EVENTS_SHEET_URL
  ├── 2. Fetch CSV from Google Sheets
  ├── 3. Parse CSV rows & filter (status === 'Approved')
  ├── 4. Load local events.json
  └── 5. Merge, deduplicate, and write to src/data/events.json
                       │
                       ▼
[ Astro Build Hook: astro build ]
  ├── 1. Generate Static Pages (Cities, Venues, Bands, Events)
  ├── 2. Render JSON-LD Schemas (Event, MusicVenue, Breadcrumb, FAQ)
  ├── 3. Generate /sitemap-index.xml, /events.json, and /rss.xml
  └── 4. Minify HTML & CSS
                       │
                       ▼
[ Deployment to Cloudflare Pages CDN ]
```

---

### 2. Environment Variables Setup

Configure the following environment variable in Cloudflare Pages / GitHub Secrets:

```env
EVENTS_SHEET_URL="https://docs.google.com/spreadsheets/d/e/2PACX-1v.../pub?output=csv"
```

---

### 3. Automated Webhook Deployment (Daily Auto-Refresh)

To trigger automatic daily website rebuilds when Cody approves new events:
1. In Cloudflare Pages Dashboard, navigate to **Settings** ➔ **Builds & deployments** ➔ **Deploy hooks**.
2. Click **Add deploy hook** (e.g. `Master Sheet Auto Sync`).
3. Copy the Webhook URL (e.g. `https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/...`).
4. In Google Apps Script (`Code.gs`), add a daily trigger to ping the deploy hook whenever rows marked `Approved` are detected.

```javascript
function triggerSiteRebuild() {
  var webhookUrl = "https://api.cloudflare.com/client/v4/pages/webhooks/deploy_hooks/YOUR_HOOK_ID";
  UrlFetchApp.fetch(webhookUrl, { method: "post" });
}
```

---

### 4. Local Build & Verification Commands

To test sheet updates locally prior to committing:

```bash
# Set sheet URL in terminal environment
export EVENTS_SHEET_URL="https://docs.google.com/spreadsheets/d/e/.../pub?output=csv"

# Execute prebuild script & Astro static build
npm run build

# Preview build output locally
npx astro preview
```
