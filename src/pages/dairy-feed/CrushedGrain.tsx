import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';

const CrushedGrainPage: React.FC = () => {
  return (
    <ProductLayout title="Crushed Grain Dairy Feed">
      <div className="space-y-8">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">High-Energy Feed for Optimal Milk Production</h2>
            <p className="text-lg">
              Our Crushed Grain Dairy Feed is a premium, high-energy supplement designed to support 
              peak performance in lactating cows.
            </p>
            <p>
              Sourced from quality local grains, it provides readily available energy to help drive 
              milk yield, maintain condition, and support reproductive performance.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/new-zealand-faremers-feed-winton+(1).png" 
                alt="Dairy Cows Feed" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </section>

        {/* Key Features Card */}
        <Card className="bg-accent border-none shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-wsf-blue">Key Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold">High-Energy Formulation</h3>
                <p>
                  Crushed grains provide fast-release starch to meet the energy demands of high-producing cows.
                </p>
                <h3 className="font-semibold">Improved Digestibility</h3>
                <p>
                  Fine crushing enhances digestibility and feed efficiency.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Custom Blend Options</h3>
                <p>
                  Can be tailored with minerals, protein meals, or bypass fats to suit your system.
                </p>
                <h3 className="font-semibold">Locally Sourced</h3>
                <p>
                  Made from quality New Zealand-grown grains. No fillers, no junk—just clean energy.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

              {/* Product Image Section */}
      <section className="mt-8 grid md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Premium Crushed Grain Feed: Quality Energy Source</h2>
          <p className="text-gray-700">
            Our crushed grain feed is meticulously processed to provide optimal particle size for improved 
            digestibility and reduced feed waste. Made from locally sourced grains, it's an excellent 
            energy supplement for your dairy herd.
          </p>
          <p className="text-gray-700">
            The consistent crushing process ensures reliable quality and maximizes the nutritional value 
            of every grain, supporting peak milk production and herd health.
          </p>
        </div>
        <div>
          <img 
            src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/crushed-grain-dairy-feed.png"
            alt="Crushed Grain Dairy Feed Product"
            className="rounded-lg shadow-md w-full h-auto object-cover"
          />
        </div>
      </section>

        {/* Benefits Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Benefits</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Boosts milk solids and volume</li>
            <li>Supports body condition through lactation</li>
            <li>Helps maintain fertility and cycling</li>
            <li>Reduces sorting and feed waste</li>
          </ul>
        </section>

        {/* Feeding Guide Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Feeding Guide</h2>
          <div className="space-y-2">
            <p>Recommended rate: 2–6kg per cow/day depending on production level and total ration.</p>
            <p>Introduce gradually to avoid rumen upset.</p>
            <p>Can be fed via troughs, mixers, or in-shed systems.</p>
          </div>
        </section>

        {/* Available In Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Available In</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Bulk (ex-farm or delivered)</li>
            <li>1-tonne tote bags</li>
            <li>Custom blends by request</li>
          </ul>
        </section>

        {/* Specs Download Section */}
        <section className="bg-wsf-blue bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-wsf-blue mb-2">
              Download Crushed Grain Specifications
            </h3>
            <p className="text-gray-700 mb-2">
              Get detailed information about our Crushed Grain Dairy Feed product.
            </p>
          </div>
          <Button 
            variant="default" 
            className="bg-wsf-blue hover:bg-wsf-blue-dark w-full sm:w-auto"
            onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/2019_WSF_Crushed_Grain.pdf', '_blank')}
          >
            <Download className="h-5 w-5 mr-2" />
            Download PDF
          </Button>
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

export default CrushedGrainPage;
