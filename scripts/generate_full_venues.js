import fs from 'fs';
import path from 'path';

const waybackDir = path.join(process.cwd(), 'wayback_data');
const venuesDataPath = path.join(waybackDir, 'venues_data.json');
const existingVenuesPath = path.join(process.cwd(), 'venues.json');

const cityMapping = {
  "49th State Brewery": "Anchorage",
  "907 Alehouse": "Anchorage",
  "Alaska Airlines Center": "Anchorage",
  "Alaska Botanical Garden": "Anchorage",
  "Alaska Center for the Performing Arts": "Anchorage",
  "Alaska Dance Promotions": "Anchorage",
  "Alaska Experience Theater": "Anchorage",
  "The Alaska Zoo": "Anchorage",
  "American Legion Spenard Post 28": "Anchorage",
  "Amvets Post 2": "Anchorage",
  "Anchorage Loussac Library": "Anchorage",
  "Anchorage Moose Lodge": "Anchorage",
  "Anchorage Museum": "Anchorage",
  "Arctic Valley Ski Area": "Anchorage",
  "The Avenue Bar": "Anchorage",
  "Aviator Hotel": "Anchorage",
  "Bear Tooth Theatrepub": "Anchorage",
  "Bernie's Bungalow Lounge": "Anchorage",
  "The Blue Fox": "Anchorage",
  "Broken Blender": "Anchorage",
  "Billiard Palace": "Anchorage",
  "Carousel Lounge": "Anchorage",
  "The Carousel Lounge": "Anchorage",
  "Chilkoot Charlie's (Koot's)": "Anchorage",
  "Koot’s": "Anchorage",
  "Koots": "Anchorage",
  "Mad Myrna’s": "Anchorage",
  "Matanuska Brewing Company Downtown": "Anchorage",
  "Matanuska Brewing Company, Anchorage": "Anchorage",
  "McGinley’s Pub": "Anchorage",
  "Middle Way Café": "Anchorage",
  "Mountain View Library": "Anchorage",
  "O’Malley’s on the Green": "Anchorage",
  "Peanut Farm": "Anchorage",
  "Pioneer Bar": "Anchorage",
  "Pubhouse": "Anchorage",
  "Pink Cadillac": "Anchorage",
  "SubZero Microlounge": "Anchorage",
  "Sullivan Arena": "Anchorage",
  "Sullivan’s Steakhouse": "Anchorage",
  "Tequilla 61": "Anchorage",
  "That Wing Place": "Anchorage",
  "Time Out Lounge": "Anchorage",
  "Van’s Dive Bar": "Anchorage",
  "VFW Post 1685": "Anchorage",
  "VFW Post 9981": "Anchorage",
  "The Whale's Tail": "Anchorage",
  "Williwaw": "Anchorage",
  "Williwaw Social": "Anchorage",
  "The Writer’s Block": "Anchorage",
  "YMCA of Alaska (Lake Otis Branch)": "Anchorage",
  "Zip Kombucha": "Anchorage",
  "Garcia’s": "Eagle River",
  "Homestead Lounge": "Eagle River",
  "Jitter’s": "Eagle River",
  "Matanuska Brewing Company Eagle River": "Eagle River",
  "Odd Man Rush": "Eagle River",
  "VFW Post 9785": "Eagle River",
  "Arctic Fox": "Fairbanks",
  "The Big I": "Fairbanks",
  "The Boatel": "Fairbanks",
  "Fairbanks Community Band Hall": "Fairbanks",
  "The International Hotel & Bar": "Fairbanks",
  "The Marlin": "Fairbanks",
  "The Palace Theater": "Fairbanks",
  "Raven Landing Senior Center": "Fairbanks",
  "Tanana Valley State Fair Grounds": "Fairbanks",
  "Venue": "Fairbanks",
  "Girdwood Brewing Company": "Girdwood",
  "Jack Sprat": "Girdwood",
  "Chair 5": "Girdwood",
  "Crow Creek Mine": "Girdwood",
  "Silvertip Grill": "Girdwood",
  "The Sitzmark Bar & Grill": "Girdwood",
  "AJ’s Old Town Steakhouse & Tavern": "Homer",
  "Alibi Bar & Café": "Homer",
  "Alice’s Champagne Palace": "Homer",
  "Beluga Lake Lodge Bar & Grill": "Homer",
  "Homer Council on the Arts": "Homer",
  "Justin Cole’s Down East Saloon": "Homer",
  "Kharacters Alaskan Bar": "Homer",
  "Pier One Theater": "Homer",
  "Pratt Museum": "Homer",
  "Creekbend Café": "Hope",
  "Creekbend Co.": "Hope",
  "The Dirty Skillet": "Hope",
  "Seaview Historic Café & Campground": "Hope",
  "The Seaview Café": "Hope",
  "Alaskan Hotel and Bar": "Juneau",
  "The Crystal Saloon": "Juneau",
  "Centennial Hall Convention Center": "Juneau",
  "Kuneix Hidi Northen Light United Church": "Juneau",
  "The Narrows Bar": "Juneau",
  "Red Dog Saloon": "Juneau",
  "Kasilof Dock RV Park": "Kasilof",
  "The Bow": "Kenai",
  "George’s Night Club": "Kenai",
  "Kenai Chamber of Commerce & Visitor Center": "Kenai",
  "Kenai Community Library": "Kenai",
  "Kenai Elks Lodge": "Kenai",
  "Kenai Joes Taphouse": "Kenai",
  "Kenai Kombucha": "Kenai",
  "Main Street Tap & Grill": "Kenai",
  "Skeet’s Dive Bar": "Kenai",
  "105.3 FM KRBD": "Ketchikan",
  "Arctic Bar": "Ketchikan",
  "The Creek Street Cabaret": "Ketchikan",
  "Hole in the Wall": "Ketchikan",
  "Inn at Creek Street": "Ketchikan",
  "Ketchikan Dock": "Ketchikan",
  "The New York Café": "Ketchikan",
  "Tongass Historical Museum": "Ketchikan",
  "Totem Bar": "Ketchikan",
  "The Rendezvous": "Kodiak",
  "The Golden Saloon": "McCarthy",
  "North Pole Alehouse": "North Pole",
  "Summit Church": "North Pole",
  "American Legion Post 15": "Palmer",
  "Bleeding Heart Brewery": "Palmer",
  "Fishhook Bar": "Palmer",
  "Fishhook Bar & Grill": "Palmer",
  "Four Corners Lounge": "Palmer",
  "Four Corner’s Lounge": "Palmer",
  "Hatcher Pass Lodge": "Palmer",
  "Klondike Mike’s And The Main Street Grill": "Palmer",
  "Musk Ox Farm": "Palmer",
  "Palmer Alehouse": "Palmer",
  "Linwood Bar & Grill": "Seldovia",
  "Flamingo Lounge": "Seward",
  "Pit Bar": "Seward",
  "Resurrect Art Coffee House Gallery": "Seward",
  "Seward Alehouse": "Seward",
  "Seward Senior Center": "Seward",
  "Yukon Bar": "Seward",
  "Harrigan Centennial Hall": "Sitka",
  "Sitka Performing Arts Center": "Sitka",
  "Skagway Brewing": "Skagway",
  "Skagway Library": "Skagway",
  "Farnsworth Park": "Soldotna",
  "The Goods": "Soldotna",
  "Kenai River Brewing Company": "Soldotna",
  "The Maverick Saloon": "Soldotna",
  "Soldotna Creek Park": "Soldotna",
  "Soldotna Library": "Soldotna",
  "Lakeside Falls": "Sterling",
  "Naptowne Brewing Company": "Sterling",
  "Denali Brewing Company": "Talkeetna",
  "Denali Education Center": "Talkeetna",
  "Fairview Inn": "Talkeetna",
  "Mountain High Pizza Pie": "Talkeetna",
  "Talkeetna Village Park": "Talkeetna",
  "Valdez Brewing": "Valdez",
  "Black Birch Books": "Wasilla",
  "Curtis D Memorial Sports Center": "Wasilla",
  "Everett's": "Wasilla",
  "Everett’s": "Wasilla",
  "Ken’s Garden Center": "Wasilla",
  "Kids Cupboard": "Wasilla",
  "Last Frontier Brewing Company": "Wasilla",
  "Mug Shot Saloon": "Wasilla",
  "Schwabenhof": "Wasilla",
  "Settler’s Bay": "Wasilla",
  "Summit Worship Center": "Wasilla",
  "Tailgaters Sports Bar & Grill": "Wasilla",
  "Tug Bar & Liquor- Goose Bay Inn": "Wasilla",
  "Sheep Creek Lodge": "Willow",
  "Willow Community Center": "Willow"
};

function slugify(s) {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

async function main() {
  let rawLinks = [];
  if (fs.existsSync(venuesDataPath)) {
    const rawData = JSON.parse(fs.readFileSync(venuesDataPath, 'utf8'));
    rawLinks = rawData.links || [];
  }

  let existingVenues = [];
  if (fs.existsSync(existingVenuesPath)) {
    existingVenues = JSON.parse(fs.readFileSync(existingVenuesPath, 'utf8'));
  }

  const venueMap = new Map();

  // Load existing venues first
  for (const v of existingVenues) {
    venueMap.set(v.name.toLowerCase().trim(), {
      id: v.id || slugify(v.name),
      name: v.name,
      city: v.city || cityMapping[v.name] || 'Anchorage',
      address: v.address || '',
      lat: v.lat || null,
      lng: v.lng || null,
      website: v.website || '',
      facebookUrl: v.facebookUrl || '',
      capacity: v.capacity || null,
      indoor: v.indoor !== undefined ? v.indoor : true
    });
  }

  // Add all scraped venue links
  for (const item of rawLinks) {
    if (!item.text || item.text.length < 3) continue;
    const name = item.text.trim();
    if (name.includes('AK Concerts') || name.includes('Playing Soon') || name.includes('Newsletter') || name.includes('Bands') || name.includes('Venues') || name.includes('Learn') || name.includes('Support') || name.includes('Your Venue Here') || name.includes('Sign up')) continue;

    const lowerName = name.toLowerCase();
    let entry = venueMap.get(lowerName);

    if (!entry) {
      entry = {
        id: slugify(name),
        name: name,
        city: cityMapping[name] || 'Anchorage',
        address: '',
        lat: null,
        lng: null,
        website: '',
        facebookUrl: '',
        capacity: null,
        indoor: true
      };
    }

    if (item.href) {
      if (item.href.includes('facebook.com')) {
        entry.facebookUrl = item.href;
      } else if (!entry.website) {
        entry.website = item.href;
      }
    }

    venueMap.set(lowerName, entry);
  }

  // Also fill from cityMapping if missing
  for (const [vName, city] of Object.entries(cityMapping)) {
    const lowerName = vName.toLowerCase();
    if (!venueMap.has(lowerName)) {
      venueMap.set(lowerName, {
        id: slugify(vName),
        name: vName,
        city: city,
        address: '',
        lat: null,
        lng: null,
        website: '',
        facebookUrl: '',
        capacity: null,
        indoor: true
      });
    }
  }

  const finalVenues = Array.from(venueMap.values()).sort((a, b) => a.name.localeCompare(b.name));

  fs.writeFileSync(existingVenuesPath, JSON.stringify(finalVenues, null, 2), 'utf8');
  console.log(`🎉 Updated venues.json with ${finalVenues.length} total venues across Alaska!`);
}

main().catch(console.error);
