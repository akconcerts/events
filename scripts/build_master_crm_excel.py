import json
import os
import openpyxl
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation

output_xlsx_path = "/Volumes/homes/Kevin/AI_BUILDS/AKCONCERTS-COM_AG-v101/akconcerts-com/AK_Concerts_Master_CMS_CRM_Database.xlsx"
artifact_xlsx_path = "/Users/kb/.gemini/antigravity-ide/brain/68236e0c-08a9-4d0b-903b-7eb1a98165a7/AK_Concerts_Master_CMS_CRM_Database.xlsx"

events_path = "/Volumes/homes/Kevin/AI_BUILDS/AKCONCERTS-COM_AG-v101/akconcerts-com/src/data/events.json"
venues_path = "/Volumes/homes/Kevin/AI_BUILDS/AKCONCERTS-COM_AG-v101/akconcerts-com/venues.json"

with open(events_path, 'r', encoding='utf-8') as f:
    events_data = json.load(f)

with open(venues_path, 'r', encoding='utf-8') as f:
    venues_data = json.load(f)

# Styles
header_font = Font(name='Segoe UI', size=11, bold=True, color='FFFFFF')
header_fill = PatternFill(start_color='00205B', end_color='00205B', fill_type='solid') # Navy
sub_header_fill = PatternFill(start_color='FFB81C', end_color='FFB81C', fill_type='solid') # Gold
sub_header_font = Font(name='Segoe UI', size=11, bold=True, color='00205B')

thin_border = Border(
    left=Side(style='thin', color='CBD5E1'),
    right=Side(style='thin', color='CBD5E1'),
    top=Side(style='thin', color='CBD5E1'),
    bottom=Side(style='thin', color='CBD5E1')
)

wb = openpyxl.Workbook()
wb.remove(wb.active)

# Utility to format headers and table
def create_tab(sheet_name, headers, rows_data, is_gold_header=False):
    ws = wb.create_sheet(title=sheet_name)
    ws.views.sheetView[0].showGridLines = True
    
    fill = sub_header_fill if is_gold_header else header_fill
    font = sub_header_font if is_gold_header else header_font
    
    ws.append(headers)
    for col_num in range(1, len(headers) + 1):
        cell = ws.cell(row=1, column=col_num)
        cell.font = font
        cell.fill = fill
        cell.alignment = Alignment(horizontal='center', vertical='center')
        cell.border = thin_border
        
    for row_idx, r in enumerate(rows_data, start=2):
        ws.append(r)
        for col_num in range(1, len(headers) + 1):
            c = ws.cell(row=row_idx, column=col_num)
            c.font = Font(name='Segoe UI', size=9.5)
            c.border = thin_border
            if col_num in [1, 3, 4, 7, 13]:
                c.alignment = Alignment(horizontal='center')
                
    # Auto column width
    for col in ws.columns:
        max_len = max(len(str(cell.value or '')) for cell in col)
        col_letter = get_column_letter(col[0].column)
        ws.column_dimensions[col_letter].width = min(max(max_len + 3, 12), 45)
        
    return ws

# Data Validation Definitions
dv_status = DataValidation(type="list", formula1='"Pending,Approved,Rejected,Archived"', allow_blank=True)
dv_category = DataValidation(type="list", formula1='"music,comedy,festival,dance,theatre,community"', allow_blank=True)
dv_cities = DataValidation(type="list", formula1='"Anchorage,Fairbanks,Juneau,Homer,Palmer,Wasilla,Seward,Girdwood,Talkeetna,Kenai,Soldotna,Ketchikan,Sitka,Kodiak,Valdez"', allow_blank=True)
dv_type = DataValidation(type="list", formula1='"Indoor,Outdoor/Festival"', allow_blank=True)
dv_claim_status = DataValidation(type="list", formula1='"Unclaimed,Pending Review,Verified Owner,Flagged"', allow_blank=True)
dv_account_status = DataValidation(type="list", formula1='"Active,Inactive,Closed"', allow_blank=True)
dv_feed_engine = DataValidation(type="list", formula1='"Facebook API,Web Scraper,iCal Feed,CSV Import"', allow_blank=True)
dv_menu_loc = DataValidation(type="list", formula1='"Header Desktop & Mobile,Bottom Mobile Pill,Global Category Filter"', allow_blank=True)

# 1. Pending_Submissions Tab
ws_pending = create_tab(
    "Pending_Submissions",
    ["Timestamp", "Title", "Date", "Time", "City", "Venue", "Category", "Cost", "TicketUrl", "Email", "SubmitterName", "Notes", "Status"],
    [
        ["2026-08-12 22:45:00", "Blackwater Railroad Live at Williwaw", "2026-08-22", "8:00 PM", "Anchorage", "Williwaw Social", "music", "$15", "https://akconcerts.com", "promoter@blackwaterrr.com", "Cody Submitter", "Web Submission via /submit page", "Pending"],
        ["2026-08-12 23:10:00", "Stand-Up Comedy Night w/ Dana Gould", "2026-08-23", "7:30 PM", "Fairbanks", "Pioneer Park Theater", "comedy", "$25", "https://pioneerpark.org", "boxoffice@pioneerpark.org", "Sarah Admin", "Venue Claim Test Submission", "Pending"]
    ],
    is_gold_header=True
)
ws_pending.add_data_validation(dv_status)
dv_status.add("M2:M1000")
ws_pending.add_data_validation(dv_category)
dv_category.add("G2:G1000")
ws_pending.add_data_validation(dv_cities)
dv_cities.add("E2:E1000")

# 2. Events_Master Tab
master_event_rows = []
for e in events_data:
    master_event_rows.append([
        "2026-08-12 12:00:00",
        e.get("title", ""),
        e.get("date", ""),
        e.get("time", ""),
        e.get("city", ""),
        e.get("venue", ""),
        e.get("category", "music"),
        e.get("cost", "") or e.get("price", ""),
        e.get("ticketUrl", ""),
        "system@akconcerts.com",
        "AK Concerts Auto Import",
        "Master Event Database",
        "Approved"
    ])
ws_events = create_tab("Events_Master", ["Timestamp", "Title", "Date", "Time", "City", "Venue", "Category", "Cost", "TicketUrl", "Email", "SubmitterName", "Notes", "Status"], master_event_rows)

dv_status_master = DataValidation(type="list", formula1='"Pending,Approved,Rejected,Archived"', allow_blank=True)
ws_events.add_data_validation(dv_status_master)
dv_status_master.add(f"M2:M{len(master_event_rows)+10}")

dv_category_master = DataValidation(type="list", formula1='"music,comedy,festival,dance,theatre,community"', allow_blank=True)
ws_events.add_data_validation(dv_category_master)
dv_category_master.add(f"G2:G{len(master_event_rows)+10}")

dv_cities_master = DataValidation(type="list", formula1='"Anchorage,Fairbanks,Juneau,Homer,Palmer,Wasilla,Seward,Girdwood,Talkeetna,Kenai,Soldotna,Ketchikan,Sitka,Kodiak,Valdez"', allow_blank=True)
ws_events.add_data_validation(dv_cities_master)
dv_cities_master.add(f"E2:E{len(master_event_rows)+10}")

# 3. Venues_CRM Tab
venue_rows = []
for v in venues_data:
    venue_rows.append([
        v.get("id", ""),
        v.get("name", ""),
        v.get("city", ""),
        v.get("address", "") or f"{v.get('name')}, {v.get('city')}, AK",
        v.get("capacity", "") or "N/A",
        "Indoor" if v.get("indoor") else "Outdoor/Festival",
        v.get("website", ""),
        v.get("facebookUrl", ""),
        v.get("lat", "") or "",
        v.get("lng", "") or "",
        "Verified Owner",
        "Active"
    ])
ws_venues = create_tab("Venues_CRM", ["Venue ID", "Venue Name", "City", "Address", "Capacity", "Type", "Website", "Facebook Page", "Latitude", "Longitude", "Claim Status", "Account Status"], venue_rows)

ws_venues.add_data_validation(dv_type)
dv_type.add(f"F2:F{len(venue_rows)+10}")

ws_venues.add_data_validation(dv_claim_status)
dv_claim_status.add(f"K2:K{len(venue_rows)+10}")

ws_venues.add_data_validation(dv_account_status)
dv_account_status.add(f"L2:L{len(venue_rows)+10}")

# 4. Bands_Artists_CRM Tab
bands_sample = [
    ["36-crazyfists", "36 Crazyfists", "Heavy Metal", "Anchorage", "http://www.facebook.com/36crazyfists/events", "8DeKmZbzvV0", "Verified Artist"],
    ["ava-earl", "Ava Earl", "Ethereal Folk", "Girdwood", "https://facebook.com/avaearl", "XOVdqLgXjQs", "Verified Artist"],
    ["ben-swann", "Ben Swann", "Acoustic Folk Rock", "Anchorage", "https://facebook.com/benswannmusic", "QjKy6FftQ2s", "Verified Artist"],
    ["blackwater-railroad-company", "Blackwater Railroad Company", "Americana Roots Rock", "Seward", "https://facebook.com/blackwaterrailroad", "_JHoeusskoM", "Verified Artist"],
    ["city-in-ashes", "City In Ashes", "Metalcore", "Anchorage", "https://facebook.com/cityinashes", "wAqsNBF2uLM", "Verified Artist"],
    ["danger-money", "Danger Money", "Pop Rock Cover Band", "Anchorage", "https://facebook.com/dangermoneyak", "NJ7KMCEeruo", "Verified Artist"],
    ["emma-hill", "Emma Hill", "Indie Folk", "Anchorage", "https://facebook.com/emmahillmusic", "vcVt7pTL_tg", "Verified Artist"],
    ["the-eternal-cowboys", "The Eternal Cowboys", "Country Western", "Fairbanks", "https://facebook.com/eternalcowboys", "5rf7DK4fYQo", "Verified Artist"]
]
ws_bands = create_tab("Bands_Artists_CRM", ["Band Slug", "Band Name", "Genre", "Home City", "Facebook URL", "YouTube Video ID", "Profile Status"], bands_sample)

# 5. Cities_Regions Tab
city_rows = [
    ["Anchorage", "Greater Anchorage Borough", "Southcentral", 61.2181, -149.9003, "Active Core"],
    ["Fairbanks", "Fairbanks North Star Borough", "Interior", 64.8378, -147.7164, "Active Core"],
    ["Juneau", "City & Borough of Juneau", "Southeast", 58.3019, -134.4197, "Active Core"],
    ["Homer", "Kenai Peninsula Borough", "Kenai Peninsula", 59.6425, -151.5483, "Active Regional"],
    ["Palmer", "Matanuska-Susitna Borough", "Mat-Su Valley", 61.5997, -149.1100, "Active Regional"],
    ["Wasilla", "Matanuska-Susitna Borough", "Mat-Su Valley", 61.5814, -149.4394, "Active Regional"],
    ["Girdwood", "Municipality of Anchorage", "Southcentral", 60.9422, -149.1678, "Active Regional"],
    ["Seward", "Kenai Peninsula Borough", "Kenai Peninsula", 60.1042, -149.4422, "Active Regional"],
    ["Talkeetna", "Matanuska-Susitna Borough", "Mat-Su Valley", 62.3208, -150.1066, "Active Regional"],
    ["Ketchikan", "Ketchikan Gateway Borough", "Southeast", 55.3422, -131.6461, "Active Regional"],
    ["Sitka", "City and Borough of Sitka", "Southeast", 57.0531, -135.3300, "Active Regional"]
]
ws_cities = create_tab("Cities_Regions", ["City Name", "Borough / Region", "Territory Zone", "Latitude", "Longitude", "Coverage Level"], city_rows)

# 6. Promoters_Partners Tab
promoters_rows = [
    ["PROMO-01", "Showdown Alaska", "Major Touring & Festivals", "Anchorage", "info@showdownalaska.com", "https://showdownalaska.com", "Active Key Partner"],
    ["PROMO-02", "Whale Bell Media", "Independent Music & Concerts", "Homer", "events@whalebell.com", "https://whalebell.com", "Active Partner"],
    ["PROMO-03", "Alaska Center for the Performing Arts", "Broadway & Performing Arts", "Anchorage", "boxoffice@alaskapac.org", "https://alaskapac.org", "Active Venue Partner"],
    ["PROMO-04", "Creekbend Company", "Outdoor Summer Concert Series", "Hope", "info@creekbendco.com", "https://creekbendco.com", "Active Festival Partner"]
]
ws_promoters = create_tab("Promoters_Partners", ["Promoter ID", "Organization Name", "Specialty Type", "Base City", "Contact Email", "Website", "Partner Tier"], promoters_rows)

# 7. Scraper_Sources Tab
scrapers_rows = [
    ["SCRAPE-01", "Williwaw Social Facebook Events", "Facebook API", "Daily (02:00 AKDT)", "Active", "2026-08-12 02:00"],
    ["SCRAPE-02", "Koot's Nightclub Schedule", "Web Scraper", "Daily (02:30 AKDT)", "Active", "2026-08-12 02:30"],
    ["SCRAPE-03", "49th State Brewing Co Feed", "iCal / Web Scraper", "Daily (03:00 AKDT)", "Active", "2026-08-12 03:00"],
    ["SCRAPE-04", "Crystal Saloon Juneau Scraper", "Web Scraper", "Daily (03:30 AKDT)", "Active", "2026-08-12 03:30"],
    ["SCRAPE-05", "Palmer Alehouse Calendar", "Web Scraper", "Daily (04:00 AKDT)", "Active", "2026-08-12 04:00"],
    ["SCRAPE-06", "Salmonfest Alaska Master Import", "CSV Import", "Weekly", "Active", "2026-08-10 12:00"]
]
ws_scrapers = create_tab("Scraper_Sources", ["Scraper ID", "Source Feed Name", "Feed Engine", "Scrape Frequency", "Status", "Last Run Timestamp"], scrapers_rows)

ws_scrapers.add_data_validation(dv_feed_engine)
dv_feed_engine.add(f"C2:C{len(scrapers_rows)+10}")

# 8. App_Settings_Menus Tab
settings_rows = [
    ["HEADER_NAV_1", "Playing Soon", "/", "Header Desktop & Mobile", "Enabled"],
    ["HEADER_NAV_2", "Past Events", "/past", "Header Desktop & Mobile", "Enabled"],
    ["HEADER_NAV_3", "Submit Event", "/submit", "Header Desktop & Mobile", "Enabled"],
    ["HEADER_NAV_4", "Bands", "/bands", "Header Desktop & Mobile", "Enabled"],
    ["HEADER_NAV_5", "Venues", "/venues", "Header Desktop & Mobile", "Enabled"],
    ["HEADER_NAV_6", "Newsletter", "/subscribe", "Header Desktop & Mobile", "Enabled"],
    ["FLOOR_NAV_1", "Shows", "/", "Bottom Mobile Pill", "Enabled"],
    ["FLOOR_NAV_2", "Bands", "/bands", "Bottom Mobile Pill", "Enabled"],
    ["FLOOR_NAV_3", "Venues", "/venues", "Bottom Mobile Pill", "Enabled"],
    ["FLOOR_NAV_4", "Past", "/past", "Bottom Mobile Pill", "Enabled"],
    ["FLOOR_NAV_5", "Submit", "/submit", "Bottom Mobile Pill", "Enabled"],
    ["CATEGORY_1", "Live Music", "music", "Global Category Filter", "Enabled"],
    ["CATEGORY_2", "Comedy", "comedy", "Global Category Filter", "Enabled"],
    ["CATEGORY_3", "Festivals", "festival", "Global Category Filter", "Enabled"],
    ["CATEGORY_4", "Dance", "dance", "Global Category Filter", "Enabled"],
    ["CATEGORY_5", "Theatre & Arts", "theatre", "Global Category Filter", "Enabled"],
    ["CATEGORY_6", "Community", "community", "Global Category Filter", "Enabled"]
]
ws_settings = create_tab("App_Settings_Menus", ["Setting Key", "Label Name", "Target Route / Slug", "Menu Location", "Status"], settings_rows)

ws_settings.add_data_validation(dv_menu_loc)
dv_menu_loc.add(f"D2:D{len(settings_rows)+10}")

# Save Workbook
for path in [output_xlsx_path, artifact_xlsx_path]:
    wb.save(path)

print(f"Successfully generated Master CRM/CMS Excel Workbook with embedded DataValidation dropdowns: {output_xlsx_path}")
