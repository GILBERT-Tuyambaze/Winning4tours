import { useState, useEffect } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Badge } from '@/components/ui/badge';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  CheckCircle, 
  XCircle, 
  ChevronDown, 
  ArrowLeft,
  Mail,
  Phone,
  Users
} from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Tour } from '@/data/tours';

interface TourModalProps {
  tour: Tour | null;
  isOpen: boolean;
  onClose: () => void;
}

interface BookingFormData {
  fullName: string;
  email: string;
  phone: string;
  travelers: string;
  startDate: string;
  endDate: string;
  message: string;
  acceptTerms: boolean;
}

export default function TourModal({ tour, isOpen, onClose }: TourModalProps) {
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [isItineraryOpen, setIsItineraryOpen] = useState(true);
  const [bookingData, setBookingData] = useState<BookingFormData>({
    fullName: '',
    email: '',
    phone: '',
    travelers: '2',
    startDate: '',
    endDate: '',
    message: '',
    acceptTerms: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // Reset state when modal opens/closes
  useEffect(() => {
    if (isOpen && tour) {
      setShowBookingForm(false);
      setSubmitSuccess(false);
      setBookingData({
        fullName: '',
        email: '',
        phone: '',
        travelers: '2',
        startDate: '',
        endDate: '',
        message: '',
        acceptTerms: false
      });
    }
  }, [isOpen, tour]);

  // Focus trap for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  const handleBookingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!bookingData.acceptTerms) {
      alert('Please accept the Terms & Conditions to proceed.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      
      // Here you would typically send the data to your backend
      console.log('Booking submitted:', {
        tour: tour?.title,
        ...bookingData
      });
    } catch (error) {
      console.error('Booking submission failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof BookingFormData, value: string | boolean) => {
    setBookingData(prev => ({ ...prev, [field]: value }));
  };

  if (!tour) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent 
        className="max-w-4xl max-h-[90vh] overflow-y-auto p-0"
        aria-describedby="tour-modal-description"
      >
        <div className="relative">
          {/* Hero Image */}
          <div className="relative h-64 md:h-80 overflow-hidden">
            <img
              src={tour.image}
              alt={tour.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
            <div className="absolute bottom-4 left-6 text-white">
              <h1 className="text-2xl md:text-3xl font-bold mb-2">{tour.title}</h1>
              <div className="flex items-center space-x-4 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{tour.nights} night{tour.nights !== 1 ? 's' : ''}</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-1" />
                  <span>{tour.location}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6">
            {!showBookingForm && !submitSuccess && (
              <div className="space-y-6">
                <DialogHeader>
                  <DialogTitle className="sr-only">{tour.title} Details</DialogTitle>
                  <div id="tour-modal-description">
                    <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                      {tour.summary}
                    </p>
                  </div>
                </DialogHeader>

                {/* Itinerary */}
                <div>
                  <Collapsible open={isItineraryOpen} onOpenChange={setIsItineraryOpen}>
                    <CollapsibleTrigger asChild>
                      <Button variant="ghost" className="w-full justify-between p-0 h-auto">
                        <h3 className="text-lg font-semibold text-safari-green dark:text-warm-sand">
                          Day-by-Day Itinerary
                        </h3>
                        <ChevronDown className={`h-4 w-4 transition-transform ${isItineraryOpen ? 'rotate-180' : ''}`} />
                      </Button>
                    </CollapsibleTrigger>
                    <CollapsibleContent className="mt-4">
                      <div className="space-y-4">
                        {tour.itinerary.map((day) => (
                          <div key={day.day} className="border-l-2 border-warm-sand pl-4 pb-4">
                            <div className="flex items-center mb-2">
                              <Badge variant="secondary" className="mr-2">
                                Day {day.day}
                              </Badge>
                              <h4 className="font-medium">{day.title}</h4>
                            </div>
                            <p className="text-sm text-gray-600 dark:text-gray-400">
                              {day.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>

                <Separator />

                {/* Included/Excluded */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="text-lg font-semibold text-safari-green dark:text-warm-sand mb-3 flex items-center">
                      <CheckCircle className="h-5 w-5 mr-2 text-green-600" />
                      Included
                    </h3>
                    <ul className="space-y-2">
                      {tour.included.map((item, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <CheckCircle className="h-4 w-4 mr-2 text-green-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-safari-green dark:text-warm-sand mb-3 flex items-center">
                      <XCircle className="h-5 w-5 mr-2 text-red-600" />
                      Not Included
                    </h3>
                    <ul className="space-y-2">
                      {tour.excluded.map((item, index) => (
                        <li key={index} className="text-sm text-gray-600 dark:text-gray-400 flex items-start">
                          <XCircle className="h-4 w-4 mr-2 text-red-600 mt-0.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Gallery Preview */}
                {tour.gallery.length > 0 && (
                  <div>
                    <h3 className="text-lg font-semibold text-safari-green dark:text-warm-sand mb-3">
                      Gallery
                    </h3>
                    <div className="grid grid-cols-3 gap-2">
                      {tour.gallery.slice(0, 6).map((image, index) => (
                        <div key={index} className="aspect-square overflow-hidden rounded-lg">
                          <img
                            src={image}
                            alt={`${tour.title} gallery ${index + 1}`}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Book Button */}
                <div className="pt-4">
                  <Button
                    onClick={() => setShowBookingForm(true)}
                    className="w-full bg-sunset-orange hover:bg-sunset-orange/90 text-white font-medium py-3 text-lg transition-colors"
                    size="lg"
                  >
                    Book This Tour
                  </Button>
                </div>
              </div>
            )}

            {/* Booking Form */}
            {showBookingForm && !submitSuccess && (
              <div className="space-y-6">
                <div className="flex items-center mb-4">
                  <Button
                    variant="ghost"
                    onClick={() => setShowBookingForm(false)}
                    className="mr-4 p-2"
                    aria-label="Back to tour details"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </Button>
                  <h2 className="text-xl font-semibold text-safari-green dark:text-warm-sand">
                    Book: {tour.title}
                  </h2>
                </div>

                <form onSubmit={handleBookingSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="fullName" className="text-sm font-medium">
                        Full Name *
                      </Label>
                      <Input
                        id="fullName"
                        type="text"
                        required
                        value={bookingData.fullName}
                        onChange={(e) => handleInputChange('fullName', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={bookingData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium">
                        Phone Number
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={bookingData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="travelers" className="text-sm font-medium">
                        Number of Travelers *
                      </Label>
                      <Input
                        id="travelers"
                        type="number"
                        min="1"
                        required
                        value={bookingData.travelers}
                        onChange={(e) => handleInputChange('travelers', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="startDate" className="text-sm font-medium">
                        Preferred Start Date
                      </Label>
                      <Input
                        id="startDate"
                        type="date"
                        value={bookingData.startDate}
                        onChange={(e) => handleInputChange('startDate', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="endDate" className="text-sm font-medium">
                        Preferred End Date
                      </Label>
                      <Input
                        id="endDate"
                        type="date"
                        value={bookingData.endDate}
                        onChange={(e) => handleInputChange('endDate', e.target.value)}
                        className="mt-1"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message / Special Requests
                    </Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={bookingData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      className="mt-1"
                      placeholder="Any special requests or dietary requirements..."
                    />
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="acceptTerms"
                      checked={bookingData.acceptTerms}
                      onCheckedChange={(checked) => handleInputChange('acceptTerms', !!checked)}
                      required
                    />
                    <Label htmlFor="acceptTerms" className="text-sm leading-relaxed">
                      I accept the{' '}
                      <Link
                        to="/terms-and-conditions"
                        target="_blank"
                        className="text-safari-green dark:text-warm-sand hover:underline"
                      >
                        Terms & Conditions
                      </Link>{' '}
                      *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting || !bookingData.acceptTerms}
                    className="w-full bg-sunset-orange hover:bg-sunset-orange/90 text-white font-medium py-3 text-lg transition-colors disabled:opacity-50"
                    size="lg"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Booking Request'}
                  </Button>
                </form>
              </div>
            )}

            {/* Success Message */}
            {submitSuccess && (
              <div className="text-center space-y-4">
                <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                  <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                </div>
                <h2 className="text-xl font-semibold text-safari-green dark:text-warm-sand">
                  Booking Request Submitted!
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for your interest in <strong>{tour.title}</strong>. 
                  We'll contact you within 24 hours to confirm your booking details.
                </p>
                <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 text-sm">
                  <p className="font-medium mb-2">What happens next:</p>
                  <ul className="text-left space-y-1 text-gray-600 dark:text-gray-400">
                    <li>• You'll receive a confirmation email shortly</li>
                    <li>• Our team will contact you to finalize details</li>
                    <li>• We'll send you a detailed itinerary and packing list</li>
                  </ul>
                </div>
                <Button
                  onClick={onClose}
                  variant="outline"
                  className="mt-4"
                >
                  Close
                </Button>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}