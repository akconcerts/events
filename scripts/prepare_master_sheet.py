import json
import csv
import os

events_json_path = "/Volumes/homes/Kevin/AI_BUILDS/AKCONCERTS-COM_AG-v101/akconcerts-com/src/data/events.json"
output_csv_path = "/Volumes/homes/Kevin/AI_BUILDS/AKCONCERTS-COM_AG-v101/akconcerts-com/AK_Concerts_Master_Sheet_Template.csv"
artifact_csv_path = "/Users/kb/.gemini/antigravity-ide/brain/68236e0c-08a9-4d0b-903b-7eb1a98165a7/AK_Concerts_Master_Sheet_Template.csv"

with open(events_json_path, 'r', encoding='utf-8') as f:
    events = json.load(f)

fieldnames = [
    'Timestamp',
    'Title',
    'Date',
    'Time',
    'City',
    'Venue',
    'Category',
    'Cost',
    'TicketUrl',
    'Email',
    'SubmitterName',
    'Notes',
    'Status'
]

rows = []
for idx, e in enumerate(events):
    rows.append({
        'Timestamp': '2026-08-12 12:00:00',
        'Title': e.get('title', ''),
        'Date': e.get('date', ''),
        'Time': e.get('time', ''),
        'City': e.get('city', ''),
        'Venue': e.get('venue', ''),
        'Category': e.get('category', 'music'),
        'Cost': e.get('cost', '') or e.get('price', ''),
        'TicketUrl': e.get('ticketUrl', ''),
        'Email': 'system@akconcerts.com',
        'SubmitterName': 'AK Concerts Auto Import',
        'Notes': 'Master Event Database',
        'Status': 'Approved'
    })

for path in [output_csv_path, artifact_csv_path]:
    with open(path, 'w', newline='', encoding='utf-8') as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

print(f"Successfully generated Master Sheet CSV with {len(rows)} events: {output_csv_path}")
