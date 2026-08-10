import puppeteer from 'puppeteer';
import fetch from 'node-fetch';
import fs from 'fs';
import path from 'path';

const outDir = path.join(process.cwd(), 'wayback_data');
if (!fs.existsSync(outDir)) fs.mkdirSync(outDir);

async function run() {
  console.log('Fetching CDX API for akconcerts.com and www.akconcerts.com...');
  const cdxUrl1 = 'http://web.archive.org/cdx/search/cdx?url=akconcerts.com/&output=json&fl=timestamp,original,statuscode&filter=statuscode:200';
  const cdxUrl2 = 'http://web.archive.org/cdx/search/cdx?url=www.akconcerts.com/&output=json&fl=timestamp,original,statuscode&filter=statuscode:200';
  
  const [res1, res2] = await Promise.all([
    fetch(cdxUrl1).then(r => r.json()),
    fetch(cdxUrl2).then(r => r.json())
  ]);
  
  const snapshots = [...res1.slice(1), ...res2.slice(1)];
  console.log(`Found ${snapshots.length} total raw snapshots.`);
  
  // Group by year and month, pick one per month to avoid duplicates
  const snapshotsToProcess = [];
  const seenMonths = new Set();
  
  // Sort descending by timestamp
  snapshots.sort((a, b) => b[0].localeCompare(a[0]));
  
  for (const [timestamp, original] of snapshots) {
    const yearMonth = timestamp.slice(0, 6); // YYYYMM
    if (!seenMonths.has(yearMonth)) {
      seenMonths.add(yearMonth);
      snapshotsToProcess.push(timestamp);
    }
  }
  
  console.log(`Selected ${snapshotsToProcess.length} unique monthly snapshots.`);
  
  const browser = await puppeteer.launch({ headless: 'new' });
  const page = await browser.newPage();
  
  // Block irrelevant resources to speed up loading
  await page.setRequestInterception(true);
  page.on('request', (req) => {
    const type = req.resourceType();
    if (['image', 'stylesheet', 'font', 'media'].includes(type)) {
      req.abort();
    } else {
      req.continue();
    }
  });

  const allEvents = {};

  for (let i = 0; i < snapshotsToProcess.length; i++) {
    const timestamp = snapshotsToProcess[i];
    const snapshotFilePath = path.join(outDir, `${timestamp}.json`);
    
    if (fs.existsSync(snapshotFilePath) && fs.statSync(snapshotFilePath).size > 100) {
      console.log(`[${i+1}/${snapshotsToProcess.length}] Snapshot ${timestamp} already downloaded. Skipping.`);
      const fileData = JSON.parse(fs.readFileSync(snapshotFilePath, 'utf8'));
      allEvents[timestamp] = fileData.text || [];
      continue;
    }

    const url = `http://web.archive.org/web/${timestamp}id_/http://akconcerts.com/`;
    console.log(`[${i+1}/${snapshotsToProcess.length}] Processing snapshot ${timestamp}...`);
    
    try {
      await page.goto(url, { waitUntil: 'networkidle2', timeout: 30000 });
      
      // Wait a bit for Wix to render its client-side JS
      await new Promise(r => setTimeout(r, 5000));
      
      const textContent = await page.evaluate(() => {
        // Wix often uses text elements
        const elements = Array.from(document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, div[data-testid="richTextElement"]'));
        return elements.map(el => el.textContent.trim()).filter(t => t.length > 5);
      });
      
      // Filter out common UI elements, keeping things that look like events
      const cleaned = [...new Set(textContent)].filter(t => 
        !t.includes('AK Concerts') && 
        !t.includes('Home') && 
        !t.includes('Contact') &&
        t.length > 10
      );
      
      allEvents[timestamp] = cleaned;
      
      // Save progressively
      fs.writeFileSync(path.join(outDir, `${timestamp}.json`), JSON.stringify({ timestamp, text: cleaned }, null, 2));
      console.log(`   -> Extracted ${cleaned.length} text fragments.`);
      
    } catch (e) {
      console.error(`   -> Failed: ${e.message}`);
    }
  }

  await browser.close();
  
  fs.writeFileSync(path.join(outDir, 'all_snapshots.json'), JSON.stringify(allEvents, null, 2));
  console.log('Scraping complete. Data saved to wayback_data/ directory.');
}

run().catch(console.error);
