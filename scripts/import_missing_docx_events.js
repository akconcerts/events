import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

async function main() {
  console.log('Importing missing docx events into repository dataset...');
  const missingPath = path.join(process.cwd(), 'wayback_data', 'missing_docx_events.json');

  if (!fs.existsSync(missingPath)) {
    console.log('No missing docx events file found.');
    return;
  }

  const missingEvents = JSON.parse(fs.readFileSync(missingPath, 'utf8'));

  // Clean missing events
  const cleanedMissing = missingEvents.filter(e => {
    // Remove corrupt entries or entries without title/venue
    if (!e.title || !e.venue || e.title.length < 2 || e.venue.length < 2) return false;
    if (e.venue.includes('Hyperlinks to each event') || e.venue.includes('Sign up on our page')) return false;
    return true;
  }).map(e => {
    // Clean venue if leading date e.g. "8/14Skeet’s Dive Bar" -> "Skeet's Dive Bar"
    let venue = e.venue.replace(/^\d+\/\d+\s*/, '').trim();
    let title = e.title.replace(/^\d+\/\d+\s*/, '').trim();
    return {
      ...e,
      venue,
      title
    };
  });

  console.log(`Cleaned ${cleanedMissing.length} missing docx events for merging.`);

  // Write to wayback_data/parsed_events.json so merge_events.js can combine them
  const parsedPath = path.join(process.cwd(), 'wayback_data', 'parsed_events.json');
  let existingParsed = [];
  if (fs.existsSync(parsedPath)) {
    existingParsed = JSON.parse(fs.readFileSync(parsedPath, 'utf8'));
  }

  const combined = [...existingParsed, ...cleanedMissing];
  fs.writeFileSync(parsedPath, JSON.stringify(combined, null, 2), 'utf8');

  console.log('Running merge_events.js...');
  execSync('node scripts/merge_events.js', { stdio: 'inherit' });

  console.log('Running export_feeds.js...');
  execSync('node scripts/export_feeds.js', { stdio: 'inherit' });

  console.log('Successfully merged all docx events!');
}

main();
