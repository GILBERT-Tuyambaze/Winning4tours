import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { Calendar, MapPin } from 'lucide-react';
import type { Tour } from '@/data/tours';

interface TourCardProps {
  tour: Tour;
  onDetailsClick: (tour: Tour) => void;
}

export default function TourCard({ tour, onDetailsClick }: TourCardProps) {
  return (
    <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <CardHeader className="p-0">
        <div className="relative overflow-hidden aspect-[4/3]">
          <img
            src={tour.image}
            alt={tour.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </CardHeader>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold text-safari-green dark:text-warm-sand mb-2 group-hover:text-sunset-orange transition-colors">
          {tour.title}
        </h3>
        
        <div className="flex items-center text-sm text-gray-600 dark:text-gray-400 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span>{tour.nights} night{tour.nights !== 1 ? 's' : ''}</span>
          <span className="mx-2">•</span>
          <MapPin className="h-4 w-4 mr-1" />
          <span>{tour.location}</span>
        </div>
        
        <p className="text-gray-700 dark:text-gray-300 text-sm leading-relaxed">
          {tour.summary}
        </p>
      </CardContent>
      
      <CardFooter className="p-6 pt-0">
        <Button
          onClick={() => onDetailsClick(tour)}
          className="w-full bg-safari-green hover:bg-safari-green/90 dark:bg-warm-sand dark:hover:bg-warm-sand/90 dark:text-safari-green text-white font-medium transition-colors"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
}