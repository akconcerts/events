# 🛠️ Things to Build: Future Ideas & Features backlog

This backlog tracks upcoming features, integration ideas, and worker expansion modules for Cody and the AK Concerts team.

---

## 📸 1. Multimodal AI Vision Flyer Reader (`scrapers/flyer_ai.js`)

```javascript
// Planned Vision Scraper Pipeline:
// 1. Fetch latest image URLs from venue Instagram / Facebook posts
// 2. Send image buffer to Gemini 2.5 Flash API
// 3. Prompt: "Extract concert date, venue, artist list, door time, ticket price from flyer"
// 4. Output structured JSON and pass to dedupe engine
```

### Key Goals:
- Capture informal bar shows, pop-up gigs, and poster-only announcements.
- Parse handwritten or custom typography concert flyers.
- Auto-extract ticket prices ($10, $15, Free) and age restrictions (21+, All Ages).

---

## 💬 2. Discord & Slack Community Preview Bot

```
📅 ALASKA CONCERTS — THIS WEEKEND'S LINEUP
-----------------------------------------
🎸 Koot's (Anchorage): Fireside Thursdays w/ DJ JoJo (10p)
🐻 Bear Tooth (Anchorage): Blackwater Railroad Co (8p)
⛷️ Sitzmark (Girdwood): Super Saturated Sugar Strings (9p)
🍺 Blue Loon (Fairbanks): Interior Blues Jam (7p)
-----------------------------------------
🔗 Full schedule: https://www.akconcerts.com
```

### Key Goals:
- Webhook trigger every Thursday at 9:00 AM AKST.
- Post formatted markdown summary to Discord/Slack webhooks.
- Provide custom city filtering for regional Discord servers (Anchorage, Fairbanks, Juneau).

---

## 🎨 3. Automated Social Media Story Generator (`scripts/generate_social.js`)

- Generate 1080x1920 Instagram/Facebook Story graphics every morning.
- List "Tonight's Shows in Alaska" with venue tags and time slots.
- Save rendered PNGs to `public/social/today.png` for auto-publishing.

---

## ⚡ 4. Cloudflare Worker Edge API (`api.akconcerts.com`)

- Edge-cached serverless API serving `/v1/events`, `/v1/venues`, `/v1/cities`, `/v1/search`.
- Global CDN caching with 5-minute TTL.
- CORS-enabled for third-party web apps and mobile integrations.
