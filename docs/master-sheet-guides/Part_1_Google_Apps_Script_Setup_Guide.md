# AK CONCERTS — MASTER SHEET GUIDE
## PART 1: Google Apps Script Web App & Submission Listener Setup

---

### 📋 Overview
This guide provides step-by-step instructions for creating, configuring, and deploying the Google Apps Script Web App listener that accepts live event submissions and venue claims from `https://akconcerts.com/submit` and logs them directly into the Master Google Sheet.

---

### 1. Master Sheet Structure setup
Create a tab in your Master Google Sheet named **`Pending Submissions`** (or `Master Events`).

Ensure Column Headers (Row 1) are set as follows:

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

---

### 2. Google Apps Script Code (`Code.gs`)
1. Open your Master Google Sheet.
2. Click **Extensions** ➔ **Apps Script**.
3. Replace all code in `Code.gs` with the snippet below:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Pending Submissions") 
             || SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var data = JSON.parse(e.postData.contents);
    
    var timestamp = new Date().toISOString();
    var status = "Pending"; // All web submissions default to Pending for moderation
    
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

### 3. Deployment Instructions
1. Click **Deploy** ➔ **New deployment**.
2. Select type: **Web app**.
3. Description: `AK Concerts Event Submission API v1.0`.
4. Execute as: **Me** (`your-google-account@gmail.com`).
5. Who has access: **Anyone** (allows the website frontend to POST submissions without OAuth prompt).
6. Click **Deploy** and authorize permissions.
7. Copy the generated **Web App URL** (e.g., `https://script.google.com/macros/s/.../exec`).

---

### 4. Linking to AK Concerts Website
Add the Web App URL to your Cloudflare Pages / Vercel Environment Variables:

```env
PUBLIC_SUBMIT_FORM_URL="https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec"
```
