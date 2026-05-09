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
  // ═══ ANCHORAGE — Saturday May 9th ═══
  ev("Jo Koy World Tour", "Alaska Airlines Center", "Anchorage", "2026-05-09", "7p-10p", "https://www.facebook.com/events/2046619386124682/", "comedy"),
  ev("Alaska Dance Theatre: Graduation Ball", "Alaska Center for the Performing Arts", "Anchorage", "2026-05-09", "4p-5p & 6:30p-7:30p", "https://centertix.com/events/graduation-ball", "dance"),
  ev("Dance Lessons & Social Dance", "Anchorage Social Dance Club", "Anchorage", "2026-05-09", "7p-11p", "https://www.facebook.com/35PlusClub/", "dance"),
  ev("AUUF Variety Show Fundraiser", "Anchorage Unitarian Universalist Fellowship", "Anchorage", "2026-05-09", "5p-8p", "https://www.facebook.com/events/2534431957014068/", "community"),
  ev("May Faire Festival", "Anchorage Waldorf School", "Anchorage", "2026-05-09", "11a-?", "https://www.facebook.com/events/948436594760432/", "festival"),
  ev("Jared Woods", "Anchorage Weekend Market", "Anchorage", "2026-05-09", "1p-5p", "https://www.facebook.com/AnchorageWeekendDowntownMarket"),
  ev("TBA Theatre: Once Upon A Mattress", "APU Grant Hall", "Anchorage", "2026-05-09", "7p-9:30p", "https://www.facebook.com/events/1449608736648033/", "theatre"),
  ev("Kinderlauf 2026", "APU Moseley Sports Center", "Anchorage", "2026-05-09", "10a-?", "https://www.facebook.com/events/1649368019551917/", "community"),
  ev("Urban Kiz Dance Lesson & Social Dance", "Arctic Academie de Danse", "Anchorage", "2026-05-09", "7p-11p", "https://www.facebook.com/events/1580170332674474/", "dance"),
  ev("Scared Scriptless Student Showcase", "Betti's Books", "Anchorage", "2026-05-09", "8p-9:30p", "https://www.facebook.com/events/953157000756961", "comedy"),
  ev("Live Music w/ SpaffDaddy Live", "Blarney Stone", "Anchorage", "2026-05-09", "8p-11p", "https://www.facebook.com/photo/?fbid=920048864366749"),
  ev("Sweet Cheeks Cabaret: Smoke & Silk", "Broken Blender", "Anchorage", "2026-05-09", "8p-10p", "https://www.facebook.com/events/1644617373389769/", "dance"),
  ev("Karaoke w/ DJ Charms", "Broken Blender", "Anchorage", "2026-05-09", "8p-12a", "https://www.facebook.com/BrokenBlenderAK"),
  ev("Glacier Blues Band", "The Carousel Lounge", "Anchorage", "2026-05-09", "9p-1a", "https://www.carouselalaska.com/events"),
  ev("907 Pro Wrestling: Ari5en 5 Year Anniversary", "Eagan Center", "Anchorage", "2026-05-09", "2:30p-6p", "https://www.facebook.com/events/1913570556706022/", "community"),
  ev("DJ JRock", "Flattop Pizza & Pool", "Anchorage", "2026-05-09", "9:30p-12a", "https://www.facebook.com/photo.php?fbid=1432955235502986"),
  ev("Piano Bar Saturdays w/ MJ Riemann", "Gumbo House", "Anchorage", "2026-05-09", "6p-9p", "https://www.facebook.com/photo/?fbid=10172860873150601"),
  ev("Live Music w/ Nervis Rex", "Humpy's", "Anchorage", "2026-05-09", "9:30p-1a", "https://www.facebook.com/events/1945231569465841/"),
  ev("Stand Up Comedy with Nathan Hart", "Koot's", "Anchorage", "2026-05-09", "8p-10p", "https://www.facebook.com/events/1475448910100458/", "comedy"),
  ev("Cold Fusion", "Koots", "Anchorage", "2026-05-09", "10:30p-2a", "https://www.facebook.com/akcoldfusionakband"),
  ev("Mad Myrna's Diva Variety Show", "Mad Myrna's", "Anchorage", "2026-05-09", "9p-11:30p", "https://madmyrnas.com/events"),
  ev("Weekly Karaoke Contest", "Oriental Garden", "Anchorage", "2026-05-09", "9p-1:30a", "https://www.facebook.com/Orientalgardenbestchinese"),
  ev("Country Night: May the Margs Be With You w/ DJ Rico", "Pink Cadillac", "Anchorage", "2026-05-09", "10p-2a", "https://www.facebook.com/events/2049341889296636/"),
  ev("Sing Along Fundraiser for Alaska Veteran's Museum", "St. Patrick's Parish", "Anchorage", "2026-05-09", "6:30p-8:30p", "https://www.facebook.com/events/1408384787758033/", "community"),
  ev("Blast From The Past", "Time Out Lounge", "Anchorage", "2026-05-09", "9p-2:30a", "https://www.facebook.com/photo?fbid=10211867422076197"),
  ev("Alpine Music Studio Open Stage", "Williwaw Social", "Anchorage", "2026-05-09", "5p-8p", "https://www.facebook.com/photo/?fbid=1395901109244319"),
  ev("ATLiens Live w/ Brooks the Wook, DatKidShawn, & Claynation", "Williwaw Social", "Anchorage", "2026-05-09", "8p-2a", "https://www.facebook.com/events/1896144587672882/"),

  // ═══ ANCHORAGE — Sunday May 10th ═══
  ev("Mother's Day Celebration & Season Opening", "Alaska Native Heritage Center", "Anchorage", "2026-05-10", "9a-5p", "https://www.facebook.com/events/26952354717681955/", "community"),
  ev("Country Dance Nights: Line Dancing & Swing", "Anchorage Social Dance Club", "Anchorage", "2026-05-10", "6:30p-10p", "https://www.facebook.com/35PlusClub/", "dance"),
  ev("Shaefer Mueller", "Anchorage Weekend Market", "Anchorage", "2026-05-10", "1p-5p", "https://www.facebook.com/AnchorageWeekendDowntownMarket"),
  ev("TBA Theatre: Once Upon A Mattress", "APU Grant Hall", "Anchorage", "2026-05-10", "3p-5:30p", "https://www.facebook.com/events/1449608736648033/", "theatre"),
  ev("Sunday Blues Jam w/ Rebel Blues Band", "Billiard Palace", "Anchorage", "2026-05-10", "6p-10p", "https://www.facebook.com/photo/?fbid=1524233413038496"),
  ev("Comedy Open Mic", "Koot's", "Anchorage", "2026-05-10", "8:30p-10p", "https://www.facebook.com/kootsak", "comedy"),
  ev("Mother's Day Mama Bird Comedy Brunch & Music", "Zip Kombucha", "Anchorage", "2026-05-10", "1p-?", "https://www.facebook.com/events/1923373734950230/", "comedy"),

  // ═══ ANCHORAGE — Monday May 11th ═══
  ev("Learn to Square Dance", "Anchorage Social Dance Club", "Anchorage", "2026-05-11", "7p-9p", "https://www.facebook.com/35PlusClub/", "dance"),
  ev("Weekly Jazz Jam", "Fire Island Bakery @ K Street Market", "Anchorage", "2026-05-11", "6:30p-9:30p", "https://akjazzworkshop.org/calendar/"),
  ev("The Monday Mic w/ Boobs", "Koot's", "Anchorage", "2026-05-11", "8p-10:30p", "https://www.facebook.com/kootsak", "comedy"),

  // ═══ ANCHORAGE — Tuesday May 12th ═══
  ev("Two Step Tuesday w/ DJ Lele Beats", "Blarney Stone", "Anchorage", "2026-05-12", "9p-12a", "https://www.facebook.com/blarneystonealaska"),
  ev("AK Rockstar Karaoke", "The Carousel Lounge", "Anchorage", "2026-05-12", "8p-2a", "https://www.facebook.com/akrockstarkaraoke/events"),
  ev("The Eternal Cowboys", "Koot's", "Anchorage", "2026-05-12", "9p-12a", "https://www.facebook.com/EternalCowboys"),
  ev("Irish Music & Dancing", "Organic Oasis", "Anchorage", "2026-05-12", "6p-8p", "https://www.facebook.com/events/1191638763048307/"),
  ev("All Ages Buckarooos Night", "Pink Cadillac", "Anchorage", "2026-05-12", "7p-11p", "https://www.facebook.com/events/26010451781885748/"),

  // ═══ ANCHORAGE — Wednesday May 13th ═══
  ev("Tyrone & Friends", "907 Alehouse", "Anchorage", "2026-05-13", "7p-10p", "https://www.facebook.com/tyrone.palmer.722744"),
  ev("Women's Adventure Film Tour 2026", "Beartooth Theatrepub", "Anchorage", "2026-05-13", "6p-8p", "https://www.facebook.com/events/953428390610550/", "community"),
  ev("Live Music w/ Rick Brooks", "Humpy's", "Anchorage", "2026-05-13", "8p-12a", "https://www.facebook.com/events/1309061277816538/"),
  ev("Country Night", "Koot's", "Anchorage", "2026-05-13", "8p-2a", "https://www.facebook.com/CountryNightAtKoots"),
  ev("Songwriter Seth Malone", "Manhattan's Restaurant & Lounge", "Anchorage", "2026-05-13", "6p-9p", "https://www.facebook.com/events/26912833375002938/"),
  ev("Line Dance Wednesdays", "Pink Cadillac", "Anchorage", "2026-05-13", "7p-12a", "https://www.facebook.com/events/1652593189199444/", "dance"),
  ev("The Eternal Cowboys", "Pioneer Bar", "Anchorage", "2026-05-13", "10p-1a", "https://www.facebook.com/photo.php?fbid=1348210747309890"),

  // ═══ FAIRBANKS ═══
  ev("Party Night w/ DJ Osito", "The Cabin", "Fairbanks", "2026-05-09", "10p-?", "https://www.facebook.com/events/1302620395171254/"),
  ev("Under the Big Top", "Dance Theatre Fairbanks", "Fairbanks", "2026-05-09", "7p-9p", "https://www.facebook.com/events/982990850907175/", "dance"),
  ev("Marc Brown & The Blues Crew", "The International Hotel & Bar", "Fairbanks", "2026-05-09", "10p-3a", "https://www.facebook.com/events/2380478869146368/"),
  ev("GrungeBob AK", "The Marlin", "Fairbanks", "2026-05-09", "9p-1a", "https://www.facebook.com/photo/?fbid=940440408900984"),
  ev("Music & More", "United Methodist Church", "Fairbanks", "2026-05-09", "7p-?", "https://www.facebook.com/events/1481651143693667/", "community"),

  // ═══ GIRDWOOD ═══
  ev("Rubber Ptarmigan Standup Comedy Live", "Alpenglow Coffee", "Girdwood", "2026-05-08", "7p-?", "https://www.facebook.com/events/1520043896582618/", "comedy"),
  ev("Motor Madness Snow Machine Races", "Alyeska Resort", "Girdwood", "2026-05-09", "7a-7p", "https://www.facebook.com/events/1711855523523282/", "festival"),

  // ═══ HOMER ═══
  ev("Ivan Dennis Live", "Homestead Restaurant", "Homer", "2026-05-09", "6p-10p", "https://www.facebook.com/events/1680567646242548/"),
  ev("The Loathsome Doves", "Kharacters Alaskan Bar", "Homer", "2026-05-09", "9:30p-1:30a", "https://www.facebook.com/kharacters.bar"),
  ev("Piano Music by Sunrise Kilcher", "AJ's Old Town Steakhouse & Tavern", "Homer", "2026-05-09", "6p-8p", "https://www.homeralaska.org/event/piano-by-sunrise-kilcher/19/"),
  ev("OPUS Festival of Strings: Codas", "Grace Ridge Brewing Inc.", "Homer", "2026-05-11", "6p-8p", "https://www.facebook.com/events/1563980488043979/"),

  // ═══ HOPE ═══
  ev("Hopening Weekend w/ Blackwater Railroad & The Band Blackbird", "Creekbend Co.", "Hope", "2026-05-09", "7p-11p", "https://www.creekbendco.com/event"),
  ev("Mother's Day Brunch with The Forest That Never Sleeps", "Creekbend Co.", "Hope", "2026-05-10", "11a-2p", "https://www.creekbendco.com/event"),

  // ═══ JUNEAU ═══
  ev("Festival Finale! Biriba Union", "Centennial Hall", "Juneau", "2026-05-09", "10p-11:30p", "https://www.facebook.com/events/1804346703858173/"),
  ev("Noche Latina w/ DJ Omar", "The Crystal Saloon", "Juneau", "2026-05-09", "10:30p-?", "https://www.facebook.com/events/1482927083213804"),
  ev("Juneau Maritime Festival 2026", "Elizabeth Peratrovich Plaza", "Juneau", "2026-05-09", "2p-10p", "https://www.facebook.com/events/1177634397584849/", "festival"),
  ev("Juneau Dance Theatre: Coppelia", "Juneau-Douglass High School", "Juneau", "2026-05-09", "2p-3:45 & 7p-8:45p", "https://www.facebook.com/events/2173696546507854/", "dance"),

  // ═══ KENAI ═══
  ev("Eric Doucet Friday Nights", "Main Street Tap & Grill", "Kenai", "2026-05-08", "6p-10p", "https://www.facebook.com/events/995366972942031/"),

  // ═══ KETCHIKAN ═══
  ev("Karaoke Cruise: Inside Passage Idol", "Allen Marine Boat Dock", "Ketchikan", "2026-05-09", "6p-9p", "https://events.humanitix.com/karaoke-cruise-aboard-allen-marine-inside-passage-idol/tickets"),
  ev("Music on the Couch w/ Rick Lloyd & Louise Loretan", "The Creek Street Cabaret", "Ketchikan", "2026-05-09", "8p-9:30p", "https://www.facebook.com/events/1590870605697500/"),

  // ═══ PALMER ═══
  ev("H3 Hawaii Reggae", "Palmer Alehouse", "Palmer", "2026-05-09", "7p-10p", "https://www.facebook.com/events/2230746934403631/"),
  ev("Schaefer Mueller & The Neon Highway", "Four Corner's Lounge", "Palmer", "2026-05-09", "10p-2a", "https://www.facebook.com/events/1636511314066788/"),
  ev("Pushki Pickers", "Hatcher Pass Lodge", "Palmer", "2026-05-09", "4p-7p", "https://www.facebook.com/HatcherPassLodge"),

  // ═══ SEWARD ═══
  ev("The Red Flags", "Yukon Bar", "Seward", "2026-05-09", "9p-2a", "https://www.facebook.com/events/3191075811058333/"),

  // ═══ SITKA ═══
  ev("Biriba Union Live in Sitka", "Sitka Performing Arts Center", "Sitka", "2026-05-10", "3p-4:30", "https://www.facebook.com/events/971316065482088/"),

  // ═══ SOLDOTNA ═══
  ev("True Tales Told Live: Spring Forward", "The Goods", "Soldotna", "2026-05-08", "6p-9p", "https://www.facebook.com/events/1698547951520445", "community"),
  ev("Karaoke w/ Edencraft", "The Goods", "Soldotna", "2026-05-09", "4p-7p", "https://www.facebook.com/events/1260727002879057/"),

  // ═══ TALKEETNA ═══
  ev("The Acoustic Oosik", "Denali Brewing Company", "Talkeetna", "2026-05-08", "6p-8p", "https://www.facebook.com/events/844190984741601/"),
  ev("Triple Black Diamond", "Fairview Inn", "Talkeetna", "2026-05-09", "9p-1a", "https://fairviewtalkeetna.com/pages/live-music"),

  // ═══ WASILLA ═══
  ev("Live Music w/ Sergio Adam", "Alaskana Social Club", "Wasilla", "2026-05-08", "6p-9p", "https://www.facebook.com/events/806211305894467"),
  ev("Stand Up Comedy w/ Nathan Hart", "Everett's", "Wasilla", "2026-05-08", "6:30p-?", "https://www.facebook.com/events/1333148875342964/", "comedy"),
  ev("Jerry Wessling Band", "Silver Fox Inn", "Wasilla", "2026-05-08", "7p-11p", "https://www.facebook.com/events/702128846290049/"),

  // ═══ EAGLE RIVER ═══
  ev("DJ AumanJoy", "Homestead Lounge", "Eagle River", "2026-05-09", "9p-2a", "https://www.facebook.com/HomesteadLounge"),

  // ═══ CHUGIAK ═══
  ev("Jon Charles & the Arctic Outlaws", "American Legion Post 33", "Chugiak", "2026-05-09", "8p-?", "https://www.facebook.com/events/2445462449224061/"),

  // ═══ BETHEL ═══
  ev("Jackson Emmer Live Show", "Yupiit Piciryarait Cultural Center", "Bethel", "2026-05-09", "7p-9p", "https://www.facebook.com/events/862092343569313/"),

  // ═══ VALDEZ ═══
  ev("Jackson Emmer w/ Martin Gilmore", "Valdez Civic & Convention Center", "Valdez", "2026-05-07", "7p-9p", "https://www.facebook.com/events/1737545830959325/"),

  // ═══ CORDOVA ═══
  ev("Bay to Bay in May", "Hartney Bay", "Cordova", "2026-05-09", "10a-?", "https://www.facebook.com/events/1317274400265509/", "community"),

  // ═══ HAINES ═══
  ev("Karaoke Night", "Pioneer Bar", "Haines", "2026-05-09", "9p-1a", "https://www.visithaines.com/listing/pioneer-bar/280/"),

  // ═══ COOPER LANDING ═══
  ev("Seth Malone Live", "Sunrise Inn", "Cooper Landing", "2026-05-08", "6p-9p", "https://www.facebook.com/events/2708470432870344/"),
];

export const cities = [...new Set(events.map(e => e.city))].sort();

export function getEventsByCity(city: string): AKEvent[] {
  return events.filter(e => e.city === city);
}

export function getEventsByDate(date: string): AKEvent[] {
  return events.filter(e => e.date === date);
}
