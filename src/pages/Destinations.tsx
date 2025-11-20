import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import Layout from '@/components/Layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { MapPin, Clock, Users, Star, Camera, Mountain, TreePine, Waves, Bird, Crown } from 'lucide-react';

const countries = [
  {
    name: 'Rwanda',
    image: 'https://cdn.pixabay.com/photo/2020/09/13/16/16/terraces-5568679_960_720.jpg',
    description: 'Discover the "Land of a Thousand Hills" with scenic landscapes, gorilla trekking in Volcanoes National Park, and one of Africa\'s cleanest and safest capitals—Kigali.',
    highlights: ['Mountain Gorillas', 'Volcanoes National Park', 'Kigali City', 'Lake Kivu']
  },
  {
    name: 'Uganda',
    image: 'https://cdn.pixabay.com/photo/2020/04/09/19/44/namibia-5022857_1280.jpg',
    description: 'A hidden gem with lush rainforests, source of the Nile River, and the Big Five in Queen Elizabeth & Murchison Falls National Parks. Uganda offers raw, untouched nature.',
    highlights: ['Source of the Nile', 'Bwindi Impenetrable Forest', 'Queen Elizabeth NP', 'Murchison Falls']
  },
  {
    name: 'Kenya',
    image: 'https://cdn.pixabay.com/photo/2019/02/14/06/57/wildebeest-migration-3995945_1280.jpg',
    description: 'Famous for the Great Migration in Maasai Mara, stunning savannahs, vibrant cities, and beach escapes in Mombasa and Diani. A perfect safari-meets-coastline destination.',
    highlights: ['Great Migration', 'Maasai Mara', 'Mount Kenya', 'Coastal Beaches']
  },
  {
    name: 'Tanzania',
    image: 'https://cdn.pixabay.com/photo/2017/08/24/12/26/hammock-2676647_1280.jpg',
    description: 'Home to Mount Kilimanjaro, Serengeti\'s wildlife, and Zanzibar\'s turquoise beaches. Tanzania offers unmatched beauty for both adventure and relaxation seekers.',
    highlights: ['Mount Kilimanjaro', 'Serengeti National Park', 'Zanzibar', 'Ngorongoro Crater']
  },
  {
    name: 'Burundi',
    image: 'https://cdn.pixabay.com/photo/2021/03/04/07/31/mountains-6067150_1280.jpg',
    description: 'A culturally rich country with warm people, traditional drumming, Lake Tanganyika, and picturesque hills. Ideal for off-the-beaten-path explorers.',
    highlights: ['Lake Tanganyika', 'Traditional Culture', 'Rolling Hills', 'Authentic Experiences']
  },
  {
    name: 'DR Congo',
    image: 'https://cdn.pixabay.com/photo/2020/02/09/19/06/falls-4834262_1280.jpg',
    description: 'Venture into Virunga National Park for rare gorilla encounters, hike active volcanoes, and explore Congo\'s deep jungles. A destination for the bold and curious.',
    highlights: ['Virunga National Park', 'Active Volcanoes', 'Dense Jungles', 'Adventure Tourism']
  }
];

const excitingSpots = [
  {
    name: 'Volcanoes National Park',
    location: 'Rwanda',
    image: 'https://cdn.pixabay.com/photo/2019/03/25/03/30/volcano-4079279_1280.jpg',
    description: 'Home to rare mountain gorillas, lush rainforests, and stunning volcano peaks. A must-visit for adventurous eco-tourists in Rwanda.',
    icon: Mountain,
    activities: ['Gorilla Trekking', 'Volcano Hiking', 'Golden Monkey Tracking', 'Cultural Tours']
  },
  {
    name: 'Bwindi Impenetrable NP',
    location: 'Uganda',
    image: 'https://cdn.pixabay.com/photo/2014/05/27/08/05/bwindi-impenetrable-forest-355180_1280.jpg',
    description: 'Uganda\'s top gorilla trekking destination. Dense jungles, misty hills, and unforgettable wildlife close encounters.',
    icon: TreePine,
    activities: ['Gorilla Trekking', 'Bird Watching', 'Nature Walks', 'Community Tours']
  },
  {
    name: 'Masai Mara',
    location: 'Kenya',
    image: 'https://cdn.pixabay.com/photo/2017/06/03/21/26/giraffe-2369813_1280.jpg',
    description: 'Kenya\'s iconic safari park, known for the Great Migration and big cat sightings. A dreamland for wildlife lovers.',
    icon: Crown,
    activities: ['Game Drives', 'Hot Air Balloon', 'Cultural Visits', 'Photography']
  },
  {
    name: 'Akagera National Park',
    location: 'Rwanda',
    image: 'https://static1.squarespace.com/static/58b3f7f5e58c62561f62dc27/t/58c265f7893fc02bf07a2a90/1489135106554/?format=1000w',
    description: 'Rwanda\'s savannah park featuring lions, elephants, and lake cruises. Perfect for a classic safari with a twist.',
    icon: Bird,
    activities: ['Game Drives', 'Boat Cruises', 'Fishing', 'Bird Watching']
  },
  {
    name: 'Murchison Falls NP',
    location: 'Uganda',
    image: 'https://cdn.pixabay.com/photo/2013/10/30/08/35/falls-202827_1280.jpg',
    description: 'Uganda\'s largest park, home to the mighty waterfall, boat cruises on the Nile, and abundant wildlife including giraffes and hippos.',
    icon: Waves,
    activities: ['Waterfall Viewing', 'Nile Cruises', 'Game Drives', 'Fishing']
  },
  {
    name: 'Zanzibar',
    location: 'Tanzania',
    image: 'https://cdn.pixabay.com/photo/2020/05/05/23/08/africa-5135407_1280.jpg',
    description: 'Pristine beaches, spice tours, and Stone Town\'s historic charm make Zanzibar the perfect tropical getaway.',
    icon: Waves,
    activities: ['Beach Relaxation', 'Spice Tours', 'Snorkeling', 'Cultural Tours']
  }
];

const ugandaSafaris = [
  {
    id: '3-days-murchison',
    title: '3 DAYS: MURCHISON FALLS NATIONAL PARK',
    duration: '3 Days / 2 Nights',
    price: 'From ..',
    image: 'https://cdn.pixabay.com/photo/2021/06/20/15/46/rocks-6351404_1280.jpg',
    highlights: ['Murchison Falls', 'Nile Boat Cruise', 'Game Drives', 'Top of the Falls Hike'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival & Transfer to Murchison Falls',
        activities: ['Pick up from Kampala/Entebbe', 'Drive to Murchison Falls NP', 'Rhino tracking at Ziwa', 'Check-in at lodge']
      },
      {
        day: 2,
        title: 'Game Drive & Boat Cruise',
        activities: ['Early morning game drive', 'Spot lions, elephants, giraffes', 'Afternoon Nile boat cruise', 'Visit bottom of the falls']
      },
      {
        day: 3,
        title: 'Top of Falls & Departure',
        activities: ['Hike to top of Murchison Falls', 'Photography session', 'Return journey to Kampala', 'Drop off at hotel/airport']
      }
    ]
  },
  {
    id: '3-days-queen-elizabeth',
    title: '3 DAYS: QUEEN ELIZABETH NATIONAL PARK',
    duration: '3 Days / 2 Nights',
    price: 'From ..',
    image: 'https://cdn.pixabay.com/photo/2019/10/01/11/54/elephants-4518008_1280.jpg',
    highlights: ['Tree Climbing Lions', 'Kazinga Channel', 'Crater Lakes', 'Chimp Tracking'],
    itinerary: [
      {
        day: 1,
        title: 'Journey to Queen Elizabeth NP',
        activities: ['Depart from Kampala', 'Equator crossing experience', 'Arrive at Queen Elizabeth NP', 'Evening game drive']
      },
      {
        day: 2,
        title: 'Game Drive & Boat Safari',
        activities: ['Morning game drive in Kasenyi', 'Search for tree-climbing lions', 'Kazinga Channel boat cruise', 'Hippos and crocodiles viewing']
      },
      {
        day: 3,
        title: 'Chimp Tracking & Return',
        activities: ['Kyambura Gorge chimp tracking', 'Nature walk', 'Return to Kampala', 'Evening arrival']
      }
    ]
  },
  {
    id: '8-days-uganda-classic',
    title: '8 DAY: UGANDA CLASSIC SAFARI',
    duration: '8 Days / 7 Nights',
    price: 'From ..',
    image: 'https://cdn.pixabay.com/photo/2020/07/03/06/10/nile-5365318_1280.jpg',
    highlights: ['Gorilla Trekking', 'Chimpanzee Tracking', 'Big 5 Safari', 'Cultural Experiences'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Uganda',
        activities: ['Airport pickup', 'Transfer to hotel', 'City tour (optional)', 'Briefing about safari']
      },
      {
        day: 2,
        title: 'Transfer to Bwindi',
        activities: ['Early departure to Bwindi', 'Equator crossing', 'Scenic drive through hills', 'Evening at lodge']
      },
      {
        day: 3,
        title: 'Gorilla Trekking Experience',
        activities: ['Gorilla trekking briefing', 'Trek into the forest', 'One hour with gorillas', 'Community walk (optional)']
      },
      {
        day: 4,
        title: 'Travel to Queen Elizabeth NP',
        activities: ['Transfer to Queen Elizabeth', 'Game drive en route', 'Check-in at lodge', 'Evening relaxation']
      },
      {
        day: 5,
        title: 'Queen Elizabeth Exploration',
        activities: ['Morning game drive', 'Kazinga Channel cruise', 'Tree-climbing lions search', 'Evening game drive']
      },
      {
        day: 6,
        title: 'Kibale Forest - Chimps',
        activities: ['Transfer to Kibale', 'Chimpanzee tracking', 'Bigodi wetland walk', 'Cultural performance']
      },
      {
        day: 7,
        title: 'Murchison Falls Adventure',
        activities: ['Transfer to Murchison Falls', 'Game drive', 'Boat to bottom of falls', 'Top of falls hike']
      },
      {
        day: 8,
        title: 'Return to Kampala',
        activities: ['Final game drive', 'Return journey', 'Lunch en route', 'Airport drop-off']
      }
    ]
  }
];

const kenyaSafaris = [
  {
    id: '8-days-big5-kenya',
    title: '8 DAYS: BIG 5 SAFARI (KENYA)',
    duration: '8 Days / 7 Nights',
    price: 'From ..',
    image: 'https://cdn.pixabay.com/photo/2019/09/10/04/28/lioness-4465223_1280.jpg',
    highlights: ['Great Migration', 'Big 5 Animals', 'Masai Culture', 'Scenic Landscapes'],
    itinerary: [
      {
        day: 1,
        title: 'Arrival in Nairobi',
        activities: ['Airport pickup', 'Transfer to hotel', 'City tour', 'Safari briefing']
      },
      {
        day: 2,
        title: 'Masai Mara National Reserve',
        activities: ['Flight/drive to Masai Mara', 'Afternoon game drive', 'Search for Big 5', 'Sundowner drinks']
      },
      {
        day: 3,
        title: 'Full Day Masai Mara',
        activities: ['Early morning game drive', 'Great Migration viewing', 'Masai village visit', 'Evening game drive']
      },
      {
        day: 4,
        title: 'Lake Nakuru National Park',
        activities: ['Transfer to Lake Nakuru', 'Flamingo viewing', 'Rhino sanctuary visit', 'Tree-climbing lions']
      },
      {
        day: 5,
        title: 'Amboseli National Park',
        activities: ['Transfer to Amboseli', 'Mount Kilimanjaro views', 'Elephant herds', 'Masai culture']
      },
      {
        day: 6,
        title: 'Amboseli Exploration',
        activities: ['Morning game drive', 'Swamp areas exploration', 'Bird watching', 'Photography session']
      },
      {
        day: 7,
        title: 'Tsavo East National Park',
        activities: ['Transfer to Tsavo East', 'Red elephants viewing', 'Galana River', 'Lugard Falls']
      },
      {
        day: 8,
        title: 'Return to Nairobi',
        activities: ['Morning game drive', 'Transfer to Nairobi', 'Shopping (optional)', 'Airport transfer']
      }
    ]
  }
];

export default function Destinations() {
  const [selectedSafari, setSelectedSafari] = useState<any>(null);

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-orange-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-500">
      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center bg-gradient-to-r from-green-600 via-blue-600 to-orange-600 dark:from-green-700 dark:via-blue-700 dark:to-orange-700 transition-colors duration-500">
        <div className="absolute inset-0 bg-black/20 dark:bg-black/40"></div>
        <div className="relative max-w-4xl mx-auto text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-700">
            Our Destinations
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-blue-100 dark:text-gray-200 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-300">
            Explore the heart of East Africa
          </p>
          <div className="flex flex-wrap justify-center gap-4 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-500">
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white backdrop-blur-sm">
              <MapPin className="w-4 h-4 mr-2" />
              6 Countries
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white backdrop-blur-sm">
              <Mountain className="w-4 h-4 mr-2" />
              15+ National Parks
            </Badge>
            <Badge variant="secondary" className="text-lg px-4 py-2 bg-white/20 text-white backdrop-blur-sm">
              <Camera className="w-4 h-4 mr-2" />
              Unforgettable Experiences
            </Badge>
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-safari-green dark:text-warm-sand mb-4">Countries We Cover</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Discover diverse landscapes and rich cultures across East Africa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <Card key={country.name} className="group hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 transform overflow-hidden bg-white dark:bg-gray-800">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={country.image} 
                    alt={country.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <h3 className="absolute bottom-4 left-4 text-2xl font-bold text-white drop-shadow-lg">{country.name}</h3>
                </div>
                <CardContent className="p-6">
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">{country.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {country.highlights.map((highlight) => (
                      <Badge key={highlight} variant="outline" className="text-xs border-gray-200 dark:border-gray-700 dark:text-gray-200">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Exciting Spots Section */}
      <section className="py-16 px-4 bg-white/50 dark:bg-gray-900/40 transition-colors duration-500">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-safari-green dark:text-warm-sand mb-4">Exciting Spots to Explore</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">From mountains to wildlife reserves — Africa's gems await you</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {excitingSpots.map((spot, index) => {
              const IconComponent = spot.icon;
              return (
                <Card key={spot.name} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white dark:bg-gray-800">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={spot.image} 
                      alt={spot.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute top-4 right-4">
                      <IconComponent className="w-8 h-8 text-white drop-shadow-md" />
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <h3 className="text-xl font-bold text-white mb-1">{spot.name}</h3>
                      <p className="text-sm text-gray-200">{spot.location}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">{spot.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {spot.activities.slice(0, 3).map((activity) => (
                        <Badge key={activity} variant="secondary" className="text-xs bg-gradient-to-r from-green-500 to-blue-500 text-white">
                          {activity}
                        </Badge>
                      ))}
                      {spot.activities.length > 3 && (
                        <Badge variant="outline" className="text-xs border-gray-200 dark:border-gray-700">
                          +{spot.activities.length - 3} more
                        </Badge>
                      )}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Safari Packages Section */}
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <Tabs defaultValue="uganda" className="w-full">
            <div className="text-center mb-8">
              <h2 className="text-4xl font-bold text-safari-green dark:text-warm-sand mb-4">Signature Safari Packages</h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-8">Curated adventures across East Africa's most spectacular destinations</p>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
                <TabsTrigger value="uganda" className="text-gray-700 dark:text-gray-200">Uganda Safaris</TabsTrigger>
                <TabsTrigger value="kenya" className="text-gray-700 dark:text-gray-200">Kenya Safaris</TabsTrigger>
              </TabsList>
            </div>

            <TabsContent value="uganda">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-safari-green dark:text-warm-sand mb-2">Signature Uganda Safaris</h3>
                <p className="text-gray-600 dark:text-gray-400">A glimpse into the adventures we craft in the Pearl of Africa</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {ugandaSafaris.map((safari) => (
                  <Card key={safari.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white dark:bg-gray-800">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={safari.image} 
                        alt={safari.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-sunset-orange text-white dark:bg-orange-600">
                          {safari.price}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-safari-green dark:group-hover:text-warm-sand transition-colors">
                        {safari.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        {safari.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {safari.highlights.slice(0, 3).map((highlight) => (
                          <Badge key={highlight} variant="outline" className="text-xs border-gray-200 dark:border-gray-700">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full bg-safari-green hover:bg-safari-green/90 text-white dark:bg-warm-sand dark:text-safari-green"
                            onClick={() => setSelectedSafari(safari)}
                          >
                            View Detailed Itinerary
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{safari.title}</DialogTitle>
                            <DialogDescription className="text-lg text-gray-600 dark:text-gray-400">
                              {safari.duration} • {safari.price}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-6">
                            <h4 className="text-lg font-semibold mb-4 text-safari-green dark:text-warm-sand">Day-by-Day Itinerary</h4>
                            <div className="space-y-6">
                              {safari.itinerary.map((day) => (
                                <div key={day.day} className="border-l-4 border-safari-green dark:border-warm-sand pl-4">
                                  <h5 className="font-semibold text-safari-green dark:text-warm-sand mb-2">
                                    Day {day.day}: {day.title}
                                  </h5>
                                  <ul className="space-y-1">
                                    {day.activities.map((activity, idx) => (
                                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-safari-green dark:bg-warm-sand rounded-full mt-2 flex-shrink-0"></span>
                                        {activity}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                            
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="kenya">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-semibold text-safari-green dark:text-warm-sand mb-2">Signature Kenya Safaris</h3>
                <p className="text-gray-600 dark:text-gray-400">Experience the iconic home of the safari</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {kenyaSafaris.map((safari) => (
                  <Card key={safari.id} className="group hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden bg-white dark:bg-gray-800">
                    <div className="relative h-48 overflow-hidden">
                      <img 
                        src={safari.image} 
                        alt={safari.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <Badge className="bg-orange-600 text-white dark:bg-orange-500">
                          {safari.price}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-lg group-hover:text-orange-600 transition-colors">
                        {safari.title}
                      </CardTitle>
                      <CardDescription className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                        <Clock className="w-4 h-4" />
                        {safari.duration}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {safari.highlights.slice(0, 3).map((highlight) => (
                          <Badge key={highlight} variant="outline" className="text-xs border-gray-200 dark:border-gray-700">
                            {highlight}
                          </Badge>
                        ))}
                      </div>
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button 
                            className="w-full bg-orange-600 hover:bg-orange-700 text-white"
                            onClick={() => setSelectedSafari(safari)}
                          >
                            View Detailed Itinerary
                          </Button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
                          <DialogHeader>
                            <DialogTitle className="text-2xl">{safari.title}</DialogTitle>
                            <DialogDescription className="text-lg text-gray-600 dark:text-gray-400">
                              {safari.duration} • {safari.price}
                            </DialogDescription>
                          </DialogHeader>
                          <div className="mt-6">
                            <h4 className="text-lg font-semibold mb-4 text-orange-600 dark:text-orange-400">Day-by-Day Itinerary</h4>
                            <div className="space-y-6">
                              {safari.itinerary.map((day) => (
                                <div key={day.day} className="border-l-4 border-orange-500 pl-4">
                                  <h5 className="font-semibold text-orange-700 dark:text-orange-400 mb-2">
                                    Day {day.day}: {day.title}
                                  </h5>
                                  <ul className="space-y-1">
                                    {day.activities.map((activity, idx) => (
                                      <li key={idx} className="text-sm text-gray-600 dark:text-gray-300 flex items-start gap-2">
                                        <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                                        {activity}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                            
                          </div>
                        </DialogContent>
                      </Dialog>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 px-4 bg-gradient-to-r from-green-600 via-blue-600 to-orange-600 dark:from-green-700 dark:via-blue-700 dark:to-orange-700 text-white transition-colors duration-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-safari-green dark:text-warm-sand">Ready to Explore East Africa?</h2>
          <p className="text-xl mb-8 text-blue-100 dark:text-gray-200">
            Let us craft your perfect safari adventure across the most spectacular destinations in East Africa
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-safari-green hover:bg-gray-300 dark:hover:bg-gray-100 dark:hover:text-gray-900">
             <Link to="/explore-tours" className="flex items-center"><Users className="w-5 h-5 mr-2" />
              Plan My Safari
             </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-safari-green hover:bg-gray-300  dark:hover:bg-gray-100 dark:hover:text-gray-900">
             <Link to="/explore-tours" className="flex items-center"> <MapPin className="w-5 h-5 mr-2" />
              View All Tours
             </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
    </Layout>
  );
}
