//  tours array

export interface Tour {
  id: string;
  title: string;
  nights: number;
  summary: string;
  image: string;
  gallery: string[];
  itinerary: {
    day: number;
    title: string;
    description: string;
  }[];
  included: string[];
  excluded: string[];
  location: string;
  price?: string;
  highlights?: {
    label: string;
    value: string;
  }[];
}

export const tours: Tour[] = [
  {
    id: "uganda-rwanda-10days",
    title: "10-Days Uganda and Rwanda Private Safari Tour",
    nights: 9,
    summary: "Experience the best of Uganda and Rwanda, tracking gorillas and chimpanzees, game drives, and cultural highlights.",
    image: "https://i.pinimg.com/736x/34/6f/8f/346f8f7e0eafcb88600b8a98aa32dce6.jpg",
    gallery: [
      "https://i.pinimg.com/736x/34/6f/8f/346f8f7e0eafcb88600b8a98aa32dce6.jpg","https://cdn.pixabay.com/photo/2021/06/20/15/46/rocks-6351404_1280.jpg",
      "https://cdn.pixabay.com/photo/2023/01/09/22/08/giraffes-7708391_1280.jpg"
    ],
    itinerary: [
      { day: 1, title: "Arrival in Entebbe, Uganda", description: "Meet and greet at Entebbe International Airport, transfer to hotel." },
      { day: 2, title: "Ziwa Rhino Sanctuary – Murchison Falls", description: "Rhino tracking at Ziwa Sanctuary, transfer to Murchison Falls." },
      { day: 3, title: "Murchison Game Drive & Nile River Safari", description: "Morning game drive and afternoon boat cruise." },
      { day: 4, title: "Transfer to Kibale Forest", description: "Drive to Kibale Forest for chimpanzee tracking." },
      { day: 5, title: "Chimpanzee Tracking & Bigodi Wetland", description: "Morning chimp trek and afternoon wetland walk." },
      { day: 6, title: "Kibale – Queen Elizabeth National Park", description: "Drive through crater lakes, afternoon game drive." },
      { day: 7, title: "Game Drive & Kazinga Channel Boat Safari", description: "Morning game drive and afternoon boat safari." },
      { day: 8, title: "Queen Elizabeth – Bwindi Forest", description: "Drive via Ishasha, possible tree-climbing lions, reach Bwindi." },
      { day: 9, title: "Gorilla Trekking – Transfer to Volcanoes NP", description: "Morning gorilla trek, cross into Rwanda." },
      { day: 10, title: "Cultural Visit – Kigali & Departure", description: "Visit cultural sites, city tour, airport transfer." }
    ],
    included: [
      "Private 4x4 transport with English-speaking driver-guide",
      "Gorilla and chimp permits, park fees, game drives, boat cruises",
      "All accommodations for 9 nights",
      "All meals as per itinerary",
      "Bottled water, border crossing support"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Tips and personal expenses",
      "Travel insurance"
    ],
    location: "Uganda & Rwanda",
    highlights: [{ label: "Duration", value: "10 Days, 9 Nights" }]
  },
  {
    id: "rwanda-chimp-gorilla-4days",
    title: "4-Days Chimpanzee and Gorilla Tracking Rwanda",
    nights: 3,
    summary: "Focused primate expedition in Rwanda, trekking chimpanzees and gorillas with expert guides.",
    image: "https://i.pinimg.com/1200x/a9/3e/3a/a93e3a47255b6ad9b798c22c51327301.jpg",
    gallery: ["https://i.pinimg.com/736x/e0/83/c3/e083c397d1853489522b905f9da8ff52.jpg","https://cdn.pixabay.com/photo/2024/07/23/19/57/chimpanzee-8916278_1280.jpg","https://i.pinimg.com/1200x/0d/c4/cb/0dc4cb1917662ba14424a0e07b2cf75e.jpg"],
    itinerary: [
      { day: 1, title: "Arrival Kigali – Transfer to Nyungwe or Gishwati", description: "Pick-up, optional stop at Kings Palace Museum." },
      { day: 2, title: "Chimpanzee Trekking – Nature Walk", description: "Morning chimp trek, afternoon nature walk." },
      { day: 3, title: "Transfer to Volcanoes NP", description: "Drive north, arrival at Volcanoes NP." },
      { day: 4, title: "Gorilla Trekking – Return to Kigali", description: "Morning gorilla trek, return to Kigali." }
    ],
    included: [
      "Private 4x4 transport and driver guide",
      "Chimpanzee and Gorilla permits",
      "Park fees and guided activities",
      "3 nights accommodation",
      "All meals as per itinerary",
      "Drinking water during travel",
      "All transfers"
    ],
    excluded: ["International flights", "Rwanda visa", "Tips", "Travel/medical insurance"],
    location: "Rwanda",
    highlights: [{ label: "Duration", value: "4 Days, 3 Nights" }]
  },
  {
    id: "akagera-3days",
    title: "3-Days Akagera National Park Wildlife Safari",
    nights: 2,
    summary: "Explore Rwanda's savannah, lakes, and wetlands for incredible wildlife encounters.",
    image: "https://i.pinimg.com/1200x/45/14/8e/45148e1eeeb06e12079c78c5bc7bd1e7.jpg",
    gallery: ["https://i.pinimg.com/1200x/68/9d/b4/689db485910d312bf791388306a37936.jpg","https://i.pinimg.com/1200x/53/82/50/538250b0699a2343c227d0f03b776d56.jpg","https://i.pinimg.com/736x/3a/60/32/3a603246a9c1ba9d6eecf82221ee23c0.jpg"],
    itinerary: [
      { day: 1, title: "Transfer to Akagera – Afternoon Game Drive", description: "Arrive, check-in, first game drive in southern circuit." },
      { day: 2, title: "Full-Day Game Drive – Northern Circuit", description: "Explore northern plains, picnic lunch, wildlife spotting." },
      { day: 3, title: "Boat Safari on Lake Ihema – Return", description: "Morning boat safari and drive back to Kigali." }
    ],
    included: [
      "Park entrance fees",
      "Accommodation",
      "All meals",
      "Game drives and boat safari"
    ],
    excluded: ["International flights", "Visa fees", "Tips", "Personal expenses"],
    location: "Akagera National Park, Rwanda",
    highlights: [{ label: "Duration", value: "3 Days, 2 Nights" }]
  },
  {
    id: "tanzania-tarangire-ngorongoro-serengeti-5days",
    title: "5-Days Tarangire, Ngorongoro, Serengeti – Mid-Range",
    nights: 4,
    summary: "Northern Tanzania safari circuit covering Tarangire, Ngorongoro, and Serengeti with mid-range accommodation.",
    image: "https://i.pinimg.com/1200x/ae/89/53/ae8953074100bf9007cbdecc73325817.jpg",
    gallery: ["https://i.pinimg.com/1200x/e2/6a/bf/e26abfdfca35962c0c8ea360fa40f2d2.jpg","https://i.pinimg.com/1200x/35/a3/42/35a34293440bd9c25b0b0ba81896650d.jpg","https://i.pinimg.com/736x/3e/a5/45/3ea545cb8d651d277d4d221aa9492b0c.jpg"],
    itinerary: [
      { day: 1, title: "Arrival – Tarangire", description: "Game drive and check-in at lodge." },
      { day: 2, title: "Tarangire – Serengeti via Ngorongoro", description: "Scenic drive, game drive en route." },
      { day: 3, title: "Full Day in Serengeti", description: "Sunrise optional, game drives, picnic lunch." },
      { day: 4, title: "Serengeti – Ngorongoro Crater", description: "Morning game drive, check-in on crater rim." },
      { day: 5, title: "Ngorongoro Crater – Arusha Departure", description: "Game drive and return to Arusha." }
    ],
    included: [
      "All park fees and taxes",
      "Professional guide",
      "Safari vehicle with pop-up roof",
      "Mid-range accommodation",
      "All meals specified",
      "Bottled water during drives",
      "Airport transfers"
    ],
    excluded: ["International flights", "Visa fees", "Tips", "Optional activities"],
    location: "Tanzania",
    highlights: [{ label: "Duration", value: "5 Days, 4 Nights" }]
  },
  {
    id: "bisoke-nyungwe-7days",
    title: "7 Days Bisoke And Nyungwe Hike",
    nights: 6,
    summary: "7-day Rwanda hiking adventure exploring Mount Bisoke and Nyungwe National Park.",
    image: "https://i.pinimg.com/1200x/9f/85/80/9f858099c06b4e18f863f32525dd7baa.jpg",
    gallery: ["https://i.pinimg.com/1200x/6d/44/df/6d44dfdbe9f06622d92a92ab3d574546.jpg","https://i.pinimg.com/1200x/0d/a8/d4/0da8d4ff90bef36f6efc6f3cf274edfa.jpg","https://i.pinimg.com/736x/fd/5a/de/fd5ade720075fcd53dbdc51409b5e62d.jpg"],
    itinerary: [
      { day: 1, title: "Arrival Kigali", description: "Pickup and hotel check-in, briefing." },
      { day: 2, title: "Transfer to Volcanoes NP – Musanze", description: "Scenic drive, preparation for hike." },
      { day: 3, title: "Mount Bisoke Hike", description: "Full-day hike to Bisoke Crater Lake." },
      { day: 4, title: "Transfer to Nyungwe Forest", description: "Scenic drive, orientation at park." },
      { day: 5, title: "Canopy Walk & Waterfall Hike", description: "Morning canopy walk, afternoon waterfall hike." },
      { day: 6, title: "Nature Trails & Primates Hike", description: "Optional chimp or colobus monkey trek." },
      { day: 7, title: "Return to Kigali & Departure", description: "Drive back with optional city stops." }
    ],
    included: [
      "Accommodation",
      "All meals",
      "Guided hikes and permits",
      "Transport"
    ],
    excluded: ["International flights", "Visa fees", "Tips", "Travel insurance"],
    location: "Rwanda",
    highlights: [{ label: "Duration", value: "7 Days, 6 Nights" }]
  },
  {
    id: "lake-nakuru-masai-mara-5days",
    title: "5 Days Lake Nakuru & Masai Mara",
    nights: 4,
    summary: "Kenya safari exploring Lake Nakuru and Maasai Mara with Big Five sightings.",
    image: "https://i.pinimg.com/1200x/82/3b/d4/823bd4dc74c6cf42b5379397deb0a96e.jpg",
    gallery: ["https://i.pinimg.com/736x/7e/7d/a1/7e7da1f0fb06b00e8d30f339573c70fe.jpg","https://i.pinimg.com/736x/5f/38/85/5f3885ce4a53ffe54c9fff4be3cdf1f7.jpg","https://i.pinimg.com/1200x/4c/67/f2/4c67f2e80827811db0a6931fab5d4a5a.jpg"],
    itinerary: [
      { day: 1, title: "Nairobi to Lake Nakuru", description: "Game drive on arrival." },
      { day: 2, title: "Lake Nakuru – Maasai Mara", description: "Morning game drive, drive to Mara, evening drive." },
      { day: 3, title: "Full-Day Safari – Maasai Mara", description: "Game drive with picnic lunch." },
      { day: 4, title: "Cultural Visit & Evening Game Drive", description: "Optional Maasai village, guided walk." },
      { day: 5, title: "Return to Nairobi", description: "Drive back, drop-off at hotel or airport." }
    ],
    included: [
      "Accommodation",
      "All meals as per itinerary",
      "Game drives and park fees",
      "Transport in 4x4"
    ],
    excluded: ["International flights", "Visa fees", "Tips"],
    location: "Kenya",
    highlights: [{ label: "Duration", value: "5 Days, 4 Nights" }]
  },
  {
    id: "serengeti-migration-8days",
    title: "8-Days Mid-Range Serengeti Migration Safari",
    nights: 7,
    summary: "Follow the Great Migration in Serengeti, plus Ngorongoro highlands experience with mid-range camps.",
    image: "https://i.pinimg.com/1200x/3d/52/be/3d52be4578b991e4ed14230deecfe968.jpg",
    gallery: ["https://i.pinimg.com/1200x/8c/8d/39/8c8d391974e82e3a2c2422ee8775394b.jpg","https://i.pinimg.com/1200x/88/81/0f/88810f840bdab66b7495c37f2771d024.jpg","https://i.pinimg.com/1200x/35/91/77/359177885f8892fe88a78621ce7d4bd4.jpg"],
    itinerary: [
      { day: 1, title: "Arrival Arusha", description: "Meet guide, lodge check-in." },
      { day: 2, title: "Arusha – Tarangire", description: "Game drive and lodge stay." },
      { day: 3, title: "Ngorongoro Highlands", description: "Optional Maasai village visit, crater rim lodge." },
      { day: 4, title: "Ngorongoro Crater – Serengeti", description: "Half-day crater game drive, transfer to Serengeti." },
      { day: 5, title: "Central Serengeti – Seasonal Migration Area", description: "Move based on migration season." },
      { day: 6, title: "Full-Day Migration Safari", description: "Game drives, optional bush lunch." },
      { day: 7, title: "Return to Karatu", description: "Optional morning game drive, village walk." },
      { day: 8, title: "Arusha Departure", description: "Drive or fly to Arusha, airport transfer." }
    ],
    included: [
      "Private 4x4 vehicle with pop-up roof",
      "Professional English-speaking guide",
      "Park fees and conservation fees",
      "Mid-range accommodation",
      "All meals as stated",
      "Bottled water"
    ],
    excluded: ["International flights", "Tips"],
    location: "Tanzania",
    highlights: [{ label: "Duration", value: "8 Days, 7 Nights" }]
  },
  {
    id: "uganda-9days",
    title: "9 Days African Safari Experience (Uganda)",
    nights: 8,
    summary: "Comprehensive Uganda safari covering chimpanzees, gorillas, Queen Elizabeth and Bwindi National Parks.",
    image: "https://i.pinimg.com/1200x/35/98/10/3598104c8d085c4d1faa12f634cfcf0f.jpg",
    gallery: ["https://i.pinimg.com/1200x/70/71/6a/70716a06a382d01c494cec307b36d886.jpg","https://i.pinimg.com/736x/05/03/69/050369eb4ca1b4e644a8e63ffb0153f4.jpg","https://i.pinimg.com/736x/bf/5d/b0/bf5db01adf50206def717e4c86af9245.jpg","https://i.pinimg.com/1200x/6c/ba/0e/6cba0ee462286a3f289c474b7d051eca.jpg","https://i.pinimg.com/1200x/64/e5/8e/64e58e90ff155a7be06560482e45ec03.jpg","https://i.pinimg.com/736x/aa/d2/73/aad273cf777d880f2ec0081dc1623e01.jpg"],
    itinerary: [
      { day: 1, title: "Arrival in Entebbe", description: "Meet guide, optional sunset cruise." },
      { day: 2, title: "Ziwa Rhino Sanctuary – Murchison Falls", description: "Early rhino tracking, continue to falls." },
      { day: 3, title: "Game Drive & Boat Safari", description: "Game drive and boat cruise." },
      { day: 4, title: "Transfer to Kibale Forest", description: "Scenic drive, check-in at lodge." },
      { day: 5, title: "Chimpanzee Tracking & Bigodi Wetland", description: "Morning trek and wetland walk." },
      { day: 6, title: "Transfer to Queen Elizabeth NP", description: "Game drive in Kasenyi Plains." },
      { day: 7, title: "Game Drive & Kazinga Channel", description: "Morning and afternoon wildlife viewing." },
      { day: 8, title: "Transfer to Bwindi Impenetrable Forest", description: "Drive via Ishasha sector." },
      { day: 9, title: "Gorilla Trekking – Return", description: "Gorilla trek and transfer to Entebbe or Kigali." }
    ],
    included: [
      "4x4 transport",
      "Accommodations",
      "All meals",
      "Park entry fees",
      "Gorilla and chimp permits",
      "Driver-guide"
    ],
    excluded: ["International flights", "Visa fees", "Tips"],
    location: "Uganda",
    highlights: [{ label: "Duration", value: "9 Days, 8 Nights" }]
  },
  {
    id: "gorilla-1day-rwanda",
    title: "1 Day Gorilla Trekking Rwanda",
    nights: 0,
    summary: "Single-day gorilla trekking experience in Volcanoes National Park, Rwanda.",
    image: "https://i.pinimg.com/1200x/b0/cc/b3/b0ccb3a72b2cc39134881221afae8ada.jpg",
    gallery: ["https://i.pinimg.com/736x/87/61/e7/8761e78a47397c2728a4761b25198b09.jpg","https://i.pinimg.com/736x/fb/3f/06/fb3f067831cdceea76f9bd5e0980ffc6.jpg","https://i.pinimg.com/736x/b5/bf/56/b5bf5650a8819748189238cf5babb8af.jpg"],
    itinerary: [
      { day: 1, title: "Early Morning Transfer", description: "Depart Kigali to Volcanoes NP." },
      { day: 1, title: "Gorilla Trekking", description: "1-hour guided trek with habituated gorilla family." },
      { day: 1, title: "Return to Kigali", description: "Drive back to Kigali, certificate ceremony." }
    ],
    included: [
      "Private 4x4 transport",
      "Gorilla trekking permit",
      "Park fees and ranger guidance",
      "Bottled water"
    ],
    excluded: ["International flights", "Visa fees", "Tips"],
    location: "Rwanda",
    highlights: [{ label: "Duration", value: "1 Day" }]
  },
  {
    id: "kenya-big5-8days",
    title: "8 Days Big 5 Safari (Kenya)",
    nights: 7,
    summary: "Kenya Big 5 safari covering Samburu, Nakuru, Naivasha and Masai Mara.",
    image: "https://i.pinimg.com/1200x/07/d6/84/07d684d11220c463bcd62d66a1172b34.jpg",
    gallery: ["https://i.pinimg.com/1200x/b0/40/99/b040993500f013c7e41542534556d546.jpg","https://i.pinimg.com/1200x/e2/0b/b4/e20bb48f0c854831dc902a730f611b2b.jpg","https://i.pinimg.com/1200x/8e/42/e7/8e42e7985644e87f688846febffdc73d.jpg","https://i.pinimg.com/1200x/f2/d2/d0/f2d2d0653d090fc7e20624d732d0c4e0.jpg","https://i.pinimg.com/736x/5c/40/06/5c4006614de0d515a9f261b63d408907.jpg","https://i.pinimg.com/736x/4e/d8/03/4ed8030bbec4c114d373e043fc6a6ddd.jpg"],
    itinerary: [
      { day: 1, title: "Arrival Nairobi", description: "Hotel check-in and safari briefing." },
      { day: 2, title: "Nairobi – Samburu", description: "Drive to Samburu Game Reserve." },
      { day: 3, title: "Samburu Game Drives", description: "Morning and afternoon drives." },
      { day: 4, title: "Samburu – Nakuru", description: "Drive with lunch stop, afternoon game drive." },
      { day: 5, title: "Nakuru – Naivasha", description: "Morning game drive, boat ride, Crescent Island." },
      { day: 6, title: "Naivasha – Masai Mara", description: "Drive to Masai Mara, afternoon game drive." },
      { day: 7, title: "Full Day – Masai Mara", description: "Game drive and picnic lunch." },
      { day: 8, title: "Masai Mara – Nairobi", description: "Return to Nairobi." }
    ],
    included: ["Accommodation", "All meals as per itinerary", "Transport", "Game drives"],
    excluded: ["International flights", "Visa fees", "Tips"],
    location: "Kenya",
    highlights: [{ label: "Duration", value: "8 Days, 7 Nights" }]
  },
  {
    id: "rwanda-best-10days",
    title: "10-Days Best of Rwanda",
    nights: 9,
    summary: "Comprehensive Rwanda tour including Kigali, Volcanoes NP, Nyungwe Forest, and Akagera NP.",
    image: "https://i.pinimg.com/1200x/27/9f/6b/279f6bf7ace4157f01170daf9f1b2cb2.jpg",
    gallery: ["https://i.pinimg.com/1200x/55/a9/e2/55a9e2811aff4371a7472d3fa95f59b6.jpg","https://i.pinimg.com/736x/68/01/19/6801199e33bc9eaa9f4777a21ee25a45.jpg","https://i.pinimg.com/736x/08/aa/96/08aa96fec20e9009e712bcdca7cb2db9.jpg","https://i.pinimg.com/1200x/c7/9a/94/c79a947faac53d1660a4b1655c21a9dc.jpg","https://i.pinimg.com/1200x/ce/de/ed/cedeeda48c3c3de752d32428ec5d31f0.jpg","https://i.pinimg.com/736x/be/a8/5e/bea85ec085fbf7debae2f42cf56e92e0.jpg","https://i.pinimg.com/1200x/da/a8/49/daa8495f15b1657d9354c51f870993e5.jpg","https://i.pinimg.com/1200x/58/06/5d/58065d91835cd0cf2054d762bc33599e.jpg","https://i.pinimg.com/1200x/da/a8/49/daa8495f15b1657d9354c51f870993e5.jpg","https://i.pinimg.com/736x/0f/84/de/0f84dec8e96fc7763eb982ef71295fe8.jpg","https://i.pinimg.com/736x/54/5a/18/545a18b1408ac095c5a70c5d54dfaae4.jpg"],
    itinerary: [
      { day: 1, title: "Arrival Kigali", description: "Transfer to hotel and briefing." },
      { day: 2, title: "Kigali City Tour", description: "Visit Genocide Memorial and cultural sites." },
      { day: 3, title: "Transfer to Volcanoes NP", description: "Scenic drive, lodge check-in." },
      { day: 4, title: "Gorilla Trekking", description: "Full-day trekking experience." },
      { day: 5, title: "Golden Monkey Tracking", description: "Morning trek to see golden monkeys." },
      { day: 6, title: "Transfer to Nyungwe Forest", description: "Canopy walk and forest lodge." },
      { day: 7, title: "Chimpanzee Trekking", description: "Morning trek in Nyungwe Forest." },
      { day: 8, title: "Nyungwe – Akagera NP", description: "Drive east, optional evening game drive." },
      { day: 9, title: "Akagera Game Drives", description: "Full day exploring the savannah and lakes." },
      { day: 10, title: "Return to Kigali", description: "Drive back to Kigali and departure." }
    ],
    included: ["Accommodation", "All meals", "Transport", "Park fees", "Guides"],
    excluded: ["International flights", "Visa fees", "Tips"],
    location: "Rwanda",
    highlights: [{ label: "Duration", value: "10 Days, 9 Nights" }]
  },
  {
    id: "tanzania-great-wildlife-6days",
    title: "6-Days Tanzania Great Wildlife Safari",
    nights: 5,
    summary: "Explore Northern Tanzania’s wildlife highlights including Serengeti, Ngorongoro, and Tarangire.",
    image: "https://i.pinimg.com/1200x/80/58/4b/80584b81d06306dd942770a9cdc3c14b.jpg",
    gallery: ["https://i.pinimg.com/736x/25/ba/41/25ba41c7c45a5195f487af1d891c22cb.jpg","https://i.pinimg.com/1200x/10/d9/f3/10d9f3b1e82106c7d5936355efd8a71a.jpg","https://i.pinimg.com/736x/fa/6d/9d/fa6d9d99a77d0f51910676f0b494ccf4.jpg","https://i.pinimg.com/736x/ac/4e/50/ac4e50168d97dc7e6c6ec76e60bc6607.jpg","https://i.pinimg.com/1200x/77/de/04/77de04f43b84797f087f39b195d39eb0.jpg","https://i.pinimg.com/1200x/20/36/90/203690003992303b2c5c31bf5adfc597.jpg"],
    itinerary: [
      { day: 1, title: "Arrival Arusha", description: "Hotel check-in, briefing." },
      { day: 2, title: "Tarangire National Park", description: "Game drive and overnight in lodge." },
      { day: 3, title: "Lake Manyara – Ngorongoro Crater", description: "Drive, game drives en route." },
      { day: 4, title: "Ngorongoro Crater Full Day", description: "Crater game drive with picnic." },
      { day: 5, title: "Serengeti National Park", description: "Transfer, evening game drive." },
      { day: 6, title: "Serengeti Morning Drive – Return", description: "Final morning drive and departure to Arusha or Kilimanjaro airport." }
    ],
    included: ["4x4 transport", "Accommodation", "Park fees", "Game drives", "All meals per itinerary"],
    excluded: ["International flights", "Visa fees", "Tips"],
    location: "Tanzania",
    highlights: [{ label: "Duration", value: "6 Days, 5 Nights" }]
  }
];


// Contact information from live site
export const contactInfo = {
  email: "winning4tours@gmail.com",
  phone: "+250 732 288 858",
  address: "Kigali – Rwanda"
};

// Feature content for home page
export const homeFeatures = [
  {
    title: "Entirely Personal Journeys",
    description: "Tailor-made experiences designed around your interests and preferences."
  },
  {
    title: "Seamless & All-Inclusive Service",
    description: "Everything taken care of from start to finish for a worry-free experience."
  },
  {
    title: "Unrivaled Local Knowledge",
    description: "Deep expertise and connections throughout East Africa."
  },
  {
    title: "A Commitment to Conservation",
    description: "Supporting wildlife conservation and local communities."
  }
];