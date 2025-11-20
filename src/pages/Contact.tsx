import { useState } from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, Clock, CheckCircle, Loader2 } from 'lucide-react';
import { contactInfo } from '@/data/tours';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleInputChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Web3Forms API endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          access_key: 'd711b518-52f5-40e7-9f6b-b2d7509622b6', 
          from_name: formData.name,
          email: formData.email,
          message: formData.message,
          subject: `New Contact Message from ${formData.name}`,
          honeypot: '', 
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitSuccess(true);
        setFormData({ name: '', email: '', message: '' });
      } else {
        alert('Submission failed. Please try again.');
      }
    } catch (error) {
      console.error('Contact form submission failed:', error);
      alert('Something went wrong. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative bg-safari-green dark:bg-gray-800 text-white py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-safari-green/90 to-safari-green/70 dark:from-gray-800/90 dark:to-gray-800/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Ready to start planning your East African adventure? We're here to help make your dream safari a reality.
            </p>
          </div>
        </section>

        {/* Contact Content */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Information */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-safari-green dark:text-warm-sand mb-6">
                    Contact Information
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8">
                    Our experienced team is ready to help you plan the perfect East African safari. 
                    Contact us through any of the methods below, and we'll get back to you promptly.
                  </p>
                </div>

                <div className="space-y-6">
                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-safari-green/10 dark:bg-warm-sand/10 p-3 rounded-lg">
                        <Mail className="h-6 w-6 text-safari-green dark:text-warm-sand" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-safari-green dark:text-warm-sand mb-1">Email</h3>
                        <p className="text-gray-600 dark:text-gray-400">{contactInfo.email}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">We typically respond within 24 hours</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-safari-green/10 dark:bg-warm-sand/10 p-3 rounded-lg">
                        <Phone className="h-6 w-6 text-safari-green dark:text-warm-sand" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-safari-green dark:text-warm-sand mb-1">Phone</h3>
                        <p className="text-gray-600 dark:text-gray-400">{contactInfo.phone}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Available during East Africa business hours</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-safari-green/10 dark:bg-warm-sand/10 p-3 rounded-lg">
                        <MapPin className="h-6 w-6 text-safari-green dark:text-warm-sand" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-safari-green dark:text-warm-sand mb-1">Location</h3>
                        <p className="text-gray-600 dark:text-gray-400">{contactInfo.address}</p>
                        <p className="text-sm text-gray-500 dark:text-gray-500 mt-1">Based in the heart of East Africa</p>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardContent className="p-6 flex items-start space-x-4">
                      <div className="bg-safari-green/10 dark:bg-warm-sand/10 p-3 rounded-lg">
                        <Clock className="h-6 w-6 text-safari-green dark:text-warm-sand" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-safari-green dark:text-warm-sand mb-1">Business Hours</h3>
                        <div className="text-gray-600 dark:text-gray-400 space-y-1">
                          <p>Monday - Friday: 8:00 AM - 6:00 PM (EAT)</p>
                          <p>Saturday: 9:00 AM - 4:00 PM (EAT)</p>
                          <p>Sunday: Closed</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Contact Form */}
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl text-safari-green dark:text-warm-sand">
                      Send Us a Message
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    {!submitSuccess ? (
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <Label htmlFor="name" className="text-sm font-medium">Full Name *</Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => handleInputChange('name', e.target.value)}
                            className="mt-1"
                            placeholder="Your full name"
                          />
                        </div>

                        <div>
                          <Label htmlFor="email" className="text-sm font-medium">Email Address *</Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => handleInputChange('email', e.target.value)}
                            className="mt-1"
                            placeholder="your.email@example.com"
                          />
                        </div>

                        <div>
                          <Label htmlFor="message" className="text-sm font-medium">Message *</Label>
                          <Textarea
                            id="message"
                            required
                            rows={6}
                            value={formData.message}
                            onChange={(e) => handleInputChange('message', e.target.value)}
                            className="mt-1"
                            placeholder="Tell us about your travel plans, interests, and any questions you have..."
                          />
                        </div>

                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-sunset-orange hover:bg-sunset-orange/90 text-white font-medium py-3 transition-colors disabled:opacity-50 flex items-center justify-center"
                          size="lg"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                              Sending...
                            </>
                          ) : (
                            'Send Message'
                          )}
                        </Button>
                      </form>
                    ) : (
                      <div className="text-center space-y-4">
                        <div className="mx-auto w-16 h-16 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-safari-green dark:text-warm-sand">
                          Message Sent Successfully!
                        </h3>
                        <p className="text-gray-600 dark:text-gray-400">
                          Thank you for contacting us. We'll get back to you within 24 hours.
                        </p>
                        <Button
                          onClick={() => setSubmitSuccess(false)}
                          variant="outline"
                          className="mt-4"
                        >
                          Send Another Message
                        </Button>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Additional Information */}
        <section className="bg-warm-sand/10 dark:bg-gray-600 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-safari-green dark:text-warm-sand mb-6">
              Why Choose Winning4Tours?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="font-semibold text-safari-green dark:text-warm-sand mb-2">Local Expertise</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Based in Rwanda with deep knowledge of East African destinations, 
                  wildlife patterns, and cultural experiences.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-safari-green dark:text-warm-sand mb-2">Personalized Service</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  Every tour is tailored to your interests, budget, and travel style for a truly unique experience.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-safari-green dark:text-warm-sand mb-2">Conservation Focus</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  We're committed to responsible tourism that supports wildlife conservation and local communities.
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-safari-green dark:text-warm-sand mb-2">24/7 Support</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  From planning to your return home, we provide continuous support to ensure your safari exceeds expectations.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
