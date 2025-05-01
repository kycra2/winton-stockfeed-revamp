
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';

const CalfGrower16Page: React.FC = () => {
  return (
    <ProductLayout title="Calf Grower 16%">
      <div className="space-y-8">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">Premium Calf Growth Formula</h2>
            <p className="text-lg">
              Our Calf Grower 16% is specially formulated to provide balanced nutrition for growing calves, 
              supporting healthy development and consistent weight gain.
            </p>
            <p>
              With 16% protein content, this high-quality feed helps young animals develop strong 
              frames and muscle while supporting their immune systems during crucial growth stages.
            </p>
            <p>
              This premium blend is designed to complement New Zealand pastoral farming systems 
              while providing the nutritional boost that growing calves need.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/calf-feed-new-zealand.jpg" 
                alt="Calf Grower 16% Feed" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </section>

        {/* Key Features Card */}
        <Card className="bg-accent border-none shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-wsf-blue">Key Benefits</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold">Balanced Nutrition</h3>
                <p>
                  16% protein formula carefully balanced with energy sources for optimal growth.
                </p>
                <h3 className="font-semibold">Quality Ingredients</h3>
                <p>
                  Made from high-quality feed components for maximum digestibility and nutrient absorption.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Growth Support</h3>
                <p>
                  Formulated to promote consistent growth rates and healthy rumen development.
                </p>
                <h3 className="font-semibold">NZ Conditions</h3>
                <p>
                  Specifically designed for New Zealand farming systems and conditions.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Nutritional Information */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Nutritional Information</h2>
          <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div>
                <h3 className="text-wsf-blue font-medium">Protein</h3>
                <p>16% minimum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Energy</h3>
                <p>12 MJ ME/kg DM</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Fiber</h3>
                <p>12% maximum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Calcium</h3>
                <p>0.8%</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Phosphorus</h3>
                <p>0.5%</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Selenium</h3>
                <p>Added</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feeding Recommendations */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Feeding Guidelines</h2>
          <p>
            Feed at a rate of 1-2kg per calf per day depending on age, size, and condition. 
            Introduce gradually and ensure fresh clean water is always available.
          </p>
          <p>
            This product is designed to complement good quality pasture or forage. 
            Consult your nutritionist for specific feeding recommendations for your herd.
          </p>
        </section>

        {/* Available In Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Available In</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>25kg bags</li>
            <li>Bulk (1 tonne bags)</li>
            <li>Bulk delivery available</li>
          </ul>
        </section>

        {/* Contact Card */}
        <Card className="bg-wsf-blue text-white border-none shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <h3 className="text-xl font-semibold">Get in Touch</h3>
            </div>
            <p>
              Call us on 0800 665277 or 03 2366089.
            </p>
            <p>
              We can open an account for you and get your first order going all with one call.
            </p>
            <div className="mt-4 text-sm text-gray-200 italic">
              All prices are Ex Store, Exclusive of GST, and subject to change, call us for the latest prices.
            </div>
          </CardContent>
        </Card>
      </div>
    </ProductLayout>
  );
};

export default CalfGrower16Page;
