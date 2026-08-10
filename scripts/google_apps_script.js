/**
 * AK CONCERTS — Google Apps Script for Event Submission & Venue Claim Form
 * 
 * INSTRUCTIONS FOR CODY:
 * 1. Open your Google Sheet.
 * 2. Click Extensions > Apps Script.
 * 3. Replace all code with this file contents.
 * 4. Click Deploy > New deployment.
 * 5. Select type "Web app", set Execute as "Me", and set Who has access to "Anyone".
 * 6. Copy the Web App URL and set it as PUBLIC_SUBMIT_FORM_URL in your Vercel/Netlify environment variables.
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    var doc = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = doc.getSheetByName('Pending_Approvals') || doc.getActiveSheet();

    var rawData = e.postData.contents;
    var data = JSON.parse(rawData);

    var isVenueClaim = data.formType === 'venue_claim';

    if (isVenueClaim) {
      // Log Venue Claim
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
      // Log Event Submission
      if (sheet.getLastRow() === 0) {
        sheet.appendRow(['Status', 'Date', 'City', 'Venue', 'Category', 'Title', 'Time', 'TicketUrl', 'Cost', 'Submitter_Email', 'Submission_Date']);
      }
      sheet.appendRow([
        'Pending',
        data.date || '',
        data.city || '',
        data.venue || '',
        data.category || 'music',
        data.title || '',
        data.time || '',
        data.ticketUrl || '',
        data.cost || '',
        data.email || '',
        new Date().toISOString()
      ]);
    }

    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'success', 'message': 'Submitted to approval queue!' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'status': 'error', 'message': err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}
