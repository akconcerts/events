import fs from 'fs';
import path from 'path';
import { execSync } from 'child_process';

async function main() {
  console.log('Merging pasted live schedule missing events into repository database...');
  const missingPath = path.join(process.cwd(), 'wayback_data', 'missing_pasted_events.json');

  if (!fs.existsSync(missingPath)) {
    console.log('No missing pasted events file found.');
    return;
  }

  const rawMissing = JSON.parse(fs.readFileSync(missingPath, 'utf8'));

  const cleanedMissing = rawMissing.filter(e => {
    if (!e.title || !e.venue || e.title.length < 2 || e.venue.length < 2) return false;
    return true;
  }).map(e => {
    // Clean venue and title
    let venue = e.venue.replace(/^\d+\/\d+\s*/, '').trim();
    let title = e.title.replace(/^\d+\/\d+\s*/, '').trim();
    return {
      ...e,
      venue,
      title
    };
  });

  console.log(`Cleaned ${cleanedMissing.length} missing live events from pasted text.`);

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

  console.log('Successfully merged all pasted live schedule events!');
}

main();
