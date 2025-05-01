
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Phone, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

const DairyFeedEnzymesPage: React.FC = () => {
  return (
    <ProductLayout title="GC Pellets">
      <div className="space-y-10 mb-12">
        {/* Intro Section with Image */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">Maximize Feed Efficiency with GC Pellets</h2>
            <p className="text-base leading-relaxed">
              Our GC Pellets supplement is specially formulated to improve digestibility and nutrient 
              absorption in dairy cows. By breaking down complex feed components, these pellets help release 
              more nutrients from the same amount of feed, improving feed conversion efficiency.
            </p>
            <p className="text-base leading-relaxed">
              Developed specifically for New Zealand's pastoral-based dairy systems, our GC Pellets
              works with a variety of feed types and helps reduce feed waste while optimizing milk production.
            </p>
            <div className="pt-4">
              <Button 
                className="bg-wsf-blue hover:bg-wsf-blue-dark text-white"
                asChild
              >
                <a href="tel:032367224" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Call Us for Pricing: 03 236 7224
                </a>
              </Button>
            </div>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/dairy-cow-feeding-new-zealand.png" 
                alt="Dairy cow feeding on supplemented feed" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </section>

        {/* Benefits Section */}
        <section>
          <h2 className="text-2xl font-semibold text-wsf-brown mb-6">Benefits of GC Pellets</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-wsf-blue">Improved Digestibility</h3>
              <p>Breaks down complex carbohydrates, proteins and fiber for better nutrient absorption and utilization.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-wsf-blue">Increased Production</h3>
              <p>Helps increase milk production and component yields by making more nutrients available from the same feed.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-medium mb-3 text-wsf-blue">Cost Effective</h3>
              <p>Reduces feed waste and improves feed conversion ratio, lowering the overall cost per liter of milk produced.</p>
            </div>
          </div>
        </section>

        {/* Usage Section */}
        <section>
          <h2 className="text-2xl font-semibold text-wsf-brown mb-6">Usage Guidelines</h2>
          <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
            <p className="mb-4">Mix with daily feed ration at the recommended rate of 2-5g per cow per day, depending on feed type and quality.</p>
            <h3 className="font-medium text-lg mb-2">Recommended for:</h3>
            <ul className="list-disc pl-5 space-y-2">
              <li>Dairy cows on high-forage diets</li>
              <li>Herds with variable feed quality</li>
              <li>Systems looking to optimize feed efficiency</li>
              <li>Transition cows to support adaptation to dietary changes</li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="bg-wsf-blue/10 p-6 rounded-lg">
          <h2 className="text-xl font-semibold mb-4">Need More Information?</h2>
          <p className="mb-6">Contact our team for detailed specifications, pricing, and recommendations for your herd's specific needs.</p>
          <div className="flex flex-wrap gap-4">
            <Button asChild variant="default" className="bg-wsf-blue hover:bg-wsf-blue-dark">
              <Link to="/contact-us">Contact Us</Link>
            </Button>
            <Button asChild variant="outline">
              <Link to="/feed-quality-declarations" className="flex items-center gap-2">
                <FileText className="h-4 w-4" />
                View Feed Declarations
              </Link>
            </Button>
          </div>
        </section>
      </div>
    </ProductLayout>
  );
};

export default DairyFeedEnzymesPage;
