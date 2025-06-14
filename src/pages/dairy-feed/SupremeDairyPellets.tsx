
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';

const SupremeDairyPelletsPage: React.FC = () => {
  return (
    <ProductLayout title="Supreme Dairy Pellets">
      <div className="space-y-8">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">Premium Dairy Nutrition Solution</h2>
            <p className="text-lg">
              Our Supreme Dairy Pellets offer a comprehensive nutritional solution for high-producing 
              dairy cows, designed to support peak milk production and maintain optimal animal health.
            </p>
            <p>
              This premium feed is formulated with high-quality ingredients to provide balanced energy, 
              protein, and essential nutrients for efficient milk production throughout lactation.
            </p>
            <p>
              Developed specifically for New Zealand farming systems, these pellets complement pasture-based 
              diets and help optimize milk solids production while supporting cow condition.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/dairy-pellets-feed.jpg" 
                alt="Supreme Dairy Pellets" 
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
                <h3 className="font-semibold">Complete Nutrition</h3>
                <p>
                  Balanced profile of energy, protein, vitamins, and minerals to support high milk production.
                </p>
                <h3 className="font-semibold">Quality Ingredients</h3>
                <p>
                  Made with premium ingredients for maximum digestibility and nutrient utilization.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Production Support</h3>
                <p>
                  Formulated to enhance milk volume and solids while supporting body condition.
                </p>
                <h3 className="font-semibold">Rumen Health</h3>
                <p>
                  Contains buffers and fiber sources that promote healthy rumen function.
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
                <p>12.5 MJ ME/kg DM</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Fiber</h3>
                <p>12% maximum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Starch</h3>
                <p>25% minimum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Fat</h3>
                <p>4% minimum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Vitamins & Minerals</h3>
                <p>Comprehensive</p>
              </div>
            </div>
          </div>
        </section>

        {/* Key Ingredients */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Key Ingredients</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Premium grains for energy</li>
            <li>High-quality protein sources</li>
            <li>Essential vitamin and mineral premix</li>
            <li>Digestible fiber sources</li>
            <li>Rumen buffers for optimal pH</li>
            <li>Protected fat for energy density</li>
          </ul>
        </section>

        {/* Feeding Recommendations */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Feeding Guidelines</h2>
          <p>
            Feed at a rate of 2-6kg per cow per day depending on production level, pasture quality, 
            and stage of lactation. Introduce gradually over several days when starting.
          </p>
          <p>
            For optimal results, distribute feeding throughout the day when possible. 
            For tailored feeding programs specific to your herd, please consult with our nutrition specialists.
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

export default SupremeDairyPelletsPage;
