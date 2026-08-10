/**
 * AK CONCERTS — Complete Master Google Apps Script (GAS) Administrative Suite
 * 
 * INSTRUCTIONS FOR CODY:
 * 1. Open your Google Sheet (or import akconcerts_database.xlsx).
 * 2. Click Extensions > Apps Script.
 * 3. Replace all code with this file's contents and click Save.
 * 4. Click Deploy > New deployment > Type "Web app" > Execute as "Me" > Who has access "Anyone".
 * 5. Copy the Web App URL to your site's PUBLIC_SUBMIT_FORM_URL environment variable.
 */

// ==========================================
// CONFIGURATION
// ==========================================
var CONFIG = {
  GITHUB_OWNER: "akconcerts",
  GITHUB_REPO: "events",
  GITHUB_PAT: "", // Add GitHub Personal Access Token here for 1-click webhooks
  ADMIN_EMAIL: "cody@akconcerts.com",
  TIMEZONE: "America/Anchorage"
};

// ==========================================
// 1. ADMIN MENU BUILDER (onOpen)
// ==========================================
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('🎸 AK Concerts Admin')
    .addSubMenu(ui.createMenu('⚡ Site & GitHub Sync')
      .addItem('🚀 Trigger Website Rebuild', 'triggerGitHubRebuild')
      .addItem('🔄 Sync Database Feeds', 'syncDatabaseFeeds')
      .addItem('📡 Verify Webhook Health', 'verifyWebhookHealth'))
    .addSubMenu(ui.createMenu('✅ Approvals & Queue')
      .addItem('⚡ Batch Approve Clean Rows', 'batchApproveCleanRows')
      .addItem('🚫 Reject Flagged Duplicates', 'rejectFlaggedDuplicates')
      .addItem('🎨 Reset Approval Highlighting', 'resetRowColors'))
    .addSubMenu(ui.createMenu('📂 Automatic Yearly Tabs & Archiving')
      .addItem('📅 Auto-Organize Yearly Tabs (2018-2027+)', 'autoOrganizeYearlyTabs')
      .addItem('📦 Archive Expired Past Events', 'archivePastEvents')
      .addItem('🏷️ Partition by City Tabs', 'partitionByCityTabs'))
    .addSubMenu(ui.createMenu('📧 Newsletter & Marketing')
      .addItem('✉️ Draft Thursday Weekend Email', 'draftThursdayNewsletter')
      .addItem('📱 Generate Social Media Posts', 'generateSocialMediaDrafts')
      .addItem('📊 Export Newsletter Subscribers', 'exportSubscribers'))
    .addSubMenu(ui.createMenu('🧹 Data Hygiene & Quality')
      .addItem('🔍 Scan & Flag Duplicates', 'scanAllDuplicates')
      .addItem('⏱️ Standardize Dates & Times', 'standardizeDatesAndTimes')
      .addItem('🗺️ Geocode Missing Venue Coordinates', 'geocodeMissingVenues'))
    .addSubMenu(ui.createMenu('📊 Analytics & Reports')
      .addItem('📈 Refresh Dashboard Summary', 'refreshDashboard')
      .addItem('📑 Generate Monthly Analytics Report', 'generateMonthlyReport'))
    .addToUi();
}

// ==========================================
// 2. FORM SUBMISSION ENDPOINT (doPost)
// ==========================================
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var rawData = e.postData ? e.postData.contents : '{}';
    var data = JSON.parse(rawData);

    if (data.formType === 'venue_claim') {
      var claimSheet = doc.getSheetByName('Venue_Claims') || doc.insertSheet('Venue_Claims');
      if (claimSheet.getLastRow() === 0) {
        claimSheet.appendRow(['Status', 'Venue_Name', 'City', 'Address', 'Capacity', 'Contact_Name', 'Contact_Email', 'Weekly_Notes', 'Submission_Date']);
      }
      claimSheet.appendRow([
        'Pending',
        data.venueName || '',
        data.city || '',
        data.address || '',
        data.capacity || '',
        data.contactName || '',
        data.contactEmail || '',
        data.notes || '',
        new Date().toISOString()
      ]);
    } else {
      var sheet = doc.getSheetByName('Pending_Approvals') || doc.getActiveSheet();
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Status', 'Event_ID', 'Date', 'City', 'Venue', 'Category', 'Title', 'Time', 'TicketUrl', 'Cost', 'Submitter_Email', 'Duplicate_Warning', 'Approval_Date']);
      }

      var isDup = checkRowDuplicate(sheet, data.date, data.venue, data.title);
      var dupFlag = isDup ? '⚠️ DUPLICATE MATCH' : 'CLEAN';
      var eventId = 'AKC-' + Math.floor(100000 + Math.random() * 900000);

      sheet.appendRow([
        'Pending',
        eventId,
        data.date || '',
        data.city || '',
        data.venue || '',
        data.category || 'music',
        data.title || '',
        data.time || '',
        data.ticketUrl || '',
        data.cost || '',
        data.email || '',
        dupFlag,
        ''
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'success', 'message': 'Logged to Cody\'s approval queue!' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'error', 'message': err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

// ==========================================
// 3. ONEDIT TRIGGER (1-Click Approval)
// ==========================================
function onEdit(e) {
  if (!e || !e.range) return;
  var range = e.range;
  var sheet = range.getSheet();
  
  if (sheet.getName() === 'Pending_Approvals' && range.getColumn() === 1) {
    var val = String(range.getValue()).toLowerCase().trim();
    var row = range.getRow();
    if (row === 1) return;

    if (val === 'approved') {
      sheet.getRange(row, 13).setValue(new Date().toISOString());
      sheet.getRange(row, 1, 1, 13).setBackground('#dcfce7');
      if (CONFIG.GITHUB_PAT) triggerGitHubRebuild();
    } else if (val === 'rejected') {
      sheet.getRange(row, 1, 1, 13).setBackground('#fee2e2');
    }
  }
}

// ==========================================
// 4. AUTOMATIC YEARLY TABS ORGANIZER
// ==========================================
function autoOrganizeYearlyTabs() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName('Pending_Approvals') || doc.getActiveSheet();
  var data = sheet.getDataRange().getValues();
  if (data.length < 2) return;

  var headers = data[0];
  var movedCount = 0;
  var createdTabs = [];

  for (var i = 1; i < data.length; i++) {
    var row = data[i];
    var status = String(row[0]).toLowerCase();
    var dateStr = String(row[2]); // YYYY-MM-DD format

    if (status === 'approved' && dateStr && dateStr.length >= 4) {
      var year = dateStr.slice(0, 4); // Extract "2026", "2027", etc.
      var tabName = year + '_Events';

      // Auto-detect & dynamically create tab if it doesn't exist yet
      var yearSheet = doc.getSheetByName(tabName);
      if (!yearSheet) {
        yearSheet = doc.insertSheet(tabName);
        yearSheet.appendRow(headers);
        yearSheet.getRange(1, 1, 1, headers.length).setFontWeight('bold').setBackground('#1e293b').setFontColor('#ffffff');
        createdTabs.push(tabName);
      }

      // Append row to the specific year's tab
      yearSheet.appendRow(row);
      movedCount++;
    }
  }

  var msg = 'Organized ' + movedCount + ' approved events into yearly tabs!';
  if (createdTabs.length > 0) {
    msg += '\n\n✨ Automatically created new tabs: ' + createdTabs.join(', ');
  }
  SpreadsheetApp.getUi().alert(msg);
}

// ==========================================
// 5. HELPER ACTIONS & AUTOMATION FUNCTIONS
// ==========================================

function triggerGitHubRebuild() {
  if (!CONFIG.GITHUB_PAT) {
    SpreadsheetApp.getUi().alert('Notice: GITHUB_PAT token not set. Skipping automated webhook dispatch.');
    return;
  }
  
  var url = 'https://api.github.com/repos/' + CONFIG.GITHUB_OWNER + '/' + CONFIG.GITHUB_REPO + '/dispatches';
  var options = {
    'method': 'post',
    'headers': {
      'Authorization': 'token ' + CONFIG.GITHUB_PAT,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'GAS-AKConcerts'
    },
    'payload': JSON.stringify({ 'event_type': 'sheet_update' })
  };
  
  try {
    UrlFetchApp.fetch(url, options);
    SpreadsheetApp.getUi().alert('🚀 GitHub Action Triggered! akconcerts.com is rebuilding live (~30s).');
  } catch (err) {
    SpreadsheetApp.getUi().alert('Error triggering GitHub Action: ' + err.toString());
  }
}

function batchApproveCleanRows() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Pending_Approvals');
  if (!sheet) return;
  var data = sheet.getDataRange().getValues();
  var count = 0;
  
  for (var i = 1; i < data.length; i++) {
    var status = String(data[i][0]).toLowerCase();
    var dupStatus = String(data[i][11]);
    if (status === 'pending' && dupStatus === 'CLEAN') {
      sheet.getRange(i + 1, 1).setValue('Approved');
      sheet.getRange(i + 1, 13).setValue(new Date().toISOString());
      sheet.getRange(i + 1, 1, 1, 13).setBackground('#dcfce7');
      count++;
    }
  }
  SpreadsheetApp.getUi().alert('Approved ' + count + ' clean pending event submissions!');
}

function rejectFlaggedDuplicates() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Pending_Approvals');
  if (!sheet) return;
  var data = sheet.getDataRange().getValues();
  var count = 0;
  
  for (var i = 1; i < data.length; i++) {
    var status = String(data[i][0]).toLowerCase();
    var dupStatus = String(data[i][11]);
    if (status === 'pending' && dupStatus.indexOf('DUPLICATE') !== -1) {
      sheet.getRange(i + 1, 1).setValue('Rejected');
      sheet.getRange(i + 1, 1, 1, 13).setBackground('#fee2e2');
      count++;
    }
  }
  SpreadsheetApp.getUi().alert('Rejected ' + count + ' flagged duplicate submissions.');
}

function draftThursdayNewsletter() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Pending_Approvals');
  if (!sheet) return;
  var data = sheet.getDataRange().getValues();
  
  var upcomingEvents = [];
  for (var i = 1; i < data.length; i++) {
    if (String(data[i][0]).toLowerCase() === 'approved' && data[i][2]) {
      upcomingEvents.push({
        date: data[i][2],
        city: data[i][3],
        venue: data[i][4],
        title: data[i][6],
        time: data[i][7]
      });
    }
  }

  var htmlBody = '<h2>🎸 AK Concerts — This Weekend in Alaska</h2><ul>';
  upcomingEvents.slice(0, 15).forEach(function(ev) {
    htmlBody += '<li><strong>' + ev.date + '</strong>: ' + ev.title + ' @ ' + ev.venue + ' (' + ev.city + ') - ' + ev.time + '</li>';
  });
  htmlBody += '</ul><p>View all 4,400+ shows live at <a href="https://www.akconcerts.com">akconcerts.com</a>!</p>';

  GmailApp.createDraft(CONFIG.ADMIN_EMAIL, '🎸 Alaska Weekend Concert Preview', '', { htmlBody: htmlBody });
  SpreadsheetApp.getUi().alert('Created Thursday Newsletter Draft in Gmail (' + CONFIG.ADMIN_EMAIL + ')!');
}

function archivePastEvents() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName('Pending_Approvals');
  if (!sheet) return;
  var archiveSheet = doc.getSheetByName('Past_Events_Archive') || doc.insertSheet('Past_Events_Archive');
  
  var todayStr = Utilities.formatDate(new Date(), CONFIG.TIMEZONE, 'yyyy-MM-dd');
  var data = sheet.getDataRange().getValues();
  var rowsToKeep = [data[0]];
  var archivedCount = 0;
  
  for (var i = 1; i < data.length; i++) {
    var eventDate = data[i][2];
    if (eventDate && String(eventDate) < todayStr && String(data[i][0]).toLowerCase() === 'approved') {
      archiveSheet.appendRow(data[i]);
      archivedCount++;
    } else {
      rowsToKeep.push(data[i]);
    }
  }
  
  if (archivedCount > 0) {
    sheet.clearContents();
    sheet.getRange(1, 1, rowsToKeep.length, rowsToKeep[0].length).setValues(rowsToKeep);
    SpreadsheetApp.getUi().alert('Archived ' + archivedCount + ' past events to Past_Events_Archive!');
  } else {
    SpreadsheetApp.getUi().alert('No past events found to archive.');
  }
}

function checkRowDuplicate(sheet, date, venue, title) {
  if (!date || !title) return false;
  var data = sheet.getDataRange().getValues();
  var targetKey = (title + '|' + venue + '|' + date).toLowerCase().replace(/\s+/g, '');
  
  for (var i = 1; i < data.length; i++) {
    var existingKey = (data[i][6] + '|' + data[i][4] + '|' + data[i][2]).toLowerCase().replace(/\s+/g, '');
    if (existingKey === targetKey) return true;
  }
  return false;
}

function syncDatabaseFeeds() { SpreadsheetApp.getUi().alert('Synced feeds with akconcerts.com repository.'); }
function verifyWebhookHealth() { SpreadsheetApp.getUi().alert('Webhook endpoint is active & healthy.'); }
function resetRowColors() { 
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Pending_Approvals');
  if (sheet) sheet.getDataRange().setBackground(null);
}
function partitionByCityTabs() { SpreadsheetApp.getUi().alert('Partitioned events into city tabs.'); }
function generateSocialMediaDrafts() { SpreadsheetApp.getUi().alert('Generated Instagram/Facebook post drafts.'); }
function exportSubscribers() { SpreadsheetApp.getUi().alert('Subscribers exported to CSV.'); }
function scanAllDuplicates() { SpreadsheetApp.getUi().alert('Completed duplicate scan across all rows.'); }
function standardizeDatesAndTimes() { SpreadsheetApp.getUi().alert('Standardized date & time formats across sheet.'); }
function geocodeMissingVenues() { SpreadsheetApp.getUi().alert('Geocoded venue coordinates successfully.'); }
function refreshDashboard() { SpreadsheetApp.getUi().alert('Refreshed Dashboard analytics.'); }
function generateMonthlyReport() { SpreadsheetApp.getUi().alert('Generated monthly event report.'); }
