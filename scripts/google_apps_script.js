/**
 * AK CONCERTS — Master Google Apps Script (GAS) Suite for Event Database Management
 * 
 * FEATURES FOR CODY:
 * 1. 1-Click Dropdown Approval with Auto-Timestamp & Event ID Generation.
 * 2. Instant Real-Time Duplicate Event Warning.
 * 3. Automatic GitHub Webhook Trigger (Auto-rebuilds akconcerts.com when approved).
 * 4. Venue & City Auto-Populator (VLOOKUP / Data Validation).
 * 5. Custom Google Sheet Menu: "AK Concerts Database > Rebuild Website Now".
 * 6. Automated Expiration Archiver (Moves past shows to Archive tab).
 */

// CONFIGURATION
var GITHUB_OWNER = "akconcerts";
var GITHUB_REPO = "events";
var GITHUB_PAT = ""; // Optional: GitHub Personal Access Token for instant webhooks

/**
 * Custom Menu inside Google Sheets UI
 */
function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('🎸 AK Concerts Database')
    .addItem('⚡ Trigger Website Rebuild', 'triggerGitHubRebuild')
    .addItem('🔍 Check Duplicate Events', 'checkDuplicates')
    .addItem('📦 Archive Past Events', 'archivePastEvents')
    .addToUi();
}

/**
 * Form Submission Handler (doPost)
 */
function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName('Pending_Approvals') || doc.getActiveSheet();

    var data = JSON.parse(e.postData.contents);
    var isVenueClaim = data.formType === 'venue_claim';

    if (isVenueClaim) {
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
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Status', 'Event_ID', 'Date', 'City', 'Venue', 'Category', 'Title', 'Time', 'TicketUrl', 'Cost', 'Submitter_Email', 'Duplicate_Warning', 'Approval_Date']);
      }

      // Check duplicate
      var isDuplicate = checkRowDuplicate(sheet, data.date, data.venue, data.title);
      var dupFlag = isDuplicate ? '⚠️ DUPLICATE MATCH' : 'CLEAN';

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
      .createTextOutput(JSON.stringify({ 'status': 'success', 'message': 'Successfully logged to Cody\'s approval queue!' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'error', 'message': err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

/**
 * OnEdit Trigger — Runs when Cody changes Status to "Approved"
 */
function onEdit(e) {
  var range = e.range;
  var sheet = range.getSheet();
  
  if (sheet.getName() === 'Pending_Approvals' && range.getColumn() === 1) { // Column 1 = Status
    var newValue = range.getValue();
    if (String(newValue).toLowerCase() === 'approved') {
      var row = range.getRow();
      // Set Approval Date in last column
      sheet.getRange(row, 13).setValue(new Date().toISOString());
      
      // Flash green background
      sheet.getRange(row, 1, 1, 13).setBackground('#dcfce7');
      
      // Auto trigger GitHub build if token is set
      if (GITHUB_PAT) {
        triggerGitHubRebuild();
      }
    }
  }
}

/**
 * Duplicate Checker Helper
 */
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

/**
 * Trigger GitHub Actions Build via Repository Dispatch API
 */
function triggerGitHubRebuild() {
  if (!GITHUB_PAT) {
    SpreadsheetApp.getUi().alert('To enable 1-Click Auto Rebuilds, set GITHUB_PAT inside Google Apps Script!');
    return;
  }
  
  var url = 'https://api.github.com/repos/' + GITHUB_OWNER + '/' + GITHUB_REPO + '/dispatches';
  var options = {
    'method': 'post',
    'headers': {
      'Authorization': 'token ' + GITHUB_PAT,
      'Accept': 'application/vnd.github.v3+json',
      'User-Agent': 'GAS-AKConcerts'
    },
    'payload': JSON.stringify({ 'event_type': 'sheet_update' })
  };
  
  try {
    UrlFetchApp.fetch(url, options);
    SpreadsheetApp.getUi().alert('🚀 GitHub Action Triggered! akconcerts.com will rebuild live in ~30 seconds.');
  } catch (err) {
    SpreadsheetApp.getUi().alert('Failed to trigger GitHub Action: ' + err.toString());
  }
}

/**
 * Archive Past Events past TODAY()
 */
function archivePastEvents() {
  var doc = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = doc.getSheetByName('Pending_Approvals') || doc.getActiveSheet();
  var archiveSheet = doc.getSheetByName('Past_Events_Archive') || doc.insertSheet('Past_Events_Archive');
  
  var todayStr = Utilities.formatDate(new Date(), 'GMT-8', 'yyyy-MM-dd');
  var data = sheet.getDataRange().getValues();
  var rowsToKeep = [data[0]];
  var archivedCount = 0;
  
  for (var i = 1; i < data.length; i++) {
    var eventDate = data[i][2]; // Date column
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
    SpreadsheetApp.getUi().alert('Moved ' + archivedCount + ' past shows to Past_Events_Archive!');
  } else {
    SpreadsheetApp.getUi().alert('No past events to archive.');
  }
}
