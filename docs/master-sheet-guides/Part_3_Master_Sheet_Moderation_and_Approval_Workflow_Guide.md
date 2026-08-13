# AK CONCERTS — MASTER SHEET GUIDE
## PART 3: Moderation, Approval Workflow & Quality Control

---

### 📋 Overview
This guide provides operational procedures for site operators (Cody / Moderation Team) to review pending submissions, audit concert data, edit listings, and approve shows for automatic production deployment.

---

### 1. Moderation Status States

Every row in the Master Google Sheet contains a **`Status`** column with one of three valid state values:

| Status | Meaning | Live Production Behavior |
| :--- | :--- | :--- |
| **`Pending`** | Newly submitted show or raw scraper import requiring human audit | **EXCLUDED** from site build |
| **`Approved`** | Verified show title, date, venue, and city | **INCLUDED** in live site build |
| **`Rejected`** | Spam submission, duplicate entry, or cancelled event | **EXCLUDED** from site build |

---

### 2. Daily Moderation Checklist (Step-by-Step)

1. **Filter by Pending**: In the Master Google Sheet, set a filter on Column M (`Status`) to show only `Pending` rows.
2. **Verify Event Details**:
   - Check that `Title` is spelled correctly (e.g. *"Blackwater Railroad Company"*).
   - Verify `Date` is formatted as `YYYY-MM-DD`.
   - Confirm `City` matches an actual Alaska municipality.
   - Verify `Venue` exists or add a venue slug if it is a new Alaska location.
3. **Change Status**:
   - If valid, change `Status` column cell to **`Approved`**.
   - If invalid or spam, change `Status` column cell to **`Rejected`**.
4. **Trigger Live Build**:
   - Once marked `Approved`, the site will include the event on the next scheduled build or manual deployment run.

---

### 3. Handling Venue Claims & Band Profiles

- **New Venue Claims**: When a venue owner submits a claim via `/submit`, verify their contact email in Column J. Once verified, update the official venue metadata in `venues.json`.
- **New Artist Profiles**: When a new local Alaska band is submitted, add their bio and social media handles to `src/data/bands.ts` to generate their dedicated `/bands/[slug]` profile page.
