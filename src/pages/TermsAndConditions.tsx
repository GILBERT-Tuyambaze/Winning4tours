import Layout from '@/components/Layout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function TermsAndConditions() {
  return (
    <Layout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
        {/* Hero Section */}
        <section className="relative bg-safari-green dark:bg-gray-800 text-white py-16">
          <div className="absolute inset-0 bg-gradient-to-r from-safari-green/90 to-safari-green/70 dark:from-gray-800/90 dark:to-gray-800/70" />
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Terms & Conditions
            </h1>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Please read these terms and conditions carefully before booking your tour with us.
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl text-safari-green dark:text-warm-sand">
                  Winning4Tours Terms and Conditions
                </CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray dark:prose-invert max-w-none">
                <div className="space-y-8">
                  <section>
                    <h2 className="text-xl font-semibold text-safari-green dark:text-warm-sand mb-4">
                      1. Booking and Payment Terms
                    </h2>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>1.1 Booking Confirmation:</strong> All bookings are subject to availability and confirmation by Winning4Tours. 
                        A booking is confirmed only when we send you a written confirmation via email.
                      </p>
                      <p>
                        <strong>1.2 Payment Schedule:</strong> A deposit of 30% of the total tour cost is required to secure your booking. 
                        The remaining balance must be paid 30 days before the tour departure date.
                      </p>
                      <p>
                        <strong>1.3 Payment Methods:</strong> We accept payments via bank transfer, credit card, or other agreed methods. 
                        All payments should be made in USD unless otherwise specified.
                      </p>
                      <p>
                        <strong>1.4 Late Payments:</strong> Failure to make payment by the due date may result in cancellation of your booking 
                        and forfeiture of any deposits paid.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-safari-green dark:text-warm-sand mb-4">
                      2. Cancellation and Refund Policy
                    </h2>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>2.1 Cancellation by Client:</strong>
                      </p>
                      <ul className="list-disc list-inside ml-4 space-y-1">
                        <li>More than 60 days before departure: 10% cancellation fee</li>
                        <li>31-60 days before departure: 25% cancellation fee</li>
                        <li>15-30 days before departure: 50% cancellation fee</li>
                        <li>Less than 15 days before departure: 100% cancellation fee (no refund)</li>
                      </ul>
                      <p>
                        <strong>2.2 Cancellation by Winning4Tours:</strong> In the unlikely event that we need to cancel your tour, 
                        we will provide a full refund or offer an alternative tour of equal value.
                      </p>
                      <p>
                        <strong>2.3 Force Majeure:</strong> No refunds will be given for cancellations due to circumstances beyond our control, 
                        including but not limited to natural disasters, political unrest, or government restrictions.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-safari-green dark:text-warm-sand mb-4">
                      3. Travel Requirements and Responsibilities
                    </h2>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>3.1 Travel Documents:</strong> Clients are responsible for ensuring they have valid passports, 
                        visas, and any required health certificates. Passports must be valid for at least 6 months from the date of travel.
                      </p>
                      <p>
                        <strong>3.2 Health Requirements:</strong> Clients should consult their healthcare provider regarding 
                        vaccinations and health precautions for travel to East Africa. Yellow fever vaccination may be required.
                      </p>
                      <p>
                        <strong>3.3 Travel Insurance:</strong> We strongly recommend that all clients purchase comprehensive travel insurance 
                        covering medical expenses, trip cancellation, and emergency evacuation.
                      </p>
                      <p>
                        <strong>3.4 Fitness Requirements:</strong> Some tours may require a reasonable level of physical fitness. 
                        Clients should inform us of any medical conditions or mobility limitations.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-safari-green dark:text-warm-sand mb-4">
                      4. Liability and Insurance
                    </h2>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>4.1 Limitation of Liability:</strong> Winning4Tours acts as an agent for various service providers 
                        and is not liable for their acts or omissions. Our liability is limited to the cost of the tour.
                      </p>
                      <p>
                        <strong>4.2 Personal Property:</strong> Winning4Tours is not responsible for loss or damage to personal property. 
                        We recommend keeping valuables secure and obtaining appropriate insurance coverage.
                      </p>
                      <p>
                        <strong>4.3 Activities and Excursions:</strong> Participation in activities and excursions is at the client's own risk. 
                        Clients should follow all safety instructions provided by guides and activity operators.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-safari-green dark:text-warm-sand mb-4">
                      5. Tour Modifications and Itinerary Changes
                    </h2>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>5.1 Itinerary Changes:</strong> While we make every effort to operate tours as advertised, 
                        we reserve the right to modify itineraries due to weather, road conditions, or other circumstances beyond our control.
                      </p>
                      <p>
                        <strong>5.2 Accommodation Changes:</strong> In rare cases, we may need to substitute accommodations with 
                        properties of similar standard due to availability or other factors.
                      </p>
                      <p>
                        <strong>5.3 No Compensation:</strong> No compensation will be provided for itinerary changes made for safety, 
                        weather, or other operational reasons.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-safari-green dark:text-warm-sand mb-4">
                      6. Conduct and Behavior
                    </h2>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>6.1 Client Conduct:</strong> Clients are expected to behave respectfully towards other travelers, 
                        guides, local communities, and wildlife. Disruptive behavior may result in removal from the tour without refund.
                      </p>
                      <p>
                        <strong>6.2 Wildlife Viewing:</strong> Clients must follow all park rules and guide instructions when viewing wildlife. 
                        Feeding or disturbing animals is strictly prohibited.
                      </p>
                      <p>
                        <strong>6.3 Environmental Responsibility:</strong> We encourage responsible tourism practices. 
                        Please respect local customs, minimize environmental impact, and support conservation efforts.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-safari-green dark:text-warm-sand mb-4">
                      7. Privacy and Data Protection
                    </h2>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>7.1 Personal Information:</strong> We collect and use personal information only for the purpose of 
                        providing tour services and will not share it with third parties without consent, except as required by law.
                      </p>
                      <p>
                        <strong>7.2 Photography:</strong> Photos taken during tours may be used for promotional purposes. 
                        Please inform us if you prefer not to be included in promotional materials.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-safari-green dark:text-warm-sand mb-4">
                      8. Governing Law and Disputes
                    </h2>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p>
                        <strong>8.1 Governing Law:</strong> These terms and conditions are governed by the laws of Rwanda.
                      </p>
                      <p>
                        <strong>8.2 Dispute Resolution:</strong> Any disputes arising from these terms or tour services will be 
                        resolved through mediation, and if necessary, arbitration in Kigali, Rwanda.
                      </p>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-safari-green dark:text-warm-sand mb-4">
                      9. Contact Information
                    </h2>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p>
                        For questions about these terms and conditions or to discuss your booking, please contact us:
                      </p>
                      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
                        <p><strong>Email:</strong> winning4tours@gmail.com</p>
                        <p><strong>Phone:</strong> +250 732 288 858</p>
                        <p><strong>Address:</strong> Kigali – Rwanda</p>
                      </div>
                    </div>
                  </section>

                  <section>
                    <h2 className="text-xl font-semibold text-safari-green dark:text-warm-sand mb-4">
                      10. Acceptance of Terms
                    </h2>
                    <div className="space-y-3 text-gray-700 dark:text-gray-300">
                      <p>
                        By booking a tour with Winning4Tours, you acknowledge that you have read, understood, 
                        and agree to be bound by these terms and conditions. These terms may be updated from time to time, 
                        and the version in effect at the time of booking will apply to your tour.
                      </p>
                      <p className="text-sm text-gray-500 dark:text-gray-400 mt-6">
                        <strong>Last updated:</strong> October 2024
                      </p>
                    </div>
                  </section>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </div>
    </Layout>
  );
}