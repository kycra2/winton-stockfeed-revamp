
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';

const PrecalverPelletsPage: React.FC = () => {
  return (
    <ProductLayout title="Precalver Pellets">
      <div className="space-y-10 mb-12">
        {/* Intro Section with Image */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">Prepare Your Herd for a Healthy Start</h2>
            <p className="text-base leading-relaxed">
              Our Pre-Calver Pellets are specially formulated to support dairy cows during the critical 
              transition period before calving. Packed with magnesium, trace minerals, and balanced energy, 
              they help reduce the risk of metabolic issues, improve colostrum quality, and set your herd 
              up for a smooth calving season.
            </p>
            <p className="text-base leading-relaxed">
              Trusted by Kiwi farmers, these pellets are designed to work alongside New Zealand's 
              pasture-based systems — giving your cows the nutrition they need when it matters most.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/WSF-12.jpg" 
                alt="Precalver Pellets" 
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
                <h3 className="font-semibold">Metabolic Support</h3>
                <p>
                  Formulated to help prevent milk fever, grass staggers, and other metabolic disorders common around calving.
                </p>
                <h3 className="font-semibold">Elevated Magnesium</h3>
                <p>
                  Enhanced magnesium levels to support nerve and muscle function during the critical transition period.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Trace Mineral Package</h3>
                <p>
                  Contains essential trace minerals that support immune function and reproductive health.
                </p>
                <h3 className="font-semibold">Calving Preparation</h3>
                <p>
                  Balanced calcium-to-phosphorus ratio helps prepare the cow's system for calcium mobilization at calving.
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
                <p>12% minimum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Energy</h3>
                <p>11.5 MJ ME/kg DM</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Magnesium</h3>
                <p>4.5% minimum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Calcium</h3>
                <p>1.0%</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Phosphorus</h3>
                <p>0.5%</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Trace Elements</h3>
                <p>Fortified</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feeding Recommendations */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Feeding Guidelines</h2>
          <p>
            Begin feeding 2-3 weeks before expected calving date at a rate of 0.5-2kg per cow per day, 
            depending on condition score and pasture quality. Continue for 1-2 weeks after calving to support 
            transition into lactation.
          </p>
          <p>
            For tailored feeding recommendations specific to your herd and farm conditions, 
            please consult with our nutrition specialists.
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

export default PrecalverPelletsPage;
