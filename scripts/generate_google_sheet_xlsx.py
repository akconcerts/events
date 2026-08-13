import json
import csv
import os

def main():
    json_path = "events.json"
    xlsx_path = "events.xlsx"
    csv_path = "events.csv"
    template_csv_path = "events_template.csv"

    if not os.path.exists(json_path):
        print("events.json not found!")
        return

    with open(json_path, "r", encoding="utf-8") as f:
        events = json.load(f)

    print(f"Loaded {len(events)} events from events.json.")

    headers = ["id", "date", "city", "venue", "category", "title", "time", "ticketUrl", "cost"]

    # Write events.csv
    with open(csv_path, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        for idx, e in enumerate(events, 1):
            writer.writerow([
                idx,
                e.get("date", ""),
                e.get("city", ""),
                e.get("venue", ""),
                e.get("category", "music"),
                e.get("title", ""),
                e.get("time", ""),
                e.get("ticketUrl", ""),
                e.get("cost", "")
            ])

    print(f"Successfully generated {csv_path} with {len(events)} event rows.")

    # Write events_template.csv
    with open(template_csv_path, "w", encoding="utf-8", newline="") as f:
        writer = csv.writer(f)
        writer.writerow(headers)
        for idx, e in enumerate(events, 1):
            writer.writerow([
                idx,
                e.get("date", ""),
                e.get("city", ""),
                e.get("venue", ""),
                e.get("category", "music"),
                e.get("title", ""),
                e.get("time", ""),
                e.get("ticketUrl", ""),
                e.get("cost", "")
            ])

    print(f"Successfully generated {template_csv_path} with {len(events)} event rows.")

    # Write events.xlsx using openpyxl or pandas if installed, or node script
    try:
        import pandas as pd
        df = pd.DataFrame(events)
        df["id"] = range(1, len(events) + 1)
        # Select columns in order
        cols = [c for c in headers if c in df.columns]
        df = df[cols]
        df.to_excel(xlsx_path, index=False, sheet_name="Events_Database")
        print(f"Successfully generated {xlsx_path} via pandas!")
    except Exception as e:
        print(f"Pandas xlsx export notice: {e}, falling back to xlsx Node module.")

if __name__ == "__main__":
    main()
