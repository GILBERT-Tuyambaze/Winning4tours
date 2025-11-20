import { useState } from 'react';
import Layout from '@/components/Layout';
import TourCard from '@/components/TourCard';
import TourModal from '@/components/TourModal';
import { tours } from '@/data/tours';
import type { Tour } from '@/data/tours';

export default function ExploreTours() {
  const [selectedTour, setSelectedTour] = useState<Tour | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleTourSelect = (tour: Tour) => {
    setSelectedTour(tour);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedTour(null);
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative bg-safari-green dark:bg-gray-800 text-white py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-safari-green/90 to-safari-green/70 dark:from-gray-800/90 dark:to-gray-800/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Explore Our Tours
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Discover East Africa's most incredible destinations with our expertly crafted safari experiences
            </p>
          </div>
        </section>

        {/* Tours Grid */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-safari-green dark:text-warm-sand mb-4">
                Choose Your Adventure
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Each tour is carefully designed to showcase the best of East Africa's wildlife, 
                landscapes, and cultures. Click "View Details" to learn more about any tour.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {tours.map((tour) => (
                <TourCard
                  key={tour.id}
                  tour={tour}
                  onDetailsClick={handleTourSelect}
                />
              ))}
            </div>

            {tours.length === 0 && (
              <div className="text-center py-12">
                <p className="text-gray-500 dark:text-gray-400">
                  No tours available at the moment. Please check back soon!
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Call to Action */}
        <section className="bg-warm-sand/50 dark:bg-gray-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-safari-green dark:text-warm-sand mb-4">
              Can't Find What You're Looking For?
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mb-8">
              We specialize in creating custom itineraries tailored to your interests and preferences. 
              Contact us to design your perfect East African adventure.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-3 bg-sunset-orange hover:bg-sunset-orange/90 text-white font-medium rounded-lg transition-colors"
            >
              Contact Us for Custom Tours
            </a>
          </div>
        </section>
      </div>

      {/* Tour Modal */}
      <TourModal
        tour={selectedTour}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </Layout>
  );
}