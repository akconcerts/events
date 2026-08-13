import re
import json
import os
import sys

PASTED_TEXT = """
Wednesday August 12th      
49th State Brewery – Garden Grooves: Music in the Beer Garden 5p-7p
907 Alehouse – Tyrone & Friends  7p-10p

Alaska Zoo – Free Community Storytime  10:30a-11a
Anchorage Social Dance Club – International Folk Dancing 6:30p-8p
The Carousel Lounge – AK Rockstar Karaoke  8p-2a
Humpy’s – Live Music w/ Pam Santoro  8p-11:30p 
Koot’s – Comedy Open Mic 7p-10p
Koot’s – Koots Karaoke 10p-2a

Mad Myrna’s – Karaoke   9p-12a
Manhattan’s Restaurant & Lounge – Seth Malone 6p-9p

Pink Cadillac – Line Dance Wednesdays  7p-11p
Pioneer Bar –  The Eternal Cowboys  10p-1a
Van’s Dive Bar – Karaoke  9p-1a
Wildbirch Hotel – Live Music at Crimson w/ Jared Woods 6:30p-9:30p

Thursday August 13th   
49th State Brewery – Garden Grooves: Music in the Beer Garden 5p-7p
Anchorage Museum – Lunch on the Lawn: Live Music w/ Santoro  11:30a-1:30p

Beartooth Theatrepub – Trails in Motion 14  6p-8p

Blarney Stone – Open Mic Night w/ It's Just Dez  6:45p-11p
Broken Blender –  Karaoke   7p-11p
The Carousel Lounge –  AK Rockstar Karaoke  8p-2a

Humpy’s – Live Music w/ Nothin But Karma  8p-12a
Koot’s – Latin Night w/ DJ MyKey T 8p-1a

Koot’s – Comedy Open Mic 7p-10p
Koot’s – Karaoke 10p-Close

Magnetic North Brewing – Stop Light Nights  6p-8p

The Peanut Farm – Live & Local Music w/ Jared Woods  6:30p-10:30p
Pink Cadillac – Ladies Night at Pink Cadillac w/ DJ Rico  7p-12a
Pioneer Bar –  DJ Cross  10p-1a

Time Out Lounge – Open Mic Loathing in Las Vegas  8p-11p


Friday August 14th    

49th State Brewery – Yappy Hour: Dog Friendly Happy Hour  4:30p-7:30p
49th State Brewery – Garden Grooves: Music in the Beer Garden 5p-7p
49th State Brewery – Candlelight Concert: Tribute to Fleetwood Mac 5:30p-6:30p 

49th State Brewery – Candlelight Concert: Queen vs. ABBA 7:45p-8:45p 

Alaska Dance Promotions – Friday Night Dance Lounge  9p-1a
Arctic Academie de Danse – Friday Night Dance Social 9p-11p

Bernie’s Bungalow Lounge – Arctic Entry & Dawson Gentleman Band  9p-?

Bird Treatment & Learning Center – Ambassador Bird Programs: Experience Wild Birds Up Close!  12:30p-1:15p
Blarney Stone – Da Good Ol' Good Ones  6p-8p

Broken Blender –  Karaoke w/ DJ Charms  8p-12a
The Carousel Lounge – $100 Cash Giveaway Karaoke Contest  9p-1a

Fairview Community Rec Center – Mobile Library Visit & Storytime  1p-3p

Flattop Pizza & Pool – DJ JRock 9:30p-12a
The Fraternal Order of Eagles Aerie 4207 –  Karaoke Friday at the Eagles!   7p-12a
Glenn Square – Friday Night Market  6p-12a
Gumbo House – Pop Piano Bar w/ MJ Riemann  6p-9p 
Hilltop Ski Area – Summer Music on the Patio: SAZÓN 6p-7:30p

Humpy’s – Live Music w/ Ayla Ray & Chris Christy Quintet  9:30p-1a
JBER Library – Summer Bash  1p-3p

Koot’s – Yachtly Crew 10p-2a

Mad Myrna’s – Mad Myrna's Diva Variety Show  9p-11:30p

O’Malley’s on the Green – Williwaw Blue  7p-10p

Pink Cadillac – Boots, Beer, & Ballads Country Night w/ DJ Rico  7p-11p
Pioneer Bar –  DJ Cross  10p-1a
SubZero Microlounge – Karaoke Night at SubZero  8p-11p
Time Out Lounge – Blast From The Past  9p-2:30a

Turnagain Brewing – Hwy9 in Concert  6:30p-9:30p

Van’s Dive Bar – Bodelia James 9:30p-1a 
Wendy Williamson Auditorium – Darci Lynne  6:30p-?

 


Saturday August 15th

49th State Brewery – Garden Grooves: Music in the Beer Garden 5p-7p

Anchorage Social Dance Club – Dance Social 7p-11p
Anchorage Museum – Jazz on the Lawn w/ Alaska Jazz Workshop 12p-2p
Anchorage Museum – Parlor in the Round Outdoor Concert w/ Emma Hill, Tyson Davis, & Ashley Young 5:30p-8p
Anchorage Weekend Market – Live Music at the Market 11a-5p
Beartooth Theatrepub – Cat Video Fest 2026 4p-5:15p

Broken Blender –  Sweet Cheeks Cabaret: Vaudeville Vibes - Hot Spec-taters of Tease  8p-12a

Broken Blender –  Karaoke w/ DJ Charms  8p-12a
The Carousel Lounge – Supernova Live  9p-1a 

Continental – Latin Night Takeover w/ DJ Jose & DJ Yenmy 11p-3a

Flattop Pizza & Pool – DJ JRock 9:30p-12a
Gumbo House – Pop Piano Bar w/ MJ Riemann  6p-9p

Humpy’s – Live Music w/ Dawson Gentleman & Arctic Entry  9:30p-1a

Koots – The Reg Flags  10p-2a

Mad Myrna’s – Mad Myrna's Diva Variety Show  9p-11:30p
Main Event Grill – Anchorage Community Theatre: Dream Roles Cabaret Show 6:30p-?

Muldoon Chanshtnu Park – Muldoon Community Market  9:30a-3p

The Nave Spenard – Drag For A Cause: Rhinestone Rodeo 7p-9p

Oriental Garden – Weekly Karaoke Contest   9p-1:30a
Pink Cadillac – Latin Dance Closing Party with DJ Maria, DJ Josh, & DJ Colin 10p-3p
Ship Creek Brewing – Will H. Johnson  5:30p-8:30p

Sullivan Arena Football Stadium – Hmong Harvest Festival  10a-5p

Time Out Lounge – Blast From The Past  9p-2:30a

Van’s Dive Bar – Raspberry, Laughy, & Swing Syndicate  9p-1a

Wildbirch Hotel – Poses & Mimosas w/ burn+bloom 11a-1p

 

Sunday August 16th  

49th State Brewery – Garden Grooves: Music in the Beer Garden 5p-7p

Anchorage Social Dance Club – Country Dance Nights: Line Dancing & Swing  6:30p-9:30p
Anchorage Weekend Market – Live Music at the Market 11a-5p
Billiard Palace – Sunday Blues Jam w/ Rebel Blues Band  6p-10p 
The Carousel Lounge – Sunday Karaoke  8p-2a

Humpy’s – Annual Humpy’s Marathon  8:30a-3:30p

Koot’s – Comedy Open Mic   8:30p-10p
Koot’s – Koots Karaoke 10p-2a
Mad Myrna’s – Karaoke   9p-12a                                
Pink Cadillac – All Ages Buckarooos Night  6p-10p
Pioneer Bar –  Industry Night w/ Joe Brady  10p-2a
Time Out Lounge – Open Jam with Blast From The Past  8:30p-1a
Sullivan Arena Football Stadium – Hmong Harvest Festival  10a-5p

Van’s Dive Bar – Open Mic Night  8p-11p
VFW Post 1685 – Open Mic & Jam  4:30p-8:30p

Monday August 17th

49th State Brewery – Garden Grooves: Music in the Beer Garden 5p-7p

Alaska Dance Promotions – Bachata Dance Patterns  8:30p-9:30p
Anchorage Social Dance Club – Learn to Square Dance 7p-9p

Fire Island Bakery @ K Street Market – Weekly Jazz Jam  6:30p-9:30p

Van’s Dive Bar – Snacks at Midnight  9p-?


Tuesday August 18th

49th State Brewery – Garden Grooves: Music in the Beer Garden 5p-7p

Anchorage Museum – Lunch on the Lawn: Live Music w/  Uncle Jim  11:30a-1:30p

Blarney Stone – Two Step Tuesday w/ DJ Lele Beats  9p-12a
The Carousel Lounge – AK Rockstar Karaoke  8p-2a
Mountain View Public Library – Family Storytime  6p-6:30p
Oriental Healing Arts Center – Rope Dart Lessons w/ Jerrill  8:30p-10p
Organic Oasis – Irish Music & Dancing  6p-8p

Pink Cadillac – College Night 18+  7p-10p


Wednesday August 19th      
49th State Brewery – Garden Grooves: Music in the Beer Garden 5p-7p
907 Alehouse – Tyrone & Friends  7p-10p

Alaska Zoo – Free Community Storytime  10:30a-11a
Anchorage Social Dance Club – International Folk Dancing 6:30p-8p
The Carousel Lounge – AK Rockstar Karaoke  8p-2a
Humpy’s – Live Music w/ Will H. Johnson  8p-11:30p 
Koot’s – Comedy Open Mic 7p-10p
Koot’s – Koots Karaoke 10p-2a

Loussac Luibrary – Public Assistance Resource Fair  3p-5p

Mad Myrna’s – Karaoke   9p-12a
Pink Cadillac – Line Dance Wednesdays  7p-11p
Pioneer Bar –  The Eternal Cowboys  10p-1a
Van’s Dive Bar – Karaoke  9p-1a
Wildbirch Hotel – Live Music at Crimson w/ The Whisper Campaign 6:30p-9:30p



Barrow

8/15    Tuzzy Consortium Library – Storytime & Crafternoon 1p-2p

 

Bethel

 

Big Lake

8/15    Common Ground Alaska Farm – Big Lake Community Farmer’s Market  12p-6p

8/16    Susitna Brewing  – Open Mic Night 6p-9p

 

Chicken

Chugiak

 

 

Cooper Landing


8/13   Gwin’s Lodge – Seth Malone  5p-? 

8/15    Cooper Landing Brewing – Black Barrel & The Bad Men  6:30p-?

8/20    Gwin’s Lodge – Jesse James  6p-10p

8/21    Gwin’s Lodge – Colin Donkey  6p-10p

8/26    Gwin’s Lodge – Frank Larosi  6p-10p

 



                 

Eagle River

8/12    Homestead Lounge – Karaoke Night w/ KJ Smoke 8p-12a 

8/13    Homestead Lounge – Dance Lessons with Shufflin Country Style 8p-9p 
8/13    Homestead Lounge – Country Night w/ DJ AumanJoy  9p-2a 
8/13    Odd Man Rush – Snacks at Midnight  7p-?

8/14    Homestead Lounge –  DJ AumanJoy  9p-2a 

8/15   Homestead Lounge –  DJ Auman Joy 8p-2a
8/15    Odd Man Rush – Miles Pruner Live  4p-?

8/17    Odd Man Rush – Karaoke Mondays  6p-9p

8/19    Homestead Lounge – Karaoke Night w/ KJ Smoke 8p-12a 
 

 

Ester

8/14    Malemute Saloon & Gold Camp – Tara Starlight & The Forest That Never Sleeps 7p-11p

8/15    Malemute Saloon & Gold Camp – Deja Vu, Old Timey Music 7:30p-11p

8/16    Malemute Saloon & Gold Camp – Sunday Deck Open Jam 2p-5p

8/19    Fairbanks Tango – Wednesday Dance Practice  6p-9p

 

Fairbanks

8/12    The Palace Theater – Golden Heart Revue  8:15p-9:15p

8/12    Running Reindeer Ranch  - Music w/ Syler Fell & Jess Klemm  7p-8p

8/12    The Spur – Karaoke Night with Rocky!  8p-11p

8/13   The International Hotel & Bar – Karaoke with Angel  8p-2a
8/13    The Marlin – Open Mic Night at the Marlin  8p-11p

8/13    The Palace Theater – Golden Heart Revue  8:15p-9:15p

8/14 The International Hotel & Bar – Encore Weekend w/ Wicked Serenity & Signs of Sacrifice  8p-12a 

8/14    The Palace Theater – Golden Heart Revue  8:15p-9:15p

8/15    Hoodoo Brewing  - After Hours w/ Cousin Curtiss, Steve Brown & the Bailers, & Adele & Friends  7:30p-11:30p

8/15  The International Hotel & Bar – Encore Weekend w/ Wicked Serenity & Signs of Sacrifice  8p-12a 

8/15    The Palace Theater – Golden Heart Revue  8:15p-9:15p
8/15    Musher’s Hall – 2026 Midnight Sun Scottish Highland Games 10a-6p

8/15   Salisbury Theater – Darci Lynne  6:30p-?

8/16    The Marlin – Karaoke  9p-?

8/16    The Palace Theater – Golden Heart Revue  8:15p-9:15p

8/17    The Palace Theater – Golden Heart Revue  8:15p-9:15p
8/24    Pioneer Park – Gazebo Nights Concert Series: Alaska Wompus Cats 6p-7p

8/18    The Cabin – Karaoke Night  7p-10p
8/18   The Palace Theater – Golden Heart Revue  8:15p-9:15p 

8/19    The Palace Theater – Golden Heart Revue  8:15p-9:15p

8/19    The Spur – Karaoke Night with Rocky!  8p-11p

 


Girdwood 
8/13    Girdwood Brewing Company – Ride Bikes, Drink Beer  6:30p-?

8/13    Jack Sprat – Live Music w/ Baker 6p-?

8/15    Alyeska Resort - Blueberry Festival  10a-6p

8/15    Raw Market – Halo w/ Posterchild, Lloyd Van Ham, & Monir  6p-?

8/16    Alyeska Resort - Blueberry Festival  10a-6p









Haines
8/14   Pioneer Bar – Open Mic Night 9p-1a
8/15    Pioneer Bar – Karaoke Night  9p-1a


Homer

8/13    AJ’s Old Town Steakhouse & Tavern – Piano Music by Erica  6p-8p

8/13    Alibi Bar & Café – Karaoke Night  9p-12:30a

8/13    Homer Council on the Arts – Community Jam Sessions  6:30p-9p

8/13    Pier One Theater – Sense And Sensibility  7:30p-8:30p

8/13    Pratt Museum – Guided tours of the Botanical Gardens, Homestead Garden, & Forest Trails. 11a-12p

8/14    Justin Cole’s Down East Saloon – Backyard Summer Concert Series & Music Festival  8:30p-1a

8/14    Kharacters Alaskan Bar – Red Marker Resistance 10p-2p

8/14    Pier One Theater – Sense And Sensibility  7:30p-10p

8/15    AJ’s Old Town Steakhouse & Tavern – Piano Music by Sunrise Kilcher  6p-8p

8/15    Alice’s Champagne Palace – Snacks At Midnight w/ The Pit ViperZ 9p-?

8/15    Justin Cole’s Down East Saloon – Backyard Summer Concert Series & Music Festival  1p-1:30a

8/15    Kharacters Alaskan Bar – Lost Rockets 10p-2p

8/15    Pier One Theater – Sense And Sensibility  7:30p-10p

8/15    Porcupine Theater – All Ages Show w/ The Pudgies, DSB, Ophelia  7:30p-?

8/15    Pratt Museum – Guided tours of the Botanical Gardens, Homestead Garden, & Forest Trails. 11a-12p

8/16    Kharacters Alaskan Bar – Chris Needham 5p-7p

8/16    Pier One Theater – Sense And Sensibility  3p-5p

8/18    Justin Cole’s Down East Saloon – Taco Tuesday's with Jim Maloney  6:30p-10p

8/18    Pratt Museum – Storytime at the Pratt: Berry Season 10:30a-11:30a

 

 

Hope

8/14    Creekbend Co.  – Noah Rinker  7p-11p 

8/14    Dirty Skillet – Spindrift 6p-10p

8/15    Creekbend Co.  – Noah Rinker  7p-11p 

8/15    Dirty Skillet – Spindrift 6p-10p 

8/16    Creekbend Co.  – Sunday Brunch with Steve Norwoord  11a-2p 

 



Juneau
8/12    Alaskan Hotel and Bar – Karaoke  8p-11p 

8/12    The Crystal Saloon – Vinyl Afternoon's w/ Dj Roman Martinez 5p-7p

8/12    The Crystal Saloon – Open Mic Night  8p-11:30p

8/13    Alaskan Hotel and Bar – Open Mic  9p-11p 
8/13    The Crystal Saloon – Vinyl Afternoon's w/ Dj Roman Martinez 5p-7p
8/13    The Crystal Saloon – Karaoke Night 8p-12a
8/14    Alaskan Hotel and Bar – Pop-Up Cherioke  9p-? 

8/14    The Crystal Saloon – Karaoke w/ Al Boogie 8p-? 
8/15    Best Window Blinds – Behind the Blinds: A Speakeasy Anniversary Party  2p-6p

8/15    The Crystal Saloon – Treadwell Trax 10p-? 

8/17    Alaskan Hotel and Bar – RawBeats w/ Astronomar & Friends  9p-? 
8/18    The Crystal Saloon – Jazz Jam Tuesday  8p-11p
8/19    Alaskan Hotel and Bar – Karaoke  8p-11p 
8/19    The Crystal Saloon – Vinyl Afternoon's w/ Dj Roman Martinez 5p-7p
8/19    The Crystal Saloon – Open Mic Night  8p-11:30p

8/19    The Crystal Saloon – Cousin Curtiss & Harrison B 8p-? 

 

Kasilof

 

Kenai

8/14    Skeet’s Dive Bar – Snacks At Midnight w/ The Pit ViperZ 9p-?

8/15    Duck Inn Café – Yacht Rock Sing –Along Brunch  11a-2p

8/15    Vagabond Inn – Troubadour North  8p-?

8/17    Kenai Chamber of Commerce & Visitor Center – Storytime & Craft: "It's Time for Berries!"  11a-?

8/22    Skeet’s Dive Bar – '26 Divorce Party  9p-?

 

 

Ketchikan

8/12    Inn at Creek Street – The Ukulele Group  3:45p-4:45p

8/12    Ketchikan Dock – Music on the Dock: The Foghorn Five 12p-1p

8/13    105.3 FM KRBD – Ketchikan Arts & Humanities Council: Arts Report  8:20a-8:35a
8/13    Ketchikan Dock – Music on the Dock: DJ DJ Archieologic 12p-1p

8/13    Totem Bar – Open Mic Night  8p-10p

8/14    Bush Pilots’ Lounge – Live Music with Sarah Short 6p-8p

8/14    The  Creek Street Cabaret – Square Dance w/ Music by the Free Radicals    7p-9p

8/14    The New York Café – Live Music in the Café 7p-9p

8/15    Arctic Bar – Virgin Voyages: Brilliant Lady Land Party 12p-6p

8/15    The  Creek Street Cabaret – Badd Dog Blues Society   8p-10p

8/15    Tongass Historical Museum – Summer Saturdays at the Museum  1p-3p

8/16    The  Creek Street Cabaret – Open Mic Night w/ Joe Williams   6p-9p

8/18    Hole in the Wall – Open Mic Night  6p-8p

8/18    Ketchikan Dock – Music on the Dock: ATTK! 12p-1p

8/18    Ketchikan Public Library – Mud on the Moon Book Launch  6:30p-7:30p

8/19    Inn at Creek Street – The Ukulele Group  3:45p-4:45p

 


Kodiak

8/14    The Rendezvous – Roland Roberts Band 8p-11p

8/15    The Rendezvous – Roland Roberts Band 8p-11p

 

McCarthy 

8/13    The Golden Saloon – Open Mic Night
8/14    The Golden Saloon – McWavy
8/15    The Golden Saloon – McWavy



 

North Pole

8/13    North Pole Alehouse – Karaoke Thursdays with Rocky Barnette 8p-12a

8/15    North Pole Alehouse – Retirement Home Takeover Party w/ DJ 4K 9p-2p

8/18    North Pole Alehouse – Tuesday Pub Run w/ Tundra Trotters 6:15p-9p


Palmer

8/12    Bleeding Heart Brewery – Fireside Book Club  6:30p-8:30p

8/12    Four Corner’s Lounge – West Coast Sing Wednesday 7:30p-9:30p

8/14    American Legion Post 15 – Karaoke  7p-11p

8/14    Downtown Palmer – Friday Fling Live Music Solo Steve 12p-3p

8/14    Palmer Alehouse – Black Barrel and the Bad Men 7p-10p

8/14    Palmer Train Depot – Rhythm & Royalty Tour  7p-11:30p

8/15    American Legion Post 15 – Two-Step and Country Swing Dance Lessons!  7p-8p

8/15    American Legion Post 15 – Karaoke  8p-11p

8/15    Government Peak Recreation Area – Veins of Gold Mountain Race  9a-?

8/15    Hatcher Pass Lodge – Collin Donley  4p-7p

8/15    Palmer Alehouse – Johnny Prizm  7p-10p

8/16    Four Corner’s Lounge – Karaoke  8p-?

8/18    Fishhook Bar & Grill – Open Mic Night w/ Drew Sablon  6p-9p

8/18    Four Corner’s Lounge – Industry Night with DJ Red  8p-?

8/19    Four Corner’s Lounge – West Coast Sing Wednesday 7:30p-9:30p



Salcha

 

 

Seldovia

8/21    Linwood Bar & Grill – Live Music w/ Jim Maloney

8/22    Linwood Bar & Grill – Live Music w/ Jim Maloney

 

Seward

8/12    Yukon Bar –  Karaoke with Raunchy Rachel  9p-1a

8/13    Yukon Bar –  Dance Night w/ DJ Waitwat  9p-2a

8/14    Flamingo Lounge – Live Music w/ The Jephries ft. Luv Guvna  6:30p-9:30p

8/14    Yukon Bar  – King Monkey w/ Bananahands Live  9p-2a

8/15    Yukon Bar  – SIXSTAR w/ The Wet Spots, BoyMom, & Filthy Mike  9p-2a 

8/16    Yukon Bar –  Karaoke  9p-1a

8/17    Seward Senior Center – Seward Strings  1p-4p

8/17    Yukon Bar –  Karaoke with Megan Killoran  9p-1a

8/18    Yukon Bar  – Open Mic Night with Braden   8p-2a

8/19    Yukon Bar –  Karaoke with Raunchy Rachel  9p-1a


Sitka

8/15    Crescent Harbor – Sitka Conservation Society Wilderness Cruise 5p-8p

8/15    Sitka Fine Arts Camp – Sitka Blues Fest  3p-9p

 

Skagway 

8/14    Skagway Brewing – Skagway Idol 7:30p-?

8/15    Skagway Library – Read with a Ranger Story Time 10:30a-?

8/15    Skagway Library – Music Time 3p-5p

8/16    Skagway Library – Music Time 3p-5p

 

Soldotna

8/12    Soldotna Creek Park – Levitt Amp Music Series: Noah Richardson & Bunny Swan  6p-9p

8/12    Soldotna Library – Bouncing Babes Story Time  10:30a-11a

8/13    Soldotna Library – Preschool Storytime 10:30a-11a

8/15      The Goods – Karaoke w/ Edencraft  5p-8p

8/15    The Orca Theater – The Killer Comedy Show Ft. Sabrina Speers  8:30p-11p

8/17    The Goods – Friends of Mike Morgan Song Circle  5p-7p

8/18    Soldotna Library – Toddler Story Time  10:30a-11a

8/19    Soldotna Creek Park – Levitt Amp Music Series: Kenny Smith & The Old Wolves w/ The Copper River Band   6p-9p

8/19    Soldotna Library – Bouncing Babes Story Time  10:30a-11a

 

Sterling

8/14    Naptowne Brewing Company – Brandon Kellum  6p-9p

8/15    Lakeside Falls – Taste of Aloha! A Traditional Hawaiian Luau  5:30p-7:30p

8/15    Naptowne Brewing Company – Tune Weavers  4p-8p

 

Talkeetna

8/12    Denali Brewing Company – Solo Steve Norwood  5:30p-8:30

8/14    Mountain High Pizza – Collin Donley Live  7p-10p 

8/14    Talkeetna Village Park –  Live At Five Summer Concerts: TKA Hawks  5p-7p

8/15    Fairview Inn – Madeline & the Brothers Smith  9p-1a

8/15    Sheldon Community Arts Hangar – Salmon Run Art Auction Fundraiser  3p-5p

8/16    Mountain High Pizza Pie – Steve Durr 1p-2:30p & 5p-6:30p

8/17    Fairview Inn – Karaoke  9p-1a

8/19    Denali Brewing Company – Blackwater Railroad Co.  5:30p-8:30

 

Trapper Creek

8/13    Boots Bison Ranch – Trapper Creek Bluegrass Revival   

8/14    Boots Bison Ranch – Trapper Creek Bluegrass Revival   

8/15    Boots Bison Ranch – Trapper Creek Bluegrass Revival  

8/16    Boots Bison Ranch – Trapper Creek Bluegrass Revival  

 


Valdez

8/15    Valdez Brewing – Saturday Market 10a-4p

 

 

Wasilla

8/12    Black Birch Books – Sign Language Classes 5p-6p

8/12    Schwabenhof  - Open Mic  7:30p-11p
8/13    Everett’s – Live Music With Drew Sablon  6p-9p

8/13    Settler’s Bay Lodge – Collin Donley Live  6p-?

8/14    Black Birch Books – Storytelling Night: Shared Scars 5p-7p

8/14    Last Frontier Brewing Company – Live Music w/ Sergio 6p-9p

8/14    Schwabenhof  - Karaoke Night  8p-11p

8/15    Last Frontier Brewing Company – Rick Brooks Live 6p-9p

8/15    Tug Bar & Liquor- Goose Bay Inn – Live Music with Monster on the Mountain

8/16    Tug Bar & Liquor- Goose Bay Inn – Live Music w/ Pam Santoro

8/18    Everett’s – Live Music w/ Jerry Wessling 6p-9p

8/18    Ken’s Garden Center – Storytime at Ken’s 10a-11a

8/18    Schwabenhof  - Karaoke Night  8p-11p

8/19    Black Birch Books – Sign Language Classes 5p-6p

8/19    Schwabenhof  - Open Mic  7:30p-11p
"""

VALID_CITIES = [
    'Anchorage', 'Fairbanks', 'Juneau', 'Eagle River', 'Girdwood', 'Homer', 'Hope', 'Kenai',
    'Ketchikan', 'Palmer', 'Seward', 'Soldotna', 'Talkeetna', 'Wasilla', 'Kodiak', 'Valdez',
    'Sitka', 'Petersburg', 'Wrangell', 'Utqiagvik', 'Barrow', 'Nome', 'Bethel', 'Kotzebue',
    'Cordova', 'Cooper Landing', 'Chiniak', 'Moose Pass', 'Willow', 'Ninilchik', 'Kasilof',
    'Delta Junction', 'Tok', 'Healy', 'Nenana', 'Sutton', 'JBER', 'Big Lake', 'Skagway',
    'Ester', 'Salcha', 'Seldovia', 'Trapper Creek', 'Chicken', 'Sterling', 'Haines', 'McCarthy', 'North Pole'
]

MONTHS = {
    'january': '01', 'february': '02', 'march': '03', 'april': '04',
    'may': '05', 'june': '06', 'july': '07', 'august': '08',
    'september': '09', 'october': '10', 'november': '11', 'december': '12'
}

def detect_category(title):
    t = str(title).lower()
    if 'comedy' in t or 'standup' in t or 'drag show' in t: return 'comedy'
    if 'dance' in t or 'swing' in t or 'salsa' in t or 'bachata' in t or 'tango' in t or 'two-step' in t or 'two step' in t: return 'dance'
    if 'theatre' in t or 'theater' in t or 'musical' in t or 'opera' in t or 'play' in t: return 'theatre'
    if 'festival' in t or 'fest' in t or 'fair' in t or 'luau' in t: return 'festival'
    if 'storytime' in t or 'story time' in t or 'library' in t or 'marathon' in t or 'run' in t or 'market' in t or 'class' in t: return 'community'
    return 'music'

def slugify(text):
    return re.sub(r'[^a-z0-9]+', '-', text.lower()).strip('-')

def parse_pasted_events():
    lines = [l.strip() for l in PASTED_TEXT.split('\n') if l.strip()]

    events_list = []
    current_city = 'Anchorage'
    current_date = None

    date_regex = re.compile(
        r'^(?:Sunday|Monday|Tuesday|Wednesday|Thursday|Friday|Saturday)\s+(January|February|March|April|May|June|July|August|September|October|November|December)\s+(\d{1,2})(?:st|nd|rd|th)?',
        re.IGNORECASE
    )

    other_city_date_regex = re.compile(r'^(\d{1,2})\/(\d{1,2})\s+(.+)$')

    for line in lines:
        # Check city header
        is_city = False
        for c in VALID_CITIES:
            if line.lower() == c.lower():
                current_city = c
                is_city = True
                break
        if is_city:
            continue

        # Date header
        d_match = date_regex.match(line)
        if d_match:
            m_name, day_num = d_match.groups()
            m_num = MONTHS[m_name.lower()]
            d_num = day_num.zfill(2)
            current_date = f"2026-{m_num}-{d_num}"
            continue

        # Other city date format M/D e.g. "8/15    Tuzzy Consortium Library – Storytime"
        oc_match = other_city_date_regex.match(line)
        if oc_match:
            m_num = oc_match.group(1).zfill(2)
            d_num = oc_match.group(2).zfill(2)
            rest = oc_match.group(3).strip()
            e_date = f"2026-{m_num}-{d_num}"
            parse_single_event(rest, current_city, e_date, events_list)
            continue

        if current_date and ('–' in line or ' - ' in line or ' — ' in line):
            parse_single_event(line, current_city, current_date, events_list)

    return events_list

def parse_single_event(line, city, date, results):
    normalized = line.replace(' – ', ' - ').replace(' — ', ' - ')
    parts = normalized.split(' - ')
    if len(parts) < 2:
        return

    venue = parts[0].strip()
    rest = parts[1].strip()

    time_regex = r'\b(\d+(?::\d+)?(?:a|p)?\s*-\s*(?:\d+(?::\d+)?(?:a|p)?|\?|Close)(?:\s*(?:&|and)\s*\d+(?::\d+)?(?:a|p)?\s*-\s*(?:\d+(?::\d+)?(?:a|p)?|\?))?|\d+p|\d+a)\s*$'
    t_match = re.search(time_regex, rest, re.IGNORECASE)

    title = rest
    time_str = ""
    if t_match:
        time_str = t_match.group(1).strip()
        title = rest[:t_match.start()].strip()
        title = re.sub(r'[-\s,]$', '', title).strip()

    if venue and title:
        slug = slugify(f"{title}-{venue}-{date}")
        results.append({
            "id": slug,
            "title": title,
            "venue": venue,
            "city": city,
            "date": date,
            "time": time_str,
            "category": detect_category(title),
            "slug": slug,
            "ticketUrl": "",
            "description": f"{title} live at {venue} in {city}, Alaska."
        })

def main():
    parsed = parse_pasted_events()
    print(f"Total parsed events from pasted schedule: {len(parsed)}")

    with open('events.json', 'r', encoding='utf-8') as f:
        existing = json.load(f)

    # Clean keys
    existing_keys = set()
    for e in existing:
        t_clean = re.sub(r'[^a-z0-9]', '', e['title'].lower())
        v_clean = re.sub(r'[^a-z0-9]', '', e['venue'].lower())
        existing_keys.add(f"{t_clean}|{v_clean}|{e['date']}")

    missing = []
    matched = 0

    for p in parsed:
        t_clean = re.sub(r'[^a-z0-9]', '', p['title'].lower())
        v_clean = re.sub(r'[^a-z0-9]', '', p['venue'].lower())
        key = f"{t_clean}|{v_clean}|{p['date']}"

        if key in existing_keys:
            matched += 1
        else:
            # Fuzzy match check
            fuzzy = False
            for ex in existing:
                if ex['date'] == p['date']:
                    ex_t = re.sub(r'[^a-z0-9]', '', ex['title'].lower())
                    ex_v = re.sub(r'[^a-z0-9]', '', ex['venue'].lower())
                    if (t_clean in ex_t or ex_t in t_clean) and (v_clean in ex_v or ex_v in v_clean):
                        fuzzy = True
                        break
            if fuzzy:
                matched += 1
            else:
                missing.append(p)

    print(f"Matched in Repository Database: {matched}")
    print(f"Missing from Repository Database: {len(missing)}")

    if missing:
        print("\n=== MISSING EVENTS FOUND IN PASTED SCHEDULE ===")
        for idx, m in enumerate(missing, 1):
            print(f"{idx}. [{m['date']}] {m['city']} | {m['venue']} – {m['title']} ({m['time']})")
        
        with open('wayback_data/missing_pasted_events.json', 'w', encoding='utf-8') as f:
            json.dump(missing, f, indent=2)
    else:
        print("\n🎉 100% INCLUDED! All events in the pasted schedule are ALREADY present in the repository database!")

if __name__ == '__main__':
    main()
