import { useState, useEffect } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  Star, 
  Users, 
  Award, 
  Heart, 
  MapPin,
  Calendar,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { homeFeatures, tours } from '@/data/tours';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "United States",
    rating: 5,
    text: "An absolutely incredible experience! The wildlife viewing was beyond our expectations, and our guide was knowledgeable and passionate about conservation.",
    tour: "8 Days Uganda Classic"
  },
  {
    id: 2,
    name: "David Chen",
    location: "Canada",
    rating: 5,
    text: "Winning4Tours made our dream safari come true. Every detail was perfectly planned, and we felt safe and well-cared for throughout the journey.",
    tour: "3 Days Queen Elizabeth"
  },
  {
    id: 3,
    name: "Emma Thompson",
    location: "United Kingdom",
    rating: 5,
    text: "The gorilla trekking experience was life-changing. The team's commitment to conservation and supporting local communities really impressed us.",
    tour: "Uganda Classic with Gorillas"
  }
];

export default function Index() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const scrollToTours = () => {
    document.getElementById('featured-tours')?.scrollIntoView({ 
      behavior: 'smooth' 
    });
  };

  return (
    <Layout>
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0">
            <img
              src="https://i.pinimg.com/1200x/7c/74/65/7c7465e057688ea16118297e71fdb212.jpg"
              alt="East African Safari Landscape"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60" />
          </div>

          {/* Hero Content */}
          <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-in fade-in slide-in-from-bottom-8 duration-1000">
              East Africa,{' '}
              <span className="text-warm-sand">Beyond the Ordinary</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
              Experience unforgettable wildlife encounters and breathtaking landscapes 
              with our expertly crafted safari adventures
            </p>
            <Button
              onClick={scrollToTours}
              size="lg"
              className="bg-sunset-orange hover:bg-sunset-orange/90 text-white font-semibold px-8 py-4 text-lg animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500"
            >
              Start Your Adventure
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
              <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-safari-green dark:text-warm-sand mb-4">
                Why Choose Winning4Tours?
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                We're committed to creating extraordinary experiences that connect you 
                with East Africa's incredible wildlife and cultures
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {homeFeatures.map((feature, index) => (
                <Card 
                  key={index} 
                  className="text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-2 group"
                >
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-safari-green/10 dark:bg-warm-sand/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-sunset-orange/10 transition-colors">
                      {index === 0 && <Heart className="h-8 w-8 text-safari-green dark:text-warm-sand group-hover:text-sunset-orange transition-colors" />}
                      {index === 1 && <Award className="h-8 w-8 text-safari-green dark:text-warm-sand group-hover:text-sunset-orange transition-colors" />}
                      {index === 2 && <MapPin className="h-8 w-8 text-safari-green dark:text-warm-sand group-hover:text-sunset-orange transition-colors" />}
                      {index === 3 && <Users className="h-8 w-8 text-safari-green dark:text-warm-sand group-hover:text-sunset-orange transition-colors" />}
                    </div>
                    <h3 className="text-xl font-semibold text-safari-green dark:text-warm-sand mb-4 group-hover:text-sunset-orange transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Tours Section */}
        <section id="featured-tours" className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-safari-green dark:text-warm-sand mb-4">
                Featured Safari Experiences
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Discover our most popular tours, each carefully designed to showcase 
                the best of East Africa's wildlife and natural wonders
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
              {tours.slice(0, 3).map((tour) => (
                <Card key={tour.id} className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={tour.image}
                      alt={tour.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-sunset-orange text-white">
                        {tour.nights} Night{tour.nights !== 1 ? 's' : ''}
                      </Badge>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold text-safari-green dark:text-warm-sand mb-2 group-hover:text-sunset-orange transition-colors">
                      {tour.title}
                    </h3>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-3">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>{tour.location}</span>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4">
                      {tour.summary}
                    </p>
                    <Link
                      to="/explore-tours"
                      className="inline-flex items-center text-safari-green dark:text-warm-sand hover:text-sunset-orange font-medium transition-colors"
                    >
                      Learn More
                      <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center">
              <Link to="/explore-tours">
                <Button 
                  size="lg"
                  className="bg-safari-green hover:bg-safari-green/90 dark:bg-warm-sand dark:hover:bg-warm-sand/90 dark:text-safari-green text-white font-medium px-8 py-3"
                >
                  View All Tours
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-safari-green dark:bg-gray-900 text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-warm-sand mb-4">
                What Our Travelers Say
              </h2>
              <p className="text-xl text-gray-200">
                Real experiences from real adventurers who've explored East Africa with us
              </p>
            </div>

            <div className="relative">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-white">
                <CardContent className="p-8 text-center">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-warm-sand fill-current" />
                    ))}
                  </div>
                  <blockquote className="text-lg mb-6 leading-relaxed">
                    "{testimonials[currentTestimonial].text}"
                  </blockquote>
                  <div>
                    <p className="font-semibold text-warm-sand">
                      {testimonials[currentTestimonial].name}
                    </p>
                    <p className="text-gray-300 text-sm">
                      {testimonials[currentTestimonial].location}
                    </p>
                    <p className="text-gray-400 text-sm mt-1">
                      {testimonials[currentTestimonial].tour}
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Navigation Buttons */}
              <Button
                variant="ghost"
                size="sm"
                onClick={prevTestimonial}
                className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-4 text-white hover:text-warm-sand hover:bg-white/10"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={nextTestimonial}
                className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-4 text-white hover:text-warm-sand hover:bg-white/10"
                aria-label="Next testimonial"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-6 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentTestimonial 
                        ? 'bg-warm-sand' 
                        : 'bg-white/30 hover:bg-white/50'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="py-20 bg-warm-sand/10 dark:bg-gray-600">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-4xl font-bold text-safari-green dark:text-warm-sand mb-6">
              Ready to Begin Your Adventure?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
              Let us create a personalized safari experience that will exceed your expectations 
              and create memories to last a lifetime.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/explore-tours">
                <Button 
                  size="lg"
                  className="bg-sunset-orange hover:bg-sunset-orange/90 text-white font-medium px-8 py-3"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Browse Tours
                </Button>
              </Link>
              <Link to="/contact">
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-safari-green text-safari-green hover:bg-safari-green hover:text-white dark:border-warm-sand dark:text-warm-sand dark:hover:bg-warm-sand dark:hover:text-safari-green font-medium px-8 py-3"
                >
                  Get Custom Quote
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}