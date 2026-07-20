import XLSX from 'xlsx';
import fs from 'fs';
import path from 'path';

const eventsJsonPath = path.join(process.cwd(), 'src', 'data', 'events.json');

let currentAndFutureEvents = [];
if (fs.existsSync(eventsJsonPath)) {
  const allEvents = JSON.parse(fs.readFileSync(eventsJsonPath, 'utf8'));
  // Filter for this month (July 2026) and future events
  currentAndFutureEvents = allEvents.filter(e => e.date >= '2026-07-01');
  console.log(`Loaded ${currentAndFutureEvents.length} current and future events from database.`);
}

const wb = XLSX.utils.book_new();

// 1. Instructions Tab Data
const instructionsData = [
  ["AK CONCERTS — EVENT MANAGEMENT DATABASE"],
  [""],
  ["Welcome to your event manager database! Follow the instructions below to add events to the website."],
  [""],
  ["HOW TO ADD EVENTS:"],
  ["1. Go to the 'Events_List' tab (which has been pre-populated with this month's and future events)."],
  ["2. Add new rows for new events. Fill in the date, city, venue, category, title, time, ticket link, and cost."],
  ["3. Refer to the 'Valid_Reference_Values' tab for valid City and Category options."],
  ["4. When you are done editing, the website will automatically pull your changes and rebuild tonight!"],
  [""],
  ["Spreadsheet Columns Explanation:"],
  ["Column", "Description", "Format / Options", "Example"],
  ["date", "The date of the event (Required)", "YYYY-MM-DD", "2026-07-20"],
  ["city", "The city in Alaska (Required)", "See 'Valid_Reference_Values' tab", "Anchorage"],
  ["venue", "The concert venue name (Required)", "Plain text", "Koot's"],
  ["category", "Type of the event (Required)", "music, comedy, dance, theatre, community, festival", "music"],
  ["title", "The name of the event/show (Required)", "Plain text", "Fireside Thursdays w/ DJ JoJo"],
  ["time", "The start/end time of show (Required)", "Plain text", "10p-2:10a"],
  ["ticketUrl", "Link to purchase tickets (Optional)", "Web URL (HTTP/HTTPS)", "https://example.com"],
  ["cost", "Ticket pricing details (Optional)", "Plain text", "$10"]
];
const wsInstructions = XLSX.utils.aoa_to_sheet(instructionsData);

// 2. Events Tab Data (Pre-populated)
const eventsHeaders = ["date", "city", "venue", "category", "title", "time", "ticketUrl", "cost"];
const eventsRows = currentAndFutureEvents.map(e => [
  e.date,
  e.city,
  e.venue,
  e.category,
  e.title,
  e.time,
  e.ticketUrl || '',
  e.cost || ''
]);
const eventsData = [eventsHeaders, ...eventsRows];
const wsEvents = XLSX.utils.aoa_to_sheet(eventsData);

// 3. References Tab Data
const refData = [
  ["VALID CITIES", "", "VALID CATEGORIES"],
  ["Anchorage", "", "music"],
  ["Fairbanks", "", "comedy"],
  ["Juneau", "", "dance"],
  ["Kenai", "", "theatre"],
  ["Soldotna", "", "community"],
  ["Homer", "", "festival"],
  ["Seward", ""],
  ["Cooper Landing", ""],
  ["Hope", ""],
  ["Palmer", ""],
  ["Wasilla", ""],
  ["Girdwood", ""],
  ["Talkeetna", ""],
  ["Chugiak", ""],
  ["Eagle River", ""],
  ["Valdez", ""],
  ["Sitka", ""],
  ["Ketchikan", ""]
];
const wsRefs = XLSX.utils.aoa_to_sheet(refData);

// Append sheets to workbook
XLSX.utils.book_append_sheet(wb, wsInstructions, "Instructions");
XLSX.utils.book_append_sheet(wb, wsEvents, "Events_List");
XLSX.utils.book_append_sheet(wb, wsRefs, "Valid_Reference_Values");

// Write file
XLSX.writeFile(wb, "akconcerts_database.xlsx");
console.log("Successfully generated akconcerts_database.xlsx!");
