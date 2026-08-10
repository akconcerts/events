export interface AKEvent {
  id: string;
  slug: string;
  title: string;
  venue: string;
  city: string;
  date: string;
  time: string;
  ticketUrl: string;
  category: 'music' | 'comedy' | 'dance' | 'theatre' | 'community' | 'festival';
}

function slugify(s: string): string {
  return s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
}

let _id = 0;
function ev(title: string, venue: string, city: string, date: string, time: string, ticketUrl: string, category: AKEvent['category'] = 'music'): AKEvent {
  _id++;
  return { id: String(_id), slug: slugify(`${title}-${venue}-${date}`), title, venue, city, date, time, ticketUrl, category };
}

export const events: AKEvent[] = [
  // ═══ ANCHORAGE — Thursday November 14th ═══
  ev("Fireside Thursdays w/ DJ JoJo", "Koot’s", "Anchorage", "2019-11-14", "10p-2:10a", ""),
  ev("Music at One: Fall 2019", "UAF Charles Davis Concert Hall (Fairbanks)", "Anchorage", "2019-11-14", "1p-2p", ""),
  ev("Under 21 Open Mic -West", "Middle Way Café", "Anchorage", "2019-11-14", "5:30p-7:30p", ""),
  ev("Thursdays with Will H. Johnson", "Tequila 61˚", "Anchorage", "2019-11-14", "6p-9p", ""),
  ev("Live Jazz", "The Narrows Bar (Juneau)", "Anchorage", "2019-11-14", "7:30p-10:30p", ""),
  ev("Open Mic Night", "Alleyway Grille", "Anchorage", "2019-11-14", "7p-10p", ""),
  ev("Cousin Curtiss & Harrison B", "The Creek Street Cabaret (Ketchikan)", "Anchorage", "2019-11-14", "7p-10p", ""),
  ev("Holiday Karaoke Competition", "Koots", "Anchorage", "2019-11-14", "7p-10p", ""),
  ev("AK Acoustic Projekt", "Tailgaters Sports Bar & Grill (Wasilla)", "Anchorage", "2019-11-14", "7p-10p", ""),
  ev("Open Mic Night w/ TLoop", "Aviator Hotel", "Anchorage", "2019-11-14", "7p-11p", ""),
  ev("Ruploops: The Human Radio", "Gerald C. Wilson Auditorium (Kodiak)", "Anchorage", "2019-11-14", "7p-9:30p", ""),
  ev("The Rocky Horror Show", "Mad Myrna’s", "Anchorage", "2019-11-14", "7p-9p", ""),
  ev("Cosplay Dance", "UAA Student Union Den", "Anchorage", "2019-11-14", "7p-9p", "", "dance"),
  ev("The Block Mic Drop", "The Writer’s Block Bookstore & Café", "Anchorage", "2019-11-14", "7p-9p", ""),
  ev("Joe Ransdell-Green", "UAF Pub", "Anchorage", "2019-11-14", "8p-10p", ""),
  ev("Superfrequency", "Humpy’s", "Anchorage", "2019-11-14", "8p-12a", ""),
  ev("UAA Dance Performance", "UAA Fine Arts Building", "Anchorage", "2019-11-14", "8p-9:30p", "", "dance"),
  ev("DJ Covy", "Mad Myrna’s", "Anchorage", "2019-11-14", "9p-12a", ""),
  ev("Foot & Friends", "Van’s Dive Bar", "Anchorage", "2019-11-14", "9p-12a", ""),
  ev("Becky Kotter", "Long Branch Saloon", "Anchorage", "2019-11-14", "9p-1a", ""),

  // ═══ ANCHORAGE — Friday November 15th ═══
  ev("DJ BeeOne", "Koot’s", "Anchorage", "2019-11-15", "10:30p-2:30a", ""),
  ev("Past Our Prime7p", "Matanuska Brewing Company Eagle River", "Anchorage", "2019-11-15", "10p", ""),
  ev("DJ Covy", "The Avenue Bar", "Anchorage", "2019-11-15", "10p-2:30a", ""),
  ev("Hwy9", "The Carousel Lounge", "Anchorage", "2019-11-15", "10p-2a", ""),
  ev("Onsie Party with DJ Fan Service", "Williwaw", "Anchorage", "2019-11-15", "10p-2a", ""),
  ev("Salsa w/ Back 2 Basics Dance Company6p", "Best Western Golden Lion Hotel", "Anchorage", "2019-11-15", "11p", "", "dance"),
  ev("Kimball Theater Pipe Organ Concert w/ Jonas Nordwall", "Alaska State Office Building (Juneau)", "Anchorage", "2019-11-15", "12p-1p", "", "theatre"),
  ev("Athabascan Fiddle Festival", "Chief David Salmon Tribal Hall (Fairbanks)", "Anchorage", "2019-11-15", "12p-6p", "", "festival"),
  ev("Polar Nights: Friday After Hours w/ Kat Moore7:", "Anchorage Museum", "Anchorage", "2019-11-15", "30p-8:30p", ""),
  ev("Okaidja Afronso Live in concert6:", "Zudy’s Café (Seward)", "Anchorage", "2019-11-15", "30p-9p", ""),
  ev("John Shewfelt10p", "Arctic Fox (Fairbanks)", "Anchorage", "2019-11-15", "3a", ""),
  ev("UAA Student Recitals", "UAA Fine Arts Building", "Anchorage", "2019-11-15", "3p-4p", ""),
  ev("Jack and Jill Competition and Social Dance", "Ballroom Dance Club of Fairbanks", "Anchorage", "2019-11-15", "6p-10p", "", "dance"),
  ev("BBQ Scholarship Fundraiser with Blackwater Railroad Company", "Viking Hall", "Anchorage", "2019-11-15", "6p-11p", ""),
  ev("Acoustic Steak Night w/ Uncle Jim, The East-Side Balladeer", "American Legion Spenard Post 28", "Anchorage", "2019-11-15", "6p-9p", ""),
  ev("FCA presents: Whose Live Anyway?", "Hering Auditorium (Fairbanks)", "Anchorage", "2019-11-15", "7:30p-10:30p", ""),
  ev("Danger Money Band", "VFW Post 9785 (Eagle River)", "Anchorage", "2019-11-15", "7:30p-11:30p", ""),
  ev("Organ Concert with Jonas Nordwall", "Holy Trinity Episcopal Church (Juneau)", "Anchorage", "2019-11-15", "7:30p-8:30p", ""),
  ev("Cousin Curtiss & Harrison B", "Williwaw", "Anchorage", "2019-11-15", "7p-10p", ""),
  ev("Marlowe", "Matanuska Brewing Downtown", "Anchorage", "2019-11-15", "7p-8p", ""),
  ev("Warren Miller’s ‘Timeless’", "Creekbend Company (Hope)", "Anchorage", "2019-11-15", "7p-9p", ""),
  ev("MatSu OnStage presents Pamyua", "Glenn Massay Theater (Palmer)", "Anchorage", "2019-11-15", "7p-9p", ""),
  ev("The Rocky Horror Show", "Mad Myrna’s", "Anchorage", "2019-11-15", "7p-9p", ""),
  ev("Denali", "Whale’s Tail", "Anchorage", "2019-11-15", "7p-9p", ""),
  ev("Kyle Harrington Live", "Zip Kombucha", "Anchorage", "2019-11-15", "7p-9p", ""),
  ev("Viva Las Anchorage: Pulse Dance Co's Burlesque Extravaganza", "Koot’s", "Anchorage", "2019-11-15", "8:30p-10:30p", "", "dance"),
  ev("Open Mic Night6p", "Veronica’s Café (Kenai)", "Anchorage", "2019-11-15", "8p", ""),
  ev("Friday Night Dance Lounge", "Alaska Dance Promotions", "Anchorage", "2019-11-15", "8p-1:30a", "", "dance"),
  ev("Medium Build Album Release Show", "Heart of the City", "Anchorage", "2019-11-15", "8p-11:30p", ""),
  ev("R&B Live Anchorage!", "Hard Rock Café", "Anchorage", "2019-11-15", "8p-11p", ""),
  ev("The Eternal Cowboys", "Matanuska Brewing Company, Anchorage", "Anchorage", "2019-11-15", "8p-11p", ""),
  ev("Wreck In The Roundabout", "907 Alehouse", "Anchorage", "2019-11-15", "8p-12a", ""),
  ev("DJ Rico", "Anchorage Moose Lodge", "Anchorage", "2019-11-15", "8p-12a", ""),
  ev("Elvis Monroe w/ DJ Soulman", "Koot’s", "Anchorage", "2019-11-15", "8p-2:30a", ""),
  ev("UAA Dance Performance", "UAA Fine Arts Building", "Anchorage", "2019-11-15", "8p-9:30p", "", "dance"),
  ev("Rebeckah Hastings", "SubZero Microlounge", "Anchorage", "2019-11-15", "9p-12a", ""),
  ev("Unknowns", "Van’s Dive Bar", "Anchorage", "2019-11-15", "9p-12a", ""),
  ev("Marc Brown & the Blues Crew", "Humpy’s", "Anchorage", "2019-11-15", "9p-1a", ""),
  ev("Becky Kotter", "Long Branch Saloon", "Anchorage", "2019-11-15", "9p-1a", ""),
  ev("Fridays with DJ 3rd George", "Whale’s Tail", "Anchorage", "2019-11-15", "9p-2a", ""),

  // ═══ ANCHORAGE — Saturday November 16th ═══
  ev("Anchorage Civic Orchestra 7:30p-pp", "Alaska Center for the Performing Arts", "Anchorage", "2019-11-16", "", ""),
  ev("2019 Gatsby Charity Ball 7p-11-", "Viking Hall", "Anchorage", "2019-11-16", "", ""),
  ev("Superfrequency", "Koot’s", "Anchorage", "2019-11-16", "10p-2:30a", ""),
  ev("Nrrth, Fat Trophy Wife, Ga$H Money Dance Party", "The Marlin (Fairbanks)", "Anchorage", "2019-11-16", "10p-2:30a", "", "dance"),
  ev("Past Our Prime", "The Carousel Lounge", "Anchorage", "2019-11-16", "10p-2a", ""),
  ev("Keys to Life: Lullaby Concert", "Highland Mountain Correctional Facility", "Anchorage", "2019-11-16", "12p-3p", ""),
  ev("Gypsy Jazz Jam", "The Writer’s Block Bookstore & Café", "Anchorage", "2019-11-16", "2p-5p", ""),
  ev("Ukulele Jam Session", "Mountain View Library", "Anchorage", "2019-11-16", "3:30p-5:30p", ""),
  ev("Sweet Cheeks Cabaret: Forbidden Desires6:", "49thState Brewing", "Anchorage", "2019-11-16", "30p-8p & 9:30p-11p", ""),
  ev("Cousin Curtiss & Harrison B10p", "Arctic Fox (Fairbanks)", "Anchorage", "2019-11-16", "3a", ""),
  ev("Ghanaian Dance Class with Okaidja Afroso", "Momentum Dance Collective", "Anchorage", "2019-11-16", "3p-4:30p", "", "dance"),
  ev("November Open Mic", "The Rookery (Juneau)", "Anchorage", "2019-11-16", "6:30p-9:30p", ""),
  ev("Date Night at Roma Bistro w/ Rob Cohen", "Roma Bistro on the Wharf (Juneau)", "Anchorage", "2019-11-16", "6:30p-9p", ""),
  ev("Shred the Cabbage with Braided River", "Klondike Mike’s (Palmer)", "Anchorage", "2019-11-16", "6p-9a", ""),
  ev("Whose Live Anyway?", "Alaska Center for the Performing Arts", "Anchorage", "2019-11-16", "7:30p-9:30p", ""),
  ev("Celebrate the Music 2019 with the Alaska Sound Celebration", "Alaska Center for the Performing Arts", "Anchorage", "2019-11-16", "7:30p-9p", ""),
  ev("The Portly Presleys", "Unitarian Universalist Fellowship of Fairbanks", "Anchorage", "2019-11-16", "7:30p-9p", ""),
  ev("November Wild Heart Dance", "The Yoga Path (Juneau)", "Anchorage", "2019-11-16", "7:30p-9p", "", "dance"),
  ev("Schaefer Mueller", "Matanuska Brewing Company Eagle River", "Anchorage", "2019-11-16", "7p-10p", ""),
  ev("The Forest That Never Sleeps", "Matanuska Brewing Company, Anchorage", "Anchorage", "2019-11-16", "7p-10p", ""),
  ev("Irish Seisiun", "Pizza Hut (Fairbanks)", "Anchorage", "2019-11-16", "7p-10p", ""),
  ev("Dance Lesson and Dinner Dance Party", "35+ Singles Dance Club", "Anchorage", "2019-11-16", "7p-11p", "", "dance"),
  ev("Juneau String Ensembles Concert", "Northern Light United Church (Juneau)", "Anchorage", "2019-11-16", "7p-8:30p", ""),
  ev("The Nuther Brothers", "Whale’s Tail", "Anchorage", "2019-11-16", "7p-9p", ""),
  ev("Kizomba Dance Workshop at Zip Kombucha", "Zip Kombucha", "Anchorage", "2019-11-16", "7p-9p", "", "dance"),
  ev("The Rocky Horror Show", "Mad Myrna’s", "Anchorage", "2019-11-16", "7p-9p & 10p-12a", ""),
  ev("Bag Lady Sue", "Ivory Jacks (Fairbanks)", "Anchorage", "2019-11-16", "8:30p-11:30p", ""),
  ev("Larry Zarella", "Matanuska Brewing Downtown", "Anchorage", "2019-11-16", "8p-11p", ""),
  ev("Danger Money Band", "907 Alehouse", "Anchorage", "2019-11-16", "8p-12a", ""),
  ev("Dos Palmerainians", "The Schwabenhof (Wasilla)", "Anchorage", "2019-11-16", "8p-12a", ""),
  ev("Organ Workshop w/ Jonas Nordwall", "Holy Trinity Episcopal Church (Juneau)", "Anchorage", "2019-11-16", "9:30a-11a", ""),
  ev("Latin Night with Anaya Latin Dance", "Charlou", "Anchorage", "2019-11-16", "9p-12a", "", "dance"),
  ev("The Stack", "Hard Rock Café", "Anchorage", "2019-11-16", "9p-12a", ""),
  ev("Denali", "SubZero Microlounge", "Anchorage", "2019-11-16", "9p-12a", ""),
  ev("The Jangle Bees", "Humpy’s", "Anchorage", "2019-11-16", "9p-1a", ""),
  ev("Alt Pop Party w/ Lloyds Noize & DJ GRE", "Van’s Dive Bar", "Anchorage", "2019-11-16", "9p-2:30a", ""),
  ev("Saturdays with DJ 3rd George", "Whale’s Tail", "Anchorage", "2019-11-16", "9p-2a", ""),
  ev("2010-2019 Video Dance Partyw/ DJ Spencer Lee", "Williwaw", "Anchorage", "2019-11-16", "9p-2a", "", "dance"),

  // ═══ ANCHORAGE — Sunday November 17th ═══
  ev("VivaVoom Brr-Lesque Presents: 2019 Prep Academy", "Koot’s", "Anchorage", "2019-11-17", "12p-2p", ""),
  ev("Snow Drifters12p", "The Writer’s Block Bookstore & Café", "Anchorage", "2019-11-17", "2p", ""),
  ev("Lauren Somers Heyano, \"Emerging\"", "The Writer’s Block Bookstore & Café", "Anchorage", "2019-11-17", "3p-4:30p", ""),
  ev("Jenna Dreydoppel: Junior Voice Recital", "UAF Charles Davis Hall (Fairbanks)", "Anchorage", "2019-11-17", "4p-5p", ""),
  ev("Family-Friendly House Concert with Emily Kurn", "House Concert", "Anchorage", "2019-11-17", "4p-6p", ""),
  ev("UAA Dance Performance", "UAA Fine Arts Building", "Anchorage", "2019-11-17", "5p-7:30p", "", "dance"),
  ev("Swing Dance Sundays", "Zip Kombucha", "Anchorage", "2019-11-17", "6p-8p", "", "dance"),
  ev("Open Mic Comedy", "Koot’s", "Anchorage", "2019-11-17", "8:30p-10p", "", "comedy"),
  ev("Open Mic", "Humpy’s", "Anchorage", "2019-11-17", "8p-11p", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2019-11-17", "9p-12a", ""),

  // ═══ ANCHORAGE — Monday November 18th ═══
  ev("KSC Christmas Choir", "Kenai Senior Center", "Anchorage", "2019-11-18", "1p-2p", ""),
  ev("Open Mic8p", "Koot’s", "Anchorage", "2019-11-18", "2a", ""),
  ev("Open Mic Night w/ TLooP Music", "Zip Kombucha", "Anchorage", "2019-11-18", "6p-8p", ""),
  ev("Comedy Open Mic Night", "Van’s Dive Bar", "Anchorage", "2019-11-18", "8p-10:30p", "", "comedy"),

  // ═══ ANCHORAGE — Tuesday November 19th ═══
  ev("Eternal Cowboys", "Koot’s", "Anchorage", "2019-11-19", "10p-2a", ""),
  ev("Open Mic Comedy8p", "The Marlin (Fairbanks)", "Anchorage", "2019-11-19", "11p", "", "comedy"),
  ev("Tyson Tuesdays9p", "Seward Alehouse", "Anchorage", "2019-11-19", "12a", ""),
  ev("Under 21 Open Mic -East", "Hula Hands", "Anchorage", "2019-11-19", "5:30p-7:30p", ""),
  ev("Tahitian Dance", "Arctic Rec Center", "Anchorage", "2019-11-19", "6:30p-7:30p", "", "dance"),
  ev("Tuesday Open Mic at Post 28", "American Legion Spenard Post 28", "Anchorage", "2019-11-19", "6:30p-9:30p", ""),
  ev("Cousin Curtiss", "Brown Bear Saloon (Indian)", "Anchorage", "2019-11-19", "7p-10p", ""),
  ev("Mike Gorder", "The Pioneer Bar", "Anchorage", "2019-11-19", "7p-9p", ""),

  // ═══ ANCHORAGE — Wednesday November 20th ═══
  ev("Unplugged Wednesday w/ Kat Moore 5:30p-8:30pc", "Charlou", "Anchorage", "2019-11-20", "", ""),
  ev("Open Decks", "Koot’s", "Anchorage", "2019-11-20", "10p-1:30a", ""),
  ev("The Eternal Cowboys", "The Pioneer Bar", "Anchorage", "2019-11-20", "10p-1a", ""),
  ev("Charles Woodward: Junior Tuba Recital", "UAA Department of Music", "Anchorage", "2019-11-20", "7:30p-8:30p", ""),
  ev("Anchorage Bowl Chamber Orchestra: ABCO Winter Concert", "Loussac Library", "Anchorage", "2019-11-20", "7:30p-9p", ""),
  ev("Todd Long", "Matanuska Brewing Company, Anchorage", "Anchorage", "2019-11-20", "7p-10p", ""),
  ev("Lisa Lisa", "Matanuska Brewing Company Eagle River", "Anchorage", "2019-11-20", "7p-10p", ""),
  ev("GRLZ: Female Open Mic", "The Rendezvous (Juneau)", "Anchorage", "2019-11-20", "7p-10p", ""),
  ev("Open Mic", "The Schwabenhof (Wasilla)", "Anchorage", "2019-11-20", "7p-10p", ""),
  ev("Mountainside Open Mic & Art Night", "The Rookery (Juneau)", "Anchorage", "2019-11-20", "7p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2019-11-20", "8:30p-10p", "", "comedy"),
  ev("Becky Kotter", "Humpy’s", "Anchorage", "2019-11-20", "8p-12a", ""),
  ev("Open Mic Night", "The Marlin (Fairbanks)", "Anchorage", "2019-11-20", "9p-2a", ""),

  // ═══ ANCHORAGE — Friday June 26th ═══
  ev("DJ LT", "Koot’s", "Anchorage", "2020-06-26", "10:30p-2:30a", ""),
  ev("The Stack Alaska", "Koot’s", "Anchorage", "2020-06-26", "10p-2a", ""),
  ev("Marc Brown", "Arctic Fox (Fairbanks)", "Anchorage", "2020-06-26", "10p-3a", ""),
  ev("Whitney Youngman, Wash Your Hands, & Garrett Hermansen6:", "TLoop Music", "Anchorage", "2020-06-26", "30p-8p", ""),
  ev("John Damberg Solo Jazz Piano", "Organic Oasis", "Anchorage", "2020-06-26", "5:30p-7:30p", ""),
  ev("Under The Sea Virtual Dance", "The Arc of Anchorage", "Anchorage", "2020-06-26", "5p-7p", "", "dance"),
  ev("Jared Woods", "Dirty Skillet", "Anchorage", "2020-06-26", "6p-10p", ""),
  ev("Acoustic Steak Night w/ Jason Ott", "American Legion Spenard Post 28", "Anchorage", "2020-06-26", "6p-8p", ""),
  ev("Hwy9", "Driveway Concert (South Anchorage)", "Anchorage", "2020-06-26", "6p-8p", ""),
  ev("Ken Peltier Backyard Summer Concert", "Matanuska Brewing (Eagle River)", "Anchorage", "2020-06-26", "7p-10p", ""),
  ev("I Like Robots", "Palmer Alehouse (Palmer)", "Anchorage", "2020-06-26", "7p-10p", ""),
  ev("The Jangle Bees", "Settlers Bay Golf Course (Wasilla)", "Anchorage", "2020-06-26", "7p-10p", ""),
  ev("Unknowns", "Humpys", "Anchorage", "2020-06-26", "8p-12a", ""),
  ev("Dance Party with DJ Fan Service", "Williwaw", "Anchorage", "2020-06-26", "9:30p-1:30a", "", "dance"),
  ev("The Stack Alaska", "Garcia’s Cantina & Café (Eagle River)", "Anchorage", "2020-06-26", "9p-12a", ""),
  ev("Roof Jamz", "Williwaw", "Anchorage", "2020-06-26", "9p-12a", ""),
  ev("Friday Night Dance Lounge", "Alaska Dance Promotions", "Anchorage", "2020-06-26", "9p-1a", "", "dance"),
  ev("Superfrequency", "The Boatel (Fairbanks)", "Anchorage", "2020-06-26", "9p-1a", ""),
  ev("Ben Balivet", "The Catch Restaurant and Bar", "Anchorage", "2020-06-26", "9p-1a", ""),
  ev("Summer Song Battles: Leaps and Bounds Music & John Shewfelt Jr 7p", "International Hotel and Bar (Fairbanks)", "Anchorage", "2020-06-26", "9p-1a", ""),
  ev("Ukulele Russ & His One Man Frontier Band", "Yukon Bar (Seward)", "Anchorage", "2020-06-26", "9p-1a", ""),
  ev("Tony Taylor the Artist", "International Hotel and Bar (Fairbanks)", "Anchorage", "2020-06-26", "9p-2a", ""),

  // ═══ ANCHORAGE — Saturday June 27th ═══
  ev("Love Bizzare Block Party 2020", "The Writer’s Block Bookstore & Café", "Anchorage", "2020-06-27", "4p-10p", ""),
  ev("Daughters Of The New Moon Summer Pop Up!", "Marine Park (Juneau)", "Anchorage", "2020-06-27", "5p-5:30p", ""),
  ev("Todd Grebe", "Dirty Skillet", "Anchorage", "2020-06-27", "6p-10p", ""),
  ev("Denali Cooks Backyard Summer Concert", "Matanuska Brewing (Eagle River)", "Anchorage", "2020-06-27", "7p-10p", ""),
  ev("The Jangle Bees Live", "Palmer Alehouse", "Anchorage", "2020-06-27", "7p-10p", ""),
  ev("Danger & Diva", "Floater’s (Big Lake)", "Anchorage", "2020-06-27", "8p-12a", ""),
  ev("Nervis Rex", "Williwaw", "Anchorage", "2020-06-27", "9:30p-1a", ""),
  ev("Roof Jamz", "Williwaw", "Anchorage", "2020-06-27", "9p-12a", ""),
  ev("Benefield Blues Band", "International Hotel and Bar (Fairbanks)", "Anchorage", "2020-06-27", "9p-1a", ""),

  // ═══ ANCHORAGE — Sunday June 28th ═══
  ev("Salsa in the Park", "Anchorage Downtown Partnership", "Anchorage", "2020-06-28", "1p-3p", "", "dance"),
  ev("Beat Roots Alaska: w/ BeeOne", "106.1 FM Out North Radio", "Anchorage", "2020-06-28", "3p-5p", ""),
  ev("Hwy9", "Driveway Concert (Eagle River)", "Anchorage", "2020-06-28", "6p-8p", ""),
  ev("Doses & Mimosas on the Roof w/ DJ GRE and DJ Lloyds Noize", "Williwaw", "Anchorage", "2020-06-28", "6p-9p", ""),
  ev("Black Sheep Comedy: Laugh 4 Hope in HOPE", "Dirty Skillet", "Anchorage", "2020-06-28", "7p-10p", "", "comedy"),
  ev("Dance Party", "Special Olympics Alaska", "Anchorage", "2020-06-28", "7p-8p", "", "dance"),
  ev("Comedy Open Mic Night at Koot's", "Koot’s", "Anchorage", "2020-06-28", "8:30p-10p", "", "comedy"),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2020-06-28", "9p-1a", ""),
  ev("Open Jam with Ben Sayers", "Yukon Bar (Seward)", "Anchorage", "2020-06-28", "9p-1a", ""),

  // ═══ ANCHORAGE — Monday June 29th ═══
  ev("Virtual Music for Little Ones", "Anchorage Downtown Partnership", "Anchorage", "2020-06-29", "12p-1p", ""),
  ev("Industry Night w/ Lloyds Noize", "Williwaw", "Anchorage", "2020-06-29", "6p-9p", ""),
  ev("Open Mic with The Eternal Cowboys", "Koot’s", "Anchorage", "2020-06-29", "9p-1:30a", ""),
  ev("Mondrews w/ Drew Erickson", "Van’s Dive Bar", "Anchorage", "2020-06-29", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday June 30th ═══
  ev("Hobo Jim", "AJ’s OldTown Steakhouse & Tavern", "Anchorage", "2020-06-30", "6:30p-8p & 8:30p-9:30p", ""),
  ev("Bonus Jam Night at Post 28!", "American Legion Spenard Post 28", "Anchorage", "2020-06-30", "6p-8p", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2020-06-30", "9p-1:30a", ""),
  ev("Tyson Tuesdays", "Seward Alehouse (Seward)", "Anchorage", "2020-06-30", "9p-12a", ""),
  ev("Garrett Plays With Himself", "Van’s Dive Bar", "Anchorage", "2020-06-30", "9p-12a", "", "theatre"),

  // ═══ ANCHORAGE — Wednesday July 1st ═══
  ev("Virtual Music in the Park w/ KonneXion", "Anchorage Downtown Partnership", "Anchorage", "2020-07-01", "12p-1p", ""),
  ev("Sounds of Summer w/ DJ GRE", "Williwaw", "Anchorage", "2020-07-01", "6p-9p", ""),
  ev("Open Mic Night", "The Schwabenhof (Wasilla)", "Anchorage", "2020-07-01", "7:30p-11:30p", ""),
  ev("Open Mic at The Big I", "International Hotel and Bar (Fairbanks)", "Anchorage", "2020-07-01", "7:30p-1a", ""),

  // ═══ ANCHORAGE — Friday August 7th ═══
  ev("Arly Jylz", "Arctic Fox (Fairbanks)", "Anchorage", "2020-08-07", "10p-3a", ""),
  ev("UDC Fitness Shuffle In the Park!", "Anchorage Downtown Partnership", "Anchorage", "2020-08-07", "12p-1a", ""),
  ev("Matt Hopper", "Dirty Skillet (Hope)", "Anchorage", "2020-08-07", "6p-10p", ""),
  ev("Spenard Bike Rally w/ Danger Money", "House of Harley Davidson", "Anchorage", "2020-08-07", "6p-10p", ""),
  ev("Tripwire", "Floaters", "Anchorage", "2020-08-07", "7:30p-11:30p", ""),
  ev("Ken Peltier", "Matanuska Brewing Eagle River", "Anchorage", "2020-08-07", "7p-10p", ""),
  ev("Nothin But Trouble", "Palmer Alehouse (Palmer)", "Anchorage", "2020-08-07", "7p-10p", ""),
  ev("Alaska Jumping Flea Society", "Eagle River Town Square Park", "Anchorage", "2020-08-07", "7p-9p", ""),
  ev("The Eternal Cowboys", "Flattop & Williwaw F Street Patio", "Anchorage", "2020-08-07", "8:30p-10p", ""),
  ev("Live 𝚂𝚝𝚛𝚎𝚊𝚖𝚒𝚗𝚐 Zero Miles to Empty", "Koots", "Anchorage", "2020-08-07", "8p-11p", ""),

  // ═══ ANCHORAGE — Saturday August 8th ═══
  ev("Music And Instrument Fair", "Wood & Wire Guitars & Music", "Anchorage", "2020-08-08", "11a-5p", "", "festival"),
  ev("Lunch Music with Lizzie Angaiak", "Sofia’s Café (Palmer)", "Anchorage", "2020-08-08", "12p-2p", ""),
  ev("Hobo Jim", "Matanuska Brewing Eagle River", "Anchorage", "2020-08-08", "7p-10p", ""),
  ev("Nervis Rex", "Palmer Alehouse", "Anchorage", "2020-08-08", "7p-10p", ""),

  // ═══ ANCHORAGE — Sunday August 9th ═══
  ev("Beat Roots Alaska: Summer w/ Gekkota", "106.1 FM Out North Radio", "Anchorage", "2020-08-09", "3p-5p", ""),

  // ═══ ANCHORAGE — Monday August 10th ═══
  ev("Virtual Music for Little Ones", "Anchorage Downtown Partnership", "Anchorage", "2020-08-10", "12p-1p", ""),

  // ═══ ANCHORAGE — Tuesday August 11th ═══
  ev("Zumba in Town Square w/ Anchorage Downtown partnership", "Anchorage Downtown Partnership", "Anchorage", "2020-08-11", "12p-1a", ""),
  ev("Free Live Music", "Pubhouse", "Anchorage", "2020-08-11", "6p-9p", ""),
  ev("The Eternal Cowboys: Live, Laugh, Livestream", "Boobs’ Living Room in Spenard", "Anchorage", "2020-08-11", "7p-10p", ""),

  // ═══ ANCHORAGE — Wednesday August 12th ═══
  ev("Virtual Music in the Park", "Anchorage Downtown Partnership", "Anchorage", "2020-08-12", "12p-1p", ""),
  ev("Open Mic, Every Wednesday!", "The Schwabenhof (Wasilla)", "Anchorage", "2020-08-12", "7:30p-11:30p", ""),
  ev("Open Mic at The Big I", "International Hotel and Bar (Fairbanks)", "Anchorage", "2020-08-12", "7:30p-1a", ""),
  ev("Tim Easton Live", "The Writer’s Block Bookstore & Café", "Anchorage", "2020-08-12", "7p-9p", ""),

  // ═══ ANCHORAGE — Thursday October 22nd ═══
  ev("JD Cox Live", "Palmer Alehouse", "Anchorage", "2020-10-22", "6:30p-9:30p", ""),
  ev("Throwback Thursdays w/ Joe Brady", "Williwaw", "Anchorage", "2020-10-22", "8p-11p", ""),

  // ═══ ANCHORAGE — Friday October 23rd ═══
  ev("Disney's Descendants", "Virtual Dance", "Anchorage", "2020-10-23", "", ""),
  ev("Stranger Things Upside Down 80s Night with DJ Joe Brady", "Williwaw", "Anchorage", "2020-10-23", "10:30p-1:30a", ""),
  ev("Cole Hard Country Band", "Four Corners Lounge (Palmer)", "Anchorage", "2020-10-23", "10p-2a", ""),
  ev("Danger Money Live", "Klondike Mike’s and the Main Street Grill (Palmer)", "Anchorage", "2020-10-23", "10p-2a", ""),
  ev("Halloween Fun w/ Marc Brown and the Blues Crew", "Arctic Fox (Fairbanks)", "Anchorage", "2020-10-23", "10p-3a", ""),
  ev("DJ Manny’s LOVE BITES || Ladies Night", "Tony’s Sports Bar (Fairbanks)", "Anchorage", "2020-10-23", "10p-3a", ""),
  ev("Playhouse Live Comedy & Music 7:", "The Schwabenhof (Wasilla)", "Anchorage", "2020-10-23", "30p", "", "comedy"),
  ev("Virtual Dance - Disney's Descendants", "The Arc of Anchorage", "Anchorage", "2020-10-23", "5p-7p", "", "dance"),
  ev("October Live Music w/ JD Cox and Tim Hall", "Everett’s (Wasilla)", "Anchorage", "2020-10-23", "6:30p-9:30p", ""),
  ev("Facebook Live: Friday Night Free Play V9.0", "DJ KDean", "Anchorage", "2020-10-23", "6p-9p", "", "theatre"),
  ev("Arctic Entries at the Zoo (Drive-In)", "The Alaska Zoo", "Anchorage", "2020-10-23", "7p-9p", ""),
  ev("Sinister Suites 6p-6:30p, 6:45p-7:17p, 7:30p-8p", "The Drift Gallery Dance Studio", "Anchorage", "2020-10-23", "8:15p-8:45p", ""),

  // ═══ ANCHORAGE — Saturday October 24th ═══
  ev("DJ MANNY: I Want To Play A Game. . .", "Tony’s Sports Bar (Fairbanks)", "Anchorage", "2020-10-24", "10p-3a", "", "theatre"),
  ev("\"Bar-B-Que's in the Views\" Free Food & Rides to the Polls", "William B Lions Park", "Anchorage", "2020-10-24", "12p-4p", ""),
  ev("October Live Music w/ Tyson Cole", "Everett’s (Wasilla)", "Anchorage", "2020-10-24", "6:30p-9:30p", ""),
  ev("Avoiding Reality Band", "Floaters (Big Lake)", "Anchorage", "2020-10-24", "7:30p-12a", ""),
  ev("Best of Lame Ducks and Dark Horses Retrospective", "Triumvirate Theatre (Facebook Live)", "Anchorage", "2020-10-24", "7p-8p", ""),
  ev("Huycke Entertainment presents Viva Spenard v2", "Koot’s", "Anchorage", "2020-10-24", "8p-11p", ""),
  ev("Fall Fun Fest w/ The Eternal Cowboys & DJ Fan Service", "Williwaw", "Anchorage", "2020-10-24", "8p-2a", "", "festival"),

  // ═══ ANCHORAGE — Sunday October 25th ═══
  ev("Beats Roots: Hallow Beat Treat w/ Glen Ghoul", "KONR 106.1FM Out North Radio", "Anchorage", "2020-10-25", "3p-5p", ""),
  ev("October Live Music w/ Diana Z", "Everett’s (Wasilla)", "Anchorage", "2020-10-25", "6:30p-9:30p", ""),
  ev("Sinister Suites 5p-5:30p, 5:45p-6:15p. 6:30p-7p", "The Drift Gallery Dance Studio", "Anchorage", "2020-10-25", "7:15p-7:45p", ""),

  // ═══ ANCHORAGE — Monday October 26th ═══
  ev("Mother Moose Storytime", "Fairbanks North Star Borough Public Libraries", "Anchorage", "2020-10-26", "10:30a-11a", "", "community"),
  ev("NMM Episode 12 feat Cliff & Ivy", "New Music Mondays with Davey Bones", "Anchorage", "2020-10-26", "6p-8:30p", ""),
  ev("DJ Chester Chomp’s Zoom Room Dance Party!", "Red Carpet Entertainment", "Anchorage", "2020-10-26", "7p-7:40p", "", "dance"),
  ev("Mundane Mondays* w/Daysha *Unplugged", "Van’s Dive Bar", "Anchorage", "2020-10-26", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday October 27th ═══
  ev("Zumba with Anchorage Downtown Partnership", "Anchorage Town Square", "Anchorage", "2020-10-27", "12p-1p", ""),
  ev("Acoustic Song Circle and Open non-Mic 6:30p–9:", "American Legion Spenard Post 28", "Anchorage", "2020-10-27", "30p", ""),
  ev("Puppy Yoga to Benefit Breast Cancer Awareness", "Pubhouse", "Anchorage", "2020-10-27", "6p-7p", ""),
  ev("The Eternal Cowboys: Live, Laugh, Livestream", "Boobs’ Living Room in Spenard", "Anchorage", "2020-10-27", "7p-10p", ""),

  // ═══ ANCHORAGE — Wednesday October 28th ═══
  ev("Parents and Twos Storytime", "Fairbanks North Star Borough Public Libraries", "Anchorage", "2020-10-28", "10:30a-11a", "", "community"),
  ev("Open Mic, Every Wednesday! 7:", "The Schwabenhof (Wasilla)", "Anchorage", "2020-10-28", "30p", ""),
  ev("Halloween Hop", "Kangoo Club Alaska", "Anchorage", "2020-10-28", "6:30p-8p", ""),
  ev("Open Mic", "Casccadelic", "Anchorage", "2020-10-28", "6p-9p", ""),
  ev("Hot Mess", "The Duck Inn (Soldotna)", "Anchorage", "2020-10-28", "7p-10p", ""),
  ev("Comedy Open Mic at Koot's", "Koot’s", "Anchorage", "2020-10-28", "8:30p-10p", "", "comedy"),

  // ═══ ANCHORAGE — Wednesday November 25th ═══
  ev("Parents and Twos Storytime", "Fairbanks North Star Borough Public Libraries", "Anchorage", "2020-11-25", "10:30a-11a", "", "community"),
  ev("Open Decks", "Koot’s", "Anchorage", "2020-11-25", "10p-2a", ""),
  ev("Open Mic, Every Wednesday! 7:", "The Schwabenhof (Wasilla)", "Anchorage", "2020-11-25", "30p", ""),
  ev("Open Mic", "Cascadelic", "Anchorage", "2020-11-25", "6p-9p", ""),
  ev("Friendsgiving with Lloyds Noize", "Williwaw", "Anchorage", "2020-11-25", "7p-12a", ""),

  // ═══ ANCHORAGE — Thursday November 26th ═══
  ev("Music at One Thanksgiving!", "UAF Department of Music (Online Event)", "Anchorage", "2020-11-26", "1p-3p", ""),
  ev("Arcade Night with DJ Joe Brady", "Williwaw", "Anchorage", "2020-11-26", "7p-11p", ""),

  // ═══ ANCHORAGE — Friday November 27th ═══
  ev("Those Guys AK Are Back In Town", "Mugshot Saloon (Wasilla)", "Anchorage", "2020-11-27", "10p-2:30a", ""),
  ev("Danger Money Live", "Klondike Mike’s and the Main Street Grill (Palmer)", "Anchorage", "2020-11-27", "10p-2a", ""),
  ev("DJ Manny’s Annual Black Friday Purge", "Tony’s Sports Bar (Fairbanks)", "Anchorage", "2020-11-27", "10p-3a", ""),
  ev("Friday Night After Dark on Twitch", "DJ KDean", "Anchorage", "2020-11-27", "5p-9p", ""),
  ev("November Events w/ Tyson Cole", "Everett’s (Wasilla)", "Anchorage", "2020-11-27", "6:30p-9:30p", ""),
  ev("Open Mic Night", "Floaters (Big Lake)", "Anchorage", "2020-11-27", "7-11p", ""),
  ev("Reggaeton Workshop", "Anaya Latin Dance", "Anchorage", "2020-11-27", "7p-10p", ""),
  ev("Alaska Comedy Drive-in Comedy Show", "Good Titrations (Fairbanks)", "Anchorage", "2020-11-27", "7p-9p", "", "comedy"),
  ev("The Eternal Cowboys", "Williwaw", "Anchorage", "2020-11-27", "8p-10:30p", ""),
  ev("The Jammin Band’s Debut", "Kenai Joe’s Taphouse", "Anchorage", "2020-11-27", "9p-12a", ""),

  // ═══ ANCHORAGE — Saturday November 28th ═══
  ev("Happy Hour", "Hannah Corral", "Anchorage", "2020-11-28", "", ""),
  ev("Be Thankful For Bass: A Thanksgiving Throwdown", "Avenue Bar", "Anchorage", "2020-11-28", "10p-2a", ""),
  ev("DJ Manny Helps Support Local", "Tony’s Sports Bar (Fairbanks)", "Anchorage", "2020-11-28", "10p-3a", ""),
  ev("Hannah Corral - Happy Hour", "Fairbanks Folk Fest", "Anchorage", "2020-11-28", "4:30p-5:30p", ""),
  ev("Tony Johnson Live inside", "Bar Harbor Ale House (Ketchikan)", "Anchorage", "2020-11-28", "5p-7p", ""),
  ev("November Events w/ JD Cox and Tim Hall", "Everett’s (Wasilla)", "Anchorage", "2020-11-28", "6:30p-9:30p", ""),
  ev("Chachachá Workshop", "Anaya Latin Dance", "Anchorage", "2020-11-28", "7p-9p", ""),
  ev("Unplugged: The Eternal Cowboys", "Williwaw", "Anchorage", "2020-11-28", "8p-10:30p", ""),

  // ═══ ANCHORAGE — Sunday November 29th ═══
  ev("Thanksgiving Potluck!", "Swing Dance", "Anchorage", "2020-11-29", "", ""),
  ev("November Events w/ Kayti and Ben Heller", "Everett’s (Wasilla)", "Anchorage", "2020-11-29", "5:30p-8:30p", ""),
  ev("Tony Johnson Live inside", "Bar Harbor Ale House (Ketchikan)", "Anchorage", "2020-11-29", "5p-7p", ""),
  ev("Swing Dance - Thanksgiving Potluck!", "AK East Coast Swing (Palmer)", "Anchorage", "2020-11-29", "5p-8p", "", "dance"),

  // ═══ ANCHORAGE — Monday November 30th ═══
  ev("Mother Moose Storytime", "Fairbanks North Star Borough Public Libraries", "Anchorage", "2020-11-30", "10:30a-11a", "", "community"),
  ev("DJ Chester Chomp’s Zoom Room Dance Party!", "Red Carpet Entertainment", "Anchorage", "2020-11-30", "7p-7:40p", "", "dance"),

  // ═══ ANCHORAGE — Tuesday December 1st ═══
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2020-12-01", "10p-1:30a", ""),

  // ═══ ANCHORAGE — Wednesday December 2nd ═══
  ev("Open Decks", "Koot’s", "Anchorage", "2020-12-02", "10p-2a", ""),
  ev("Open Mic, Every Wednesday! 7:", "The Schwabenhof (Wasilla)", "Anchorage", "2020-12-02", "30p", ""),
  ev("Open Mic", "Cascadelic", "Anchorage", "2020-12-02", "6p-9p", ""),

  // ═══ ANCHORAGE — Thursday December 24th ═══
  ev("Steve in the Box Karaoke", "Floaters (Big Lake)", "Anchorage", "2020-12-24", "7:30p-11:30p", ""),

  // ═══ ANCHORAGE — Friday December 25th ═══
  ev("Those Guy AK", "The Mug Shot Saloon (Wasilla)", "Anchorage", "2020-12-25", "10p-2:30a", ""),
  ev("Open Mic Night", "Floaters (Big Lake)", "Anchorage", "2020-12-25", "7-11p", ""),

  // ═══ ANCHORAGE — Saturday December 26th ═══
  ev("Those Guy AK 10p-2:30a Tony’s Sports Bar (Fairbanks) - DJ Manny's 2021 Countdown KICKOFF PARTY", "The Mug Shot Saloon (Wasilla)", "Anchorage", "2020-12-26", "10p-3a", "", "festival"),
  ev("Free Skating on Boxing Day", "Dimond Center Mall", "Anchorage", "2020-12-26", "12p-5p", ""),

  // ═══ ANCHORAGE — Sunday December 27th ═══
  ev("Beat Roots w/ Dat Kid Shawn", "KONR 106.1FM Out North Radio", "Anchorage", "2020-12-27", "3p-5p", ""),
  ev("Tony Johnson Live inside", "Bar Harbor Ale House (Ketchikan)", "Anchorage", "2020-12-27", "5p-7p", ""),
  ev("Christmas Potluck & Swing Dancing", "AK East Coast Swing (Palmer)", "Anchorage", "2020-12-27", "5p-9p", "", "dance"),

  // ═══ ANCHORAGE — Monday December 28th ═══
  ev("Mother Moose Storytime", "Fairbanks North Star Borough Public Libraries", "Anchorage", "2020-12-28", "10:30a-11a", "", "community"),
  ev("DJ Chester Chomp’s Zoom Room Dance Party!", "Red Carpet Entertainment", "Anchorage", "2020-12-28", "7p-7:40p", "", "dance"),

  // ═══ ANCHORAGE — Tuesday December 29th ═══
  ev("Kizomba Workshop", "Alaska Dance Promotions", "Anchorage", "2020-12-29", "7:30p-8:30p", ""),

  // ═══ ANCHORAGE — Wednesday December 30th ═══
  ev("Parents and Twos Storytime", "Fairbanks North Star Borough Public Libraries", "Anchorage", "2020-12-30", "10:30a-11a", "", "community"),
  ev("Open Mic, Every Wednesday!", "The Schwabenhof (Wasilla)", "Anchorage", "2020-12-30", "7:30p-11:30p", ""),

  // ═══ ANCHORAGE — Thursday January 28th ═══
  ev("Duane & Tyrone live", "Palmer Alehouse", "Anchorage", "2021-01-28", "5:30p-8:30p", ""),
  ev("Beginner Salsa Suelta: Free Zoom Class", "Anaya Latin Dance", "Anchorage", "2021-01-28", "6p-7p", "", "dance"),
  ev("Drive-In Comedy @ Koot’s", "Koots", "Anchorage", "2021-01-28", "7p-9p", "", "comedy"),
  ev("Thirsty Thursday Karaoke", "Mug-Shot Saloon (Wasilla)", "Anchorage", "2021-01-28", "9:30p-1:30a", ""),

  // ═══ ANCHORAGE — Friday January 29th ═══
  ev("Virtual New Year’s Dance", "The Arc of Anchorage", "Anchorage", "2021-01-29", "5p-7p", "", "dance"),
  ev("Justice Jams, a Virtual Live Stream Concert", "Alaska Native Justice Center", "Anchorage", "2021-01-29", "5p-8p", ""),
  ev("Open Mic Night", "Floaters (Big Lake)", "Anchorage", "2021-01-29", "7-11p", ""),
  ev("100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2021-01-29", "7p-10p", ""),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2021-01-29", "7p-11p", ""),
  ev("DJ Chester Chomp’s Zoom Room Dance Party!", "Red Carpet Entertainment", "Anchorage", "2021-01-29", "7p-7:40p", "", "dance"),
  ev("Blues & Jazz method for the Bass", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-29", "7p-8p", ""),
  ev("Understanding Music w/ Joe Craig", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-29", "7p-8p", ""),
  ev("Ava Earl, The AllGood Family Band, Jamie Whiteman and Harrison Jennings, Denise Martin, Jim Kerr, and Friends", "Anchorage Folk Festival Performances", "Anchorage", "2021-01-29", "7p-9p", ""),
  ev("The Eternal Cowboys", "Williwaw Social", "Anchorage", "2021-01-29", "8p-11:30p", ""),
  ev("Friday Night Karaoke", "American Legion Spenard Post 28", "Anchorage", "2021-01-29", "8p-11p", ""),
  ev("Facebook Live with Scared Scriptless", "Scared Scriptless", "Anchorage", "2021-01-29", "8p-9p", "", "comedy"),

  // ═══ ANCHORAGE — Saturday January 30th ═══
  ev("Those Guys AK", "Klondike Mikes and the Main Street Grill (Palmer)", "Anchorage", "2021-01-30", "10p-2a", ""),
  ev("Tony Taylor’s Tik Tok & Throwback Party", "International Hotel and Bar (Fairbanks)", "Anchorage", "2021-01-30", "10p-3a", ""),
  ev("Beginning Ukelele with Kiel Schweizer", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-30", "11:15a-12:30p", ""),
  ev("Song Writing with Laura Chartier", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-30", "12:45p-2p", ""),
  ev("Dancing with the Spirit Living Room Jam", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-30", "2:15p-3:30p", ""),
  ev("Feldenkrais for Musicians w/ Kevin Cassity", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-30", "3:45p-5p", ""),
  ev("Let's Sing Nature Songs! w/ Dan Pascucci", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-30", "4p-5p", ""),
  ev("Annual AFF Board Meeting", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-30", "5p-6p", ""),
  ev("Rhythm Heals Song Circle (Livestream)", "Let Every Woman Know", "Anchorage", "2021-01-30", "6:30p-9p", ""),
  ev("Robin Hopper, Tania Opland and Mike Freeman, Lucky Spider, The Forest That Never Sleeps, & The Booth Family Band", "Anchorage Folk Festival Performances", "Anchorage", "2021-01-30", "7p-9p", ""),
  ev("Saturday Night Karaoke", "American Legion Spenard Post 28", "Anchorage", "2021-01-30", "8p-11p", ""),
  ev("Jukebox Karaoke Roadshow", "Don Jose’s Mexican Restaurant", "Anchorage", "2021-01-30", "8p-11p", ""),
  ev("Celtic Fiddle with Shonti Elder", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-30", "9:45a-11a", ""),

  // ═══ ANCHORAGE — Sunday January 31st ═══
  ev("Intermediate Ukelele with Kiel Schweizer", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-31", "11:15a-12:30p", ""),
  ev("Advanced guitar techniques w/ Armin Abdihodzic", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-31", "12:45p-2p", ""),
  ev("Mandolin w/ Wolfgang Q. Olsson", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-31", "3:45p-5p", ""),
  ev("How to Access the Rich Environment of the Performing Arts Sector Locally & Nationwide w/Jason Hodges", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-31", "3:45p-5p", ""),
  ev("Honing your Guitar & Playing the 5-Note Scale w/ Mike Simpson", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-31", "5:15p-6:30p", "", "theatre"),
  ev("Swing Dancing!", "AK East Coast Swing (Palmer)", "Anchorage", "2021-01-31", "5p-8p", "", "dance"),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2021-01-31", "7p-11p", ""),
  ev("Open Mic Night", "Vans Dive Bar", "Anchorage", "2021-01-31", "7p-11p", ""),
  ev("Sing Around Song Circle w/ Dawn Berg", "Anchorage Folk Festival Workshops", "Anchorage", "2021-01-31", "9:45a-11a", ""),

  // ═══ ANCHORAGE — Monday February 1st ═══
  ev("Mother Moose Storytime", "Fairbanks North Star Borough Public Libraries", "Anchorage", "2021-02-01", "10:30a-11a", "", "community"),
  ev("MonDayshas Unplugged", "Vans Dive Bar", "Anchorage", "2021-02-01", "7p-11p", ""),
  ev("Monday Night Karaoke", "American Legion Spenard Post 28", "Anchorage", "2021-02-01", "8p-10p", ""),

  // ═══ ANCHORAGE — Tuesday February 2nd ═══
  ev("Open Mic w/ MoonDog Media", "Klondike Mikes (Palmer)", "Anchorage", "2021-02-02", "6p-12a", ""),
  ev("AK Rockstar Karaoke", "Flight Deck Bar and Lounge", "Anchorage", "2021-02-02", "7p-11p", ""),
  ev("Open Jam Night", "Vans Dive Bar", "Anchorage", "2021-02-02", "7p-11p", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2021-02-02", "8p-12a", ""),

  // ═══ ANCHORAGE — Wednesday February 3rd ═══
  ev("Passport Series Volume XI (Online)", "Trapper Creek Bluegrass Campout Festivals", "Anchorage", "2021-02-03", "6p-10p", ""),
  ev("Open Mic at the Schwabenhof", "The Schwabenhof (Wasilla)", "Anchorage", "2021-02-03", "7:30p-11:30p", ""),

  // ═══ ANCHORAGE — Thursday February 25th ═══
  ev("Preschool Storytime (virtual)", "Fairbanks North Star Borough Public Libraries", "Anchorage", "2021-02-25", "10:30a-11a", "", "community"),
  ev("Drive-In Comedy", "Koots", "Anchorage", "2021-02-25", "3p-4p", "", "comedy"),
  ev("The Stack Acoustic Duo", "Palmer Alehouse", "Anchorage", "2021-02-25", "5:30p-8:30p", ""),
  ev("Folk Unlocked", "Emma Hill & Bryan Daste (Online)", "Anchorage", "2021-02-25", "6p-7p", ""),
  ev("Live Jazz with Luke Weld", "The Narrows Bar (Juneau)", "Anchorage", "2021-02-25", "7p-11p", ""),

  // ═══ ANCHORAGE — Friday February 26th ═══
  ev("Friday Night Feast w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2021-02-26", "5:30p-7p", ""),
  ev("Sock Hop", "Breakout Dance Studio (Fairbanks)", "Anchorage", "2021-02-26", "6:30p-9:30p", ""),
  ev("Hobo Jim at the Upstairs Lounge", "Palmer Alehouse", "Anchorage", "2021-02-26", "6p-9p", ""),
  ev("Open Mic Night", "Floaters (Big Lake)", "Anchorage", "2021-02-26", "7-11p", ""),
  ev("Cirque De Cabaret", "Sweet Cheeks Cabaret (Online)", "Anchorage", "2021-02-26", "7:30p-10p", ""),
  ev("Perseverance People Power Concert", "Perseverance Theatre (Online)", "Anchorage", "2021-02-26", "7:30p-9:30p", ""),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2021-02-26", "7p-11p", ""),
  ev("DJ Chester Chomp’s Zoom Room Dance Party!", "Red Carpet Entertainment", "Anchorage", "2021-02-26", "7p-7:40p", "", "dance"),
  ev("For Colored Ladies Who Have Considered Pull-Tabs With Their Last Two Dollars", "Anchorage Concert Association (Online)", "Anchorage", "2021-02-26", "7p-8:30p", ""),
  ev("The Eternal Cowboys", "Williwaw Social", "Anchorage", "2021-02-26", "8p-11:30p", ""),
  ev("Friday Night Karaoke", "American Legion Spenard Post 28", "Anchorage", "2021-02-26", "8p-11p", ""),
  ev("The Acou-Stack Live", "Corks and Hops (Eagle River)", "Anchorage", "2021-02-26", "9p-12a", ""),
  ev("DJ Lloyds Noize in the Speakeasy", "Williwaw Social", "Anchorage", "2021-02-26", "9p-12a", ""),

  // ═══ ANCHORAGE — Saturday February 27th ═══
  ev("Anchorage Auditions", "Alaska Dance Theatre", "Anchorage", "2021-02-27", "1:30p-3p", ""),
  ev("DJ Manny", "International Hotel and Bar (Fairbanks)", "Anchorage", "2021-02-27", "10p-3a", ""),
  ev("Fun and Food w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2021-02-27", "7p-10p", ""),
  ev("Bird Creek Barbarians Rugby Postseason Drinkup!", "The Carousel Lounge", "Anchorage", "2021-02-27", "7p-11p", ""),
  ev("Movies Out, Drive-in Film: “I Am Not Your Negro”", "Out North", "Anchorage", "2021-02-27", "7p-9p", ""),
  ev("Saturday Night Karaoke", "American Legion Spenard Post 28", "Anchorage", "2021-02-27", "8p-11p", ""),
  ev("Jukebox Karaoke Roadshow", "Don Jose’s Mexican Restaurant", "Anchorage", "2021-02-27", "8p-11p", ""),
  ev("Hwy9 Duo", "Vans Dive Bar", "Anchorage", "2021-02-27", "9p-11p", ""),
  ev("Taking Back Saturday with DJ GRE", "Williwaw Social", "Anchorage", "2021-02-27", "9p-12a", ""),

  // ═══ ANCHORAGE — Sunday February 28th ═══
  ev("For Colored Ladies Who Have Considered Pull-Tabs With Their Last Two Dollars", "Anchorage Concert Association (Online)", "Anchorage", "2021-02-28", "2p-3:30p", ""),
  ev("Karaoke Sunday", "The Carousel Lounge", "Anchorage", "2021-02-28", "7p-11p", ""),
  ev("Open Mic Night", "Vans Dive Bar", "Anchorage", "2021-02-28", "8p-12a", ""),

  // ═══ ANCHORAGE — Monday March 1st ═══
  ev("Monday Night Karaoke", "American Legion Spenard Post 28", "Anchorage", "2021-03-01", "8p-10p", ""),
  ev("Mon-Dayshas", "Vans Dive Bar", "Anchorage", "2021-03-01", "8p-12a", ""),

  // ═══ ANCHORAGE — Tuesday March 2nd ═══
  ev("MoonDog Media Open Mic", "Klondike Mikes (Palmer)", "Anchorage", "2021-03-02", "6p-12a", ""),
  ev("AK Rockstar Karaoke Tuesday", "Flight Deck Bar and Lounge", "Anchorage", "2021-03-02", "7p-11p", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2021-03-02", "8p-12a", ""),
  ev("Open Jam Night", "Vans Dive Bar", "Anchorage", "2021-03-02", "8p-12a", ""),

  // ═══ ANCHORAGE — Wednesday March 3rd ═══
  ev("Maddie + Tae Virtual Tour", "UAS Student Activities Board (Online)", "Anchorage", "2021-03-03", "5p-7p", ""),
  ev("Open Mic at the Schwabenhof", "The Schwabenhof (Wasilla)", "Anchorage", "2021-03-03", "7:30p-11:30p", ""),
  ev("AK Rockstar Karaoke Wednesday", "The Carousel Lounge", "Anchorage", "2021-03-03", "7p-11p", ""),

  // ═══ ANCHORAGE — Tuesday April 13th ═══
  ev("Acoustic Song Circle with WAH Music", "American Legion Spenard Post 28", "Anchorage", "2021-04-13", "6:30p-9p", ""),
  ev("Robbie Carlson", "Main Street Tap & Grill (Kenai)", "Anchorage", "2021-04-13", "6p-10p", ""),
  ev("AK Rockstar Karaoke Tuesday", "Flight Deck Bar and Lounge", "Anchorage", "2021-04-13", "7p-11p", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2021-04-13", "8p-12a", ""),
  ev("Garret's Toast With Jam Jams", "Van’s Dive Bar", "Anchorage", "2021-04-13", "8p-12a", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2021-04-13", "9p-1a", ""),

  // ═══ ANCHORAGE — Wednesday April 14th ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2021-04-14", "10p-2a", ""),
  ev("Open Mic at Schwabenhof", "The Schwabenhof (Wasilla)", "Anchorage", "2021-04-14", "7:30p-11:30p", ""),
  ev("AK Rockstar Karaoke Wednesday", "The Carousel Lounge", "Anchorage", "2021-04-14", "7p-11p", ""),
  ev("Mad Myrna's Karaoke!", "Mad Myrna’s", "Anchorage", "2021-04-14", "9p-12a", ""),

  // ═══ ANCHORAGE — Friday May 7th ═══
  ev("ACOUSTIC SHOWCASE", "LIVE AT JHS", "Anchorage", "2021-05-07", "", ""),
  ev("Nothin’ But Trouble", "Humpy’s", "Anchorage", "2021-05-07", "10:30p-2:30a", ""),
  ev("Vibes in the Speakeasy with DJ Joe Brady", "Williwaw Social", "Anchorage", "2021-05-07", "10:30p-2a", ""),
  ev("Footloose Dance Party with DJ Fan Service", "Williwaw Social", "Anchorage", "2021-05-07", "10:30p-2a", "", "dance"),
  ev("First Fridays Feat. Nick Carpenter & Bethlehem Shalom", "Van’s Dive Bar", "Anchorage", "2021-05-07", "10p-2a", ""),
  ev("Danger Money Live", "Willow Trading Post", "Anchorage", "2021-05-07", "10p-2a", ""),
  ev("John Shewfelt Jr & Shot Time", "International Hotel and Bar (Fairbanks)", "Anchorage", "2021-05-07", "11p-2a", ""),
  ev("John Damberg AJW Jazz Fridays", "Organic Oasis", "Anchorage", "2021-05-07", "5:30p-7:30p", ""),
  ev("The Eternal Cowboys LIVE", "Palmer Alehouse", "Anchorage", "2021-05-07", "7p-10p", ""),
  ev("Friday Night Feast w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2021-05-07", "7p-11p", ""),
  ev("Hooked Entertainment Comedy: Barry Brewer", "Everett’s (Wasilla)", "Anchorage", "2021-05-07", "7p-11p", "", "comedy"),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2021-05-07", "7p-11p", ""),
  ev("DJ Chester Chomp’s Zoom Room Dance Party!", "Red Carpet Entertainment LLC", "Anchorage", "2021-05-07", "7p-7:40p", "", "dance"),
  ev("Tim Hall", "Everett’s (Wasilla)", "Anchorage", "2021-05-07", "7p-9p", ""),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2021-05-07", "9p-11p", ""),
  ev("Friday Night Karaoke!", "American Legion Spenard Post 28", "Anchorage", "2021-05-07", "9p-1a", ""),

  // ═══ ANCHORAGE — Saturday May 8th ═══
  ev("Taking Back Saturday with DJ GRE", "Williwaw Social", "Anchorage", "2021-05-08", "10:30p-2:30a", ""),
  ev("DJ Joe Brady: Britney vs the World Dance Party", "Williwaw Social", "Anchorage", "2021-05-08", "10:30p-2:30a", "", "dance"),
  ev("Saturday Night Karaoke!", "American Legion Spenard Post 28", "Anchorage", "2021-05-08", "10p-12a", ""),
  ev("DJ Manny's 2021 Cinco de Mayo Celebración", "International Hotel and Bar (Fairbanks)", "Anchorage", "2021-05-08", "10p-2a", ""),
  ev("Jerry Wessling & Plan B", "Klondike Mike’s (Palmer)", "Anchorage", "2021-05-08", "10p-2a", ""),
  ev("Fun and Food w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2021-05-08", "6p-11p", ""),
  ev("Woodrow LIVE", "Palmer Alehouse", "Anchorage", "2021-05-08", "7p-10p", ""),
  ev("Larry Zarella", "Everett’s (Wasilla)", "Anchorage", "2021-05-08", "7p-9p", ""),
  ev("Sassy Saturdays with Sweet Cheeks Cabaret", "The Broken Blender", "Anchorage", "2021-05-08", "8p-10p", ""),
  ev("Comedian Barry Brewer", "Koot’s", "Anchorage", "2021-05-08", "8p-11p", ""),
  ev("Live Music with “Cancel Culture”", "The Carousel Lounge", "Anchorage", "2021-05-08", "8p-3a", ""),

  // ═══ ANCHORAGE — Sunday May 9th ═══
  ev("Schwabenhof Sunday Blues Jam", "The Schwabenhof (Wasilla)", "Anchorage", "2021-05-09", "4p-8p", ""),
  ev("AK Rockstar Karaoke Sunday", "The Carousel Lounge", "Anchorage", "2021-05-09", "7p-11p", ""),
  ev("JD Cox", "Everett’s (Wasilla)", "Anchorage", "2021-05-09", "7p-9p", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2021-05-09", "8p-12a", ""),

  // ═══ ANCHORAGE — Monday May 10th ═══
  ev("Taking Back Mondays", "Van’s Dive Bar", "Anchorage", "2021-05-10", "10p-1a", ""),
  ev("Monday Night Karaoke", "American Legion Spenard Post 28", "Anchorage", "2021-05-10", "8p-10p", ""),
  ev("The Monday Music Mic with Boobs", "Koot’s", "Anchorage", "2021-05-10", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday May 11th ═══
  ev("Taco Tuesday Open Mic with WAH Music", "American Legion Spenard Post 28", "Anchorage", "2021-05-11", "6:30p-9p", ""),
  ev("AK Rockstar Karaoke Tuesday", "Flight Deck Bar and Lounge", "Anchorage", "2021-05-11", "7p-11p", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2021-05-11", "8p-12a", ""),
  ev("Garret's Toasts to Jams", "Van’s Dive Bar", "Anchorage", "2021-05-11", "8p-12a", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2021-05-11", "9p-1a", ""),

  // ═══ ANCHORAGE — Wednesday May 12th ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2021-05-12", "10p-2a", ""),
  ev("Open Mic at Schwabenhof", "The Schwabenhof (Wasilla)", "Anchorage", "2021-05-12", "7:30p-11:30p", ""),
  ev("AK Rockstar Karaoke Wednesday", "The Carousel Lounge", "Anchorage", "2021-05-12", "7p-11p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2021-05-12", "8:30p-10p", "", "comedy"),
  ev("Mad Myrna's Karaoke!", "Mad Myrna’s", "Anchorage", "2021-05-12", "9p-12a", ""),

  // ═══ ANCHORAGE — Friday June 18th ═══
  ev("Storytime in the Park", "Eagle River Commons Park", "Anchorage", "2021-06-18", "10:30a-11a", "", "community"),
  ev("Velvet La La", "Koot’s", "Anchorage", "2021-06-18", "10p-2:30a", ""),
  ev("Those Guys AK", "The Mug-Shot Saloon (Wasilla)", "Anchorage", "2021-06-18", "10p-2:30a", ""),
  ev("Marc Brown & The Blues Crew", "International Hotel and Bar (Fairbanks)", "Anchorage", "2021-06-18", "10p-2a", ""),
  ev("Friday Fling Live Music w/ Antigen", "Palmer Downtown Pavilion", "Anchorage", "2021-06-18", "11:30a-1p & 4:30p-6p", ""),
  ev("The Box Tops Concert", "Curtis Menard Sports Center (Wasilla)", "Anchorage", "2021-06-18", "5:30p-10p", ""),
  ev("Friday Night Feast w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2021-06-18", "5:30p-7p", ""),
  ev("Talkeetna Live at 5 with Larry Sandy", "Talkeetna Village Park", "Anchorage", "2021-06-18", "5p-7p", ""),
  ev("Green Light Circus", "Sheldon Community Arts Council (Talkeetna)", "Anchorage", "2021-06-18", "6:30p-9p", ""),
  ev("Flannels & Skanks", "Dirty Skillet (Hope)", "Anchorage", "2021-06-18", "6p-10p", ""),
  ev("Jared Woods", "Seaview Café (Hope)", "Anchorage", "2021-06-18", "6p-10p", ""),
  ev("Witty Youngman", "Seldovia Boardwalk Hotel (Seldovia)", "Anchorage", "2021-06-18", "6p-9p", ""),
  ev("Music In The Park: Roland Roberts Band", "Wonderland Park (Wasilla)", "Anchorage", "2021-06-18", "6p-9p", ""),
  ev("Solstice Shrimp Boil with Braided River and Deadphish Orchestra", "Creekbend Company (Hope)", "Anchorage", "2021-06-18", "7p-10:30p", ""),
  ev("I Like Robots", "Matanuska Brewing Eagle River", "Anchorage", "2021-06-18", "7p-10p", ""),
  ev("Silver Train", "O’Malleys on the Green", "Anchorage", "2021-06-18", "7p-10p", ""),
  ev("The Ken Peltier Band", "Palmer Alehouse", "Anchorage", "2021-06-18", "7p-10p", ""),
  ev("Hooked Entertainment Comedy: Sam Talent", "Everett’s (Wasilla)", "Anchorage", "2021-06-18", "7p-11p", "", "comedy"),
  ev("Open Mic Night", "Floaters (Big Lake)", "Anchorage", "2021-06-18", "7p-12a", ""),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2021-06-18", "7p-12a", ""),
  ev("Playhouse LIVE w/ John Budnik, Long Nights Moon, Andy Mullen, Jared Hazen, & Sabrina Speers", "The Schwabenhof (Wasilla)", "Anchorage", "2021-06-18", "8p-11p", "", "theatre"),
  ev("Hot Mess", "The Vagabond Inn (Kenai)", "Anchorage", "2021-06-18", "8p-12a", ""),
  ev("Ukulele Russ & His One Man Frontier Band", "Golden Saloon (McCarthy)", "Anchorage", "2021-06-18", "8p-1a", ""),
  ev("Adam Patterson and the Heavy Hearts", "The Yukon Bar (Seward)", "Anchorage", "2021-06-18", "9p-1:30a", ""),
  ev("Friday Night Karaoke!", "American Legion Spenard Post 28", "Anchorage", "2021-06-18", "9p-1a", ""),
  ev("Cami from Miami", "Fairview Inn (Talkeetna)", "Anchorage", "2021-06-18", "9p-1a", ""),
  ev("Local Roots is BACK with ATF, Saucy Yoda, & Evil Ted and the Thick Pink Antiseptic", "Koot’s", "Anchorage", "2021-06-18", "9p-1a", ""),
  ev("Photonak & Concrete To Clouds", "Van’s Dive Bar", "Anchorage", "2021-06-18", "9p-1a", ""),
  ev("Vibes in the Speakeasy w/ DJ Third George", "Williwaw Social", "Anchorage", "2021-06-18", "9p-2a", ""),

  // ═══ ANCHORAGE — Saturday June 19th ═══
  ev("Summer Solstice party with The Jammin Band", "Duck Inn Café (Soldotna)", "Anchorage", "2021-06-19", "10p-2a", ""),
  ev("Downtown Partnership Re-Imagined Solstice Festival 2021 with Tons of Music!", "Anchorage Downtown", "Anchorage", "2021-06-19", "12p-9p", "", "festival"),
  ev("Grand Opening & solstice Party w/ Nothin But Karma", "The Broken Blender", "Anchorage", "2021-06-19", "1p-10p", ""),
  ev("Salsa in the Park with Anaya Latin Dance", "Anchorage Town Square Park", "Anchorage", "2021-06-19", "1p-4p", "", "dance"),
  ev("Alaska 4x4 Meet & Greet w/ The Hand Me Downs", "Museum of Transportation & Industry (Wasilla)", "Anchorage", "2021-06-19", "4p-7p", ""),
  ev("Mat-Su Valley Rock Fest: Bad Flower w/ Millennial Falcons and Matt Hopper & the Roman Candles", "Curtis Menard Sports Center (Wasilla)", "Anchorage", "2021-06-19", "5:30p-10p", "", "festival"),
  ev("Daddy’s Issue", "Denali Harley Davidson (Wasilla)", "Anchorage", "2021-06-19", "5p-6p", ""),
  ev("Big Head Todd and the Monsters with SunDog & Alaska Thunder Funk", "Williwaw Social", "Anchorage", "2021-06-19", "6p-10:30p", ""),
  ev("Fun and Food w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2021-06-19", "6p-11p", ""),
  ev("Stone Atlas on the Roof", "Jack Sprat (Girdwood)", "Anchorage", "2021-06-19", "7p-10p", ""),
  ev("Love & Theft", "Kodiak Island Borough Fairgrounds", "Anchorage", "2021-06-19", "7p-10p", ""),
  ev("Ken Peltier", "Matanuska Brewing Eagle River", "Anchorage", "2021-06-19", "7p-10p", ""),
  ev("H3 LIVE", "Palmer Alehouse", "Anchorage", "2021-06-19", "7p-10p", ""),
  ev("Juneteenth Festival featuring The Wailers", "International Hotel and Bar (Fairbanks)", "Anchorage", "2021-06-19", "7p-1a", "", "festival"),
  ev("Comedian Sam Tallent", "Koot’s", "Anchorage", "2021-06-19", "7p-9p & 9:10p-11:30p", ""),
  ev("Sassy Saturdays with Sweet Cheeks Cabaret", "The Broken Blender", "Anchorage", "2021-06-19", "8p-10p", ""),
  ev("Jerry Wessling Band Live", "Floater's (Big Lake)", "Anchorage", "2021-06-19", "8p-12a", ""),
  ev("Summer Solstice Dance Party with DJ Joe Brady", "Williwaw Social", "Anchorage", "2021-06-19", "9:30p-2a", "", "dance"),
  ev("Soiree in the Speakeasy", "Williwaw Social", "Anchorage", "2021-06-19", "9p-1:30a", ""),
  ev("Mad Myrna's 2021 PRIDE PAGEANT", "Mad Myrna’s", "Anchorage", "2021-06-19", "9p-11p", ""),
  ev("Saturday Night Karaoke!", "American Legion Spenard Post 28", "Anchorage", "2021-06-19", "9p-12a", ""),
  ev("Triple Black Diamond", "Fairview Inn (Talkeetna)", "Anchorage", "2021-06-19", "9p-1a", ""),
  ev("DJ Joe Goodnov", "Koot’s", "Anchorage", "2021-06-19", "9p-1a", ""),
  ev("Daddy's Issue", "Van’s Dive Bar", "Anchorage", "2021-06-19", "9p-1a", ""),

  // ═══ ANCHORAGE — Sunday June 20th ═══
  ev("Beats Roots Alaska Annual Pride Show w/ DJ Covy & Jen Theulen", "KONR 106.1 FM", "Anchorage", "2021-06-20", "3p-5p", ""),
  ev("Father's Day/Summer Solstice Block Party w/ Eternal Cowboys & B4UDie", "Pubhouse", "Anchorage", "2021-06-20", "4:30p-9", ""),
  ev("Schwabenhof Sunday Blues Jam", "The Schwabenhof (Wasilla)", "Anchorage", "2021-06-20", "4p-8p", ""),
  ev("Sean Tracey", "Seaview Café (Hope)", "Anchorage", "2021-06-20", "5p-8:30p", ""),
  ev("Father’s Day Solstice Party with The Hand Me Downs", "Willow Trading Post", "Anchorage", "2021-06-20", "6p-10p", ""),
  ev("All Ages Open Mic w/ Tyson Davis", "Temple Studios Community Center (Seward)", "Anchorage", "2021-06-20", "6p-8p", ""),
  ev("Those Guys AK Open Mic Night", "Humpys", "Anchorage", "2021-06-20", "8p-11p", ""),
  ev("Mad Myrna's Karaoke!", "Mad Myrna’s", "Anchorage", "2021-06-20", "8p-12a", ""),
  ev("Open Mic Night w/ Wash Your Hands", "Van’s Dive Bar", "Anchorage", "2021-06-20", "8p-1a", ""),
  ev("AK Rockstar Karaoke Sunday", "The Carousel Lounge", "Anchorage", "2021-06-20", "8p-2a", ""),
  ev("Open Jam w/ Ben Sayers", "Yukon Bar (Seward)", "Anchorage", "2021-06-20", "9p-12a", ""),
  ev("Jimmy Sandy", "Fairview Inn (Talkeetna)", "Anchorage", "2021-06-20", "9p-1a", ""),

  // ═══ ANCHORAGE — Monday June 21st ═══
  ev("LGBTQ Movie Night", "Mad Myrna’s", "Anchorage", "2021-06-21", "6:30p-11p", ""),
  ev("Monday Night Karaoke", "American Legion Spenard Post 28", "Anchorage", "2021-06-21", "7p-10p", ""),
  ev("The Monday Music Mic with Boobs", "Koot’s", "Anchorage", "2021-06-21", "9p-12a", ""),
  ev("Taking Back Mondays", "Van’s Dive Bar", "Anchorage", "2021-06-21", "9p-12a", ""),
  ev("Larry, Jimm, & Kayti from the Denali Cooks", "Fairview Inn (Talkeetna)", "Anchorage", "2021-06-21", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2021-06-21", "9p-2a", ""),

  // ═══ ANCHORAGE — Tuesday June 22nd ═══
  ev("Taco Tuesdays on the Roof with DJ Joe Brady", "Williwaw Social", "Anchorage", "2021-06-22", "4p-10p", ""),
  ev("Vintage Soul", "Organic Oasis", "Anchorage", "2021-06-22", "5:30p-7:30p", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2021-06-22", "5p-8p", ""),
  ev("Taco Tuesday Open Mic", "American Legion Spenard Post 28", "Anchorage", "2021-06-22", "6:30p-9:30p", ""),
  ev("Moondog Media Open Mic Night", "Klondike Mike’s (Palmer)", "Anchorage", "2021-06-22", "7p-12a", ""),
  ev("Open Jam with the Van's Fam", "Van’s Dive Bar", "Anchorage", "2021-06-22", "8:30p-1a", ""),
  ev("Amateur Drag Show", "Mad Myrna’s", "Anchorage", "2021-06-22", "8p-12a", "", "comedy"),
  ev("AK Rockstar Karaoke Tuesday", "Flight Deck Bar and Lounge", "Anchorage", "2021-06-22", "8p-3a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2021-06-22", "9p-1a", ""),

  // ═══ ANCHORAGE — Wednesday June 23rd ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2021-06-23", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2021-06-23", "10p-2a", ""),
  ev("Open Decks", "Koot’s", "Anchorage", "2021-06-23", "10p-3a", ""),
  ev("Rosie Rush", "Peratrovich Park", "Anchorage", "2021-06-23", "12p-1p", ""),
  ev("Hott Mess with Ukulele Russ opening!", "Soldotna Creek Park", "Anchorage", "2021-06-23", "6p-10p", ""),
  ev("Tones of Summer feat. DJ GRE", "Williwaw Social", "Anchorage", "2021-06-23", "6p-11p", ""),
  ev("Open Mic at Schwabenhof", "The Schwabenhof (Wasilla)", "Anchorage", "2021-06-23", "7:30p-11:30p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2021-06-23", "8:30p-10p", "", "comedy"),
  ev("Open Mic", "International Hotel and Bar (Fairbanks)", "Anchorage", "2021-06-23", "8p-12a", ""),
  ev("AK Rockstar Karaoke Wednesday", "The Carousel Lounge", "Anchorage", "2021-06-23", "8p-2a", ""),
  ev("Mad Myrna's Karaoke!", "Mad Myrna’s", "Anchorage", "2021-06-23", "9p-12a", ""),
  ev("Karaoke Night With Courtney", "Van’s Dive Bar", "Anchorage", "2021-06-23", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday July 27th ═══
  ev("Vintage Soul", "Organic Oasis", "Anchorage", "2021-07-27", "5:30p-7:30p", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2021-07-27", "5p-8p", ""),
  ev("Moondog Media Open Mic Night w/ Sabrina Speers", "Klondike Mike’s (Palmer)", "Anchorage", "2021-07-27", "7p-12a", ""),
  ev("Open Jam with the Van's Fam", "Van’s Dive Bar", "Anchorage", "2021-07-27", "8:30p-1a", ""),
  ev("AK Rockstar Karaoke Tuesday", "Flight Deck Bar and Lounge", "Anchorage", "2021-07-27", "8p-2a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2021-07-27", "9p-1a", ""),

  // ═══ ANCHORAGE — Wednesday July 28th ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2021-07-28", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2021-07-28", "10p-2a", ""),
  ev("Open Decks", "Koot’s", "Anchorage", "2021-07-28", "10p-3a", ""),
  ev("Music in the Park with The Forest that Never Sleeps", "Peratrovich Park", "Anchorage", "2021-07-28", "12p-1p", ""),
  ev("Anchorage Concert Association: Super Saturated Sugar Strings", "Eastchester Park", "Anchorage", "2021-07-28", "6:30p-9p", ""),
  ev("Robb Justice with Duncan Brewer opening", "Soldotna Creek Park", "Anchorage", "2021-07-28", "6p-10p", ""),
  ev("Roof Top City Pop ft. DJ GRE & Lloyds Noize", "Williwaw Social", "Anchorage", "2021-07-28", "6p-10p", ""),
  ev("Open Mic at Schwabenhof", "The Schwabenhof (Wasilla)", "Anchorage", "2021-07-28", "7:30p-11:30p", ""),
  ev("Arctic Jungle Band", "907 Alehouse", "Anchorage", "2021-07-28", "7p-10p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2021-07-28", "8:30p-10p", "", "comedy"),
  ev("Moby Wang & Supergirl", "Humpy’s", "Anchorage", "2021-07-28", "8p-11:30p", ""),
  ev("Open Mic", "International Hotel and Bar (Fairbanks)", "Anchorage", "2021-07-28", "8p-12a", ""),
  ev("AK Rockstar Karaoke Wednesday", "The Carousel Lounge", "Anchorage", "2021-07-28", "8p-2a", ""),
  ev("Mad Myrna's Karaoke!", "Mad Myrna’s", "Anchorage", "2021-07-28", "9p-12a", ""),
  ev("Karaoke Night With Skylar", "Van’s Dive Bar", "Anchorage", "2021-07-28", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2021-07-28", "9p-2a", ""),

  // ═══ ANCHORAGE — Thursday October 14th ═══
  ev("The MOBY WANG & SUPERGIRL Show", "Koot’s", "Anchorage", "2021-10-14", "10p-1:30a", ""),
  ev("Thursdays with DJ Covy", "Mad Myrna’s", "Anchorage", "2021-10-14", "10p-2a", ""),
  ev("Songwriting Workshop with Rosie Rush", "The Nave Spenard", "Anchorage", "2021-10-14", "4:30p-5:30p", ""),
  ev("Lisa Lisa & That Guy live", "Palmer Alehouse", "Anchorage", "2021-10-14", "6:30p-9:30p", ""),
  ev("Karaoke with Steve", "Floaters (Big Lake)", "Anchorage", "2021-10-14", "7:30p-11:30p", ""),
  ev("Danger & Diva", "Pubhouse", "Anchorage", "2021-10-14", "7p-10p", ""),
  ev("Throwback Thursday with DJ Joe Brady", "Williwaw Social", "Anchorage", "2021-10-14", "7p-11p", ""),
  ev("BCDW Twerk Cardio", "Underground Dance Company", "Anchorage", "2021-10-14", "7p-8p", ""),
  ev("The Eternal Cowboys", "Humpys", "Anchorage", "2021-10-14", "8p-11:30p", ""),
  ev("KBEAR Country Night with DJ Steve Franklin", "Eddies Sport’s Bar", "Anchorage", "2021-10-14", "8p-12a", ""),
  ev("Live music w/Matt & Co.", "The Carousel Lounge", "Anchorage", "2021-10-14", "8p-2a", ""),
  ev("Jukebox Karaoke Roadshow", "Flattop Pizza & Pool", "Anchorage", "2021-10-14", "9p-12a", ""),

  // ═══ ANCHORAGE — Friday October 15th ═══
  ev("Live in Alaska", "Showdown Productions: IDK", "Anchorage", "2021-10-15", "", ""),
  ev("Those Guys AK", "The Mug-Shot Saloon (Wasilla)", "Anchorage", "2021-10-15", "10p-2:30a", ""),
  ev("The Stack Live", "Koots", "Anchorage", "2021-10-15", "10p-2:45a", ""),
  ev("Jerry Wessling Band", "Klondike Mike’s (Palmer)", "Anchorage", "2021-10-15", "10p-2a", ""),
  ev("Caribbean Night w/ DJ Militant & DJ Caribbean Queen", "Lil Babes Cocktail Lounge", "Anchorage", "2021-10-15", "11p-2a", ""),
  ev("John Damberg Jazz Piano Fridays", "Organic Oasis", "Anchorage", "2021-10-15", "5:30p-7:30p", ""),
  ev("Friday Night Feast w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2021-10-15", "5:30p-7p", ""),
  ev("Nightmare on Cheek Street", "Broken Blender", "Anchorage", "2021-10-15", "7:30p-10p", ""),
  ev("AK Beer Awards Night", "Broken Blender", "Anchorage", "2021-10-15", "7p-10p", ""),
  ev("Open Mic Night", "Floaters (Big Lake)", "Anchorage", "2021-10-15", "7p-12a", ""),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2021-10-15", "7p-12a", ""),
  ev("DJ Chester Chomp’s Zoom Room Dance Party!", "Red Carpet Entertainment", "Anchorage", "2021-10-15", "7p-7:40p", "", "dance"),
  ev("The Rocky Horror Show", "Mad Myrna’s", "Anchorage", "2021-10-15", "7p-9p", ""),
  ev("Showdown Productions: IDK - Live in Alaska", "Williwaw Social", "Anchorage", "2021-10-15", "8p-1a", ""),
  ev("Roland Roberts Band", "Humpys", "Anchorage", "2021-10-15", "9:30p-1a", ""),
  ev("Friday Night Vibes in the Speakeasy", "Williwaw Social", "Anchorage", "2021-10-15", "9p-1:30a", ""),
  ev("Friday Night Karaoke!", "American Legion Spenard Post 28", "Anchorage", "2021-10-15", "9p-12a", ""),
  ev("Friday Night Dance Lounge", "Alaska Dance Promotions", "Anchorage", "2021-10-15", "9p-1a", "", "dance"),

  // ═══ ANCHORAGE — Saturday October 16th ═══
  ev("The Stack Live", "Koot’s", "Anchorage", "2021-10-16", "10p-2:45a", ""),
  ev("The Tyson James Trio", "Hatcher’s Pass Lodge (Hatcher’s Pass)", "Anchorage", "2021-10-16", "4p-7p", ""),
  ev("Tim Hall", "Everett’s (Wasilla)", "Anchorage", "2021-10-16", "6:30p-9:30p", ""),
  ev("Fun and Food w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2021-10-16", "6p-11p", ""),
  ev("Costume Party & Dance", "Tree of Life Church (Palmer)", "Anchorage", "2021-10-16", "7p-9p", "", "dance"),
  ev("The Comedy Show", "Willow Trading Post", "Anchorage", "2021-10-16", "7p-9p", "", "comedy"),
  ev("Jukebox Karaoke Roadshow", "Don Jose’s", "Anchorage", "2021-10-16", "8p-11p", ""),
  ev("Danger Money Live at The Moose Lodge!", "Anchorage Moose Lodge", "Anchorage", "2021-10-16", "8p-12a", ""),
  ev("Pirate Costume Party w/ Benjammin & the Jammin Band", "Kenai Joe’s Taphouse", "Anchorage", "2021-10-16", "8p-12a", ""),
  ev("Club Y2K : A 2000's Party w/ DJ Joe Brady", "Williwaw Social", "Anchorage", "2021-10-16", "8p-2a", ""),
  ev("Jerry's Situation", "Humpys", "Anchorage", "2021-10-16", "9:30p-1a", ""),
  ev("Hot Mess 80’s Hair Band Night", "The Duck Inn (Kalifornsky)", "Anchorage", "2021-10-16", "9a-2a", ""),
  ev("Saturday Night Soiree in the Speakeasy", "Williwaw Social", "Anchorage", "2021-10-16", "9p-1:30a", ""),
  ev("Saturday Night Karaoke!", "American Legion Spenard Post 28", "Anchorage", "2021-10-16", "9p-12a", ""),
  ev("Local Roots ft Mindful Khaos, Part Time Super Heroes, &Sideways.", "Koot’s", "Anchorage", "2021-10-16", "9p-2:45a", ""),

  // ═══ ANCHORAGE — Sunday October 17th ═══
  ev("Schwabenhof's Sunday Live Music", "The Schwabenhof (Wasilla)", "Anchorage", "2021-10-17", "4p-7p", ""),
  ev("JD Cox", "Everett’s (Wasilla)", "Anchorage", "2021-10-17", "6:30p-9:30p", ""),
  ev("All Ages Open Mic w/ Tyson Davis", "Temple Studios Community Center (Seward)", "Anchorage", "2021-10-17", "6p-8p", ""),
  ev("Open Mic Jam", "Humpys", "Anchorage", "2021-10-17", "8p-11p", ""),
  ev("Mad Myrna's Karaoke!", "Mad Myrna’s", "Anchorage", "2021-10-17", "8p-12a", ""),
  ev("Open Mic With Sara Wash Your Hands", "Van’s Dive Bar", "Anchorage", "2021-10-17", "8p-12a", ""),
  ev("AK Rockstar Karaoke Sunday", "The Carousel Lounge", "Anchorage", "2021-10-17", "8p-2a", ""),
  ev("Open Jam w/ Ben Sayers", "The Yukon Bar (Seward)", "Anchorage", "2021-10-17", "9p-1a", ""),

  // ═══ ANCHORAGE — Monday October 18th ═══
  ev("Monday Night Karaoke", "American Legion Spenard Post 28", "Anchorage", "2021-10-18", "8p-11p", ""),
  ev("Taking Back Mondays", "Van’s Dive Bar", "Anchorage", "2021-10-18", "9:30p-12a", ""),
  ev("The Monday Music Mic with Boobs", "Koot’s", "Anchorage", "2021-10-18", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2021-10-18", "9p-2a", ""),

  // ═══ ANCHORAGE — Tuesday October 19th ═══
  ev("Vintage Soul", "Organic Oasis", "Anchorage", "2021-10-19", "5:30p-7:30p", ""),
  ev("Open Mic at Post 28!", "American Legion Spenard Post 28", "Anchorage", "2021-10-19", "6:30p-9:30p", ""),
  ev("Moondog Media Open Stage Night w/ Sabrina Speers", "Klondike Mike’s (Palmer)", "Anchorage", "2021-10-19", "7p-12a", ""),
  ev("Midnight Sons Chorus Rehearsal", "First Christian Church", "Anchorage", "2021-10-19", "7p-9:30p", ""),
  ev("Open Jam with the Van's Fam", "Van’s Dive Bar", "Anchorage", "2021-10-19", "8:30p-1a", ""),
  ev("AK Rockstar Karaoke Tuesday", "The Carousel Lounge", "Anchorage", "2021-10-19", "8p-2a", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2021-10-19", "8p-2a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2021-10-19", "9p-1a", ""),

  // ═══ ANCHORAGE — Wednesday October 20th ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2021-10-20", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2021-10-20", "10p-2a", ""),
  ev("Open Decks", "Koot’s", "Anchorage", "2021-10-20", "10p-3a", ""),
  ev("Open Mic at Schwabenhof", "The Schwabenhof (Wasilla)", "Anchorage", "2021-10-20", "7:30p-11:30p", ""),
  ev("Arctic Jungle Band", "907 Alehouse", "Anchorage", "2021-10-20", "7p-10p", ""),
  ev("(Open) Mic Check", "Goldies AK (Fairbanks)", "Anchorage", "2021-10-20", "7p-10p", ""),
  ev("Witty Youngman", "PubHouse", "Anchorage", "2021-10-20", "7p-10p", ""),
  ev("Peanut Butter and Jamz w/ DJ GRE & Lloydz Noize", "Williwaw Social", "Anchorage", "2021-10-20", "7p-10p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2021-10-20", "8:30p-10p", "", "comedy"),
  ev("Karaoke Hosted by Spenard Husband", "Van’s Dive Bar", "Anchorage", "2021-10-20", "8:30p-12a", ""),
  ev("Jared Woods", "Humpys", "Anchorage", "2021-10-20", "8p-11:30p", ""),
  ev("AK Rockstar Karaoke Wednesday", "The Carousel Lounge", "Anchorage", "2021-10-20", "8p-11p", ""),
  ev("KASH Country Night at Koot's w/ Ken Peltier", "Koot’s", "Anchorage", "2021-10-20", "8p-12:30a", ""),
  ev("Mad Myrna's Karaoke!", "Mad Myrna’s", "Anchorage", "2021-10-20", "9p-12a", ""),

  // ═══ ANCHORAGE — Friday November 26th ═══
  ev("Latin Dancing", "Date Night", "Anchorage", "2021-11-26", "", ""),
  ev("The Jephries w/ Chelsea's Biscuit & Fungus", "Koot’s", "Anchorage", "2021-11-26", "10p-2:30a", ""),
  ev("Those Guys AK", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2021-11-26", "10p-2a", ""),
  ev("Caribbean Night w/ DJ Militant & DJ Caribbean Queen", "Lil Babes Cocktail Lounge", "Anchorage", "2021-11-26", "11p-2a", ""),
  ev("John Damberg Jazz Piano Fridays", "Organic Oasis", "Anchorage", "2021-11-26", "5:30p-7:30p", ""),
  ev("Friday Night Feast w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2021-11-26", "5:30p-7p", ""),
  ev("Open Mic Night", "Black Birch Books (Wasilla)", "Anchorage", "2021-11-26", "5p-7p", ""),
  ev("Acoustic Steak Night with MusiCal", "American Legion Spenard Post 28", "Anchorage", "2021-11-26", "6p-8p", "", "theatre"),
  ev("Date Night - Latin Dancing", "Mermaid Grotto Café & Boutique (Seward)", "Anchorage", "2021-11-26", "7p-10p", ""),
  ev("Witty Youngman", "PubHouse", "Anchorage", "2021-11-26", "7p-10p", ""),
  ev("Open Mic Night", "Floaters (Big Lake)", "Anchorage", "2021-11-26", "7p-12a", ""),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2021-11-26", "7p-12a", ""),
  ev("DJ Chester Chomp’s Zoom Room Dance Party", "Red Carpet Entertainment", "Anchorage", "2021-11-26", "7p-7:40p", "", "dance"),
  ev("VPA’s The Best Christmas Pageant Ever", "Valley Performing Arts (Wasilla)", "Anchorage", "2021-11-26", "7p-9:30p", ""),
  ev("90s Video Dance Party: In Living Color", "Williwaw Social", "Anchorage", "2021-11-26", "8p-2a", "", "dance"),
  ev("Woodrow", "Humpys", "Anchorage", "2021-11-26", "9:30p-1a", ""),
  ev("Karaoke Weekends", "Roundup Steakhouse & Saloon (Fairbanks)", "Anchorage", "2021-11-26", "9:30p-3a", ""),
  ev("Friday Night Vibes in the Speakeasy", "Williwaw Social", "Anchorage", "2021-11-26", "9p-1:30a", ""),
  ev("Friday Night Karaoke!", "American Legion Spenard Post 28", "Anchorage", "2021-11-26", "9p-12a", ""),
  ev("Friday Night Dance Lounge", "Alaska Dance Promotions", "Anchorage", "2021-11-26", "9p-1a", "", "dance"),

  // ═══ ANCHORAGE — Saturday November 27th ═══
  ev("Sassy Saturdays Cabaret", "EAT YOUR HEART OUT", "Anchorage", "2021-11-27", "", ""),
  ev("Thanksgiving Metal Massacre w/ Decepticide, Mindful Khaos, Gloom Wagon, & Part Time Super Heroes", "Koot’s", "Anchorage", "2021-11-27", "10p-2:30a", ""),
  ev("Those Guys AK", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2021-11-27", "10p-2a", ""),
  ev("Tim Hall", "Everett’s (Wasilla)", "Anchorage", "2021-11-27", "6:30p-9:30p", ""),
  ev("Fun and Food w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2021-11-27", "6p-11p", ""),
  ev("Karaoke Saturday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2021-11-27", "7p-12a", ""),
  ev("VPA’s The Best Christmas Pageant Ever", "Valley Performing Arts (Wasilla)", "Anchorage", "2021-11-27", "7p-9:30p", ""),
  ev("Jukebox Karaoke Roadshow", "Don Jose’s", "Anchorage", "2021-11-27", "8p-11p", ""),
  ev("Velvet La La Live", "Anchorage Moose Lodge", "Anchorage", "2021-11-27", "8p-12a", ""),
  ev("Tripwire Band the Legend", "Floaters (Big Lake)", "Anchorage", "2021-11-27", "8p-12a", ""),
  ev("EAT YOUR HEART OUT - Sassy Saturdays Cabaret", "Broken Blender", "Anchorage", "2021-11-27", "8p-9:30p", ""),
  ev("Nothin But Trouble", "Humpys", "Anchorage", "2021-11-27", "9:30p-1a", ""),
  ev("Saturday Night Soiree in the Speakeasy", "Williwaw Social", "Anchorage", "2021-11-27", "9p-1:30a", ""),
  ev("Last Cha Cha Lesson and Dance", "35+ Singles Dance Club", "Anchorage", "2021-11-27", "9p-11p", "", "dance"),
  ev("Saturday Night Karaoke!", "American Legion Spenard Post 28", "Anchorage", "2021-11-27", "9p-12a", ""),
  ev("Vik and Co. 3 bands!! Live Music in the heart of Spenard", "The Carousel Lounge", "Anchorage", "2021-11-27", "9p-2a", ""),
  ev("The 49th Supply Co. 8 Year Anniversary Party", "Williwaw Social", "Anchorage", "2021-11-27", "9p-2a", ""),

  // ═══ ANCHORAGE — Sunday November 28th ═══
  ev("SIN w/ The Millennial Falcons (Service Industry Night)", "Koot’s", "Anchorage", "2021-11-28", "10p-2a", ""),
  ev("Pies & Thighs Burlesque Brunch", "Broken Blender", "Anchorage", "2021-11-28", "11:30a-1p", "", "community"),
  ev("VPA’s The Best Christmas Pageant Ever", "Valley Performing Arts (Wasilla)", "Anchorage", "2021-11-28", "2p-5:30p", ""),
  ev("Schwabenhof's Sunday Live Music", "The Schwabenhof (Wasilla)", "Anchorage", "2021-11-28", "4p-7p", ""),
  ev("All Ages Open Mic w/ Tyson Davis", "Temple Studios Community Center (Seward)", "Anchorage", "2021-11-28", "6p-8p", ""),
  ev("Jukebox Karaoke Roadshow", "Broken Blender", "Anchorage", "2021-11-28", "8p-11p", ""),
  ev("Open Mic Jam", "Humpys", "Anchorage", "2021-11-28", "8p-11p", ""),
  ev("Mad Myrna's Karaoke!", "Mad Myrna’s", "Anchorage", "2021-11-28", "8p-12a", ""),
  ev("Open Mic With Sara Wash Your Hands", "Van’s Dive Bar", "Anchorage", "2021-11-28", "8p-12a", ""),
  ev("AK Rockstar Karaoke Sunday", "The Carousel Lounge", "Anchorage", "2021-11-28", "8p-2a", ""),

  // ═══ ANCHORAGE — Monday November 29th ═══
  ev("Monday Night Karaoke", "American Legion Spenard Post 28", "Anchorage", "2021-11-29", "8p-11p", ""),
  ev("Ellie Kenealy's Monday Melodies", "Van’s Dive Bar", "Anchorage", "2021-11-29", "9:30p-12a", ""),
  ev("The Monday Mic at Koots", "Koot’s", "Anchorage", "2021-11-29", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday November 30th ═══
  ev("Vintage Soul", "Organic Oasis", "Anchorage", "2021-11-30", "5:30p-7:30p", ""),
  ev("Acoustic Song Circle", "American Legion Spenard Post 28", "Anchorage", "2021-11-30", "6:30p-9:30p", ""),
  ev("9th Army Band Playing Christmas Music", "Alaska Aviation Museum", "Anchorage", "2021-11-30", "6p-6:30p", "", "theatre"),
  ev("Moondog Media Open Stage Night w/ Sabrina Speers", "Klondike Mike’s (Palmer)", "Anchorage", "2021-11-30", "7p-12a", ""),
  ev("Midnight Sons Chorus Rehearsal", "First Christian Church", "Anchorage", "2021-11-30", "7p-9:30p", ""),
  ev("Tuesday Night Open Jam Hosted by Spenard Husband", "Van’s Dive Bar", "Anchorage", "2021-11-30", "8:30p-1a", ""),
  ev("Tyson Davis Tuesdays", "Seward Alehouse", "Anchorage", "2021-11-30", "8p-11p", ""),
  ev("AK Rockstar Karaoke Tuesday", "The Carousel Lounge", "Anchorage", "2021-11-30", "8p-2a", ""),
  ev("Jukebox Karaoke Roadshow at Flight Deck", "The Flight Deck Bar & Lounge", "Anchorage", "2021-11-30", "8p-2a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2021-11-30", "9p-1a", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2021-11-30", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday December 1st ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2021-12-01", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2021-12-01", "10p-2a", ""),
  ev("Open Mic at Schwabenhof", "The Schwabenhof (Wasilla)", "Anchorage", "2021-12-01", "7:30p-11:30p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2021-12-01", "7p-10p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2021-12-01", "8:30p-10p", "", "comedy"),
  ev("Josh and Christine Host Karaoke", "Van’s Dive Bar", "Anchorage", "2021-12-01", "8:30p-1a", ""),
  ev("The Vanpierres", "Humpys", "Anchorage", "2021-12-01", "8p-11:30p", ""),
  ev("AK Rockstar Karaoke Wednesday", "The Carousel Lounge", "Anchorage", "2021-12-01", "8p-11p", ""),
  ev("KASH Country Night at Koot's w/ Ken Peltier", "Koot’s", "Anchorage", "2021-12-01", "8p-12:30a", ""),
  ev("Mad Myrna's Karaoke!", "Mad Myrna’s", "Anchorage", "2021-12-01", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2021-12-01", "9p-2a", ""),

  // ═══ ANCHORAGE — Saturday December 4th ═══
  ev("A Tinsel & Tassel Cabaret", "Unwrapped", "Anchorage", "2021-12-04", "", ""),
  ev("Those Guys AK", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2021-12-04", "10p-2a", ""),
  ev("ONYX Live In Alaska", "Koot’s", "Anchorage", "2021-12-04", "10p-2a", ""),
  ev("House Party @ the Ave w/ The Guestlist", "The Avenue Bar", "Anchorage", "2021-12-04", "10p-3a", ""),
  ev("The Nutcracker 2021", "Juneau-Douglas High School (Juneau)", "Anchorage", "2021-12-04", "2p-3:30p & 7p-8:30p", ""),
  ev("The Nutcracker by North Star Ballet", "Hering Auditorium (Fairbanks)", "Anchorage", "2021-12-04", "2p-4p & 8p-10p", ""),
  ev("Killoran Productions Holiday Extravaganza", "Cyrano’s Playhouse", "Anchorage", "2021-12-04", "3p-5p", ""),
  ev("Fun and Food w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2021-12-04", "6p-11p", ""),
  ev("Winter Wonderland Drag Show", "Basement Boudoir (Fairbanks)", "Anchorage", "2021-12-04", "7p-11:30p", "", "comedy"),
  ev("December Line Dance Lessons and Social Dances", "35+ Singles Dance Club", "Anchorage", "2021-12-04", "7p-11p", "", "dance"),
  ev("Karaoke Saturday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2021-12-04", "7p-12a", ""),
  ev("11th Annual Twelve Days of Christmas Pub Crawl", "Downtown Anchorage", "Anchorage", "2021-12-04", "7p-1a", ""),
  ev("Drew Erickson, Bicycle Baron, & The Millennial Falcons", "Moose A’la Mode", "Anchorage", "2021-12-04", "7p-1a", ""),
  ev("VPA’s The Best Christmas Pageant Ever", "Valley Performing Arts (Wasilla)", "Anchorage", "2021-12-04", "7p-9:30p", ""),
  ev("Jukebox Karaoke Roadshow", "Don Jose’s", "Anchorage", "2021-12-04", "8p-11p", ""),
  ev("Danger Money Live", "Anchorage Moose Lodge", "Anchorage", "2021-12-04", "8p-12a", ""),
  ev("Bachelor Ball w/ Plan B", "Fairview Inn (Talkeetna)", "Anchorage", "2021-12-04", "8p-12a", ""),
  ev("The Prohibition Party 1933: A Repeal Day Soiree", "Williwaw Social", "Anchorage", "2021-12-04", "8p-2a", ""),
  ev("Unwrapped - A Tinsel & Tassel Cabaret", "Broken Blender", "Anchorage", "2021-12-04", "8p-9:30p", ""),
  ev("The Vintage Retro", "Humpys", "Anchorage", "2021-12-04", "9:30p-1a", ""),
  ev("Karaoke Weekends", "Roundup Steakhouse & Saloon (Fairbanks)", "Anchorage", "2021-12-04", "9:30p-3a", ""),
  ev("Ugly Sweater Party w/ Joe Brady", "Williwaw Social", "Anchorage", "2021-12-04", "9p-1:30a", ""),
  ev("#WhereJDiggsAt", "Al’s Alaskan Inn", "Anchorage", "2021-12-04", "9p-12a", ""),
  ev("Saturday Night Karaoke!", "American Legion Spenard Post 28", "Anchorage", "2021-12-04", "9p-12a", ""),
  ev("Zen Trembles, Neil Robertson, and The Sunday Nights", "Van’s Dive Bar", "Anchorage", "2021-12-04", "9p-1a", ""),
  ev("Local Roots in the Ice Bar", "Koot’s", "Anchorage", "2021-12-04", "9p-2:30a", ""),

  // ═══ ANCHORAGE — Sunday December 5th ═══
  ev("The Nutcracker by North Star Ballet", "Hering Auditorium (Fairbanks)", "Anchorage", "2021-12-05", "2p-4p", ""),
  ev("VPA’s The Best Christmas Pageant Ever", "Valley Performing Arts (Wasilla)", "Anchorage", "2021-12-05", "2p-5:30p", ""),
  ev("Schwabenhof's Sunday Live Music", "The Schwabenhof (Wasilla)", "Anchorage", "2021-12-05", "4p-7p", ""),
  ev("All Ages Open Mic w/ Tyson Davis", "Temple Studios Community Center (Seward)", "Anchorage", "2021-12-05", "6p-8p", ""),
  ev("Jukebox Karaoke Roadshow", "Broken Blender", "Anchorage", "2021-12-05", "8p-11p", ""),
  ev("Open Mic Jam", "Humpys", "Anchorage", "2021-12-05", "8p-11p", ""),
  ev("Ukulele Russ & His One Man Frontier Band", "Fairview Inn (Talkeetna)", "Anchorage", "2021-12-05", "8p-12a", ""),
  ev("Mad Myrna's Karaoke!", "Mad Myrna’s", "Anchorage", "2021-12-05", "8p-12a", ""),
  ev("Open Mic With Sara Wash Your Hands", "Van’s Dive Bar", "Anchorage", "2021-12-05", "8p-12a", ""),
  ev("AK Rockstar Karaoke Sunday", "The Carousel Lounge", "Anchorage", "2021-12-05", "8p-2a", ""),

  // ═══ ANCHORAGE — Monday December 6th ═══
  ev("Date Night Latin Dancing", "Mermaid Grotto Café & Boutique (Seward)", "Anchorage", "2021-12-06", "5:30p-7:30p", ""),
  ev("Monday Night Karaoke", "American Legion Spenard Post 28", "Anchorage", "2021-12-06", "8p-11p", ""),
  ev("Ellie Kenealy's Monday Melodies", "Van’s Dive Bar", "Anchorage", "2021-12-06", "9:30p-12a", ""),
  ev("The Monday Mic at Koots", "Koot’s", "Anchorage", "2021-12-06", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday December 7th ═══
  ev("Vintage Soul", "Organic Oasis", "Anchorage", "2021-12-07", "5:30p-7:30p", ""),
  ev("Tuesday Open Mic at Post 28!", "American Legion Spenard Post 28", "Anchorage", "2021-12-07", "6:30p-9:30p", ""),
  ev("Tuesday Night Open Jam Hosted by Spenard Husband", "Van’s Dive Bar", "Anchorage", "2021-12-07", "8:30p-1a", ""),
  ev("Tyson Davis Tuesdays", "Seward Alehouse", "Anchorage", "2021-12-07", "8p-11p", ""),
  ev("AK Rockstar Karaoke Tuesday", "The Carousel Lounge", "Anchorage", "2021-12-07", "8p-2a", ""),
  ev("Jukebox Karaoke Roadshow at Flight Deck", "The Flight Deck Bar & Lounge", "Anchorage", "2021-12-07", "8p-2a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2021-12-07", "9p-1a", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2021-12-07", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday December 8th ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2021-12-08", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2021-12-08", "10p-2a", ""),
  ev("Distinguished Citizens Banquet: Jerry Evans & Glenner Anderson", "Westmark Hotel (Fairbanks)", "Anchorage", "2021-12-08", "6p-9p", ""),
  ev("Open Mic at Schwabenhof", "The Schwabenhof (Wasilla)", "Anchorage", "2021-12-08", "7:30p-11:30p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2021-12-08", "7p-10p", ""),
  ev("Peanut Butter and Jamz w/ DJ GRE & Lloydz Noize", "Williwaw Social", "Anchorage", "2021-12-08", "7p-10p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2021-12-08", "8:30p-10p", "", "comedy"),
  ev("Josh and Christine Host Karaoke", "Van’s Dive Bar", "Anchorage", "2021-12-08", "8:30p-1a", ""),
  ev("Ukulele Russ", "Humpys", "Anchorage", "2021-12-08", "8p-11:30p", ""),
  ev("AK Rockstar Karaoke Wednesday", "The Carousel Lounge", "Anchorage", "2021-12-08", "8p-11p", ""),
  ev("KASH Country Night at Koot's w/ Ken Peltier", "Koot’s", "Anchorage", "2021-12-08", "8p-12:30a", ""),
  ev("Mad Myrna's Karaoke!", "Mad Myrna’s", "Anchorage", "2021-12-08", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2021-12-08", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday May 25th ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2022-05-25", "10p-12a", ""),
  ev("Dancing with My Dollie: Passport to Paris", "Anchorage Classical Ballet Academy", "Anchorage", "2022-05-25", "4p-6p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2022-05-25", "7p-10p", ""),
  ev("Witty Youngman", "PubHouse", "Anchorage", "2022-05-25", "7p-10p", ""),
  ev("Open Mic", "Schwabenhof (Wasilla)", "Anchorage", "2022-05-25", "7p-12a", ""),
  ev("The Wax Poetic w/ Nikki Now!", "Van’s Dive Bar", "Anchorage", "2022-05-25", "7p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2022-05-25", "8:30p-10p", "", "comedy"),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2022-05-25", "8p-11p", ""),
  ev("KASH Country Night at Koot's", "Koot’s", "Anchorage", "2022-05-25", "8p-12:30a", ""),
  ev("Karaoke Wednesdays", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2022-05-25", "8p-12a", ""),
  ev("Open Mic at The Marlin!", "The Marlin (Fairbanks)", "Anchorage", "2022-05-25", "8p-2a", ""),
  ev("Karaoke w/ The Milkman and/or The Dairy Queen!", "Van’s Dive Bar", "Anchorage", "2022-05-25", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2022-05-25", "9p-2a", ""),

  // ═══ ANCHORAGE — Thursday May 26th ═══
  ev("Thursday Vibe DJ Covy", "Mad Myrna’s", "Anchorage", "2022-05-26", "10p-2a", ""),
  ev("Karaoke with Kellie B.!", "The Marlin (Fairbanks)", "Anchorage", "2022-05-26", "10p-2a", ""),
  ev("El Escapado, Lone Wolves, & Sideways", "Koot’s", "Anchorage", "2022-05-26", "10p-3a", ""),
  ev("Dancing with My Dollie: Passport to Paris", "Anchorage Classical Ballet Academy", "Anchorage", "2022-05-26", "4p-6p", ""),
  ev("#TurnUpForJesus Thursday", "House of Transformation", "Anchorage", "2022-05-26", "5p-9p", ""),
  ev("Front to Franklin Open Mic Night", "The Crystal Saloon (Juneau)", "Anchorage", "2022-05-26", "7:30p-11p", ""),
  ev("(Open) Mic Check", "Goldie’s AK (Fairbanks)", "Anchorage", "2022-05-26", "7p-10p", ""),
  ev("The MUCKERS", "The Marlin Bar (Fairbanks)", "Anchorage", "2022-05-26", "7p-10p", ""),
  ev("The AKoustic Project", "Tailgater’s Sport’s Bar & Grill (Wasilla)", "Anchorage", "2022-05-26", "7p-10p", ""),
  ev("Kayti & Cami", "Fairview Inn (Talkeetna)", "Anchorage", "2022-05-26", "7p-1a", ""),
  ev("Music in the Garden", "Georgeson Botanical Garden (Fairbanks)", "Anchorage", "2022-05-26", "7p-8p", ""),
  ev("The Mommy Dance", "Cyrano’s Theatre", "Anchorage", "2022-05-26", "7p-9p", "", "dance"),
  ev("Appalaskan Jess “Rare Bird” Single Release Party", "Spoonline (Girdwood)", "Anchorage", "2022-05-26", "7p-9p", ""),
  ev("Dead Night @ Van's w/The Lightning Will", "Van’s Dive Bar", "Anchorage", "2022-05-26", "8:45p-12a", ""),
  ev("Parlor in the Round w/ Jamie Whiteman, Candice Ivory, & Mikey Kehr", "Bear Tooth Theatrepub & Grill", "Anchorage", "2022-05-26", "8p-10p", ""),
  ev("The Jukebox Karaoke Roadshow Pop-up", "Bear Paw Bar & Grill", "Anchorage", "2022-05-26", "8p-11p", ""),
  ev("Jukebox Karaoke Roadshow", "Flattop Pizza & Pool", "Anchorage", "2022-05-26", "8p-11p", ""),
  ev("Glacier Hoppers", "Garcia’s Cantina & Café (Eagle River)", "Anchorage", "2022-05-26", "8p-11p", ""),
  ev("The Eternal Cowboys Rock the Roof", "Williwaw Social", "Anchorage", "2022-05-26", "8p-11p", ""),
  ev("Open Mic Night", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2022-05-26", "8p-12a", ""),
  ev("Mad Myrna's Comedy Showcase", "Mad Myrna’s", "Anchorage", "2022-05-26", "9p-11p", "", "comedy"),
  ev("Front to Franklin Open Mic Night", "The Alaskan Hotel & Bar (Juneau)", "Anchorage", "2022-05-26", "9p-1a", ""),

  // ═══ ANCHORAGE — Friday May 27th ═══
  ev("Glacier Hoppers 80's Birthday Bash", "Mug-Shot Saloon (Wasilla)", "Anchorage", "2022-05-27", "10p-2:30a", ""),
  ev("The Knight Show Dance Party", "The Crystal Saloon (Juneau)", "Anchorage", "2022-05-27", "10p-2a", "", "dance"),
  ev("DJ Manny’s Memorial Weekend: NIGHTLIFE EDITION", "2712 Drafthouse (Fairbanks)", "Anchorage", "2022-05-27", "10p-3a", ""),
  ev("Trapper Creek Bluegrass Festival", "Boots Bison Ranch (Trapper Creek)", "Anchorage", "2022-05-27", "12p-12a", "", "festival"),
  ev("John Damberg Jazz Piano Fridays", "Organic Oasis", "Anchorage", "2022-05-27", "5:30p-7:30p", ""),
  ev("Friday Night Feast w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2022-05-27", "5:30p-9p", ""),
  ev("Open Mic Night", "Birch Books (Wasilla)", "Anchorage", "2022-05-27", "5p-7p", ""),
  ev("Spenard Song Circle w/ Emma Hill, Nelson Kempf, & Thomas Moore", "The Nave Spenard", "Anchorage", "2022-05-27", "6:30p-9p", ""),
  ev("Acoustic Steak Night with Uncle Jim, the EastSide Balladeer!", "American Legion Spenard Post 28", "Anchorage", "2022-05-27", "6p-8p", ""),
  ev("Zero Miles to Empty live", "Palmer Alehouse (Palmer)", "Anchorage", "2022-05-27", "7p-10p", ""),
  ev("Witty Youngman", "PubHouse", "Anchorage", "2022-05-27", "7p-10p", ""),
  ev("The Jangle Bees", "Creekbend Company (Hope)", "Anchorage", "2022-05-27", "7p-11p", ""),
  ev("Open Mic Night", "Floaters (Big Lake)", "Anchorage", "2022-05-27", "7p-12a", ""),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2022-05-27", "7p-12a", ""),
  ev("Ukulele Russ", "Fairview Inn (Talkeetna)", "Anchorage", "2022-05-27", "7p-1a", ""),
  ev("The Mommy Dance", "Cyrano’s Theatre", "Anchorage", "2022-05-27", "7p-9p", "", "dance"),
  ev("Jukebox Karaoke Roadshow", "The Gaslight Bar", "Anchorage", "2022-05-27", "8p-11p", ""),
  ev("TGIF: Piss Denim", "Goldie’s AK (Fairbanks)", "Anchorage", "2022-05-27", "8p-11p", ""),
  ev("DJ The Guestlist", "Serrano’s Mexican Grill", "Anchorage", "2022-05-27", "8p-11p", ""),
  ev("Pop vs House Dance Party w/ Fan Service", "Williwaw Social", "Anchorage", "2022-05-27", "9:30p-2a", "", "dance"),
  ev("Matt Hopper and the Roman Candles", "Yukon Bar (Seward)", "Anchorage", "2022-05-27", "9p-1:30a", ""),
  ev("Jukebox Karaoke Roadshow", "Dave & Busters", "Anchorage", "2022-05-27", "9p-12a", ""),
  ev("The MUCKERS", "The Marlin Bar (Fairbanks)", "Anchorage", "2022-05-27", "9p-12a", ""),
  ev("Casey Smith Project LIVE", "Van’s Dive Bar", "Anchorage", "2022-05-27", "9p-1a", ""),

  // ═══ ANCHORAGE — Saturday May 28th ═══
  ev("Glacier Hoppers", "Mug-Shot Saloon (Wasilla)", "Anchorage", "2022-05-28", "10p-2:30a", ""),
  ev("Sunrise Music Festival", "Sunrise Inn (Cooper Landing)", "Anchorage", "2022-05-28", "12p-10p", "", "festival"),
  ev("Trapper Creek Bluegrass Festival", "Boots Bison Ranch (Trapper Creek)", "Anchorage", "2022-05-28", "12p-12a", "", "festival"),
  ev("Matanuska Beat and Palmer Percussion Trio", "203 Kombucha (Palmer)", "Anchorage", "2022-05-28", "3p-4p", ""),
  ev("Downtown Jazz in the Park", "Peratrovich Park (Anchorage)", "Anchorage", "2022-05-28", "4p-6p", ""),
  ev("Zero Miles to Empty", "Hatcher Pass Lodge", "Anchorage", "2022-05-28", "4p-7p", ""),
  ev("Three Men and A Sword", "Thunder Mountain High School", "Anchorage", "2022-05-28", "7:30p-9p", ""),
  ev("Nervis Rex LIVE", "Palmer Alehouse (Palmer)", "Anchorage", "2022-05-28", "7p-10p", ""),
  ev("Saturday Night Social Dance", "Carpenter’s Hall", "Anchorage", "2022-05-28", "7p-11p", "", "dance"),
  ev("The Jangle Bees", "Creekbend Company (Hope)", "Anchorage", "2022-05-28", "7p-11p", ""),
  ev("Karaoke", "The Fraternal Order of Eagles # 4174 Chugiak)", "Anchorage", "2022-05-28", "7p-11p", ""),
  ev("Emily Anderson Album Release Show", "Goldie’s AK (Fairbanks)", "Anchorage", "2022-05-28", "7p-11p", ""),
  ev("Braided River Live", "Schwabenhof (Wasilla)", "Anchorage", "2022-05-28", "7p-11p", ""),
  ev("HarpDaddy", "Fairview Inn (Talkeetna)", "Anchorage", "2022-05-28", "7p-1a", ""),
  ev("Ted Vigil Tribute to John Denver", "Sitka Performing Arts Center (Sitka)", "Anchorage", "2022-05-28", "7p-9p", ""),
  ev("Jukebox Karaoke Roadshow", "The Gaslight Bar", "Anchorage", "2022-05-28", "8p-11p", ""),
  ev("Regina & Will", "Serrano’s Mexican Grill", "Anchorage", "2022-05-28", "8p-11p", ""),
  ev("Tony Gebhard live", "Broken Blender", "Anchorage", "2022-05-28", "8p-12a", ""),
  ev("Travis Thompson Concert", "Williwaw Social", "Anchorage", "2022-05-28", "8p-12a", ""),
  ev("Sassy Saturdays Live Cabaret", "Broken Blender", "Anchorage", "2022-05-28", "8p-9:30p", ""),
  ev("Matt Hopper and the Roman Candles", "Yukon Bar (Seward)", "Anchorage", "2022-05-28", "9p-1:30a", ""),
  ev("Night of 1,000 Gowns", "Mad Myrna’s", "Anchorage", "2022-05-28", "9p-11:30p", ""),
  ev("Hot Mess", "Kenai Joe’s Taphouse (Kenai)", "Anchorage", "2022-05-28", "9p-12a", ""),
  ev("Lions From Lambs Album Release Party", "Koot’s", "Anchorage", "2022-05-28", "9p-1a", ""),
  ev("Sideways, Lilac, & Lizzie Guillot", "Van’s Dive Bar", "Anchorage", "2022-05-28", "9p-1a", ""),

  // ═══ ANCHORAGE — Sunday May 29th ═══
  ev("Sunrise Music Festival", "Sunrise Inn (Cooper Landing)", "Anchorage", "2022-05-29", "12p-10p", "", "festival"),
  ev("Trapper Creek Bluegrass Festival", "Boots Bison Ranch (Trapper Creek)", "Anchorage", "2022-05-29", "12p-12a", "", "festival"),
  ev("Juneau Piano Series w/ Anson Sin", "Juneau Arts & Culture Center", "Anchorage", "2022-05-29", "3p-4:30p", ""),
  ev("The Mommy Dance", "Cyrano’s Theatre", "Anchorage", "2022-05-29", "3p-5p", "", "dance"),
  ev("Beat Roots Alaska Summer '22 w/ Myndgruv", "KONR 106.1 FM", "Anchorage", "2022-05-29", "3p-5p", ""),
  ev("Lauren Crosby", "Fairview Inn (Talkeetna)", "Anchorage", "2022-05-29", "4p-6p", ""),
  ev("Sunday Night Karaoke!", "The Marlin (Fairbanks)", "Anchorage", "2022-05-29", "6p-12a", ""),
  ev("The Star of Alaska Karaoke Tournament", "907 Alehouse", "Anchorage", "2022-05-29", "6p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2022-05-29", "8:30p-10p", "", "comedy"),
  ev("Open Mic Jam", "Humpys", "Anchorage", "2022-05-29", "8p-11p", ""),
  ev("Open Mic! Overlorded by Wash Your Hands", "Van’s Dive Bar", "Anchorage", "2022-05-29", "8p-12a", ""),
  ev("AK Rockstar Karaoke Sunday", "The Carousel Lounge", "Anchorage", "2022-05-29", "8p-2a", ""),
  ev("Tulips & Tassels Burlesque Brunch", "Broken Blender", "Anchorage", "2022-05-29", "8p-9:30p", "", "community"),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2022-05-29", "9p-12a", ""),
  ev("The Jerry and Andy Show!", "Yukon Bar (Seward)", "Anchorage", "2022-05-29", "9p-12a", ""),

  // ═══ ANCHORAGE — Monday May 30th ═══
  ev("Trapper Creek Bluegrass Festival", "Boots Bison Ranch (Trapper Creek)", "Anchorage", "2022-05-30", "12p-3p", "", "festival"),
  ev("Triple Black Diamonds", "Fairview Inn (Talkeetna)", "Anchorage", "2022-05-30", "7p-1a", ""),
  ev("Open Jam w/ Ben Sayers", "Yukon Bar (Seward)", "Anchorage", "2022-05-30", "8:30p-12a", ""),
  ev("Comedy Open Mic", "Van’s Dive Bar", "Anchorage", "2022-05-30", "8:30p-9:30p", "", "comedy"),
  ev("Mull Over Mondays w/ Ellie Kenealy", "Van’s Dive Bar", "Anchorage", "2022-05-30", "9:30p-12a", ""),
  ev("The Monday Mic at Koots", "Koot’s", "Anchorage", "2022-05-30", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday May 31st ═══
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2022-05-31", "10p-12a", ""),
  ev("Turnagain Blue", "Organic Oasis", "Anchorage", "2022-05-31", "5:30p-7:30p", ""),
  ev("Unplugged-Acoustic Song Circle", "American Legion Spenard Post 28", "Anchorage", "2022-05-31", "6:30p-9:30p", ""),
  ev("The Open Stage", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2022-05-31", "7p-10p", ""),
  ev("Open Mic w/ Andy Mullen", "Fairview Inn (Talkeetna)", "Anchorage", "2022-05-31", "7p-1a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2022-05-31", "8p-2a", ""),
  ev("Open Jam with Spenard Husband", "Van’s Dive Bar", "Anchorage", "2022-05-31", "9p-12a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2022-05-31", "9p-1a", ""),

  // ═══ ANCHORAGE — Wednesday June 1st ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2022-06-01", "10p-12a", ""),
  ev("Music in the Park: Tyson Alteri", "Peratrovich Park (Anchorage)", "Anchorage", "2022-06-01", "12p-1p", ""),
  ev("Medimu Build, Nelson Kempf, & Keeley Boyle", "Soldotna Creek Park", "Anchorage", "2022-06-01", "6p-9p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2022-06-01", "7p-10p", ""),
  ev("The Wax Poetic w/ Nikki Now!", "Van’s Dive Bar", "Anchorage", "2022-06-01", "7p-9p", ""),
  ev("Karaoke Wednesdays", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2022-06-01", "8p-12a", ""),
  ev("Open Mic at The Marlin!", "The Marlin (Fairbanks)", "Anchorage", "2022-06-01", "8p-2a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2022-06-01", "9p-12a", ""),

  // ═══ ANCHORAGE — Saturday June 11th ═══
  ev("Irish Dance Academy of Alaska", "Anchorage Town Square", "Anchorage", "2022-06-11", "1:30p-2:30p", "", "dance"),
  ev("Kenai River Festival", "Soldotna Creek Park (Kenai)", "Anchorage", "2022-06-11", "11a-10p", "", "festival"),
  ev("907 Pro Wrestling: Arisen", "Arctic Rec Center", "Anchorage", "2022-06-11", "3p-6p", ""),
  ev("Downtown Jazz in the Park: Mark Manners, JD, Dirk-ok, Bob Arms, Pat Owen", "Peratrovich Park (Anchorage)", "Anchorage", "2022-06-11", "4p-6p", ""),
  ev("Bonnaroo vs Firefly Summer Dance Party w/ Fan Service", "Williwaw Social", "Anchorage", "2022-06-11", "5p-10:30p", "", "dance"),
  ev("Candlebox", "Matanuska Brewing (Eagle River)", "Anchorage", "2022-06-11", "6p-10p", ""),
  ev("Fun and Food w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2022-06-11", "6p-11p", ""),
  ev("Joseph C. Phillips, Jr. Composer Portrait Concert", "UAA Recital Hall", "Anchorage", "2022-06-11", "7:30p-9p", ""),
  ev("John Cook", "Mountain High Pizza Pie (Talkeetna)", "Anchorage", "2022-06-11", "7p-10p", ""),
  ev("The Ken Peltier Band", "Palmer Alehouse (Palmer)", "Anchorage", "2022-06-11", "7p-10p", ""),
  ev("Ukulele Russ!", "Schwabenhof (Wasilla)", "Anchorage", "2022-06-11", "7p-11p", ""),
  ev("Jimmy Sandy", "The Seaview Café (Hope)", "Anchorage", "2022-06-11", "7p-11p", ""),
  ev("Radiance w/ Posterchild, Quinoa, The Guest List, D. Church, & Rachel Monae", "Alaska Cannabis Exchange", "Anchorage", "2022-06-11", "7p-1a", ""),
  ev("Comedian Joe Bartnick", "Koot’s", "Anchorage", "2022-06-11", "7p-9p & 9:30p-11p", ""),
  ev("Juneau Symphony: Night at the Oscars", "Juneau-Douglas High School (Juneau)", "Anchorage", "2022-06-11", "8p-10p", ""),
  ev("Lilac w/ Sample Text", "Cafecito Bonito", "Anchorage", "2022-06-11", "8p-11p", ""),
  ev("Hwy9 Acoustic", "Serrano’s Mexican Grill", "Anchorage", "2022-06-11", "8p-11p", ""),
  ev("Reggae Dance Party with H3", "Williwaw Social", "Anchorage", "2022-06-11", "8p-11p", "", "dance"),
  ev("Tony Gebhard live", "Broken Blender", "Anchorage", "2022-06-11", "8p-12a", ""),
  ev("Forbidden Desires, Episode 147: Three Way Tango", "Broken Blender", "Anchorage", "2022-06-11", "8p-9:30p", "", "dance"),
  ev("Zen Trembles", "Humpy’s", "Anchorage", "2022-06-11", "9:30p-1:30a", ""),
  ev("Round Up Karaoke Weekend Nights!", "Roundup Steakhouse & Saloon (Fairbanks)", "Anchorage", "2022-06-11", "9:30p-2a", ""),
  ev("UKULELE RUSS & HIS ONE MAN FRONTIER BAND", "Yukon Bar (Seward)", "Anchorage", "2022-06-11", "9p-1:30a", ""),

  // ═══ ANCHORAGE — Sunday June 12th ═══
  ev("Kenai River Festival", "Soldotna Creek Park (Kenai)", "Anchorage", "2022-06-12", "11a-4p", "", "festival"),
  ev("Anchorage Bowl Chamber Orchestra", "Kenai Senior Citizen’s Center (Kenai)", "Anchorage", "2022-06-12", "2p-4:30p", ""),
  ev("Pride Kickoff BBQ and Tea Dance w/ DJ Mike Mason", "Raven Bar", "Anchorage", "2022-06-12", "2p-8p", "", "dance"),
  ev("Juneau Symphony: Night at the Oscars", "Juneau-Douglas High School (Juneau)", "Anchorage", "2022-06-12", "3p-5p", ""),
  ev("Steve Durr", "Mountain High Pizza Pie (Talkeetna)", "Anchorage", "2022-06-12", "5p-8p", ""),
  ev("Sunday Night Karaoke!", "The Marlin (Fairbanks)", "Anchorage", "2022-06-12", "6p-12a", ""),
  ev("Sunday Open Mic", "The Creek Street Cabaret (Ketchikan)", "Anchorage", "2022-06-12", "6p-9p", ""),
  ev("Cold Country Bluegrass", "International Hotel and Bar (Fairbanks)", "Anchorage", "2022-06-12", "7p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2022-06-12", "8:30p-10p", "", "comedy"),
  ev("Open Mic Jam", "Humpys", "Anchorage", "2022-06-12", "8p-11p", ""),
  ev("Sunny Side Pride! DRAG BRUNCH at Williwaw!", "Williwaw Social", "Anchorage", "2022-06-12", "8p-11p", "", "community"),
  ev("Open Mic! Overlorded by Wash Your Hands", "Van’s Dive Bar", "Anchorage", "2022-06-12", "8p-12a", ""),
  ev("AK Rockstar Karaoke Sunday", "The Carousel Lounge", "Anchorage", "2022-06-12", "8p-2a", ""),
  ev("UKULELE RUSS & HIS ONE MAN FRONTIER BAND", "Yukon Bar (Seward)", "Anchorage", "2022-06-12", "9p-1:30a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2022-06-12", "9p-12a", ""),

  // ═══ ANCHORAGE — Monday June 13th ═══
  ev("Music for Little Ones w/ The Timbre Music Band", "Peratrovich Park (Anchorage)", "Anchorage", "2022-06-13", "12p-1p", ""),
  ev("Open Jam w/ Ben Sayers", "Yukon Bar (Seward)", "Anchorage", "2022-06-13", "8:30p-12a", ""),
  ev("Comedy Open Mic", "Van’s Dive Bar", "Anchorage", "2022-06-13", "8:30p-9:30p", "", "comedy"),
  ev("Mull Over Mondays w/ Ellie Kenealy", "Van’s Dive Bar", "Anchorage", "2022-06-13", "9:30p-12a", ""),
  ev("The Monday Mic at Koots", "Koot’s", "Anchorage", "2022-06-13", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday June 14th ═══
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2022-06-14", "10p-12a", ""),
  ev("Danger & Diva", "Anchorage Museum", "Anchorage", "2022-06-14", "11:30p-12:30p", ""),
  ev("Turnagain Blue", "Organic Oasis", "Anchorage", "2022-06-14", "5:30p-7:30p", ""),
  ev("Taco Tuesday Open Mic w/Rousted By Bulls!", "American Legion Spenard Post 28", "Anchorage", "2022-06-14", "6:30p-9:30p", ""),
  ev("The Open Stage", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2022-06-14", "7p-10p", ""),
  ev("Open Mic w/ Andy Mullen", "Fairview Inn (Talkeetna)", "Anchorage", "2022-06-14", "7p-1a", ""),
  ev("Summer SLAM!", "The Creek Street Cabaret (Ketchikan)", "Anchorage", "2022-06-14", "7p-9p", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2022-06-14", "8p-2a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2022-06-14", "9p-1a", ""),

  // ═══ ANCHORAGE — Wednesday June 15th ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2022-06-15", "10p-12a", ""),
  ev("Turnagain Blues", "Peratrovich Park (Anchorage)", "Anchorage", "2022-06-15", "12p-1p", ""),
  ev("FIVE LETTER WORD with Kelsey Shields", "Soldotna Creek Park", "Anchorage", "2022-06-15", "6p-9p", ""),
  ev("Summer Wednesdays w/Hwy9!", "Sportsman’s Bar (Whittier)", "Anchorage", "2022-06-15", "6p-9p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2022-06-15", "7p-10p", ""),
  ev("Witty Youngman", "PubHouse", "Anchorage", "2022-06-15", "7p-10p", ""),
  ev("Open Mic", "Schwabenhof (Wasilla)", "Anchorage", "2022-06-15", "7p-12a", ""),
  ev("Music with Reindeer", "Running Reindeer Ranch (Fairbanks)", "Anchorage", "2022-06-15", "7p-8p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2022-06-15", "8:30p-10p", "", "comedy"),
  ev("Jared Woods", "Humpy’s", "Anchorage", "2022-06-15", "8:30p-12:30a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2022-06-15", "8p-11p", ""),
  ev("KASH Country Night at Koot's", "Koot’s", "Anchorage", "2022-06-15", "8p-12:30a", ""),
  ev("Karaoke Wednesdays", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2022-06-15", "8p-12a", ""),
  ev("Open Mic at The Marlin!", "The Marlin (Fairbanks)", "Anchorage", "2022-06-15", "8p-2a", ""),
  ev("Jukebox Karaoke Roadshow", "Eddie’s Sports Bar", "Anchorage", "2022-06-15", "9p-12a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2022-06-15", "9p-12a", ""),
  ev("Karaoke w/ The Milkman and/or The Dairy Queen!", "Van’s Dive Bar", "Anchorage", "2022-06-15", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2022-06-15", "9p-2a", ""),

  // ═══ ANCHORAGE — Monday August 15th ═══
  ev("Larry Zarella", "Crow Creek Mine (Girdwood)", "Anchorage", "2022-08-15", "6p-8:30p", ""),
  ev("Music Practice", "Glacier Valley Church of God (Juneau)", "Anchorage", "2022-08-15", "7p-8:30p", ""),
  ev("Jim Lewin & Diana Z", "Spoonline (Girdwood)", "Anchorage", "2022-08-15", "7p-9p", ""),
  ev("Nikki Now", "Van’s Dive Bar", "Anchorage", "2022-08-15", "9:30p-12a", ""),
  ev("The Monday Mic at Koots", "Koot’s", "Anchorage", "2022-08-15", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday August 16th ═══
  ev("Open Mic w/ Andy Mullen 7p-", "Fairview Inn (Talkeetna)", "Anchorage", "2022-08-16", "", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2022-08-16", "10p-12a", ""),
  ev("Lunch on the Lawn: Fox in the Henhouse", "Anchorage Museum", "Anchorage", "2022-08-16", "11:30a-1:30p", ""),
  ev("Taco Tuesday Open Mic w/Gary Stedman!", "American Legion Spenard Post 28", "Anchorage", "2022-08-16", "6:30p-9:30p", ""),
  ev("The Open Stage", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2022-08-16", "7p-10p", ""),
  ev("Will Johnson", "Humpy’s", "Anchorage", "2022-08-16", "8:30p-12:30a", ""),
  ev("Live Music w/ Cami from Miami", "Cantwell Lodge (Cantwell)", "Anchorage", "2022-08-16", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2022-08-16", "8p-2a", ""),
  ev("OPEN JAM w/ Daylight Mike", "Van’s Dive Bar", "Anchorage", "2022-08-16", "9p-12a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2022-08-16", "9p-1a", ""),

  // ═══ ANCHORAGE — Wednesday August 17th ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2022-08-17", "10p-12a", ""),
  ev("DEREK POPPIN BAND w/ Sue Biggs and Jack Will", "Soldotna Creek Park (Soldotna)", "Anchorage", "2022-08-17", "6p-9p", ""),
  ev("Witty Youngman", "PubHouse", "Anchorage", "2022-08-17", "7p-10p", ""),
  ev("KASH Country Night at Koot's", "Koot’s", "Anchorage", "2022-08-17", "7p-11:30p", ""),
  ev("Open Mic", "Schwabenhof (Wasilla)", "Anchorage", "2022-08-17", "7p-12a", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2022-08-17", "8:30p-10p", "", "comedy"),
  ev("Lisa Lisa & That Guy", "Humpy’s", "Anchorage", "2022-08-17", "8:30p-12:30a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2022-08-17", "8p-11p", ""),
  ev("Karaoke Wednesdays", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2022-08-17", "8p-12a", ""),
  ev("Karaoke at Panorama Pizza Pub", "Panorama Pizza Pub (Cantwell)", "Anchorage", "2022-08-17", "8p-1a", ""),
  ev("Open Mic at The Marlin!", "The Marlin (Fairbanks)", "Anchorage", "2022-08-17", "8p-2a", ""),
  ev("Jukebox Karaoke Roadshow", "Eddie’s Sports Bar", "Anchorage", "2022-08-17", "9p-12a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2022-08-17", "9p-12a", ""),
  ev("Karaoke w/ The Milkman and/or The Dairy Queen!", "Van’s Dive Bar", "Anchorage", "2022-08-17", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2022-08-17", "9p-2a", ""),

  // ═══ ANCHORAGE — Saturday October 1st ═══
  ev("Family-Friendly Fall Fundraiser", "Oktoberfest", "Anchorage", "2022-10-01", "", ""),
  ev("Velvet La La Live", "Koot’s", "Anchorage", "2022-10-01", "10p-2:45a", ""),
  ev("Glacier Hoppers", "Klondike Mike’s & the Main Street Grill", "Anchorage", "2022-10-01", "10p-2a", ""),
  ev("Hot Mess", "The Maverick Saloon (Soldotna)", "Anchorage", "2022-10-01", "10p-2a", ""),
  ev("DJ Manny’s Annual Purge COSTUMED EVENT", "The Crowbar", "Anchorage", "2022-10-01", "10p-3a", ""),
  ev("Oktoberfest - Family-Friendly Fall Fundraiser", "Hilltop Ski Area", "Anchorage", "2022-10-01", "12p-8p", "", "festival"),
  ev("Iñu-Yupiaq Dance Group", "UAF Brooks Building (Fairbanks)", "Anchorage", "2022-10-01", "4p-6p", "", "dance"),
  ev("Free Hispanic Heritage Month Celebration", "Anchorage Museum", "Anchorage", "2022-10-01", "6:30p-7:30p", ""),
  ev("Beer. Brats. Brandenburgs.", "The Crystal Saloon (Juneau)", "Anchorage", "2022-10-01", "6p-10p", ""),
  ev("QTLY MILK RUN with HOWIE & DAN", "Alaska Hotel and Bar (Juneau)", "Anchorage", "2022-10-01", "7p-10:30p", "", "community"),
  ev("100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2022-10-01", "7p-10p", ""),
  ev("Wrestle Pro Alaska: The Calm Before the Storm", "Egan Convention Center", "Anchorage", "2022-10-01", "7p-10p", ""),
  ev("Viva Spenard 10", "Koot’s", "Anchorage", "2022-10-01", "7p-10p", ""),
  ev("DEARLY DEPARTED: A Comedy", "Valley Performing Arts (Wasilla)", "Anchorage", "2022-10-01", "7p-10p", "", "comedy"),
  ev("3OH!3 live at Williwaw Social!", "Williwaw Social", "Anchorage", "2022-10-01", "7p-10p", ""),
  ev("Oktoberfest Dance", "Anchorage Social Dance Club", "Anchorage", "2022-10-01", "7p-11p", "", "dance"),
  ev("Emo Night w/ Sideways & Millennial Falcons", "Palmer Train Depot (Palmer)", "Anchorage", "2022-10-01", "7p-11p", ""),
  ev("Mari Black in concert", "Alaska Center for the Performing Arts", "Anchorage", "2022-10-01", "7p-9:30p", ""),
  ev("Comedian Kevin Farley", "Koot’s", "Anchorage", "2022-10-01", "7p-9p & 9:30p-11p", ""),
  ev("The Jukebox Karaoke Roadshow", "The Gaslight Bar", "Anchorage", "2022-10-01", "8p-11p", ""),
  ev("Zen Trembles Live", "Anchorage Moose Lodge", "Anchorage", "2022-10-01", "8p-12a", ""),
  ev("Country Music w/ Virgil Lee Gattenby", "The Catch Restaurant & Bar (Soldotna)", "Anchorage", "2022-10-01", "8p-12a", ""),
  ev("Jukebox Karaoke Roadshow", "Don Jose’s Mexican Restaurant", "Anchorage", "2022-10-01", "8p-12a", ""),
  ev("HarpDaddy Unraveled Oktoberfesting", "Hightower Pub (Girdwood)", "Anchorage", "2022-10-01", "8p-12a", "", "festival"),
  ev("Sweet Cheeks Cabaret: Wenches and Wrenches", "The Broken Blender", "Anchorage", "2022-10-01", "8p-9:30p", ""),
  ev("Shaggtoberfest", "The Howling Dog Saloon (Fairbanks)", "Anchorage", "2022-10-01", "9:30p-12a", "", "festival"),
  ev("Round Up Karaoke Weekend Nights!", "Roundup Steakhouse & Saloon (Fairbanks)", "Anchorage", "2022-10-01", "9:30p-2a", ""),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2022-10-01", "9p-11:30p", ""),
  ev("The River Livers", "Van’s Dive Bar", "Anchorage", "2022-10-01", "9p-12a", ""),

  // ═══ ANCHORAGE — Sunday October 2nd ═══
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2022-10-02", "10p-2a", ""),
  ev("DEARLY DEPARTED: A Comedy", "Valley Performing Arts (Wasilla)", "Anchorage", "2022-10-02", "2p-5p", "", "comedy"),
  ev("From the Quills of Babes….", "Anchorage Festival of Music", "Anchorage", "2022-10-02", "4p-6p", ""),
  ev("Soloist Auditions", "The Church of Jesus Christ of Latter Day Saints (Wasilla)", "Anchorage", "2022-10-02", "5p-8p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2022-10-02", "8:30p-10p", "", "comedy"),
  ev("AK Rockstar Karaoke Sunday", "The Carousel Lounge", "Anchorage", "2022-10-02", "8p -2a", ""),
  ev("Open Mic Jam", "Humpys", "Anchorage", "2022-10-02", "8p-11p", ""),
  ev("Open Mic! Overlorded by Wash Your Hands", "Van’s Dive Bar", "Anchorage", "2022-10-02", "8p-12a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2022-10-02", "9p-12a", ""),

  // ═══ ANCHORAGE — Monday October 3rd ═══
  ev("Karaoke Night", "The Crowbar (Fairbanks)", "Anchorage", "2022-10-03", "8p-12a", ""),
  ev("Mellow Mondays w/ Nikki Now", "Van’s Dive Bar", "Anchorage", "2022-10-03", "9:30p-12a", ""),
  ev("The Monday Mic at Koots", "Koot’s", "Anchorage", "2022-10-03", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday October 4th ═══
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2022-10-04", "10p-12a", ""),
  ev("Williwaw Blue", "Organic Oasis", "Anchorage", "2022-10-04", "5:30p-7:30p", ""),
  ev("Taco Tuesday Open Mic w/Uncle Jim!", "American Legion Spenard Post 28", "Anchorage", "2022-10-04", "6:30p-9:30p", ""),
  ev("Comedy Night", "International Hotel and Bar (Fairbanks)", "Anchorage", "2022-10-04", "7p-10p", "", "comedy"),
  ev("The Open Stage", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2022-10-04", "7p-10p", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2022-10-04", "8p-2a", ""),
  ev("OPEN JAM w/ Daylight Mike", "Van’s Dive Bar", "Anchorage", "2022-10-04", "9p-12a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2022-10-04", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2022-10-04", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday October 5th ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2022-10-05", "10p-12a", ""),
  ev("Witty Youngman", "PubHouse", "Anchorage", "2022-10-05", "7p-10p", ""),
  ev("Open Mic", "Schwabenhof (Wasilla)", "Anchorage", "2022-10-05", "7p-12a", ""),
  ev("Wednesday Comedy w/ Jimmy Shubert", "North Pole Alehouse (North Pole)", "Anchorage", "2022-10-05", "7p-9p", "", "comedy"),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2022-10-05", "8:30p-10p", "", "comedy"),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2022-10-05", "8p-11p", ""),
  ev("Karaoke Wednesdays", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2022-10-05", "8p-12a", ""),
  ev("Country Night with DJ Lefty", "Koot’s", "Anchorage", "2022-10-05", "8p-12a", ""),
  ev("Open Mic at The Marlin!", "The Marlin (Fairbanks)", "Anchorage", "2022-10-05", "8p-2a", ""),
  ev("Jukebox Karaoke Roadshow", "Eddie’s Sports Bar", "Anchorage", "2022-10-05", "9p-12a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2022-10-05", "9p-12a", ""),
  ev("Karaoke w/ The Milkman and/or The Dairy Queen!", "Van’s Dive Bar", "Anchorage", "2022-10-05", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2022-10-05", "9p-2a", ""),

  // ═══ ANCHORAGE — Thursday January 26th ═══
  ev("Karaoke 8pm", "Lil Babe’s Cocktail Lounge", "Anchorage", "2023-01-26", "12a", ""),
  ev("Past, Present, & Future of Alaska Native Music", "UAF Charles Davis Hall (Fairbanks)", "Anchorage", "2023-01-26", "1p-2p", ""),
  ev("Music Workshop w/ Laura Cortese & the Dance Cards", "Hearth Artisan Pizza", "Anchorage", "2023-01-26", "3p-5", "", "dance"),
  ev("All City Band and Orchestra Auditions", "Bartlett High School", "Anchorage", "2023-01-26", "4p-6:30p", ""),
  ev("Community NARCAN Training Course", "The Workshop", "Anchorage", "2023-01-26", "5:30p-6:30p", "", "community"),
  ev("Live Music from Melissa \"Jazzmom\" Fischer", "Sullivan’s Steakhouse", "Anchorage", "2023-01-26", "5:30p-8:30p", ""),
  ev("Dancing Lights Trail", "Fairbanks Ice Art Park (Fairbanks)", "Anchorage", "2023-01-26", "5p-9p", ""),
  ev("Museum After Dark", "Anchorage Museum", "Anchorage", "2023-01-26", "6:30p-9:30p", ""),
  ev("Rick Brooks", "Humpy’s", "Anchorage", "2023-01-26", "7:30p-11p", ""),
  ev("Jared Woods", "Flattop Pizza & Pasta", "Anchorage", "2023-01-26", "7p-10p", ""),
  ev("Community Jam", "Guido’s Pizza", "Anchorage", "2023-01-26", "7p-10p", ""),
  ev("The AKoustic Project", "Tailgater’s Sport’s Bar & Grill (Wasilla)", "Anchorage", "2023-01-26", "7p-10p", ""),
  ev("Will Johnson", "Garcia’s (Eagle River)", "Anchorage", "2023-01-26", "8p-11p", ""),
  ev("Open Mic Night", "The Marlin Bar (Fairbanks)", "Anchorage", "2023-01-26", "8p-11p", ""),
  ev("The Jukebox Karaoke", "The Peanut Farm", "Anchorage", "2023-01-26", "8p-11p", ""),
  ev("Open Mic w/ Cody Kniceley", "4 Royle Parkers (Soldotna)", "Anchorage", "2023-01-26", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2023-01-26", "8p-2a", ""),
  ev("Bluegrass is Back!", "Van’s Dive Bar", "Anchorage", "2023-01-26", "9p-12a", ""),
  ev("Local Acoustic Showcase feat: Nicholas Holiday & Ukulele Russ", "Williwaw Social", "Anchorage", "2023-01-26", "9p-12a", ""),
  ev("Open Decks", "Koot’s", "Anchorage", "2023-01-26", "9p-2a", ""),

  // ═══ ANCHORAGE — Friday January 27th ═══
  ev("Marc Brown & The Blues Crew", "The Marlin (Fairbanks)", "Anchorage", "2023-01-27", "10p-2a", ""),
  ev("Friday Nights with DJ MANNY", "The Crowbar (Fairbanks)", "Anchorage", "2023-01-27", "10p-3a", ""),
  ev("Live Music from Tom Bargelski", "Sullivan’s Steakhouse", "Anchorage", "2023-01-27", "5:30p-8:30p", ""),
  ev("Open Mic Night", "Black Birch Books (Wasilla)", "Anchorage", "2023-01-27", "5p-7p", ""),
  ev("The 7 Duo", "Odd Man Rush (Eagle River)", "Anchorage", "2023-01-27", "5p-9p", ""),
  ev("Danger Money", "O’Malley’s on the Green", "Anchorage", "2023-01-27", "6:30p-9:30", ""),
  ev("Traditional Irish Music", "Kenai Peninsula College Ward Building (Kenai)", "Anchorage", "2023-01-27", "6:30p-9p", ""),
  ev("Acoustic Steak Night with Bill \"Woody\" Reeves!", "American Legion Spenard Post 28", "Anchorage", "2023-01-27", "6p-8p", ""),
  ev("2023 Rondy Royalty Pageant Preliminary Competition", "Bear Paw Bar & Grill", "Anchorage", "2023-01-27", "6p-9:30p", ""),
  ev("Laura Cortese and the Dance Cards", "Alaska Center for the Performing Arts", "Anchorage", "2023-01-27", "7:30p-9:20p", "", "dance"),
  ev("Comedy Show w/ Billy Wayne Davis", "Everett’s (Wasilla)", "Anchorage", "2023-01-27", "7:30p-9p", "", "comedy"),
  ev("Friday Night Feast w/ 100 Proof Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2023-01-27", "7p-10p", ""),
  ev("Medium Build (Sold Out)", "Bear Tooth Theatrepub", "Anchorage", "2023-01-27", "7p-10p", ""),
  ev("Williwaw Blue", "Inlet Towers", "Anchorage", "2023-01-27", "7p-10p", ""),
  ev("Open Mic Night", "Floaters (Big Lake)", "Anchorage", "2023-01-27", "7p-12a", ""),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2023-01-27", "7p-12a", ""),
  ev("Anchorage Folk Festival Main Stage Performances", "Wendy Williamson Auditorium", "Anchorage", "2023-01-27", "7p-12a", "", "festival"),
  ev("Out To Lunch: (extended weekend!!)", "Anchorage Community Theater", "Anchorage", "2023-01-27", "7p-8:30p", ""),
  ev("Scared Scriptless Welcome Back Show!", "49th State Brewing (Anchorage)", "Anchorage", "2023-01-27", "7p-9p", "", "comedy"),
  ev("Tarzan", "Glenn Massay Theater (Palmer)", "Anchorage", "2023-01-27", "7p-9p", ""),
  ev("UAS Drag Show w/ April Carrion", "UAS Recreation Center (Juneau)", "Anchorage", "2023-01-27", "7p-9p", "", "comedy"),
  ev("Nothin' But Trouble", "Humpy’s", "Anchorage", "2023-01-27", "8:30p-1:30a", ""),
  ev("The Jukebox Karaoke Roadshow", "The Gaslight Bar", "Anchorage", "2023-01-27", "8p-11p", ""),
  ev("The Stack Live", "American Legion Post 33 (Chugiak)", "Anchorage", "2023-01-27", "8p-12a", ""),
  ev("Reggae & Salsa feat.DJ PrinceAlbert", "The Carousel Lounge", "Anchorage", "2023-01-27", "8p-2a", "", "dance"),
  ev("The Cellar Dweller Comedy Showcase", "Broken Blender", "Anchorage", "2023-01-27", "8p-9:30p", "", "comedy"),
  ev("DJ Lloyds Noize's Essentials: Harry Styles", "Williwaw Social", "Anchorage", "2023-01-27", "9p-1:30a", ""),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2023-01-27", "9p-11:30p", ""),
  ev("Hot Mess", "Kenai Joes Taphouse (Kenai)", "Anchorage", "2023-01-27", "9p-12a", ""),
  ev("Unknowns w/ Spank The Dog", "Van’s Dive Bar", "Anchorage", "2023-01-27", "9p-12a", ""),
  ev("Ski Bunny Ball", "Sitzmark (Girdwood)", "Anchorage", "2023-01-27", "9p-1a", ""),
  ev("DJ Covy", "Bernie’s Bungalow", "Anchorage", "2023-01-27", "9p-2a", ""),
  ev("Todd Grebe", "Fairview Inn (Talkeetna)", "Anchorage", "2023-01-27", "9p-2a", ""),
  ev("Sideways, Greenhouse And The Store!", "Koot’s", "Anchorage", "2023-01-27", "9p-2a", ""),

  // ═══ ANCHORAGE — Saturday January 28th ═══
  ev("Hot Mess", "The Maverick Saloon (Soldotna)", "Anchorage", "2023-01-28", "10p-1a", ""),
  ev("Glacier Blues Band", "The Carousel Lounge", "Anchorage", "2023-01-28", "10p-2a", ""),
  ev("90's Throwback Party w/ DJ Brazen", "Klondike Mike’s & Main Street Grill (Palmer)", "Anchorage", "2023-01-28", "10p-2a", ""),
  ev("Walking on a Dream: Indie Dance Party w/ DJ Gre", "Williwaw Social", "Anchorage", "2023-01-28", "10p-2a", "", "dance"),
  ev("Hip Hop Night with DJ Manny", "The Crowbar (Fairbanks)", "Anchorage", "2023-01-28", "10p-3a", ""),
  ev("Gigi's Drag Brunch starring April Carrion", "TK Maguire’s (Juneau)", "Anchorage", "2023-01-28", "12p-3p", "", "community"),
  ev("Nothin' But Trouble at the Alaska Brew Fest", "Dena’ina Civic & Convention Center", "Anchorage", "2023-01-28", "12p-4p", "", "festival"),
  ev("Anchorage Folk Festival Main Stage Performances", "Wendy Williamson Auditorium", "Anchorage", "2023-01-28", "1p-10p", "", "festival"),
  ev("Westchester Family Skate Day", "Westchester Lagoon", "Anchorage", "2023-01-28", "1p-3p", ""),
  ev("Tarzan", "Glenn Massay Theater (Palmer)", "Anchorage", "2023-01-28", "2p-4p & 7p-9p", ""),
  ev("Bill \"Woody\" Reeves live at the Afterglow", "Arctic Valley Ski Area", "Anchorage", "2023-01-28", "2p-5p", ""),
  ev("Stage Management Workshop", "Anchorage Community Theatre", "Anchorage", "2023-01-28", "3p-5p", ""),
  ev("Cold Country Bluegrass", "Hatcher’s Pass Lodge (Palmer)", "Anchorage", "2023-01-28", "4p-7p", ""),
  ev("The Stack Live at the Alaska Brew Fest", "Dena’ina Civic & Convention Center", "Anchorage", "2023-01-28", "6p-10p", "", "festival"),
  ev("Dungeons & Drag-Uns! A Fantastical Drag Show", "Red Dog Saloon (Juneau)", "Anchorage", "2023-01-28", "7:30p-11:45p", "", "comedy"),
  ev("Anchorage Symphony's \"Latin Vistas\"", "Alaska Center for the Performing Arts", "Anchorage", "2023-01-28", "7:30p-9:30p", ""),
  ev("Laura Cortese & the Dance Cards", "Gerald C. Wilson Auditorium (Kodiak)", "Anchorage", "2023-01-28", "7:30p-9:30p", "", "dance"),
  ev("Roland Roberts Band", "Tolsona Lake Lodge (Glenallen)", "Anchorage", "2023-01-28", "7p-10p", ""),
  ev("Sweet Cheeks Cabaret", "Broken Blender", "Anchorage", "2023-01-28", "7p-8:30p", ""),
  ev("Lights Down Low Concert Series: Pipeline Vocal Project", "Cafecito Bonito", "Anchorage", "2023-01-28", "7p-9p", ""),
  ev("Comedian Billy Wayne Davis", "Koot’s", "Anchorage", "2023-01-28", "7p-9p & 9:30p-10:30p", ""),
  ev("Juneau Symphony Concert: Transformations", "Juneau-Douglas High School (Juneau)", "Anchorage", "2023-01-28", "8p-10p", ""),
  ev("Nothin’ But Karma", "Serrano’s Mexican Grill", "Anchorage", "2023-01-28", "8p-11p", ""),
  ev("Danger Money Live at The Moose!", "Anchorage Moose Lodge", "Anchorage", "2023-01-28", "8p-12a", ""),
  ev("Chris Crain", "Broken Blender", "Anchorage", "2023-01-28", "8p-12a", ""),
  ev("Folk Week Music Workshops", "UAA Professional Sciences Building", "Anchorage", "2023-01-28", "9:30a-5:15p", ""),
  ev("Rebel Blues", "Humpy’s", "Anchorage", "2023-01-28", "9:30p-1a", ""),
  ev("Indie Showcase feat: Paul Jacks", "Williwaw Social", "Anchorage", "2023-01-28", "9p-10p", ""),
  ev("Valley Below", "The Boatel (Fairbanks)", "Anchorage", "2023-01-28", "9p-11p", ""),
  ev("Ski Bunny Ball", "The Sitzmark (Girdwood)", "Anchorage", "2023-01-28", "9p-1a", ""),
  ev("The Nameless, Brainhole, & 3000-21!", "Van’s Dive Bar", "Anchorage", "2023-01-28", "9p-1a", ""),
  ev("Sideways, Greenhouse And The Store!", "Koot’s", "Anchorage", "2023-01-28", "9p-2a", ""),
  ev("Tony Taylor's Birthday Bash", "The Marlin (Fairbanks)", "Anchorage", "2023-01-28", "9p-2a", ""),

  // ═══ ANCHORAGE — Sunday January 29th ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2023-01-29", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2023-01-29", "10p-2a", ""),
  ev("Folk Week Music Workshops", "UAA Professional Sciences Building", "Anchorage", "2023-01-29", "11:15a-5:15p", ""),
  ev("Rasmuson IAA Workshop and Work Jam", "The Nave Spenard", "Anchorage", "2023-01-29", "2p-4p", ""),
  ev("A Playwriting Workshop: Writing Your Show", "Anchorage Community Theater", "Anchorage", "2023-01-29", "2p-5p", "", "theatre"),
  ev("Earhoney live at the Afterglow!", "Arctic Valley Ski Area", "Anchorage", "2023-01-29", "2p-5p", ""),
  ev("Juneau Symphony Concert: Transformations", "Juneau-Douglas High School (Juneau)", "Anchorage", "2023-01-29", "3p-5p", ""),
  ev("Armin Abdihodzic & Thomas Tallant", "Anchorage Lutheran Church", "Anchorage", "2023-01-29", "4:30p-6:30p", ""),
  ev("Cirque Mechanics", "Hering Auditorium (Fairbanks)", "Anchorage", "2023-01-29", "4p-6p", ""),
  ev("Dancing Lights Trail", "Fairbanks Ice Art Park (Fairbanks)", "Anchorage", "2023-01-29", "5p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2023-01-29", "8:30p-10p", "", "comedy"),
  ev("Open Mic Jam", "Humpys", "Anchorage", "2023-01-29", "8p-11p", ""),
  ev("Karaoke at the Marlin", "The Marlin Bar (Fairbanks)", "Anchorage", "2023-01-29", "8p-12a", ""),
  ev("Open Mic! Overlorded by Wash Your Hands", "Van’s Dive Bar", "Anchorage", "2023-01-29", "8p-12a", ""),
  ev("AK Rockstar Karaoke Sunday", "The Carousel Lounge", "Anchorage", "2023-01-29", "8p-2a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2023-01-29", "9p-12a", ""),
  ev("Karaoke", "Four Corner’s Lounge (Palmer)", "Anchorage", "2023-01-29", "9p-2a", ""),

  // ═══ ANCHORAGE — Monday January 30th ═══
  ev("All Ages Open Jam", "Temple Studios Community Center (Seward)", "Anchorage", "2023-01-30", "5p-6:30p", ""),
  ev("Open Mic Night", "Auxiliary VFW 1685", "Anchorage", "2023-01-30", "6:30p-8:30p", ""),
  ev("Jazz Night Open Jam", "K Street Market", "Anchorage", "2023-01-30", "6:30p-8:30p", ""),
  ev("Karaoke Night", "The Crowbar (Fairbanks)", "Anchorage", "2023-01-30", "8p-12a", ""),
  ev("The Monday Mic at Koots", "Koot’s", "Anchorage", "2023-01-30", "9p-12a", ""),
  ev("Jay Straw's Bass to Mouth Mondays!", "Van’s Dive Bar", "Anchorage", "2023-01-30", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday January 31st ═══
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2023-01-31", "10p-12a", ""),
  ev("Acoustic Song Circle", "American Legion Spenard Post 28", "Anchorage", "2023-01-31", "6:30p-9:30p", ""),
  ev("Play Reader's Club", "Anchorage Community Theatre", "Anchorage", "2023-01-31", "6p-8p", "", "theatre"),
  ev("The Open Stage", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2023-01-31", "7p-10p", ""),
  ev("Laura Cortese & the Dance Cards", "Northstar Theater (Cordova)", "Anchorage", "2023-01-31", "7p-9p", "", "dance"),
  ev("Blackwater Railroad & Friends", "Seward Alehouse (Seward)", "Anchorage", "2023-01-31", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2023-01-31", "8p-2a", ""),
  ev("OPEN JAM w/ Daylight Mike", "Van’s Dive Bar", "Anchorage", "2023-01-31", "9p-12a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2023-01-31", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2023-01-31", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday February 1st ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2023-02-01", "10p-12a", ""),
  ev("Open Mic 8pm", "Lil Babe’s Cocktail Lounge", "Anchorage", "2023-02-01", "12a", ""),
  ev("Culture Shift- February!", "Williwaw Social", "Anchorage", "2023-02-01", "6p-7p", ""),
  ev("Lulu Small live", "Palmer Alehouse (Palmer)", "Anchorage", "2023-02-01", "6p-9p", ""),
  ev("Shawn Pacarro", "Humpys", "Anchorage", "2023-02-01", "7:30p-11p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2023-02-01", "7p-10p", ""),
  ev("Witty Youngman", "PubHouse", "Anchorage", "2023-02-01", "7p-10p", ""),
  ev("Open Mic", "Schwabenhof (Wasilla)", "Anchorage", "2023-02-01", "7p-12a", ""),
  ev("Laura Cortese & the Dance Cards", "Sitka Performing Arts Center (Sitka)", "Anchorage", "2023-02-01", "7p-9p", "", "dance"),
  ev("Beats & Beer: Music Bingo", "Williwaw Social", "Anchorage", "2023-02-01", "7p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2023-02-01", "8:30p-10p", "", "comedy"),
  ev("Karaoke", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2023-02-01", "8p-12a", ""),
  ev("Country Night with DJ Lefty", "Koot’s", "Anchorage", "2023-02-01", "8p-12a", ""),
  ev("Jukebox Karaoke Roadshow", "Eddie’s Sports Bar", "Anchorage", "2023-02-01", "9p-12a", ""),
  ev("KARAOKE w/ The Milkman!", "Van’s Dive Bar", "Anchorage", "2023-02-01", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2023-02-01", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday March 29th ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2023-03-29", "10p-12a", ""),
  ev("Open Mic 8pm", "Lil Babe’s Cocktail Lounge", "Anchorage", "2023-03-29", "12a", ""),
  ev("Artist-in-Residence: Bethlehem Shalom", "Anchorage Museum", "Anchorage", "2023-03-29", "12p-2p", ""),
  ev("Larry Zarella live", "Palmer Alehouse (Palmer)", "Anchorage", "2023-03-29", "6p-9p", ""),
  ev("Beats. Beer. Bingo.", "Williwaw Social", "Anchorage", "2023-03-29", "7:30p-9:30p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2023-03-29", "7p-10p", ""),
  ev("Open Mic", "Schwabenhof (Wasilla)", "Anchorage", "2023-03-29", "7p-12a", ""),
  ev("Chris Porter Live", "North Pole Alehouse (North Pole)", "Anchorage", "2023-03-29", "7p-9p", ""),
  ev("Mountainside Open Mic & Art Night", "The Rookery Café (Juneau)", "Anchorage", "2023-03-29", "7p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2023-03-29", "8:30p-10p", "", "comedy"),
  ev("Karaoke", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2023-03-29", "8p-11p", ""),
  ev("Country Night with DJ Lefty", "Koot’s", "Anchorage", "2023-03-29", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2023-03-29", "8p-2a", ""),
  ev("Jukebox Karaoke Roadshow", "Eddie’s Sports Bar", "Anchorage", "2023-03-29", "9p-12a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2023-03-29", "9p-12a", ""),
  ev("KARAOKE w/ The Milkman!", "Van’s Dive Bar", "Anchorage", "2023-03-29", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2023-03-29", "9p-2a", ""),

  // ═══ ANCHORAGE — Thursday March 30th ═══
  ev("Karaoke 8pm", "Lil Babe’s Cocktail Lounge", "Anchorage", "2023-03-30", "12a", ""),
  ev("Melissa \"Jazzmom\" Fischer", "Sullivan’s Steakhouse", "Anchorage", "2023-03-30", "5:30p-8:30p", ""),
  ev("Museum After Dark", "Anchorage Museum", "Anchorage", "2023-03-30", "6:30p-9:30p", ""),
  ev("Middle School Large Group Festival Orchestra II", "Bartlett High School", "Anchorage", "2023-03-30", "6p-7:30p", "", "festival"),
  ev("Jared Woods", "Humpy’s", "Anchorage", "2023-03-30", "7:30p-11p", ""),
  ev("Witty Youngman", "PubHouse", "Anchorage", "2023-03-30", "7p-10p", ""),
  ev("The AKoustic Project", "Tailgater’s Sport’s Bar & Grill (Wasilla)", "Anchorage", "2023-03-30", "7p-10p", ""),
  ev("Monte Montepare", "Broken Blender", "Anchorage", "2023-03-30", "7p-9p", ""),
  ev("Open Mic", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2023-03-30", "8p-11p", ""),
  ev("Nothin’ But Trouble", "Garcia’s Cantina & Café (Eagle River)", "Anchorage", "2023-03-30", "8p-11p", ""),
  ev("Open Mic Night", "The Marlin Bar (Fairbanks)", "Anchorage", "2023-03-30", "8p-11p", ""),
  ev("The Jukebox Karaoke", "The Peanut Farm", "Anchorage", "2023-03-30", "8p-11p", ""),
  ev("Open Mic w/ Cody Kniceley", "4 Royle Parkers (Soldotna)", "Anchorage", "2023-03-30", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2023-03-30", "8p-2a", ""),
  ev("Mad Myrna's Comedy Show Case", "Mad Myrna’s", "Anchorage", "2023-03-30", "9p-11p", "", "comedy"),
  ev("Karaoke Night", "Four Corner’s Lounge (Palmer)", "Anchorage", "2023-03-30", "9p-1a", ""),

  // ═══ ANCHORAGE — Friday March 31st ═══
  ev("Great Mass in C minor", "Alaska Chamber Singers: Mozart", "Anchorage", "2023-03-31", "", ""),
  ev("Caribbean Night w/ DJ Militant & DJ Jose", "Koot’s", "Anchorage", "2023-03-31", "10:30p-2a", ""),
  ev("The Stack", "Koot’s", "Anchorage", "2023-03-31", "10:30p-2a", ""),
  ev("The Glacier Hoppers", "The Mug-Shot Saloon (Wasilla)", "Anchorage", "2023-03-31", "10p-2:30a", ""),
  ev("Hip-Hop Fridays", "International Hotel & Bar (Fairbanks)", "Anchorage", "2023-03-31", "10p-2a", ""),
  ev("DJ Manny", "The Crowbar (Fairbanks)", "Anchorage", "2023-03-31", "10p-3:30a", ""),
  ev("Being QT", "The Writer’s Block Bookstore & Café", "Anchorage", "2023-03-31", "4p-7p", ""),
  ev("Live Music from Tom Bargelski", "Sullivan’s Steakhouse", "Anchorage", "2023-03-31", "5:30p-8:30p", ""),
  ev("Zen Trembles Live", "O’Malley’s on the Green", "Anchorage", "2023-03-31", "6:30p-9:30", ""),
  ev("Free Show: Hot and Energetic Universe", "Marie Drake Planetarium (Juneau)", "Anchorage", "2023-03-31", "6p-8:30p", ""),
  ev("Monte Montepare", "Alpenglow Coffee House (Girdwood)", "Anchorage", "2023-03-31", "6p-8p", ""),
  ev("Acoustic Steak Night with Travis Watson & Friends!", "American Legion Post 28", "Anchorage", "2023-03-31", "6p-9p", ""),
  ev("Pulse Dance Company in Concert 2023", "Alaska Center for the Performing Arts", "Anchorage", "2023-03-31", "7:30p-8:30p", "", "dance"),
  ev("Alaska Chamber Singers: Mozart - Great Mass in C minor", "Cathedral of Our Lady Guadalupe", "Anchorage", "2023-03-31", "7:30p-9p", ""),
  ev("Emily Anderson FemCon Concert", "UAF Charles Davis Concert Hall (Fairbanks)", "Anchorage", "2023-03-31", "7:30p-9p", ""),
  ev("Comedian Trenton Davis", "Everett’s", "Anchorage", "2023-03-31", "730p-9p", ""),
  ev("Williwaw Blue", "Inlet Towers", "Anchorage", "2023-03-31", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2023-03-31", "7p-11p", ""),
  ev("Open Mic Night", "Floaters (Big Lake)", "Anchorage", "2023-03-31", "7p-12a", ""),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2023-03-31", "7p-12a", ""),
  ev("Daydreaming in Spanglish: Spoken Word Poetry by Raquel Polanco", "Cafecito Bonito", "Anchorage", "2023-03-31", "7p-9p", ""),
  ev("The Book Club", "Cyrano’s Theatre Building", "Anchorage", "2023-03-31", "7p-9p", ""),
  ev("Chris Porter Live at Goldie's AK!", "Goldies AK (Fairbanks)", "Anchorage", "2023-03-31", "7p-9p", ""),
  ev("Chris Porter Live in AK!", "The Spur (Fairbanks)", "Anchorage", "2023-03-31", "7p-9p", ""),
  ev("The Vintage Retro", "Humpy’s", "Anchorage", "2023-03-31", "8:30p-1:30a", ""),
  ev("The Jukebox Karaoke Roadshow", "The Gaslight Bar", "Anchorage", "2023-03-31", "8p-11p", ""),
  ev("Sweet Cheeks Cabaret: 10th Anniversary Hullabaloo: Pandora's Box", "wBroken Blender", "Anchorage", "2023-03-31", "8p-9:30p", ""),
  ev("Jimmy Sandy", "Fairview Inn (Talkeetna)", "Anchorage", "2023-03-31", "9-1a", ""),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2023-03-31", "9p-11:30p", ""),
  ev("3000-21, Nalimu and special guests live", "Van’s Dive Bar", "Anchorage", "2023-03-31", "9p-12a", ""),
  ev("Friday Night Dance Lounge", "Alaska Dance Promotions", "Anchorage", "2023-03-31", "9p-1a", "", "dance"),
  ev("Past Our Prime", "Sitzmark (Girdwood)", "Anchorage", "2023-03-31", "9p-1a", ""),

  // ═══ ANCHORAGE — Saturday April 1st ═══
  ev("Joke's On You", "Arctic Entries", "Anchorage", "2023-04-01", "", "", "comedy"),
  ev("First Saturdays Live Country Music feat. Todd Grebe & Cold Country", "The Carousel Lounge", "Anchorage", "2023-04-01", "10p-2a", ""),
  ev("Loaded Karma LIVE 9p-1aWilliwaw Social - Bad Bunny Night w/ DJ Joe Brady & DJ Jose", "Van’s Dive Bar", "Anchorage", "2023-04-01", "10p-2a", ""),
  ev("Live Music at the Merry Marmot Festival! Zen Trembles, Matt & Co, Loaded Karma, & The Amalgajam!", "Arctic Valley Ski Area", "Anchorage", "2023-04-01", "11:30a-8:30p", "", "festival"),
  ev("Community Drumming Circle", "Mountain View Public Library", "Anchorage", "2023-04-01", "3-4:30p", "", "community"),
  ev("2023 Pond Skim Contest", "Hilltop Ski Area", "Anchorage", "2023-04-01", "3p-5p", ""),
  ev("Poetry Night", "UAA Residence Life", "Anchorage", "2023-04-01", "5p-11p", ""),
  ev("Sound Movement Environment: Burtner and Sperling performance", "Anchorage Museum of History and Art", "Anchorage", "2023-04-01", "5p-8p", ""),
  ev("North x North Arctic Dance Party: Hip Hop Showcase feat. SlinCraze & Air Jazz", "49th State Brewing", "Anchorage", "2023-04-01", "6:30p-8:30p", "", "dance"),
  ev("North x North Arctic Dance Party: The Builders & the Butchers", "Williwaw Social", "Anchorage", "2023-04-01", "6:30p-8:30p", "", "dance"),
  ev("Anchorage Community Concert Band: Going Places", "Alaska Center for the Performing Arts", "Anchorage", "2023-04-01", "7:30p-9p", ""),
  ev("Improvaganza 2023", "Christ Community Church", "Anchorage", "2023-04-01", "7p-10p", ""),
  ev("Arctic Entries - Joke's On You", "Sheldon Community Arts Hangar (Talkeetna)", "Anchorage", "2023-04-01", "7p-8:10p", "", "comedy"),
  ev("Comedian Trenton Davis", "Koot’s", "Anchorage", "2023-04-01", "7p-8:30p & 9p-10:30p", ""),
  ev("10 Dollar Bet", "Organic Oasis", "Anchorage", "2023-04-01", "7p-9p", ""),
  ev("Viva Spenard 14", "Koot’s", "Anchorage", "2023-04-01", "8:30p-11p", ""),
  ev("Danger Money Live", "Anchorage Moose Lodge", "Anchorage", "2023-04-01", "8p-12a", ""),
  ev("Sweet Cheeks Cabaret: 10th Anniversary Hullabaloo: It's Phoebe's Line Anyway", "Broken Blender", "Anchorage", "2023-04-01", "8p-9:30p", ""),
  ev("Unknowns", "Humpy’s", "Anchorage", "2023-04-01", "9:30p-1a", ""),

  // ═══ ANCHORAGE — Sunday April 2nd ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2023-04-02", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2023-04-02", "10p-2a", ""),
  ev("Sweet Cheeks Cabaret: 10th Anniversary Hullabaloo: Violet's Voluptuously Visual Show", "Broken Blender", "Anchorage", "2023-04-02", "12:30p-2p", ""),
  ev("J Stevens Live", "Arctic Valley Ski Area", "Anchorage", "2023-04-02", "12p-3p", ""),
  ev("Anchorage Symphony's \"Family Concert\"", "Alaska Center for the Performing Arts", "Anchorage", "2023-04-02", "3p-4p", ""),
  ev("The Book Club", "Cyrano’s Theatre Building", "Anchorage", "2023-04-02", "3p-5p", ""),
  ev("Summits Mainstage Concert", "Juneau-Douglas High School (Juneau)", "Anchorage", "2023-04-02", "3p-5p", ""),
  ev("Phil Gilcrease Live Looping Solo Show", "Arctic Valley Ski Area", "Anchorage", "2023-04-02", "4p-7p", ""),
  ev("Sunday Swing", "Red Dog Saloon (Juneau)", "Anchorage", "2023-04-02", "6p-9p", "", "dance"),
  ev("No Starving Artists: Athena Nuff and Synclaire Butler", "Out North Theatre", "Anchorage", "2023-04-02", "7p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2023-04-02", "8:30p-10p", "", "comedy"),
  ev("Open Mic Jam", "Humpys", "Anchorage", "2023-04-02", "8p-11p", ""),
  ev("Karaoke at the Marlin", "The Marlin Bar (Fairbanks)", "Anchorage", "2023-04-02", "8p-12a", ""),
  ev("Open Mic! Overlorded by Wash Your Hands", "Van’s Dive Bar", "Anchorage", "2023-04-02", "8p-12a", ""),
  ev("AK Rockstar Karaoke Sunday", "The Carousel Lounge", "Anchorage", "2023-04-02", "8p-2a", ""),
  ev("Karaoke", "Four Corner’s Lounge (Palmer)", "Anchorage", "2023-04-02", "9p-2a", ""),

  // ═══ ANCHORAGE — Monday April 3rd ═══
  ev("All Ages Open Jam", "Temple Studios Community Center (Seward)", "Anchorage", "2023-04-03", "5p-6:30p", ""),
  ev("Open Mic Night", "Auxiliary VFW 1685", "Anchorage", "2023-04-03", "6:30p-8:30p", ""),
  ev("Jazz Night Open Jam", "K Street Market", "Anchorage", "2023-04-03", "6:30p-8:30p", ""),
  ev("Middle School Large Group Festival Choir I", "West High School", "Anchorage", "2023-04-03", "6p-7:30p", "", "festival"),
  ev("B4UDie Comedy Fest Kickoff Party", "Van’s Dive Bar", "Anchorage", "2023-04-03", "6p-9p", "", "comedy"),
  ev("Karaoke Night", "The Crowbar (Fairbanks)", "Anchorage", "2023-04-03", "8p-12a", ""),
  ev("The Monday Mic at Koots", "Koot’s", "Anchorage", "2023-04-03", "9p-12a", ""),
  ev("Jay Straw's Bass to Mouth Mondays!", "Van’s Dive Bar", "Anchorage", "2023-04-03", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday April 4th ═══
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2023-04-04", "10p-12a", ""),
  ev("Taco Tuesday Open Mic w/Uncle Jim!", "American Legion Spenard Post 28", "Anchorage", "2023-04-04", "6:30p-9:30p", ""),
  ev("The Open Stage", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2023-04-04", "7p-10p", ""),
  ev("Local Legends Comedy Showcase", "Koot’s", "Anchorage", "2023-04-04", "7p-10p", "", "comedy"),
  ev("Witty Youngman", "Orso’s", "Anchorage", "2023-04-04", "7p-10p", ""),
  ev("Blackwater Railroad & Friends", "Seward Alehouse (Seward)", "Anchorage", "2023-04-04", "8p-12a", ""),
  ev("Open Jam Tuesday", "Van’s Dive Bar", "Anchorage", "2023-04-04", "9p-12a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2023-04-04", "9p-1a", ""),

  // ═══ ANCHORAGE — Wednesday April 5th ═══
  ev("Open Mic 8pm", "Lil Babe’s Cocktail Lounge", "Anchorage", "2023-04-05", "12a", ""),
  ev("Middle School Large Group Festival Choir II", "West High School", "Anchorage", "2023-04-05", "6p-7:30p", "", "festival"),
  ev("Culture Shift- April!", "Williwaw Social", "Anchorage", "2023-04-05", "6p-8p", ""),
  ev("Roland Roberts live", "Palmer Alehouse (Palmer)", "Anchorage", "2023-04-05", "6p-9p", ""),
  ev("Cheechako Showcase", "Koot’s", "Anchorage", "2023-04-05", "7p-8:30p", ""),
  ev("Best of B4UDie Talkeetna", "Sheldon Community Arts Hangar (Talkeetna)", "Anchorage", "2023-04-05", "7p-8:30p", ""),
  ev("B4UDie BIPOC Comedy", "Cafecito Bonito", "Anchorage", "2023-04-05", "7p-9p", "", "comedy"),
  ev("Music in the Lounge: AJ Yonderly", "Venue (Fairbanks)", "Anchorage", "2023-04-05", "7p-9p", ""),
  ev("Cheechako Showcase 2", "Koot’s", "Anchorage", "2023-04-05", "9p-10:30p", ""),

  // ═══ ANCHORAGE — Saturday June 3rd ═══
  ev("Glacier Hoppers", "Mug-Shot Saloon (Wasilla)", "Anchorage", "2023-06-03", "10p-2:30a", ""),
  ev("Hot Mess", "Koot’s", "Anchorage", "2023-06-03", "10p-2a", ""),
  ev("Saturday Story Time", "Kenai Community Library (Kenai)", "Anchorage", "2023-06-03", "11:30a-12:30p", "", "community"),
  ev("The After Show w/ Joe Brady", "Williwaw Social", "Anchorage", "2023-06-03", "11p-2a", ""),
  ev("Sunlit Music Festival", "Growden Memorial Park (Fairbanks)", "Anchorage", "2023-06-03", "12p-12a", "", "festival"),
  ev("Anchorage Bowl Chamber Orchestra", "Kenai Senior Center (Kenai)", "Anchorage", "2023-06-03", "2p-3:30p", ""),
  ev("Spenard Jazz Fest 2023: Backyard Jazz Jam", "Heart of Spenard", "Anchorage", "2023-06-03", "2p-8p", "", "festival"),
  ev("Dance Hike w/ Mykey T", "Alaska Dance Promotions", "Anchorage", "2023-06-03", "3p-6p", "", "dance"),
  ev("Alaska Jazz Workshop: Free Downtown Jazz Concerts", "Peratrovich Park (Anchorage)", "Anchorage", "2023-06-03", "4p-6p", ""),
  ev("KidStock AK 9am", "Alaska State Fairgrounds (Palmer)", "Anchorage", "2023-06-03", "5p", ""),
  ev("The June Jam", "The Basement (Fairbanks)", "Anchorage", "2023-06-03", "6:30p-1a", ""),
  ev("Music In The Mountains w/ Zen Trembles", "Eagle River Nature Center (Eagle River)", "Anchorage", "2023-06-03", "6p-10p", ""),
  ev("Smash Mouth Live in Concert!", "Matanuska Brewing Company (Eagle River)", "Anchorage", "2023-06-03", "6p-10p", ""),
  ev("Atmosphere with DJ Abilities, Sa-Roc and HEBL", "Williwaw Social", "Anchorage", "2023-06-03", "6p-11p", ""),
  ev("EZ Does It Dance Lessons", "Downtown Bear Paw & Grill", "Anchorage", "2023-06-03", "6p-9p", "", "dance"),
  ev("Ladies Night Out", "Koot’s", "Anchorage", "2023-06-03", "7:30p-9:30p", ""),
  ev("BenJammin & the Jammin Band LIVE", "Palmer Alehouse (Palmer)", "Anchorage", "2023-06-03", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2023-06-03", "7p-11p", ""),
  ev("Weekly Social Dance", "Anchorage Social Dance Club", "Anchorage", "2023-06-03", "7p-11p", "", "dance"),
  ev("Roland Roberts Band", "Creekbend Café (Hope)", "Anchorage", "2023-06-03", "7p-11p", ""),
  ev("Trapper Creek Bluegrass Festival 12a-12a Broken Blender - Sweet Cheeks' Cabaret", "Boot’s Bison Ranch (Trapper Creek)", "Anchorage", "2023-06-03", "8p-9:30p", "", "festival"),
  ev("Cold Fusion", "Humpy’s", "Anchorage", "2023-06-03", "9:30p-1a", ""),
  ev("HarpDaddy Returns feat Madeline Smith", "Yukon Bar (Seward)", "Anchorage", "2023-06-03", "9p-1:30a", ""),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2023-06-03", "9p-11:30p", ""),
  ev("Folk Medicine and Lilac", "Van’s Dive Bar", "Anchorage", "2023-06-03", "9p-12a", ""),
  ev("Solar Gain", "Fairview Inn (Talkeetna)", "Anchorage", "2023-06-03", "9p-1a", ""),

  // ═══ ANCHORAGE — Sunday June 4th ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2023-06-04", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2023-06-04", "10p-2a", ""),
  ev("Trapper Creek Bluegrass Festival", "Boot’s Bison Ranch (Trapper Creek)", "Anchorage", "2023-06-04", "12a-6p", "", "festival"),
  ev("Recycle Revival 2023 w/ Feral Katz, Carhartt Brothers, Denali Cooks, and H3", "Skeetawk (Hatcher’s Pass)", "Anchorage", "2023-06-04", "2p-8p", ""),
  ev("Juneau Symphony: Showdowns Concert", "Juneau-Douglas High School (Juneau)", "Anchorage", "2023-06-04", "3p-5p", ""),
  ev("Sun Splash Sundaze w/ DJ Militant", "Williwaw Social", "Anchorage", "2023-06-04", "5p-9p", ""),
  ev("Open Mic", "Alaska Fish House (Ketchikan)", "Anchorage", "2023-06-04", "6p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2023-06-04", "8:30p-10p", "", "comedy"),
  ev("Open Mic Jam", "Humpys", "Anchorage", "2023-06-04", "8p-11p", ""),
  ev("Karaoke at the Marlin", "The Marlin Bar (Fairbanks)", "Anchorage", "2023-06-04", "8p-12a", ""),
  ev("Open Mic! Overlorded by Wash Your Hands", "Van’s Dive Bar", "Anchorage", "2023-06-04", "8p-12a", ""),
  ev("Sunday Funday Karaoke", "The Carousel Lounge", "Anchorage", "2023-06-04", "8p-2a", ""),
  ev("Brothers of Tom Live", "Yukon Bar (Seward)", "Anchorage", "2023-06-04", "9p-1:30a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2023-06-04", "9p-12a", ""),
  ev("Karaoke", "Four Corner’s Lounge (Palmer)", "Anchorage", "2023-06-04", "9p-2a", ""),

  // ═══ ANCHORAGE — Monday June 5th ═══
  ev("Dance PAWty With My Pet", "Anchorage Classical Ballet Academy", "Anchorage", "2023-06-05", "10a-12p & 4p-6p", "", "dance"),
  ev("All Ages Open Jam", "Temple Studios Community Center (Seward)", "Anchorage", "2023-06-05", "5p-6:30p", ""),
  ev("Open Mic Night", "Auxiliary VFW 1685", "Anchorage", "2023-06-05", "6:30p-8:30p", ""),
  ev("Jazz Night Open Jam", "K Street Market", "Anchorage", "2023-06-05", "6:30p-8:30p", ""),
  ev("Endless Field Concert at Christiansen Lake", "Christiansen Lake (Talkeetna)", "Anchorage", "2023-06-05", "6p-8p", ""),
  ev("Jro, Master of One", "Humpy’s", "Anchorage", "2023-06-05", "7:30p-11p", ""),
  ev("Karaoke Night", "The Crowbar (Fairbanks)", "Anchorage", "2023-06-05", "8p-12a", ""),
  ev("The Monday Mic at Koots", "Koot’s", "Anchorage", "2023-06-05", "9p-12a", ""),
  ev("Jay Straw's Bass to Mouth Mondays!", "Van’s Dive Bar", "Anchorage", "2023-06-05", "9p-12a", ""),
  ev("Open Mic Mondays", "Yukon Bar (Seward)", "Anchorage", "2023-06-05", "9p-12a", ""),
  ev("Jimmy Sandy", "Fairview Inn (Talkeetna)", "Anchorage", "2023-06-05", "9p-1a", ""),

  // ═══ ANCHORAGE — Tuesday June 6th ═══
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2023-06-06", "10p-12a", ""),
  ev("Lunch on the Lawn: Kuf Knotz & Christine Elise", "Anchorage Museum", "Anchorage", "2023-06-06", "11:30a-1:30p", ""),
  ev("Tako Tuesday on The Roof w/ Joe Brady", "Williwaw Social", "Anchorage", "2023-06-06", "4p-7p", ""),
  ev("Taco Tuesday Open Mic Night", "American Legion Post 28", "Anchorage", "2023-06-06", "6:30p-9:30p", ""),
  ev("Witty Youngman", "Orso’s", "Anchorage", "2023-06-06", "6p-8p", ""),
  ev("Karmic Reduction", "Humpy’s", "Anchorage", "2023-06-06", "7:30p-11p", ""),
  ev("Open Stage Night With Sabina Speers", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2023-06-06", "7p-10p", ""),
  ev("Blackwater Railroad & Friends", "Seward Alehouse (Seward)", "Anchorage", "2023-06-06", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2023-06-06", "8p-2a", ""),
  ev("Open Jam Tuesday", "Van’s Dive Bar", "Anchorage", "2023-06-06", "9p-12a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2023-06-06", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2023-06-06", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday June 7th ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2023-06-07", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2023-06-07", "10p-2a", ""),
  ev("Music in the Park: Zen Trembles", "Peratrovich Park (Anchorage)", "Anchorage", "2023-06-07", "12p-1p", ""),
  ev("Ukulele Russ", "Humpy’s", "Anchorage", "2023-06-07", "7:30p-11p", ""),
  ev("Beats. Beer. Bingo!", "Williwaw Social", "Anchorage", "2023-06-07", "7:30p-9:30p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2023-06-07", "7p-10p", ""),
  ev("Open Mic", "Schwabenhof (Wasilla)", "Anchorage", "2023-06-07", "7p-12a", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2023-06-07", "8:30p-10p", "", "comedy"),
  ev("Karaoke", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2023-06-07", "8p-11p", ""),
  ev("Country Night with DJ Lefty", "Koot’s", "Anchorage", "2023-06-07", "8p-12a", ""),
  ev("Jukebox Karaoke Roadshow", "Eddie’s Sports Bar", "Anchorage", "2023-06-07", "9p-12a", ""),
  ev("KARAOKE w/ SassySquatch!", "Van’s Dive Bar", "Anchorage", "2023-06-07", "9p-12a", ""),
  ev("Open Mic", "Fairview Inn (Talkeetna)", "Anchorage", "2023-06-07", "9p-1a", ""),

  // ═══ ANCHORAGE — Wednesday July 19th ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2023-07-19", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2023-07-19", "10p-2a", ""),
  ev("Music in the Park: Melissa Mitchell", "Peratrovich Park (Anchorage)", "Anchorage", "2023-07-19", "12p-1p", ""),
  ev("Three Days Grace", "Matanuska Brewing (Eagle River)", "Anchorage", "2023-07-19", "6p-10p", ""),
  ev("Bunny Swan Band w/ The Ridgeway Rounders", "Soldotna Creek Park (Soldotna)", "Anchorage", "2023-07-19", "6p-9p", ""),
  ev("Regina & Will", "Humpy’s", "Anchorage", "2023-07-19", "7:30p-11p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2023-07-19", "7p-10p", ""),
  ev("Open Mic", "Schwabenhof (Wasilla)", "Anchorage", "2023-07-19", "7p-12a", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2023-07-19", "8:30p-10p", "", "comedy"),
  ev("Karaoke", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2023-07-19", "8p-11p", ""),
  ev("Country Night with DJ Lefty", "Koot’s", "Anchorage", "2023-07-19", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2023-07-19", "8p-2a", ""),
  ev("The Golden Heart Revue", "Palace Theatre (Fairbanks)", "Anchorage", "2023-07-19", "8p-9p", ""),
  ev("Jukebox Karaoke Roadshow", "Eddie’s Sports Bar", "Anchorage", "2023-07-19", "9p-12a", ""),
  ev("KARAOKE w/ SassySquatch!", "Van’s Dive Bar", "Anchorage", "2023-07-19", "9p-12a", ""),
  ev("Open Mic", "Fairview Inn (Talkeetna)", "Anchorage", "2023-07-19", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2023-07-19", "9p-2a", ""),

  // ═══ ANCHORAGE — Thursday July 20th ═══
  ev("Live After Five Concert Series: Vintage Retro", "Anchorage Town Square Park", "Anchorage", "2023-07-20", "5:30p-7:30p", ""),
  ev("Live Music from Melissa \"Jazzmom\" Fischer", "Sullivan’s Steakhouse", "Anchorage", "2023-07-20", "5:30p-8:30p", ""),
  ev("Musical Theatre Cabaret", "Addie Camp (Soldotna)", "Anchorage", "2023-07-20", "6p-8:30p", "", "theatre"),
  ev("Odd Union", "Anchorage Brewing Company", "Anchorage", "2023-07-20", "6p-8:30p", ""),
  ev("Big Top Tease Open Call for Performers", "The Basement (Fairbanks)", "Anchorage", "2023-07-20", "6p-8p", ""),
  ev("HOOKED ENTERTAINMENT 10 YEAR ANNIVERSARY POP UP COMEDY SHOW!", "Everett’s Restaurant (Wasilla)", "Anchorage", "2023-07-20", "7:30p-9:30", "", "comedy"),
  ev("FISHHOOK JAM NIGHTS WITH JERRY WESSLING", "Fishhook Bar & Grill (Palmer)", "Anchorage", "2023-07-20", "7p-10p", ""),
  ev("Karaoke Night", "Goldie’s AK (Fairbanks)", "Anchorage", "2023-07-20", "7p-10p", ""),
  ev("Witty Youngman", "PubHouse", "Anchorage", "2023-07-20", "7p-10p", ""),
  ev("The AKoustic Project", "Tailgater’s Sport’s Bar & Grill (Wasilla)", "Anchorage", "2023-07-20", "7p-10p", ""),
  ev("Sarah P's Birthday Bash w/ Decepticide, She, Mindful Khaos, & The Jephries", "Koot’s", "Anchorage", "2023-07-20", "7p-12a", ""),
  ev("ACA Summer Concert Series: The Chamberliners", "KFQD Park (Anchorage)", "Anchorage", "2023-07-20", "7p-9p", ""),
  ev("The Leo Ash Band", "Humpy’s", "Anchorage", "2023-07-20", "8:30p-12a", ""),
  ev("Tall, Dark, & Communist on The Rooftop", "Williwaw Social", "Anchorage", "2023-07-20", "8p-11", ""),
  ev("Open Mic", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2023-07-20", "8p-11p", ""),
  ev("Glacier Hoppers", "Garcia’s Cantina & Café (Eagle River)", "Anchorage", "2023-07-20", "8p-11p", ""),
  ev("Open Mic Night", "The Marlin Bar (Fairbanks)", "Anchorage", "2023-07-20", "8p-11p", ""),
  ev("The Jukebox Karaoke", "The Peanut Farm", "Anchorage", "2023-07-20", "8p-11p", ""),
  ev("Open Mic w/ Cody Kniceley", "4 Royle Parkers (Soldotna)", "Anchorage", "2023-07-20", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2023-07-20", "8p-2a", ""),
  ev("Grown & Sexy HipHop/R&B Night", "Koot’s", "Anchorage", "2023-07-20", "8p-2a", ""),
  ev("Mad Myrna's Thursday Night Revue", "Mad Myrna’s", "Anchorage", "2023-07-20", "9p-11p", ""),
  ev("Deke Dickerson and the Whippersnappers", "Fairview Inn (Talkeetna)", "Anchorage", "2023-07-20", "9p-1a", ""),
  ev("Karaoke Night", "Four Corner’s Lounge (Palmer)", "Anchorage", "2023-07-20", "9p-1a", ""),

  // ═══ ANCHORAGE — Friday July 21st ═══
  ev("Youth Opera of El Paso Presents: \"Brundibár\"", "FSAF Special Guest", "Anchorage", "2023-07-21", "", "", "theatre"),
  ev("Hip-Hop Fridays", "International Hotel & Bar (Fairbanks)", "Anchorage", "2023-07-21", "10p-2a", ""),
  ev("'90s Night! w/ Memory Bliss", "Broken Blender", "Anchorage", "2023-07-21", "11:30a-1p", ""),
  ev("FSAF Special Guest - Youth Opera of El Paso Presents: \"Brundibár\"", "UAF Charles Davis Concert Hall (Fairbanks)", "Anchorage", "2023-07-21", "2:30p-5p", "", "theatre"),
  ev("Live Music from Tom Bargelski", "Sullivan’s Steakhouse", "Anchorage", "2023-07-21", "5:30p-8:30p", ""),
  ev("Eagle Eyes- Eagles Tribute", "Matanuska Brewing (Eagle River)", "Anchorage", "2023-07-21", "5p-10p", ""),
  ev("River Livers", "Talkeetna Village Park (Talkeetna)", "Anchorage", "2023-07-21", "5p-7p", ""),
  ev("Ukulele Russ", "Dirty Skillet (Hope)", "Anchorage", "2023-07-21", "6p-10p", ""),
  ev("Long Nights Moon", "Susitna Brewing (Big Lake)", "Anchorage", "2023-07-21", "6p-10p", ""),
  ev("Generation X Happy Hour on the Roof", "Williwaw Social", "Anchorage", "2023-07-21", "6p-10p", ""),
  ev("Spenard Song Circle w/Emma Hill, Lauren Scantlebury & Shane Russell", "Rage City Vintage", "Anchorage", "2023-07-21", "6p-9p", ""),
  ev("Under the Tree Music Series: Santoro", "Hilltop Ski Area", "Anchorage", "2023-07-21", "7p-10p", ""),
  ev("Williwaw Blue", "Inlet Towers", "Anchorage", "2023-07-21", "7p-10p", ""),
  ev("Jerry's Situation Live", "O’Malley’s on the Green", "Anchorage", "2023-07-21", "7p-10p", ""),
  ev("I Like Robots LIVE", "Palmer Alehouse (Palmer)", "Anchorage", "2023-07-21", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2023-07-21", "7p-11p", ""),
  ev("Blackwater Railroad Company", "Creekbend Café (Hope)", "Anchorage", "2023-07-21", "7p-11p", ""),
  ev("Open Mic Night", "Floaters (Big Lake)", "Anchorage", "2023-07-21", "7p-12a", ""),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2023-07-21", "7p-12a", ""),
  ev("Square Dance Lessons", "Sophia’s Café (Palmer)", "Anchorage", "2023-07-21", "7p-9:30p", "", "dance"),
  ev("Nothin But Trouble", "Humpy’s", "Anchorage", "2023-07-21", "8:30p-12a", ""),
  ev("TGIF: Murray Thorne", "Goldie’s AK (Fairbanks)", "Anchorage", "2023-07-21", "8p-12a", ""),
  ev("Sweet Cheeks Cabaret: Burlesque Amateur Night", "Broken Blender", "Anchorage", "2023-07-21", "8p-9:30p", ""),
  ev("Friday Night Lights with Lloyds Noise", "Williwaw Social", "Anchorage", "2023-07-21", "9:30p-2a", ""),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2023-07-21", "9p-11:30p", ""),
  ev("Hot Mess", "Sterling Highway (Sterling)", "Anchorage", "2023-07-21", "9p-12a", ""),
  ev("Gold Dust Rising live", "Van’s Dive Bar", "Anchorage", "2023-07-21", "9p-12a", ""),
  ev("Glacier Hoppers", "Carousel Lounge", "Anchorage", "2023-07-21", "9p-1a", ""),
  ev("River Livers", "Fairview Inn (Talkeetna)", "Anchorage", "2023-07-21", "9p-1a", ""),
  ev("Moon Dogies", "Magpie’s On The Fly (Valdez)", "Anchorage", "2023-07-21", "9p-1a", ""),
  ev("Saucy Yoda, Saint Mood & Kurmudgeon", "Yukon Bar (Seward)", "Anchorage", "2023-07-21", "9p-2a", ""),

  // ═══ ANCHORAGE — Saturday July 22nd ═══
  ev("Alaska Fest", "American Legion Post 28", "Anchorage", "2023-07-22", "12p-2a", "", "festival"),
  ev("KSKO’s Back To Back BlueGrass", "KSKO (McGrath)", "Anchorage", "2023-07-22", "1p-11p", ""),
  ev("Free Jazz Concerts: Fish-On Quartet", "Peratrovich Park (Anchorage)", "Anchorage", "2023-07-22", "4p-6p", ""),
  ev("A Tribute to Pat Benatar", "Matanuska Brewing (Eagle River)", "Anchorage", "2023-07-22", "5p-10p", ""),
  ev("The Stack LIVE", "Palmer Alehouse (Palmer)", "Anchorage", "2023-07-22", "5p-9:30p", ""),
  ev("Tamara Ashburn Band", "Dirty Skillet (Hope)", "Anchorage", "2023-07-22", "6p-10p", ""),
  ev("Debonair Dirtbags", "Susitna Brewing (Big Lake)", "Anchorage", "2023-07-22", "6p-10p", ""),
  ev("Hot Mess", "Soldotna Creek Park (Soldotna)", "Anchorage", "2023-07-22", "6p-9p", ""),
  ev("FSAF Jazz Concert", "Silver Gulch Brewing & Bottling Co.", "Anchorage", "2023-07-22", "7p-10p", ""),
  ev("Weekly Social Dance", "Anchorage Social Dance Club", "Anchorage", "2023-07-22", "7p-11p", "", "dance"),
  ev("Loaded Karma on The Rooftop", "Williwaw Social", "Anchorage", "2023-07-22", "7p-9p", ""),
  ev("Velvet La La", "Humpy’s", "Anchorage", "2023-07-22", "8:30p-12a", ""),
  ev("“Salsa Saturdays” Dance Socials", "Anaya Latin Dance", "Anchorage", "2023-07-22", "8p-11p", "", "dance"),
  ev("Zen Trembles", "Sunrise Inn (Cooper Landing)", "Anchorage", "2023-07-22", "8p-12a", ""),
  ev("Sweet Cheeks Cabaret", "Broken Blender", "Anchorage", "2023-07-22", "8p-9:30p", ""),
  ev("Now Hits Throwback Mashup B2B party with DJ Fanservice & MEGASISQO", "Williwaw Social", "Anchorage", "2023-07-22", "9:30p-2a", ""),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2023-07-22", "9p-11:30a", ""),
  ev("Open Mic Night", "Magpie’s On The Fly (Valdez)", "Anchorage", "2023-07-22", "9p-12a", ""),
  ev("Fiona Rose and the Show Ponies", "Fairview Inn (Talkeetna)", "Anchorage", "2023-07-22", "9p-1a", ""),
  ev("Colddheart Party", "Koot’s", "Anchorage", "2023-07-22", "9p-2a", ""),

  // ═══ ANCHORAGE — Sunday July 23rd ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2023-07-23", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2023-07-23", "10p-2a", ""),
  ev("ANC Market Social", "Anchorage Town Square Park", "Anchorage", "2023-07-23", "11a-5p", "", "community"),
  ev("Karaoke at Chair 5", "Chair 5 Restaurant (Girdwood)", "Anchorage", "2023-07-23", "11p-1a", ""),
  ev("Children’s Live Music Hour", "O’Malley Sports Center", "Anchorage", "2023-07-23", "12p-1p", ""),
  ev("KSKO’s Back To Back BlueGrass", "KSKO (McGrath)", "Anchorage", "2023-07-23", "12p-6:30p", ""),
  ev("Vibes on Tap w/ DJ Traxmadeit", "The Cabin Bar & Lounge (Fairbanks)", "Anchorage", "2023-07-23", "3p-6p", ""),
  ev("Sun Splash Sundaze w/ DJ Militant", "Williwaw Social", "Anchorage", "2023-07-23", "5p-9p", ""),
  ev("Open Mic", "Alaska Fish House (Ketchikan)", "Anchorage", "2023-07-23", "6p-9p", ""),
  ev("Open Mic Night", "Susitna Brewing (Big Lake)", "Anchorage", "2023-07-23", "6p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2023-07-23", "8:30p-10p", "", "comedy"),
  ev("Open Mic Jam", "Humpys", "Anchorage", "2023-07-23", "8p-11p", ""),
  ev("Karaoke at the Marlin", "The Marlin Bar (Fairbanks)", "Anchorage", "2023-07-23", "8p-12a", ""),
  ev("Open Mic! Overlorded by Wash Your Hands", "Van’s Dive Bar", "Anchorage", "2023-07-23", "8p-12a", ""),
  ev("Sunday Funday Karaoke", "The Carousel Lounge", "Anchorage", "2023-07-23", "8p-2a", ""),
  ev("Karaoke", "Four Corner’s Lounge (Palmer)", "Anchorage", "2023-07-23", "9p-2a", ""),

  // ═══ ANCHORAGE — Monday July 24th ═══
  ev("All Ages Open Jam", "Temple Studios Community Center (Seward)", "Anchorage", "2023-07-24", "5p-6:30p", ""),
  ev("Open Mic Night", "Auxiliary VFW 1685", "Anchorage", "2023-07-24", "6:30p-8:30p", ""),
  ev("Jazz Night Open Jam", "K Street Market", "Anchorage", "2023-07-24", "6:30p-8:30p", ""),
  ev("Jessie's Kat", "Humpy’s", "Anchorage", "2023-07-24", "7:30p-11p", ""),
  ev("One Man band Monday Nights with Ace", "The Carousel Lounge", "Anchorage", "2023-07-24", "8p-12a", ""),
  ev("Karaoke Night", "The Crowbar (Fairbanks)", "Anchorage", "2023-07-24", "8p-12a", ""),
  ev("The Monday Mic at Koots", "Koot’s", "Anchorage", "2023-07-24", "9p-12a", ""),
  ev("Jay Straw's Bass to Mouth Mondays!", "Van’s Dive Bar", "Anchorage", "2023-07-24", "9p-12a", ""),
  ev("Open Mic Mondays", "Yukon Bar (Seward)", "Anchorage", "2023-07-24", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday July 25th ═══
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2023-07-25", "10p-12a", ""),
  ev("Lunch on the Lawn: Karrie Pavish Anderson", "Anchorage Museum", "Anchorage", "2023-07-25", "11:30a-1:30p", ""),
  ev("Concerts in the Quad w/ Ed Washington", "UAA Cuddy Quad", "Anchorage", "2023-07-25", "11:30a-1p", ""),
  ev("Tako Tuesday on The Roof w/ Joe Brady", "Williwaw Social", "Anchorage", "2023-07-25", "4p-7p", ""),
  ev("Band Jam Night w/ Jimbo", "American Legion Post 28", "Anchorage", "2023-07-25", "6:30p-9:30p", ""),
  ev("Taco Tuesdays w/ Jerry Wessling", "Tug Bar (Wasilla)", "Anchorage", "2023-07-25", "6p-9p", ""),
  ev("Agents At Large", "Humpy’s", "Anchorage", "2023-07-25", "7:30p-11p", ""),
  ev("Open Stage Night With Sabina Speers", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2023-07-25", "7p-10p", ""),
  ev("Nurse Blake: Shock Advised Tour", "Egan Center", "Anchorage", "2023-07-25", "8p-10p", ""),
  ev("Blackwater Railroad & Friends", "Seward Alehouse (Seward)", "Anchorage", "2023-07-25", "8p-12a", ""),
  ev("Open Jam Tuesday", "Van’s Dive Bar", "Anchorage", "2023-07-25", "9p-12a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2023-07-25", "9p-1a", ""),

  // ═══ ANCHORAGE — Wednesday July 26th ═══
  ev("Music in the Park: River Livers", "Peratrovich Park (Anchorage)", "Anchorage", "2023-07-26", "12p-1p", ""),
  ev("Stompin Yeti at the Brown Bear", "Brown Bear Saloon (Indian)", "Anchorage", "2023-07-26", "6:30p-9:30p", ""),
  ev("Free Creatures // Sam Tenhoff opening", "Soldotna Creek Park (Soldotna)", "Anchorage", "2023-07-26", "6p-9p", ""),
  ev("Jared Woods", "Humpy’s", "Anchorage", "2023-07-26", "7:30p-11p", ""),

  // ═══ ANCHORAGE — Monday September 25th ═══
  ev("All Ages Open Jam", "Temple Studios Community Center (Seward)", "Anchorage", "2023-09-25", "5p-6:30p", ""),
  ev("Open Mic Night", "Auxiliary VFW 1685", "Anchorage", "2023-09-25", "6:30p-8:30p", ""),
  ev("Jazz Night Open Jam", "K Street Market", "Anchorage", "2023-09-25", "6:30p-8:30p", ""),
  ev("Play Reader's Club", "Anchorage Community Theatre", "Anchorage", "2023-09-25", "6p-8p", "", "theatre"),
  ev("Karaoke Night", "The Crowbar (Fairbanks)", "Anchorage", "2023-09-25", "8p-12a", ""),
  ev("Karaoke", "Four Corner’s Lounge (Palmer)", "Anchorage", "2023-09-25", "8p-12a", ""),
  ev("The Monday Mic at Koots", "Koot’s", "Anchorage", "2023-09-25", "9p-12a", ""),
  ev("Jay Straw's Bass to Mouth Mondays!", "Van’s Dive Bar", "Anchorage", "2023-09-25", "9p-12a", ""),
  ev("Open Mic Mondays", "Yukon Bar (Seward)", "Anchorage", "2023-09-25", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday September 26th ═══
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2023-09-26", "10p-12a", ""),
  ev("Auditions for \"A Christmas Carol\"", "Anchorage Community Theatre", "Anchorage", "2023-09-26", "1p-4p", ""),
  ev("Taco Tuesdays w/ Jerry Wessling", "Tug Bar (Wasilla)", "Anchorage", "2023-09-26", "6p-9p", ""),
  ev("Open Stage Night With Sabina Speers", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2023-09-26", "7p-10p", ""),
  ev("Peace Choir Rehearsal", "Unitarian Universalist Fellowship of Fairbanks", "Anchorage", "2023-09-26", "7p-8:30p", ""),
  ev("Blackwater Railroad & Friends", "Seward Alehouse (Seward)", "Anchorage", "2023-09-26", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2023-09-26", "8p-2a", ""),
  ev("Open Jam Tuesday", "Van’s Dive Bar", "Anchorage", "2023-09-26", "9p-12a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2023-09-26", "9p-1a", ""),

  // ═══ ANCHORAGE — Wednesday September 27th ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2023-09-27", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2023-09-27", "10p-2a", ""),
  ev("Free Zoo Community Storytime", "The Alaska Zoo", "Anchorage", "2023-09-27", "12p-4p", "", "community"),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2023-09-27", "7p-10p", ""),
  ev("Comedy & Music ft. Chris Castles & Tai Nguyen", "Pakalolo Supply Company (Fairbanks)", "Anchorage", "2023-09-27", "7p-10p", "", "comedy"),
  ev("Free Latin Dance Class", "Williwaw Social", "Anchorage", "2023-09-27", "7p-10p", "", "dance"),
  ev("Open Mic", "Schwabenhof (Wasilla)", "Anchorage", "2023-09-27", "7p-12a", ""),
  ev("Open Mic", "Fairview Inn (Talkeetna)", "Anchorage", "2023-09-27", "7p-1a", ""),
  ev("Free Dance Lessons", "Koot’s", "Anchorage", "2023-09-27", "7p-8p", "", "dance"),
  ev("Pay-What-You-Can-Preview for Uncle Ted", "Cyrano’s Theatre Company", "Anchorage", "2023-09-27", "7p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2023-09-27", "8:30p-10p", "", "comedy"),
  ev("Will H Johnson", "Humpy’s", "Anchorage", "2023-09-27", "8:30p-12a", ""),
  ev("Karaoke", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2023-09-27", "8p-11p", ""),
  ev("Country Night with DJ Lefty", "Koot’s", "Anchorage", "2023-09-27", "8p-12a", ""),
  ev("Jukebox Karaoke Roadshow", "Eddie’s Sports Bar", "Anchorage", "2023-09-27", "9p-12a", ""),
  ev("KARAOKE w/ SassySquatch!", "Van’s Dive Bar", "Anchorage", "2023-09-27", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2023-09-27", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday November 29th ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2023-11-29", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2023-11-29", "10p-2a", ""),
  ev("Free West Coast Swing Dance Lessons", "Koot’s", "Anchorage", "2023-11-29", "6:45p-8p", "", "dance"),
  ev("Come From Away", "Alaska Center for The Performing Arts", "Anchorage", "2023-11-29", "7:30p-9:10p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2023-11-29", "7p-10p", ""),
  ev("Live Music Monday w/ Andrew Mack", "The Cabin (Fairbanks)", "Anchorage", "2023-11-29", "7p-10p", ""),
  ev("Free Latin Dance Class", "Williwaw Social", "Anchorage", "2023-11-29", "7p-10p", "", "dance"),
  ev("Country Night with DJ Lefty", "Koot’s", "Anchorage", "2023-11-29", "7p-12a", ""),
  ev("Open Mic", "Schwabenhof (Wasilla)", "Anchorage", "2023-11-29", "7p-12a", ""),
  ev("Open Mic", "Fairview Inn (Talkeetna)", "Anchorage", "2023-11-29", "7p-1a", ""),
  ev("Fancy Nancy: Splendiferouse Christmas Musical", "Cyrano’s Theatre Company", "Anchorage", "2023-11-29", "7p-8p", "", "theatre"),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2023-11-29", "8:30p-10p", "", "comedy"),
  ev("Karaoke", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2023-11-29", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge (Palmer)", "Anchorage", "2023-11-29", "8p-12a", ""),
  ev("Open Mic", "Lil Babes Cocktail Lounge", "Anchorage", "2023-11-29", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2023-11-29", "8p-2a", ""),
  ev("Jukebox Karaoke Roadshow", "Eddie’s Sports Bar", "Anchorage", "2023-11-29", "9p-12a", ""),
  ev("KARAOKE w/ SassySquatch!", "Van’s Dive Bar", "Anchorage", "2023-11-29", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar (Seward)", "Anchorage", "2023-11-29", "9p-2a", ""),

  // ═══ ANCHORAGE — Thursday November 30th ═══
  ev("Come From Away", "Alaska Center for The Performing Arts", "Anchorage", "2023-11-30", "1p-2:30p & 7:30p-9:10p", ""),
  ev("Rage City Holiday Night Market w/ DJ Aud Pleas", "Rage City Vintage", "Anchorage", "2023-11-30", "2p-9p", ""),
  ev("Live Music w/ Witty Youngman", "Orso", "Anchorage", "2023-11-30", "6p-8p", ""),
  ev("Glacier Hoppers", "Garcia’s Cantina & Café (Eagle River)", "Anchorage", "2023-11-30", "6p-9p", ""),
  ev("Anchorage Community Theatre’s Platinum 70th Anniversary Gala & Fundraiser", "The Hotel Captain Cook", "Anchorage", "2023-11-30", "6p-9p", "", "theatre"),
  ev("Nothing ‘But Karma", "Palmer Alehouse (Palmer)", "Anchorage", "2023-11-30", "6p-9p", ""),
  ev("Fairbanks Peace Choir: Winter Concert", "Unitarian Universalist Fellowship (Fairbanks)", "Anchorage", "2023-11-30", "7:30p-9p", "", "festival"),
  ev("Jam Nights w/ Jerry Wessling", "Fishhook Bar & Grill (Palmer)", "Anchorage", "2023-11-30", "7p-10p", ""),
  ev("The AKoustic Project", "Tailgater’s Sport’s Bar & Grill (Wasilla)", "Anchorage", "2023-11-30", "7p-10p", ""),
  ev("Comedy Show w/ Kevin Farley", "Main Street Tap & Grill (Kenai)", "Anchorage", "2023-11-30", "7p-8:30p", "", "comedy"),
  ev("Tartuffe", "Cyrano’s Theatre Company", "Anchorage", "2023-11-30", "7p-9p", ""),
  ev("Open Mic", "Alaskan Hotel and Bar (Juneau)", "Anchorage", "2023-11-30", "8p-11p", ""),
  ev("Open Mic Night", "The Crystal Saloon (Juneau)", "Anchorage", "2023-11-30", "8p-11p", ""),
  ev("Open Mic Night", "The Marlin Bar (Fairbanks)", "Anchorage", "2023-11-30", "8p-11p", ""),
  ev("The Jukebox Karaoke", "The Peanut Farm", "Anchorage", "2023-11-30", "8p-11p", ""),
  ev("Open Mic w/ Cody Kniceley", "4 Royle Parkers (Soldotna)", "Anchorage", "2023-11-30", "8p-12a", ""),
  ev("Karaoke", "Flattop Pizza & Pasta", "Anchorage", "2023-11-30", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2023-11-30", "8p-2a", ""),
  ev("Jam Night & Karaoke", "Lil Babes Cocktail Lounge", "Anchorage", "2023-11-30", "8p-2a", ""),
  ev("Gasolina Thursdays w/ Joe Brady", "Williwaw Social", "Anchorage", "2023-11-30", "9-12a", ""),
  ev("Mad Myrna's Comedy Showcase", "Mad Myrna’s", "Anchorage", "2023-11-30", "9p-11p", "", "comedy"),
  ev("Open Mic w/ Chris Crain", "Yukon Bar (Seward)", "Anchorage", "2023-11-30", "9p-12a", ""),
  ev("Karaoke Night", "Four Corner’s Lounge (Palmer)", "Anchorage", "2023-11-30", "9p-1a", ""),
  ev("DJ Shawn Hemp Live", "Van’s Dive Bar", "Anchorage", "2023-11-30", "9p-1a", ""),

  // ═══ ANCHORAGE — Friday December 1st ═══
  ev("Pickuplines Live", "Williwaw Social", "Anchorage", "2023-12-01", "10p-2a", ""),
  ev("First Duke Russell Friday w/ Snarley Brown and Corey Böiko", "The Cove", "Anchorage", "2023-12-01", "5:30p-10p", ""),
  ev("Free First Friday at the Planetarium", "Marie Drake Planetarium", "Anchorage", "2023-12-01", "5:30p-7p", ""),
  ev("2023 Winter Wonderland & Tree Lighting Ceremony", "Eagle River Town Square Park (Eagle River)", "Anchorage", "2023-12-01", "5:30p-8:30p", ""),
  ev("Athabascan Fiddlers Dance & Potluck", "The Nave Spenard", "Anchorage", "2023-12-01", "6:30p-10:30", "", "dance"),
  ev("Chords & Conversations “Songwriters In The Round”", "The Catch Restaurant & Bar (Soldotna)", "Anchorage", "2023-12-01", "6:30p-10p", ""),
  ev("Glacier Hoppers", "American Legion Post 33 (Peter’s Creek)", "Anchorage", "2023-12-01", "6p-9p", ""),
  ev("Jared Woods & David Nathanson", "Matanuska Brewing Company", "Anchorage", "2023-12-01", "6p-9p", ""),
  ev("The Dancing Bears Contra Dance", "Wendler Middle School", "Anchorage", "2023-12-01", "7:30p-10:30", "", "dance"),
  ev("A Nice Indian Boy", "Perseverance Theatre (Juneau)", "Anchorage", "2023-12-01", "7:30p-10p", ""),
  ev("Portland Cello Project Holiday Show", "Alaska Center for The Performing Arts", "Anchorage", "2023-12-01", "7:30p-9:20p", ""),
  ev("Comedy Show w/ Kevin Farley", "Everett’s Restaurant (Wasilla)", "Anchorage", "2023-12-01", "7:30p-9p", "", "comedy"),
  ev("907 Pro Wrestling: UNLEASHED", "Williwaw Social", "Anchorage", "2023-12-01", "7p-10", ""),
  ev("Karaoke", "American Legion Post 15 (Palmer)", "Anchorage", "2023-12-01", "7p-11p", ""),
  ev("Open Mic Night", "Floaters (Big Lake)", "Anchorage", "2023-12-01", "7p-12a", ""),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2023-12-01", "7p-12a", ""),
  ev("UAA Glee Club Fall Concert", "UAA Fine Arts Building", "Anchorage", "2023-12-01", "7p-8:30p", ""),
  ev("Twice Upon a Christmas", "Alaska Center for The Performing Arts", "Anchorage", "2023-12-01", "7p-9p", ""),
  ev("A Christmas Carol", "Anchorage Community Theatre", "Anchorage", "2023-12-01", "7p-9p", ""),
  ev("Tartuffe", "Cyrano’s Theatre Company", "Anchorage", "2023-12-01", "7p-9p", ""),
  ev("The High Hawks", "The Sitzmark (Girdwood)", "Anchorage", "2023-12-01", "8p-10:30p", ""),
  ev("Sweet Treats: A Holiday Cabaret", "Broken Blender", "Anchorage", "2023-12-01", "8p-9:30p", ""),
  ev("That 70's Dance Party w/ The Vintage Retro", "Koot’s", "Anchorage", "2023-12-01", "9:30p-1:30a", "", "dance"),
  ev("Live Comedy at the Gumbo House", "The Gumbo House", "Anchorage", "2023-12-01", "9p-11:30p", "", "comedy"),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2023-12-01", "9p-11:30p", ""),
  ev("Friday Night Dance Lounge", "Alaska Dance Promotions", "Anchorage", "2023-12-01", "9p-1a", "", "dance"),
  ev("Murmur, Fiona Rose and the Show Ponies, and Clay Products", "Van’s Dive Bar", "Anchorage", "2023-12-01", "9p-1a", ""),
  ev("Blast From The Past", "Time Out Lounge", "Anchorage", "2023-12-01", "9p-2:30a", ""),

  // ═══ ANCHORAGE — Saturday December 2nd ═══
  ev("The Jangle Bees Live 9pm", "Matanuska Brewing Midtown", "Anchorage", "2023-12-02", "12a", ""),
  ev("Fancy Nancy: Splendiferous Christmas", "Cyrano’s Theatre Company", "Anchorage", "2023-12-02", "12p-1p & 2p-3p", ""),
  ev("Coffee w/ A Veteran", "Black Birch Books (Wasilla)", "Anchorage", "2023-12-02", "12p-2p", ""),
  ev("Auditions for \"Our Town\"", "Anchorage Community Theatre", "Anchorage", "2023-12-02", "1p-4p", ""),
  ev("Land of Sweets & Tea Tour", "Juneau-Douglas High School (Juneau)", "Anchorage", "2023-12-02", "1p-4p", ""),
  ev("Kenai Chapter SCI Annual Christmas Party", "Lone Moose Lodge Alaska (Soldotna)", "Anchorage", "2023-12-02", "6p-10p", ""),
  ev("Saturday Night Social Dance", "Anchorage Social Dance Club", "Anchorage", "2023-12-02", "7p-11p", "", "dance"),
  ev("Comedy Show w/ Kevin Farley", "Koot’s", "Anchorage", "2023-12-02", "7p-8:30p & 9p-10:30p", "", "comedy"),
  ev("Beats. Beer. Bingo.", "Williwaw Social", "Anchorage", "2023-12-02", "7p-9p", ""),
  ev("Karaoke w/ Host Steve Franklin", "Broken Blender", "Anchorage", "2023-12-02", "8p-11:45p", ""),
  ev("Danger Money Live", "Anchorage Moose Lodge", "Anchorage", "2023-12-02", "8p-12a", ""),
  ev("Dine & Dance Holiday Bash", "Cold Water Bar & Grill (Sitka)", "Anchorage", "2023-12-02", "8p-12a", "", "dance"),
  ev("Glacier Hoppers Band", "Humpy’s Alehouse", "Anchorage", "2023-12-02", "9:30p-1a", ""),
  ev("The Casey Smith Project", "The Pub (Fairbanks)", "Anchorage", "2023-12-02", "9p-12a", ""),
  ev("Suicidal Bunnies", "Van’s Dive Bar", "Anchorage", "2023-12-02", "9p-1a", ""),
  ev("Merkules Live in Alaska", "Williwaw Social", "Anchorage", "2023-12-02", "9p-1a", ""),
  ev("“Spenard Boiler Room” w/ Hephay, Saxafras, Zayka, and SCOOBZ", "Koot’s", "Anchorage", "2023-12-02", "9p-2:30a", ""),

  // ═══ ANCHORAGE — Sunday December 3rd ═══
  ev("Christmas for the Animals & Artisan’s Bazaar", "The Alaska Zoo", "Anchorage", "2023-12-03", "10a-4p", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2023-12-03", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2023-12-03", "10p-2a", ""),
  ev("Reveal Sip & Shop Burlesque Fashion Show", "Broken Blender", "Anchorage", "2023-12-03", "11:30a-1p", ""),
  ev("Fancy Nancy: Splendiferous Christmas", "Cyrano’s Theatre Company", "Anchorage", "2023-12-03", "12p-1p", ""),
  ev("Come From Away", "Alaska Center for The Performing Arts", "Anchorage", "2023-12-03", "1p-2:30p & 7p-8:50p", ""),
  ev("Anchorage Concert Chorus: 76th Community Messiah", "Cathedral of Our Lady of Guadalupe", "Anchorage", "2023-12-03", "2p-4p", ""),
  ev("A Christmas Carol", "Anchorage Community Theatre", "Anchorage", "2023-12-03", "3p-5p", ""),
  ev("Tartuffe", "Cyrano’s Theatre Company", "Anchorage", "2023-12-03", "3p-5p", ""),
  ev("Jam Night", "VFW Post 1685", "Anchorage", "2023-12-03", "4:30p-8:30p", ""),
  ev("Anchorage Community Concert Band", "Alaska Center for The Performing Arts", "Anchorage", "2023-12-03", "4p-6p", ""),
  ev("A Nice Indian Boy", "Perseverance Theatre (Juneau)", "Anchorage", "2023-12-03", "5p-7:30p", ""),
  ev("Family Friendly Open Mic w/ Tanya Hegg", "Everett’s (Wasilla)", "Anchorage", "2023-12-03", "6p-10p", ""),
  ev("Open Mic Night", "Susitna Brewing (Big Lake)", "Anchorage", "2023-12-03", "6p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2023-12-03", "8:30p-10p", "", "comedy"),
  ev("Blast From The Past", "Time Out Lounge", "Anchorage", "2023-12-03", "8:30p-1a", ""),
  ev("Open Mic Jam", "Humpys", "Anchorage", "2023-12-03", "8p-11p", ""),
  ev("Open Mic! Overlorded by Wash Your Hands", "Van’s Dive Bar", "Anchorage", "2023-12-03", "8p-12a", ""),
  ev("Karaoke", "Four Corner’s Lounge (Palmer)", "Anchorage", "2023-12-03", "9p-12a", ""),

  // ═══ ANCHORAGE — Monday December 4th ═══
  ev("Jazz Night Open Jam", "K Street Market", "Anchorage", "2023-12-04", "6:30p-8:30p", ""),
  ev("Auditions for \"Our Town\"", "Anchorage Community Theatre", "Anchorage", "2023-12-04", "6p-8p", ""),
  ev("Live Music Monday w/ Music Dave", "The Cabin (Fairbanks)", "Anchorage", "2023-12-04", "8p-10p", ""),
  ev("Open Mic Night w/ Mike Miller", "Blue Fox Cocktail Lounge", "Anchorage", "2023-12-04", "8p-12a", ""),
  ev("One Man Band Nights w/ Ace", "The Carousel Lounge", "Anchorage", "2023-12-04", "8p-12a", ""),
  ev("Karaoke Night", "The Crowbar (Fairbanks)", "Anchorage", "2023-12-04", "8p-12a", ""),
  ev("The Monday Mic at Koots", "Koot’s", "Anchorage", "2023-12-04", "9p-12a", ""),
  ev("Jay Straw's Bass to Mouth Mondays!", "Van’s Dive Bar", "Anchorage", "2023-12-04", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday December 5th ═══
  ev("Open Mic w/ The AKoustic Project", "The Houston Lodge (Houston)", "Anchorage", "2023-12-05", "6p-9p", ""),
  ev("Tuesday Night Karaoke w/ Rockey", "Tuffy’s (Fairbanks)", "Anchorage", "2023-12-05", "6p-9p", ""),
  ev("Taco Tuesdays w/ Jerry Wessling", "Tug Bar (Wasilla)", "Anchorage", "2023-12-05", "6p-9p", ""),
  ev("Jam Out w/ Cami From Miami", "The Cabin (Fairbanks)", "Anchorage", "2023-12-05", "7:30p-10:30p", ""),
  ev("Open Stage Night With Sabina Speers", "Klondike Mike’s & the Main Street Grill (Palmer)", "Anchorage", "2023-12-05", "7p-10p", ""),
  ev("Open Jam Tuesday", "Van’s Dive Bar", "Anchorage", "2023-12-05", "9p-12a", ""),
  ev("Jukebox Karaoke Roadshow", "Trophy Lounge", "Anchorage", "2023-12-05", "9p-1a", ""),

  // ═══ ANCHORAGE — Tuesday April 16th ═══
  ev("Theatre at the Senior Activity Center", "Anchorage Senior Activity Center", "Anchorage", "2024-04-16", "12p-1:30p", "", "theatre"),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2024-04-16", "6p-8p", ""),
  ev("Disney's Aladdin", "Alaska Center for The Performing Arts", "Anchorage", "2024-04-16", "7:30p-10p", ""),
  ev("West Coast Fusion Night: Dance Lessons & Music", "Pink Cadillac", "Anchorage", "2024-04-16", "8p-12a", "", "dance"),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-04-16", "8p-2a", ""),

  // ═══ ANCHORAGE — Wednesday April 17th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2024-04-17", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2024-04-17", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2024-04-17", "10p-2a", ""),
  ev("Jared Woods & David Nathanson Live", "Matanuska Brewing Company", "Anchorage", "2024-04-17", "6p-9p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2024-04-17", "7p-10p", ""),
  ev("Country Night with DJ Lefty", "Koot’s", "Anchorage", "2024-04-17", "7p-12a", ""),
  ev("Line Dance Night", "Pink Cadillac", "Anchorage", "2024-04-17", "7p-1a", "", "dance"),
  ev("Open Mic", "Lil Babes Cocktail Lounge", "Anchorage", "2024-04-17", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-04-17", "8p-2a", ""),
  ev("KARAOKE w/ Uswi", "Van’s Dive Bar", "Anchorage", "2024-04-17", "9p-12a", ""),

  // ═══ EAGLE RIVER — Wednesday April 17th ═══
  ev("Open Mic", "Schwabenhof", "Eagle River", "2024-04-17", "7:30p-11p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2024-04-17", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-04-17", "8p-12a", ""),
  ev("Open Mic with Larry Z", "Fairview Inn", "Eagle River", "2024-04-17", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-04-17", "9p-2a", ""),

  // ═══ ANCHORAGE — Thursday April 18th ═══
  ev("Country Music Night w/ Alaskan Artists", "Broken Blender", "Anchorage", "2024-04-18", "6p-10p", ""),
  ev("The 7 Duo", "The Blue Fox", "Anchorage", "2024-04-18", "7p-10p", ""),
  ev("Shaun Parcarro", "Koots", "Anchorage", "2024-04-18", "7p-10p", ""),
  ev("Parlor in the Round w/ Alex Lahey, Emily Anderson & 3pitome", "Bear Tooth Theatrepub", "Anchorage", "2024-04-18", "7p-9p", ""),
  ev("Sultry in the Speakeasy: Grace C. Elliot", "Williwaw Social", "Anchorage", "2024-04-18", "7p-9p", ""),
  ev("Karaoke w/ Big Dream Entertainment", "Flattop Pizza & Pool", "Anchorage", "2024-04-18", "8p-12a", ""),
  ev("Karaoke", "Floaters", "Anchorage", "2024-04-18", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-04-18", "8p-2a", ""),
  ev("Country Night Thursdays w/ DJ Rico", "Pink Cadillac", "Anchorage", "2024-04-18", "8p-2a", ""),
  ev("Space: A Speakeasy Dance Party w/ DJ Joe Brady", "Williwaw Social", "Anchorage", "2024-04-18", "9:30p-12a", "", "dance"),
  ev("Bluegrass Jam", "Organic Oasis", "Anchorage", "2024-04-18", "9p-10:30p", ""),
  ev("Johnny Prizm", "Van’s Dive Bar", "Anchorage", "2024-04-18", "9p-12a", ""),

  // ═══ EAGLE RIVER — Thursday April 18th ═══
  ev("Karaoke", "International Hotel & Bar", "Eagle River", "2024-04-18", "10p-2a", ""),
  ev("Live Music by Local Musicians", "Mykel’s Restaurant", "Eagle River", "2024-04-18", "5p-9p", ""),
  ev("Matt Hopper Live", "Palmer Alehouse", "Eagle River", "2024-04-18", "6p-9p", ""),
  ev("Northern Lights String Orchestra", "Charles Davis Concert Hall", "Eagle River", "2024-04-18", "7:30p-9p", ""),
  ev("The AKoustic Project", "Tailgater’s Sport’s Bar & Grill", "Eagle River", "2024-04-18", "7p-10p", ""),
  ev("Will Johnson", "Garcia’s Cantina & Café", "Eagle River", "2024-04-18", "7p-11p", ""),
  ev("Karaoke w/ Sadie", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-04-18", "7p-12a", ""),
  ev("420 Fest w/ Live Music & Stand Up Comedy", "Pakalolo Tasting Room & Coffee Shop", "Eagle River", "2024-04-18", "7p-9p", "", "comedy"),
  ev("Karaoke Thursdays", "The Pub", "Eagle River", "2024-04-18", "8:30p-11p", ""),
  ev("Open Mic", "Alaskan Hotel and Bar", "Eagle River", "2024-04-18", "8p-11p", ""),
  ev("Open Mic Thursdays", "The Crystal Saloon", "Eagle River", "2024-04-18", "8p-11p", ""),
  ev("Open Mic w/ Cody Kniceley", "4 Royle Parkers", "Eagle River", "2024-04-18", "8p-12a", ""),
  ev("Karaoke Night", "Alibi Bar & Café", "Eagle River", "2024-04-18", "9:15p-12:15a", ""),
  ev("Open Mic w/ Chris Crain", "Yukon Bar", "Eagle River", "2024-04-18", "9p-12a", ""),

  // ═══ ANCHORAGE — Friday April 19th ═══
  ev("A Murder Mystery Burlesque Show", "Sweet Cheeks Cabaret: Dirty Deeds", "Anchorage", "2024-04-19", "", ""),
  ev("House Party w/ Lloyds Noize", "Williwaw Social", "Anchorage", "2024-04-19", "10p-1a", ""),
  ev("Reggaeton Night w/ DJ Jose", "Al’s Alaskan Inn", "Anchorage", "2024-04-19", "10p-2a", ""),
  ev("Velvet La La", "Koot’s", "Anchorage", "2024-04-19", "10p-2a", ""),
  ev("Tucker Tunes", "Organic Oasis", "Anchorage", "2024-04-19", "5p-7:30p", ""),
  ev("Glacier Hoppers Band", "O’Malley’s on the Green", "Anchorage", "2024-04-19", "6:30p-9:30p", ""),
  ev("Spenard Song Circle w/ Emma Hill, Stephen Hendricks, & Mr. Yambao", "Rage City Vintage", "Anchorage", "2024-04-19", "6p-9p", ""),
  ev("Moving Through the Boreal Forest", "The Nave", "Anchorage", "2024-04-19", "7:30p-9p", ""),
  ev("UAA Opera Ensemble & University Singers: Candide", "UAA Recital Hall", "Anchorage", "2024-04-19", "7:30p-9p", "", "theatre"),
  ev("R&B Live! It's A Vibe", "Williwaw Social", "Anchorage", "2024-04-19", "7p-10p", ""),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2024-04-19", "7p-12a", ""),
  ev("Speakeasy Sessions: Husse, Zane Penny, Carino", "Williwaw Social", "Anchorage", "2024-04-19", "7p-9p", ""),
  ev("Karaoke Night w/ DJ Lefty", "Anchorage Moose Lodge", "Anchorage", "2024-04-19", "8p-11:30p", ""),
  ev("Leo Ash Blues Band", "Billiard Palace", "Anchorage", "2024-04-19", "8p-12a", ""),
  ev("DJ Poe", "Floaters", "Anchorage", "2024-04-19", "8p-12a", ""),
  ev("2nd Annual Flow Party w/ Brosswurst, Dig Sista, Pokerchild, & Blacksmoke", "Koots", "Anchorage", "2024-04-19", "8p-2a", ""),
  ev("Schaefer Mueller and The Neon Highway Debut Concert w/ DJ Rico closing", "Pink Cadillac", "Anchorage", "2024-04-19", "8p-2a", ""),
  ev("Sweet Cheeks Cabaret: Dirty Deeds - A Murder Mystery Burlesque Show", "Broken Blender", "Anchorage", "2024-04-19", "8p-9:30p", ""),
  ev("The Red Flags", "Humpy’s", "Anchorage", "2024-04-19", "9:30p-1:30a", ""),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2024-04-19", "9p-11:30p", ""),
  ev("Friday Night Dance Lounge", "Alaska Dance Promotions", "Anchorage", "2024-04-19", "9p-12a", "", "dance"),
  ev("HarpDaddy & Cami From Miami", "The Carousel Lounge", "Anchorage", "2024-04-19", "9p-1a", ""),
  ev("DJ Ke", "Flattop Pizza & Pool", "Anchorage", "2024-04-19", "9p-1a", ""),
  ev("Latin Takeover Party w/ DJ Mykey T", "Matanuska Brewing Company", "Anchorage", "2024-04-19", "9p-1a", ""),
  ev("Blast From The Past", "Time Out Lounge", "Anchorage", "2024-04-19", "9p-2:30a", ""),

  // ═══ EAGLE RIVER — Friday April 19th ═══
  ev("Jubilee! Youth Performing Arts Show", "Mariner Theater", "Eagle River", "2024-04-19", "10p-2a", ""),
  ev("DJ Manny", "The Crowbar", "Eagle River", "2024-04-19", "10p-3:30a", ""),
  ev("Chords & Conversations: “Songwriters In The Round”", "The CATCH Restaurant & Bar", "Eagle River", "2024-04-19", "6:30p-8:45p", ""),
  ev("Piano Music by Erika", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2024-04-19", "6p-8p", ""),
  ev("Jerry Wessling Band", "Last Frontier Brewing", "Eagle River", "2024-04-19", "6p-9p", ""),
  ev("Ken Peltier Live", "Palmer Alehouse", "Eagle River", "2024-04-19", "7p-10p", ""),
  ev("Nothin But Trouble", "Garcia’s Cantina & Café", "Eagle River", "2024-04-19", "7p-11p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-04-19", "7p-11p", ""),
  ev("Comedian Kathleen Dunbar", "EVERETT’S", "Eagle River", "2024-04-19", "7p-8:30p", ""),
  ev("Sitka Fine Arts Camp: Annie & Annie Jr.", "Odess Theater", "Eagle River", "2024-04-19", "7p-9:30p", ""),
  ev("Alice in Wonderland", "Juneau-Douglas High School", "Eagle River", "2024-04-19", "7p-9p", ""),
  ev("Parlor in the Round", "Sheldon Community Arts Hanger", "Eagle River", "2024-04-19", "7p-9p", ""),
  ev("Ladies Night w/ Carey Seward, Caitlyn Frye, & Helen Graves", "The Cabin", "Eagle River", "2024-04-19", "8p-11p", ""),
  ev("DJ Traxmadeit Friday Night Takeover", "Tuffy’s", "Eagle River", "2024-04-19", "8p-1a", ""),
  ev("April Spring Weekend in Seward", "Yukon Bar", "Eagle River", "2024-04-19", "9a-11p", ""),
  ev("420 Fest w/ Live Music & Stand Up Comedy", "Pakalolo Tasting Room & Coffee Shop", "Eagle River", "2024-04-19", "9p-11p", "", "comedy"),
  ev("Loaded Karma", "The Sitzmark", "Eagle River", "2024-04-19", "9p-1a", ""),
  ev("Fiona Rose and the Show Ponies", "Fairview Inn", "Eagle River", "2024-04-19", "9p-1a", ""),

  // ═══ ANCHORAGE — Saturday April 20th ═══
  ev("Yachtly Crew", "Koot’s", "Anchorage", "2024-04-20", "10p-1a", ""),
  ev("DJ Kouley", "Al’s Alaskan Inn", "Anchorage", "2024-04-20", "10p-2a", ""),
  ev("Disney's Aladdin", "Alaska Center for The Performing Arts", "Anchorage", "2024-04-20", "1p-3:30p & 7:30p-10p", ""),
  ev("Open Music Jam", "Rage City Vintage", "Anchorage", "2024-04-20", "3p-6p", ""),
  ev("UAA Opera Ensemble & University Singers: Candide", "UAA Recital Hall", "Anchorage", "2024-04-20", "4p-5:30p & 7:30p-9p", "", "theatre"),
  ev("Jazz Jam", "Organic Oasis", "Anchorage", "2024-04-20", "4p-6:30p", ""),
  ev("Woodrow Live", "Anchorage Moose Lodge", "Anchorage", "2024-04-20", "6p-12a", ""),
  ev("Moving Through the Boreal Forest", "The Nave", "Anchorage", "2024-04-20", "7:30p-9p", ""),
  ev("6th Anniversary Party w/ Free Food & Glacier Blues Band", "The Carousel Lounge", "Anchorage", "2024-04-20", "7p-1a", ""),
  ev("Comedian Kathleen Dunbar", "Koot’s", "Anchorage", "2024-04-20", "7p-8:30p & 9p-10:30p", ""),
  ev("Karaoke w/ Host Steve Franklin", "Broken Blender", "Anchorage", "2024-04-20", "8p-11:45p", ""),
  ev("Spaffdaddy", "Billiard Palace", "Anchorage", "2024-04-20", "8p-12a", ""),
  ev("Country Night Dance Lessons & Music", "Pink Cadillac", "Anchorage", "2024-04-20", "8p-2a", "", "dance"),
  ev("Glacier Hoppers Band", "Humpy’s", "Anchorage", "2024-04-20", "9:30p-1a", ""),
  ev("Salsa Saturdays: Beginner Dance Class &Latin Dance Party", "Anya Latin Dance", "Anchorage", "2024-04-20", "9p-1a", "", "dance"),
  ev("420 Party w/ Loaded Karma, R&R Reggae, Rootzy Soul & Jarod Dominic", "Matanuska Brewing Company", "Anchorage", "2024-04-20", "9p-1a", ""),
  ev("Dankstep: A Dubstep 4/20 Party", "Koot’s", "Anchorage", "2024-04-20", "9p-2:30a", ""),
  ev("Big Bubble Rave: Spongebob Themed Party", "Williwaw Social", "Anchorage", "2024-04-20", "9p-2a", ""),

  // ═══ EAGLE RIVER — Saturday April 20th ═══
  ev("420 Fest w/ Live Music & Stand Up Comedy", "Pakalolo Tasting Room & Coffee Shop", "Eagle River", "2024-04-20", "10a-11p", "", "comedy"),
  ev("DJ Manny", "The Crowbar", "Eagle River", "2024-04-20", "10p-3:30a", ""),
  ev("Sitka Fine Arts Camp: Annie & Annie Jr.", "Odess Theater", "Eagle River", "2024-04-20", "2p-3p & 7p-9:30p", ""),
  ev("Alice in Wonderland", "Juneau-Douglas High School", "Eagle River", "2024-04-20", "2p-4p & 7p-9p", ""),
  ev("Total Solar Eclipse Experience", "Marie Drake Planetarium", "Eagle River", "2024-04-20", "6p-7p", ""),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2024-04-20", "6p-8p", ""),
  ev("Carhartts & Xtratufs Ball w/ Big Chimney Barn Dance", "Challenger Learning Center of Alaska", "Eagle River", "2024-04-20", "6p-9p", "", "dance"),
  ev("Jerry Wessling Band", "Everett’s", "Eagle River", "2024-04-20", "6p-9p", ""),
  ev("Choir of the North", "Charles Davis Concert Hall", "Eagle River", "2024-04-20", "7:30p-9p", ""),
  ev("Schaefer Mueller & Alex White Live", "Chop House", "Eagle River", "2024-04-20", "7p-10p", ""),
  ev("Rewind: Juneau Drag Throwback Show!", "Red Dog Saloon", "Eagle River", "2024-04-20", "7p-11:45p", ""),
  ev("Open Mic Night", "Garcia’s Cantina & Café", "Eagle River", "2024-04-20", "7p-11p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-04-20", "7p-11p", ""),
  ev("Parlor in the Round w/ Alex Lahey, Emily Anderson & Rachel DeTemple", "Palace Theater", "Eagle River", "2024-04-20", "7p-9p", ""),
  ev("Contra Dance w/ The Simple Sugars", "Pioneer Park Dance Hall", "Eagle River", "2024-04-20", "8p-10p", "", "dance"),
  ev("Solo Artist Night w/ Gail Norton, Carl Addington, & Johnny J", "The Cabin", "Eagle River", "2024-04-20", "8p-11p", ""),
  ev("Uplift 420 Reggae Jam", "Alibi Bar & Café", "Eagle River", "2024-04-20", "9:30p-2a", ""),
  ev("April Spring Weekend in Seward", "Yukon Bar", "Eagle River", "2024-04-20", "9a-11p", ""),
  ev("420 w/ H3", "The Sitzmark", "Eagle River", "2024-04-20", "9p-1a", ""),
  ev("DJ Brazen", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-04-20", "9p-1a", ""),
  ev("DJ Butchy", "Fairview Inn", "Eagle River", "2024-04-20", "9p-1a", ""),

  // ═══ ANCHORAGE — Sunday April 21st ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2024-04-21", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2024-04-21", "10p-2a", ""),
  ev("Ghoul Bye! Zombie Drag Brunch & Farewell to Scarlett Crypt", "Williwaw Social", "Anchorage", "2024-04-21", "11:30a-2p", "", "community"),
  ev("Sunday Brunch w/ Aspenyarro & Grace C. Elliot", "Writer’s Block Bookstore & Café", "Anchorage", "2024-04-21", "12p-2p", "", "community"),
  ev("Bluegrass Brunch w/ Todd Grebe & Friends", "Broken Blender", "Anchorage", "2024-04-21", "12p-4p", "", "community"),
  ev("Disney's Aladdin", "Alaska Center for The Performing Arts", "Anchorage", "2024-04-21", "1p-3:30p", ""),
  ev("Songwriter's Circle", "Rage City Vintage", "Anchorage", "2024-04-21", "3p-6p", ""),
  ev("Open Mic/Jam Night w/ Tyrone Palmer", "VFW Post 1685", "Anchorage", "2024-04-21", "4:30p-8:30p", ""),
  ev("UAA Opera Ensemble & University Singers: Candide", "UAA Recital Hall", "Anchorage", "2024-04-21", "4p-5:30p", "", "theatre"),
  ev("Sunday Blues Jam Hosted by the Rebel Blues Band", "Billiard Palace", "Anchorage", "2024-04-21", "6p-10p", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2024-04-21", "6p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2024-04-21", "8:30p-10p", "", "comedy"),
  ev("Blast From The Past", "Time Out Lounge", "Anchorage", "2024-04-21", "8:30p-1a", ""),
  ev("Open Mic! Overlorded by Wash Your Hands", "Van’s Dive Bar", "Anchorage", "2024-04-21", "8p-12a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2024-04-21", "9p-2a", ""),

  // ═══ EAGLE RIVER — Sunday April 21st ═══
  ev("420 Fest w/ Jeff Dean Stand Up Comedy", "Pakalolo Tasting Room & Coffee Shop", "Eagle River", "2024-04-21", "12p-2p", "", "comedy"),
  ev("Sitka Fine Arts Camp: Annie & Annie Jr.", "Odess Theater", "Eagle River", "2024-04-21", "2p-3p", ""),
  ev("Alice in Wonderland", "Juneau-Douglas High School", "Eagle River", "2024-04-21", "2p-4p & 7p-9p", ""),
  ev("Ellie Martinson, Senior Voice Recital", "Charles Davis Concert Hall", "Eagle River", "2024-04-21", "4p-5:30p", ""),
  ev("Emily Anderson & Alex Lahey", "The Pub", "Eagle River", "2024-04-21", "7p-110p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-04-21", "8p-12a", ""),
  ev("April Spring Weekend in Seward", "Yukon Bar", "Eagle River", "2024-04-21", "9a-8p", ""),
  ev("Medium Build Live", "The Sitzmark", "Eagle River", "2024-04-21", "9p-1a", ""),

  // ═══ ANCHORAGE — Monday April 22nd ═══
  ev("AJW Community Jazz Jam Session", "K Street Market", "Anchorage", "2024-04-22", "6p-9p", ""),
  ev("Open Mic Night w/ Mike Miller", "Blue Fox Cocktail Lounge", "Anchorage", "2024-04-22", "8p-12a", ""),
  ev("Koots Open Mic", "Koot’s", "Anchorage", "2024-04-22", "9p-12a", ""),
  ev("Jay Straw's Bass to Mouth Mondays!", "Van’s Dive Bar", "Anchorage", "2024-04-22", "9p-12a", ""),

  // ═══ EAGLE RIVER — Monday April 22nd ═══
  ev("Open Mic Nights at the Sitz", "The Sitzmark", "Eagle River", "2024-04-22", "7p-10p", ""),
  ev("Karaoke Mondays", "The Crystal Saloon", "Eagle River", "2024-04-22", "8p-11p", ""),
  ev("Karaoke Night", "The Crowbar", "Eagle River", "2024-04-22", "8p-12a", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-04-22", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday April 23rd ═══
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2024-04-23", "6:30p-10p", ""),
  ev("Tuesday Night Karaoke w/ Rocky", "Tuffy’s", "Eagle River", "2024-04-23", "7p-10p", ""),
  ev("Lost Girl", "Kayhi Auditorium", "Eagle River", "2024-04-23", "7p-8:30p", ""),
  ev("Naked Stage Productions: Comedy Night", "International Hotel & Bar", "Eagle River", "2024-04-23", "7p-9p", "", "comedy"),
  ev("Jazz Jam", "The Crystal Saloon", "Eagle River", "2024-04-23", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-04-23", "8p-12a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-04-23", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday April 24th ═══
  ev("Dancing to Dallas! West Coast Swing Competition w/ lots of Prizes!", "Koot’s", "Anchorage", "2024-04-24", "6p-12a", "", "dance"),
  ev("Alaska Writer's Guild: Open Mic Night", "Writer’s Block Bookstore & Café", "Anchorage", "2024-04-24", "6p-8p", ""),
  ev("A-Town Sharps", "Organic Oasis", "Anchorage", "2024-04-24", "9p-11p", ""),

  // ═══ EAGLE RIVER — Wednesday April 24th ═══
  ev("Open Mic", "Schwabenhof", "Eagle River", "2024-04-24", "7:30p-11p", ""),
  ev("UAF Percission Ensembles", "Charles Davis Concert Hall", "Eagle River", "2024-04-24", "7:30p-9p", ""),
  ev("Open Mic Night w/ Matt & Chelsea", "Tuffy’s", "Eagle River", "2024-04-24", "7p-10p", ""),
  ev("Lost Girl", "Kayhi Auditorium", "Eagle River", "2024-04-24", "7p-8:30p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2024-04-24", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-04-24", "8p-12a", ""),
  ev("Open Mic with Jimmy Sandy", "Fairview Inn", "Eagle River", "2024-04-24", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-04-24", "9p-2a", ""),

  // ═══ EAGLE RIVER — Thursday April 25th ═══
  ev("Open Mic", "Alaskan Hotel and Bar", "Eagle River", "2024-04-25", "8p-11p", ""),

  // ═══ ANCHORAGE — Thursday June 13th ═══
  ev("Karaoke", "Floaters", "Anchorage", "2024-06-13", "8p-12a", ""),

  // ═══ EAGLE RIVER — Thursday June 13th ═══
  ev("The VIntage Retro", "Chair 5", "Eagle River", "2024-06-13", "10:30p-1a", ""),
  ev("Karaoke", "International Hotel & Bar", "Eagle River", "2024-06-13", "10p-2a", ""),
  ev("Bach's Lunch", "Odess Theater", "Eagle River", "2024-06-13", "12p-1p", ""),
  ev("Live Music by Local Musicians", "Mykel’s Restaurant", "Eagle River", "2024-06-13", "5p-9p", ""),
  ev("Beer Choir", "Devil’s Club Brewing", "Eagle River", "2024-06-13", "6:30p-9p", ""),
  ev("Dirty Chello", "Gold Town Theatre", "Eagle River", "2024-06-13", "7p-10p", ""),
  ev("The AKoustic Project", "Tailgater’s Sport’s Bar & Grill", "Eagle River", "2024-06-13", "7p-10p", ""),
  ev("DJ Butchy", "Fairview Inn", "Eagle River", "2024-06-13", "7p-11p", ""),
  ev("Karaoke w/ Sadie", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-06-13", "7p-12a", ""),
  ev("Karaoke Basket & Brews w/ DJ Tony Taylor", "Pioneer Park", "Eagle River", "2024-06-13", "7p-9p", ""),
  ev("Karaoke Thursdays", "The Pub", "Eagle River", "2024-06-13", "8:30p-11p", ""),
  ev("Open Mic Night", "The Cabin", "Eagle River", "2024-06-13", "8p-11p", ""),
  ev("Open Mic", "Alaskan Hotel and Bar", "Eagle River", "2024-06-13", "8p-11p", ""),
  ev("Karaoke Thursdays", "The Crystal Saloon", "Eagle River", "2024-06-13", "8p-11p", ""),
  ev("Open Mic w/ Cody Kniceley", "4 Royle Parkers", "Eagle River", "2024-06-13", "8p-12a", ""),
  ev("Karaoke Night", "Alibi Bar & Café", "Eagle River", "2024-06-13", "9:15p-12:15a", ""),
  ev("Dance Party w/ DJ Hankerchief", "Yukon Bar", "Eagle River", "2024-06-13", "9p-2a", "", "dance"),

  // ═══ ANCHORAGE — Friday June 14th ═══
  ev("ChickenstockMusic Festival", "Airport Road", "Anchorage", "2024-06-14", "1p-1a", "", "festival"),

  // ═══ EAGLE RIVER — Friday June 14th ═══
  ev("Glacier Hopper Band", "Mug-Shot Saloon", "Eagle River", "2024-06-14", "10p-2a", ""),
  ev("DJ Manny", "The Crowbar", "Eagle River", "2024-06-14", "10p-3:30a", ""),
  ev("SMA Band, Orchestra, & Symphony", "UAF Charles Davis Concert Hall", "Eagle River", "2024-06-14", "4:30p-8p", ""),
  ev("2nd Annual Backyard Summer Concert Series", "Justin Cole’s Down East Saloon", "Eagle River", "2024-06-14", "4p-10p", ""),
  ev("H3", "Talkeetna Village Park", "Eagle River", "2024-06-14", "5p-7p", ""),
  ev("Hwy9", "Dirty Skillet", "Eagle River", "2024-06-14", "6p-10p", ""),
  ev("Brett Michaels", "Matanuska Brewing", "Eagle River", "2024-06-14", "6p-11p", ""),
  ev("Piano Music by Erika", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2024-06-14", "6p-8p", ""),
  ev("Hope Social Club", "Palmer Alehouse", "Eagle River", "2024-06-14", "7p-10p", ""),
  ev("River Lovers", "Mountain High Pizza Pie", "Eagle River", "2024-06-14", "7p-10p", ""),
  ev("The California Honeydrops", "Creekbend Company", "Eagle River", "2024-06-14", "7p-11p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-06-14", "7p-11p", ""),
  ev("Science Fiction Movie KIRA (Free Showing)", "Marie Drake Planetarium", "Eagle River", "2024-06-14", "7p-8p", ""),
  ev("Chopin: Etudes en Jazz with Matt Herskowitz", "Harrigan Centennial Hall", "Eagle River", "2024-06-14", "7p-9p", ""),
  ev("Live Music w/ Lia Everett", "Meta & Rose", "Eagle River", "2024-06-14", "7p-9p", ""),
  ev("The Getting Strangers", "The Crystal Saloon", "Eagle River", "2024-06-14", "8:30p-11p", ""),
  ev("LuLu Small w/ Carey Seward", "The Cabin", "Eagle River", "2024-06-14", "8p-11p", ""),
  ev("Roland Roberts Band", "Trail Lake Lodge", "Eagle River", "2024-06-14", "8p-12a", ""),
  ev("The Fringe & then Karaoke", "Magpies On The Fly", "Eagle River", "2024-06-14", "8p-12a", ""),
  ev("Nothin' But Karma Live", "Yukon Bar", "Eagle River", "2024-06-14", "9p-12a", ""),
  ev("H3", "Fairview Inn", "Eagle River", "2024-06-14", "9p-1a", ""),

  // ═══ ANCHORAGE — Saturday June 15th ═══
  ev("ChickenstockMusic Festival", "Airport Road", "Anchorage", "2024-06-15", "12p-1a", "", "festival"),

  // ═══ EAGLE RIVER — Saturday June 15th ═══
  ev("Glacier Hopper Band", "Mug-Shot Saloon", "Eagle River", "2024-06-15", "10p-2a", ""),
  ev("DJ Manny", "The Crowbar", "Eagle River", "2024-06-15", "10p-3:30a", ""),
  ev("Brothers of Tom", "Mountain High Pizza Pie", "Eagle River", "2024-06-15", "2p-5p", ""),
  ev("Beach Party & Music Festival", "Everett’s", "Eagle River", "2024-06-15", "3p-9p", "", "festival"),
  ev("Spindrift with Jim Pfeiffenberger", "Dirty Skillet", "Eagle River", "2024-06-15", "6p-10p", ""),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2024-06-15", "6p-8p", ""),
  ev("3000-21 Live", "Wonderland Park", "Eagle River", "2024-06-15", "6p-9p", ""),
  ev("Matt Hopper & the Roman Candles", "Palmer Alehouse", "Eagle River", "2024-06-15", "7p-10p", ""),
  ev("Loop of Alley", "Mountain High Pizza Pie", "Eagle River", "2024-06-15", "7p-10p", ""),
  ev("The California Honeydrops", "Creekbend Company", "Eagle River", "2024-06-15", "7p-11p", ""),
  ev("Denali Cooks", "Historic Hope Cafe & Campground (Seaview)", "Eagle River", "2024-06-15", "7p-11p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-06-15", "7p-11p", ""),
  ev("Simply Three Returns to Sitka!", "Harrigan Centennial Hall", "Eagle River", "2024-06-15", "7p-9p", ""),
  ev("Live Music w/ Lia Everett", "Meta & Rose", "Eagle River", "2024-06-15", "7p-9p", ""),
  ev("Blues Child", "Tuffy’s", "Eagle River", "2024-06-15", "8p-11p", ""),
  ev("Juneau Drag Presents GLAM Dragstravaganza", "Elizabeth Peratrovich Hall", "Eagle River", "2024-06-15", "8p-11p", ""),
  ev("Valley Below & Ryan Bowers and the Brain Trust", "The Boatel", "Eagle River", "2024-06-15", "8p-12a", ""),
  ev("Summer Heatwave w/ DJ TraxMadeIt", "The Cabin", "Eagle River", "2024-06-15", "8p-12a", ""),
  ev("Alaska Redd’s 907 Hiphop 24’ Tour", "4 Royle Parkers", "Eagle River", "2024-06-15", "8p-12a", ""),
  ev("Saturday Open Mic", "Magpies On The Fly", "Eagle River", "2024-06-15", "8p-12a", ""),
  ev("Joy Pearson", "The Crystal Saloon", "Eagle River", "2024-06-15", "9p-11p", ""),
  ev("Nothin' But Karma Live", "Yukon Bar", "Eagle River", "2024-06-15", "9p-12a", ""),
  ev("Tamera Ashburn Band", "Fairview Inn", "Eagle River", "2024-06-15", "9p-1a", ""),

  // ═══ ANCHORAGE — Sunday June 16th ═══
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2024-06-16", "6p-9p", ""),

  // ═══ EAGLE RIVER — Sunday June 16th ═══
  ev("Community Crab Feed", "Crescent Harbor Shelter", "Eagle River", "2024-06-16", "3p-6p", "", "community"),
  ev("Steve Durr", "Mountain High Pizza Pie", "Eagle River", "2024-06-16", "5p-8p", ""),
  ev("Schaefer Mueller", "BearPaw River Brewing", "Eagle River", "2024-06-16", "5p-8p", ""),
  ev("Andy Mullen", "Fairview Inn", "Eagle River", "2024-06-16", "5p-9p", ""),
  ev("Open Mic Night", "Everett’s", "Eagle River", "2024-06-16", "6p-10p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-06-16", "8p-12a", ""),
  ev("Alaska Redd's 907 HipHop 24' Tour", "Yukon Bar", "Eagle River", "2024-06-16", "9p-12a", ""),

  // ═══ ANCHORAGE — Monday June 17th ═══
  ev("AJW Community Jazz Jam Session", "K Street Market", "Anchorage", "2024-06-17", "6p-9p", ""),
  ev("Open Mic Night w/ Mike Miller", "Blue Fox Cocktail Lounge", "Anchorage", "2024-06-17", "8p-12a", ""),
  ev("Koots Open Mic", "Koot’s", "Anchorage", "2024-06-17", "9p-12a", ""),
  ev("Jay Straw's Bass to Mouth Mondays!", "Van’s Dive Bar", "Anchorage", "2024-06-17", "9p-12a", ""),

  // ═══ EAGLE RIVER — Monday June 17th ═══
  ev("Karaoke Night", "The Crowbar", "Eagle River", "2024-06-17", "8p-12a", ""),
  ev("Dance Lessons & Open Dance Floor", "Magpies On The Fly", "Eagle River", "2024-06-17", "8p-12a", "", "dance"),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-06-17", "9p-12a", ""),
  ev("Karaoke", "Fairview Inn", "Eagle River", "2024-06-17", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-06-17", "9p-2a", ""),

  // ═══ ANCHORAGE — Tuesday June 18th ═══
  ev("Lunch on the Lawn: SpeNerds", "Anchorage Museum", "Anchorage", "2024-06-18", "11:30a-1:30p", ""),
  ev("Taco Tuesdays on the Roof w/ DJ Joe Brady", "Williwaw Social", "Anchorage", "2024-06-18", "4p-10p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2024-06-18", "6p-8p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2024-06-18", "7p-11p", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-06-18", "8p-2a", ""),
  ev("Joey Fender", "Koot’s", "Anchorage", "2024-06-18", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday June 18th ═══
  ev("Youth Jam Night", "Sheldon Community Arts Hanger", "Eagle River", "2024-06-18", "5p-7p", ""),
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2024-06-18", "6:30p-10p", ""),
  ev("Yachtly Crew", "Chepo’s", "Eagle River", "2024-06-18", "6p-9p", ""),
  ev("Tuesday Night Karaoke w/ Rocky", "The Cabin", "Eagle River", "2024-06-18", "7p-10p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-06-18", "8p-12a", ""),
  ev("Dance Social & Game Night", "Four Corner’s Lounge", "Eagle River", "2024-06-18", "8p-12a", "", "dance"),
  ev("Jazz Jam", "The Crystal Saloon", "Eagle River", "2024-06-18", "9p-11p", ""),
  ev("Open Jam Night", "Yukon Bar", "Eagle River", "2024-06-18", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday June 19th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2024-06-19", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2024-06-19", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2024-06-19", "10p-2a", ""),
  ev("Backyard BBQ w/ Brett Young, Kendal Marvel, & Hayley Winters", "Chinook Parking Lot", "Anchorage", "2024-06-19", "4p-10p", ""),
  ev("Sun Sets Roof Party w/ DJ Lloyds Noize", "Williwaw Social", "Anchorage", "2024-06-19", "6p-10p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2024-06-19", "7p-10p", ""),
  ev("Line Dance Night", "Pink Cadillac", "Anchorage", "2024-06-19", "7p-11p", "", "dance"),
  ev("Country Night", "Koot’s", "Anchorage", "2024-06-19", "7p-1a", ""),
  ev("Open Mic", "Lil Babes Cocktail Lounge", "Anchorage", "2024-06-19", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-06-19", "8p-2a", ""),
  ev("KARAOKE w/ Uswi", "Van’s Dive Bar", "Anchorage", "2024-06-19", "9p-12a", ""),

  // ═══ EAGLE RIVER — Wednesday June 19th ═══
  ev("Midweek at Miner Music Center", "Stevenson Hall", "Eagle River", "2024-06-19", "5:30p-7:30p", ""),
  ev("Music in the Park Series: Alder Street", "Soldotna Creek Park", "Eagle River", "2024-06-19", "6p-9p", ""),
  ev("Open Mic", "Schwabenhof", "Eagle River", "2024-06-19", "7:30p-11p", ""),
  ev("Mike Stackhouse Live", "The Cabin", "Eagle River", "2024-06-19", "7p-10p", ""),
  ev("House Concert Series: Headbolt Heaters", "Running Reindeer Ranch", "Eagle River", "2024-06-19", "7p-8p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2024-06-19", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-06-19", "8p-12a", ""),
  ev("Open Mic Night", "Fairview Inn", "Eagle River", "2024-06-19", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-06-19", "9p-2a", ""),

  // ═══ EAGLE RIVER — Wednesday July 10th ═══
  ev("Kuf Knotz & Christine Elise", "The Roadside Potato", "Eagle River", "2024-07-10", "", ""),
  ev("Music in the Park Series: Bunny Swan Band", "Soldotna Creek Park", "Eagle River", "2024-07-10", "6p-9p", ""),
  ev("Campfire Sessions w/ Jerry Wessling", "LuLu’s Tent’s & Events", "Eagle River", "2024-07-10", "6p-9p", ""),
  ev("Open Mic", "Schwabenhof", "Eagle River", "2024-07-10", "7:30p-11p", ""),
  ev("Mike Stackhouse Live", "The Cabin", "Eagle River", "2024-07-10", "7p-10p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2024-07-10", "8p-11p", ""),
  ev("Open Mic Wednesdays", "The Crystal Saloon", "Eagle River", "2024-07-10", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-07-10", "8p-12a", ""),
  ev("Open Mic Night", "Fairview Inn", "Eagle River", "2024-07-10", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-07-10", "9p-2a", ""),

  // ═══ ANCHORAGE — Thursday July 11th ═══
  ev("Karaoke", "Floaters", "Anchorage", "2024-07-11", "8p-12a", ""),

  // ═══ COOPER LANDING — Thursday July 11th ═══
  ev("Mario Carboni", "Gwin’s Lodge", "Cooper Landing", "2024-07-11", "7p-9:30p", ""),
  ev("Skrizzly Adams Lake House Town Tour", "Trophy Lounge", "Cooper Landing", "2024-07-11", "8p-10p", ""),

  // ═══ EAGLE RIVER — Thursday July 11th ═══
  ev("Rick Brooks", "Chair 5", "Eagle River", "2024-07-11", "10:30p-1a", ""),
  ev("Live Music by Local Musicians", "Mykel’s Restaurant", "Eagle River", "2024-07-11", "5p-9p", ""),
  ev("Gaelic Storm", "Creekbend Café", "Eagle River", "2024-07-11", "6p-10p", ""),
  ev("Reeves Brothers w/ Ken Peltier", "Four Corner’s Lounge", "Eagle River", "2024-07-11", "6p-10p", ""),
  ev("Gaelic Storm", "Palmer Alehouse", "Eagle River", "2024-07-11", "7p-10p", ""),
  ev("Jimmy Sandy", "Mountain High Pizza Pie", "Eagle River", "2024-07-11", "7p-10p", ""),
  ev("The AKoustic Project", "Tailgater’s Sport’s Bar & Grill", "Eagle River", "2024-07-11", "7p-10p", ""),
  ev("Karaoke w/ Sadie", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-07-11", "7p-12a", ""),
  ev("Karaoke Basket & Brews Party w/ DJ Tony Taylor", "Alaska Salmon Bake", "Eagle River", "2024-07-11", "7p-9p", ""),
  ev("Open Mic Night", "The Cabin", "Eagle River", "2024-07-11", "8p-11p", ""),
  ev("Open Mic", "Alaskan Hotel and Bar", "Eagle River", "2024-07-11", "8p-11p", ""),
  ev("Karaoke Thursdays", "The Crystal Saloon", "Eagle River", "2024-07-11", "8p-11p", ""),
  ev("Open Mic w/ Cody Kniceley", "4 Royle Parkers", "Eagle River", "2024-07-11", "8p-12a", ""),
  ev("Karaoke Night", "Alibi Bar & Café", "Eagle River", "2024-07-11", "9:15p-12:15a", ""),
  ev("Dance Party w/ DJ Hankerchief", "Yukon Bar", "Eagle River", "2024-07-11", "9p-2a", "", "dance"),

  // ═══ COOPER LANDING — Friday July 12th ═══
  ev("Luna & Ursus", "Gwin’s Lodge", "Cooper Landing", "2024-07-12", "7p-9p", ""),

  // ═══ EAGLE RIVER — Friday July 12th ═══
  ev("Pudgies, Gary Omen, & Discpoians", "Kharacters", "Eagle River", "2024-07-12", "10p-2a", ""),
  ev("DJ Blaque", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-07-12", "10p-2a", ""),
  ev("Bear Paw Festival", "Eagle River Town Square Park", "Eagle River", "2024-07-12", "3p-10p", "", "festival"),
  ev("Deke & Whippersnappers", "Talkeetna Village Park", "Eagle River", "2024-07-12", "5p-7p", ""),
  ev("Ukulele Russ", "Dirty Skillet", "Eagle River", "2024-07-12", "6p-10p", ""),
  ev("Piano Music by Erika", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2024-07-12", "6p-8p", ""),
  ev("Green Light Circus Camp: Wayward Wonders", "Sheldon Community Arts Hanger", "Eagle River", "2024-07-12", "6p-9p", ""),
  ev("The Ken Peltier Band", "Palmer Alehouse", "Eagle River", "2024-07-12", "7p-10p", ""),
  ev("Steve Norwood", "Mountain High Pizza Pie", "Eagle River", "2024-07-12", "7p-10p", ""),
  ev("Jerry Wessling", "Everett’s", "Eagle River", "2024-07-12", "7p-10p", ""),
  ev("Gaelic Storm", "Creekbend Café", "Eagle River", "2024-07-12", "7p-11p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-07-12", "7p-11p", ""),
  ev("Live Music w/ Lia Everett", "Meta & Rose", "Eagle River", "2024-07-12", "7p-9p", ""),
  ev("Salsa Night Social Dancing", "Tacos Cancun Mexican Grill", "Eagle River", "2024-07-12", "8:30p-12:30p", "", "dance"),
  ev("Schaefer Mueller and The Neon Highway!", "Odd Man Rush", "Eagle River", "2024-07-12", "8p-11p", ""),
  ev("Zen Trembles", "Magpies On The Fly", "Eagle River", "2024-07-12", "8p-12a", ""),
  ev("The Sun: Creator/Destroyer Free Presentation", "Marie Drake Planetarium", "Eagle River", "2024-07-12", "8p-9p", ""),
  ev("AK Inverted Presents: Amatuer Night", "The Crystal Saloon", "Eagle River", "2024-07-12", "9p-11:30p", ""),
  ev("Skrizzly Adams Lake House Town Tour", "The Cabin", "Eagle River", "2024-07-12", "9p-12a", ""),
  ev("Baddies With Bars", "Yukon Bar", "Eagle River", "2024-07-12", "9p-12a", ""),
  ev("Deke & Whippersnappers", "Fairview Inn", "Eagle River", "2024-07-12", "9p-1a", ""),

  // ═══ ANCHORAGE — Saturday July 13th ═══
  ev("Parton My French", "Koot’s", "Anchorage", "2024-07-13", "10p-1a", ""),
  ev("KnowleDJ & Joe Brady's All Decades Video Dance Party", "Williwaw Social", "Anchorage", "2024-07-13", "10p-2a", "", "dance"),
  ev("Woofstock 2024", "American Legion Spenard Post 28", "Anchorage", "2024-07-13", "2p-9p", ""),
  ev("Parking Lot Party with Grace C. Elliot and Kuf Knotz & Christine Elise", "Penny Royalty", "Anchorage", "2024-07-13", "4p-10p", ""),
  ev("Jazz in the Park: Spenard Jazz Messengers", "Peratrovich Park", "Anchorage", "2024-07-13", "4p-6p", ""),
  ev("Poetry Slam w/ Cash Prizes", "Writer’s Block Bookstore & Café", "Anchorage", "2024-07-13", "6p-8p", ""),
  ev("Garden Grooves: Live Music in the Beer Garden", "49th State Brewing Co", "Anchorage", "2024-07-13", "6p-9p", ""),
  ev("3OH!3 Live!", "Williwaw Social", "Anchorage", "2024-07-13", "7p-10p", ""),
  ev("Schaefer Mueller & the Neon Highway on the Roof", "Williwaw Social", "Anchorage", "2024-07-13", "7p-10p", ""),
  ev("Santoro", "Anchorage Social Dance Club", "Anchorage", "2024-07-13", "7p-11p", ""),
  ev("The Red Flags", "Humpy’s", "Anchorage", "2024-07-13", "8:30p-12a", ""),
  ev("Karaoke w/ DJ Sparkles", "Broken Blender", "Anchorage", "2024-07-13", "8p-12a", ""),
  ev("Sweet Cheeks Cabaret: Glitter & Gold", "Broken Blender", "Anchorage", "2024-07-13", "8p-9:30p", ""),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2024-07-13", "9p-11:30p", ""),
  ev("DJ Ke", "Flattop Pizza & Pool", "Anchorage", "2024-07-13", "9p-1a", ""),
  ev("Blast From The Past", "Time Out Lounge", "Anchorage", "2024-07-13", "9p-2:30a", ""),

  // ═══ EAGLE RIVER — Saturday July 13th ═══
  ev("Bear Paw Parade After Party w/ Parton My French", "ACF Church", "Eagle River", "2024-07-13", "10:30a-11a & 1p-2:30p", ""),
  ev("Mighty Machines", "Museum of Alaska Transportation and Industry", "Eagle River", "2024-07-13", "10a-5p", ""),
  ev("Noche Latina w/ DJ Beto", "The Crystal Saloon", "Eagle River", "2024-07-13", "10p-1a", ""),
  ev("Baddies With Bars", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-07-13", "10p-2a", ""),
  ev("HatcherRomp Music Festival 2024", "Skeetawk", "Eagle River", "2024-07-13", "12p-10p", "", "festival"),
  ev("Green Light Circus Camp: Saturday Carnival", "Sheldon Community Arts Hanger", "Eagle River", "2024-07-13", "12p-6p", ""),
  ev("Bear Paw Festival", "Eagle River Town Square Park", "Eagle River", "2024-07-13", "3p-10p", "", "festival"),
  ev("The Jangle Bees & Skrizzly Adams", "Palmer Alehouse", "Eagle River", "2024-07-13", "4p-10p", ""),
  ev("22nd Annual Murder Mystery Dinner Theatre", "Fairbanks Drama Association", "Eagle River", "2024-07-13", "5p-9p", "", "theatre"),
  ev("THV", "Dirty Skillet", "Eagle River", "2024-07-13", "6p-10p", ""),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2024-07-13", "6p-8p", ""),
  ev("Green Light Circus Camp: Wayward Wonders", "Sheldon Community Arts Hanger", "Eagle River", "2024-07-13", "6p-9p", ""),
  ev("GrungeBob Rockin the Cabin", "The Cabin", "Eagle River", "2024-07-13", "7p-10p", "", "community"),
  ev("Brothers of Tom", "Mountain High Pizza Pie", "Eagle River", "2024-07-13", "7p-10p", ""),
  ev("Gaelic Storm", "Creekbend Café", "Eagle River", "2024-07-13", "7p-11p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-07-13", "7p-11p", ""),
  ev("Free Dance Lessons with Shufflin' Country Style", "American Legion Post 15", "Eagle River", "2024-07-13", "7p-8p", "", "dance"),
  ev("Live Music w/ Lia Everett", "Meta & Rose", "Eagle River", "2024-07-13", "7p-9p", ""),
  ev("Outdoor Concert Series with Lulu Small & Carey Seward", "Tuffy’s", "Eagle River", "2024-07-13", "8p-11p", ""),
  ev("Saturday Open Mic", "Magpies On The Fly", "Eagle River", "2024-07-13", "8p-12a", ""),
  ev("In the Groove with Koa & Friends", "Yukon Bar", "Eagle River", "2024-07-13", "9p-12a", ""),
  ev("Deke & Whippersnappers", "Fairview Inn", "Eagle River", "2024-07-13", "9p-1a", ""),

  // ═══ ANCHORAGE — Sunday July 14th ═══
  ev("Kuf Knotz & Christine Elise", "Sunday Fresh Market", "Anchorage", "2024-07-14", "", ""),
  ev("Summer Family Fun Days at the Zoo", "Alaska Zoo", "Anchorage", "2024-07-14", "10:30a-11a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2024-07-14", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2024-07-14", "10p-2a", ""),
  ev("Sunday Brunch w/ Grace C. Elliot", "Writer’s Block Bookstore & Café", "Anchorage", "2024-07-14", "12p-2p", "", "community"),
  ev("Open Mic & Jam", "VFW Post 1685", "Anchorage", "2024-07-14", "4:30p-8:30p", ""),
  ev("SunDaze Roof Party w/ DJ GRE", "Williwaw Social", "Anchorage", "2024-07-14", "4p-10p", ""),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2024-07-14", "6p-10p", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2024-07-14", "6p-9p", ""),
  ev("Solo Sundays: Schaefer Mueller", "Humpy’s", "Anchorage", "2024-07-14", "7p-10:30p", ""),
  ev("Open Mic Night w/ Mister Boobs", "Broken Blender", "Anchorage", "2024-07-14", "7p-10p", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2024-07-14", "7p-11p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2024-07-14", "8:30p-10p", "", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2024-07-14", "8:30p-1a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2024-07-14", "9p-2a", ""),

  // ═══ EAGLE RIVER — Sunday July 14th ═══
  ev("Steve Durr", "Mountain High Pizza Pie", "Eagle River", "2024-07-14", "5p-8p", ""),
  ev("Open Mic Night", "Everett’s", "Eagle River", "2024-07-14", "6p-10p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-07-14", "8p-12a", ""),
  ev("Mario Carboni, The Honky-Tonk Rebel", "Yukon Bar", "Eagle River", "2024-07-14", "9p-12a", ""),
  ev("Ukulele Russ & His One Man Frontier Band", "Fairview Inn", "Eagle River", "2024-07-14", "9p-1a", ""),

  // ═══ ANCHORAGE — Monday July 15th ═══
  ev("AJW Community Jazz Jam Session", "K Street Market", "Anchorage", "2024-07-15", "6p-9p", ""),
  ev("Open Mic Night w/ Mike Miller", "Blue Fox Cocktail Lounge", "Anchorage", "2024-07-15", "8p-12a", ""),
  ev("Koots Open Mic", "Koot’s", "Anchorage", "2024-07-15", "9p-12a", ""),
  ev("Jay Straw's Bass to Mouth Mondays!", "Van’s Dive Bar", "Anchorage", "2024-07-15", "9p-12a", ""),

  // ═══ EAGLE RIVER — Monday July 15th ═══
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-07-15", "9p-12a", ""),
  ev("Karaoke", "Fairview Inn", "Eagle River", "2024-07-15", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-07-15", "9p-2a", ""),

  // ═══ ANCHORAGE — Tuesday July 16th ═══
  ev("Lunch on the Lawn: Kuf Knots & Christine Elise", "Anchorage Museum", "Anchorage", "2024-07-16", "11:30a-1:30p", ""),
  ev("Taco Tuesdays on the Roof w/ DJ Joe Brady", "Williwaw Social", "Anchorage", "2024-07-16", "4p-10p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2024-07-16", "6p-8p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2024-07-16", "7p-11p", ""),
  ev("Ice Cube Live In Concert", "Alaska Airlines Center", "Anchorage", "2024-07-16", "8p-11p", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-07-16", "8p-2a", ""),
  ev("Joey Fender", "Koot’s", "Anchorage", "2024-07-16", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday July 16th ═══
  ev("Youth Jam Night", "Sheldon Community Arts Hanger", "Eagle River", "2024-07-16", "5p-7p", ""),
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2024-07-16", "6:30p-10p", ""),
  ev("Taco Tuesdays with Jerry Wessling", "Tug Bar & Goose Bay Inn", "Eagle River", "2024-07-16", "6p-9p", ""),
  ev("Open Stage Night w/ Sabrina Speers", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-07-16", "7:30p-10:30p", ""),
  ev("Tuesday Night Karaoke w/ Rocky", "The Cabin", "Eagle River", "2024-07-16", "8p-11p", ""),
  ev("Jazz Jam Tuesdays", "The Crystal Saloon", "Eagle River", "2024-07-16", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-07-16", "8p-12a", ""),
  ev("Open Jam Night", "Yukon Bar", "Eagle River", "2024-07-16", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday July 17th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2024-07-17", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2024-07-17", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2024-07-17", "10p-2a", ""),
  ev("Sun Sets Roof Party w/ DJ Lloyds Noize", "Williwaw Social", "Anchorage", "2024-07-17", "6p-10p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2024-07-17", "7p-10p", ""),
  ev("Line Dance Nights", "Pink Cadillac", "Anchorage", "2024-07-17", "7p-12a", "", "dance"),
  ev("Country Night", "Koot’s", "Anchorage", "2024-07-17", "7p-1a", ""),
  ev("Open Mic", "Lil Babes Cocktail Lounge", "Anchorage", "2024-07-17", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-07-17", "8p-2a", ""),
  ev("KARAOKE w/ Uswi", "Van’s Dive Bar", "Anchorage", "2024-07-17", "9p-12a", ""),

  // ═══ EAGLE RIVER — Wednesday July 17th ═══
  ev("Music in the Park Series: Roland Roberts Band & Seth Malone", "Soldotna Creek Park", "Eagle River", "2024-07-17", "6p-9p", ""),
  ev("Open Mic", "Schwabenhof", "Eagle River", "2024-07-17", "7:30p-11p", ""),
  ev("Mike Stackhouse Live", "The Cabin", "Eagle River", "2024-07-17", "7p-10p", ""),
  ev("House Concert Series: Emily Anderson", "Running Reindeer Ranch", "Eagle River", "2024-07-17", "7p-8p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2024-07-17", "8p-11p", ""),
  ev("Open Mic Wednesdays", "The Crystal Saloon", "Eagle River", "2024-07-17", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-07-17", "8p-12a", ""),
  ev("Open Mic Night", "Fairview Inn", "Eagle River", "2024-07-17", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-07-17", "9p-2a", ""),

  // ═══ ANCHORAGE — Thursday August 22nd ═══
  ev("Karaoke", "Floaters", "Anchorage", "2024-08-22", "8p-12a", ""),

  // ═══ EAGLE RIVER — Thursday August 22nd ═══
  ev("Ukulele Russ", "Chair 5", "Eagle River", "2024-08-22", "10:30p-12a", ""),
  ev("Alaska State Fair", "Alaska State Fair Grounds", "Eagle River", "2024-08-22", "11a-10p", "", "festival"),
  ev("Live Music by Local Musicians", "Mykel’s Restaurant", "Eagle River", "2024-08-22", "5p-9p", ""),
  ev("Pie Eating Contest Live", "Brown Bear Saloon", "Eagle River", "2024-08-22", "6p-9:30p", ""),
  ev("Wynonna Judd", "Alaska State Fair Borealis Theatre", "Eagle River", "2024-08-22", "7p-10p", ""),
  ev("Karaoke w/ Sadie", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-08-22", "7p-12a", ""),
  ev("Karaoke Basket & Brews Party w/ DJ Tony Taylor", "Alaska Salmon Bake", "Eagle River", "2024-08-22", "7p-9p", ""),
  ev("Open Mic Night", "The Cabin", "Eagle River", "2024-08-22", "8p-11p", ""),
  ev("Open Mic", "Alaskan Hotel and Bar", "Eagle River", "2024-08-22", "8p-11p", ""),
  ev("Karaoke Thursdays", "The Crystal Saloon", "Eagle River", "2024-08-22", "8p-11p", ""),
  ev("Open Mic w/ Cody Kniceley", "4 Royle Parkers", "Eagle River", "2024-08-22", "8p-12a", ""),
  ev("Karaoke Night", "Alibi Bar & Café", "Eagle River", "2024-08-22", "9:15p-12:15a", ""),
  ev("Mario Carboni", "Fairview Inn", "Eagle River", "2024-08-22", "9p-1a", ""),
  ev("Dance Party w/ DJ Hankerchief", "Yukon Bar", "Eagle River", "2024-08-22", "9p-2a", "", "dance"),

  // ═══ WASILLA — Thursday August 22nd ═══
  ev("The AKoustic Project", "Tailgater’s Sport’s Bar & Grill", "Wasilla", "2024-08-22", "7p-10p", ""),

  // ═══ COOPER LANDING — Friday August 23rd ═══
  ev("Ayden See & Good Companies", "Gwin’s Lodge", "Cooper Landing", "2024-08-23", "7p-9p", ""),

  // ═══ EAGLE RIVER — Friday August 23rd ═══
  ev("Ukulele Russ & His One Man Frontier Band", "Kharacters Alaskan Bar", "Eagle River", "2024-08-23", "10p-1a", ""),
  ev("Earth 2 Travolta", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-08-23", "10p-2a", ""),
  ev("Alaska State Fair", "Alaska State Fair Grounds", "Eagle River", "2024-08-23", "11a-10p", "", "festival"),
  ev("Zen Trembles", "Talkeetna Village Park", "Eagle River", "2024-08-23", "5p-7p", ""),
  ev("The Acoustic Oosik", "Odd Man Rush", "Eagle River", "2024-08-23", "6p-10p", ""),
  ev("Transient Identity", "Dirty Skillet", "Eagle River", "2024-08-23", "6p-10p", ""),
  ev("Piano Music by Erika", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2024-08-23", "6p-8p", ""),
  ev("Ludacris", "Alaska State Fair Borealis Theatre", "Eagle River", "2024-08-23", "7p-10p", ""),
  ev("Roland Roberts Band", "Mountain High Pizza Pie", "Eagle River", "2024-08-23", "7p-10p", ""),
  ev("Sons of the East", "Creekbend Café", "Eagle River", "2024-08-23", "7p-11p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-08-23", "7p-11p", ""),
  ev("Free Show: Nuclear Physics in Space", "Marie Drake Planetarium", "Eagle River", "2024-08-23", "7p-8p", ""),
  ev("TED w/ Once and Future and Ryan Bateman", "The Cabin", "Eagle River", "2024-08-23", "8p-11p", ""),
  ev("John J Roberts Y Pan Blanco", "Magpies On The Fly", "Eagle River", "2024-08-23", "8p-12a", ""),
  ev("The Jephries Album Release Tour", "Yukon Bar", "Eagle River", "2024-08-23", "9p-12a", ""),
  ev("Zen Trembles", "Fairview Inn", "Eagle River", "2024-08-23", "9p-12a", ""),
  ev("Naked Presents: School of Hard Knocks", "The Crystal Saloon", "Eagle River", "2024-08-23", "9p-1a", ""),

  // ═══ WASILLA — Friday August 23rd ═══
  ev("Comedy Show w/ Andrew J. Andrist & Nathan Hart", "Everett’s Restaurant", "Wasilla", "2024-08-23", "7:30p-9p", "", "comedy"),
  ev("Live Music w/ Lia Everett", "Meta & Rose", "Wasilla", "2024-08-23", "7p-9p", ""),
  ev("Karaoke Night", "Schwabenhof", "Wasilla", "2024-08-23", "8p-11p", ""),

  // ═══ ANCHORAGE — Saturday August 24th ═══
  ev("Pushki Pickers", "Angry Salmon", "Anchorage", "2024-08-24", "7p-10p", ""),

  // ═══ COOPER LANDING — Saturday August 24th ═══
  ev("Steve Norwood", "Gwin’s Lodge", "Cooper Landing", "2024-08-24", "7p-10p", ""),

  // ═══ EAGLE RIVER — Saturday August 24th ═══
  ev("Earth 2 Travolta", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-08-24", "10p-2a", ""),
  ev("Alaska State Fair", "Alaska State Fair Grounds", "Eagle River", "2024-08-24", "11a-10p", "", "festival"),
  ev("Brothers of Tom", "Mountain High Pizza Pie", "Eagle River", "2024-08-24", "2p-5p", ""),
  ev("Ukulele Russ", "Dirty Skillet", "Eagle River", "2024-08-24", "6p-10p", ""),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2024-08-24", "6p-8p", ""),
  ev("Thy Hard", "The Basement", "Eagle River", "2024-08-24", "7p-10p", ""),
  ev("Blackwater Railroad Company Live", "Hightower Pub", "Eagle River", "2024-08-24", "7p-10p", ""),
  ev("Halestrom", "Alaska State Fair Borealis Theatre", "Eagle River", "2024-08-24", "7p-10p", ""),
  ev("Zen Trembles", "Mountain High Pizza Pie", "Eagle River", "2024-08-24", "7p-10p", ""),
  ev("Sons of the East", "Creekbend Café", "Eagle River", "2024-08-24", "7p-11p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-08-24", "7p-11p", ""),
  ev("Back Street Social Club", "The Cabin", "Eagle River", "2024-08-24", "8p-11p", ""),
  ev("Saturday Open Mic", "Magpies On The Fly", "Eagle River", "2024-08-24", "8p-12a", ""),
  ev("The Jephries Album Release Tour", "Yukon Bar", "Eagle River", "2024-08-24", "9p-12a", ""),
  ev("Naked Presents: School of Hard Knocks", "The Crystal Saloon", "Eagle River", "2024-08-24", "9p-1a", ""),
  ev("Nothing But Karma", "Fairview Inn", "Eagle River", "2024-08-24", "9p-1a", ""),

  // ═══ WASILLA — Saturday August 24th ═══
  ev("Shaefer Mueller", "Chop House", "Wasilla", "2024-08-24", "6p-10p", ""),

  // ═══ ANCHORAGE — Sunday August 25th ═══
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2024-08-25", "6p-9p", ""),
  ev("Chris Murphy", "Angry Salmon", "Anchorage", "2024-08-25", "8p-11p", ""),

  // ═══ EAGLE RIVER — Sunday August 25th ═══
  ev("Alaska State Fair", "Alaska State Fair Grounds", "Eagle River", "2024-08-25", "11a-10p", "", "festival"),
  ev("Ukulele Russ", "Fairview Inn", "Eagle River", "2024-08-25", "1p-5p", ""),
  ev("Steve Durr", "Mountain High Pizza Pie", "Eagle River", "2024-08-25", "5p-8p", ""),
  ev("Ludacris", "Alaska State Fair Borealis Theatre", "Eagle River", "2024-08-25", "6p-9p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-08-25", "8p-12a", ""),
  ev("Prom Night: Wilderness CosProm", "The Golden Saloon", "Eagle River", "2024-08-25", "9p-12a", ""),
  ev("Mario Carboni", "Yukon Bar", "Eagle River", "2024-08-25", "9p-12a", ""),

  // ═══ WASILLA — Sunday August 25th ═══
  ev("Open Mic Night", "Everett’s", "Wasilla", "2024-08-25", "6p-10p", ""),

  // ═══ EAGLE RIVER — Monday August 26th ═══
  ev("Alaska State Fair", "Alaska State Fair Grounds", "Eagle River", "2024-08-26", "11a-10p", "", "festival"),
  ev("The Jephries Album Release Tour", "Brown Bear Saloon", "Eagle River", "2024-08-26", "6p-9:30p", ""),
  ev("NeedToBreathe", "Alaska State Fair Borealis Theatre", "Eagle River", "2024-08-26", "7p-10p", ""),
  ev("Blackwater Railroad Company", "The Golden Saloon", "Eagle River", "2024-08-26", "9p-12a", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-08-26", "9p-12a", ""),
  ev("Karaoke", "Fairview Inn", "Eagle River", "2024-08-26", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-08-26", "9p-2a", ""),

  // ═══ ANCHORAGE — Tuesday August 27th ═══
  ev("Lunch on the Lawn: Alex Cruver & Kat Moore", "Anchorage Museum", "Anchorage", "2024-08-27", "11:30a-1:30p", ""),
  ev("Taco Tuesdays on the Roof w/ DJ Joe Brady", "Williwaw Social", "Anchorage", "2024-08-27", "4p-10p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2024-08-27", "6p-8p", ""),
  ev("Garden Grooves: Live Music in the Beer Garden", "49th State Brewing Co", "Anchorage", "2024-08-27", "6p-9p", ""),
  ev("A Cappella Performance Opportunity Program", "Alaska Sound Celebration", "Anchorage", "2024-08-27", "6p-9p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2024-08-27", "7p-11p", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-08-27", "8p-2a", ""),
  ev("Hope Cassity", "Koot’s", "Anchorage", "2024-08-27", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday August 27th ═══
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2024-08-27", "6:30p-10p", ""),
  ev("Open Stage Night w/ Sabrina Speers", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-08-27", "7:30p-10:30p", ""),
  ev("Stand Up Comedy Open Mic Night", "Pakalolo Supply Co.", "Eagle River", "2024-08-27", "7p-9p", "", "comedy"),
  ev("Tuesday Night Karaoke w/ Rocky", "The Cabin", "Eagle River", "2024-08-27", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-08-27", "8p-12a", ""),
  ev("Open Jam Night", "Yukon Bar", "Eagle River", "2024-08-27", "9p-2a", ""),

  // ═══ WASILLA — Tuesday August 27th ═══
  ev("Taco Tuesdays with Jerry Wessling", "Tug Bar & Goose Bay Inn", "Wasilla", "2024-08-27", "6p-9p", ""),
  ev("Karaoke Night", "Schwabenhof", "Wasilla", "2024-08-27", "8p-11p", ""),

  // ═══ ANCHORAGE — Wednesday August 28th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2024-08-28", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2024-08-28", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2024-08-28", "10p-2a", ""),
  ev("Sun Sets Roof Party w/ DJ Lloyds Noize", "Williwaw Social", "Anchorage", "2024-08-28", "6p-10p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2024-08-28", "7p-10p", ""),
  ev("Country Night", "Koot’s", "Anchorage", "2024-08-28", "7p-1a", ""),
  ev("Open Mic", "Lil Babes Cocktail Lounge", "Anchorage", "2024-08-28", "8p-12a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2024-08-28", "9p-12a", ""),
  ev("KARAOKE w/ Uswi", "Van’s Dive Bar", "Anchorage", "2024-08-28", "9p-12a", ""),

  // ═══ EAGLE RIVER — Wednesday August 28th ═══
  ev("Music in the Park Series: Ellie and The Echoes w/ Transient Identity", "Soldotna Creek Park", "Eagle River", "2024-08-28", "6p-9p", ""),
  ev("Mike Stackhouse Live", "The Cabin", "Eagle River", "2024-08-28", "7p-10p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2024-08-28", "8p-11p", ""),
  ev("Open Mic Wednesdays", "The Crystal Saloon", "Eagle River", "2024-08-28", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-08-28", "8p-12a", ""),
  ev("Open Mic Night", "Fairview Inn", "Eagle River", "2024-08-28", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-08-28", "9p-2a", ""),

  // ═══ WASILLA — Wednesday August 28th ═══
  ev("Open Mic", "Schwabenhof", "Wasilla", "2024-08-28", "7:30p-11p", ""),

  // ═══ EAGLE RIVER — Wednesday September 11th ═══
  ev("Cousin Curtiss w/ Black Barrel and the Bad Men", "Palmer Alehouse", "Eagle River", "2024-09-11", "6p-10p", ""),
  ev("Open Mic", "Schwabenhof", "Eagle River", "2024-09-11", "7:30p-11p", ""),
  ev("COLD CASE by Cathy Tagnak Rexford", "Perseverance Theatre", "Eagle River", "2024-09-11", "7:30p-9:30p", ""),
  ev("Mike Stackhouse Live", "The Cabin", "Eagle River", "2024-09-11", "7p-10p", ""),
  ev("Roki Kilroy", "Fishhook Bar & Grill", "Eagle River", "2024-09-11", "7p-11p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2024-09-11", "8p-11p", ""),
  ev("Open Mic Wednesdays", "The Crystal Saloon", "Eagle River", "2024-09-11", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-09-11", "9p-12a", ""),
  ev("Open Mic Night", "Fairview Inn", "Eagle River", "2024-09-11", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-09-11", "9p-2a", ""),

  // ═══ ANCHORAGE — Thursday September 12th ═══
  ev("Karaoke", "Floaters", "Anchorage", "2024-09-12", "8p-12a", ""),

  // ═══ EAGLE RIVER — Thursday September 12th ═══
  ev("COLD CASE by Cathy Tagnak Rexford", "Perseverance Theatre", "Eagle River", "2024-09-12", "7:30p-9:30p", ""),
  ev("The AKoustic Project", "Tailgater’s Sport’s Bar & Grill", "Eagle River", "2024-09-12", "7p-10p", ""),
  ev("Karaoke w/ Sadie", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-09-12", "7p-12a", ""),
  ev("Karaoke Basket & Brews Party w/ DJ Tony Taylor", "Alaska Salmon Bake", "Eagle River", "2024-09-12", "7p-9p", ""),
  ev("Open Mic Night", "The Cabin", "Eagle River", "2024-09-12", "8p-11p", ""),
  ev("Open Mic", "Alaskan Hotel and Bar", "Eagle River", "2024-09-12", "8p-11p", ""),
  ev("Karaoke Thursdays", "The Crystal Saloon", "Eagle River", "2024-09-12", "8p-11p", ""),
  ev("Open Mic w/ Cody Kniceley", "4 Royle Parkers", "Eagle River", "2024-09-12", "8p-12a", ""),
  ev("Karaoke Night", "Alibi Bar & Café", "Eagle River", "2024-09-12", "9:15p-12:15a", ""),
  ev("Open Mic Night", "Golden Saloon", "Eagle River", "2024-09-12", "9p-12a", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-09-12", "9p-12a", ""),
  ev("Dance Party w/ DJ Hankerchief", "Yukon Bar", "Eagle River", "2024-09-12", "9p-2a", "", "dance"),

  // ═══ EAGLE RIVER — Friday September 13th ═══
  ev("Arctic Oultaws Live", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-09-13", "10p-2a", ""),
  ev("Juno Smiles", "Dirty Skillet", "Eagle River", "2024-09-13", "6p-10p", ""),
  ev("Climate Change: Earth, Mars, & Venus (2 Shows)", "Marie Drake Planetarium", "Eagle River", "2024-09-13", "6p-8:15p", ""),
  ev("Piano Music by Erika", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2024-09-13", "6p-8p", ""),
  ev("Sergio Castillejo", "Last Frontier Brewing", "Eagle River", "2024-09-13", "6p-9p", ""),
  ev("COLD CASE by Cathy Tagnak Rexford", "Perseverance Theatre", "Eagle River", "2024-09-13", "7:30p-9:30p", ""),
  ev("Comedy Show w/ Nikki Carr", "Everett’s", "Eagle River", "2024-09-13", "7:30p-9p", "", "comedy"),
  ev("Square Dance w/ Music by the Free Radicals", "Creek Street Cabaret", "Eagle River", "2024-09-13", "7p-10p", "", "dance"),
  ev("Roland Roberts Band Live", "Palmer Alehouse", "Eagle River", "2024-09-13", "7p-10p", ""),
  ev("Hope Hangout with Próxima Parada, Cousin Curtiss and more", "Creekbend Café", "Eagle River", "2024-09-13", "7p-11p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-09-13", "7p-11p", ""),
  ev("Emerge125 Dance Performance", "Sitka Performing Arts Center", "Eagle River", "2024-09-13", "7p-8:30p", "", "dance"),
  ev("Live Music w/ Lia Everett", "Meta & Rose", "Eagle River", "2024-09-13", "7p-9p", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2024-09-13", "8p-11p", ""),
  ev("Matt & Co.", "Yukon Bar", "Eagle River", "2024-09-13", "9p-12a", ""),
  ev("Raised by Elephants", "Fairview Inn", "Eagle River", "2024-09-13", "9p-1a", ""),

  // ═══ ANCHORAGE — Saturday September 14th ═══
  ev("The Stack", "Koot’s", "Anchorage", "2024-09-14", "10:30p-2a", ""),
  ev("The Latin Brothers in Alaska", "Matanuska Brewing Company", "Anchorage", "2024-09-14", "10p-1a", ""),
  ev("Second Saturday Brunch Music Special", "Writer’s Block Bookstore & Café", "Anchorage", "2024-09-14", "12p-2p", ""),
  ev("Ten Dollar Bet", "Organic Oasis", "Anchorage", "2024-09-14", "4p-6p", ""),
  ev("Poetry Slam w/ Cash Prizes", "Writer’s Block Bookstore & Café", "Anchorage", "2024-09-14", "6p-8p", ""),
  ev("Sea Raiders on a Roll w/ Nervis Rex, Fan Service, & Megasisqo", "Williwaw Social", "Anchorage", "2024-09-14", "7p-1:30a", ""),
  ev("Nervis Rex Rocks the Pirate Pub Crawl", "Williwaw Social", "Anchorage", "2024-09-14", "7p-10p", ""),
  ev("Comedian Nikki Carr", "Koot’s", "Anchorage", "2024-09-14", "7p-8:30 & 9:30p-11p", ""),
  ev("Dungeons and Dragons", "Anchorage Festival of Music", "Anchorage", "2024-09-14", "7p-8:30p", ""),
  ev("Meteor Shower", "Cyrano’s Theatre Company", "Anchorage", "2024-09-14", "7p-8:30p", ""),
  ev("Pirate Pub Crawl with Rogues & Wenches", "Humpy’s", "Anchorage", "2024-09-14", "8:30p-12a", ""),
  ev("Karaoke w/ DJ Sparkles", "Broken Blender", "Anchorage", "2024-09-14", "8p-12a", ""),
  ev("Country Night w/ Dance Lessons & Music", "Pink Cadillac", "Anchorage", "2024-09-14", "8p-12a", "", "dance"),
  ev("Wenches & Wrenches: A Steampunk Burlesque Musical", "Broken Blender", "Anchorage", "2024-09-14", "8p-9:30p", "", "theatre"),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2024-09-14", "9p-11:30p", ""),
  ev("Latin Night w/ Kagan Ford", "Arctic Academie de Danse", "Anchorage", "2024-09-14", "9p-1a", ""),
  ev("Jen X & The Pop Rockets", "The Carousel Lounge", "Anchorage", "2024-09-14", "9p-1a", ""),
  ev("DJ Ke", "Flattop Pizza & Pool", "Anchorage", "2024-09-14", "9p-1a", ""),
  ev("Blast From The Past", "Time Out Lounge", "Anchorage", "2024-09-14", "9p-2:30a", ""),
  ev("Posterchild & Friends", "Koot’s", "Anchorage", "2024-09-14", "9p-2a", ""),

  // ═══ EAGLE RIVER — Saturday September 14th ═══
  ev("Noche Latina \"Grito De Dolores\"", "The Crystal Saloon", "Eagle River", "2024-09-14", "10p-2a", ""),
  ev("Jerry Wessling Band", "Four Corner’s Lounge", "Eagle River", "2024-09-14", "10p-2a", ""),
  ev("Arctic Oultaws Live", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-09-14", "10p-2a", ""),
  ev("7th Annual Blueberry Ball", "SkeetTawk", "Eagle River", "2024-09-14", "12p-9p", ""),
  ev("Juneau Lyric Opera: Auditions for Die Fledemaus", "Holy Trinity Church", "Eagle River", "2024-09-14", "3p-5p", "", "theatre"),
  ev("Diamonds & Denim Fundraiser", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-09-14", "5p-8p", ""),
  ev("Juno Smiles", "Dirty Skillet", "Eagle River", "2024-09-14", "6p-10p", ""),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2024-09-14", "6p-8p", ""),
  ev("Tyson Davis", "Odd Man Rush", "Eagle River", "2024-09-14", "6p-9p", ""),
  ev("Travis Watson", "Last Frontier Brewing", "Eagle River", "2024-09-14", "6p-9p", ""),
  ev("COLD CASE by Cathy Tagnak Rexford", "Perseverance Theatre", "Eagle River", "2024-09-14", "7:30p-9:30p", ""),
  ev("I Like Robots & 3000-21", "Palmer Alehouse", "Eagle River", "2024-09-14", "7p-10p", ""),
  ev("Hope Hangout with Próxima Parada, Cousin Curtiss and more", "Creekbend Café", "Eagle River", "2024-09-14", "7p-11p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-09-14", "7p-11p", ""),
  ev("Earth 2 Travolta & Monster On The Mountain", "Fishhook Bar & Grill", "Eagle River", "2024-09-14", "7p-11p", ""),
  ev("SHAGG: Live at the Cabin", "The Cabin", "Eagle River", "2024-09-14", "8p-11p", ""),
  ev("Matt & Co.", "Yukon Bar", "Eagle River", "2024-09-14", "9p-12a", ""),
  ev("Gold Peak", "Fairview Inn", "Eagle River", "2024-09-14", "9p-1a", ""),

  // ═══ ANCHORAGE — Sunday September 15th ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2024-09-15", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2024-09-15", "10p-2a", ""),
  ev("Sunday Brunch w/ THV", "Writer’s Block Bookstore & Café", "Anchorage", "2024-09-15", "12p-2p", "", "community"),
  ev("Sunday Song Writer's Social hosted by Shane Russell", "Rage City Vintage", "Anchorage", "2024-09-15", "1p-4p", ""),
  ev("Django Jam", "Writer’s Block Bookstore & Café", "Anchorage", "2024-09-15", "2p-5p", ""),
  ev("Meteor Shower", "Cyrano’s Theatre Company", "Anchorage", "2024-09-15", "3p-4:30p", ""),
  ev("Open Mic & Jam", "VFW Post 1685", "Anchorage", "2024-09-15", "4:30p-8:30p", ""),
  ev("Dungeons and Dragons", "Anchorage Festival of Music", "Anchorage", "2024-09-15", "4p-5:30p", ""),
  ev("Abbey Blackwell w/ Keeley Boyle & Nelson Kempf", "Rage City Vintage", "Anchorage", "2024-09-15", "5p-7p", ""),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2024-09-15", "6p-10p", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2024-09-15", "6p-9p", ""),
  ev("Judy Collins", "Alaska Center for the Performing Arts", "Anchorage", "2024-09-15", "7:30p-9p", ""),
  ev("Jared Woods", "Humpy’s", "Anchorage", "2024-09-15", "7p-10:30p", ""),
  ev("Open Mic Night w/ Mister Boobs", "Broken Blender", "Anchorage", "2024-09-15", "7p-10p", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2024-09-15", "7p-11p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2024-09-15", "8:30p-10p", "", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2024-09-15", "8:30p-1a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2024-09-15", "9p-12a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2024-09-15", "9p-2a", ""),

  // ═══ EAGLE RIVER — Sunday September 15th ═══
  ev("COLD CASE by Cathy Tagnak Rexford", "Perseverance Theatre", "Eagle River", "2024-09-15", "4p-6p", ""),
  ev("Open Mic Night", "Everett’s", "Eagle River", "2024-09-15", "6p-10p", ""),
  ev("Last Man Standing Comedy Show", "Golden Saloon", "Eagle River", "2024-09-15", "9p-12a", "", "comedy"),

  // ═══ ANCHORAGE — Monday September 16th ═══
  ev("AJW Community Jazz Jam Session", "K Street Market", "Anchorage", "2024-09-16", "6p-9p", ""),
  ev("All Ages Open Mic", "Rage City Vintage", "Anchorage", "2024-09-16", "6p-9p", ""),
  ev("Koots Open Mic", "Koot’s", "Anchorage", "2024-09-16", "9p-12a", ""),
  ev("Jay Straw's Bass to Mouth Mondays!", "Van’s Dive Bar", "Anchorage", "2024-09-16", "9p-12a", ""),

  // ═══ EAGLE RIVER — Monday September 16th ═══
  ev("COLD CASE by Cathy Tagnak Rexford", "Perseverance Theatre", "Eagle River", "2024-09-16", "7:30p-9:30p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-09-16", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-09-16", "9p-2a", ""),

  // ═══ ANCHORAGE — Tuesday September 17th ═══
  ev("Phatt Tuesday New Orleans Jazz & Funk", "Matanuska Brewing", "Anchorage", "2024-09-17", "6p-10p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2024-09-17", "6p-8p", ""),
  ev("A Cappella Performance Opportunity Program", "Alaska Sound Celebration", "Anchorage", "2024-09-17", "6p-9p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2024-09-17", "7p-11p", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-09-17", "8p-2a", ""),
  ev("Mad Myrna's Comedy Showcase", "Mad Myrna’s", "Anchorage", "2024-09-17", "9p-11:30p", "", "comedy"),
  ev("Eternal Cowboys", "Koot’s", "Anchorage", "2024-09-17", "9p-12a", ""),
  ev("Midnight Freestyle", "Koot’s", "Anchorage", "2024-09-17", "9p-2a", ""),

  // ═══ EAGLE RIVER — Tuesday September 17th ═══
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2024-09-17", "6:30p-10p", ""),
  ev("Taco Tuesdays with Jerry Wessling", "Tug Bar & Goose Bay Inn", "Eagle River", "2024-09-17", "6p-9p", ""),
  ev("COLD CASE by Cathy Tagnak Rexford", "Perseverance Theatre", "Eagle River", "2024-09-17", "7:30p-9:30p", ""),
  ev("Jazz Jam Tuesdays", "The Crystal Saloon", "Eagle River", "2024-09-17", "8p-11p", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2024-09-17", "8p-11p", ""),
  ev("Open Mic Night", "Four Corner’s Lounge", "Eagle River", "2024-09-17", "8p-12a", ""),
  ev("Open Jam Night", "Yukon Bar", "Eagle River", "2024-09-17", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday September 18th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2024-09-18", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2024-09-18", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2024-09-18", "10p-2a", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2024-09-18", "7p-10p", ""),
  ev("Line Dance Night", "Pink Cadillac", "Anchorage", "2024-09-18", "7p-10p", "", "dance"),
  ev("Country Night & Dance Lessons", "Koot’s", "Anchorage", "2024-09-18", "7p-1a", "", "dance"),
  ev("Open Mic", "Lil Babes Cocktail Lounge", "Anchorage", "2024-09-18", "8p-12a", ""),
  ev("KARAOKE w/ Uswi", "Van’s Dive Bar", "Anchorage", "2024-09-18", "9p-12a", ""),

  // ═══ EAGLE RIVER — Wednesday September 18th ═══
  ev("Open Mic", "Schwabenhof", "Eagle River", "2024-09-18", "7:30p-11p", ""),
  ev("COLD CASE by Cathy Tagnak Rexford", "Perseverance Theatre", "Eagle River", "2024-09-18", "7:30p-9:30p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2024-09-18", "8p-11p", ""),
  ev("Open Mic Wednesdays", "The Crystal Saloon", "Eagle River", "2024-09-18", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-09-18", "9p-12a", ""),
  ev("Open Mic Night", "Fairview Inn", "Eagle River", "2024-09-18", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-09-18", "9p-2a", ""),

  // ═══ ANCHORAGE — Thursday October 3rd ═══
  ev("Karaoke", "Floaters", "Anchorage", "2024-10-03", "8p-12a", ""),

  // ═══ EAGLE RIVER — Friday October 4th ═══
  ev("Ukulele Russ & His One Man Frontier Band 9p-12a?", "Kharacter’s Alaskan Bar", "Eagle River", "2024-10-04", "", ""),
  ev("Jerry Wessling Band", "Four Corner’s Lounge", "Eagle River", "2024-10-04", "10p-2a", ""),
  ev("The Glacier Hoppers Band", "The Mug-Shot Saloon", "Eagle River", "2024-10-04", "10p-2a", ""),
  ev("Eric Doucet Live", "Main Street Tap & Grill", "Eagle River", "2024-10-04", "6p-10p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-10-04", "7p-11p", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2024-10-04", "8p-11p", ""),
  ev("Will Balcoa & Company", "Fairview Inn", "Eagle River", "2024-10-04", "9p-1a", ""),

  // ═══ ANCHORAGE — Saturday October 5th ═══
  ev("Ukulele Russ & His One Man Frontier Band", "Angry Salmon", "Anchorage", "2024-10-05", "7p-10p", ""),

  // ═══ EAGLE RIVER — Saturday October 5th ═══
  ev("Noche Latina \"Un Ano De Aniversario\"", "The Crystal Saloon", "Eagle River", "2024-10-05", "10p-2a", ""),
  ev("Jerry Wessling Band", "Four Corner’s Lounge", "Eagle River", "2024-10-05", "10p-2a", ""),
  ev("The Glacier Hoppers Band", "The Mug-Shot Saloon", "Eagle River", "2024-10-05", "10p-2a", ""),
  ev("HallowQueen! Gigi’s Drag Brunch Halloween Edition", "T.K. Maguire’s", "Eagle River", "2024-10-05", "12p-2p", "", "community"),
  ev("Annual Hopetober Fest with Blackwater Railroad", "Creekbend Café", "Eagle River", "2024-10-05", "1p-8p", "", "festival"),
  ev("HaHas for TaTas: A Comedy Night Fundraiser", "Main Street Tap & Grill", "Eagle River", "2024-10-05", "6p-10p", "", "comedy"),
  ev("Oktoberfest with Jerry Wessling & Eric Lovely", "Schwabenhof", "Eagle River", "2024-10-05", "6p-10p", "", "festival"),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2024-10-05", "6p-8p", ""),
  ev("Skerryvore", "Hering Auditorium", "Eagle River", "2024-10-05", "7:30p-9:20p", ""),
  ev("Decepticide & Wayward Shot", "Odd Man Rush", "Eagle River", "2024-10-05", "7p-10p", ""),
  ev("Octoberfest w/ H3 Hawaii Reggae Live", "Palmer Alehouse", "Eagle River", "2024-10-05", "7p-10p", "", "festival"),
  ev("The Miscast Spooktacular", "Valley Performing Arts", "Eagle River", "2024-10-05", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-10-05", "7p-11p", ""),
  ev("Free Dance Lessons w/ Shufflin' Country Style", "American Legion Post 15", "Eagle River", "2024-10-05", "7p-8p", "", "dance"),
  ev("An Evening of One Act Plays", "Sheldon Community Arts Hanger", "Eagle River", "2024-10-05", "7p-9p", "", "theatre"),
  ev("Dystopia Dance Party w/ The Wet Spots, Rut, & Concrete to Clouds", "Alice’s Champagne Palace", "Eagle River", "2024-10-05", "9p-1a", "", "dance"),
  ev("Cami from Miami", "Fairview Inn", "Eagle River", "2024-10-05", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-10-05", "9p-2a", ""),

  // ═══ ANCHORAGE — Sunday October 6th ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2024-10-06", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2024-10-06", "10p-2a", ""),
  ev("30 Years of Humpy's Oktoberfest Parties", "Humpy’s", "Anchorage", "2024-10-06", "12p-12a", "", "festival"),
  ev("Sunday Brunch w/ Alex Parsons", "Writer’s Block Bookstore & Café", "Anchorage", "2024-10-06", "12p-2p", "", "community"),
  ev("Open Mic & Jam", "VFW Post 1685", "Anchorage", "2024-10-06", "4:30p-8:30p", ""),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2024-10-06", "6p-10p", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2024-10-06", "6p-9p", ""),
  ev("Open Mic Night w/ Mister Boobs", "Broken Blender", "Anchorage", "2024-10-06", "7p-10p", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2024-10-06", "7p-11p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2024-10-06", "8:30p-10p", "", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2024-10-06", "8:30p-1a", ""),
  ev("Latin Night", "Pink Cadillac", "Anchorage", "2024-10-06", "8p-12a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2024-10-06", "9p-12a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2024-10-06", "9p-2a", ""),

  // ═══ EAGLE RIVER — Sunday October 6th ═══
  ev("Deer-A-Palooza in Palmer!", "Palmer Alehouse", "Eagle River", "2024-10-06", "3p-5p", ""),
  ev("Open Mic Night", "Everett’s", "Eagle River", "2024-10-06", "6p-10p", ""),

  // ═══ ANCHORAGE — Monday October 7th ═══
  ev("AJW Community Jazz Jam Session", "K Street Market", "Anchorage", "2024-10-07", "6p-9p", ""),
  ev("Koots Open Mic", "Koot’s", "Anchorage", "2024-10-07", "9p-12a", ""),
  ev("Jay Straw's Bass to Mouth Mondays!", "Van’s Dive Bar", "Anchorage", "2024-10-07", "9p-12a", ""),

  // ═══ EAGLE RIVER — Monday October 7th ═══
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-10-07", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-10-07", "9p-2a", ""),

  // ═══ ANCHORAGE — Tuesday October 8th ═══
  ev("Phatt Tuesday New Orleans Jazz & Funk", "Matanuska Brewing", "Anchorage", "2024-10-08", "6p-10p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2024-10-08", "6p-8p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2024-10-08", "7p-11p", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-10-08", "8p-2a", ""),
  ev("Eternal Cowboys", "Koot’s", "Anchorage", "2024-10-08", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday October 8th ═══
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2024-10-08", "6:30p-10p", ""),
  ev("Taco Tuesdays with Jerry Wessling", "Tug Bar & Goose Bay Inn", "Eagle River", "2024-10-08", "6p-9p", ""),
  ev("Jazz Jam Tuesdays", "The Crystal Saloon", "Eagle River", "2024-10-08", "8p-11p", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2024-10-08", "8p-11p", ""),
  ev("Open Mic Night", "Four Corner’s Lounge", "Eagle River", "2024-10-08", "8p-12a", ""),
  ev("Open Jam Night", "Yukon Bar", "Eagle River", "2024-10-08", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday October 9th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2024-10-09", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2024-10-09", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2024-10-09", "10p-2a", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2024-10-09", "7p-10p", ""),
  ev("Line Dance Night", "Pink Cadillac", "Anchorage", "2024-10-09", "7p-10p", "", "dance"),
  ev("Country Night & Dance Lessons", "Koot’s", "Anchorage", "2024-10-09", "7p-1a", "", "dance"),
  ev("Open Mic", "Lil Babes Cocktail Lounge", "Anchorage", "2024-10-09", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-10-09", "8p-2a", ""),
  ev("KARAOKE w/ Uswi", "Van’s Dive Bar", "Anchorage", "2024-10-09", "9p-12a", ""),

  // ═══ EAGLE RIVER — Wednesday October 9th ═══
  ev("Open Mic", "Schwabenhof", "Eagle River", "2024-10-09", "7:30p-11p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2024-10-09", "8p-11p", ""),
  ev("Open Mic Wednesdays", "The Crystal Saloon", "Eagle River", "2024-10-09", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-10-09", "9p-12a", ""),
  ev("Open Mic", "Fairview Inn", "Eagle River", "2024-10-09", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-10-09", "9p-2a", ""),

  // ═══ EAGLE RIVER — Friday October 11th ═══
  ev("Acoustic Oosik", "Fairview Inn", "Eagle River", "2024-10-11", "9p-1a", ""),

  // ═══ EAGLE RIVER — Wednesday November 20th ═══
  ev("Live Music w/ Rick Brooks", "Schwabenhof", "Eagle River", "2024-11-20", "8p-11p", ""),

  // ═══ EAGLE RIVER — Wednesday November 27th ═══
  ev("Open Mic", "Schwabenhof", "Eagle River", "2024-11-27", "7:30p-11p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2024-11-27", "8p-11p", ""),
  ev("Open Mic Wednesday", "The Crystal Saloon", "Eagle River", "2024-11-27", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-11-27", "9p-12a", ""),
  ev("Open Mic", "Fairview Inn", "Eagle River", "2024-11-27", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-11-27", "9p-2a", ""),

  // ═══ ANCHORAGE — Thursday November 28th ═══
  ev("Karaoke", "Floaters", "Anchorage", "2024-11-28", "8p-12a", ""),

  // ═══ EAGLE RIVER — Thursday November 28th ═══
  ev("Thanksgiving with Juno Smile", "Hatcher Pass Lodge", "Eagle River", "2024-11-28", "4p-7p", ""),
  ev("The AKoustic Project", "Tailgater’s Sport’s Bar & Grill", "Eagle River", "2024-11-28", "7p-10p", ""),
  ev("Comedy w/ Kellen Erskine", "The Spur", "Eagle River", "2024-11-28", "7p-9p", "", "comedy"),
  ev("Open Mic", "Alaskan Hotel and Bar", "Eagle River", "2024-11-28", "8p-11p", ""),
  ev("Karaoke Thursdays", "The Crystal Saloon", "Eagle River", "2024-11-28", "8p-11p", ""),
  ev("Open Mic w/ Cody Kniceley", "4 Royle Parkers", "Eagle River", "2024-11-28", "8p-12a", ""),
  ev("Karaoke Night", "Alibi Bar & Café", "Eagle River", "2024-11-28", "9:15p-12:15a", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-11-28", "9p-12a", ""),

  // ═══ ANCHORAGE — Friday November 29th ═══
  ev("Jacques Longpre", "Angry Salmon", "Anchorage", "2024-11-29", "7p-10p", ""),

  // ═══ EAGLE RIVER — Friday November 29th ═══
  ev("Jerry Wessling", "Four Corner’s Lounge", "Eagle River", "2024-11-29", "10p-2a", ""),
  ev("Glacier Hoppers Band", "The Mug-Shot Saloon", "Eagle River", "2024-11-29", "10p-2a", ""),
  ev("All Ages Open Mic Night", "Black Birch Books", "Eagle River", "2024-11-29", "5p-7p", ""),
  ev("Christmas Tree Lighting & Ice Skating w/Santa", "Douglas Community United Methodist Church", "Eagle River", "2024-11-29", "6:30p-9p", ""),
  ev("Piano Music by Erika", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2024-11-29", "6p-8p", ""),
  ev("H3 Hawaiian Reggae", "Odd Man Rush", "Eagle River", "2024-11-29", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-11-29", "7p-11p", ""),
  ev("Trivia & Open Mike Night Fridays", "Pioneer Bar", "Eagle River", "2024-11-29", "7p-12a", ""),
  ev("Comedy w/ Kellen Erskine", "Pioneer Park Theater", "Eagle River", "2024-11-29", "7p-9p", "", "comedy"),
  ev("Live Music w/ Lia Everett", "Meta & Rose", "Eagle River", "2024-11-29", "7p-9p", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2024-11-29", "8p-11p", ""),
  ev("Cami de Miami", "Fairview Inn", "Eagle River", "2024-11-29", "9p-1a", ""),

  // ═══ ANCHORAGE — Saturday November 30th ═══
  ev("Pop Royalty: A Tribute to 2010's Pop w/ DJ Remax", "Williwaw Social", "Anchorage", "2024-11-30", "10p-1:30a", ""),
  ev("The Nutcraker with Eugene Ballet", "Alaska Center for the Performing Arts", "Anchorage", "2024-11-30", "2p-4p & 7:30p- 9:30p", ""),
  ev("Zoo Lights", "Alaska Zoo", "Anchorage", "2024-11-30", "5p-8p", ""),
  ev("The Super Saturated Sugar Strings Live", "Williwaw Social", "Anchorage", "2024-11-30", "6:30p-10p", ""),
  ev("ADP Holiday Tree Lighting Ceremony", "Town Square Park", "Anchorage", "2024-11-30", "6p-8p", ""),
  ev("Jerry Wessling Band", "Susitna Brewing", "Anchorage", "2024-11-30", "6p-9p", ""),
  ev("Little Women: The Broadway Musical", "Anchorage Community Theatre", "Anchorage", "2024-11-30", "7p-10p", "", "theatre"),
  ev("Jim Maloney & English John", "Angry Salmon", "Anchorage", "2024-11-30", "7p-10p", ""),
  ev("The Wickhams: Christmas at Pemberley", "Cyrano’s Theatre", "Anchorage", "2024-11-30", "7p-8:45p", ""),
  ev("Yachtly Crew", "Humpy’s", "Anchorage", "2024-11-30", "8:30p-12:30a", ""),
  ev("Sassy Saturdays Cabaret", "Broken Blender", "Anchorage", "2024-11-30", "8p-10p", ""),
  ev("The Vintage Retro", "Anchorage Moose Lodge", "Anchorage", "2024-11-30", "8p-12a", ""),
  ev("Karaoke w/ DJ Sparkles", "Broken Blender", "Anchorage", "2024-11-30", "8p-12a", ""),
  ev("Country Night w/ Dance Lessons & Music", "Pink Cadillac", "Anchorage", "2024-11-30", "8p-12a", "", "dance"),
  ev("Riddim & Beats Down South Edition", "Koot’s", "Anchorage", "2024-11-30", "8p-2a", ""),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2024-11-30", "9p-11:30p", ""),
  ev("Mourning High x Wayward Shot", "Koot’s", "Anchorage", "2024-11-30", "9p-12a", ""),
  ev("DJ Ke", "Flattop Pizza & Pool", "Anchorage", "2024-11-30", "9p-1a", ""),
  ev("Blast From The Past", "Time Out Lounge", "Anchorage", "2024-11-30", "9p-2:30a", ""),

  // ═══ EAGLE RIVER — Saturday November 30th ═══
  ev("Velvet La La", "Klondike Mike’s & the Main Street Grill", "Eagle River", "2024-11-30", "10p-2a", ""),
  ev("Glacier Hoppers Band", "The Mug-Shot Saloon", "Eagle River", "2024-11-30", "10p-2a", ""),
  ev("Open House & Tree Lighting", "Seward Community Library & Museum", "Eagle River", "2024-11-30", "12p-6:15p", ""),
  ev("Ayden See And The Good Company", "Hatcher Pass Lodge", "Eagle River", "2024-11-30", "4p-7p", ""),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2024-11-30", "6p-8p", ""),
  ev("Thera & Special Guest The Trichomes", "Odd Man Rush", "Eagle River", "2024-11-30", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2024-11-30", "7p-11p", ""),
  ev("Dance Lessons with Shufflin’ Country Style", "Four Corner’s Lounge", "Eagle River", "2024-11-30", "7p-8p", "", "dance"),
  ev("Comedy w/ Kellen Erskine", "Pioneer Park Theater", "Eagle River", "2024-11-30", "7p-9p", "", "comedy"),
  ev("Gold Peak", "Fairview Inn", "Eagle River", "2024-11-30", "8p-12a", ""),
  ev("Karaoke Saturdays", "Pioneer Bar", "Eagle River", "2024-11-30", "9p-12a", ""),
  ev("Caribbean Night w/ DJ Tony Taylor & DJ Osito", "The Cabin", "Eagle River", "2024-11-30", "9p-1a", ""),
  ev("Ken Peltier Band", "Four Corner’s Lounge", "Eagle River", "2024-11-30", "9p-1a", ""),

  // ═══ ANCHORAGE — Sunday December 1st ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2024-12-01", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2024-12-01", "10p-2a", ""),
  ev("Improv Dojo", "Midnight Sun Theatre", "Anchorage", "2024-12-01", "12p-1:30p", ""),
  ev("Sunday Brunch w/ Dawson Gentleman", "Writer’s Block Bookstore & Café", "Anchorage", "2024-12-01", "12p-2p", "", "community"),
  ev("The Nutcraker with Eugene Ballet", "Alaska Center for the Performing Arts", "Anchorage", "2024-12-01", "1p-3p & 5:30p- 7:30p", ""),
  ev("78th Community Messiah", "First Baptist Church", "Anchorage", "2024-12-01", "2p-4p", "", "community"),
  ev("The Wickhams: Christmas at Pemberley", "Cyrano’s Theatre", "Anchorage", "2024-12-01", "3p-4:45p", ""),
  ev("Little Women: The Broadway Musical", "Anchorage Community Theatre", "Anchorage", "2024-12-01", "3p-6p", "", "theatre"),
  ev("Open Mic & Jam", "VFW Post 1685", "Anchorage", "2024-12-01", "4:30p-8:30p", ""),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2024-12-01", "6p-10p", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2024-12-01", "6p-9p", ""),
  ev("Open Mic Night w/ Mister Boobs", "Broken Blender", "Anchorage", "2024-12-01", "7p-10p", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2024-12-01", "7p-11p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2024-12-01", "8:30p-10p", "", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2024-12-01", "8:30p-1a", ""),
  ev("Latin Night", "Pink Cadillac", "Anchorage", "2024-12-01", "8p-12a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2024-12-01", "9p-12a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2024-12-01", "9p-2a", ""),

  // ═══ EAGLE RIVER — Sunday December 1st ═══
  ev("Open Mic Night", "Everett’s", "Eagle River", "2024-12-01", "6p-10p", ""),

  // ═══ ANCHORAGE — Monday December 2nd ═══
  ev("Boombox Bingo", "Broken Blender", "Anchorage", "2024-12-02", "6:30p-8:30", ""),
  ev("AJW Community Jazz Jam Session", "K Street Market", "Anchorage", "2024-12-02", "6p-9p", ""),
  ev("Buckaroos Night w/ DJ Rico", "Pink Cadillac", "Anchorage", "2024-12-02", "7p-11p", ""),
  ev("The Monday Mic w/ Boobs", "Koot’s", "Anchorage", "2024-12-02", "9p-12a", ""),
  ev("Jay Straw's Bass to Mouth Mondays!", "Van’s Dive Bar", "Anchorage", "2024-12-02", "9p-12a", ""),

  // ═══ EAGLE RIVER — Monday December 2nd ═══
  ev("Open Mic Night w/ Jim Maloney & Orion Donicht", "Alice’s Champagne Palace", "Eagle River", "2024-12-02", "7p-10p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-12-02", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday December 3rd ═══
  ev("Phatt Tuesday New Orleans Jazz & Funk", "Matanuska Brewing", "Anchorage", "2024-12-03", "6p-10p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2024-12-03", "6p-8p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2024-12-03", "7p-11p", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-12-03", "8p-2a", ""),
  ev("Eternal Cowboys", "Koot’s", "Anchorage", "2024-12-03", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday December 3rd ═══
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2024-12-03", "6:30p-10p", ""),
  ev("Jazz Jam Tuesdays", "The Crystal Saloon", "Eagle River", "2024-12-03", "8p-11p", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2024-12-03", "8p-11p", ""),
  ev("Open Mic Night", "Four Corner’s Lounge", "Eagle River", "2024-12-03", "8p-12a", ""),
  ev("Open Jam Night", "Yukon Bar", "Eagle River", "2024-12-03", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday December 4th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2024-12-04", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2024-12-04", "10p-12a", ""),
  ev("Line Dance Night", "Pink Cadillac", "Anchorage", "2024-12-04", "7:15p-11:45p", "", "dance"),
  ev("Mean Girls on Broadway", "Alaska Center for the Performing Arts", "Anchorage", "2024-12-04", "7:30p-10p", "", "theatre"),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2024-12-04", "7p-10p", ""),
  ev("Country Night & Dance Lessons", "Koot’s", "Anchorage", "2024-12-04", "7p-1a", "", "dance"),
  ev("Open Mic", "Lil Babes Cocktail Lounge", "Anchorage", "2024-12-04", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-12-04", "8p-2a", ""),
  ev("A-Town Sharps", "Organic Oasis", "Anchorage", "2024-12-04", "9p-11p", ""),
  ev("KARAOKE w/ Uswi", "Van’s Dive Bar", "Anchorage", "2024-12-04", "9p-12a", ""),

  // ═══ EAGLE RIVER — Wednesday December 4th ═══
  ev("Open Mic", "Schwabenhof", "Eagle River", "2024-12-04", "7:30p-11p", ""),
  ev("Beer Choir: Holiday Edition", "Alibi Bar & Café", "Eagle River", "2024-12-04", "7p-10p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2024-12-04", "8p-11p", ""),
  ev("Open Mic Wednesday", "The Crystal Saloon", "Eagle River", "2024-12-04", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-12-04", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-12-04", "9p-2a", ""),

  // ═══ ANCHORAGE — Sunday December 15th ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2024-12-15", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2024-12-15", "10p-2a", ""),
  ev("Sunday Brunch w/ The Squash Bottoms", "Writer’s Block Bookstore & Café", "Anchorage", "2024-12-15", "12p-2p", "", "community"),
  ev("Mean Girls on Broadway", "Alaska Center for the Performing Arts", "Anchorage", "2024-12-15", "1p-3:30p & 7p-9:30p", "", "theatre"),
  ev("Songwriter's Circle Hosted by Shane Russell", "Rage City Vintage", "Anchorage", "2024-12-15", "1p-4p", ""),
  ev("Django Jam", "Writer’s Block Bookstore & Café", "Anchorage", "2024-12-15", "2p-5p", ""),
  ev("The Wickhams: Christmas at Pemberley", "Cyrano’s Theatre", "Anchorage", "2024-12-15", "3p-4:45p", ""),
  ev("Little Women: The Broadway Musical", "Anchorage Community Theatre", "Anchorage", "2024-12-15", "3p-6p", "", "theatre"),
  ev("Open Mic & Jam", "VFW Post 1685", "Anchorage", "2024-12-15", "4:30p-8:30p", ""),
  ev("Taylor Swift's 35th All Ages B-Day Party w/ The Blank Space Tribute", "Williwaw Social", "Anchorage", "2024-12-15", "4p-8p", ""),
  ev("Zoo Lights", "Alaska Zoo", "Anchorage", "2024-12-15", "5p-8p", ""),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2024-12-15", "6p-10p", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2024-12-15", "6p-9p", ""),
  ev("Open Mic Night w/ Mister Boobs", "Broken Blender", "Anchorage", "2024-12-15", "7p-10p", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2024-12-15", "7p-11p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2024-12-15", "8:30p-10p", "", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2024-12-15", "8:30p-1a", ""),
  ev("Latin Night", "Pink Cadillac", "Anchorage", "2024-12-15", "8p-12a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2024-12-15", "9p-12a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2024-12-15", "9p-2a", ""),

  // ═══ EAGLE RIVER — Sunday December 15th ═══
  ev("Santa Skate", "Big Dipper Ice Arena", "Eagle River", "2024-12-15", "1p-2:30p", ""),
  ev("Juneau Skating Club: Holiday Show", "Treadwell Arena", "Eagle River", "2024-12-15", "1p-2p", ""),
  ev("The Singing Christmas Tree", "Clover Pass Community Church", "Eagle River", "2024-12-15", "2:30p-4p & 4:30p-6p", ""),
  ev("One World, One Sky: Big Bird's Adventure 1:30p & 2:", "Marie Drake Planetarium", "Eagle River", "2024-12-15", "30p", ""),
  ev("Juneau Symphony: Holiday Cheer 2024", "Thunder Mountain High School", "Eagle River", "2024-12-15", "3p-5p", ""),
  ev("Indoor Concert with Matt The Electrician", "The Musk Ox Farm", "Eagle River", "2024-12-15", "4:30p-8p", ""),
  ev("Christmas with Alaska Chamber Singers", "St. Andrew Catholic Church", "Eagle River", "2024-12-15", "4p-6p", ""),
  ev("Sunday Serenade w/ Spank Williams & Cherie Bowman", "Pakalolo Supply Co", "Eagle River", "2024-12-15", "4p-6p", ""),
  ev("Yuletide Festival", "Alaska State Fairgrounds", "Eagle River", "2024-12-15", "5p-10p", "", "festival"),
  ev("Open Mic Night", "Everett’s", "Eagle River", "2024-12-15", "6p-10p", ""),
  ev("Alaska Jingle & Joy Christmas Program", "King’s Christian School", "Eagle River", "2024-12-15", "6p-8p", ""),

  // ═══ ANCHORAGE — Monday December 16th ═══
  ev("Boombox Bingo", "Broken Blender", "Anchorage", "2024-12-16", "6:30p-8:30", ""),
  ev("AJW Community Jazz Jam Session", "K Street Market", "Anchorage", "2024-12-16", "6p-9p", ""),
  ev("Buckaroos Night w/ DJ Rico", "Pink Cadillac", "Anchorage", "2024-12-16", "7p-11p", ""),
  ev("The Monday Mic w/ Boobs", "Koot’s", "Anchorage", "2024-12-16", "9p-12a", ""),
  ev("Jay Straw's Bass to Mouth Mondays!", "Van’s Dive Bar", "Anchorage", "2024-12-16", "9p-12a", ""),

  // ═══ EAGLE RIVER — Monday December 16th ═══
  ev("Live Music by the Fire!", "Soldotna Library", "Eagle River", "2024-12-16", "2p-4:30p", ""),
  ev("Open Mic Night w/ Jim Maloney & Orion Donicht", "Alice’s Champagne Palace", "Eagle River", "2024-12-16", "7p-10p", ""),
  ev("Holiday Concert w/ LHS Show Choir & Jazz Band", "Hering Auditorium", "Eagle River", "2024-12-16", "7p-9p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-12-16", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday December 17th ═══
  ev("Phatt Tuesday New Orleans Jazz & Funk", "Matanuska Brewing", "Anchorage", "2024-12-17", "6p-10p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2024-12-17", "6p-8p", ""),
  ev("Wendler Choir Concert", "Wendler Middle School", "Anchorage", "2024-12-17", "6p-8p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2024-12-17", "7p-11p", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-12-17", "8p-2a", ""),
  ev("Midnight Freestyle", "Koot’s", "Anchorage", "2024-12-17", "9p-12a", ""),
  ev("Eternal Cowboys", "Koot’s", "Anchorage", "2024-12-17", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday December 17th ═══
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2024-12-17", "6:30p-10p", ""),
  ev("Holiday Carolers", "Kenai Community Library", "Eagle River", "2024-12-17", "6p-8p", ""),
  ev("Jazz Jam Tuesdays", "The Crystal Saloon", "Eagle River", "2024-12-17", "8p-11p", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2024-12-17", "8p-11p", ""),
  ev("Open Mic Night", "Four Corner’s Lounge", "Eagle River", "2024-12-17", "8p-12a", ""),
  ev("Open Jam Night", "Yukon Bar", "Eagle River", "2024-12-17", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday December 18th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2024-12-18", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2024-12-18", "10p-12a", ""),
  ev("Disco Magnifique", "Ginger", "Anchorage", "2024-12-18", "6:30p-10:30p", ""),
  ev("A-Town Sharps", "Organic Oasis", "Anchorage", "2024-12-18", "6p-8p", ""),
  ev("Line Dance Night", "Pink Cadillac", "Anchorage", "2024-12-18", "7:15p-11:45p", "", "dance"),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2024-12-18", "7p-10p", ""),
  ev("Country Night & Dance Lessons", "Koot’s", "Anchorage", "2024-12-18", "7p-1a", "", "dance"),
  ev("National Lampoon’s Christmas Vacation 35th Anniversary", "Bear Tooth Theatrepub", "Anchorage", "2024-12-18", "8p-10p", ""),
  ev("Open Mic", "Lil Babes Cocktail Lounge", "Anchorage", "2024-12-18", "8p-12a", ""),
  ev("UNofficial IATSE Local 918 Holiday Party", "Van’s Dive Bar", "Anchorage", "2024-12-18", "8p-1a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2024-12-18", "8p-2a", ""),

  // ═══ EAGLE RIVER — Wednesday December 18th ═══
  ev("Open Mic", "Schwabenhof", "Eagle River", "2024-12-18", "7:30p-11p", ""),
  ev("Marian Call & Matt the Electrician", "Nonna’s Osteria", "Eagle River", "2024-12-18", "7p-10p", ""),
  ev("Snow Film Series: TGR's Beyond the Fantasy", "Sitzmark", "Eagle River", "2024-12-18", "7p-9p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2024-12-18", "8p-11p", ""),
  ev("Open Mic Wednesday", "The Crystal Saloon", "Eagle River", "2024-12-18", "8p-11p", ""),
  ev("Open Mic", "Fairview Inn", "Eagle River", "2024-12-18", "8p-12a", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2024-12-18", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2024-12-18", "9p-2a", ""),

  // ═══ ANCHORAGE — Tuesday January 21st ═══
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2025-01-21", "10p-2a", ""),
  ev("Phatt Tuesday New Orleans Jazz & Funk", "Matanuska Brewing", "Anchorage", "2025-01-21", "6p-10p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2025-01-21", "6p-8p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2025-01-21", "7p-11p", ""),
  ev("Midnight Freestyle", "Koot’s", "Anchorage", "2025-01-21", "9p-2a", ""),

  // ═══ EAGLE RIVER — Tuesday January 21st ═══
  ev("Comedy Night Open Mic w/ AK Sexy Killer", "Pakalolo Supply Company", "Eagle River", "2025-01-21", "12p-2p", "", "comedy"),
  ev("Art & Music Night", "Government Peak Chalet", "Eagle River", "2025-01-21", "5:30p-6:30p", ""),
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2025-01-21", "6:30p-10p", ""),
  ev("Jazz Jam Tuesday", "The Crystal Saloon", "Eagle River", "2025-01-21", "8p-11p", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2025-01-21", "8p-11p", ""),
  ev("Open Mic Night", "Four Corner’s Lounge", "Eagle River", "2025-01-21", "8p-12a", ""),
  ev("Open Jam Night", "Yukon Bar", "Eagle River", "2025-01-21", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday January 22nd ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2025-01-22", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-01-22", "10p-2a", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2025-01-22", "7p-10p", ""),
  ev("Line Dance Night", "Pink Cadillac", "Anchorage", "2025-01-22", "7p-11p", "", "dance"),
  ev("Country Night & Dance Lessons", "Koot’s", "Anchorage", "2025-01-22", "7p-1a", "", "dance"),
  ev("Open Mic", "Lil Babes Cocktail Lounge", "Anchorage", "2025-01-22", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2025-01-22", "8p-2a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2025-01-22", "9p-12a", ""),

  // ═══ EAGLE RIVER — Wednesday January 22nd ═══
  ev("Open Mike w/ Ben Sayers", "Main Street Tap & Grill", "Eagle River", "2025-01-22", "6p-9p", ""),
  ev("Open Mic", "Schwabenhof", "Eagle River", "2025-01-22", "7:30p-11p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2025-01-22", "8p-11p", ""),
  ev("Open Mic Wednesday", "The Crystal Saloon", "Eagle River", "2025-01-22", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2025-01-22", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2025-01-22", "9p-2a", ""),

  // ═══ ANCHORAGE — Thursday January 23rd ═══
  ev("Acoustic Affair w/ Lizzie G, Ken Cline, Garrett Hermansen, Silas Wade, & Pepper Kit", "Williwaw Social", "Anchorage", "2025-01-23", "7p-10p", "", "festival"),
  ev("Country Music Night w/ Schaefer Mueller", "Broken Blender", "Anchorage", "2025-01-23", "7p-11p", ""),
  ev("Ladies Night at Pink Cadillac w/ DJ Rico", "Pink Cadillac", "Anchorage", "2025-01-23", "7p-12a", ""),
  ev("Anchorage Folk Festival", "Wendy Williamson Theatre", "Anchorage", "2025-01-23", "7p-9:30p", "", "festival"),
  ev("Latin Thursday w/ DJ Mykey T", "Koot’s", "Anchorage", "2025-01-23", "8p-11:45p", ""),
  ev("Karaoke w/ Big Dream Entertainment", "Flattop Pizza & Pool", "Anchorage", "2025-01-23", "8p-12a", ""),
  ev("Karaoke", "Floaters", "Anchorage", "2025-01-23", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2025-01-23", "8p-2a", ""),
  ev("Will Balcao", "Koot’s", "Anchorage", "2025-01-23", "9p-2a", ""),

  // ═══ EAGLE RIVER — Thursday January 23rd ═══
  ev("The Vintage Retro", "Chair 5 Restaurant", "Eagle River", "2025-01-23", "10:30p-1:30a", ""),
  ev("Karaoke Nights at the Big I", "The International Hotel & Bar", "Eagle River", "2025-01-23", "10p-2a", ""),
  ev("Town League Race Series & Live Music w/ Dreamcat + 3000-21", "Sitzmark", "Eagle River", "2025-01-23", "5p-9p", ""),
  ev("Shakedown Strings Live", "Palmer Alehouse", "Eagle River", "2025-01-23", "6p-9p", ""),
  ev("The AKoustic Project", "Tailgater’s Sport’s Bar & Grill", "Eagle River", "2025-01-23", "7p-10p", ""),
  ev("Open Jam/Mic Night w/ Host Jesse James", "Four Corner’s Lounge", "Eagle River", "2025-01-23", "7p-11p", ""),
  ev("Mean Girls: High School Version", "Hering Auditorium", "Eagle River", "2025-01-23", "7p-9p", ""),
  ev("Lindsay Glazer", "Main Street Tap & Grill", "Eagle River", "2025-01-23", "7p-9p", ""),
  ev("Open Mic", "Alaskan Hotel and Bar", "Eagle River", "2025-01-23", "8p-11p", ""),
  ev("Karaoke Thursdays", "The Crystal Saloon", "Eagle River", "2025-01-23", "8p-11p", ""),
  ev("Open Mic w/ Cody Kniceley", "4 Royle Parkers", "Eagle River", "2025-01-23", "8p-12a", ""),
  ev("Karaoke", "Klondike Mike’s and Garcia’s Grill", "Eagle River", "2025-01-23", "8p-1a", ""),
  ev("Karaoke Night", "Alibi Bar & Café", "Eagle River", "2025-01-23", "9:15p-12:15a", ""),

  // ═══ ANCHORAGE — Friday January 24th ═══
  ev("The Stack Alaska", "Koots", "Anchorage", "2025-01-24", "10:30p-2a", ""),
  ev("Organic Launch Party w/ The 7 Duo", "Zip Kombucha", "Anchorage", "2025-01-24", "6p-8p", ""),
  ev("Ivan Dennis", "Angry Salmon", "Anchorage", "2025-01-24", "6p-9p", ""),
  ev("International Guitar Night XXV", "Alaska Center for the Performing Arts", "Anchorage", "2025-01-24", "7:30p-9:20p", ""),
  ev("Anchorage Folk Festival", "Wendy Williamson Theatre", "Anchorage", "2025-01-24", "7p-10p", "", "festival"),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2025-01-24", "7p-12a", ""),
  ev("Stand-Up Comedy Show with Billy Wayne Davis", "Beartooth Theatrepub", "Anchorage", "2025-01-24", "7p-9p", "", "comedy"),
  ev("Glacier Hoppers Band", "Humpy’s", "Anchorage", "2025-01-24", "8:30p-12a", ""),
  ev("Karaoke w/ DJ Sparkles", "Broken Blender", "Anchorage", "2025-01-24", "8p-12a", ""),
  ev("Pop vs Hip Hop Dance Party w/ DJ GRE", "Williwaw Social", "Anchorage", "2025-01-24", "9:30p-1a", "", "dance"),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2025-01-24", "9p-11:30p", ""),
  ev("Friday Night Dance Social", "Arctic Academie de Danse", "Anchorage", "2025-01-24", "9p-11p", "", "dance"),
  ev("Friday Night Dance Lounge", "Alaska Dance Promotions", "Anchorage", "2025-01-24", "9p-1a", "", "dance"),
  ev("Live Music w/ Travis Watson", "The Carousel Lounge", "Anchorage", "2025-01-24", "9p-1a", ""),
  ev("DJ Ke", "Flattop Pizza & Pool", "Anchorage", "2025-01-24", "9p-1a", ""),
  ev("Blast From The Past", "Time Out Lounge", "Anchorage", "2025-01-24", "9p-2:30a", ""),
  ev("Slow Burn (A Blunts & Blondes Pre-Party)", "Koots", "Anchorage", "2025-01-24", "9p-2a", ""),

  // ═══ EAGLE RIVER — Friday January 24th ═══
  ev("Jerry Wessling Band", "The Mug-Shot Saloon", "Eagle River", "2025-01-24", "10p-2a", ""),
  ev("Lizzie Guillot", "Last Frontier Brewing", "Eagle River", "2025-01-24", "6-9", ""),
  ev("Piano Music by Erika", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2025-01-24", "6p-8p", ""),
  ev("Comedy Show w/ Lindsay Glazer", "Everett’s", "Eagle River", "2025-01-24", "7:30p-10p", "", "comedy"),
  ev("Nervis Rex", "Odd Man Rush", "Eagle River", "2025-01-24", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2025-01-24", "7p-11p", ""),
  ev("Trivia & Open Mike Night Fridays", "Pioneer Bar", "Eagle River", "2025-01-24", "7p-12a", ""),
  ev("Mean Girls: High School Version", "Hering Auditorium", "Eagle River", "2025-01-24", "7p-9p", ""),
  ev("Free Music Fridays: Grace C. Elliot", "Seward Alehouse", "Eagle River", "2025-01-24", "7p-9p", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2025-01-24", "8p-11p", ""),
  ev("Emo Night at the Cabin w/ DJ Trax", "The Cabin", "Eagle River", "2025-01-24", "9p-12a", ""),
  ev("Ski Bunny Ball w/ I Like Robots", "Sitzmark", "Eagle River", "2025-01-24", "9p-12a", ""),
  ev("Shakedown Strings", "Alice’s Champagne Palace", "Eagle River", "2025-01-24", "9p-12a", ""),
  ev("The Ken Peltier Band", "Four Corner’s Lounge", "Eagle River", "2025-01-24", "9p-1a", ""),
  ev("DJ Blaque", "Klondike Mike’s and Garcia’s Grill", "Eagle River", "2025-01-24", "9p-1a", ""),
  ev("Rick Brooks", "Fairview Inn", "Eagle River", "2025-01-24", "9p-1a", ""),

  // ═══ ANCHORAGE — Saturday January 25th ═══
  ev("Riddim + Beats w/ DJ JRock & DJ Militant", "Koots", "Anchorage", "2025-01-25", "10p-2:30a", ""),
  ev("Shakedown Strings", "Koot’s", "Anchorage", "2025-01-25", "10p-2a", ""),
  ev("All The Single Ladies Dance Party w/ DJ Blaque", "Williwaw Social", "Anchorage", "2025-01-25", "10p-2a", "", "dance"),
  ev("Auditions for Twinkle's Fairy Pet Day", "Cyrano’s Playhouse", "Anchorage", "2025-01-25", "10p-2p", "", "festival"),
  ev("Tim Easton", "Arctic Valley Ski Area", "Anchorage", "2025-01-25", "2p-5p", ""),
  ev("Karaoke", "Writer’s Block Bookstore & Café", "Anchorage", "2025-01-25", "5:30p-8p", ""),
  ev("JunoSmile", "Angry Salmon", "Anchorage", "2025-01-25", "6p-9p", ""),
  ev("Anchorage Symphony's \"Portraits\"", "Alaska Center for the Performing Arts", "Anchorage", "2025-01-25", "7:30p-9:30p", ""),
  ev("Anchorage Folk Festival", "Beartooth Theatrepub", "Anchorage", "2025-01-25", "7p-10p", "", "festival"),
  ev("Dance Lessons & Social Dance", "Anchorage Social Dance Club", "Anchorage", "2025-01-25", "7p-11p", "", "dance"),
  ev("Comedy Show with Lindsay Glazer", "Koots", "Anchorage", "2025-01-25", "7p-8:30p & 9p-10:30p", "", "comedy"),
  ev("Woodrow", "Humpy’s", "Anchorage", "2025-01-25", "8:30p-12a", ""),
  ev("Glacier Hoppers Band", "Anchorage Moose Lodge", "Anchorage", "2025-01-25", "8p-12a", ""),
  ev("Anchorage Folk Festival", "Wendy Williamson Theatre", "Anchorage", "2025-01-25", "9a-10p", "", "festival"),
  ev("Weekly Karaoke Contest", "Oriental Garden", "Anchorage", "2025-01-25", "9p-1:30a", ""),
  ev("Open Range Country Mash-Up Night w/ DJ Lloyds Noize", "Pink Cadillac", "Anchorage", "2025-01-25", "9p-2a", ""),

  // ═══ EAGLE RIVER — Saturday January 25th ═══
  ev("Ladies Night Out", "Bernie’s Bar", "Eagle River", "2025-01-25", "10p-1a", ""),
  ev("Fuego Saturday w/ DJ Trey", "The International Hotel & Bar", "Eagle River", "2025-01-25", "10p-2a", ""),
  ev("DJ Brazen", "Klondike Mike’s and Garcia’s Grill", "Eagle River", "2025-01-25", "10p-2a", ""),
  ev("Jerry Wessling Band", "The Mug-Shot Saloon", "Eagle River", "2025-01-25", "10p-2a", ""),
  ev("Mean Girls: High School Version", "Hering Auditorium", "Eagle River", "2025-01-25", "2p-4p & 7p-9p", ""),
  ev("Head With Wings", "Hatcher Pass Lodge", "Eagle River", "2025-01-25", "4p-7p", ""),
  ev("Jesse James", "Last Frontier Brewing", "Eagle River", "2025-01-25", "6-9", ""),
  ev("Back Country Film Festival", "Sheldon Community Arts Hangar", "Eagle River", "2025-01-25", "6:30p-9p", "", "festival"),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2025-01-25", "6p-8p", ""),
  ev("Mardi Gras Night", "Wasilla High School", "Eagle River", "2025-01-25", "6p-9p", ""),
  ev("Dance Lessons with Shufflin’ Country Style & Karaoke After", "American Legion", "Eagle River", "2025-01-25", "7p-10p", "", "dance"),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2025-01-25", "7p-11p", ""),
  ev("Teri Tibbett Presents: Beatles Night", "The Crystal Saloon", "Eagle River", "2025-01-25", "8p-11p", ""),
  ev("Justin McCain", "Schwabenhof", "Eagle River", "2025-01-25", "8p-11p", ""),
  ev("Rockin' Night w/ GrungeBob", "The Cabin", "Eagle River", "2025-01-25", "9p-12a", "", "community"),
  ev("Ski Bunny Ball w/ I Like Robots", "Sitzmark", "Eagle River", "2025-01-25", "9p-12a", ""),
  ev("Karaoke Saturdays", "Pioneer Bar", "Eagle River", "2025-01-25", "9p-12a", ""),
  ev("Hot Mess", "The Backdoor Lounge", "Eagle River", "2025-01-25", "9p-1a", ""),
  ev("The Ken Peltier Band", "Four Corner’s Lounge", "Eagle River", "2025-01-25", "9p-1a", ""),
  ev("Glacier Blues Band", "Fairview Inn", "Eagle River", "2025-01-25", "9p-1a", ""),

  // ═══ ANCHORAGE — Sunday January 26th ═══
  ev("Auditions for Twinkle's Fairy Pet Day", "Cyrano’s Playhouse", "Anchorage", "2025-01-26", "10p-21p", "", "festival"),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2025-01-26", "10p-2a", ""),
  ev("Brunch Music w/ Alan Parsons", "Writer’s Block Bookstore & Café", "Anchorage", "2025-01-26", "12p-2p", ""),
  ev("Long Nights Moon Live", "Arctic Valley Ski Area", "Anchorage", "2025-01-26", "1p-4p", ""),
  ev("Open Mic & Jam", "VFW Post 1685", "Anchorage", "2025-01-26", "4:30p-8:30p", ""),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2025-01-26", "6p-10p", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2025-01-26", "6p-9p", ""),
  ev("American Tango Lesson & Open Dance", "Change Point", "Anchorage", "2025-01-26", "7:45p-10p", "", "dance"),
  ev("Open Mic Night w/ Mister Boobs", "Broken Blender", "Anchorage", "2025-01-26", "7p-10p", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2025-01-26", "7p-11p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2025-01-26", "8:30p-10p", "", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2025-01-26", "8:30p-1a", ""),
  ev("Anchorage Folk Festival", "Wendy Williamson Theatre", "Anchorage", "2025-01-26", "9:45a-10p", "", "festival"),
  ev("Open Decks", "Koot’s", "Anchorage", "2025-01-26", "9p-2:30a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2025-01-26", "9p-2a", ""),

  // ═══ EAGLE RIVER — Sunday January 26th ═══
  ev("International Guitar Night: 25th Anniversary", "Sheldon Community Arts Hangar", "Eagle River", "2025-01-26", "6:30p-9p", ""),
  ev("Open Mic Night", "Everett’s", "Eagle River", "2025-01-26", "6p-10p", ""),
  ev("Sunday Swing at the Red Dog", "Red Dog Saloon", "Eagle River", "2025-01-26", "6p-9p", "", "dance"),

  // ═══ ANCHORAGE — Monday January 27th ═══
  ev("Anchorage Folk Festival", "Middle Way Café", "Anchorage", "2025-01-27", "2p-4p", "", "festival"),
  ev("Anchorage Folk Festival", "Hearth Artisan Pizza", "Anchorage", "2025-01-27", "5p-8p", "", "festival"),
  ev("Anchorage Folk Festival", "Organic Oasis", "Anchorage", "2025-01-27", "5p-8p", "", "festival"),
  ev("Boombox Bingo", "Broken Blender", "Anchorage", "2025-01-27", "6:30p-8:30", ""),
  ev("Anchorage Folk Festival", "Reilly’s Irish Pub", "Anchorage", "2025-01-27", "6p-10p", "", "festival"),
  ev("AJW Community Jazz Jam Session", "K Street Market", "Anchorage", "2025-01-27", "6p-9p", ""),
  ev("Anchorage Folk Festival", "Sleepy Dog Coffee Co", "Anchorage", "2025-01-27", "6p-9p", "", "festival"),
  ev("The Monday Mic w/ Boobs", "Koot’s", "Anchorage", "2025-01-27", "9p-12a", ""),

  // ═══ EAGLE RIVER — Monday January 27th ═══
  ev("Art & Music Night", "Government Peak Chalet", "Eagle River", "2025-01-27", "5:30p-6:30p", ""),
  ev("Community Choir Rehearsal", "Sheldon Community Arts Hangar", "Eagle River", "2025-01-27", "6p-9p", "", "community"),
  ev("Open Mic Night w/ Jim Maloney & Orion Donicht", "Alice’s Champagne Palace", "Eagle River", "2025-01-27", "7p-10p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2025-01-27", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday January 28th ═══
  ev("Anchorage Folk Festival", "Sleepy Dog Coffee Co", "Anchorage", "2025-01-28", "6p-8p", "", "festival"),
  ev("Anchorage Folk Festival", "Guido’s Pizza", "Anchorage", "2025-01-28", "7p-9p", "", "festival"),

  // ═══ EAGLE RIVER — Tuesday January 28th ═══
  ev("Art & Music Night", "Government Peak Chalet", "Eagle River", "2025-01-28", "5:30p-6:30p", ""),
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2025-01-28", "6:30p-10p", ""),
  ev("Myles From Dublin: Irish Trio", "Alice’s Champagne Palace", "Eagle River", "2025-01-28", "7p-10p", ""),
  ev("Jazz Jam Tuesday", "The Crystal Saloon", "Eagle River", "2025-01-28", "8p-11p", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2025-01-28", "8p-11p", ""),
  ev("Open Mic Night", "Four Corner’s Lounge", "Eagle River", "2025-01-28", "8p-12a", ""),
  ev("Open Jam Night", "Yukon Bar", "Eagle River", "2025-01-28", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday January 29th ═══
  ev("Anchorage Folk Festival", "UAA Student Union", "Anchorage", "2025-01-29", "12p-2p", "", "festival"),
  ev("Anchorage Folk Festival", "Organic Oasis", "Anchorage", "2025-01-29", "6p-8p", "", "festival"),
  ev("Cabaret: Pay-What-You-Can-Preview", "Cyrano’s Playhouse", "Anchorage", "2025-01-29", "7p-9:30p", ""),
  ev("Anchorage Folk Festival", "Writer’s Block Bookstore & Café", "Anchorage", "2025-01-29", "7p-9p", "", "festival"),

  // ═══ EAGLE RIVER — Wednesday January 29th ═══
  ev("Open Mike w/ Ben Sayers", "Main Street Tap & Grill", "Eagle River", "2025-01-29", "6p-9p", ""),
  ev("Open Mic", "Schwabenhof", "Eagle River", "2025-01-29", "7:30p-11p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2025-01-29", "8p-11p", ""),
  ev("Open Mic Wednesday", "The Crystal Saloon", "Eagle River", "2025-01-29", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2025-01-29", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2025-01-29", "9p-2a", ""),

  // ═══ ANCHORAGE — Sunday February 16th ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-02-16", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2025-02-16", "10p-2a", ""),
  ev("Jams For Fams w/ DJ Spencer Lee: Neon Love Party", "Bear Tooth Theatrepub", "Anchorage", "2025-02-16", "11a-1p", ""),
  ev("Improv Dojo", "Midnight Sun Theatre", "Anchorage", "2025-02-16", "12p-1:30p", ""),
  ev("Brunch Music w/ Alex Parsons", "Writer’s Block Bookstore & Café", "Anchorage", "2025-02-16", "12p-2p", ""),
  ev("Brunch Music w/ Django Jam", "Writer’s Block Bookstore & Café", "Anchorage", "2025-02-16", "2p-5p", ""),
  ev("Judy Moody and the Stink: The Mad, Mad, Mad, Mad Treasure Hunt", "UAA Fine Arts Building", "Anchorage", "2025-02-16", "3p-4:30p", ""),
  ev("Cabaret", "Cyrano’s Theatre Building", "Anchorage", "2025-02-16", "3p-5p", ""),
  ev("Comfortably Dumb Live", "Arctic Valley Ski Area", "Anchorage", "2025-02-16", "3p-6p", ""),
  ev("Open Mic & Jam", "VFW Post 1685", "Anchorage", "2025-02-16", "4:30p-8:30p", ""),
  ev("Valentine’s Weekend Zoo Lights", "Alaska Zoo", "Anchorage", "2025-02-16", "5p-8p", ""),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2025-02-16", "6p-10p", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2025-02-16", "6p-9p", ""),
  ev("American Tango Lesson & Open Dance", "Change Point", "Anchorage", "2025-02-16", "7:45p-10p", "", "dance"),
  ev("Open Mic Night w/ Mister Boobs", "Broken Blender", "Anchorage", "2025-02-16", "7p-10p", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2025-02-16", "7p-11p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2025-02-16", "8:30p-10p", "", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2025-02-16", "8:30p-1a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2025-02-16", "9p-12a", ""),
  ev("Salsa Festival Black & Blue Themed Closing Party", "Continental Events", "Anchorage", "2025-02-16", "9p-1a", "", "dance"),
  ev("Open Decks", "Koots", "Anchorage", "2025-02-16", "9p-2:30a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2025-02-16", "9p-2a", ""),

  // ═══ EAGLE RIVER — Sunday February 16th ═══
  ev("Gospel Choir Celebrations", "Juneau Arts and Humanities", "Eagle River", "2025-02-16", "2p-4 & 5p-7p", ""),
  ev("Open Mic Night", "The Creek Street Cabaret", "Eagle River", "2025-02-16", "5p-8p", ""),
  ev("Open Mic Night", "Everett’s", "Eagle River", "2025-02-16", "6p-10p", ""),
  ev("Sunday Swing at the Red Dog", "Red Dog Saloon", "Eagle River", "2025-02-16", "6p-9p", "", "dance"),

  // ═══ ANCHORAGE — Monday February 17th ═══
  ev("Boombox Bingo", "Broken Blender", "Anchorage", "2025-02-17", "6:30p-8:30", ""),
  ev("AJW Community Jazz Jam Session", "K Street Market", "Anchorage", "2025-02-17", "6p-9p", ""),
  ev("The Monday Mic w/ Boobs", "Koot’s", "Anchorage", "2025-02-17", "9p-12a", ""),

  // ═══ EAGLE RIVER — Monday February 17th ═══
  ev("Art & Music Night", "Government Peak Chalet", "Eagle River", "2025-02-17", "5:30p-6:30p", ""),
  ev("Community Choir Rehearsal", "Sheldon Community Arts Hangar", "Eagle River", "2025-02-17", "6p-9p", "", "community"),
  ev("Open Mic Night w/ Jim Maloney & Orion Donicht", "Alice’s Champagne Palace", "Eagle River", "2025-02-17", "7p-10p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2025-02-17", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday February 18th ═══
  ev("Live Music with Witty Youngman", "Orso", "Anchorage", "2025-02-18", "6p-8p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2025-02-18", "6p-8p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2025-02-18", "7p-11p", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2025-02-18", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday February 18th ═══
  ev("Art & Music Night", "Government Peak Chalet", "Eagle River", "2025-02-18", "5:30p-6:30p", ""),
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2025-02-18", "6:30p-10p", ""),
  ev("Tyson Davis Tuesdays", "Seward Alehouse", "Eagle River", "2025-02-18", "6p-8p", ""),
  ev("Karaoke Night at the Cabin", "The Cabin", "Eagle River", "2025-02-18", "7p-10p", ""),
  ev("Jazz Jam Tuesday", "The Crystal Saloon", "Eagle River", "2025-02-18", "8p-11p", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2025-02-18", "8p-11p", ""),
  ev("Open Mic Night", "Four Corner’s Lounge", "Eagle River", "2025-02-18", "8p-12a", ""),
  ev("Open Jam Night", "Yukon Bar", "Eagle River", "2025-02-18", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday February 19th ═══
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2025-02-19", "10p-12a", ""),
  ev("Board Night w/ DJ Covy", "Humpy’s", "Anchorage", "2025-02-19", "6p-9p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2025-02-19", "7p-10p", ""),
  ev("Line Dance Night", "Pink Cadillac", "Anchorage", "2025-02-19", "7p-11p", "", "dance"),
  ev("Country Night & Dance Lessons", "Koot’s", "Anchorage", "2025-02-19", "7p-1a", "", "dance"),
  ev("Stand Up Comedy w/ Joey Medina", "Angry Salmon", "Anchorage", "2025-02-19", "7p-8:30p", "", "comedy"),
  ev("Open Mic", "Lil Babes Cocktail Lounge", "Anchorage", "2025-02-19", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2025-02-19", "8p-2a", ""),

  // ═══ EAGLE RIVER — Wednesday February 19th ═══
  ev("2025 Iron Dog Race Nome Halfway Ceremonies & Banquet", "Nome Mini Convention Center", "Eagle River", "2025-02-19", "4p-6p", ""),
  ev("Open Mike w/ Ben Sayers", "Main Street Tap & Grill", "Eagle River", "2025-02-19", "6p-9p", ""),
  ev("Open Mic", "Schwabenhof", "Eagle River", "2025-02-19", "7:30p-11p", ""),
  ev("Open Mic Night at the Cabin", "The Cabin", "Eagle River", "2025-02-19", "7p-10p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2025-02-19", "8p-11p", ""),
  ev("Open Mic Wednesday", "The Crystal Saloon", "Eagle River", "2025-02-19", "8p-11p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2025-02-19", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2025-02-19", "9p-2a", ""),

  // ═══ ANCHORAGE — Tuesday March 18th ═══
  ev("Live Music with Witty Youngman", "Orso", "Anchorage", "2025-03-18", "6p-8p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2025-03-18", "6p-8p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2025-03-18", "7p-11p", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2025-03-18", "9p-12a", ""),

  // ═══ EAGLE RIVER — Thursday March 20th ═══
  ev("70’s Dance Party w/ The Vintage Retro", "Chair 5", "Eagle River", "2025-03-20", "10:30p-1:30a", "", "dance"),
  ev("Karaoke Nights at the Big I", "The International Hotel & Bar", "Eagle River", "2025-03-20", "10p-2a", ""),
  ev("Open Mic Night w/ Kenai Collaborative", "The Goods", "Eagle River", "2025-03-20", "6p-8p", ""),
  ev("Matt Hopper Live", "Palmer Alehouse", "Eagle River", "2025-03-20", "6p-9p", ""),
  ev("William Shakespeare’s Long Lost First Play", "Holy Trinity Church", "Eagle River", "2025-03-20", "7:30p-9p", "", "theatre"),
  ev("The AKoustic Project", "Tailgater’s Sport’s Bar & Grill", "Eagle River", "2025-03-20", "7p-10p", ""),
  ev("Open Jam/Mic Night w/ Host Jesse James", "Four Corner’s Lounge", "Eagle River", "2025-03-20", "7p-11p", ""),
  ev("Open Mic", "Alaskan Hotel and Bar", "Eagle River", "2025-03-20", "8p-11p", ""),
  ev("Karaoke Thursdays", "The Crystal Saloon", "Eagle River", "2025-03-20", "8p-11p", ""),
  ev("Karaoke", "Klondike Mike’s and Garcia’s Grill", "Eagle River", "2025-03-20", "8p-1a", ""),
  ev("Karaoke Night", "Alibi Bar & Café", "Eagle River", "2025-03-20", "9:15p-12:15a", ""),

  // ═══ ANCHORAGE — Friday March 21st ═══
  ev("Rachel Whitmore", "Angry Salmon", "Anchorage", "2025-03-21", "6p-8p", ""),

  // ═══ EAGLE RIVER — Friday March 21st ═══
  ev("Blackwater Railroad Company Live7p", "Main Street Tap & Grill", "Eagle River", "2025-03-21", "10p", ""),
  ev("Marc Brown & The Blues Crew", "The International Hotel & Bar", "Eagle River", "2025-03-21", "10p-2a", ""),
  ev("DJ Darkstar and Deadzillenial", "Kharacter’s Alaskan Bar", "Eagle River", "2025-03-21", "10p-2a", ""),
  ev("Schaefer Mueller and The Neon Highway!", "Four Corner’s Lounge", "Eagle River", "2025-03-21", "10p-2a", ""),
  ev("Hot Mess", "The Mug-Shot Saloon", "Eagle River", "2025-03-21", "10p-2a", ""),
  ev("Winter King Tournament Kick-Off Party w/ The Copper River Band", "Alice’s Champagne Palace", "Eagle River", "2025-03-21", "4p-7p", ""),
  ev("Yoga and Relaxation Under the Stars", "Marie Drake Planetarium Juneau", "Eagle River", "2025-03-21", "5:30p-6:30p", ""),
  ev("Lia Everett", "Last Frontier Brewing", "Eagle River", "2025-03-21", "6-9", ""),
  ev("Beer Choir", "Devil’s Club Brewing Company", "Eagle River", "2025-03-21", "6:30p-9p", ""),
  ev("Women’s History Month Celebration", "Palmer Train Depot", "Eagle River", "2025-03-21", "6p-10p", "", "community"),
  ev("Piano Music by Erika", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2025-03-21", "6p-8p", ""),
  ev("A Felicidade Fridays", "The Crystal Saloon", "Eagle River", "2025-03-21", "6p-8p", ""),
  ev("Spring Fling Sock Hop", "Next Step Dance Kodiak", "Eagle River", "2025-03-21", "6p-8p", ""),
  ev("Irish Karaoke Jam", "Carlson Center", "Eagle River", "2025-03-21", "6p-9p", ""),
  ev("Comedy Show w/ Retha Jones", "Everett’s", "Eagle River", "2025-03-21", "7:30p-9p", "", "comedy"),
  ev("Ken Peltier Live", "Palmer Alehouse", "Eagle River", "2025-03-21", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2025-03-21", "7p-11p", ""),
  ev("Trivia & Open Mike Night Fridays", "Pioneer Bar", "Eagle River", "2025-03-21", "7p-12a", ""),
  ev("Arts by Air: Shake City String Band", "Bunnell Street Arts Center", "Eagle River", "2025-03-21", "7p-9", ""),
  ev("Valley Performing Arts: Annie", "The Glenn Massay Theatre", "Eagle River", "2025-03-21", "7p-9:30p", ""),
  ev("Parlor In The Round feat. Lizzie No, Annie B, & Joel Stuk", "Chilkat Center for the Arts", "Eagle River", "2025-03-21", "7p-9p", ""),
  ev("Free Music Fridays: The Robotz", "Seward Alehouse", "Eagle River", "2025-03-21", "7p-9p", ""),
  ev("St. Patrick's Day Social Dance", "The Pioneer Park Dance Hall", "Eagle River", "2025-03-21", "8:30p-11p", "", "dance"),
  ev("Baddies With Bars", "The Pub", "Eagle River", "2025-03-21", "8:30p-12a", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2025-03-21", "8p-11p", ""),
  ev("Fireweed Fiddle", "Fairview Inn", "Eagle River", "2025-03-21", "8p-1a", ""),
  ev("Country Night", "Bernie’s Bar", "Eagle River", "2025-03-21", "8p-2a", ""),
  ev("Pop vs House Music with DJ Tony Taylor", "The Cabin", "Eagle River", "2025-03-21", "9p-12a", ""),
  ev("Hot Buttered Rum W/ Quinton Woolman-Morgan", "The Crystal Saloon", "Eagle River", "2025-03-21", "9p-12a", ""),
  ev("Live at the Sitz: Dizgo", "Sitzmark", "Eagle River", "2025-03-21", "9p-1a", ""),
  ev("Jesse James & The Unlikely Gentlemen", "Klondike Mike’s and Garcia’s Grill", "Eagle River", "2025-03-21", "9p-1a", ""),

  // ═══ ANCHORAGE — Saturday March 22nd ═══
  ev("JUNOsmile", "Angry Salmon", "Anchorage", "2025-03-22", "6p-9p", ""),
  ev("Karaoke Night", "Trophy Lounge", "Anchorage", "2025-03-22", "8:30p-1a", ""),
  ev("Karaoke Night with Matti Moosic!", "American Legion Post 33", "Anchorage", "2025-03-22", "8p-12a", ""),

  // ═══ EAGLE RIVER — Saturday March 22nd ═══
  ev("Marc Brown & The Blues Crew", "The International Hotel & Bar", "Eagle River", "2025-03-22", "10p-2a", ""),
  ev("Pudgies & Gaiaspyre", "Kharacter’s Alaskan Bar", "Eagle River", "2025-03-22", "10p-2a", ""),
  ev("Spring Break Party: Jersey Shore Edition!", "Bernie’s Bar", "Eagle River", "2025-03-22", "10p-2a", ""),
  ev("Hot Mess", "The Mug-Shot Saloon", "Eagle River", "2025-03-22", "10p-2a", ""),
  ev("Unit Souzou", "Sheldon Community Arts Hangar", "Eagle River", "2025-03-22", "12p-2p", ""),
  ev("Black Barrel & The Bad Men", "Hatcher Pass Lodge", "Eagle River", "2025-03-22", "4p-7p", ""),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2025-03-22", "6p-8p", ""),
  ev("80's Hollywood Prom Night!", "Creekbend Company", "Eagle River", "2025-03-22", "6p-9p", ""),
  ev("Jerry Wessling Live", "Everett’s", "Eagle River", "2025-03-22", "6p-9p", ""),
  ev("Matt Hopper & The Roman Candles", "Porcupine Theatre", "Eagle River", "2025-03-22", "7:30p-10p", ""),
  ev("Conch Street All-Ages Show", "The Goods", "Eagle River", "2025-03-22", "7:30p-8:30p", ""),
  ev("Dance Lessons with Shufflin’ Country Style & Karaoke After", "American Legion Post 15", "Eagle River", "2025-03-22", "7p-10p", "", "dance"),
  ev("Matt Nino", "Odd Man Rush", "Eagle River", "2025-03-22", "7p-11p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2025-03-22", "7p-11p", ""),
  ev("Triple Black Dimond", "Fairview Inn", "Eagle River", "2025-03-22", "8p-1a", ""),
  ev("Karaoke Saturdays", "Pioneer Bar", "Eagle River", "2025-03-22", "9p-12a", ""),
  ev("Live Music w/ Ayden See", "The Bayou", "Eagle River", "2025-03-22", "9p-12a", ""),
  ev("Live at the Sitz: Dizgo", "Sitzmark", "Eagle River", "2025-03-22", "9p-1a", ""),
  ev("Ken Peltier Band", "Four Corner’s Lounge", "Eagle River", "2025-03-22", "9p-1a", ""),
  ev("Glacier Hoppers Band", "Klondike Mike’s and Garcia’s Grill", "Eagle River", "2025-03-22", "9p-1a", ""),

  // ═══ ANCHORAGE — Sunday March 23rd ═══
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2025-03-23", "6p-9p", ""),

  // ═══ EAGLE RIVER — Sunday March 23rd ═══
  ev("Argentine Tango Lesson & Open Dance", "Aurora Mediterranean Restaurant", "Eagle River", "2025-03-23", "1p-3p", "", "dance"),
  ev("Valley Performing Arts: Annie", "The Glenn Massay Theatre", "Eagle River", "2025-03-23", "2p-4:30p", ""),
  ev("Songs of Spring", "St. Andrew Catholic", "Eagle River", "2025-03-23", "4p-6p", ""),
  ev("PF Classical Community Concert", "Stevenson Hall", "Eagle River", "2025-03-23", "4p-6p", ""),
  ev("Open Mic Night", "The Creek Street Cabaret", "Eagle River", "2025-03-23", "5p-8p", ""),
  ev("Open Mic Night", "Everett’s", "Eagle River", "2025-03-23", "6p-10p", ""),
  ev("Sunday Swing at the Red Dog", "Red Dog Saloon", "Eagle River", "2025-03-23", "6p-9p", "", "dance"),
  ev("Parlor in the Round ft Lizzie No, Annie Bartholomew, & Eliza Russell", "Skagway Brewing", "Eagle River", "2025-03-23", "6p-9p", ""),

  // ═══ ANCHORAGE — Monday March 24th ═══
  ev("Boombox Bingo", "Broken Blender", "Anchorage", "2025-03-24", "6:30p-8:30", ""),
  ev("AJW Community Jazz Jam Session", "K Street Market", "Anchorage", "2025-03-24", "6p-9p", ""),
  ev("Monday Open Mic", "Koot’s", "Anchorage", "2025-03-24", "9p-12a", ""),
  ev("The Monday Mic w/ Boobs", "Koot’s", "Anchorage", "2025-03-24", "9p-12a", ""),

  // ═══ EAGLE RIVER — Monday March 24th ═══
  ev("Song Circle w/ Friends of Mike Morgan", "The Goods", "Eagle River", "2025-03-24", "5p-7p", ""),
  ev("BOOMbal Dance Hall", "Main Street Gallery", "Eagle River", "2025-03-24", "6p-7:30p", "", "dance"),
  ev("Open Mic Night w/ Jim Maloney & Orion Donicht", "Alice’s Champagne Palace", "Eagle River", "2025-03-24", "7p-10p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2025-03-24", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday March 25th ═══
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2025-03-25", "6:30p-10p", ""),
  ev("Tyson Tuesdays", "Seward Alehouse", "Eagle River", "2025-03-25", "6p-8p", ""),
  ev("Karaoke Night at the Cabin", "The Cabin", "Eagle River", "2025-03-25", "7p-10p", ""),
  ev("Stand Up Comedy Open Mic", "Pakalolo Supply Co.", "Eagle River", "2025-03-25", "7p-9p", "", "comedy"),
  ev("Lizzie No & Kevin Worrell", "Nonna’s Osteria", "Eagle River", "2025-03-25", "7p-9p", ""),
  ev("Jazz Jam Tuesday", "The Crystal Saloon", "Eagle River", "2025-03-25", "8p-11p", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2025-03-25", "8p-11p", ""),
  ev("Open Mic Night", "Four Corner’s Lounge", "Eagle River", "2025-03-25", "8p-12a", ""),
  ev("Open Jam Night", "Yukon Bar", "Eagle River", "2025-03-25", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday March 26th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2025-03-26", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2025-03-26", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-03-26", "10p-2a", ""),
  ev("Live Music with Rick Brooks", "Orso", "Anchorage", "2025-03-26", "6p-8p", ""),
  ev("Board Night w/ DJ Covy", "Humpy’s", "Anchorage", "2025-03-26", "6p-9p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2025-03-26", "7p-10p", ""),
  ev("Line Dance Wednesdays", "Pink Cadillac", "Anchorage", "2025-03-26", "7p-12a", "", "dance"),
  ev("Country Night", "Koot’s", "Anchorage", "2025-03-26", "8p-12a", ""),
  ev("Open Mic", "Lil Babes Cocktail Lounge", "Anchorage", "2025-03-26", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2025-03-26", "8p-2a", ""),
  ev("All Vinyl Lunch Time with DJ Spencer Lee", "K Street Market", "Anchorage", "2025-03-26", "9a-1p", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2025-03-26", "9p-12a", ""),

  // ═══ EAGLE RIVER — Wednesday March 26th ═══
  ev("Open Mike w/ Ben Sayers", "Main Street Tap & Grill", "Eagle River", "2025-03-26", "6p-9p", ""),
  ev("Open Mic", "Schwabenhof", "Eagle River", "2025-03-26", "7:30p-11p", ""),
  ev("Open Mic Night at the Cabin", "The Cabin", "Eagle River", "2025-03-26", "7p-10p", ""),
  ev("Unit Souzou", "Mariner Theatre", "Eagle River", "2025-03-26", "7p-9p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2025-03-26", "8p-11p", ""),
  ev("Open Mic Wednesday", "The Crystal Saloon", "Eagle River", "2025-03-26", "8p-11p", ""),
  ev("Open Mic Night", "Fairview Inn", "Eagle River", "2025-03-26", "8p-1a", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2025-03-26", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2025-03-26", "9p-2a", ""),

  // ═══ EAGLE RIVER — Saturday May 10th ═══
  ev("Next Step Dance: Second Star to the Right", "Gerald C. Wilson Auditorium", "Eagle River", "2025-05-10", "6-7p", "", "dance"),

  // ═══ ANCHORAGE — Sunday May 11th ═══
  ev("Mother’s Day at the Garden w/ Live Music", "Alaska Botanical Garden", "Anchorage", "2025-05-11", "10a-4p", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-05-11", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2025-05-11", "10p-2a", ""),
  ev("Brunch Music w/ The Work Shoes", "Writer’s Block Bookstore & Café", "Anchorage", "2025-05-11", "12p-2p", ""),
  ev("Rubber Ptarmigan: Mama Bird Brunch Comedy", "Zip Kombucha", "Anchorage", "2025-05-11", "12p-3p", "", "comedy"),
  ev("907 Jazz Jam", "Organic Oasis", "Anchorage", "2025-05-11", "3:30p-6p", ""),
  ev("Dial M for Murder", "Cyrano’s Theatre Company", "Anchorage", "2025-05-11", "3p-4:45p", ""),
  ev("A Wrinkle In Time", "APU Grant Hall", "Anchorage", "2025-05-11", "3p-6p", ""),
  ev("Open Mic & Jam", "VFW Post 1685", "Anchorage", "2025-05-11", "4:30p-8:30p", ""),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2025-05-11", "6p-10p", ""),
  ev("Traditional Irish Music w/ Jim Kerr & Friends", "Writer’s Block Bookstore & Café", "Anchorage", "2025-05-11", "6p-8p", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2025-05-11", "6p-9p", ""),
  ev("Live Music w/ Dawson Gent", "Humpy’s", "Anchorage", "2025-05-11", "7:30p-11:30p", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2025-05-11", "7p-11p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2025-05-11", "8:30p-10p", "", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2025-05-11", "8:30p-1a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2025-05-11", "9p-12a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2025-05-11", "9p-2a", ""),

  // ═══ EAGLE RIVER — Sunday May 11th ═══
  ev("Mother's Day Brunch with Kat Moore", "Creekbend Café", "Eagle River", "2025-05-11", "10a-12p", "", "community"),
  ev("3rd Annual One Health Fest w/ Live Music", "Palmer Train Depot", "Eagle River", "2025-05-11", "11a-3p", "", "festival"),
  ev("5th Annual Motherbird Fair", "Land’s End Resort", "Eagle River", "2025-05-11", "12p-6p", "", "festival"),
  ev("Argentine Tango Lesson & Open Dance", "Aurora Mediterranean Restaurant", "Eagle River", "2025-05-11", "1p-3p", "", "dance"),
  ev("Sunday Serenade w/ Martha Masters", "UAS Egan Library", "Eagle River", "2025-05-11", "2p-4p", ""),
  ev("JDT’s Spring Showcase", "Juneau Douglas High School", "Eagle River", "2025-05-11", "2p-4p", ""),
  ev("Mother’s Day Blues Dance Workshop", "The Alaska Club", "Eagle River", "2025-05-11", "2p-5p", "", "dance"),
  ev("Mother's Day Concert", "Sheldon Community Arts Hangar", "Eagle River", "2025-05-11", "4p-6p", ""),
  ev("Open Mic Night", "Everett’s", "Eagle River", "2025-05-11", "6p-10p", ""),
  ev("Open Mic Night", "The Creek Street Cabaret", "Eagle River", "2025-05-11", "6p-9p", ""),
  ev("Blackwater Railroad Company", "The Anchor", "Eagle River", "2025-05-11", "7p-10p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2025-05-11", "9p-12a", ""),

  // ═══ EAGLE RIVER — Monday May 12th ═══
  ev("Song Circle w/ Friends of Mike Morgan", "The Goods", "Eagle River", "2025-05-12", "5p-7p", ""),
  ev("A Felicidade Dinner Jazz", "The Crystal Saloon", "Eagle River", "2025-05-12", "6p-8p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2025-05-12", "9p-12a", ""),

  // ═══ ANCHORAGE — Tuesday May 13th ═══
  ev("Killoran Productions Spring Show: The Final Curtain Call", "Williwaw Social", "Anchorage", "2025-05-13", "10p-1a", ""),
  ev("Boombox Bingo", "Broken Blender", "Anchorage", "2025-05-13", "6:30p-8:30", ""),
  ev("International Packraft Film Festival", "Bear Tooth Theatrepub", "Anchorage", "2025-05-13", "6p-8p", "", "festival"),
  ev("Live Music with Witty Youngman", "Orso", "Anchorage", "2025-05-13", "6p-8p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2025-05-13", "6p-8p", ""),
  ev("AJW Community Jazz Jam Session", "K Street Market", "Anchorage", "2025-05-13", "6p-9p", ""),
  ev("Auditions for “The Addams Family”", "Anchorage Community Theatre", "Anchorage", "2025-05-13", "7p-10p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2025-05-13", "7p-11p", ""),
  ev("Buckaroos Night Fundraiser for Mrs. Alaska", "Pink Cadillac", "Anchorage", "2025-05-13", "7p-12a", ""),
  ev("The Monday Mic w/ Boobs", "Koot’s", "Anchorage", "2025-05-13", "9p-12a", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2025-05-13", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday May 13th ═══
  ev("Karaoke Night at the Cabin", "The Cabin", "Eagle River", "2025-05-13", "7p-10p", ""),
  ev("(Almost) Summer Story Slam", "The Creek Street Cabaret", "Eagle River", "2025-05-13", "7p-10p", "", "community"),
  ev("Live Music Tyson Tuesdays!", "Seward Alehouse", "Eagle River", "2025-05-13", "8p-10p", ""),
  ev("Jazz Jam Tuesday", "The Crystal Saloon", "Eagle River", "2025-05-13", "8p-11p", ""),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2025-05-13", "8p-11p", ""),
  ev("Live DJ", "Four Corner’s Lounge", "Eagle River", "2025-05-13", "8p-12a", ""),
  ev("Open Jam Night", "Yukon Bar", "Eagle River", "2025-05-13", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday May 14th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2025-05-14", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2025-05-14", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-05-14", "10p-2a", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2025-05-14", "7p-10p", ""),
  ev("Auditions for “The Addams Family”", "Anchorage Community Theatre", "Anchorage", "2025-05-14", "7p-10p", ""),
  ev("Line Dance Wednesdays", "Pink Cadillac", "Anchorage", "2025-05-14", "7p-12a", "", "dance"),
  ev("Country Night", "Koot’s", "Anchorage", "2025-05-14", "8p-12a", ""),
  ev("Open Mic", "Lil Babes Cocktail Lounge", "Anchorage", "2025-05-14", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2025-05-14", "8p-2a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2025-05-14", "9p-12a", ""),
  ev("Karaoke Wednesdays w/ Kellie B", "Van’s Dive Bar", "Anchorage", "2025-05-14", "9p-12a", ""),

  // ═══ EAGLE RIVER — Wednesday May 14th ═══
  ev("Island Music w/ Opus 76 Quartet", "Ketchikan Public Library", "Eagle River", "2025-05-14", "4:30p-5:30p", ""),
  ev("Strings at the Shrine", "Shrine of St. Therese", "Eagle River", "2025-05-14", "5:30p-7p & 7:30p-9p", ""),
  ev("Clark Whitney", "The Goods", "Eagle River", "2025-05-14", "5p-7p", ""),
  ev("Open Mic Night", "Main Street Tap & Grill", "Eagle River", "2025-05-14", "6p-9p", ""),
  ev("West Coast Swing Wednesday", "Four Corner’s Lounge", "Eagle River", "2025-05-14", "7:30p-10p", "", "dance"),
  ev("Open Mic", "Schwabenhof", "Eagle River", "2025-05-14", "7:30p-11p", ""),
  ev("Open Mic Night at the Cabin", "The Cabin", "Eagle River", "2025-05-14", "7p-10p", ""),
  ev("Ballroom Dance Club: Dance Practice", "Pioneer Park Dance Hall", "Eagle River", "2025-05-14", "7p-9p", "", "dance"),
  ev("Paddling Film Festival", "The Porcupine Theater", "Eagle River", "2025-05-14", "7p-9p", "", "festival"),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2025-05-14", "8p-11p", ""),
  ev("Open Mic Wednesday", "The Crystal Saloon", "Eagle River", "2025-05-14", "8p-11p", ""),
  ev("Open Mic Night", "Fairview Inn", "Eagle River", "2025-05-14", "8p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2025-05-14", "9p-2a", ""),

  // ═══ ESTER — Thursday June 19th ═══
  ev("Ukulele Russ & His One-Man Frontier Band", "Chair 5", "Ester", "2025-06-19", "10p-1a", ""),
  ev("Karaoke Nights at the Big I", "The International Hotel & Bar", "Ester", "2025-06-19", "10p-2a", ""),
  ev("Celebration of Life for Dennis Rittenberry", "Hightower Pub", "Ester", "2025-06-19", "5p-9p", ""),
  ev("Caitlin Warbelow", "Malemute Saloon", "Ester", "2025-06-19", "7:30p-11:30p", ""),
  ev("Open Mic Night at the Cabin", "The Cabin", "Ester", "2025-06-19", "8p-11p", ""),
  ev("Karaoke on the outside stage w/ Cherie Bowman", "The Cabin", "Ester", "2025-06-19", "8p-11p", ""),

  // ═══ HAINES — Thursday June 19th ═══
  ev("Jenny Baker Matinee", "Kharacter’s Alaskan Bar", "Haines", "2025-06-19", "5p-7p", ""),
  ev("Treasure Island", "Pier One Theatre, Inc.", "Haines", "2025-06-19", "7p-9p", ""),

  // ═══ JUNEAU — Thursday June 19th ═══
  ev("Nina Edwards", "Alaskan Hotel and Bar", "Juneau", "2025-06-19", "4p-6p", ""),
  ev("Busking Night with Local Artists", "Vintage Food Truck Park", "Juneau", "2025-06-19", "5p-8p", ""),
  ev("Bryan Hopkins of Elvis Monroe", "Main Street Tap & Grill", "Juneau", "2025-06-19", "7p-10p", ""),
  ev("Natalie Cressman and Ian Faquini", "Palmer Alehouse", "Juneau", "2025-06-19", "7p-10p", ""),
  ev("Open Jam/Mic Night w/ Host Jesse James", "Four Corner’s Lounge", "Juneau", "2025-06-19", "7p-11p", ""),
  ev("Karaoke Thursdays", "The Crystal Saloon", "Juneau", "2025-06-19", "7p-12a", ""),
  ev("Open Mic", "Alaskan Hotel and Bar", "Juneau", "2025-06-19", "8p-11p", ""),
  ev("Karaoke", "Klondike Mike’s and Garcia’s Grill", "Juneau", "2025-06-19", "8p-1a", ""),
  ev("Open Mic Night", "Golden Saloon", "Juneau", "2025-06-19", "9:30p-12a", ""),

  // ═══ SEWARD — Thursday June 19th ═══
  ev("Azad Safavi + Them Badgers", "The Goods", "Seward", "2025-06-19", "6p-8p", ""),
  ev("Deadphish Orchestra", "Mountain High Pizza Pie", "Seward", "2025-06-19", "7p-10p", ""),
  ev("Thursday Night Dance Party w/ DJ WaitWat", "Yukon Bar", "Seward", "2025-06-19", "9p-2a", "", "dance"),

  // ═══ ANCHORAGE — Friday June 20th ═══
  ev("Jacques Longpre", "Angry Salmon", "Anchorage", "2025-06-20", "6p-9p", ""),

  // ═══ ESTER — Friday June 20th ═══
  ev("Raisin' Holy Hell", "Malemute Saloon", "Ester", "2025-06-20", "7:30p-11:30p", ""),
  ev("Renegade HiFi w/ Dig Sista", "The Boatel", "Ester", "2025-06-20", "9p-12a", ""),
  ev("For the Millennials", "The Cabin", "Ester", "2025-06-20", "9p-12a", ""),
  ev("Gorilla Zoe Live", "The International Hotel & Bar", "Ester", "2025-06-20", "9p-12a", ""),

  // ═══ HAINES — Friday June 20th ═══
  ev("DJ Darkstar", "Kharacter’s Alaskan Bar", "Haines", "2025-06-20", "10p-2a", ""),
  ev("Spindrift", "Dirty Skillet", "Haines", "2025-06-20", "6p-10p", ""),
  ev("The Pudgies, Discopians and D.S.B", "The Porcupine Theater", "Haines", "2025-06-20", "7p-10p", ""),
  ev("Deadphish Orchestra", "Creekbend Company", "Haines", "2025-06-20", "7p-11p", ""),
  ev("Arts by Air: Chris Needham", "Bunnell Street Arts Center", "Haines", "2025-06-20", "7p-8p", ""),
  ev("Treasure Island", "Pier One Theatre, Inc.", "Haines", "2025-06-20", "7p-9p", ""),

  // ═══ JUNEAU — Friday June 20th ═══
  ev("Hot Mess", "Klondike Mike’s and Garcia’s Grill", "Juneau", "2025-06-20", "10p-2a", ""),
  ev("Buoy Daze", "Ketchikan Boat Dock", "Juneau", "2025-06-20", "11a-12p", ""),
  ev("Friday Flings Market & Live Music", "Downtown", "Juneau", "2025-06-20", "11a-6p", ""),
  ev("Marc Brown & The Blues Crew", "Deckhand Dave’s", "Juneau", "2025-06-20", "7p-10p", ""),
  ev("H3 Hawaii Reggae", "Palmer Alehouse", "Juneau", "2025-06-20", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15", "Juneau", "2025-06-20", "7p-11p", ""),
  ev("Raised by Elephants feat Harp Daddy", "Fishhook Bar & Grill", "Juneau", "2025-06-20", "7p-11p", ""),
  ev("Juneau Piano Series w/ Alexander Tutunov", "Juneau Arts & Humanities", "Juneau", "2025-06-20", "7p-8:30p", ""),
  ev("Andiamo Dance Company: Light", "Kayhi Auditorium", "Juneau", "2025-06-20", "7p-8:30p", "", "dance"),
  ev("Seth Malone & Eric Doucet", "Skeet’s Dive Bar", "Juneau", "2025-06-20", "8:30p-12a", ""),
  ev("Ivan Denis", "The Bayou", "Juneau", "2025-06-20", "8p-1a", ""),
  ev("Indigik’were Social Club", "The Crystal Saloon", "Juneau", "2025-06-20", "9p-11:30p", ""),
  ev("Pride Pub Crawl Afterparty", "Alaskan Hotel and Bar", "Juneau", "2025-06-20", "9p-2a", ""),

  // ═══ SEWARD — Friday June 20th ═══
  ev("Live At Five: King Saison", "Village Park", "Seward", "2025-06-20", "5p-7p", ""),
  ev("Mandy Madson", "The Goods", "Seward", "2025-06-20", "6p-9p", ""),
  ev("Free Music Fridays: Lucas McCain", "Seward Alehouse", "Seward", "2025-06-20", "8p-10p", ""),
  ev("Free Concert w/ John Morgan & Kendell Marvel", "Talkeetna Inn", "Seward", "2025-06-20", "8p-10p", ""),
  ev("King Saison", "Fairview Inn", "Seward", "2025-06-20", "8p-1a", ""),
  ev("Ukulele Russ and His One-Man Frontier Band", "Yukon Bar", "Seward", "2025-06-20", "9p-12a", ""),
  ev("Kelly Henson & Bill Mabrey", "The CATCH Restaurant & Bar", "Seward", "2025-06-20", "9p-12a", ""),

  // ═══ WASILLA — Friday June 20th ═══
  ev("Schaefer Mueller", "Bearpaw River Brewing Company", "Wasilla", "2025-06-20", "6p-9p", ""),
  ev("Karaoke Night", "Schwabenhof", "Wasilla", "2025-06-20", "8p-11p", ""),

  // ═══ ANCHORAGE — Saturday June 21st ═══
  ev("REI", "Angry Salmon", "Anchorage", "2025-06-21", "6p-9p", ""),

  // ═══ COOPER LANDING — Saturday June 21st ═══
  ev("Karaoke Night", "Trophy Lounge", "Cooper Landing", "2025-06-21", "8:30p-11p", ""),

  // ═══ ESTER — Saturday June 21st ═══
  ev("Golden Heart Performing Arts Circus Shows", "Springhill Suites", "Ester", "2025-06-21", "12:30p-8p", ""),
  ev("43rd Annual Midnight Sun Festival", "Downtown Fairbanks", "Ester", "2025-06-21", "12p-12a", "", "festival"),
  ev("Pups on the Patio: Solstice Animal Adoption", "Humble Roots Beer Project", "Ester", "2025-06-21", "12p-4p", ""),
  ev("Summer Solstice Celebration", "Gather", "Ester", "2025-06-21", "12p-8p", ""),
  ev("Arctic Entry", "The International Hotel & Bar", "Ester", "2025-06-21", "6p-10p", ""),
  ev("Benefield Blues Band", "Malemute Saloon", "Ester", "2025-06-21", "7:30p-11:30p", ""),
  ev("Dawn McClain Live", "The Cabin", "Ester", "2025-06-21", "8p-11p", ""),
  ev("Midnight Sun Festival w/ SHAGG", "The International Hotel & Bar", "Ester", "2025-06-21", "9:30p-1a", "", "festival"),
  ev("Triple Black Diamonds", "The Boatel", "Ester", "2025-06-21", "9p-12a", ""),

  // ═══ HAINES — Saturday June 21st ═══
  ev("Lucas McCain", "Kharacter’s Alaskan Bar", "Haines", "2025-06-21", "10p-2a", ""),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Haines", "2025-06-21", "6p-8p", ""),
  ev("Solstice Bash w/ Xavilai, Multikat, & Jay Wail", "Alibi Bar & Café", "Haines", "2025-06-21", "7:30p-12:15a", ""),
  ev("Deadphish Orchestra", "Creekbend Company", "Haines", "2025-06-21", "7p-11p", ""),
  ev("Treasure Island", "Pier One Theatre, Inc.", "Haines", "2025-06-21", "7p-9p", ""),
  ev("Karaoke Saturdays", "Pioneer Bar", "Haines", "2025-06-21", "9p-12a", ""),
  ev("Goldpeak", "Justin Cole’s Down East Saloon", "Haines", "2025-06-21", "9p-1a", ""),

  // ═══ JUNEAU — Saturday June 21st ═══
  ev("Jerry Wessling", "Klondike Mike’s and Garcia’s Grill", "Juneau", "2025-06-21", "10p-2a", ""),
  ev("Pride Drag Brunch", "TK Maguire’s", "Juneau", "2025-06-21", "12p-2p", "", "community"),
  ev("KRBD Summer Solstice Music Festival", "The Creek Street Cabaret", "Juneau", "2025-06-21", "12p-9p", "", "festival"),
  ev("Alicia Viani Duo", "Hatcher Pass Lodge", "Juneau", "2025-06-21", "4p-7p", ""),
  ev("Lucas James McCain", "The Crystal Saloon", "Juneau", "2025-06-21", "6p-10p", ""),
  ev("Marc Brown & The Blues Crew", "Deckhand Dave’s", "Juneau", "2025-06-21", "7p-10p", ""),
  ev("John Roberts Y Pan Blanco", "Golden Saloon", "Juneau", "2025-06-21", "7p-10p", ""),
  ev("Dance Lessons with Shufflin’ Country Style & Karaoke After", "American Legion Post 15", "Juneau", "2025-06-21", "7p-10p", "", "dance"),
  ev("Black Barrel & The Bad Men", "Palmer Alehouse", "Juneau", "2025-06-21", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15", "Juneau", "2025-06-21", "7p-11p", ""),
  ev("Live Music w/ Drew Sablon, Ronnie Wolf, Stephanie & Eric Quinth", "Tony’s Bar", "Juneau", "2025-06-21", "7p-12a", ""),
  ev("Middle Names ft. Magical America, Fear Boner, & DJ Donny Bru", "The Crystal Saloon", "Juneau", "2025-06-21", "8p-10p", ""),
  ev("Queer Prom", "Ted Ferry Civic Center", "Juneau", "2025-06-21", "8p-12a", ""),
  ev("Music w/ the Ridgeway Rounders", "The Bayou", "Juneau", "2025-06-21", "8p-1a", ""),

  // ═══ SEWARD — Saturday June 21st ═══
  ev("Soldotna Pride in the Park", "Soldotna Creek Park", "Seward", "2025-06-21", "1p-5p", ""),
  ev("Solstice Comedy Showcase", "Naptowne Brewing Company", "Seward", "2025-06-21", "8p-10p", "", "comedy"),
  ev("Glacier Blues Band", "Fairview Inn", "Seward", "2025-06-21", "8p-1a", ""),
  ev("Ukulele Russ and His One-Man Frontier Band", "Yukon Bar", "Seward", "2025-06-21", "9p-12a", ""),

  // ═══ WASILLA — Saturday June 21st ═══
  ev("Music in the Park: The Harp Twins & H3 Hawaii Reggae Band", "Wonderland Park", "Wasilla", "2025-06-21", "3p-9p", ""),
  ev("Summer Solstice Concert w/ Madame Mayhem, Bryan Hopkins, & Wayward Shot", "Everett’s", "Wasilla", "2025-06-21", "6p-10p", ""),

  // ═══ ANCHORAGE — Sunday June 22nd ═══
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2025-06-22", "6p-9p", ""),

  // ═══ ESTER — Sunday June 22nd ═══
  ev("Taste of Tango: Lessons & Dance", "Aurora Mediterranean Restaurant", "Ester", "2025-06-22", "1p-3p", "", "dance"),
  ev("Sunday Deck Jam", "Malemute Saloon", "Ester", "2025-06-22", "2p-5p", ""),
  ev("Never Miss a Sunday Show: Deadphish Orchestra", "Raw Market", "Ester", "2025-06-22", "5p-8p", ""),
  ev("Karaoke", "Chair 5", "Ester", "2025-06-22", "8p-12a", ""),

  // ═══ HAINES — Sunday June 22nd ═══
  ev("Summer Solstice Fair", "Kenai Peninsula College", "Haines", "2025-06-22", "10a-10p", "", "festival"),
  ev("Natalie Cressman & Ian Faquini", "Creekbend Company", "Haines", "2025-06-22", "10a-3p", ""),
  ev("Johnny B’s Rhythm of the North", "Pier One Theatre, Inc.", "Haines", "2025-06-22", "7:30p-8:30p", ""),

  // ═══ JUNEAU — Sunday June 22nd ═══
  ev("Open Mic Night", "The Creek Street Cabaret", "Juneau", "2025-06-22", "6p-9p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Juneau", "2025-06-22", "9p-12a", ""),

  // ═══ SEWARD — Sunday June 22nd ═══
  ev("Alicia Viani Duo Live!", "Yukon Bar", "Seward", "2025-06-22", "7:30p-12a", ""),

  // ═══ HAINES — Monday June 23rd ═══
  ev("Open Mic Night w/ Jim Maloney & Orion Donicht", "Alice’s Champagne Palace", "Haines", "2025-06-23", "7p-10p", ""),

  // ═══ JUNEAU — Monday June 23rd ═══
  ev("Karaoke", "Four Corner’s Lounge", "Juneau", "2025-06-23", "9p-12a", ""),

  // ═══ SEWARD — Monday June 23rd ═══
  ev("Song Circle w/ Friends of Mike Morgan", "The Goods", "Seward", "2025-06-23", "5p-7p", ""),
  ev("Karaoke Night", "Fairview Inn", "Seward", "2025-06-23", "8p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Seward", "2025-06-23", "9p-2a", ""),

  // ═══ ANCHORAGE — Tuesday June 24th ═══
  ev("Lunch on the Lawn w/ music by Sally Quinto", "Anchorage Museum", "Anchorage", "2025-06-24", "11:30a-1:30p", ""),
  ev("Concerts in the Quad", "UAA Lucy Cuddy Hall", "Anchorage", "2025-06-24", "11:30p-1p", ""),
  ev("Senior Poetry", "Mountain View Public Library", "Anchorage", "2025-06-24", "2p-3:30p", ""),
  ev("Garden Grooves: Christina Napoleon", "49th State Brewery", "Anchorage", "2025-06-24", "5p-7p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2025-06-24", "6p-8p", ""),
  ev("Tuesday Jazz Jam", "The Blue Note AK", "Anchorage", "2025-06-24", "7p-10p", ""),
  ev("All Ages Buckarooos Night", "Pink Cadillac", "Anchorage", "2025-06-24", "7p-11p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2025-06-24", "7p-11p", ""),
  ev("Taco & Tune Tuesday w/ DJ Joe Brady", "Williwaw Social", "Anchorage", "2025-06-24", "7p-9p", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2025-06-24", "9p-12a", ""),

  // ═══ ESTER — Tuesday June 24th ═══
  ev("Karaoke Night at the Cabin", "The Cabin", "Ester", "2025-06-24", "7p-10p", ""),

  // ═══ JUNEAU — Tuesday June 24th ═══
  ev("Tuesday Music w/ Cherie Bowman", "Alaskan Hotel and Bar", "Juneau", "2025-06-24", "3p-5p", ""),
  ev("West Coast Sing Wednesday", "Four Corner’s Lounge", "Juneau", "2025-06-24", "7:30p-9:30p", ""),
  ev("Jazz Jam Tuesday", "The Crystal Saloon", "Juneau", "2025-06-24", "8p-11p", ""),
  ev("Live DJ, Karaoke, and/or Live Music", "Four Corner’s Lounge", "Juneau", "2025-06-24", "8p-11p", ""),

  // ═══ SEWARD — Tuesday June 24th ═══
  ev("Live Music Tyson Tuesdays!", "Seward Alehouse", "Seward", "2025-06-24", "8p-10p", ""),
  ev("Open Mic Night w/ Braden Rollins", "Yukon Bar", "Seward", "2025-06-24", "9p-2a", ""),

  // ═══ WASILLA — Tuesday June 24th ═══
  ev("Taco Tuesday with Ken Peltier Band", "Chepo’s Mexican Restaurant", "Wasilla", "2025-06-24", "6p-9p", ""),
  ev("Karaoke Night", "Schwabenhof", "Wasilla", "2025-06-24", "8p-11p", ""),

  // ═══ ANCHORAGE — Wednesday June 25th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2025-06-25", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2025-06-25", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-06-25", "10p-2a", ""),
  ev("Garden Grooves: Joe Schumacher", "49th State Brewery", "Anchorage", "2025-06-25", "5p-7p", ""),
  ev("International Folk Dancing", "Anchorage Social Dance Club", "Anchorage", "2025-06-25", "6:30p-8p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2025-06-25", "7p-10p", ""),
  ev("Line Dance Wednesdays", "Pink Cadillac", "Anchorage", "2025-06-25", "7p-12a", "", "dance"),
  ev("Live Music with Nothin' But Karma Trio", "Humpy’s", "Anchorage", "2025-06-25", "8:30p-12a", ""),
  ev("Country Night Rhinestone Cowboy: DJ Lefty's Birthday Bash", "Koot’s", "Anchorage", "2025-06-25", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2025-06-25", "8p-2a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2025-06-25", "9p-12a", ""),
  ev("Karaoke Wednesdays w/ Kellie B", "Van’s Dive Bar", "Anchorage", "2025-06-25", "9p-12a", ""),

  // ═══ COOPER LANDING — Wednesday June 25th ═══
  ev("Ukulele Russ & His One-Man Frontier Band", "Gwin’s Lodge", "Cooper Landing", "2025-06-25", "7p-10p", ""),

  // ═══ ESTER — Wednesday June 25th ═══
  ev("Local Talent Showcase", "The Cabin", "Ester", "2025-06-25", "7p-10p", ""),
  ev("Harp Twins & Volfgang Twins", "The Boatel", "Ester", "2025-06-25", "9p-12a", ""),

  // ═══ JUNEAU — Wednesday June 25th ═══
  ev("Live Music w/ Lisa Denny", "Alaskan Hotel and Bar", "Juneau", "2025-06-25", "3p-5p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Juneau", "2025-06-25", "8p-11p", ""),
  ev("Open Mic Wednesday", "The Crystal Saloon", "Juneau", "2025-06-25", "8p-11p", ""),

  // ═══ SEWARD — Wednesday June 25th ═══
  ev("Ms. Anna's FInal Story Time", "Skagway Public Library", "Seward", "2025-06-25", "11a-1p", "", "community"),
  ev("HuDost & Acoustic Eidolon", "Soldotna Creek Park", "Seward", "2025-06-25", "6p-9p", ""),
  ev("King Saison Summer Tour", "Denali Brewpub", "Seward", "2025-06-25", "6p-9p", ""),
  ev("Open Mic Night", "Fairview Inn", "Seward", "2025-06-25", "8p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Seward", "2025-06-25", "9p-2a", ""),

  // ═══ WASILLA — Wednesday June 25th ═══
  ev("Campfire Sessions w/ Jerry Wessling", "Lulu’s Tents & Events", "Wasilla", "2025-06-25", "6p-9p", ""),
  ev("Open Mic", "Schwabenhof", "Wasilla", "2025-06-25", "7:30p-11p", ""),

  // ═══ SEWARD — Thursday June 26th ═══
  ev("Open Mic Night w/ Kenai Collaborative", "The Goods", "Seward", "2025-06-26", "6p-8p", ""),

  // ═══ SEWARD — Thursday July 3rd ═══
  ev("Bois Rouge Cajun Band Live", "Yukon Bar", "Seward", "2025-07-03", "7:30p-10p", ""),

  // ═══ ANCHORAGE — Sunday July 6th ═══
  ev("Sunday Fresh Market & More w/ Live Music", "O’Malley Center", "Anchorage", "2025-07-06", "10a-2p", ""),
  ev("Saturday Cinders", "Creekbend Company", "Anchorage", "2025-07-06", "10a-3p", ""),
  ev("Good Company & The Jephries", "Hightower Pub", "Anchorage", "2025-07-06", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-07-06", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2025-07-06", "10p-2a", ""),
  ev("Brunch Music w/ Ashton Barabree", "Writer’s Block Bookstore & Café", "Anchorage", "2025-07-06", "12p-2p", ""),
  ev("Taste of Tango: Lessons & Dance", "Aurora Mediterranean Restaurant", "Anchorage", "2025-07-06", "1p-3p", "", "dance"),
  ev("Sunday Deck Jam", "Malemute Saloon", "Anchorage", "2025-07-06", "2p-5p", ""),
  ev("Open Mic & Jam", "VFW Post 1685", "Anchorage", "2025-07-06", "4:30p-8:30p", ""),
  ev("Country Dance Nights", "Anchorage Social Dance Club", "Anchorage", "2025-07-06", "6:30p-10p", "", "dance"),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2025-07-06", "6p-10p", ""),
  ev("Tradiditional Irish Music", "Writer’s Block Bookstore & Café", "Anchorage", "2025-07-06", "6p-8p", ""),
  ev("The Leafy Greens Band", "Angry Salmon", "Anchorage", "2025-07-06", "6p-9p", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2025-07-06", "6p-9p", ""),
  ev("Open Mic Night", "The Creek Street Cabaret", "Anchorage", "2025-07-06", "6p-9p", ""),
  ev("Pam Santoro", "Humpy’s", "Anchorage", "2025-07-06", "7:30p-11p", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2025-07-06", "7p-11p", ""),
  ev("The Golden Heart Revue", "The Palace Theater", "Anchorage", "2025-07-06", "8:15p-9:15p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2025-07-06", "8:30p-10p", "", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2025-07-06", "8:30p-1a", ""),
  ev("Karaoke", "Chair 5", "Anchorage", "2025-07-06", "8p-12a", ""),
  ev("Rocco & Friends", "Fairview Inn", "Anchorage", "2025-07-06", "8p-1a", ""),
  ev("DJ Mraj Nite's House Party", "The International Hotel & Bar", "Anchorage", "2025-07-06", "9:30p-12a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2025-07-06", "9p-12a", ""),
  ev("Karaoke Saturdays", "Pioneer Bar", "Anchorage", "2025-07-06", "9p-12a", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Anchorage", "2025-07-06", "9p-12a", ""),
  ev("Ron Marsh", "Yukon Bar", "Anchorage", "2025-07-06", "9p-12a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2025-07-06", "9p-2a", ""),

  // ═══ ANCHORAGE — Monday July 7th ═══
  ev("Cirque Date Night", "Grace Ridge Brewing", "Anchorage", "2025-07-07", "6:30p-7:30p", ""),
  ev("Boombox Bingo", "Broken Blender", "Anchorage", "2025-07-07", "6:30p-8:30", ""),
  ev("Weekly Jazz Jam", "Fire Island Bakery @ K Street Market", "Anchorage", "2025-07-07", "6:30p-9:30p", ""),
  ev("Open Mic Night w/ Jim Maloney & Orion Donicht", "Alice’s Champagne Palace", "Anchorage", "2025-07-07", "7p-10p", ""),
  ev("Learn to Square Dance", "Anchorage Social Dance Club", "Anchorage", "2025-07-07", "7p-9p", "", "dance"),
  ev("90's Dance Party with ARCHIEologic", "The Creek Street Cabaret", "Anchorage", "2025-07-07", "7p-9p", "", "dance"),
  ev("The Golden Heart Revue", "The Palace Theater", "Anchorage", "2025-07-07", "8:15p-9:15p", ""),
  ev("Open Mic Night", "The Blue Fox", "Anchorage", "2025-07-07", "8p-12a", ""),
  ev("Karaoke Night", "Fairview Inn", "Anchorage", "2025-07-07", "8p-1a", ""),
  ev("The Monday Mic w/ Boobs", "Koot’s", "Anchorage", "2025-07-07", "9p-12a", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Anchorage", "2025-07-07", "9p-12a", ""),
  ev("Karaoke", "Yukon Bar", "Anchorage", "2025-07-07", "9p-2a", ""),

  // ═══ ANCHORAGE — Tuesday July 8th ═══
  ev("Storytime at Ken’s", "Ken’s Garden Center", "Anchorage", "2025-07-08", "10a-11a", "", "community"),
  ev("Lunch on the Lawn: Dog Days of Summer", "Anchorage Museum", "Anchorage", "2025-07-08", "11:30a-1:30p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2025-07-08", "6p-8p", ""),
  ev("Tuesday Jazz Jam", "Billiard Palace", "Anchorage", "2025-07-08", "7p-10p", ""),
  ev("Karaoke Night at the Cabin", "The Cabin", "Anchorage", "2025-07-08", "7p-10p", ""),
  ev("Summer Slam: “Reverse!”", "Alaska Legends Cider & Wine", "Anchorage", "2025-07-08", "7p-10p", ""),
  ev("All Ages Buckarooos Night", "Pink Cadillac", "Anchorage", "2025-07-08", "7p-11p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2025-07-08", "7p-11p", ""),
  ev("Taco & Tune Tuesday w/ DJ Joe Brady", "Williwaw Social", "Anchorage", "2025-07-08", "7p-9p", ""),
  ev("The Golden Heart Revue", "The Palace Theater", "Anchorage", "2025-07-08", "8:15p-9:15p", ""),
  ev("Live Music Tyson Tuesdays!", "Seward Alehouse", "Anchorage", "2025-07-08", "8p-10p", ""),
  ev("Jazz Jam Tuesday", "The Crystal Saloon", "Anchorage", "2025-07-08", "8p-11p", ""),
  ev("Industry Night: Live DJ, Karaoke, and/or Live Music", "Four Corner’s Lounge", "Anchorage", "2025-07-08", "8p-11p", ""),
  ev("Karaoke Night", "Schwabenhof", "Anchorage", "2025-07-08", "8p-11p", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2025-07-08", "9p-12a", ""),

  // ═══ ANCHORAGE — Wednesday July 9th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2025-07-09", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2025-07-09", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-07-09", "10p-2a", ""),
  ev("Summer Storytime: \"Yukon Dan's Animal Band\"", "Alaska Botanical Garden", "Anchorage", "2025-07-09", "11:30a-12:30p", ""),
  ev("Alaska Flag Day Celebration", "AK Child & Family", "Anchorage", "2025-07-09", "5:30p-8:30p", ""),
  ev("International Folk Dancing", "Anchorage Social Dance Club", "Anchorage", "2025-07-09", "6:30p-8p", ""),
  ev("Jazz with A-Town Sharps", "Organic Oasis", "Anchorage", "2025-07-09", "6p-8p", ""),
  ev("H3 Hawaii Reggae & The River Livers", "Soldotna Creek Park", "Anchorage", "2025-07-09", "6p-9p", ""),
  ev("Open Mic", "Schwabenhof", "Anchorage", "2025-07-09", "7:30p-11p", ""),
  ev("West Coast Sing Wednesday", "Four Corner’s Lounge", "Anchorage", "2025-07-09", "7:30p-9:30p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2025-07-09", "7p-10p", ""),
  ev("Local Talent Showcase", "The Cabin", "Anchorage", "2025-07-09", "7p-10p", ""),
  ev("Line Dance Wednesdays", "Pink Cadillac", "Anchorage", "2025-07-09", "7p-12a", "", "dance"),
  ev("Kuf Knotz & Christine Elise", "Black Bear", "Anchorage", "2025-07-09", "7p-9p", ""),
  ev("Mike Stackhouse Live", "The International Hotel & Bar", "Anchorage", "2025-07-09", "7p-9p", ""),
  ev("The Golden Heart Revue", "The Palace Theater", "Anchorage", "2025-07-09", "8:15p-9:15p", ""),
  ev("Live Music with Schaefer Mueller Duo", "Humpy’s", "Anchorage", "2025-07-09", "8:30p-12a", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Anchorage", "2025-07-09", "8p-11p", ""),
  ev("Open Mic Wednesday", "The Crystal Saloon", "Anchorage", "2025-07-09", "8p-11p", ""),
  ev("Country Night", "Koot’s", "Anchorage", "2025-07-09", "8p-12a", ""),
  ev("Open Mic Night", "Fairview Inn", "Anchorage", "2025-07-09", "8p-1a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2025-07-09", "8p-2a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2025-07-09", "9p-12a", ""),
  ev("Karaoke Wednesdays w/ Kellie B", "Van’s Dive Bar", "Anchorage", "2025-07-09", "9p-12a", ""),
  ev("Open Mic Night w/ Braden Rollins", "Yukon Bar", "Anchorage", "2025-07-09", "9p-2a", ""),
  ev("Karaoke", "Yukon Bar", "Anchorage", "2025-07-09", "9p-2a", ""),

  // ═══ EAGLE RIVER — Wednesday July 30th ═══
  ev("Lisa Denny", "Alaskan Hotel and Bar", "Eagle River", "2025-07-30", "3p-5p", ""),
  ev("Japanese Peace Drummer Takumi Kato", "Ketchikan Public Library", "Eagle River", "2025-07-30", "6p-8p", ""),
  ev("Public Lands Pint Night: Current Dall Sheep Research", "Black Spruce Brewing", "Eagle River", "2025-07-30", "7p-10p", ""),
  ev("Local Talent Showcase", "The Cabin", "Eagle River", "2025-07-30", "7p-10p", ""),
  ev("Mike Stackhouse Live", "The International Hotel & Bar", "Eagle River", "2025-07-30", "7p-9p", ""),
  ev("The Golden Heart Revue", "The Palace Theater", "Eagle River", "2025-07-30", "8:15p-9:15p", ""),
  ev("Glacier Quartet", "The Porcupine Theater", "Eagle River", "2025-07-30", "8p-10p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2025-07-30", "8p-11p", ""),
  ev("Open Mic Wednesday", "The Crystal Saloon", "Eagle River", "2025-07-30", "8p-11p", ""),
  ev("Shakedown Strings", "Alice’s Champagne Palace", "Eagle River", "2025-07-30", "9p-12a", ""),

  // ═══ PALMER — Wednesday July 30th ═══
  ev("Michael Kirkpatrick", "Hatcher Pass Lodge", "Palmer", "2025-07-30", "4p-7p", ""),
  ev("West Coast Sing Wednesday", "Four Corner’s Lounge", "Palmer", "2025-07-30", "7:30p-9:30p", ""),

  // ═══ SEWARD — Wednesday July 30th ═══
  ev("Open Mic", "Schwabenhof", "Seward", "2025-07-30", "7:30p-11p", ""),
  ev("Barry Sless and Stephen Englis", "Mountain High Pizza Pie", "Seward", "2025-07-30", "7p-10p", ""),
  ev("Open Mic", "Fairview Inn", "Seward", "2025-07-30", "8p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Seward", "2025-07-30", "9p-2a", ""),

  // ═══ EAGLE RIVER — Thursday July 31st ═══
  ev("Open Mic Wife Swap", "Pioneer Bar", "Eagle River", "2025-07-31", "10p-1a", ""),
  ev("Karaoke Nights at the Big I", "The International Hotel & Bar", "Eagle River", "2025-07-31", "10p-2a", ""),
  ev("Nina Edwards", "Alaskan Hotel and Bar", "Eagle River", "2025-07-31", "4p-6p", ""),
  ev("Busking Night with Local Artists", "Vintage Food Truck Park", "Eagle River", "2025-07-31", "5p-8p", ""),
  ev("Alaska Wompus Cats", "Malemute Saloon", "Eagle River", "2025-07-31", "7:30p-9:30p", ""),
  ev("CORVUS and Composing in the Wilderness Concert", "Davis Concert Hall", "Eagle River", "2025-07-31", "7p-10p", ""),
  ev("Salmonfest Pre-Party w/ Tim Easton, Blackwater Railroad, Katy Guillen & The Drive, and Free Creatures!", "Creekbend Company", "Eagle River", "2025-07-31", "7p-11p", "", "festival"),
  ev("Michael Kirkpatrick", "Historic Hope & Seaview Bar", "Eagle River", "2025-07-31", "7p-11p", ""),
  ev("The Golden Heart Revue", "The Palace Theater", "Eagle River", "2025-07-31", "8:15p-9:15p", ""),
  ev("Karaoke Thursday", "The Crystal Saloon", "Eagle River", "2025-07-31", "8p-11:30p", ""),
  ev("Open Mic Night at the Cabin", "The Cabin", "Eagle River", "2025-07-31", "8p-11p", ""),
  ev("Line Dancing", "Northern Whimsy Wellness", "Eagle River", "2025-07-31", "8p-11p", ""),
  ev("Open Mic", "Alaskan Hotel and Bar", "Eagle River", "2025-07-31", "8p-11p", ""),
  ev("Open Mic Night", "Golden Saloon", "Eagle River", "2025-07-31", "9:30p-12a", ""),

  // ═══ PALMER — Thursday July 31st ═══
  ev("Barry Sless & Steve Inglis", "Hatcher Pass Lodge", "Palmer", "2025-07-31", "4p-7p", ""),
  ev("High Step Society", "Palmer Alehouse", "Palmer", "2025-07-31", "7p-10p", ""),
  ev("Open Jam/Mic Night w/ Host Jesse James", "Four Corner’s Lounge", "Palmer", "2025-07-31", "7p-11p", ""),
  ev("Karaoke", "Klondike Mike’s and Garcia’s Grill", "Palmer", "2025-07-31", "8p-12a", ""),

  // ═══ SEWARD — Thursday July 31st ═══
  ev("Gold Rush Days Celebration 2025", "Downtown Valdez", "Seward", "2025-07-31", "2p-8p", ""),
  ev("Carol Markstrom", "The Goods", "Seward", "2025-07-31", "6p-8p", ""),
  ev("Tracorium", "Mountain High Pizza Pie", "Seward", "2025-07-31", "7p-10p", ""),
  ev("Roses Pawn Shop", "Fairview Inn", "Seward", "2025-07-31", "8p-1a", ""),
  ev("Thursday Night Dance Party w/ DJ WaitWat", "Yukon Bar", "Seward", "2025-07-31", "9p-2a", "", "dance"),

  // ═══ ANCHORAGE — Friday August 1st ═══
  ev("Amelia Doll", "Angry Salmon", "Anchorage", "2025-08-01", "6p-9p", ""),

  // ═══ COOPER LANDING — Friday August 1st ═══
  ev("Kenai Band", "Gwin’s Lodge", "Cooper Landing", "2025-08-01", "8p-10p", ""),
  ev("Ukulele Russ & His One-Man Frontier Band", "Trophy Lodge", "Cooper Landing", "2025-08-01", "8p-11p", ""),

  // ═══ EAGLE RIVER — Friday August 1st ═══
  ev("It's Not A Phase: Hawthorne Heights Pre(EMO)-Party", "The Crystal Saloon", "Eagle River", "2025-08-01", "10p-11:30p", ""),
  ev("Fairaoke", "Pioneer Bar", "Eagle River", "2025-08-01", "10p-1a", "", "festival"),
  ev("DJ Mraj Nite", "The International Hotel & Bar", "Eagle River", "2025-08-01", "11p-2a", ""),
  ev("Music on the Dock: Takumi Kato", "Ketchikan City Dock", "Eagle River", "2025-08-01", "12p-1p", ""),
  ev("Salmonfest 2025", "Kenai Peninsula Fairgrounds", "Eagle River", "2025-08-01", "12p-2a", "", "festival"),
  ev("50th Annual Blueberry Festival", "Ketchikan Area Arts & Humanities Council", "Eagle River", "2025-08-01", "2p-5p", "", "festival"),
  ev("Kristin Larson", "Alaskan Hotel and Bar", "Eagle River", "2025-08-01", "4p-6p", ""),
  ev("Explore the Universe", "Marie Drake Planetarium", "Eagle River", "2025-08-01", "5:30p-7p", ""),
  ev("Saturday Cinders", "Dirty Skillet", "Eagle River", "2025-08-01", "6p-10p", ""),
  ev("Matt Lewis Band w/ Matt Hopper", "Pakalolo Supply Co.", "Eagle River", "2025-08-01", "7p-10p", ""),
  ev("Coast Guard Day Comedy Night", "Billiken Theater", "Eagle River", "2025-08-01", "7p-10p", "", "comedy"),
  ev("The Golden Heart Revue", "The Palace Theater", "Eagle River", "2025-08-01", "8:15p-9:15p", ""),
  ev("Andy Koch’s Badd Dog Blues Society", "The Harbor Bar", "Eagle River", "2025-08-01", "8p-12p", ""),
  ev("Old School Throwback Jams", "The Cabin", "Eagle River", "2025-08-01", "8p-1a", ""),

  // ═══ PALMER — Friday August 1st ═══
  ev("Earth 2 Travolta", "Klondike Mike’s and Garcia’s Grill", "Palmer", "2025-08-01", "10p-2a", ""),
  ev("Friday Flings Market & Live Music", "Downtown", "Palmer", "2025-08-01", "11a-6p", ""),
  ev("H3 Hawaiian Reggae", "Palmer Alehouse", "Palmer", "2025-08-01", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15", "Palmer", "2025-08-01", "7p-11p", ""),

  // ═══ SEWARD — Friday August 1st ═══
  ev("Gold Rush Days Celebration 2025", "Downtown Valdez", "Seward", "2025-08-01", "10a-10p", ""),
  ev("First Friday Garden Party", "Seward Community Library & Museum", "Seward", "2025-08-01", "4p-6p", ""),
  ev("Nothin' but Kharma", "Village Park", "Seward", "2025-08-01", "5p-7p", ""),
  ev("Live Music: High Step Society", "Flamingo Lounge", "Seward", "2025-08-01", "6:30p-9:30p", ""),
  ev("Concert on the Lake w/ Thompson Square & James Otto", "Everett’s", "Seward", "2025-08-01", "6p-10p", ""),
  ev("First Friday Poetry Night: Some Things Stay", "The Commons Café", "Seward", "2025-08-01", "6p-8p", ""),
  ev("Brandon Kellum", "Naptowne Brewery", "Seward", "2025-08-01", "6p-9p", ""),
  ev("The SpongeBob Musical", "Sitka Fine Arts Camp", "Seward", "2025-08-01", "7p-10p", "", "theatre"),
  ev("Leaving for a Loon (Play)", "Magpies on the Fly", "Seward", "2025-08-01", "7p-10p", "", "theatre"),
  ev("West Coast Swing Dance Lesson", "Church of Latter-Day Saints", "Seward", "2025-08-01", "7p-9p", "", "dance"),
  ev("Karaoke Night", "Schwabenhof", "Seward", "2025-08-01", "8p-11p", ""),
  ev("Free Music Fridays: Pepper Kit", "Seward Alehouse", "Seward", "2025-08-01", "8p-12a", ""),
  ev("Rage to Rhymes: A Night of Nu Metal and Hip Hop", "Yukon Bar", "Seward", "2025-08-01", "9p-12a", ""),

  // ═══ COOPER LANDING — Saturday August 2nd ═══
  ev("Cousin Curtiss, The Builders & The Butchers, & Hwy9", "Cooper Landing Brewing", "Cooper Landing", "2025-08-02", "5p-9p", ""),
  ev("Hwy9 Live", "The Sunrise Inn", "Cooper Landing", "2025-08-02", "9:30p-12a", ""),

  // ═══ EAGLE RIVER — Saturday August 2nd ═══
  ev("Salmonfest 2025", "Kenai Peninsula Fairgrounds", "Eagle River", "2025-08-02", "11a-2a", "", "festival"),
  ev("Kingswardfish", "Pioneer Bar", "Eagle River", "2025-08-02", "11p-2a", ""),
  ev("50th Annual Blueberry Festival", "Ketchikan Area Arts & Humanities Council", "Eagle River", "2025-08-02", "12p-5p", "", "festival"),
  ev("Saturday Cinders", "Dirty Skillet", "Eagle River", "2025-08-02", "6p-10p", ""),
  ev("Island Music Night w/ Ukulele Russ & Rootsy Soul", "The International Hotel & Bar", "Eagle River", "2025-08-02", "6p-2a", ""),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2025-08-02", "6p-8p", ""),
  ev("Schaefer Mueller & The Neon Highway", "Odd Man Rush", "Eagle River", "2025-08-02", "7p-10p", ""),
  ev("Matt Lewis Band w/ Matt Hopper & Jake Chavez", "Arctic Harvest", "Eagle River", "2025-08-02", "7p-10p", ""),
  ev("Thompson Square & James Otto", "Tanana Valley State Fairgrounds", "Eagle River", "2025-08-02", "7p-11p", ""),
  ev("The Golden Heart Revue", "The Palace Theater", "Eagle River", "2025-08-02", "8:15p-9:15p", ""),
  ev("Salsa & Bachata Lessons", "Alaskan Hotel and Bar", "Eagle River", "2025-08-02", "8p-11p", "", "dance"),
  ev("Bois Rouge Cajun Band", "Kenai Joes", "Eagle River", "2025-08-02", "9p-12a", ""),
  ev("Zen Trembles", "Golden Saloon", "Eagle River", "2025-08-02", "9p-12a", ""),
  ev("Hellcat Maggie", "The Cabin", "Eagle River", "2025-08-02", "9p-1a", ""),

  // ═══ PALMER — Saturday August 2nd ═══
  ev("Earth 2 Travolta", "Klondike Mike’s and Garcia’s Grill", "Palmer", "2025-08-02", "10p-2a", ""),
  ev("Hatcher Pass Community Market", "Fishhook Bar and Grill", "Palmer", "2025-08-02", "11a-5p", "", "community"),
  ev("TBA", "Hatcher Pass Lodge", "Palmer", "2025-08-02", "4p-7p", ""),
  ev("Dance Lessons with Shufflin’ Country Style & Karaoke After", "American Legion Post 15", "Palmer", "2025-08-02", "7p-10p", "", "dance"),
  ev("Nervis Rex", "Palmer Alehouse", "Palmer", "2025-08-02", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15", "Palmer", "2025-08-02", "7p-11p", ""),

  // ═══ SEWARD — Saturday August 2nd ═══
  ev("Gold Rush Days Celebration 2025", "Downtown Valdez", "Seward", "2025-08-02", "10a-10p", ""),
  ev("Thrive Fest", "Menard Sports Center", "Seward", "2025-08-02", "1p-10p", "", "festival"),
  ev("Amelia Doll", "Naptowne Brewery", "Seward", "2025-08-02", "6p-9p", ""),
  ev("The SpongeBob Musical", "Sitka Fine Arts Camp", "Seward", "2025-08-02", "7p-10p", "", "theatre"),
  ev("Leaving for a Loon (Play)", "Magpies on the Fly", "Seward", "2025-08-02", "7p-10p", "", "theatre"),
  ev("One Love & Mic: A Reggae & Hip-Hop Showcase", "Yukon Bar", "Seward", "2025-08-02", "9p-12a", ""),
  ev("Red Onion Charity Drag Show", "Red Onion Saloon", "Seward", "2025-08-02", "9p-1a", "", "comedy"),

  // ═══ ANCHORAGE — Sunday August 3rd ═══
  ev("Sunday Fresh Market & More w/ Live Music", "O’Malley Center", "Anchorage", "2025-08-03", "10a-2p", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-08-03", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2025-08-03", "10p-2a", ""),
  ev("Brunch Music w/ Vinter.Baer", "Writer’s Block Bookstore & Café", "Anchorage", "2025-08-03", "12p-2p", ""),
  ev("Spenard Bike Week Opening Ceremony", "House of Harley Davidson", "Anchorage", "2025-08-03", "1p-8p", ""),
  ev("Open Mic & Jam", "VFW Post 1685", "Anchorage", "2025-08-03", "4:30p-8:30p", ""),
  ev("Celebration of Life: Remembering Ron Brown", "Billiard Palace", "Anchorage", "2025-08-03", "4p-11p", ""),
  ev("Garden Grooves", "49th State Brewing", "Anchorage", "2025-08-03", "5p-7p", ""),
  ev("Country Dance Nights", "Anchorage Social Dance Club", "Anchorage", "2025-08-03", "6:30p-10p", "", "dance"),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2025-08-03", "6p-10p", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2025-08-03", "6p-9p", ""),
  ev("Amelia Doll", "Humpy’s", "Anchorage", "2025-08-03", "7:30p-11p", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2025-08-03", "7p-11p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2025-08-03", "8:30p-10p", "", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2025-08-03", "8:30p-1a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2025-08-03", "9p-12a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2025-08-03", "9p-2a", ""),

  // ═══ EAGLE RIVER — Sunday August 3rd ═══
  ev("Salmonfest 2025", "Kenai Peninsula Fairgrounds", "Eagle River", "2025-08-03", "11a-10p", "", "festival"),
  ev("Sunday Brunch w/ Saturday Cinders", "Creekbend Company", "Eagle River", "2025-08-03", "11a-2p", "", "community"),
  ev("Sunday Deck Jam", "Malemute Saloon", "Eagle River", "2025-08-03", "2p-5p", ""),
  ev("- Matt Lewis Band w/ Matt Hopper", "Lat 65 Brewery", "Eagle River", "2025-08-03", "4p-7p", ""),
  ev("Open Mic Night", "The Creek Street Cabaret", "Eagle River", "2025-08-03", "6p-9p", ""),
  ev("Shakedown Strings Live", "Historic Hope & Seaview Bar", "Eagle River", "2025-08-03", "7p-10p", ""),
  ev("The Golden Heart Revue", "The Palace Theater", "Eagle River", "2025-08-03", "8:15p-9:15p", ""),
  ev("Karaoke", "Chair 5", "Eagle River", "2025-08-03", "8p-12a", ""),

  // ═══ PALMER — Sunday August 3rd ═══
  ev("Karaoke", "Four Corner’s Lounge", "Palmer", "2025-08-03", "9p-12a", ""),

  // ═══ SEWARD — Sunday August 3rd ═══
  ev("Gold Rush Days Celebration 2025", "Downtown Valdez", "Seward", "2025-08-03", "12p-5p", ""),

  // ═══ ANCHORAGE — Monday August 4th ═══
  ev("Boombox Bingo", "Broken Blender", "Anchorage", "2025-08-04", "6:30p-8:30", ""),
  ev("Weekly Jazz Jam", "Fire Island Bakery @ K Street Market", "Anchorage", "2025-08-04", "6:30p-9:30p", ""),
  ev("Learn to Square Dance", "Anchorage Social Dance Club", "Anchorage", "2025-08-04", "7p-9p", "", "dance"),
  ev("Open Mic Night", "The Blue Fox", "Anchorage", "2025-08-04", "8p-12a", ""),
  ev("The Monday Mic w/ Boobs", "Koot’s", "Anchorage", "2025-08-04", "9p-12a", ""),

  // ═══ EAGLE RIVER — Monday August 4th ═══
  ev("Bois Rouge Cajun Band", "Kharacter’s Alaskan Bar", "Eagle River", "2025-08-04", "10p-1a", ""),
  ev("Carol Markstrom", "Kenai Community Library", "Eagle River", "2025-08-04", "5p-8p", ""),
  ev("Open Mic Night w/ Jim Maloney & Orion Donicht", "Alice’s Champagne Palace", "Eagle River", "2025-08-04", "7p-10p", ""),
  ev("The Golden Heart Revue", "The Palace Theater", "Eagle River", "2025-08-04", "8:15p-9:15p", ""),

  // ═══ PALMER — Monday August 4th ═══
  ev("Karaoke", "Four Corner’s Lounge", "Palmer", "2025-08-04", "9p-12a", ""),

  // ═══ SEWARD — Monday August 4th ═══
  ev("Cousin Curtiss", "Fairview Inn", "Seward", "2025-08-04", "8p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Seward", "2025-08-04", "9p-2a", ""),

  // ═══ ANCHORAGE — Tuesday August 5th ═══
  ev("Lunch on the Lawn w/ Live Music", "Anchorage Museum", "Anchorage", "2025-08-05", "11:30a-1:30p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2025-08-05", "6p-8p", ""),
  ev("Tuesday Jazz Jam", "Billiard Palace", "Anchorage", "2025-08-05", "7p-10p", ""),
  ev("All Ages Buckarooos Night", "Pink Cadillac", "Anchorage", "2025-08-05", "7p-11p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2025-08-05", "7p-11p", ""),
  ev("Taco & Tune Tuesday w/ DJ Joe Brady", "Williwaw Social", "Anchorage", "2025-08-05", "7p-9p", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2025-08-05", "8p-2a", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2025-08-05", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday August 5th ═══
  ev("Storytime at the PRATT: Fun in the Sun!", "Pratt Museum", "Eagle River", "2025-08-05", "10:30a-3p", "", "community"),
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2025-08-05", "6:30p-10p", ""),
  ev("Michael Kirkpatrick", "Rendezvous Kodiak", "Eagle River", "2025-08-05", "6p-9p", ""),
  ev("Karaoke Night at the Cabin", "The Cabin", "Eagle River", "2025-08-05", "7p-10p", ""),
  ev("The Golden Heart Revue", "The Palace Theater", "Eagle River", "2025-08-05", "8:15p-9:15p", ""),
  ev("Jazz Jam Tuesday", "The Crystal Saloon", "Eagle River", "2025-08-05", "8p-11p", ""),
  ev("Bois Rouge Cajun Band", "Alice’s Champagne Palace", "Eagle River", "2025-08-05", "9p-12a", ""),

  // ═══ PALMER — Tuesday August 5th ═══
  ev("Industry Night: Live DJ, Karaoke, and/or Live Music", "Four Corner’s Lounge", "Palmer", "2025-08-05", "8p-11p", ""),

  // ═══ SEWARD — Tuesday August 5th ═══
  ev("Storytime at Ken’s!", "Ken’s Garden Center", "Seward", "2025-08-05", "10a-11a", "", "community"),
  ev("The Ken Peltier Band", "Chepo’s Mexican Restaurant", "Seward", "2025-08-05", "6p-9p", ""),
  ev("Live Music Tyson Tuesdays!", "Seward Alehouse", "Seward", "2025-08-05", "8p-10p", ""),
  ev("Karaoke Night", "Schwabenhof", "Seward", "2025-08-05", "8p-11p", ""),
  ev("Open Mic Night w/ Braden Rollins", "Yukon Bar", "Seward", "2025-08-05", "9p-2a", ""),

  // ═══ ANCHORAGE — Wednesday August 6th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2025-08-06", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2025-08-06", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-08-06", "10p-2a", ""),
  ev("Garden Grooves", "49th State Brewing", "Anchorage", "2025-08-06", "5p-7p", ""),
  ev("Spenard Bike Week Hogs & Hot Rods", "House of Harley Davidson", "Anchorage", "2025-08-06", "5p-9p", ""),
  ev("International Folk Dancing", "Anchorage Social Dance Club", "Anchorage", "2025-08-06", "6:30p-8p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2025-08-06", "7p-10p", ""),
  ev("Line Dance Wednesdays", "Pink Cadillac", "Anchorage", "2025-08-06", "7p-12a", "", "dance"),
  ev("Schafer Mueller Duo", "Humpy’s", "Anchorage", "2025-08-06", "8:30p-12a", ""),
  ev("Country Night", "Koot’s", "Anchorage", "2025-08-06", "8p-12a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2025-08-06", "9p-12a", ""),
  ev("Karaoke Wednesdays w/ Kellie B", "Van’s Dive Bar", "Anchorage", "2025-08-06", "9p-12a", ""),

  // ═══ EAGLE RIVER — Wednesday August 6th ═══
  ev("Lisa Denny", "Alaskan Hotel and Bar", "Eagle River", "2025-08-06", "3p-5p", ""),
  ev("Local Talent Showcase", "The Cabin", "Eagle River", "2025-08-06", "7p-10p", ""),
  ev("PechaKucha: Stories at the Porcupine", "The Porcupine Theater", "Eagle River", "2025-08-06", "7p-11p", ""),
  ev("Mike Stackhouse Live", "The International Hotel & Bar", "Eagle River", "2025-08-06", "7p-9p", ""),
  ev("The Golden Heart Revue", "The Palace Theater", "Eagle River", "2025-08-06", "8:15p-9:15p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2025-08-06", "8p-11p", ""),
  ev("Michael Kirkpatrick", "The Crystal Saloon", "Eagle River", "2025-08-06", "8p-11p", ""),

  // ═══ PALMER — Wednesday August 6th ═══
  ev("Michael Kirkpatrick", "Hatcher Pass Lodge", "Palmer", "2025-08-06", "4p-7p", ""),
  ev("West Coast Sing Wednesday", "Four Corner’s Lounge", "Palmer", "2025-08-06", "7:30p-9:30p", ""),
  ev("Cousin Curtiss & Harrison B", "Palmer Alehouse", "Palmer", "2025-08-06", "7p-10p", ""),

  // ═══ SEWARD — Wednesday August 6th ═══
  ev("Young Dubliners & Men With Guns", "Soldotna Creek Park", "Seward", "2025-08-06", "6p-9p", ""),
  ev("Campfire Sessions with Jerry Wessling", "Lulu’s Tents and Events", "Seward", "2025-08-06", "6p-9p", ""),
  ev("Open Mic", "Schwabenhof", "Seward", "2025-08-06", "7:30p-11p", ""),
  ev("Barry Sless and Stephen Inglis", "Tufted Puffin", "Seward", "2025-08-06", "7p-10p", ""),
  ev("Open Mic", "Fairview Inn", "Seward", "2025-08-06", "8p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Seward", "2025-08-06", "9p-2a", ""),

  // ═══ PALMER — Thursday August 7th ═══
  ev("Cousin Curtiss & Harrison B", "Palmer Alehouse", "Palmer", "2025-08-07", "7p-10p", ""),

  // ═══ PALMER — Friday August 8th ═══
  ev("Free Creatures", "Palmer Alehouse", "Palmer", "2025-08-08", "7p-10p", ""),

  // ═══ PALMER — Saturday August 9th ═══
  ev("Black Barrel and the Bad Men", "Palmer Alehouse", "Palmer", "2025-08-09", "7p-10p", ""),

  // ═══ ANCHORAGE — Sunday October 12th ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-10-12", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2025-10-12", "10p-2a", ""),
  ev("Brunch Music with Whitney & Belle", "Writer’s Block Bookstore & Café", "Anchorage", "2025-10-12", "12p-2p", ""),
  ev("5th Annual Great Pumpkin Patch", "49th State Brewing", "Anchorage", "2025-10-12", "12p-5p", ""),
  ev("Outside Mullingar", "Cyrano’s Theater Company", "Anchorage", "2025-10-12", "3p-4:30p", ""),
  ev("Midnight Sun Theatre: 39 Steps", "UAA Fine Arts Building", "Anchorage", "2025-10-12", "3p-5p", "", "theatre"),
  ev("Open Mic & Jam", "VFW Post 1685", "Anchorage", "2025-10-12", "4:30p-8:30p", ""),
  ev("Alaska Chamber Singers: Ernest Bloch: Avodath Hakodesh", "St. Patrick’s Parish", "Anchorage", "2025-10-12", "4p-6p", ""),
  ev("UAA Music Faculty Chamber Recital", "UAA Fine Arts Building", "Anchorage", "2025-10-12", "4p-6p", ""),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2025-10-12", "6p-10p", ""),
  ev("Traditional Irish Music Jam", "Writer’s Block Bookstore & Café", "Anchorage", "2025-10-12", "6p-8p", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2025-10-12", "7p-11p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2025-10-12", "8:30p-10p", "", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2025-10-12", "8:30p-1a", ""),
  ev("Open Decks", "Koot’s", "Anchorage", "2025-10-12", "8p-1a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2025-10-12", "9p-12a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2025-10-12", "9p-2a", ""),

  // ═══ BIG LAKE — Sunday October 12th ═══
  ev("Theater in the Rough: Romeo & Juliet", "McPhetres Hall", "Big Lake", "2025-10-12", "2p-3:30p", "", "theatre"),
  ev("The Addams Family Musical", "Hering Auditorium", "Big Lake", "2025-10-12", "2p-5p", "", "theatre"),
  ev("Open Mic Night", "Susitna Brewing", "Big Lake", "2025-10-12", "6p-9p", ""),
  ev("Open Mic Night", "The Creek Street Cabaret", "Big Lake", "2025-10-12", "6p-9p", ""),
  ev("Fairbanks Friendly Feud", "The Cabin", "Big Lake", "2025-10-12", "7p-10p", "", "festival"),
  ev("Karaoke", "Chair 5", "Big Lake", "2025-10-12", "8p-12a", ""),

  // ═══ ANCHORAGE — Monday October 13th ═══
  ev("Boombox Bingo", "Broken Blender", "Anchorage", "2025-10-13", "6:30p-8:30", ""),
  ev("Weekly Jazz Jam", "Fire Island Bakery @ K Street Market", "Anchorage", "2025-10-13", "6:30p-9:30p", ""),
  ev("Learn to Square Dance", "Anchorage Social Dance Club", "Anchorage", "2025-10-13", "7p-9p", "", "dance"),
  ev("Open Mic Night", "The Blue Fox", "Anchorage", "2025-10-13", "8p-12a", ""),
  ev("The Monday Mic w/ Boobs", "Koot’s", "Anchorage", "2025-10-13", "9p-12a", ""),

  // ═══ BIG LAKE — Monday October 13th ═══
  ev("Jeff Tweedy", "Higher Ground", "Big Lake", "2025-10-13", "3:30p-6p", ""),
  ev("Indigenous Peoples’ Day Celebration", "Kuskokwim Consortium Library", "Big Lake", "2025-10-13", "4p-8p", ""),
  ev("Luke & Heather In the Afternoon", "The Crystal Saloon", "Big Lake", "2025-10-13", "5p-7p", ""),
  ev("Friends of Mike Morgan Song Circle", "The Goods", "Big Lake", "2025-10-13", "5p-7p", ""),
  ev("Open Mic Night w/ Jim Maloney & Orion Donicht", "Alice’s Champagne Palace", "Big Lake", "2025-10-13", "7p-10p", ""),
  ev("Community Concert Band Rehearsals", "First Assembly Church", "Big Lake", "2025-10-13", "7p-8:30p", ""),

  // ═══ ANCHORAGE — Tuesday October 14th ═══
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2025-10-14", "6p-8p", ""),
  ev("Tuesday Jazz Jam", "Billiard Palace", "Anchorage", "2025-10-14", "7p-10p", ""),
  ev("All Ages Buckarooos Night", "Pink Cadillac", "Anchorage", "2025-10-14", "7p-11p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2025-10-14", "7p-11p", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2025-10-14", "8p-2a", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2025-10-14", "9p-12a", ""),

  // ═══ BIG LAKE — Tuesday October 14th ═══
  ev("Storytime at the PRATT: Earth's Climate", "Pratt Museum", "Big Lake", "2025-10-14", "10:30a-3p", "", "community"),
  ev("Songs & Storytime at Ken’s!", "Ken’s Garden Center", "Big Lake", "2025-10-14", "10a-11a", "", "community"),
  ev("The Ukulele Group", "Inn at Creek Street", "Big Lake", "2025-10-14", "3:45p-4:45p", ""),
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Big Lake", "2025-10-14", "6:30p-10p", ""),
  ev("Community Chorus Rehearsals", "First United Methodist Church", "Big Lake", "2025-10-14", "6:30p-8:30p", "", "community"),
  ev("Story Slam: Cabin Fever", "Alaska Legends Cider & Wine", "Big Lake", "2025-10-14", "7:30p-9p", "", "community"),
  ev("Karaoke Night at the Cabin", "The Cabin", "Big Lake", "2025-10-14", "7p-10p", ""),
  ev("Abby Posner Live", "Nonna’s Osteria", "Big Lake", "2025-10-14", "7p-9p", ""),
  ev("Jazz Jam Tuesday", "The Crystal Saloon", "Big Lake", "2025-10-14", "8p-11p", ""),
  ev("Industry Night with DJ Red", "Four Corner’s Lounge", "Big Lake", "2025-10-14", "8p-11p", ""),
  ev("Karaoke Night", "Schwabenhof", "Big Lake", "2025-10-14", "8p-11p", ""),

  // ═══ ANCHORAGE — Wednesday October 15th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2025-10-15", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2025-10-15", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-10-15", "10p-2a", ""),
  ev("Chancel Choir Practice", "First Congregational Church of Anchorage", "Anchorage", "2025-10-15", "6:30p-7:30p", ""),
  ev("International Folk Dancing", "Anchorage Social Dance Club", "Anchorage", "2025-10-15", "6:30p-8p", ""),
  ev("The Whisper Campaign Live at Crimson", "Wildbirch Hotel", "Anchorage", "2025-10-15", "6:30p-9:30p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2025-10-15", "7p-10p", ""),
  ev("Line Dance Wednesdays", "Pink Cadillac", "Anchorage", "2025-10-15", "7p-12a", "", "dance"),
  ev("Country Night", "Koot’s", "Anchorage", "2025-10-15", "8p-12a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2025-10-15", "9p-12a", ""),
  ev("Karaoke Wednesdays w/ Kellie B", "Van’s Dive Bar", "Anchorage", "2025-10-15", "9p-12a", ""),

  // ═══ BIG LAKE — Wednesday October 15th ═══
  ev("Luke & Heather In the Afternoon", "The Crystal Saloon", "Big Lake", "2025-10-15", "5p-7p", ""),
  ev("Karaoke with Eve", "The Goods", "Big Lake", "2025-10-15", "5p-8p", ""),
  ev("Open Mic", "Schwabenhof", "Big Lake", "2025-10-15", "7:30p-11p", ""),
  ev("West Coast Sing Wednesday", "Four Corner’s Lounge", "Big Lake", "2025-10-15", "7:30p-9:30p", ""),
  ev("Country Line Dancing w/ Greyson & Logan", "The Cabin", "Big Lake", "2025-10-15", "7p-11:30p", ""),
  ev("Karaoke Night with Rocky!", "The Spur", "Big Lake", "2025-10-15", "8p-11p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Big Lake", "2025-10-15", "8p-11p", ""),
  ev("Open Mic", "Fairview Inn", "Big Lake", "2025-10-15", "8p-1a", ""),
  ev("Open Mic Night w/ Braden Rollins", "Yukon Bar", "Big Lake", "2025-10-15", "9p-2a", ""),

  // ═══ BIG LAKE — Thursday October 16th ═══
  ev("Open Mic w/ Garret Ennis", "The Goods", "Big Lake", "2025-10-16", "6p-8p", ""),

  // ═══ EAGLE RIVER — Thursday November 6th ═══
  ev("SalmonState Screening of \"Ocean with David Attenborough\"", "Odd Man Rush", "Eagle River", "2025-11-06", "6:30p-8p", ""),
  ev("Michael Austin Graduate Violin", "UAF Charles Davis Concert Hall", "Eagle River", "2025-11-06", "7:30p-9:15p", ""),
  ev("Line Dancing", "Northern Whimsy Wellness", "Eagle River", "2025-11-06", "7p-8p", ""),
  ev("Open Mic Night at the Cabin", "The Cabin", "Eagle River", "2025-11-06", "8p-11p", ""),

  // ═══ HAINES — Thursday November 6th ═══
  ev("Science on Tap", "Devil’s Club Brewing", "Haines", "2025-11-06", "5:30p-7:30p", ""),
  ev("Busking Night with Local Artists", "Vintage Food Truck Park", "Haines", "2025-11-06", "5p-8p", ""),
  ev("Sea Shanties with Greg Thomas and Friends", "Alaska Fish House", "Haines", "2025-11-06", "6p-8p", ""),
  ev("Unplugged: Roland Roberts", "Palmer Alehouse", "Haines", "2025-11-06", "6p-9p", ""),
  ev("Open Jam/Mic Night w/ Host Jesse James", "Four Corner’s Lounge", "Haines", "2025-11-06", "7p-11p", ""),
  ev("WhaleFest Film Fest: Sitka’s Hidden Wonders", "Harrigan Centennial Hall", "Haines", "2025-11-06", "7p-8p", "", "festival"),
  ev("Karaoke with Nita", "Skeets Dive Bar", "Haines", "2025-11-06", "8p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Haines", "2025-11-06", "8p-2a", ""),
  ev("Karaoke Night", "The Crystal Saloon", "Haines", "2025-11-06", "9p-11:30p", ""),
  ev("Open Mic", "Alaskan Hotel and Bar", "Haines", "2025-11-06", "9p-11p", ""),

  // ═══ EAGLE RIVER — Friday November 7th ═══
  ev("Karaoke with Angel", "The International Hotel & Bar", "Eagle River", "2025-11-07", "10p-3a", ""),
  ev("First Friday: Games & Jams in the Garage", "Gather", "Eagle River", "2025-11-07", "5p-8p", ""),
  ev("Slay at the Spur", "The Spur", "Eagle River", "2025-11-07", "6p-7:30p", ""),
  ev("Family Night at the Cabin", "The Cabin", "Eagle River", "2025-11-07", "6p-9p", ""),
  ev("Portland Cello Project", "Hering Auditorium", "Eagle River", "2025-11-07", "7:30p-9:30p", ""),
  ev("Karaoke Night", "Warrior Zone", "Eagle River", "2025-11-07", "7p-11:45p", ""),

  // ═══ HAINES — Friday November 7th ═══
  ev("Alaska Bald Eagle Festival 2025", "Around Haines", "Haines", "2025-11-07", "10a-10p", "", "festival"),
  ev("Storytime & Craft", "Seward Community Library & Museum", "Haines", "2025-11-07", "12:30p-3:30p", "", "community"),
  ev("Sitka WhaleFest Science Symposium", "Harrigan Centennial Hall", "Haines", "2025-11-07", "12:30p-4p", "", "festival"),
  ev("First Friday Art Sale w/ Music", "The Mustard Seed Resale Shop", "Haines", "2025-11-07", "4p-7p", ""),
  ev("First Friday Open House", "Marie Drake Planetarium", "Haines", "2025-11-07", "5:30p-7p", ""),
  ev("Family Fun Night", "Diamond Park Field House", "Haines", "2025-11-07", "5p-6:30p", ""),
  ev("Geoffrey Haase", "The Goods", "Haines", "2025-11-07", "6p-8p", ""),
  ev("The Maritime Grind", "Harrigan Centennial Hall", "Haines", "2025-11-07", "7:30p-9p", ""),
  ev("Comedy Show with Adam Tiller", "Everett’s", "Haines", "2025-11-07", "7:30p-9p", "", "comedy"),
  ev("Friday Spooky Social Dance", "Raven Yoga Shala Juneau", "Haines", "2025-11-07", "7p-10:30p", "", "dance"),
  ev("Sweeney Todd: The Demon Barber of Fleet Street", "Glenn Massay Theater", "Haines", "2025-11-07", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15", "Haines", "2025-11-07", "7p-11p", ""),
  ev("Kodiak Galley Tables Storytelling: Back In My Day", "Emerald Isle Market", "Haines", "2025-11-07", "7p-9p", "", "community"),
  ev("Live Music w/ Sam Sonnemann & Friends", "Skagway Brewing", "Haines", "2025-11-07", "7p-9p", ""),
  ev("Springsteen: Deliver Me from Nowhere", "Valdez Cinema", "Haines", "2025-11-07", "7p-9p", ""),
  ev("Fear Boner ft The Bone Heads & Fysh Houck", "Alaskan Hotel and Bar", "Haines", "2025-11-07", "8p-1a", ""),
  ev("Friday Night with DJ Blaque", "Klondike Mike’s and Garcia’s Grill", "Haines", "2025-11-07", "9p-1a", ""),

  // ═══ EAGLE RIVER — Saturday November 8th ═══
  ev("Burlesque Bingo w/ Delilah Danger", "The International Hotel & Bar", "Eagle River", "2025-11-08", "10p-12a", ""),
  ev("2025 Alaska Crafted Festival", "Odd Man Rush", "Eagle River", "2025-11-08", "3p-6p", "", "festival"),
  ev("Open Skate: Pixar's \"Coco\" Movie", "Polar Ice", "Eagle River", "2025-11-08", "6p-8p", ""),
  ev("Line Dancing Classes", "Warrior Zone", "Eagle River", "2025-11-08", "7p-9p", "", "community"),

  // ═══ HAINES — Saturday November 8th ═══
  ev("Second Saturday Shenanigans", "The Kodiak Marketplace", "Haines", "2025-11-08", "10:30a-11:30a", ""),
  ev("Alaska Bald Eagle Festival 2025", "Around Haines", "Haines", "2025-11-08", "10a-10p", "", "festival"),
  ev("Eagle Festival: Eagle Fun Run", "Haines Visitor Center", "Haines", "2025-11-08", "10a-11a", "", "festival"),
  ev("Second Saturday: Free Entry to the Museum", "Pratt Museum", "Haines", "2025-11-08", "10a-3p", ""),
  ev("Hot Club of Juneau", "The Crystal Saloon", "Haines", "2025-11-08", "10p-1a", ""),
  ev("Sitka WhaleFest Science Symposium", "Harrigan Centennial Hall", "Haines", "2025-11-08", "1p-4p", "", "festival"),
  ev("Special Saturday Art Sale w/ Music", "The Mustard Seed Resale Shop", "Haines", "2025-11-08", "2p-4p", ""),
  ev("Sweeney Todd: The Demon Barber of Fleet Street", "Glenn Massay Theater", "Haines", "2025-11-08", "2p-5p & 7p-10p", ""),
  ev("Beers by the Bay 2025 Fundraiser", "Alaska SeaLife Center", "Haines", "2025-11-08", "4p-10p", ""),
  ev("Grassteroids", "Hatcher Pass Lodge", "Haines", "2025-11-08", "4p-7p", ""),
  ev("Juneau Hunger Jam", "Resurrection Lutheran Church", "Haines", "2025-11-08", "6p-10", ""),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Haines", "2025-11-08", "6p-8p", ""),
  ev("2025 Annual Awards Recognition Dinner", "Afognak Native Corporation", "Haines", "2025-11-08", "6p-9:30p", ""),
  ev("2025 Celebration of the Stars: A Star Spangled Ketchikan", "Ted Ferry Civic Center", "Haines", "2025-11-08", "6p-9p", ""),
  ev("Cabbage Hop Dance Party", "Lekker Coffee House and Bakery", "Haines", "2025-11-08", "6p-9p", "", "dance"),
  ev("Masquerade with Juneau Lyric Opera", "Hangar on the Warf", "Haines", "2025-11-08", "7p-11p", "", "theatre"),
  ev("Karaoke", "American Legion Post 15", "Haines", "2025-11-08", "7p-11p", ""),
  ev("River Talk: “The Bird is the Word”", "Haines Visitor Center", "Haines", "2025-11-08", "7p-8:30p", ""),
  ev("Springsteen: Deliver Me from Nowhere 1p-3p, 4p-6p, &", "Valdez Cinema", "Haines", "2025-11-08", "7p-9p", ""),
  ev("Sitka WhaleFest Fun Run & Walk", "Whale Park", "Haines", "2025-11-08", "8a-10a", "", "festival"),
  ev("Karaoke Night", "Schwabenhof", "Haines", "2025-11-08", "8p-11p", ""),
  ev("Line Dance Lessons", "Skeets Dive Bar", "Haines", "2025-11-08", "8p-1a", "", "dance"),
  ev("Sneaux Cats", "Alice’s Champagne Palace", "Haines", "2025-11-08", "9p-12a", ""),
  ev("Karaoke Night", "Pioneer Bar", "Haines", "2025-11-08", "9p-1a", ""),
  ev("The Glacier Blues Band Live", "Fairview Inn", "Haines", "2025-11-08", "9p-1a", ""),
  ev("Beers By The Bay Afterparty w/ Bananahands", "Yukon Bar", "Haines", "2025-11-08", "9p-2a", ""),
  ev("Karaoke", "Yukon Bar", "Haines", "2025-11-08", "9p-2a", ""),

  // ═══ ANCHORAGE — Sunday November 9th ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-11-09", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2025-11-09", "10p-2a", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2025-11-09", "6p-9p", ""),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2025-11-09", "8:30p-1a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2025-11-09", "9p-2a", ""),

  // ═══ EAGLE RIVER — Sunday November 9th ═══
  ev("Stech Memorial Organ Dedication Recital", "UAF Charles Davis Concert Hall", "Eagle River", "2025-11-09", "4p-6p", ""),
  ev("Karaoke", "Chair 5", "Eagle River", "2025-11-09", "8p-12a", ""),

  // ═══ HAINES — Sunday November 9th ═══
  ev("Sitka WhaleFest Science Symposium", "Harrigan Centennial Hall", "Haines", "2025-11-09", "1p-4p", "", "festival"),
  ev("Sweeney Todd: The Demon Barber of Fleet Street", "Glenn Massay Theater", "Haines", "2025-11-09", "2p-5p", ""),
  ev("Open Mic Night", "The Creek Street Cabaret", "Haines", "2025-11-09", "6p-9p", ""),
  ev("Alaska Bald Eagle Festival 2025", "Around Haines", "Haines", "2025-11-09", "7a-6p", "", "festival"),
  ev("Springsteen: Deliver Me from Nowhere 1p-3p, 4p-6p, &", "Valdez Cinema", "Haines", "2025-11-09", "7p-9p", ""),

  // ═══ ANCHORAGE — Monday November 10th ═══
  ev("Boombox Bingo", "Broken Blender", "Anchorage", "2025-11-10", "6:30p-8:30", ""),
  ev("Alaska Youth Orchestras: AYO Fall Celebration Concert", "Alaska Center for the Performing Arts", "Anchorage", "2025-11-10", "6:30p-8p", ""),
  ev("Weekly Jazz Jam", "Fire Island Bakery @ K Street Market", "Anchorage", "2025-11-10", "6:30p-9:30p", ""),
  ev("Learn to Square Dance", "Anchorage Social Dance Club", "Anchorage", "2025-11-10", "7p-9p", "", "dance"),
  ev("Open Mic Night", "The Blue Fox", "Anchorage", "2025-11-10", "8p-12a", ""),
  ev("The Monday Mic w/ Boobs", "Koot’s", "Anchorage", "2025-11-10", "9p-12a", ""),

  // ═══ HAINES — Monday November 10th ═══
  ev("Storytime: An Arctic Story “The Animals of the Frozen North”", "Kenai Cultural Center", "Haines", "2025-11-10", "11a-1p", "", "community"),
  ev("Luke & Heather In the Afternoon", "The Crystal Saloon", "Haines", "2025-11-10", "5p-7p", ""),
  ev("Friends of Mike Morgan Song Circle", "The Goods", "Haines", "2025-11-10", "5p-7p", ""),
  ev("Open Mic Night w/ Jim Maloney & Orion Donicht", "Alice’s Champagne Palace", "Haines", "2025-11-10", "7p-10p", ""),
  ev("Community Concert Band Rehearsals", "First Assembly Church", "Haines", "2025-11-10", "7p-8:30p", ""),
  ev("New Archangel Dancers Recruitment Nights", "New Archangel Dancers", "Haines", "2025-11-10", "7p-9p", "", "dance"),

  // ═══ ANCHORAGE — Tuesday November 11th ═══
  ev("Veteran’s Day Special: Free Admission for Vets & Active Duty", "Alaska Zoo", "Anchorage", "2025-11-11", "10a-4p", ""),
  ev("Irish Music and Dancing", "Organic Oasis", "Anchorage", "2025-11-11", "6p-8p", ""),
  ev("Tuesday Jazz Jam", "Billiard Palace", "Anchorage", "2025-11-11", "7p-10p", ""),
  ev("All Ages Buckarooos Night", "Pink Cadillac", "Anchorage", "2025-11-11", "7p-11p", ""),
  ev("Open Jam Night", "Van’s Dive Bar", "Anchorage", "2025-11-11", "7p-11p", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2025-11-11", "8p-2a", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2025-11-11", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday November 11th ═══
  ev("Karaoke Night at the Cabin", "The Cabin", "Eagle River", "2025-11-11", "7p-10p", ""),

  // ═══ HAINES — Tuesday November 11th ═══
  ev("Storytime at the PRATT: Native American Heritage Month", "Pratt Museum", "Haines", "2025-11-11", "10:30a-3p", "", "community"),
  ev("Songs & Storytime at Ken’s!", "Ken’s Garden Center", "Haines", "2025-11-11", "10a-11a", "", "community"),
  ev("Nick Shoulders Live", "Higher Ground", "Haines", "2025-11-11", "4p-6p", ""),
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Haines", "2025-11-11", "6:30p-10p", ""),
  ev("Community Chorus Rehearsals", "First United Methodist Church", "Haines", "2025-11-11", "6:30p-8:30p", "", "community"),
  ev("Story Slam: “Robbing Peter to Pay Paul”", "Alaska Legends Cider & Wine", "Haines", "2025-11-11", "7p-9p", "", "community"),
  ev("Jazz Jam Tuesday", "The Crystal Saloon", "Haines", "2025-11-11", "8p-11p", ""),
  ev("Industry Night with DJ Red", "Four Corner’s Lounge", "Haines", "2025-11-11", "8p-11p", ""),

  // ═══ ANCHORAGE — Wednesday November 12th ═══
  ev("Community Storytime", "Alaska Zoo", "Anchorage", "2025-11-12", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2025-11-12", "10p-12a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2025-11-12", "10p-2a", ""),
  ev("Chancel Choir Practice", "First Congregational Church of Anchorage", "Anchorage", "2025-11-12", "6:30p-7:30p", ""),
  ev("International Folk Dancing", "Anchorage Social Dance Club", "Anchorage", "2025-11-12", "6:30p-8p", ""),
  ev("Stand-Up & Comedy Writing Workshop", "Writer’s Block Bookstore & Café", "Anchorage", "2025-11-12", "6:30p-8p", "", "comedy"),
  ev("Community Wildfire Town Hall", "Loussac Public Library", "Anchorage", "2025-11-12", "6p-7p", "", "community"),
  ev("Wildlife Wednesdays Free Science Lecture Series: Karelian Bear Dogs", "Alaska Zoo", "Anchorage", "2025-11-12", "7-8p", ""),
  ev("Tyrone Palmer & Friends", "907 Alehouse", "Anchorage", "2025-11-12", "7p-10p", ""),
  ev("Line Dance Wednesdays", "Pink Cadillac", "Anchorage", "2025-11-12", "7p-12a", "", "dance"),
  ev("Country Night", "Koot’s", "Anchorage", "2025-11-12", "8p-12a", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2025-11-12", "9p-12a", ""),
  ev("Karaoke Wednesdays", "Van’s Dive Bar", "Anchorage", "2025-11-12", "9p-12a", ""),

  // ═══ EAGLE RIVER — Wednesday November 12th ═══
  ev("Country Line Dancing w/ Greyson & Logan", "The Cabin", "Eagle River", "2025-11-12", "7p-11:30p", ""),
  ev("Karaoke Night with Rocky!", "The Spur", "Eagle River", "2025-11-12", "8p-11p", ""),

  // ═══ HAINES — Wednesday November 12th ═══
  ev("The Ukulele Group", "Inn at Creek Street", "Haines", "2025-11-12", "3:45p-4:45p", ""),
  ev("Luke & Heather In the Afternoon", "The Crystal Saloon", "Haines", "2025-11-12", "5p-7p", ""),
  ev("Karaoke with Eve", "The Goods", "Haines", "2025-11-12", "5p-8p", ""),
  ev("Community Potluck & Food Pantry Fundraiser", "Porcupine Theatre", "Haines", "2025-11-12", "6p-9p", "", "community"),
  ev("Open Mic", "Schwabenhof", "Haines", "2025-11-12", "7:30p-11p", ""),
  ev("West Coast Sing Wednesday", "Four Corner’s Lounge", "Haines", "2025-11-12", "7:30p-9:30p", ""),
  ev("Open Mic Night", "The Crystal Saloon", "Haines", "2025-11-12", "8p-11:30p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Haines", "2025-11-12", "8p-11p", ""),
  ev("Open Mic", "Fairview Inn", "Haines", "2025-11-12", "8p-1a", ""),
  ev("Open Mic Night w/ Braden Rollins", "Yukon Bar", "Haines", "2025-11-12", "9p-2a", ""),

  // ═══ HAINES — Thursday November 13th ═══
  ev("Open Mic Night", "The Goods", "Haines", "2025-11-13", "6p-8p", ""),
  ev("Unplugged: Schaefer Mueller", "Palmer Alehouse", "Haines", "2025-11-13", "6p-9p", ""),
  ev("Open Jam/Mic Night w/ Host Jesse James", "Four Corner’s Lounge", "Haines", "2025-11-13", "7p-11p", ""),

  // ═══ HAINES — Friday November 14th ═══
  ev("Tom Letson", "Riverside Bar", "Haines", "2025-11-14", "8p-11p", ""),

  // ═══ EAGLE RIVER — Wednesday February 11th ═══
  ev("Family Storytime", "Gerrish Library", "Eagle River", "2026-02-11", "10:30a-11:30a", "", "community"),
  ev("Bouncing Babes Story Time", "Soldotna Library", "Eagle River", "2026-02-11", "10:30a-11a", "", "community"),
  ev("The Ukulele Group", "Inn at Creek Street", "Eagle River", "2026-02-11", "3:45p-4:45p", ""),
  ev("Karaoke Nights", "The Goods", "Eagle River", "2026-02-11", "5:30p-8p", ""),
  ev("David Webster: A Life in 12 Bars", "Porcupine Theater", "Eagle River", "2026-02-11", "6p-?", ""),
  ev("Open Mic", "Schwabenhof", "Eagle River", "2026-02-11", "7:30p-11p", ""),
  ev("West Coast Sing Wednesday", "Four Corner’s Lounge", "Eagle River", "2026-02-11", "7:30p-9:30p", ""),
  ev("Sitka Music Festival: Winter Classics", "Holy Name Catholic Church", "Eagle River", "2026-02-11", "7p-8:30p", "", "festival"),
  ev("Open Mic Night", "The Crystal Saloon", "Eagle River", "2026-02-11", "8p-11:30p", ""),
  ev("Karaoke Night with Rocky!", "The Spur", "Eagle River", "2026-02-11", "8p-11p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2026-02-11", "8p-11p", ""),
  ev("Open Mic Night", "Fairview Inn", "Eagle River", "2026-02-11", "8p-1a", ""),
  ev("Open Mic Night", "Yukon Bar", "Eagle River", "2026-02-11", "8p-2a", ""),
  ev("Stand-Up Comedy w/ Dana Gould", "North Pole Alehouse", "Eagle River", "2026-02-11", "8p-9:30p", "", "comedy"),
  ev("After Hours Alaska", "105.3 FM KRBD", "Eagle River", "2026-02-11", "9p-11p", ""),

  // ═══ ANCHORAGE — Thursday February 12th ═══
  ev("Secret Admirer Movie: Mystery Movie Date Night 6p-8p?", "Beartooth Theatrepub", "Anchorage", "2026-02-12", "", ""),
  ev("DJ Cross", "Pioneer Bar", "Anchorage", "2026-02-12", "10p-1a", ""),
  ev("Song Circle of Love w/ Irish Club of Alaska", "New Sagaya City Market", "Anchorage", "2026-02-12", "6p-8p", ""),
  ev("Kage Free’s Velvet Hours feat Melissa Mitchell", "Williwaw Social", "Anchorage", "2026-02-12", "6p-9p", ""),
  ev("Karaoke", "Broken Blender", "Anchorage", "2026-02-12", "7p-11p", ""),
  ev("Ladies Night at Pink Cadillac w/ DJ Rico", "Pink Cadillac", "Anchorage", "2026-02-12", "7p-12a", ""),
  ev("The Fantasticks", "Cyrano’s Theatre Company", "Anchorage", "2026-02-12", "7p-9p", ""),
  ev("Little Shop of Horrors Live", "West High School", "Anchorage", "2026-02-12", "7p-9p", ""),
  ev("Black & Tan Open Jam", "Blarney Stone", "Anchorage", "2026-02-12", "8p-11p", ""),
  ev("Karaoke Night", "Flattop Pizza & Pool", "Anchorage", "2026-02-12", "8p-12a", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2026-02-12", "8p-2a", ""),
  ev("Joey Fender", "Koot’s", "Anchorage", "2026-02-12", "9p-?", ""),

  // ═══ EAGLE RIVER — Thursday February 12th ═══
  ev("Preschool Storytime", "Fairbanks Library", "Eagle River", "2026-02-12", "10:30a-11:15p & 1:30p-2:15p", "", "community"),
  ev("Pre-School Story Time", "Soldotna Library", "Eagle River", "2026-02-12", "10:30a-11a", "", "community"),
  ev("Family Storytime", "Chugiak-Eagle River Library", "Eagle River", "2026-02-12", "10:30a-11p", "", "community"),
  ev("Beyond the Exhibit: Kenai's Ice Age Fossils", "Kenai Chamber of Commerce &Visitor Center", "Eagle River", "2026-02-12", "12p-?", ""),
  ev("Valentine’s Day Dance", "Wasilla Area Seniors, Inc", "Eagle River", "2026-02-12", "3p-5p", "", "dance"),
  ev("The Briefcase: An Art Mask Presentation", "Mendenhall Valley Library", "Eagle River", "2026-02-12", "5:30p-?", ""),
  ev("Community Classes: Love Your Brain", "Downtown Library", "Eagle River", "2026-02-12", "5:30p-7:30p", "", "community"),
  ev("Town League Race Series & Live Music: Ayden See", "Alyeska Resort", "Eagle River", "2026-02-12", "5p-10p", ""),
  ev("From Fairbanks, With Love: A Valentine’s Postcard Event", "Gather", "Eagle River", "2026-02-12", "5p-8p", "", "festival"),
  ev("Lifts for Love: Chairlift Speed Dating!", "Alyeska Resort", "Eagle River", "2026-02-12", "5p-8p", ""),
  ev("Fins, Fur, & Feathers of the Amazon & Galapagos", "UAS Egan Lecture Hall", "Eagle River", "2026-02-12", "6:30p-?", ""),
  ev("Thursday Night Dance Social: Salsa", "Chapel by the Lake", "Eagle River", "2026-02-12", "6:30p-8:30p", "", "dance"),
  ev("Frosty Feet Valentine’s Beer Run", "Hoodoo Brewing Company", "Eagle River", "2026-02-12", "6p-?", "", "community"),
  ev("Piano Music by Erica", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2026-02-12", "6p-8p", ""),
  ev("Valentine’s Wine Tasting & Live Music", "Soba Restaurant", "Eagle River", "2026-02-12", "6p-9p", ""),
  ev("Unplugged: Matt Hopper", "Palmer Alehouse", "Eagle River", "2026-02-12", "6p-9p", ""),
  ev("Grahm Jones", "UAF Charles Davis Concert Hall", "Eagle River", "2026-02-12", "7:30p-8p", ""),
  ev("Stand Up Comedy w/ Dana Gould", "The Spur", "Eagle River", "2026-02-12", "7p-9p", "", "comedy"),
  ev("Ketchikan Arts & Humanities Council: Arts Report", "105.3 FM KRBD", "Eagle River", "2026-02-12", "8:20a-8:35a", ""),
  ev("Karaoke Night", "The Crystal Saloon", "Eagle River", "2026-02-12", "8p-12a", ""),
  ev("Karaoke Thursdays with Rocky Barnette", "North Pole Alehouse", "Eagle River", "2026-02-12", "8p-12a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2026-02-12", "8p-2a", ""),
  ev("Open Mic", "Alaskan Hotel and Bar", "Eagle River", "2026-02-12", "9p-11p", ""),
  ev("Karaoke Night", "Alibi Bar & Café", "Eagle River", "2026-02-12", "9p-12:30a", ""),

  // ═══ ANCHORAGE — Friday February 13th ═══
  ev("A Burlesque ode to Rom-Com", "Sweet Cheeks Cabaret: Hot & Bothered", "Anchorage", "2026-02-13", "", ""),
  ev("Coach Kern's 67 Feels Like Heaven Party 10:30p-2a?", "Koot’s", "Anchorage", "2026-02-13", "", ""),
  ev("Cold Fusion 10:30p-2a?", "Koot’s", "Anchorage", "2026-02-13", "", ""),
  ev("Odds Are Good", "Barry’s Baranof Lounge", "Anchorage", "2026-02-13", "10p-?", ""),
  ev("Schaefer Mueller & The Neon Highway", "Pink Cadillac", "Anchorage", "2026-02-13", "10p-1a", ""),
  ev("Dump Them: An Anti-Valentines Day Dance Party w/ DJ Remax", "Williwaw Social", "Anchorage", "2026-02-13", "10p-2p", "", "dance"),
  ev("Chinese Immersion Schools Chinese New Year Performance", "Bartlett High School", "Anchorage", "2026-02-13", "11a-12:30p", ""),
  ev("Zoo Lights", "Alaska Zoo", "Anchorage", "2026-02-13", "5p-8p", ""),
  ev("Snowball 2026 w/ Hope Social Club", "49th State Brewing", "Anchorage", "2026-02-13", "6:30p-11p", ""),
  ev("Friday the 13th All-Ages Improv Show", "Williwaw Social", "Anchorage", "2026-02-13", "6:30p-8:30p", ""),
  ev("Joe Craig & Terry Curran", "Gumbo House", "Anchorage", "2026-02-13", "6:30p-9p", ""),
  ev("Live Jazz with Rick Zelinsky", "O’Malley’s on the Green", "Anchorage", "2026-02-13", "6:30p-9p", ""),
  ev("Unangax Dancers & Storytelling", "Alaska Native Heritage Center", "Anchorage", "2026-02-13", "6p-7:30p", "", "dance"),
  ev("Wolf Pack Disco Dance Fundraiser w/ DJ John", "Rogers Park Elementary", "Anchorage", "2026-02-13", "6p-8p", "", "dance"),
  ev("Aurora Glow Dance w/ DJ Spencer Lee", "Sand Lake Elementary", "Anchorage", "2026-02-13", "6p-8p", "", "dance"),
  ev("Harry Potter and the Chamber of Secrets in Concert", "Alaska Center for the Performing Arts", "Anchorage", "2026-02-13", "7:30p-10p", ""),
  ev("Bria Skonberg", "Alaska Center for the Performing Arts", "Anchorage", "2026-02-13", "7:30p-9:20p", ""),
  ev("Pulse Dance Company: Myth Behavin’", "UAA Main Stage", "Anchorage", "2026-02-13", "7:30p-9:30p", "", "dance"),
  ev("Boots, Beer, & Ballads Country Night w/ DJ Rico", "Pink Cadillac", "Anchorage", "2026-02-13", "7p-10p", ""),
  ev("Friday Night Dance Social", "Anchorage Social Dance Club", "Anchorage", "2026-02-13", "7p-11p", "", "dance"),
  ev("Karaoke Friday at the Eagles!", "The Fraternal Order of Eagles Aerie 4207", "Anchorage", "2026-02-13", "7p-12a", ""),
  ev("Chugiak & Eagle River Drama: The Music Man", "Chugiak High School", "Anchorage", "2026-02-13", "7p-9:30p", ""),
  ev("Midnight Sun Theater: Pyrates!", "UAA Fine Arts Building", "Anchorage", "2026-02-13", "7p-9p", "", "theatre"),
  ev("Divorce Court of the Dead: A Comedy Roast Battle", "The Whale’s Tail", "Anchorage", "2026-02-13", "7p-9p", "", "comedy"),
  ev("John Larson & The Pit Viperz", "Van’s Dive Bar", "Anchorage", "2026-02-13", "8:30p-?", ""),
  ev("IndigiVIBES: A Love Letter to Queer Indigenous Joy and Liberation", "Momentum Studios", "Anchorage", "2026-02-13", "8p-10:30p", ""),
  ev("Sweet Cheeks Cabaret: Hot & Bothered - A Burlesque ode to Rom-Com", "Broken Blender", "Anchorage", "2026-02-13", "8p-10p", ""),
  ev("R&B: Rhythm & Bobba Valentine’s Vibes", "49th Supply Co", "Anchorage", "2026-02-13", "8p-11p", ""),
  ev("Karaoke w/ DJ Charms", "Broken Blender", "Anchorage", "2026-02-13", "8p-12a", ""),
  ev("West Coast Swing Lesson", "Arctic Academie de Danse", "Anchorage", "2026-02-13", "8p-9p", "", "dance"),
  ev("Los Anchorage vol. 4 w/ Flow Lounge, SixStar, JDWP, Twiin, D.Loading, and Perdue", "Koot’s", "Anchorage", "2026-02-13", "9:30a-2:30a", ""),
  ev("DJ JRock", "Flattop Pizza & Pool", "Anchorage", "2026-02-13", "9:30p-12a", ""),
  ev("Live Music w/ The Acoustic Oosik", "Humpy’s", "Anchorage", "2026-02-13", "9:30p-1a", ""),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2026-02-13", "9p-11:30p", ""),
  ev("Friday Night Dance Social", "Arctic Academie de Danse", "Anchorage", "2026-02-13", "9p-11p", "", "dance"),
  ev("Friday Night Dance Lounge", "Alaska Dance Promotions", "Anchorage", "2026-02-13", "9p-1a", "", "dance"),
  ev("Danger Money Band", "The Carousel Lounge", "Anchorage", "2026-02-13", "9p-1a", ""),
  ev("Blast From The Past", "Time Out Lounge", "Anchorage", "2026-02-13", "9p-2:30a", ""),

  // ═══ EAGLE RIVER — Friday February 13th ═══
  ev("A Very Cheesey Valentine's Eve Karaoke 5p-??", "The Goods", "Eagle River", "2026-02-13", "", ""),
  ev("Lucky in Love (or Not) w/ Marc Brown", "The International Hotel & Bar", "Eagle River", "2026-02-13", "10p-2a", ""),
  ev("Darkstar", "Kharacter’s", "Eagle River", "2026-02-13", "10p-2a", ""),
  ev("Free Family Ice Skating", "Daubenspeck Family Park", "Eagle River", "2026-02-13", "1p-4p", ""),
  ev("Family Movie Night", "Gerrish Library", "Eagle River", "2026-02-13", "3p-5:30p", ""),
  ev("Free Screening: For the Love of JAMHI", "Glacier Cinemas", "Eagle River", "2026-02-13", "4:30p-6p", ""),
  ev("5 Hearts on Franklin: A Valentines Voyage", "Franklin Street", "Eagle River", "2026-02-13", "4p-8:30p", ""),
  ev("Fireside Lecture: Submerged Archeology", "Mendenhall Glacier Visitor Center", "Eagle River", "2026-02-13", "5:30p-?", ""),
  ev("\"Weirdcore\" The 40th Annual Wearable Art Show", "Main Street Gallery", "Eagle River", "2026-02-13", "5p-7p", ""),
  ev("Sunny Porch Community Folk Revival & Recording Release Party", "The Crystal Saloon", "Eagle River", "2026-02-13", "5p-8p", "", "community"),
  ev("Friday Night Sober Lounge", "Kachemak Bay Recovery Connection", "Eagle River", "2026-02-13", "6p-10p", ""),
  ev("Pluto, the Kuiper Belt and the Oort Clout", "Marie Drake Planetarium", "Eagle River", "2026-02-13", "6p-7p", ""),
  ev("Hwy9", "VFW 9785", "Eagle River", "2026-02-13", "7:30p-?", ""),
  ev("Complexities of Love Variety Show", "Sheldon Community Arts Hanger", "Eagle River", "2026-02-13", "7p-10:15p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2026-02-13", "7p-11p", ""),
  ev("Shaun Pacarro (from H3)", "Silver Fox Inn", "Eagle River", "2026-02-13", "7p-11p", ""),
  ev("Karaoke Night", "Warrior Zone", "Eagle River", "2026-02-13", "7p-12a", ""),
  ev("Stand Up Comedy w/ Dana Gould", "Pioneer Park Theater", "Eagle River", "2026-02-13", "7p-9p", "", "comedy"),
  ev("The Creel Play by Kate Rich", "Kenai Arts Center", "Eagle River", "2026-02-13", "7p-9p", "", "theatre"),
  ev("Square Dance w/ the Free Radicals", "The Creek Street Cabaret", "Eagle River", "2026-02-13", "7p-9p", "", "dance"),
  ev("Karaoke Night", "Schwabenhof", "Eagle River", "2026-02-13", "8p-11p", ""),
  ev("Live at the Sitz: Jerry Wessling Band", "Sitzmark", "Eagle River", "2026-02-13", "9p-12a", ""),
  ev("Open Mic", "Pioneer Bar", "Eagle River", "2026-02-13", "9p-1a", ""),
  ev("Valentine's Ballroom Bash", "Four Corner’s Lounge", "Eagle River", "2026-02-13", "9p-1a", ""),
  ev("Music At the Catch", "The CATCH Restaurant & Bar", "Eagle River", "2026-02-13", "9p-1a", ""),

  // ═══ ANCHORAGE — Saturday February 14th ═══
  ev("Bell Bottoms & Broken Hearts w/ The Vintage Retro", "Koot’s", "Anchorage", "2026-02-14", "10:30p-2:30a", ""),
  ev("Valentine's Dance Party w/ DJ Cross", "Williwaw Social", "Anchorage", "2026-02-14", "10p-2a", "", "dance"),
  ev("Be My Valentine Storytime", "Loussac Library", "Anchorage", "2026-02-14", "11a-12p", "", "community"),
  ev("The Music Man", "Chugiak High School", "Anchorage", "2026-02-14", "1p-3:30p & 7p-9:30p", ""),
  ev("Silas Wade Live", "Arctic Valley Ski Area", "Anchorage", "2026-02-14", "1p-3p", ""),
  ev("Weekly Family Skate w/ Music & Hot Chocolate", "Westchester Lagoon", "Anchorage", "2026-02-14", "1p-3p", ""),
  ev("MusiCal Live", "Arctic Valley Ski Area", "Anchorage", "2026-02-14", "3:30p-5:30p", "", "theatre"),
  ev("Candlelight: Valentine's Day Special ft. \"Romeo and Juliet\"", "49th State Brewing", "Anchorage", "2026-02-14", "4p-5p", ""),
  ev("Spring Fling: 80’s Night", "Alaska Botanical Garden", "Anchorage", "2026-02-14", "5p-8p", ""),
  ev("For Love and Music: A Valentine's Day Special w/ Choice Bit of Calico & Good Company", "Williwaw Social", "Anchorage", "2026-02-14", "5p-9:45p", ""),
  ev("Prom 1988! A Valentines Day Costume Dance Party w/ Blackwater Railroad & The Whiskey Fish", "49th State Brewing", "Anchorage", "2026-02-14", "6:30p-?", "", "dance"),
  ev("Scared Scriptless Improv Valentine's Show", "The Nave Spenard", "Anchorage", "2026-02-14", "6:30p-9:30p", "", "comedy"),
  ev("14th Annual DJTA Walk of Lights 2026", "Liewer Community Trail", "Anchorage", "2026-02-14", "6p-8p", ""),
  ev("Piano Bar Saturdays w/ MJ Riemann", "Gumbo House", "Anchorage", "2026-02-14", "6p-9p", ""),
  ev("Machu Picchu by INCA, The Peruvian Ensemble", "Alaska Center for the Performing Arts", "Anchorage", "2026-02-14", "7:30p-9:30p", ""),
  ev("Little Shop of Horrors Live", "West High School", "Anchorage", "2026-02-14", "7p-9p", ""),
  ev("Aquarius Party with DJ Big Gay Mike", "Organic Oasis", "Anchorage", "2026-02-14", "8p-?", ""),
  ev("Heated Rivalry Dance Party", "Beartooth Theatrepub", "Anchorage", "2026-02-14", "8p-12:30p", "", "dance"),
  ev("DJ JRock", "Flattop Pizza & Pool", "Anchorage", "2026-02-14", "9:30p-12a", ""),
  ev("Black Heart Ball w/ Live Music from The Red Flags", "Humpy’s", "Anchorage", "2026-02-14", "9:30p-1a", ""),
  ev("Dance Lessons & Social Dance", "Anchorage Social Dance Club", "Anchorage", "2026-02-14", "9:30p-2a", "", "dance"),
  ev("Eerie Flats", "Van’s Dive Bar", "Anchorage", "2026-02-14", "9p-?", ""),
  ev("Weekly Karaoke Contest", "Oriental Garden", "Anchorage", "2026-02-14", "9p-1:30a", ""),
  ev("Live Music Lonely Hearts Party", "Blarney Stone", "Anchorage", "2026-02-14", "9p-12a", ""),
  ev("Danger Money's Farewell Show & Bill's Birthday Bash", "The Carousel Lounge", "Anchorage", "2026-02-14", "9p-1a", ""),
  ev("Double Vision 2026 An EDM B2B Night", "Koot’s", "Anchorage", "2026-02-14", "9p-2a", ""),

  // ═══ EAGLE RIVER — Saturday February 14th ═══
  ev("Second Saturday Shenanigans", "Kodiak Marketplace", "Eagle River", "2026-02-14", "10:30p-11:30", ""),
  ev("Sweetheart’s Relay 2-miler", "Savikko Park", "Eagle River", "2026-02-14", "10a-?", ""),
  ev("Valentines Photo Booth & Meeting w/ Bluey", "Ken’s Garden Center", "Eagle River", "2026-02-14", "10a-5p", ""),
  ev("Cupid After Dark with DJ Theme", "The International Hotel & Bar", "Eagle River", "2026-02-14", "10p-?", ""),
  ev("Pit Viperz", "Kharacter’s", "Eagle River", "2026-02-14", "10p-2a", ""),
  ev("Haines Winterfest", "Southeast Alaska State Fairgrounds", "Eagle River", "2026-02-14", "11a-?", "", "festival"),
  ev("Valentine’s Day Crafts & Dance Party", "Fairbanks Children’s Museum", "Eagle River", "2026-02-14", "11a-4p", "", "dance"),
  ev("Second Saturday Free Entry", "Pratt Museum", "Eagle River", "2026-02-14", "11a-4p", ""),
  ev("Valentine’s GHOST Wheel Throwing Experience", "The Pottery Jungle", "Eagle River", "2026-02-14", "3p-5p & 6p-8p", ""),
  ev("Valentines Skate Night", "Starter Block", "Eagle River", "2026-02-14", "4p-6p", ""),
  ev("Daddy Daughter Dance", "Sterling Community Center", "Eagle River", "2026-02-14", "4p-6p", "", "dance"),
  ev("Bandandy", "Hatcher Pass Lodge", "Eagle River", "2026-02-14", "4p-7p", ""),
  ev("A Cozy Date Night with Steady Going", "Devil’s Club Brewing", "Eagle River", "2026-02-14", "5:30p-7:30", ""),
  ev("Murder on the Bayou: Mardi Gras Mystery Party", "Last Frontier CAC", "Eagle River", "2026-02-14", "5p-8p", ""),
  ev("Date Night Paint Night & Charcuterie", "Valdez Brewing", "Eagle River", "2026-02-14", "5p-8p", ""),
  ev("Open Skate w/ Gnomeo & Juliet Movie", "Polar Ice", "Eagle River", "2026-02-14", "6p-8p", ""),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Eagle River", "2026-02-14", "6p-8p", ""),
  ev("Valentine Pre-Fixe Dinner w/ Music by Poly Alfonso", "The Hearth Eatery", "Eagle River", "2026-02-14", "6p-9p", ""),
  ev("Valentine’s Date Night & Horseback Rides", "Silver Legacy Stables", "Eagle River", "2026-02-14", "6p-9p", ""),
  ev("Juneau Vaudeville Presents: \"Love & Lust\"", "The Crystal Saloon", "Eagle River", "2026-02-14", "7:30p-?", ""),
  ev("Music on the Couch at the Cabaret", "The Creek Street Cabaret", "Eagle River", "2026-02-14", "7:30p-9p", ""),
  ev("Haines Winterfest: Kat to Koot 2026", "Fairweather Ski Works", "Eagle River", "2026-02-14", "7a-?", "", "festival"),
  ev("Complexities of Love Variety Show", "Sheldon Community Arts Hanger", "Eagle River", "2026-02-14", "7p-10:15p", ""),
  ev("Unplugged: Ken Peltier and Friends", "Palmer Alehouse", "Eagle River", "2026-02-14", "7p-10p", ""),
  ev("Valentine’s Day 80’s Prom w/ I Like Robots", "Odd Man Rush", "Eagle River", "2026-02-14", "7p-11p", ""),
  ev("Karaoke", "American Legion Post 15", "Eagle River", "2026-02-14", "7p-11p", ""),
  ev("The Creel Play by Kate Rich", "Pier One Theatre Inc.", "Eagle River", "2026-02-14", "7p-8:15p", "", "theatre"),
  ev("Second Saturdays at Seven: Cabaret Night", "The Palace Theater", "Eagle River", "2026-02-14", "7p-8:30p", ""),
  ev("Tom Letson & Ned Gaines", "Lat 65 Brewing Co.", "Eagle River", "2026-02-14", "7p-9p", ""),
  ev("Stand Up Comedy w/ Dana Gould", "Pioneer Park Theater", "Eagle River", "2026-02-14", "7p-9p", "", "comedy"),
  ev("Between the Sheets Trivia", "Alice’s Champagne Palace", "Eagle River", "2026-02-14", "7p-9p", ""),
  ev("Wearable Art Extravaganza: Camp", "Centennial Hall Convention Center", "Eagle River", "2026-02-14", "8p-10p", ""),
  ev("Dance Party", "Fairview Inn", "Eagle River", "2026-02-14", "8p-1a", "", "dance"),
  ev("X-Country Ski Winter Adventures", "Chena Lake", "Eagle River", "2026-02-14", "9a-3p", ""),
  ev("2010's Hit Late Night Party w/ DJ Delli", "The Cabin", "Eagle River", "2026-02-14", "9p-?", ""),
  ev("Live at the Sitz: Jerry Wessling Band", "Sitzmark", "Eagle River", "2026-02-14", "9p-12a", ""),
  ev("Valentine's Bash with Carlos!/UNO", "North Pole Alehouse", "Eagle River", "2026-02-14", "9p-12a", ""),
  ev("Karaoke Night", "Pioneer Bar", "Eagle River", "2026-02-14", "9p-1a", ""),
  ev("Music At the Catch", "The CATCH Restaurant & Bar", "Eagle River", "2026-02-14", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Eagle River", "2026-02-14", "9p-2a", ""),

  // ═══ ANCHORAGE — Sunday February 15th ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2026-02-15", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2026-02-15", "10p-2a", ""),
  ev("Adrienne McVey Live", "Arctic Valley Ski Area", "Anchorage", "2026-02-15", "12p-2:30p", ""),
  ev("2026 Chinese New Year’s Celebration", "Dimond High School", "Anchorage", "2026-02-15", "12p-4p", ""),
  ev("Dragon & Lion Dance Training", "Asian Cultural Center", "Anchorage", "2026-02-15", "3p-5p", "", "dance"),
  ev("The Fantasticks", "Cyrano’s Theatre Company", "Anchorage", "2026-02-15", "3p-5p", ""),
  ev("Open Mic & Jam", "VFW Post 1685", "Anchorage", "2026-02-15", "4:30p-8:30p", ""),
  ev("A Tribute to Wicked Wanda", "Koot’s", "Anchorage", "2026-02-15", "4p-8p", ""),
  ev("Country Dance Nights: Line Dancing & Swing", "Anchorage Social Dance Club", "Anchorage", "2026-02-15", "6:30p-10p", "", "dance"),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2026-02-15", "6p-10p", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2026-02-15", "6p-9", ""),
  ev("Auditions for Ruthless!", "Anchorage Community Theatre", "Anchorage", "2026-02-15", "6p-9p", ""),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2026-02-15", "8:30p-10p", "", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2026-02-15", "8:30p-1a", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2026-02-15", "8p-11p", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2026-02-15", "9p-12a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2026-02-15", "9p-2a", ""),

  // ═══ EAGLE RIVER — Sunday February 15th ═══
  ev("2026 Tour of Tsalteshi", "Tsalteshi Trails", "Eagle River", "2026-02-15", "11:30a-4p", ""),
  ev("Miles Klehini Ski Classic", "Mile 25", "Eagle River", "2026-02-15", "12a-?", "", "community"),
  ev("Argentine Tango Lesson & Open Dance", "The Spur", "Eagle River", "2026-02-15", "1p-3p", "", "dance"),
  ev("Mat-Su Orchestra Fundraising Performance", "Palmer Train Depot", "Eagle River", "2026-02-15", "3p-?", ""),
  ev("Wearable Art Extravaganza: Camp", "Centennial Hall Convention Center", "Eagle River", "2026-02-15", "3p-5p", ""),
  ev("4th Annual Valentine's Ties & Tiaras", "Pioneer Park Centennial Center", "Eagle River", "2026-02-15", "3p-6p", ""),
  ev("Open Mic Night", "The Creek Street Cabaret", "Eagle River", "2026-02-15", "6:30p-9:30p", ""),
  ev("Sunday Social Dancing & Lessons", "Red Dog Saloon", "Eagle River", "2026-02-15", "6p-9p", ""),
  ev("The Creel Play by Kate Rich", "Pier One Theatre Inc.", "Eagle River", "2026-02-15", "7p-8:15p", "", "theatre"),
  ev("Karaoke", "Four Corner’s Lounge", "Eagle River", "2026-02-15", "8p-?", ""),

  // ═══ ANCHORAGE — Monday February 16th ═══
  ev("Weekly Jazz Jam", "Fire Island Bakery @ K Street Market", "Anchorage", "2026-02-16", "6:30p-9:30p", ""),
  ev("Sweet Cheeks Cabaret: Burlesque Basics Class w/ DeeDee S.Emme", "Studio 49", "Anchorage", "2026-02-16", "7p-8p", "", "community"),
  ev("Learn to Square Dance", "Anchorage Social Dance Club", "Anchorage", "2026-02-16", "7p-9p", "", "dance"),
  ev("The Monday Mic w/ Boobs", "Koot’s", "Anchorage", "2026-02-16", "9p-12a", ""),

  // ═══ EAGLE RIVER — Monday February 16th ═══
  ev("JR Ski Patrol Day (Ages 13-17)", "Skeetawk", "Eagle River", "2026-02-16", "10a-1p", ""),
  ev("Friends of Mike Morgan Song Circle", "The Goods", "Eagle River", "2026-02-16", "5p-7p", ""),
  ev("Stories of Free Rivers & Wild Salmon", "Palmer Train Depot", "Eagle River", "2026-02-16", "6:30p-8:30p", ""),
  ev("Gospel Choir Workshops", "Juneau Arts & Culture Center", "Eagle River", "2026-02-16", "6:30p-8p", ""),

  // ═══ ANCHORAGE — Tuesday February 17th ═══
  ev("Sitka Music Festival Perfomance", "Anchorage Museum", "Anchorage", "2026-02-17", "12p-?", "", "festival"),
  ev("Mardi Gras w/ music by The Blue Dixie Combo", "49th State Brewing", "Anchorage", "2026-02-17", "6:30p-?", ""),
  ev("Beginner Kizomba Class", "Alaska Dance Promotions", "Anchorage", "2026-02-17", "6p-7p", "", "community"),
  ev("All Ages Buckarooos Night", "Pink Cadillac", "Anchorage", "2026-02-17", "7p-11p", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2026-02-17", "8p-2a", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2026-02-17", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday February 17th ═══
  ev("Storytime at the Pratt: Black History Month", "Pratt Museum", "Eagle River", "2026-02-17", "10:30a-11:30a", "", "community"),
  ev("Toddler Story Time", "Soldotna Library", "Eagle River", "2026-02-17", "10:30a-11a", "", "community"),
  ev("Storytime at Ken’s", "Ken’s Garden Center", "Eagle River", "2026-02-17", "10a-11a", "", "community"),
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Eagle River", "2026-02-17", "6:30p-10p", ""),
  ev("Winter Nights: Community Game Night", "Alaska Sea Life Center", "Eagle River", "2026-02-17", "6:30p-8p", "", "community"),
  ev("Pedals, Pints, & Poles", "Lat 65 Brewing Co.", "Eagle River", "2026-02-17", "6p-9p", ""),
  ev("Industry Night with DJ Red", "Four Corner’s Lounge", "Eagle River", "2026-02-17", "8p-?", ""),
  ev("Jazz Jam Tuesday", "The Crystal Saloon", "Eagle River", "2026-02-17", "8p-11p", ""),

  // ═══ ANCHORAGE — Wednesday February 18th ═══
  ev("West High Choir Benefit Concert and Silent Auction 6p-??", "West High School", "Anchorage", "2026-02-18", "", ""),
  ev("Free Community Storytime", "Alaska Zoo", "Anchorage", "2026-02-18", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2026-02-18", "10p-1a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2026-02-18", "10p-2a", ""),
  ev("UAA Dance & Cheer Class: Junior Varsity", "Fairview Recreation Center", "Anchorage", "2026-02-18", "5:30p-6:445p", "", "dance"),
  ev("Skater Tots: Free Skate Rentals", "Chanshtnu Muldoon Park", "Anchorage", "2026-02-18", "5:30p-7:30p", ""),
  ev("International Folk Dancing", "Anchorage Social Dance Club", "Anchorage", "2026-02-18", "6:30p-8p", ""),
  ev("Alaska Fighting Championship 173", "Sullivan Arena", "Anchorage", "2026-02-18", "7:30p-11p", ""),
  ev("Line Dance Wednesdays", "Pink Cadillac", "Anchorage", "2026-02-18", "7p-12a", "", "dance"),
  ev("Anchorage DJ Meetup Hosted by DJ Spencer Lee", "Crimson", "Anchorage", "2026-02-18", "7p-9p", ""),
  ev("Country Night", "Koot’s", "Anchorage", "2026-02-18", "8p-2a", ""),
  ev("Karaoke", "Van’s Dive Bar", "Anchorage", "2026-02-18", "9p-1a", ""),

  // ═══ EAGLE RIVER — Wednesday February 18th ═══
  ev("Family Storytime", "Gerrish Library", "Eagle River", "2026-02-18", "10:30a-11:30a", "", "community"),
  ev("Bouncing Babes Story Time", "Soldotna Library", "Eagle River", "2026-02-18", "10:30a-11a", "", "community"),
  ev("Kenai Chamber Small Business Symposium & Awards Ceremony", "Kenai Chamber of Commerce &Visitor Center", "Eagle River", "2026-02-18", "10a-3p", ""),
  ev("The Ukulele Group", "Inn at Creek Street", "Eagle River", "2026-02-18", "3:45p-4:45p", ""),
  ev("Karaoke Nights", "The Goods", "Eagle River", "2026-02-18", "5:30p-8p", ""),
  ev("Popular Music Trivia", "Kodiak Island Brewing Company", "Eagle River", "2026-02-18", "6:30p-7:30p", ""),
  ev("Open Mic", "Schwabenhof", "Eagle River", "2026-02-18", "7:30p-11p", ""),
  ev("West Coast Sing Wednesday", "Four Corner’s Lounge", "Eagle River", "2026-02-18", "7:30p-9:30p", ""),
  ev("The Glacier Quartet", "Porcupine Theater", "Eagle River", "2026-02-18", "7p-?", ""),
  ev("Comedy For A Cause w/ Damien Speranza: Alaska Firefighters", "Palmer Alehouse", "Eagle River", "2026-02-18", "7p-9p", "", "comedy"),
  ev("Open Mic Night", "The Crystal Saloon", "Eagle River", "2026-02-18", "8p-11:30p", ""),
  ev("Karaoke Night with Rocky!", "The Spur", "Eagle River", "2026-02-18", "8p-11p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Eagle River", "2026-02-18", "8p-11p", ""),
  ev("Open Mic Night", "Fairview Inn", "Eagle River", "2026-02-18", "8p-1a", ""),
  ev("Open Mic Night", "Yukon Bar", "Eagle River", "2026-02-18", "8p-2a", ""),

  // ═══ ANCHORAGE — Thursday February 19th ═══
  ev("Chugiak & Eagle River Drama: The Music Man", "Chugiak High School", "Anchorage", "2026-02-19", "7p-9:30p", ""),

  // ═══ ANCHORAGE — Friday February 20th ═══
  ev("Chugiak & Eagle River Drama: The Music Man", "Chugiak High School", "Anchorage", "2026-02-20", "7p-9:30p", ""),

  // ═══ ANCHORAGE — Saturday February 21st ═══
  ev("Chugiak & Eagle River Drama: The Music Man", "Chugiak High School", "Anchorage", "2026-02-21", "7p-9:30p", ""),

  // ═══ EAGLE RIVER — Wednesday March 11th ═══
  ev("Karaoke Night with Rocky!", "The Spur", "Eagle River", "2026-03-11", "8p-11p", ""),

  // ═══ JUNEAU — Wednesday March 11th ═══
  ev("The Ukulele Group", "Inn at Creek Street", "Juneau", "2026-03-11", "3:45p-4:45p", ""),
  ev("Open Mic", "Schwabenhof", "Juneau", "2026-03-11", "7:30p-11p", ""),
  ev("West Coast Sing Wednesday", "Four Corner’s Lounge", "Juneau", "2026-03-11", "7:30p-9:30p", ""),
  ev("Bon Debarras", "Sheldon Community Arts Hanger", "Juneau", "2026-03-11", "7p-3p", ""),
  ev("Open Mic Night", "The Crystal Saloon", "Juneau", "2026-03-11", "8p-11:30p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Juneau", "2026-03-11", "8p-11p", ""),
  ev("Open Mic Night", "Fairview Inn", "Juneau", "2026-03-11", "8p-1a", ""),
  ev("Open Mic Night", "Yukon Bar", "Juneau", "2026-03-11", "8p-2a", ""),

  // ═══ EAGLE RIVER — Thursday March 12th ═══
  ev("Preschool Storytime", "Fairbanks Library", "Eagle River", "2026-03-12", "10:30a-11:15p & 1:30p-2:15p", "", "community"),
  ev("Family Storytime", "Chugiak-Eagle River Library", "Eagle River", "2026-03-12", "10:30a-11p", "", "community"),
  ev("Tanana Lakes Springfest", "Tanana Lakes Recreation Area", "Eagle River", "2026-03-12", "11a-3p", "", "festival"),
  ev("Open Skate: Paw Patrol", "Polar Ice", "Eagle River", "2026-03-12", "2:45p-4:45p", ""),
  ev("St. Patrick’s Beer Run & Shoe Demo", "HooDoo Brewing", "Eagle River", "2026-03-12", "5:45p-?", "", "community"),
  ev("Stand-Up Comedy w/ Geoffrey Asmus", "HooDoo Brewing", "Eagle River", "2026-03-12", "9p-10p", "", "comedy"),

  // ═══ GIRDWOOD — Thursday March 12th ═══
  ev("Piano Music by Erica", "AJ’s Old Town Steakhouse & Tavern", "Girdwood", "2026-03-12", "6p-8p", ""),
  ev("Karaoke Night", "Alibi Bar & Café", "Girdwood", "2026-03-12", "9p-12:30a", ""),

  // ═══ JUNEAU — Thursday March 12th ═══
  ev("Pre-School Story Time", "Soldotna Library", "Juneau", "2026-03-12", "10:30a-11a", "", "community"),
  ev("Juneau Audubon Society presents: Birds and Artificial Light At Night", "Marie Drake Planetarium", "Juneau", "2026-03-12", "6:30p-?", ""),
  ev("Thursday Night Dance Social: Texas Two-Step", "Chapel by the Lake", "Juneau", "2026-03-12", "6:30p-8:30p", "", "dance"),
  ev("Krew Fewd 2", "Sheldon Community Arts Hanger", "Juneau", "2026-03-12", "6p-?", ""),
  ev("Unplugged: The Robotz + Turbo and the Butterfly", "Palmer Alehouse", "Juneau", "2026-03-12", "6p-9p", ""),
  ev("Ketchikan Arts & Humanities Council: Arts Report", "105.3 FM KRBD", "Juneau", "2026-03-12", "8:20a-8:35a", ""),
  ev("Karaoke Night", "The Crystal Saloon", "Juneau", "2026-03-12", "8p-12a", ""),
  ev("Karaoke Thursdays with Rocky Barnette", "North Pole Alehouse", "Juneau", "2026-03-12", "8p-12a", ""),
  ev("Karaoke", "Yukon Bar", "Juneau", "2026-03-12", "8p-2a", ""),
  ev("Open Mic", "Alaskan Hotel and Bar", "Juneau", "2026-03-12", "9p-11p", ""),

  // ═══ ANCHORAGE — Friday March 13th ═══
  ev("Schaefer Mueller Live", "Susitna Brewing", "Anchorage", "2026-03-13", "6p-9p", ""),

  // ═══ EAGLE RIVER — Friday March 13th ═══
  ev("Latin Night w/ DJ Osito", "The International Hotel & Bar", "Eagle River", "2026-03-13", "10p-?", ""),
  ev("Dustbowl Revival and Hot Club of Cowtown", "Hering Auditorium", "Eagle River", "2026-03-13", "7:30p-?", ""),
  ev("Acoustic Oosik & Wrick Luv", "Odd Man Rush", "Eagle River", "2026-03-13", "7p-11p", ""),
  ev("Karaoke Night", "Warrior Zone", "Eagle River", "2026-03-13", "7p-12a", ""),
  ev("Stand-Up Comedy w/ Geoffrey Asmus", "The Basement", "Eagle River", "2026-03-13", "8p-10p", "", "comedy"),

  // ═══ GIRDWOOD — Friday March 13th ═══
  ev("Live Music with Cody Burch", "Kachemak Bay Recovery Connection", "Girdwood", "2026-03-13", "7p-9:30p", ""),
  ev("Live at the Sitz: SunDog", "Sitzmark", "Girdwood", "2026-03-13", "9p-12a", ""),
  ev("Open Mic", "Pioneer Bar", "Girdwood", "2026-03-13", "9p-1a", ""),

  // ═══ JUNEAU — Friday March 13th ═══
  ev("Karaoke w/ Edencraft", "The Goods", "Juneau", "2026-03-13", "5:30p-8p", ""),
  ev("Live Music w/ Allie Keck", "Alaskana Social Club", "Juneau", "2026-03-13", "5p-8p", ""),
  ev("2nd Annual Luck of the Food Trucks", "Vintage Food Truck Park", "Juneau", "2026-03-13", "6p-9p", ""),
  ev("Oosik Movie Night: The Last King", "Sheldon Community Arts Hanger", "Juneau", "2026-03-13", "7:30p-?", ""),
  ev("Juneau Big Band: Dust Off the Rust", "Juneau Arts & Culture Center", "Juneau", "2026-03-13", "7p-10p", ""),
  ev("Unplugged: Ken Peltier & Friends", "Palmer Alehouse", "Juneau", "2026-03-13", "7p-10p", ""),
  ev("Karaoke", "American Legion Post 15", "Juneau", "2026-03-13", "7p-11p", ""),
  ev("HarpDaddy meets Jesse James", "Silver Fox Inn", "Juneau", "2026-03-13", "7p-11p", ""),
  ev("Square Dance w/ the Free Radicals", "The Creek Street Cabaret", "Juneau", "2026-03-13", "7p-9p", "", "dance"),
  ev("Romeo & Juliet", "Kodiak Arts Council", "Juneau", "2026-03-13", "7p-9p", ""),
  ev("Karaoke Night", "Schwabenhof", "Juneau", "2026-03-13", "8p-11p", ""),
  ev("Schaefer Mueller & The Neon Highway", "Four Corner’s Lounge", "Juneau", "2026-03-13", "9p-1a", ""),

  // ═══ ANCHORAGE — Saturday March 14th ═══
  ev("SCA Kingdom of the West: Eskalya Pi Day", "Jewel Lake Parish", "Anchorage", "2026-03-14", "10:30a-5p", ""),
  ev("Velvet La La", "Koot’s", "Anchorage", "2026-03-14", "10:30p-2a", ""),
  ev("Sweet Cheeks Cabaret: Burlesque Basics Class w/ DeeDee S.Emme", "Studio 49", "Anchorage", "2026-03-14", "11a-12p", "", "community"),
  ev("NOCHE DE BANDA, Corridos Y CUMBIA", "Pink Cadillac", "Anchorage", "2026-03-14", "11p-3a", ""),
  ev("Heartburn Chili Cook Off", "Anchorage House of Harley Davidson", "Anchorage", "2026-03-14", "12p-3p", ""),
  ev("Spenard Song Circle Annual Fundraiser Songwriter Workshop, Open Mic, & Performances by Emma Hill, Evan Phillips, & Rosie Rush", "The Nave Spenard", "Anchorage", "2026-03-14", "2p-9p", ""),
  ev("Spring Break with Pete Kartsounes Live", "Arctic Valley Ski Area", "Anchorage", "2026-03-14", "3:30p-6:30p", ""),
  ev("Fur Rondy Melodrama: Pirates of the Aleutians- Saloon Girls Gone Wild", "49th State Brewing", "Anchorage", "2026-03-14", "3p-5p & 7:30p-9:30p", ""),
  ev("The Good ol' Good Ones and Jacob & Ken", "Blarney Stone", "Anchorage", "2026-03-14", "6p-11:30", ""),
  ev("ComedySportz: All-Ages Improv Comedy", "Williwaw Social", "Anchorage", "2026-03-14", "6p-8:30p", "", "comedy"),
  ev("All-Ages Annnual Spring Break Dance", "The Workshop", "Anchorage", "2026-03-14", "6p-8p", "", "dance"),
  ev("Irish Food Specials & Live Irish Music w/ Bosca Ceoil", "49th State Brewing", "Anchorage", "2026-03-14", "6p-9p", ""),
  ev("Piano Bar Saturdays w/ MJ Riemann", "Gumbo House", "Anchorage", "2026-03-14", "6p-9p", ""),
  ev("Dustbowl Revival & Hot Club of Cowtown", "Alaska Center for the Performing Arts", "Anchorage", "2026-03-14", "7:30p-10p", ""),
  ev("Urban Kiz Dance Lesson & Social Dance", "Arctic Academie de Danse", "Anchorage", "2026-03-14", "7p-11p", "", "dance"),
  ev("Rubber Ptarmigan: Frambwahaha Comedy Show", "Turnagain Brewing", "Anchorage", "2026-03-14", "7p-8:30p", "", "comedy"),
  ev("Zoo Lights", "Alaska Zoo", "Anchorage", "2026-03-14", "7p-9:30p", ""),
  ev("Marvel: Alaska’s First Female Aviator", "Anchorage Community Theatre", "Anchorage", "2026-03-14", "7p-9p", ""),
  ev("Mad Myrna's Presents: Grease", "Mad Myrna’s", "Anchorage", "2026-03-14", "7p-9p", ""),
  ev("2026 Shamrock Shuffle", "Beartooth Theatrepub", "Anchorage", "2026-03-14", "8a-?", ""),
  ev("Turbo Hell, The Ouija BeeGees, and Dreamcat", "Van’s Dive Bar", "Anchorage", "2026-03-14", "8p-?", ""),
  ev("Sweet Cheeks Cabaret: Vaudeville Vibes, A Variety Show", "Broken Blender", "Anchorage", "2026-03-14", "8p-10p", ""),
  ev("Karaoke w/ DJ Charms", "Broken Blender", "Anchorage", "2026-03-14", "8p-12a", ""),
  ev("Pints & Pub Songs with Rogues & Wenches", "Humpy’s", "Anchorage", "2026-03-14", "8p-1a", ""),
  ev("St. PRACTICE Day Dance Party w/ DJ Militant & DJ Cross", "Williwaw Social", "Anchorage", "2026-03-14", "8p-2a", "", "dance"),
  ev("DJ JRock", "Flattop Pizza & Pool", "Anchorage", "2026-03-14", "9:30p-12a", ""),
  ev("Dance Lessons & Social Dance", "Anchorage Social Dance Club", "Anchorage", "2026-03-14", "9:30p-2a", "", "dance"),
  ev("Methodology Snowboard Event", "Hilltop Ski Area", "Anchorage", "2026-03-14", "9p-?", ""),
  ev("Weekly Karaoke Contest", "Oriental Garden", "Anchorage", "2026-03-14", "9p-1:30a", ""),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2026-03-14", "9p-11:30p", ""),
  ev("Live Music w/ Santoro", "The Carousel Lounge", "Anchorage", "2026-03-14", "9p-1a", ""),
  ev("Spenard Boiler Room XV", "Koot’s", "Anchorage", "2026-03-14", "9p-2:30a", ""),
  ev("Get Lucky Underwear Party w/ Bodelia James", "The Raven Bar", "Anchorage", "2026-03-14", "9p-2:30a", ""),
  ev("Blast From The Past", "Time Out Lounge", "Anchorage", "2026-03-14", "9p-2:30a", ""),

  // ═══ EAGLE RIVER — Saturday March 14th ═══
  ev("Marc Brown and The Blues Crew", "The International Hotel & Bar", "Eagle River", "2026-03-14", "10p-?", ""),
  ev("Missoula Children Theatre's Red Riding Hood", "Pioneer Park Theatre", "Eagle River", "2026-03-14", "3p-?", "", "theatre"),
  ev("Murder on the Bayou: Mardi Gras Mystery Party", "Last Frontier CAC", "Eagle River", "2026-03-14", "5p-8p", ""),
  ev("Open Skate: St. Patty's The Luck of the Irish", "Polar Ice", "Eagle River", "2026-03-14", "6p-8p", ""),
  ev("St.Paddy's w/ Steve Brown & the Bailers", "Lat 65 Brewing Co.", "Eagle River", "2026-03-14", "7:30p-?", ""),
  ev("Cabaret Night: Second Saturdays at Seven", "Palace Theater", "Eagle River", "2026-03-14", "7p-8:30p", ""),
  ev("Stand-Up Comedy w/ Geoffrey Asmus", "Pakalolo Coffee Shop", "Eagle River", "2026-03-14", "7p-9p", "", "comedy"),
  ev("The Ken Peltier Band", "Odd Man Rush", "Eagle River", "2026-03-14", "8p-10p", ""),

  // ═══ GIRDWOOD — Saturday March 14th ═══
  ev("Second Saturday at the Pratt: Free Admission", "Pratt Museum", "Girdwood", "2026-03-14", "11a-4p", ""),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Girdwood", "2026-03-14", "6p-8p", ""),
  ev("Live at the Sitz: SunDog", "Sitzmark", "Girdwood", "2026-03-14", "9p-12a", ""),
  ev("Karaoke Night", "Pioneer Bar", "Girdwood", "2026-03-14", "9p-1a", ""),

  // ═══ JUNEAU — Saturday March 14th ═══
  ev("Second Saturday St. Patrick’s Shenanigans", "Kodiak Market Place", "Juneau", "2026-03-14", "10:30p-?", ""),
  ev("Aurora Realms: A Gamer Convention", "Borough Community Gym", "Juneau", "2026-03-14", "11a-6p", ""),
  ev("Sled for Hope 2026", "Willow Community Center", "Juneau", "2026-03-14", "12p-?", ""),
  ev("St. Paddys Pie-Day Shenanigans w/ Moon Doggies Live", "Valdez Brewing", "Juneau", "2026-03-14", "2p-9p", ""),
  ev("Bug In A Rug", "Hatcher Pass Lodge", "Juneau", "2026-03-14", "4p-7p", ""),
  ev("St. Patrick’s Saturday w/ Live Music & Food", "Bleeding Heart Brewery", "Juneau", "2026-03-14", "4p-8p", ""),
  ev("St. Paddy’s Beer Choir", "Devil’s Club Brewing", "Juneau", "2026-03-14", "6:30p-?", ""),
  ev("Schaefer Mueller", "Last Frontier Brewing", "Juneau", "2026-03-14", "6p-9p", ""),
  ev("Blue Nagoon ft. Short Notice", "The Crystal Saloon", "Juneau", "2026-03-14", "7:30p-?", ""),
  ev("Comedy & Cocktails", "Breeze Inn Seward", "Juneau", "2026-03-14", "7:30p-?", "", "comedy"),
  ev("Contra Dance w/ Full Circle", "St. Ann’s Parish Hall", "Juneau", "2026-03-14", "7:30p-10:30p", "", "dance"),
  ev("The Original Artist Grind", "Sitka Performing Arts Center", "Juneau", "2026-03-14", "7p-?", ""),
  ev("Roland Roberts Band: Oosik Afterparty", "Sheldon Community Arts Hanger", "Juneau", "2026-03-14", "7p-?", ""),
  ev("Karaoke", "American Legion Post 15", "Juneau", "2026-03-14", "7p-11p", ""),
  ev("Glacier Blues Band", "Silver Fox Inn", "Juneau", "2026-03-14", "7p-11p", ""),
  ev("Romeo & Juliet", "Kodiak Arts Council", "Juneau", "2026-03-14", "7p-9p", ""),
  ev("Sitka EDM: Aurora Show", "Odess Theater", "Juneau", "2026-03-14", "8:30p-12a", ""),
  ev("Fire on McGinnis", "Red Dog Saloon", "Juneau", "2026-03-14", "8p-11p", ""),
  ev("The Getting Stranger", "Fairview Inn", "Juneau", "2026-03-14", "8p-1a", ""),
  ev("St. Patrick’s Day w/ DJ Traxx", "North Pole Alehouse", "Juneau", "2026-03-14", "9p-?", ""),
  ev("Schaefer Mueller & The Neon Highway", "Four Corner’s Lounge", "Juneau", "2026-03-14", "9p-1a", ""),
  ev("Karaoke", "Yukon Bar", "Juneau", "2026-03-14", "9p-2a", ""),
  ev("St. Patrick's Dance Party w/ DJ Hankerchief", "Yukon Bar", "Juneau", "2026-03-14", "9p-2a", "", "dance"),

  // ═══ ANCHORAGE — Sunday March 15th ═══
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2026-03-15", "10p-2a", ""),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2026-03-15", "10p-2a", ""),
  ev("Ales for Tails: Brunch for A Cause", "The Wildbirch Hotel", "Anchorage", "2026-03-15", "11a-?", "", "community"),
  ev("MST’s Improv Dojo", "Midnight Sun Theater", "Anchorage", "2026-03-15", "12:30p-2p", ""),
  ev("Spring Break with Pete Kartsounes Live", "Arctic Valley Ski Area", "Anchorage", "2026-03-15", "12:30p-3:30p", ""),
  ev("Maslenitsa", "Point Waranzof", "Anchorage", "2026-03-15", "1p-4p", ""),
  ev("The Oscars Watch Party", "Beartooth Theatrepub", "Anchorage", "2026-03-15", "2p-?", ""),
  ev("Rousted By Bulls Live", "Arctic Valley Ski Area", "Anchorage", "2026-03-15", "3:30p-6:30p", ""),
  ev("Marvel: Alaska’s First Female Aviator", "Anchorage Community Theatre", "Anchorage", "2026-03-15", "3p-5p", ""),
  ev("Benefit Night for Tyrone Palmer", "VFW Post 1685", "Anchorage", "2026-03-15", "4:30p-8:30p", ""),
  ev("Country Dance Nights: Line Dancing & Swing", "Anchorage Social Dance Club", "Anchorage", "2026-03-15", "6:30p-10p", "", "dance"),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2026-03-15", "6p-10p", ""),
  ev("Irish Food Specials & Live Irish Music w/ Andrea Childers", "49th State Brewing", "Anchorage", "2026-03-15", "6p-9p", ""),
  ev("Open Mic Night", "Susitna Brewing", "Anchorage", "2026-03-15", "6p-9p", ""),
  ev("International Cha Cha Lesson & Open Dance", "Changepoint", "Anchorage", "2026-03-15", "7:45p-10p", "", "dance"),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2026-03-15", "8:30p-10p", "", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2026-03-15", "8:30p-1a", ""),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2026-03-15", "8p-11p", ""),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2026-03-15", "9p-12a", ""),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2026-03-15", "9p-2a", ""),

  // ═══ EAGLE RIVER — Sunday March 15th ═══
  ev("Stoney Comedy Brunch w/ Geoffrey Asmus", "Pakalolo Coffee Shop", "Eagle River", "2026-03-15", "12p-2p", "", "comedy"),
  ev("Loteria Night", "Jalapeno’s Mexican Restaurant", "Eagle River", "2026-03-15", "5p-8p", ""),

  // ═══ JUNEAU — Sunday March 15th ═══
  ev("St. Paddy's Day Parade!", "Salmon Landing", "Juneau", "2026-03-15", "2p-3:30p", ""),
  ev("Romeo & Juliet", "Kodiak Arts Council", "Juneau", "2026-03-15", "2p-4p", ""),
  ev("Juneau Piano Series: Andrew Brownell", "Juneau Arts & Culture Center", "Juneau", "2026-03-15", "3p-4:30p", ""),
  ev("Sunday Social Dancing & Lessons", "Red Dog Saloon", "Juneau", "2026-03-15", "6p-9p", ""),
  ev("Open Mic Night w/ Joe Williams", "The Creek Street Cabaret", "Juneau", "2026-03-15", "6p-9p", ""),
  ev("Karaoke", "Four Corner’s Lounge", "Juneau", "2026-03-15", "8p-?", ""),

  // ═══ ANCHORAGE — Monday March 16th ═══
  ev("Weekly Jazz Jam", "Fire Island Bakery @ K Street Market", "Anchorage", "2026-03-16", "6:30p-9:30p", ""),
  ev("Auditions for “Gaslight (Angel Street)”", "Writer’s Block Bookstore & Cafe", "Anchorage", "2026-03-16", "6p-?", ""),
  ev("Sweet Cheeks Cabaret: Burlesque Basics Class w/ DeeDee S.Emme", "Studio 49", "Anchorage", "2026-03-16", "7p-8p", "", "community"),
  ev("Learn to Square Dance", "Anchorage Social Dance Club", "Anchorage", "2026-03-16", "7p-9p", "", "dance"),
  ev("The Monday Mic w/ Boobs", "Koot’s", "Anchorage", "2026-03-16", "9p-12a", ""),

  // ═══ JUNEAU — Monday March 16th ═══
  ev("Story Time: \"Salmon Stream\"", "Kenai Chamber of Commerce &Visitor Center", "Juneau", "2026-03-16", "11a-?", "", "community"),
  ev("Friends of Mike Morgan Song Circle", "The Goods", "Juneau", "2026-03-16", "5p-7p", ""),

  // ═══ ANCHORAGE — Tuesday March 17th ═══
  ev("Preschool Storytime: Music", "JBER Library", "Anchorage", "2026-03-17", "10:30a-11p", ""),
  ev("All Ages Buckarooos Night", "Pink Cadillac", "Anchorage", "2026-03-17", "7p-11p", ""),
  ev("Trail Tales Storytelling Series", "Anchorage Museum", "Anchorage", "2026-03-17", "7p-9p", "", "community"),
  ev("Live Irish Music from Whiskey Jacks", "Van’s Dive Bar", "Anchorage", "2026-03-17", "8p-?", ""),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2026-03-17", "8p-2a", ""),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2026-03-17", "9p-12a", ""),

  // ═══ EAGLE RIVER — Tuesday March 17th ═══
  ev("Post Library Story Time", "Wainwright Last Community Activity Center", "Eagle River", "2026-03-17", "11a-12p", "", "community"),
  ev("St. Patrick's Day w/ Red Hackle Band", "The International Hotel & Bar", "Eagle River", "2026-03-17", "3p-?", ""),
  ev("Pedals, Pints, & Poles", "Lat 65 Brewing Co.", "Eagle River", "2026-03-17", "6p-9p", ""),
  ev("Anchorage Firefighters IAFF Local 1264's Pipes & Drums Band", "Odd Man Rush", "Eagle River", "2026-03-17", "7p-?", ""),

  // ═══ GIRDWOOD — Tuesday March 17th ═══
  ev("Storytime at the Pratt: Outstanding Otters", "Pratt Museum", "Girdwood", "2026-03-17", "10:30a-11:30a", "", "community"),
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Girdwood", "2026-03-17", "6:30p-10p", ""),

  // ═══ JUNEAU — Tuesday March 17th ═══
  ev("Toddler Story Time", "Soldotna Library", "Juneau", "2026-03-17", "10:30a-11a", "", "community"),
  ev("Storytime at Ken’s", "Ken’s Garden Center", "Juneau", "2026-03-17", "10a-11a", "", "community"),
  ev("St. Patrick's Day Dinner w/ Live Music", "Sitka Elks #1662", "Juneau", "2026-03-17", "5p-8p", ""),
  ev("Jesse Ruben Live", "Nonna’s Osteria", "Juneau", "2026-03-17", "7p", ""),
  ev("Michael Kirkpatrick", "The Crystal Saloon", "Juneau", "2026-03-17", "8p-?", ""),
  ev("Bear Bones & DJ Thomas Brooks", "The Creek Street Cabaret", "Juneau", "2026-03-17", "8p-?", ""),
  ev("Industry Night with DJ Red", "Four Corner’s Lounge", "Juneau", "2026-03-17", "8p-?", ""),
  ev("Jazz Jam Tuesday", "The Crystal Saloon", "Juneau", "2026-03-17", "8p-11p", ""),

  // ═══ ANCHORAGE — Wednesday March 18th ═══
  ev("Free Community Storytime", "Alaska Zoo", "Anchorage", "2026-03-18", "10:30a-11a", "", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2026-03-18", "10p-1a", ""),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2026-03-18", "10p-2a", ""),
  ev("International Folk Dancing", "Anchorage Social Dance Club", "Anchorage", "2026-03-18", "6:30p-8p", ""),
  ev("Poetry Parlay", "Organic Oasis", "Anchorage", "2026-03-18", "6p-8p", ""),
  ev("Community Crafting and Movie Night: Spirited Away", "The Art Lounge AK", "Anchorage", "2026-03-18", "6p-9p", "", "community"),
  ev("UAA Jazz Ensemble Presents Voices of Jazz, A Celebration of Jazz Songs", "UAA Main Stage Theatre", "Anchorage", "2026-03-18", "7:30p-9p", ""),
  ev("Tyrone & Friends", "907 Alehouse", "Anchorage", "2026-03-18", "7p-10p", ""),
  ev("Line Dance Wednesdays", "Pink Cadillac", "Anchorage", "2026-03-18", "7p-12a", "", "dance"),
  ev("Country Night", "Koot’s", "Anchorage", "2026-03-18", "8p-2a", ""),
  ev("Karaoke", "Van’s Dive Bar", "Anchorage", "2026-03-18", "9p-1a", ""),

  // ═══ EAGLE RIVER — Wednesday March 18th ═══
  ev("Karaoke Night with Rocky!", "The Spur", "Eagle River", "2026-03-18", "8p-11p", ""),

  // ═══ JUNEAU — Wednesday March 18th ═══
  ev("Bouncing Babes Story Time", "Soldotna Library", "Juneau", "2026-03-18", "10:30a-11a", "", "community"),
  ev("The Ukulele Group", "Inn at Creek Street", "Juneau", "2026-03-18", "3:45p-4:45p", ""),
  ev("Karaoke Nights", "The Goods", "Juneau", "2026-03-18", "5:30p-8p", ""),
  ev("Open Mic", "Schwabenhof", "Juneau", "2026-03-18", "7:30p-11p", ""),
  ev("West Coast Sing Wednesday", "Four Corner’s Lounge", "Juneau", "2026-03-18", "7:30p-9:30p", ""),
  ev("Open Mic Night", "The Crystal Saloon", "Juneau", "2026-03-18", "8p-11:30p", ""),
  ev("Karaoke", "Alaskan Hotel and Bar", "Juneau", "2026-03-18", "8p-11p", ""),
  ev("Open Mic Night", "Fairview Inn", "Juneau", "2026-03-18", "8p-1a", ""),
  ev("Open Mic Night", "Yukon Bar", "Juneau", "2026-03-18", "8p-2a", ""),

  // ═══ JUNEAU — Friday March 20th ═══
  ev("Comedy Show w/ Eddie Ifft", "Everett’s Restaurant", "Juneau", "2026-03-20", "7:30p-?", "", "comedy"),

  // ═══ HOPE — Saturday March 21st ═══
  ev("Up A Mountain", "Creekbend Company", "Hope", "2026-03-21", "6p-9p", ""),

  // ═══ EAGLE RIVER — Wednesday July 15th ═══
  ev("Karaoke Night w/ KJ Smoke", "Homestead Lounge", "Eagle River", "2026-07-15", "8p-12a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ FAIRBANKS — Wednesday July 15th ═══
  ev("Golden Heart Revue", "The Palace Theater", "Fairbanks", "2026-07-15", "8:15p-9:15p", "https://www.akvisit.com/palace-theatre?fbclid=IwY2xjawR7CNdleHRuA2FlbQIxMABicmlkETFZQTc5Q1NiWm16bDhNY0RZc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrK_LgMLEgXX7mcIrxnzr8jTJ9RaI_Lt7mvGG48tR-IMPMLVZRSzqN26Ewga_aem_RqdeQf5Ku3SEWvV41NwhHg"),
  ev("Karaoke Night with Rocky!", "The Spur", "Fairbanks", "2026-07-15", "8p-11p", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ JUNEAU — Wednesday July 15th ═══
  ev("Open Mic Night", "The Crystal Saloon", "Juneau", "2026-07-15", "8p-11:30p", "https://www.facebook.com/photo/?fbid=1507990474662996&set=a.752367223558662"),
  ev("Karaoke", "Alaskan Hotel and Bar", "Juneau", "2026-07-15", "8p-11p", "https://www.facebook.com/BrokenBlenderAK"),

  // ═══ KETCHIKAN — Wednesday July 15th ═══
  ev("Music on the Dock: Dave, Hannah, and Chazz", "Ketchikan Dock", "Ketchikan", "2026-07-15", "12p-1p", "https://www.ketchikanarts.org/programs-events/music-on-the-dock-summer-concert-series.html"),
  ev("The Ukulele Group", "Inn at Creek Street", "Ketchikan", "2026-07-15", "3:45p-4:45p", "https://www.ketchikanarts.org/events-performances/full-arts-calendar.html/event/2026/06/03/1780533900/the-ukelele-group-/521570"),

  // ═══ PALMER — Wednesday July 15th ═══
  ev("Mario Carboni Live", "Bleeding Heart Brewery", "Palmer", "2026-07-15", "5p-7p", "https://www.facebook.com/events/2217529165745705/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("West Coast Sing Wednesday", "Four Corner’s Lounge", "Palmer", "2026-07-15", "7:30p-9:30p", "https://www.facebook.com/photo/?fbid=1411992579757709&set=gm.1053059570049116"),

  // ═══ SEWARD — Wednesday July 15th ═══
  ev("Karaoke with Raunchy Rachel", "Yukon Bar", "Seward", "2026-07-15", "9p-1a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ SOLDOTNA — Wednesday July 15th ═══
  ev("Bouncing Babes Story Time", "Soldotna Library", "Soldotna", "2026-07-15", "10:30a-11a", "https://www.facebook.com/events/843086674966253/843086688299585/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mech", "community"),
  ev("Levitt Amp Music Series: Kuf Knotz & Christine Elise w/ Guy Patterson Opening", "Soldotna Creek Park", "Soldotna", "2026-07-15", "6p-9p", "https://www.vansdivebaralaska.com/music-schedule"),

  // ═══ TALKEETNA — Wednesday July 15th ═══
  ev("Jimmy Sandy", "Denali Brewing Company", "Talkeetna", "2026-07-15", "6p-8", "https://www.facebook.com/photo/?fbid=1590844869717640&set=pb.100063764251860.-2207520000"),

  // ═══ WASILLA — Wednesday July 15th ═══
  ev("Open Mic", "Schwabenhof", "Wasilla", "2026-07-15", "7:30p-11p", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=2020d45d02&e=be0392aff7"),

  // ═══ CHUGIAK — Thursday July 16th ═══
  ev("Free Baseball Game: Chugiak-Eagle River Chinooks vs the Oilers", "Lee Jordan Field", "Chugiak", "2026-07-16", "6p-?", "https://www.facebook.com/events/1320416256920916/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "community"),

  // ═══ COOPER LANDING — Thursday July 16th ═══
  ev("Seth Malone Band (Request Night)", "Gwin’s Lodge", "Cooper Landing", "2026-07-16", "7p-10p", "https://www.facebook.com/photo/?fbid=1625154909614942&set=a.954924113304695"),

  // ═══ EAGLE RIVER — Thursday July 16th ═══
  ev("Magic by Robbie Cannon", "Chugiak-Eagle River Library", "Eagle River", "2026-07-16", "12p-1p", "https://www.facebook.com/events/1012360481382853/"),
  ev("Dance Lessons with Shufflin Country Style", "Homestead Lounge", "Eagle River", "2026-07-16", "8p-9p", "https://www.facebook.com/photo/?fbid=956976277112870&set=gm.992446826503991", "dance"),
  ev("Country Night w/ DJ AumanJoy", "Homestead Lounge", "Eagle River", "2026-07-16", "9p-2a", "https://www.facebook.com/HomesteadLounge"),

  // ═══ ESTER — Thursday July 16th ═══
  ev("Open Mic Night", "Malemute Saloon & Gold Camp", "Ester", "2026-07-16", "7:30p-11:30p", "https://www.facebook.com/photo/?fbid=1507990474662996&set=a.752367223558662"),

  // ═══ FAIRBANKS — Thursday July 16th ═══
  ev("Backyard Country BBQ w/ The Band Perry", "Tanana Valley State Fair Grounds", "Fairbanks", "2026-07-16", "5-?", "https://www.facebook.com/events/1564385905104121/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Free Youth Concert Band Rehearsals", "Fairbanks Community Band Hall", "Fairbanks", "2026-07-16", "5p-6p", "https://www.facebook.com/events/1521883622657906/1521883639324571/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Golden Heart Revue", "The Palace Theater", "Fairbanks", "2026-07-16", "8:15p-9:15p", "https://www.akvisit.com/palace-theatre?fbclid=IwY2xjawR7CNdleHRuA2FlbQIxMABicmlkETFZQTc5Q1NiWm16bDhNY0RZc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrK_LgMLEgXX7mcIrxnzr8jTJ9RaI_Lt7mvGG48tR-IMPMLVZRSzqN26Ewga_aem_RqdeQf5Ku3SEWvV41NwhHg"),
  ev("Open Mic Night", "The Marlin", "Fairbanks", "2026-07-16", "8p-11p", "https://www.facebook.com/photo/?fbid=1507990474662996&set=a.752367223558662"),
  ev("Karaoke with Angel", "The International Hotel & Bar", "Fairbanks", "2026-07-16", "8p-2a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ GIRDWOOD — Thursday July 16th ═══
  ev("Natalie Gelman Live", "Gerrish Community Library", "Girdwood", "2026-07-16", "6p-9p", "https://www.facebook.com/events/988716667353734/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Natalie Gelman LIVE", "Jack Sprat", "Girdwood", "2026-07-16", "6p-9p", "https://www.facebook.com/events/988716667353734/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),

  // ═══ HOMER — Thursday July 16th ═══
  ev("Guided tours of the Botanical Gardens, Homestead Garden, & Forest Trails.", "Pratt Museum", "Homer", "2026-07-16", "11a-12p", "https://www.facebook.com/events/27331907429732951/27331907486399612/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22"),
  ev("Community Jam Sessions", "Homer Council on the Arts", "Homer", "2026-07-16", "6:30p-9p", "https://www.facebook.com/events/987084407583120/987084464249781/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mech"),
  ev("Piano Music by Erica", "AJ’s Old Town Steakhouse & Tavern", "Homer", "2026-07-16", "6p-8p", "https://www.homeralaska.org/event/piano-by-sunrise-kilcher/19/"),
  ev("Our Town by Thornton Wilder", "Pier One Theatre", "Homer", "2026-07-16", "7:30p-10p", "https://www.facebook.com/events/1571372071056224/1571372104389554/?active_tab=about"),
  ev("USETHEMAP, Louser, & DiscopianS", "The Porcupine Theater", "Homer", "2026-07-16", "7:30p-9:30p", "https://www.facebook.com/events/1030543806076472/"),
  ev("Karaoke Night", "Alibi Bar & Café", "Homer", "2026-07-16", "9p-12:30a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ JUNEAU — Thursday July 16th ═══
  ev("Argentine Tango Dance Series", "Juneau Social Dance", "Juneau", "2026-07-16", "6:30p-8:30p", "https://www.facebook.com/events/27462717590082205/27462717613415536/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "dance"),
  ev("Karaoke Night", "The Crystal Saloon", "Juneau", "2026-07-16", "8p-12a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),
  ev("Open Mic", "Alaskan Hotel and Bar", "Juneau", "2026-07-16", "9p-11p", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=2020d45d02&e=be0392aff7"),

  // ═══ KENAI — Thursday July 16th ═══
  ev("Milfs Night Out with Ellie Nelson", "Skeet’s Dive Bar", "Kenai", "2026-07-16", "7p-9p", "https://www.instagram.com/p/DaG8UJ4Bijd/"),

  // ═══ KETCHIKAN — Thursday July 16th ═══
  ev("Music on the Dock: Evan Porter", "Ketchikan Dock", "Ketchikan", "2026-07-16", "12p-1p", "https://www.ketchikanarts.org/events-performances/"),
  ev("Ketchikan Arts & Humanities Council: Arts Report", "105.3 FM KRBD", "Ketchikan", "2026-07-16", "8:20a-8:35a", "https://www.ketchikanarts.org/events-performances/full-arts-calendar.html"),
  ev("Open Mic Night", "Totem Bar", "Ketchikan", "2026-07-16", "8p-10p", "https://www.facebook.com/photo/?fbid=1507990474662996&set=a.752367223558662"),

  // ═══ MCCARTHY — Thursday July 16th ═══
  ev("Open Mic Night", "The Golden Saloon", "McCarthy", "2026-07-16", "", "https://www.facebook.com/photo/?fbid=1507990474662996&set=a.752367223558662"),

  // ═══ NORTH POLE — Thursday July 16th ═══
  ev("Karaoke Thursdays with Rocky Barnette", "North Pole Alehouse", "North Pole", "2026-07-16", "8p-12a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ PALMER — Thursday July 16th ═══
  ev("Wayward Shot & Red Flags", "Palmer Alehouse", "Palmer", "2026-07-16", "7p-10p", "https://www.facebook.com/events/1859832864979762/"),

  // ═══ SEWARD — Thursday July 16th ═══
  ev("Dance Night w/ DJ Waitwat", "Yukon Bar", "Seward", "2026-07-16", "9p-2a", "https://www.facebook.com/photo.php?fbid=1495877732548962&set=pb.100063802472762.-2207520000&type=3", "dance"),

  // ═══ SKAGWAY — Thursday July 16th ═══
  ev("Summer Reading Program: History & Archeology w/ the NPS", "Skagway Library", "Skagway", "2026-07-16", "10:30a-11:30a", "https://www.facebook.com/events/27438069035811649/27438069075811645/?active_tab=about", "community"),

  // ═══ SOLDOTNA — Thursday July 16th ═══
  ev("Preschool Storytime", "Soldotna Library", "Soldotna", "2026-07-16", "10:30a-11a", "https://www.facebook.com/events/26994401710190027/26994401746856690/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "community"),

  // ═══ TALKEETNA — Thursday July 16th ═══
  ev("Mario Carboni", "Mountain High Pizza Pie", "Talkeetna", "2026-07-16", "7p-10p", "https://www.facebook.com/events/2217529165745705/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),

  // ═══ WASILLA — Thursday July 16th ═══
  ev("Songwriters In The Round w/ Matt Hopper, Aspenyarrow, Malia Hoagland, and Dawson Gentleman", "Everett’s", "Wasilla", "2026-07-16", "6:30p-9p", "https://www.facebook.com/events/930046933470229/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),

  // ═══ EAGLE RIVER — Friday July 17th ═══
  ev("Storytime & Songs in the Park", "Chugiak-Eagle River Library", "Eagle River", "2026-07-17", "10:30a-1:30p", "https://www.facebook.com/events/958920490083498/958920513416829/", "community"),
  ev("The Cosmic Party", "Odd Man Rush", "Eagle River", "2026-07-17", "7p-11p", "https://www.facebook.com/events/1296701228711448/"),
  ev("DJ AumanJoy", "Homestead Lounge", "Eagle River", "2026-07-17", "9p-2a", "https://www.facebook.com/HomesteadLounge"),

  // ═══ ESTER — Friday July 17th ═══
  ev("Casey Smith Project", "Malemute Saloon & Gold Camp", "Ester", "2026-07-17", "7:30p-11:30p", "https://malemutesaloon.com/schedule/"),

  // ═══ FAIRBANKS — Friday July 17th ═══
  ev("Music Together Generations Class", "Raven Landing Senior Community", "Fairbanks", "2026-07-17", "11:30a-12:15p", "https://www.facebook.com/events/1698370238161849/1698370254828514/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Boy Bands vs Girl Bands Open Skate", "Polar Ice", "Fairbanks", "2026-07-17", "4p-5:30p", "https://www.akconcerts.com/bands"),
  ev("6th Annual Pioneer Park Wine Mixer & Salmon Jam", "Alaska Salmon Bake", "Fairbanks", "2026-07-17", "5:30p-10:30p", "https://www.facebook.com/events/1407969337831597"),
  ev("Mamma Mia Open Skate", "Polar Ice", "Fairbanks", "2026-07-17", "6p-8p", "https://www.facebook.com/events/1330673068580289/"),
  ev("Golden Heart Revue", "The Palace Theater", "Fairbanks", "2026-07-17", "8:15p-9:15p", "https://www.akvisit.com/palace-theatre?fbclid=IwY2xjawR7CNdleHRuA2FlbQIxMABicmlkETFZQTc5Q1NiWm16bDhNY0RZc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrK_LgMLEgXX7mcIrxnzr8jTJ9RaI_Lt7mvGG48tR-IMPMLVZRSzqN26Ewga_aem_RqdeQf5Ku3SEWvV41NwhHg"),
  ev("Bag Lady Sue", "The International Hotel & Bar", "Fairbanks", "2026-07-17", "8p-2a", "https://www.facebook.com/events/1203288841697416/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),

  // ═══ HAINES — Friday July 17th ═══
  ev("Open Mic Night", "Pioneer Bar", "Haines", "2026-07-17", "9p-1a", "https://www.facebook.com/photo/?fbid=1507990474662996&set=a.752367223558662"),

  // ═══ HOMER — Friday July 17th ═══
  ev("Acoustic Oosik", "Kharacters Alaskan Bar", "Homer", "2026-07-17", "10p-2a", "https://www.facebook.com/kharacters.bar"),
  ev("Ivan Dennis Live", "Homestead Restaurant", "Homer", "2026-07-17", "6p-10p", "https://www.facebook.com/events/697165803418202/"),
  ev("Our Town by Thornton Wilder", "Pier One Theatre", "Homer", "2026-07-17", "7:30p-10p", "https://www.facebook.com/events/1571372071056224/1571372104389554/?active_tab=about"),

  // ═══ HOPE — Friday July 17th ═══
  ev("The National Parks, Sam Burchfield & Bre Kennedy", "Creekbend Co.", "Hope", "2026-07-17", "11a-2p", "https://www.creekbendco.com/event"),
  ev("Anson Eggerss", "Dirty Skillet", "Hope", "2026-07-17", "6p-10p", "https://www.dirtyskillet.com/music"),

  // ═══ JUNEAU — Friday July 17th ═══
  ev("Rugby Night", "Juneau-Douglas High School", "Juneau", "2026-07-17", "6:30p-8:30p", "https://www.facebook.com/events/1227911459242350/1227911472575682/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22me"),
  ev("Rainforest Romp Contra Dance Weekend", "St. Anne’s Parish Hall", "Juneau", "2026-07-17", "7:30p-10:30p", "https://www.facebook.com/events/914692727804915", "dance"),
  ev("Studio 54 x GiGi: Gigi'd Birthday Drag Show & Dance", "Alaskan Hotel and Bar", "Juneau", "2026-07-17", "8p-?", "https://www.facebook.com/events/2060905101129143/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "comedy"),

  // ═══ KENAI — Friday July 17th ═══
  ev("American Peasants", "Vagabond Inn", "Kenai", "2026-07-17", "7p-11p", "https://www.facebook.com/profile.php?id=100057161362056"),
  ev("Live Music w/ Guy Patterson", "Skeet’s Dive Bar", "Kenai", "2026-07-17", "9p-?", "https://www.vansdivebaralaska.com/music-schedule"),

  // ═══ KETCHIKAN — Friday July 17th ═══
  ev("2026 Fish Pirate`s Daughter", "Ted Ferry Civic Center", "Ketchikan", "2026-07-17", "7p-9:30p", "https://firstcityplayers.org/buy-tickets-%5Bvbo%5D"),
  ev("Original Alternative Pop w/ Abby London", "The Creek Street Cabaret", "Ketchikan", "2026-07-17", "7p-9p", "https://www.facebook.com/events/1373023591372973/"),
  ev("Live Music in the Café", "The New York Café", "Ketchikan", "2026-07-17", "7p-9p", "https://www.ketchikanarts.org/events-performances/"),

  // ═══ KODIAK — Friday July 17th ═══
  ev("Justin Morris & Company", "The Rendezvous", "Kodiak", "2026-07-17", "7p-12a", "https://www.kodiakrendezvous.com/live-music"),

  // ═══ MCCARTHY — Friday July 17th ═══
  ev("Red Flags Live", "The Golden Saloon", "McCarthy", "2026-07-17", "", "https://www.mccarthylodge.com/mccarthy-events/"),

  // ═══ PALMER — Friday July 17th ═══
  ev("Friday Fling Live Music w/ Mantra Luna & Sergio Adams", "Downtown Palmer", "Palmer", "2026-07-17", "11a-6p", "https://www.facebook.com/FridayFlings"),
  ev("ABBAlaska", "Palmer Alehouse", "Palmer", "2026-07-17", "7p-10p", "https://www.facebook.com/events/1557927062622857/"),
  ev("Karaoke", "American Legion Post 15", "Palmer", "2026-07-17", "7p-11p", "https://www.facebook.com/BrokenBlenderAK"),

  // ═══ SELDOVIA — Friday July 17th ═══
  ev("Live Music w/ JD Cox", "Linwood Bar & Grill", "Seldovia", "2026-07-17", "", "https://www.linwoodbar.com/events/"),

  // ═══ SEWARD — Friday July 17th ═══
  ev("Storytime & Craft Activities", "Seward Community Library & Museum", "Seward", "2026-07-17", "12:30p-1p", "https://www.facebook.com/events/1596397651615519/1596397678282183/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "community"),
  ev("Live Music w/ Kuf Knotz & Christine Elise", "Flamingo Lounge", "Seward", "2026-07-17", "6:30p-9:30p", ""),
  ev("Nikki & The Skyrockets w/ UseTheMap & Louser", "Yukon Bar", "Seward", "2026-07-17", "9p-2a", "https://www.facebook.com/events/1736922737338830"),

  // ═══ SOLDOTNA — Friday July 17th ═══
  ev("Divas, Drinks, & Dancing w/ Red Onion Saloon", "Red Onion Saloon", "Soldotna", "2026-07-17", "9p-?", "https://www.facebook.com/photo/?fbid=1605527931578537&set=pcb.1605529138245083"),
  ev("Owen Macdonald Live", "The Duck Inn", "Soldotna", "2026-07-17", "9p-1a", "https://www.facebook.com/photo?fbid=1654167456714555&set=a.502707521860560"),

  // ═══ STERLING — Friday July 17th ═══
  ev("Good Company", "Naptowne Brewing Company", "Sterling", "2026-07-17", "6p-9p", "https://www.facebook.com/photo.php?fbid=1350898113758213&set=pb.100065141125889.-2207520000&type=3"),

  // ═══ TALKEETNA — Friday July 17th ═══
  ev("Live At Five Summer Concerts: John Roberts Y Pan Blanco", "Talkeetna Village Park", "Talkeetna", "2026-07-17", "5p-7p", "https://fairviewtalkeetna.com/pages/live-music"),
  ev("Mario Carboni", "Mountain High Pizza Pie", "Talkeetna", "2026-07-17", "7p-10p", "https://www.facebook.com/events/2217529165745705/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Blackwater Railroad Company w/ Sunflower Season", "Fairview Inn", "Talkeetna", "2026-07-17", "7p-11p", "https://www.facebook.com/events/2276668402739076/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("John Roberts y Pan Blanco", "Fairview Inn", "Talkeetna", "2026-07-17", "9p-1a", "https://fairviewtalkeetna.com/pages/live-music"),

  // ═══ WASILLA — Friday July 17th ═══
  ev("Live Music w/ Scott Helle", "Alaskana Social Club", "Wasilla", "2026-07-17", "6p-9p", "https://www.facebook.com/events/1383414717013836/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Karaoke Night", "Schwabenhof", "Wasilla", "2026-07-17", "8p-11p", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),
  ev("Electric Sands 2026 Music Festival", "Smith Drive", "Wasilla", "2026-07-17", "8p-5a", "https://www.eventbrite.com/e/dystraxion-presents-electric-sands-2026-tickets-1563880391349?aff=ehometext", "festival"),

  // ═══ ANCHORAGE — Saturday July 18th ═══
  ev("Tru Rhythm Entertainment: You Got Served", "Koots", "Anchorage", "2026-07-18", "10p-2a", "https://www.facebook.com/events/1564384791686660/?acontext=%7B%22event_action_history%22%3A%5b%7B%22surface%22%3A%22search%22%7D%2C%7B%22mechanism%22%3A%22attachment%22%2C%22surface%22%3A%22newsfeed%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Live Music at the Market", "Anchorage Weekend Market", "Anchorage", "2026-07-18", "11a-5p", "https://www.facebook.com/AnchorageWeekendDowntownMarket"),
  ev("Latin Night w/ DJ Mile", "Pink Cadillac", "Anchorage", "2026-07-18", "11p-3a", "https://www.facebook.com/events/909196661488345"),
  ev("Canicross Meetup", "Kincaid Park", "Anchorage", "2026-07-18", "12p-?", "https://www.facebook.com/events/4758077921092580/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "community"),
  ev("Hooligan Fest: All Ages Music & Arts Festival", "Delaney Park Strip", "Anchorage", "2026-07-18", "12p-10:30p", "https://www.facebook.com/events/delaney-park-strip/hooligan-fest-all-ages-music-arts-festival/1537946304633059/", "festival"),
  ev("Jazz on the Lawn w/ Alaska Jazz Workshop", "Anchorage Museum", "Anchorage", "2026-07-18", "12p-2p", "https://www.facebook.com/events/27022389210733263/27022389244066593/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Summer Outdoor Market", "Double Shovel Cider Co.", "Anchorage", "2026-07-18", "12p-6p", "https://www.facebook.com/events/1295749335879398/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "community"),
  ev("Rock The Hill Music Festival", "Hilltop Ski Area", "Anchorage", "2026-07-18", "1p-10p", "https://www.facebook.com/events/3197353453797961", "festival"),
  ev("907 Pro Wrestling: MidSummer Meltdown", "Arctic Rec Center", "Anchorage", "2026-07-18", "3p-6p", "https://www.facebook.com/events/1673335720597069/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("ABC Rooftop Dance Party w/ Rachel Monae, Bodelia James, Kizmet, & LSGNA", "Anchorage Brewing Company", "Anchorage", "2026-07-18", "4p-9p", "https://www.eventbrite.com/e/potassium-productions-anchorage-brewing-company-rooftop-takeover-tickets-1992559875225?aff=ehometext", "dance"),
  ev("Garden Grooves: Music in the Beer Garden", "49th State Brewery", "Anchorage", "2026-07-18", "5p-7p", "https://www.facebook.com/photo/?fbid=1267333412235644&set=gm.1017207420732481"),
  ev("Hot Honey Burlesque Show w/ Mayven Missbehavin' & Bird of Paradse", "49th State Brewery", "Anchorage", "2026-07-18", "5p-7p", "https://tickets.centertix.com/eventperformances.asp?evt=2169&_gl=1%2Aj4kn97%2A_gcl_au%2AMTIzMTQ2MTU0NC4xNzc5ODk2NjM1&fbclid=IwY2xjawTDpYFleHRuA2FlbQIxMABicmlkETFKektHaGdzWmpsbnAzZHVxc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHqJAOHFIZ5qzU4p8nroy-RSHX"),
  ev("Pop Piano Bar w/ MJ Riemann", "Gumbo House", "Anchorage", "2026-07-18", "6p-9p", "https://www.facebook.com/photo/?fbid=1556274459834673&set=a.500137705448359"),
  ev("Halloween in July: Ghouls Gone Wild w/ The Robotz, Epic!, DJ Militant, DJ Akira, & DJ Dev", "Koot’s", "Anchorage", "2026-07-18", "7:30p-2:30a", "https://www.facebook.com/events/2068671713861422/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Dance Social", "Anchorage Social Dance Club", "Anchorage", "2026-07-18", "7p-11p", "https://www.facebook.com/35PlusClub/posts/pfbid0P3DAjVBjcJUeKMh6BHeyzaw1okomixpw7yhapb7nfusfQXpb7YpEiaVj83rNxeA8l", "dance"),
  ev("Fine, Great & Sunflower Season", "Bernie’s Bungalow Lounge", "Anchorage", "2026-07-18", "8p-?", "https://www.instagram.com/p/Dax5hDuhv2Q/"),
  ev("Karaoke w/ DJ Charms", "Broken Blender", "Anchorage", "2026-07-18", "8p-12a", "https://www.facebook.com/BrokenBlenderAK"),
  ev("Muldoon Community Market", "Muldoon Chanshtnu Park", "Anchorage", "2026-07-18", "9:30a-3p", "https://www.facebook.com/events/942322318857990/942322338857988/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mech", "community"),
  ev("DJ JRock", "Flattop Pizza & Pool", "Anchorage", "2026-07-18", "9:30p-12a", "https://www.facebook.com/photo.php?fbid=1432955235502986&set=pb.100063655689037.-2207520000&type=3"),
  ev("Live Music w/ John J. Roberts Y Pan Blanco", "Humpy’s", "Anchorage", "2026-07-18", "9:30p-1a", "https://www.facebook.com/events/1061042166453984/"),
  ev("Weekly Karaoke Contest", "Oriental Garden", "Anchorage", "2026-07-18", "9p-1:30a", "https://www.facebook.com/Orientalgardenbestchinese"),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna’s", "Anchorage", "2026-07-18", "9p-11:30p", "https://madmyrnas.com/events"),
  ev("Nikki & The Skyrockets (from NJ)", "The Carousel Lounge", "Anchorage", "2026-07-18", "9p-1a", "https://www.carouselalaska.com/events"),
  ev("UseTheMap, The Nameless, & Louser", "Van’s Dive Bar", "Anchorage", "2026-07-18", "9p-1a", "https://www.vansdivebaralaska.com/music-schedule"),
  ev("Blast From The Past", "Time Out Lounge", "Anchorage", "2026-07-18", "9p-2:30a", "https://www.facebook.com/photo?fbid=10211867422076197&set=pcb.10211867422276202"),

  // ═══ BARROW — Saturday July 18th ═══
  ev("Storytime & Crafternoon", "Tuzzy Consortium Library", "Barrow", "2026-07-18", "1p-3p", "https://www.facebook.com/TuzzyConsortiumLibrary/", "community"),

  // ═══ COOPER LANDING — Saturday July 18th ═══
  ev("Ken Peltier Band", "Cooper Landing Brewing", "Cooper Landing", "2026-07-18", "6:30p-10p", "https://www.eventbrite.com/e/ken-peltier-band-tickets-1985756827125?aff=ehometext"),

  // ═══ ESTER — Saturday July 18th ═══
  ev("Ester Fest 2026", "Ester Community Park", "Ester", "2026-07-18", "2p-10p", "https://www.facebook.com/events/2394765841034268/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "festival"),
  ev("Back Street Social Club", "Malemute Saloon & Gold Camp", "Ester", "2026-07-18", "7:30p-11:30p", "https://malemutesaloon.com/schedule/"),

  // ═══ FAIRBANKS — Saturday July 18th ═══
  ev("Golden Days Kick Off Pet Adoption Event", "Humble Roots Beer Project", "Fairbanks", "2026-07-18", "12p-6p", "https://www.facebook.com/events/2042889772998254/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Katseye Vs Black Pink Open Skate", "Polar Ice", "Fairbanks", "2026-07-18", "5:30p-7:30p", "https://www.facebook.com/events/1016265284661234/"),
  ev("Crazy Train: America's Ozzy Osbourne Experience", "The Spur", "Fairbanks", "2026-07-18", "5p-8p", "https://www.facebook.com/events/2241280099741148/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Golden Gays Y2K Drag Show", "The Last Round Up Steak House", "Fairbanks", "2026-07-18", "7p-11:45p", "https://www.facebook.com/events/1743917077051634/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "comedy"),
  ev("Golden Heart Revue", "The Palace Theater", "Fairbanks", "2026-07-18", "8:15p-9:15p", "https://www.akvisit.com/palace-theatre?fbclid=IwY2xjawR7CNdleHRuA2FlbQIxMABicmlkETFZQTc5Q1NiWm16bDhNY0RZc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrK_LgMLEgXX7mcIrxnzr8jTJ9RaI_Lt7mvGG48tR-IMPMLVZRSzqN26Ewga_aem_RqdeQf5Ku3SEWvV41NwhHg"),
  ev("Bag Lady Sue", "The International Hotel & Bar", "Fairbanks", "2026-07-18", "8p-2a", "https://www.facebook.com/events/1203288841697416/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),

  // ═══ HAINES — Saturday July 18th ═══
  ev("Karaoke Night", "Pioneer Bar", "Haines", "2026-07-18", "9p-1a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ HOMER — Saturday July 18th ═══
  ev("Guy Patterson", "Kharacters Alaskan Bar", "Homer", "2026-07-18", "10p-2a", "https://www.vansdivebaralaska.com/music-schedule"),
  ev("Guided tours of the Botanical Gardens, Homestead Garden, & Forest Trails.", "Pratt Museum", "Homer", "2026-07-18", "11a-12p", "https://www.facebook.com/events/27331907429732951/27331907486399612/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22"),
  ev("Piano Music by Sunrise Kilcher", "AJ’s Old Town Steakhouse & Tavern", "Homer", "2026-07-18", "6p-8p", "https://www.homeralaska.org/event/piano-by-sunrise-kilcher/19/"),
  ev("Our Town by Thornton Wilder", "Pier One Theatre", "Homer", "2026-07-18", "7:30p-10p", "https://www.facebook.com/events/1571372071056224/1571372104389554/?active_tab=about"),

  // ═══ HOPE — Saturday July 18th ═══
  ev("The National Parks, Sam Burchfield & Bre Kennedy", "Creekbend Co.", "Hope", "2026-07-18", "11a-2p", "https://www.creekbendco.com/event"),
  ev("Anson Eggerss", "Dirty Skillet", "Hope", "2026-07-18", "6p-10p", "https://www.dirtyskillet.com/music"),
  ev("Pancake Feed, Cake Walk, & Puzzle Competition", "Hope Social Hall", "Hope", "2026-07-18", "8:30a-6p", "https://hopewagonrun.com/weekend-events/"),

  // ═══ JUNEAU — Saturday July 18th ═══
  ev("Andy Koch's Badd Dog Blues Society", "Alaskan Hotel and Bar", "Juneau", "2026-07-18", "7:30p-10p", "https://www.facebook.com/events/1367675531957665/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Rainforest Romp Contra Dance Weekend", "St. Anne’s Parish Hall", "Juneau", "2026-07-18", "8p-11p", "https://www.facebook.com/events/914692727804915", "dance"),
  ev("The Return Of Astronomar Ft. Sa'Moona", "The Crystal Saloon", "Juneau", "2026-07-18", "9p-?", "https://www.facebook.com/photo?fbid=1002054442428677&set=a.160104659956997"),

  // ═══ KENAI — Saturday July 18th ═══
  ev("Seth Freeman", "Vagabond Inn", "Kenai", "2026-07-18", "8p-11p", "https://www.facebook.com/profile.php?id=100057161362056"),
  ev("Live Music w/ Seth Malone", "Skeet’s Dive Bar", "Kenai", "2026-07-18", "9p-?", "https://www.facebook.com/photo/?fbid=1625154909614942&set=a.954924113304695"),

  // ═══ KETCHIKAN — Saturday July 18th ═══
  ev("Gays Eating Garlic Bread in the Park", "Ketchikan City Park", "Ketchikan", "2026-07-18", "12p-2p", "https://www.facebook.com/events/27508251792196811/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Virgin Voyages: Brilliant Lady Land Party", "Arctic Bar", "Ketchikan", "2026-07-18", "12p-6p", "https://www.facebook.com/events/1466272915541691/1466276532207996/?active_tab=about"),
  ev("Summer Saturdays at the Museum", "Tongass Historical Museum", "Ketchikan", "2026-07-18", "1p-3p", "https://www.facebook.com/events/873907959081409/873908012414737/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("2026 Fish Pirate`s Daughter", "Ted Ferry Civic Center", "Ketchikan", "2026-07-18", "7p-9:30p", "https://firstcityplayers.org/buy-tickets-%5Bvbo%5D"),

  // ═══ KODIAK — Saturday July 18th ═══
  ev("Justin Morris & Company", "The Rendezvous", "Kodiak", "2026-07-18", "7p-12a", "https://www.kodiakrendezvous.com/live-music"),

  // ═══ MCCARTHY — Saturday July 18th ═══
  ev("Red Flags Live", "The Golden Saloon", "McCarthy", "2026-07-18", "", "https://www.mccarthylodge.com/mccarthy-events/"),

  // ═══ PALMER — Saturday July 18th ═══
  ev("Mario Carboni", "Hatcher Pass Lodge", "Palmer", "2026-07-18", "4p-7p", "https://www.facebook.com/events/2217529165745705/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Yachtly Crew", "Palmer Alehouse", "Palmer", "2026-07-18", "7p-10p", "https://www.facebook.com/events/1006671702001516/"),
  ev("Two-Step and Country Swing Dance Lessons!", "American Legion Post 15", "Palmer", "2026-07-18", "7p-8p", "https://www.facebook.com/photo/?fbid=956981223779042&set=gm.1748027286563468", "dance"),
  ev("Karaoke", "American Legion Post 15", "Palmer", "2026-07-18", "8p-11p", "https://www.facebook.com/BrokenBlenderAK"),

  // ═══ SELDOVIA — Saturday July 18th ═══
  ev("Live Music w/ JD Cox", "Linwood Bar & Grill", "Seldovia", "2026-07-18", "", "https://www.linwoodbar.com/events/"),

  // ═══ SKAGWAY — Saturday July 18th ═══
  ev("Summer Reading Program: Red, White, & Blue Storytime", "Skagway Library", "Skagway", "2026-07-18", "10:30a-11:30a", "https://www.facebook.com/events/27438069035811649/27438069075811645/?active_tab=about", "community"),

  // ═══ SOLDOTNA — Saturday July 18th ═══
  ev("Disability Pride", "Soldotna Creek Park", "Soldotna", "2026-07-18", "1p-4p", "https://www.facebook.com/events/972600525442331/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Karaoke w/ Edencraft", "The Goods", "Soldotna", "2026-07-18", "5p-8p", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ TALKEETNA — Saturday July 18th ═══
  ev("Kids Concert w/ John Roberts", "Talkeetna Public Library", "Talkeetna", "2026-07-18", "12p-?", "https://www.facebook.com/photo/?fbid=1596787165782884&set=a.500635148731430"),
  ev("Talkeetna Pride Fest 2026", "Talkeetna Village Park", "Talkeetna", "2026-07-18", "12p-?", "https://www.facebook.com/events/780904414652259/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "festival"),
  ev("Natalie Gelman", "Denali Brewing Company", "Talkeetna", "2026-07-18", "6p-8", "https://www.facebook.com/events/988716667353734/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Denali Cooks", "Mountain High Pizza Pie", "Talkeetna", "2026-07-18", "7p-?", "https://www.pizzapietalkeetna.com/event-type/live-music/?fbclid=IwY2xjawRvBv9leHRuA2FlbQIxMABicmlkETE4T3g0UnoxVExiYTJjdXdQc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjyB1eWoEUpiOvGrlQarejNeQ12UXmcHnrBjwbrtFOPH0Rv2MmpWh1UA2AxS_aem_ls3CB8uZ3Xj26XD5nR9-"),
  ev("Broadway in Talkeetna w/ Kaitlin Lawrence", "Sheldon Community Arts Hanger", "Talkeetna", "2026-07-18", "7p-?", "https://www.facebook.com/denali.artscouncil", "theatre"),
  ev("Ronnie V. & The Family Band", "Fairview Inn", "Talkeetna", "2026-07-18", "9p-1a", "https://fairviewtalkeetna.com/pages/live-music"),
  ev("“Wigging Out” Pride Party w/ DJ2Stroke", "Talkeetna Inn", "Talkeetna", "2026-07-18", "9p-1a", "https://www.facebook.com/events/1786301805861928/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),

  // ═══ WASILLA — Saturday July 18th ═══
  ev("Live Music with Roadhouse Refugees", "Tug Bar & Liquor- Goose Bay Inn", "Wasilla", "2026-07-18", "", "https://www.facebook.com/photo/?fbid=1497931395460551&set=a.208825104371193"),
  ev("Moose Nugget Regatta", "Wasilla Lake", "Wasilla", "2026-07-18", "12p-4p", "https://www.facebook.com/events/2097647684116336/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "festival"),
  ev("Electric Sands 2026 Music Festival", "Smith Drive", "Wasilla", "2026-07-18", "4p-6a", "https://www.eventbrite.com/e/dystraxion-presents-electric-sands-2026-tickets-1563880391349?aff=ehometext", "festival"),

  // ═══ ANCHORAGE — Sunday July 19th ═══
  ev("Mud Factor 2026 Obstacle 5K & Fun Run", "Kincaid Park", "Anchorage", "2026-07-19", "10:30a-?", "", "community"),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2026-07-19", "10p-2a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=51fd3075bf&e=be0392aff7"),
  ev("Industry Night w/ Joe Brady", "Pioneer Bar", "Anchorage", "2026-07-19", "10p-2a", "https://www.facebook.com/profile.php?id=100035394206580"),
  ev("Live Music at the Market", "Anchorage Weekend Market", "Anchorage", "2026-07-19", "11a-5p", "https://www.facebook.com/AnchorageWeekendDowntownMarket"),
  ev("Play with Pulse! Free Community Dance Classes", "Pulse Dance Company", "Anchorage", "2026-07-19", "1p-2p", "https://www.facebook.com/events/944281558212074/944281588212071/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mech", "dance"),
  ev("Open Mic & Jam", "VFW Post 1685", "Anchorage", "2026-07-19", "4:30p-8:30p", "https://www.facebook.com/tyrone.palmer.722744"),
  ev("Garden Grooves: Music in the Beer Garden", "49th State Brewery", "Anchorage", "2026-07-19", "5p-7p", "https://www.facebook.com/photo/?fbid=1267333412235644&set=gm.1017207420732481"),
  ev("Country Dance Nights: Line Dancing & Swing", "Anchorage Social Dance Club", "Anchorage", "2026-07-19", "6:30p-9:30p", "https://www.facebook.com/35PlusClub/posts/pfbid0WJizwEbNi85duFkPSHFUsdVjmCMNhvohUubFJ3YdcCa5a49CmcfsWq4FKLK63J9xl", "dance"),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2026-07-19", "6p-10p", "https://www.facebook.com/events/2204843740345501/2204843823678826/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("All Ages Buckarooos Night", "Pink Cadillac", "Anchorage", "2026-07-19", "6p-10p", "https://www.facebook.com/events/1668434181079131/1668434264412456/?active_tab=about"),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2026-07-19", "8:30p-10p", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=2020d45d02&e=be0392aff7", "comedy"),
  ev("Open Jam with Blast From The Past", "Time Out Lounge", "Anchorage", "2026-07-19", "8:30p-1a", "https://www.facebook.com/photo?fbid=10211867422076197&set=pcb.10211867422276202"),
  ev("Open Mic Night", "Van’s Dive Bar", "Anchorage", "2026-07-19", "8p-11p", "https://www.facebook.com/photo/?fbid=1507990474662996&set=a.752367223558662"),
  ev("2026 Skinny Raven Half Marathon & 10K", "Centennial Rose Garden", "Anchorage", "2026-07-19", "9a-?", "https://www.facebook.com/events/1222472633161037/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "community"),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2026-07-19", "9p-12a", "https://www.facebook.com/BrokenBlenderAK"),
  ev("Sunday Karaoke", "The Carousel Lounge", "Anchorage", "2026-07-19", "9p-2a", "https://www.facebook.com/akrockstarkaraoke/events"),

  // ═══ BIG LAKE — Sunday July 19th ═══
  ev("Open Mic Night", "Susitna Brewing", "Big Lake", "2026-07-19", "6p-9p", "https://www.facebook.com/photo/?fbid=1507990474662996&set=a.752367223558662"),

  // ═══ ESTER — Sunday July 19th ═══
  ev("Sunday Deck Open Jam", "Malemute Saloon & Gold Camp", "Ester", "2026-07-19", "2p-5p", "https://malemutesaloon.com/schedule/"),

  // ═══ FAIRBANKS — Sunday July 19th ═══
  ev("Golden Heart Revue", "The Palace Theater", "Fairbanks", "2026-07-19", "8:15p-9:15p", "https://www.akvisit.com/palace-theatre?fbclid=IwY2xjawR7CNdleHRuA2FlbQIxMABicmlkETFZQTc5Q1NiWm16bDhNY0RZc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrK_LgMLEgXX7mcIrxnzr8jTJ9RaI_Lt7mvGG48tR-IMPMLVZRSzqN26Ewga_aem_RqdeQf5Ku3SEWvV41NwhHg"),
  ev("Karaoke", "The Marlin", "Fairbanks", "2026-07-19", "9p-?", "https://www.facebook.com/BrokenBlenderAK"),

  // ═══ HOMER — Sunday July 19th ═══
  ev("Chris Needham Matinee", "Kharacters Alaskan Bar", "Homer", "2026-07-19", "5p-7p", "https://www.facebook.com/kharacters.bar"),

  // ═══ HOPE — Sunday July 19th ═══
  ev("Hope & Sunrise 5K Wagon Trail Run", "Hope Social Hall", "Hope", "2026-07-19", "11a-?", "https://www.facebook.com/events/848724897920155/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "community"),
  ev("Sunday Brunch with Shaun P from H3", "Creekbend Co.", "Hope", "2026-07-19", "11a-2p", "https://www.creekbendco.com/event", "community"),
  ev("Race Registration, Bib Pickup, & Bake Sale", "Hope Social Hall", "Hope", "2026-07-19", "9a-11a", "https://hopewagonrun.com/weekend-events/"),

  // ═══ JUNEAU — Sunday July 19th ═══
  ev("Rainforest Romp Contra Dance Weekend", "St. Anne’s Parish Hall", "Juneau", "2026-07-19", "10a-5p", "https://www.facebook.com/events/914692727804915", "dance"),
  ev("Annual Wildlife Cruise", "Statter Harbor", "Juneau", "2026-07-19", "2p-5p", "https://www.facebook.com/events/1525988088972323/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("KXLL Presents: Japan To Alaska: Ft The Rain Dogs, Fine, Great, & T-Loc", "The Crystal Saloon", "Juneau", "2026-07-19", "8p-?", "https://www.eventbrite.com/e/kxll-presents-japan-to-alaska-ft-the-rain-dogs-fine-great-t-loc-tickets-1992675418819?aff=ehometext"),

  // ═══ KETCHIKAN — Sunday July 19th ═══
  ev("Open Mic Night w/ Joe Williams", "The Creek Street Cabaret", "Ketchikan", "2026-07-19", "6p-9p", "https://www.facebook.com/photo/?fbid=1507990474662996&set=a.752367223558662"),

  // ═══ PALMER — Sunday July 19th ═══
  ev("Karaoke", "Four Corner’s Lounge", "Palmer", "2026-07-19", "8p-?", "https://www.facebook.com/BrokenBlenderAK"),

  // ═══ SEWARD — Sunday July 19th ═══
  ev("Karaoke", "Yukon Bar", "Seward", "2026-07-19", "9p-1a", "https://www.facebook.com/BrokenBlenderAK"),

  // ═══ TALKEETNA — Sunday July 19th ═══
  ev("Steve Durr", "Mountain High Pizza Pie", "Talkeetna", "2026-07-19", "1p-2:30p & 5p-6:30p", "https://www.pizzapietalkeetna.com/event-type/live-music/?fbclid=IwY2xjawRvBv9leHRuA2FlbQIxMABicmlkETE4T3g0UnoxVExiYTJjdXdQc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHjyB1eWoEUpiOvGrlQarejNeQ12UXmcHnrBjwbrtFOPH0Rv2MmpWh1UA2AxS_aem_ls3CB8uZ3Xj26XD5nR9-"),

  // ═══ WASILLA — Sunday July 19th ═══
  ev("Live Music w/ John Cook", "Tug Bar & Liquor- Goose Bay Inn", "Wasilla", "2026-07-19", "", "https://www.facebook.com/photo/?fbid=1497931395460551&set=a.208825104371193"),
  ev("Electric Sands 2026 Music Festival", "Smith Drive", "Wasilla", "2026-07-19", "3p-11p", "https://www.eventbrite.com/e/dystraxion-presents-electric-sands-2026-tickets-1563880391349?aff=ehometext", "festival"),

  // ═══ ANCHORAGE — Monday July 20th ═══
  ev("Garden Grooves: Music in the Beer Garden", "49th State Brewery", "Anchorage", "2026-07-20", "5p-7p", "https://www.facebook.com/photo/?fbid=1267333412235644&set=gm.1017207420732481"),
  ev("Weekly Jazz Jam", "Fire Island Bakery @ K Street Market", "Anchorage", "2026-07-20", "6:30p-9:30p", "https://akjazzworkshop.org/calendar/"),
  ev("Learn to Square Dance", "Anchorage Social Dance Club", "Anchorage", "2026-07-20", "7p-9p", "https://www.akconcerts.com/learn", "dance"),
  ev("Bachata Dance Patterns", "Alaska Dance Promotions", "Anchorage", "2026-07-20", "8:30p-9:30p", "https://www.facebook.com/events/1363802471592782/1363802534926109/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22me", "dance"),
  ev("Guy Patterson", "Van’s Dive Bar", "Anchorage", "2026-07-20", "8p-?", "https://www.vansdivebaralaska.com/music-schedule"),

  // ═══ BETHEL — Monday July 20th ═══
  ev("Toddler Time", "Kuskokwim Consortium Library", "Bethel", "2026-07-20", "11a-12p", "https://www.facebook.com/events/1988217601791631/1988217631791628/?active_tab=about"),

  // ═══ CHUGIAK — Monday July 20th ═══
  ev("Free Baseball Game: Chugiak-Eagle River Chinooks vs the Miners", "Lee Jordan Field", "Chugiak", "2026-07-20", "6p-?", "https://www.facebook.com/events/27844071105234185/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "community"),

  // ═══ EAGLE RIVER — Monday July 20th ═══
  ev("Karaoke Mondays", "Odd Man Rush", "Eagle River", "2026-07-20", "6p-9p", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ FAIRBANKS — Monday July 20th ═══
  ev("Free Youth Jazz Band Rehearsals", "Fairbanks Community Band Hall", "Fairbanks", "2026-07-20", "5p-6p", "https://www.facebook.com/events/1341908911193449/1341908927860114/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Golden Heart Revue", "The Palace Theater", "Fairbanks", "2026-07-20", "8:15p-9:15p", "https://www.akvisit.com/palace-theatre?fbclid=IwY2xjawR7CNdleHRuA2FlbQIxMABicmlkETFZQTc5Q1NiWm16bDhNY0RZc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrK_LgMLEgXX7mcIrxnzr8jTJ9RaI_Lt7mvGG48tR-IMPMLVZRSzqN26Ewga_aem_RqdeQf5Ku3SEWvV41NwhHg"),

  // ═══ JUNEAU — Monday July 20th ═══
  ev("Josh Fortenbery", "The Crystal Saloon", "Juneau", "2026-07-20", "5p-7p", "https://www.facebook.com/events/2434341350376564/2434341363709896/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),

  // ═══ KENAI — Monday July 20th ═══
  ev("Storytime & Craft: If You Give A Moose A Muffin", "Kenai Chamber of Commerce & Visitor Center", "Kenai", "2026-07-20", "11a-?", "https://www.facebook.com/events/1154734120192170", "community"),

  // ═══ SEWARD — Monday July 20th ═══
  ev("Seward Strings", "Seward Senior Center", "Seward", "2026-07-20", "1p-4p", "https://www.facebook.com/SewardSeniors"),
  ev("Live Music w/ John Robert y Pan Blanco", "Flamingo Lounge", "Seward", "2026-07-20", "6:30p-9:30p", ""),
  ev("Karaoke with Megan Killoran", "Yukon Bar", "Seward", "2026-07-20", "9p-1a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ SOLDOTNA — Monday July 20th ═══
  ev("Friends of Mike Morgan Song Circle", "The Goods", "Soldotna", "2026-07-20", "5p-7p", "https://www.facebook.com/events/2211445169673257/2211445193006588/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22me"),

  // ═══ TALKEETNA — Monday July 20th ═══
  ev("Karaoke", "Fairview Inn", "Talkeetna", "2026-07-20", "9p-1a", "https://www.facebook.com/BrokenBlenderAK"),

  // ═══ ANCHORAGE — Tuesday July 21st ═══
  ev("Lunch on the Lawn: Live Music w/ Jennifer Barnaba & Steven Laister", "Anchorage Museum", "Anchorage", "2026-07-21", "11:30a-1:30p", "https://www.facebook.com/events/3945876455714851/3945876482381515/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22me"),
  ev("Summer Mini-Golf at/in the Library", "Loussac Library", "Anchorage", "2026-07-21", "2:30p-3:30p", "https://www.facebook.com/events/1573652387515299", "community"),
  ev("Garden Grooves: Music in the Beer Garden", "49th State Brewery", "Anchorage", "2026-07-21", "5p-7p", "https://www.facebook.com/photo/?fbid=1267333412235644&set=gm.1017207420732481"),
  ev("Family Storytime", "Mountain View Public Library", "Anchorage", "2026-07-21", "6p-6:30p", "https://www.facebook.com/events/4209337435985219/4209337512651878/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "community"),
  ev("Irish Music & Dancing", "Organic Oasis", "Anchorage", "2026-07-21", "6p-8p", "https://www.facebook.com/organicoasisAK"),
  ev("Rope Dart Lessons w/ Jerrill", "Oriental Healing Arts Center", "Anchorage", "2026-07-21", "8:30p-10p", "https://www.facebook.com/photo/?fbid=1705391324273626&set=gm.830839779862518"),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2026-07-21", "8p-2a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),
  ev("Two Step Tuesday w/ DJ Lele Beats", "Blarney Stone", "Anchorage", "2026-07-21", "9p-12a", "https://www.facebook.com/photo/?fbid=936585406046428&set=pcb.936585452713090", "dance"),
  ev("The Eternal Cowboys", "Koot’s", "Anchorage", "2026-07-21", "9p-12a", "https://www.facebook.com/EternalCowboys"),

  // ═══ FAIRBANKS — Tuesday July 21st ═══
  ev("Lunch Bites: Corvus for Kids", "Fairbanks Children’s Museum", "Fairbanks", "2026-07-21", "12p-?", "https://www.facebook.com/events/1430639975400538/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Karaoke Night", "The Cabin", "Fairbanks", "2026-07-21", "7p-10p", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),
  ev("Golden Heart Revue", "The Palace Theater", "Fairbanks", "2026-07-21", "8:15p-9:15p", "https://www.akvisit.com/palace-theatre?fbclid=IwY2xjawR7CNdleHRuA2FlbQIxMABicmlkETFZQTc5Q1NiWm16bDhNY0RZc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrK_LgMLEgXX7mcIrxnzr8jTJ9RaI_Lt7mvGG48tR-IMPMLVZRSzqN26Ewga_aem_RqdeQf5Ku3SEWvV41NwhHg"),

  // ═══ HOMER — Tuesday July 21st ═══
  ev("Storytime at the Pratt: Celebrating Summer", "Pratt Museum", "Homer", "2026-07-21", "10:30a-11:30a", "https://www.facebook.com/events/1657086898673232/1657086915339897/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22me", "community"),
  ev("Taco Tuesday's with Jim Maloney", "Justin Cole’s Down East Saloon", "Homer", "2026-07-21", "6:30p-10p", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=d4aeb6bcfd&e=be0392aff7"),

  // ═══ JUNEAU — Tuesday July 21st ═══
  ev("Free Tlingit Language Classes", "Zach Gordon Youth Center", "Juneau", "2026-07-21", "2p-3p", "https://www.facebook.com/events/1010020791677649/1010020808344314/?active_tab=about", "community"),
  ev("Jazz Jam Tuesday", "The Crystal Saloon", "Juneau", "2026-07-21", "8p-11p", "https://www.crystalsaloon.com/events"),

  // ═══ KENAI — Tuesday July 21st ═══
  ev("Nurse Storytime", "Kenai Community Library", "Kenai", "2026-07-21", "10:30a-11a", "https://www.facebook.com/events/1013769658218890", "community"),

  // ═══ KETCHIKAN — Tuesday July 21st ═══
  ev("Music on the Dock: Scattered Sunshine Trombone Choir", "Ketchikan Dock", "Ketchikan", "2026-07-21", "12p-1p", "https://www.ketchikanarts.org/programs-events/music-on-the-dock-summer-concert-series.html"),
  ev("The Ukulele Group", "Inn at Creek Street", "Ketchikan", "2026-07-21", "3:45p-4:45p", "https://www.ketchikanarts.org/events-performances/full-arts-calendar.html/event/2026/06/03/1780533900/the-ukelele-group-/521570"),

  // ═══ NORTH POLE — Tuesday July 21st ═══
  ev("Tuesday Pub Run w/ Tundra Trotters", "North Pole Alehouse", "North Pole", "2026-07-21", "6:15p-9p", "https://www.facebook.com/events/1210834251124828/1210834337791486/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22me", "community"),

  // ═══ PALMER — Tuesday July 21st ═══
  ev("Open Mic Night w/ Drew Sablon", "Fishhook Bar & Grill", "Palmer", "2026-07-21", "6p-9p", "https://www.facebook.com/photo/?fbid=1507990474662996&set=a.752367223558662"),
  ev("Industry Night with DJ Red", "Four Corner’s Lounge", "Palmer", "2026-07-21", "8p-?", "https://www.facebook.com/FourCornersLounge"),

  // ═══ SEWARD — Tuesday July 21st ═══
  ev("Open Mic Night", "Yukon Bar", "Seward", "2026-07-21", "8p-2a", "https://www.facebook.com/photo/?fbid=1507990474662996&set=a.752367223558662"),

  // ═══ SOLDOTNA — Tuesday July 21st ═══
  ev("Toddler Story Time", "Soldotna Library", "Soldotna", "2026-07-21", "10:30a-11a", "https://www.facebook.com/events/1503656801148774/1503656824482105/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "community"),

  // ═══ WASILLA — Tuesday July 21st ═══
  ev("Storytime at Ken’s", "Ken’s Garden Center", "Wasilla", "2026-07-21", "10a-11a", "https://www.facebook.com/events/1439153171253533/1439153327920184/?active_tab=about", "community"),
  ev("Live Music w/ Jerry Wessling", "Everett’s", "Wasilla", "2026-07-21", "6p-9p", "https://www.facebook.com/events/1056348563732364/1056348587065695/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22me"),
  ev("Karaoke Night", "Schwabenhof", "Wasilla", "2026-07-21", "8p-11p", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ ANCHORAGE — Wednesday July 22nd ═══
  ev("Free Community Storytime", "Alaska Zoo", "Anchorage", "2026-07-22", "10:30a-11a", "https://www.facebook.com/events/2118396738965650/2118396878965636/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22me", "community"),
  ev("Parachute Storytime", "Muldoon Library", "Anchorage", "2026-07-22", "10:30a-11a", "https://www.facebook.com/events/1890280328351005/1890280351684336/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22me", "community"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2026-07-22", "10p-1a", "https://www.facebook.com/EternalCowboys"),
  ev("Koots Karaoke", "Koot’s", "Anchorage", "2026-07-22", "10p-2a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=51fd3075bf&e=be0392aff7"),
  ev("Summer Discovery: Visit From Campbell Creek Science Center", "Muldoon Library", "Anchorage", "2026-07-22", "11:30a-?", "https://www.facebook.com/events/1034613166176066/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("ATY Summer Pop-In Dance Series", "Alaska Theatre of Youth", "Anchorage", "2026-07-22", "5:30p-6:30p", "https://www.facebook.com/events/979036658443816/979036695110479/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mech", "dance"),
  ev("Garden Grooves: Music in the Beer Garden", "49th State Brewery", "Anchorage", "2026-07-22", "5p-7p", "https://www.facebook.com/photo/?fbid=1267333412235644&set=gm.1017207420732481"),
  ev("International Folk Dancing", "Anchorage Social Dance Club", "Anchorage", "2026-07-22", "6:30p-8p", "https://www.facebook.com/35PlusClub/posts/pfbid0WJizwEbNi85duFkPSHFUsdVjmCMNhvohUubFJ3YdcCa5a49CmcfsWq4FKLK63J9xl"),
  ev("Live Music at Crimson w/ The Whisper Campaign", "Wildbirch Hotel", "Anchorage", "2026-07-22", "6:30p-9:30p", ""),
  ev("Seth Malone", "Manhattan’s Restaurant & Lounge", "Anchorage", "2026-07-22", "6p-9p", "https://www.facebook.com/photo/?fbid=1625154909614942&set=a.954924113304695"),
  ev("Tyrone & Friends", "907 Alehouse", "Anchorage", "2026-07-22", "7p-10p", "https://www.facebook.com/tyrone.palmer.722744"),
  ev("Comedy Open Mic", "Koot’s", "Anchorage", "2026-07-22", "7p-10p", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=2020d45d02&e=be0392aff7", "comedy"),
  ev("Line Dance Wednesdays", "Pink Cadillac", "Anchorage", "2026-07-22", "7p-12a", "https://www.facebook.com/photo/?fbid=955556717518560&set=gm.1372978934760019", "dance"),
  ev("Live Music with Jared Woods", "Humpy’s", "Anchorage", "2026-07-22", "8p-11:30p", "https://www.facebook.com/HumpysAlaska/posts/pfbid02ohZ1ZiZC8nNchkTSncCeeoiu3pT9WE3BvapCj1CjaTnwsyD9xy2GQKrxCMSpy5Dfl"),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2026-07-22", "8p-2a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),
  ev("Karaoke", "Mad Myrna’s", "Anchorage", "2026-07-22", "9p-12a", "https://www.facebook.com/BrokenBlenderAK"),
  ev("Karaoke", "Van’s Dive Bar", "Anchorage", "2026-07-22", "9p-1a", "https://www.facebook.com/BrokenBlenderAK"),

  // ═══ CHUGIAK — Wednesday July 22nd ═══
  ev("Free Baseball Game: Chugiak-Eagle River Chinooks vs Glacier Pilots", "Lee Jordan Field", "Chugiak", "2026-07-22", "6p-?", "https://www.facebook.com/events/1522154296050476/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "community"),

  // ═══ CORDOVA — Wednesday July 22nd ═══
  ev("Summer Reading Program", "Cordova Public Library", "Cordova", "2026-07-22", "1p-2:30p", "https://www.facebook.com/events/27438069035811649/27438069075811645/?active_tab=about", "community"),

  // ═══ EAGLE RIVER — Wednesday July 22nd ═══
  ev("Karaoke Night w/ KJ Smoke", "Homestead Lounge", "Eagle River", "2026-07-22", "8p-12a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ ESTER — Wednesday July 22nd ═══
  ev("Wednesday Dance Practice", "Fairbanks Tango", "Ester", "2026-07-22", "6p-9p", "https://www.facebook.com/events/1043559824868668/1043559841535333/?active_tab=about", "dance"),

  // ═══ FAIRBANKS — Wednesday July 22nd ═══
  ev("Music in the Story Garden", "Noel Wien Library", "Fairbanks", "2026-07-22", "6p-7p", "https://www.facebook.com/events/1320844496040669/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Free Concert: Blue Ridge Gathering", "Golden Heart Plaza & Monument", "Fairbanks", "2026-07-22", "7p-?", "https://www.facebook.com/events/2130850914149535/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22discovery_custom_tab%22%2C%22surface%22%3A%22bookmark%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("Golden Heart Revue", "The Palace Theater", "Fairbanks", "2026-07-22", "8:15p-9:15p", "https://www.akvisit.com/palace-theatre?fbclid=IwY2xjawR7CNdleHRuA2FlbQIxMABicmlkETFZQTc5Q1NiWm16bDhNY0RZc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrK_LgMLEgXX7mcIrxnzr8jTJ9RaI_Lt7mvGG48tR-IMPMLVZRSzqN26Ewga_aem_RqdeQf5Ku3SEWvV41NwhHg"),
  ev("Karaoke Night with Rocky!", "The Spur", "Fairbanks", "2026-07-22", "8p-11p", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ GIRDWOOD — Wednesday July 22nd ═══
  ev("Family Storytime", "Gerrish Community Library", "Girdwood", "2026-07-22", "10:30a-11:30a", "https://www.facebook.com/events/4209337435985219/4209337512651878/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "community"),

  // ═══ HOMER — Wednesday July 22nd ═══
  ev("The Metropolitan Opera: The Merry Window 1p-4", "The Porcupine Theater", "Homer", "2026-07-22", "6:30p-9:30p", "https://porcupinetheater.com/movies/the-metropolitan-opera-the-merry-widow/?fbclid=IwY2xjawTCh8tleHRuA2FlbQIxMABicmlkETF6NGxnTHBEZU1PYVI3VEE3c3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHusQRcb_2HcLp-DNfx-ZKB65sjZoM2sbefuAAx9vEjOMrr4PmtS0M6PqfzVC_aem_J", "theatre"),
  ev("Live Music w/ Ben Peters", "Homestead Restaurant", "Homer", "2026-07-22", "6p-9p", "https://www.facebook.com/events/1481867250400832/"),

  // ═══ JUNEAU — Wednesday July 22nd ═══
  ev("Free Show: Bears in Alaska", "Marie Drake Planetarium", "Juneau", "2026-07-22", "7p-8:15p", "https://www.facebook.com/events/3980430022263473"),
  ev("Open Mic Night", "The Crystal Saloon", "Juneau", "2026-07-22", "8p-11:30p", "https://www.facebook.com/photo/?fbid=1507990474662996&set=a.752367223558662"),
  ev("Karaoke", "Alaskan Hotel and Bar", "Juneau", "2026-07-22", "8p-11p", "https://www.facebook.com/BrokenBlenderAK"),

  // ═══ PALMER — Wednesday July 22nd ═══
  ev("Adult Prom Night", "Lulu’s Tents & Events", "Palmer", "2026-07-22", "6p-9p", "https://www.facebook.com/events/1318222616481845/1318222639815176/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D"),
  ev("West Coast Sing Wednesday", "Four Corner’s Lounge", "Palmer", "2026-07-22", "7:30p-9:30p", "https://www.facebook.com/photo/?fbid=1411992579757709&set=gm.1053059570049116"),

  // ═══ SEWARD — Wednesday July 22nd ═══
  ev("Karaoke with Raunchy Rachel", "Yukon Bar", "Seward", "2026-07-22", "9p-1a", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=e982562f83&e=be0392aff7"),

  // ═══ SOLDOTNA — Wednesday July 22nd ═══
  ev("Bouncing Babes Story Time", "Soldotna Library", "Soldotna", "2026-07-22", "10:30a-11a", "https://www.facebook.com/events/843086674966253/843086688299585/?acontext=%7B%22event_action_history%22%3A%5b%7B%22extra_data%22%3A%22%22%2C%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%2C%7B%22extra_data%22%3A%22%22%2C%22mech", "community"),
  ev("Levitt Amp Music Series: Black Barrel & The Bad Men, Luci & Jackson, & Shonathin Hoskins", "Soldotna Creek Park", "Soldotna", "2026-07-22", "6p-9p", "https://www.facebook.com/events/1649648349484643/"),

  // ═══ TALKEETNA — Wednesday July 22nd ═══
  ev("Larry Zarella", "Denali Brewing Company", "Talkeetna", "2026-07-22", "6p-8", "https://www.facebook.com/photo/?fbid=1590844869717640&set=pb.100063764251860.-2207520000"),

  // ═══ WASILLA — Wednesday July 22nd ═══
  ev("Open Mic", "Schwabenhof", "Wasilla", "2026-07-22", "7:30p-11p", "https://akconcets.us20.list-manage.com/track/click?u=7bd13a48fecb63b6d795caadf&id=2020d45d02&e=be0392aff7"),

  // ═══ KETCHIKAN — Thursday July 23rd ═══
  ev("Music on the Dock: The String Beings", "Ketchikan Dock", "Ketchikan", "2026-07-23", "12p-1p", "https://www.ketchikanarts.org/programs-events/music-on-the-dock-summer-concert-series.html"),
  ev("Live Music with Marjorie Evers & Austin Hays", "Bush Pilots’ Lounge", "Ketchikan", "2026-07-23", "6p-8p", "https://www.facebook.com/events/991412623671001"),

  // ═══ SOLDOTNA — Monday August 3rd ═══
  ev("Storytime & Play", "Farnsworth Park", "Soldotna", "2026-08-03", "10:30a-11a", "https://www.facebook.com/events/3481855768648747/3481855775315413/?acontext=%7B%22event_action_history%22%3A%5b%7B%22mechanism%22%3A%22surface%22%2C%22surface%22%3A%22permalink%22%7D%5d%2C%22ref_notif_type%22%3Anull%7D", "theatre"),
];

export const cities = [...new Set(events.map(e => e.city))].sort();

export function getEventsByCity(city: string): AKEvent[] {
  return events.filter(e => e.city === city);
}

export function getEventsByDate(date: string): AKEvent[] {
  return events.filter(e => e.date === date);
}
