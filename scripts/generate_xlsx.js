import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

const eventsJsonPath = path.join(process.cwd(), 'events.json');

let allEvents = [];
if (fs.existsSync(eventsJsonPath)) {
  allEvents = JSON.parse(fs.readFileSync(eventsJsonPath, 'utf8'));
}

const wb = XLSX.utils.book_new();

// 1. Instructions Tab
const instructionsData = [
  ["AK CONCERTS — EVENT APPROVAL & MANAGEMENT WORKBOOK"],
  [""],
  ["HOW CODY APPROVES & PUBLISHES EVENTS:"],
  ["1. Open this spreadsheet or import into your Google Sheet."],
  ["2. Review new incoming submissions under the 'Pending_Approvals' tab."],
  ["3. Change the 'status' column from 'Pending' to 'Approved' for shows you want to publish."],
  ["4. When done, save/publish to Google Sheets CSV or run 'npm run workers'."],
  ["5. The site & GitHub repository (akconcerts/events) will automatically rebuild & update!"],
  [""],
  ["Columns Guide:"],
  ["Column", "Description", "Format / Values", "Example"],
  ["status", "Approval State (Required)", "Approved, Pending, Rejected", "Approved"],
  ["date", "Event Date (Required)", "YYYY-MM-DD", "2026-08-20"],
  ["city", "Alaskan City (Required)", "Anchorage, Fairbanks, Juneau, etc.", "Anchorage"],
  ["venue", "Venue Name (Required)", "Plain text", "Koot's"],
  ["category", "Category (Required)", "music, comedy, dance, theatre, festival", "music"],
  ["title", "Event / Band Name (Required)", "Plain text", "The Deadlocks Live"],
  ["time", "Start/End Time", "Plain text", "9p-1a"],
  ["ticketUrl", "Ticket or Info Link", "URL", "https://example.com/tickets"],
  ["cost", "Admission Price", "Plain text", "$15"],
  ["submitter_email", "Email of Submitter", "Email", "band@alaska.com"]
];
const wsInstructions = XLSX.utils.aoa_to_sheet(instructionsData);

// 2. Pending Approvals Tab (Sample pending submission)
const pendingHeaders = ["status", "date", "city", "venue", "category", "title", "time", "ticketUrl", "cost", "submitter_email", "notes"];
const pendingRows = [
  ["Pending", "2026-08-25", "Anchorage", "Koot's", "music", "Wild Midnight Funk Night", "10p-2a", "https://koots.com", "$10", "promoter@anchorage.com", "User web submission via akconcerts.com/submit"],
  ["Pending", "2026-09-01", "Fairbanks", "The Blue Loon", "comedy", "Interior Standup Night", "8p-10p", "", "Free", "comedian@fairbanks.com", "Venue submission"]
];
const wsPending = XLSX.utils.aoa_to_sheet([pendingHeaders, ...pendingRows]);

// 3. Active Approved Events Tab
const activeHeaders = ["status", "date", "city", "venue", "category", "title", "time", "ticketUrl", "cost"];
const activeRows = allEvents.slice(0, 500).map(e => [
  "Approved",
  e.date,
  e.city,
  e.venue,
  e.category || 'music',
  e.title,
  e.time || '',
  e.ticketUrl || '',
  e.cost || ''
]);
const wsActive = XLSX.utils.aoa_to_sheet([activeHeaders, ...activeRows]);

// 4. Valid Reference Values Tab
const refData = [
  ["VALID CITIES", "", "VALID CATEGORIES", "", "APPROVAL STATUSES"],
  ["Anchorage", "", "music", "", "Approved"],
  ["Fairbanks", "", "comedy", "", "Pending"],
  ["Juneau", "", "dance", "", "Rejected"],
  ["Kenai", "", "theatre", ""],
  ["Soldotna", "", "community", ""],
  ["Homer", "", "festival", ""],
  ["Seward", ""],
  ["Girdwood", ""],
  ["Palmer", ""],
  ["Wasilla", ""],
  ["Talkeetna", ""]
];
const wsRefs = XLSX.utils.aoa_to_sheet(refData);

XLSX.utils.book_append_sheet(wb, wsInstructions, "Instructions");
XLSX.utils.book_append_sheet(wb, wsPending, "Pending_Approvals");
XLSX.utils.book_append_sheet(wb, wsActive, "Active_Events");
XLSX.utils.book_append_sheet(wb, wsRefs, "Valid_Reference_Values");

XLSX.writeFile(wb, "akconcerts_database.xlsx");
console.log("Successfully generated akconcerts_database.xlsx with Approval Workflow tabs!");
