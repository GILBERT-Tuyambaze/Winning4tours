// Tour data structure based on Winning4Tours.com content
// This will be populated with actual content from the live site

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
}

// Sample tour data - will be replaced with actual content from live site
export const tours: Tour[] = [
  {
    id: "murchison-falls-3days",
    title: "3 Days Murchison Falls",
    nights: 2,
    summary: "Experience the power of Murchison Falls and encounter diverse wildlife in Uganda's largest national park.",
    image: "/assets/tours/murchison-falls-hero.jpg",
    gallery: [
      "/assets/tours/murchison-1.jpg",
      "/assets/tours/murchison-2.jpg",
      "/assets/tours/murchison-3.jpg"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival and Transfer to Murchison Falls",
        description: "Pick up from Kampala and transfer to Murchison Falls National Park. Evening game drive."
      },
      {
        day: 2,
        title: "Game Drive and Boat Safari",
        description: "Morning game drive followed by afternoon boat safari to the base of Murchison Falls."
      },
      {
        day: 3,
        title: "Top of Falls and Return",
        description: "Visit the top of Murchison Falls and return to Kampala."
      }
    ],
    included: [
      "Transportation in 4WD vehicle",
      "Accommodation",
      "All meals",
      "Park entrance fees",
      "Professional guide"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Tips and gratuities"
    ],
    location: "Murchison Falls National Park, Uganda"
  },
  {
    id: "queen-elizabeth-3days",
    title: "3 Days Queen Elizabeth",
    nights: 2,
    summary: "Discover the diverse ecosystems of Queen Elizabeth National Park including tree-climbing lions.",
    image: "/assets/tours/queen-elizabeth-hero.jpg",
    gallery: [
      "/assets/tours/queen-elizabeth-1.jpg",
      "/assets/tours/queen-elizabeth-2.jpg"
    ],
    itinerary: [
      {
        day: 1,
        title: "Transfer to Queen Elizabeth National Park",
        description: "Journey from Kampala to Queen Elizabeth National Park with scenic stops."
      },
      {
        day: 2,
        title: "Game Drive and Kazinga Channel",
        description: "Morning game drive in Kasenyi sector and afternoon boat cruise on Kazinga Channel."
      },
      {
        day: 3,
        title: "Ishasha Sector and Return",
        description: "Visit Ishasha sector to see tree-climbing lions and return to Kampala."
      }
    ],
    included: [
      "Transportation",
      "Accommodation",
      "All meals",
      "Park fees",
      "Boat cruise",
      "Professional guide"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Personal items",
      "Tips"
    ],
    location: "Queen Elizabeth National Park, Uganda"
  },
  {
    id: "uganda-classic-8days",
    title: "8 Days Uganda Classic",
    nights: 7,
    summary: "Comprehensive Uganda safari including gorilla trekking, wildlife viewing, and cultural experiences.",
    image: "/assets/tours/uganda-classic-hero.jpg",
    gallery: [
      "/assets/tours/uganda-classic-1.jpg",
      "/assets/tours/uganda-classic-2.jpg",
      "/assets/tours/uganda-classic-3.jpg"
    ],
    itinerary: [
      {
        day: 1,
        title: "Arrival in Kampala",
        description: "Airport pickup and transfer to hotel in Kampala."
      },
      {
        day: 2,
        title: "Transfer to Murchison Falls",
        description: "Drive to Murchison Falls National Park with stops at Ziwa Rhino Sanctuary."
      },
      {
        day: 3,
        title: "Murchison Falls Exploration",
        description: "Game drive and boat safari to Murchison Falls."
      },
      {
        day: 4,
        title: "Transfer to Queen Elizabeth",
        description: "Journey to Queen Elizabeth National Park."
      },
      {
        day: 5,
        title: "Queen Elizabeth Game Viewing",
        description: "Game drives and Kazinga Channel boat cruise."
      },
      {
        day: 6,
        title: "Transfer to Bwindi",
        description: "Travel to Bwindi Impenetrable Forest."
      },
      {
        day: 7,
        title: "Gorilla Trekking",
        description: "Mountain gorilla trekking experience in Bwindi Forest."
      },
      {
        day: 8,
        title: "Return to Kampala",
        description: "Transfer back to Kampala and departure."
      }
    ],
    included: [
      "All transportation",
      "Accommodation",
      "All meals",
      "Park entrance fees",
      "Gorilla permit",
      "Professional guide",
      "Boat cruises"
    ],
    excluded: [
      "International flights",
      "Visa fees",
      "Personal expenses",
      "Tips and gratuities",
      "Travel insurance"
    ],
    location: "Uganda (Multiple Parks)"
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