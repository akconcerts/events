import event1 from "@/assets/event-1.jpg";
import event2 from "@/assets/event-2.jpg";
import event3 from "@/assets/event-3.jpg";
import event4 from "@/assets/event-4.jpg";
import event5 from "@/assets/event-5.jpg";
import event6 from "@/assets/event-6.jpg";

export type Event = {
  id: string;
  slug: string;
  title: string;
  artist: string;
  venue: string;
  city: "Anchorage" | "Fairbanks" | "Juneau" | "Kenai" | "Seward" | "Wasilla";
  date: string; // ISO
  doors: string;
  genre: "Rock" | "Indie" | "Country" | "Hip-Hop" | "Electronic" | "Comedy" | "Folk" | "Metal";
  age: "All Ages" | "18+" | "21+";
  price: string;
  free?: boolean;
  ticketUrl: string;
  image: string;
  featured?: boolean;
  bucket: "tonight" | "weekend" | "upcoming";
};

export const events: Event[] = [
  {
    id: "1",
    slug: "northern-howl-koots",
    title: "Northern Howl",
    artist: "Northern Howl + The Pale Lights",
    venue: "Chilkoot Charlie's",
    city: "Anchorage",
    date: "2026-05-09T21:00:00-08:00",
    doors: "9:00 PM",
    genre: "Indie",
    age: "21+",
    price: "$22",
    ticketUrl: "#",
    image: event1,
    featured: true,
    bucket: "tonight",
  },
  {
    id: "2",
    slug: "midnight-sun-rave",
    title: "Midnight Sun Rave",
    artist: "DJ Tundra · Glacier Bass",
    venue: "Williwaw Social",
    city: "Anchorage",
    date: "2026-05-09T22:30:00-08:00",
    doors: "10:30 PM",
    genre: "Electronic",
    age: "21+",
    price: "$30",
    ticketUrl: "#",
    image: event2,
    bucket: "tonight",
  },
  {
    id: "3",
    slug: "frostbite-comedy-night",
    title: "Frostbite Comedy Night",
    artist: "Hosted by Jess Lambert",
    venue: "The Beartooth Theatrepub",
    city: "Anchorage",
    date: "2026-05-10T20:00:00-08:00",
    doors: "8:00 PM",
    genre: "Comedy",
    age: "18+",
    price: "$15",
    ticketUrl: "#",
    image: event3,
    bucket: "weekend",
  },
  {
    id: "4",
    slug: "salmonfest-preview",
    title: "Salmonfest Preview Show",
    artist: "Hannah & The Backbone",
    venue: "Hooligan's Lodge",
    city: "Kenai",
    date: "2026-05-10T19:00:00-08:00",
    doors: "7:00 PM",
    genre: "Country",
    age: "All Ages",
    price: "Free",
    free: true,
    ticketUrl: "#",
    image: event4,
    featured: true,
    bucket: "weekend",
  },
  {
    id: "5",
    slug: "tundra-takeover",
    title: "Tundra Takeover",
    artist: "Lil Permafrost · ICEBLK",
    venue: "Sullivan Arena",
    city: "Anchorage",
    date: "2026-05-15T20:00:00-08:00",
    doors: "8:00 PM",
    genre: "Hip-Hop",
    age: "All Ages",
    price: "$45",
    ticketUrl: "#",
    image: event5,
    featured: true,
    bucket: "upcoming",
  },
  {
    id: "6",
    slug: "fairbanks-folk-circle",
    title: "Fairbanks Folk Circle",
    artist: "Marigold Hollow",
    venue: "The Marlin",
    city: "Fairbanks",
    date: "2026-05-12T19:30:00-08:00",
    doors: "7:30 PM",
    genre: "Folk",
    age: "21+",
    price: "$12",
    ticketUrl: "#",
    image: event6,
    bucket: "upcoming",
  },
];

export const cities = ["Anchorage", "Fairbanks", "Juneau", "Kenai", "Seward", "Wasilla"] as const;
export const genres = ["Live Music", "Comedy", "Festivals", "Electronic", "Country", "Hip-Hop", "Folk", "Metal"] as const;
