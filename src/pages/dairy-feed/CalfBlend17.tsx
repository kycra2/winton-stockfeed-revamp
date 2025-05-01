
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';

const CalfBlend17Page: React.FC = () => {
  return (
    <ProductLayout title="Calf Blend 17%">
      <div className="space-y-8">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">Balanced Calf Development Formula</h2>
            <p className="text-lg">
              Our Calf Blend 17% combines optimal protein levels with carefully selected ingredients to 
              create a versatile and effective feed for growing calves.
            </p>
            <p>
              This specialized 17% protein blend is formulated to promote steady growth, support 
              rumen development, and provide all essential nutrients in a highly palatable form.
            </p>
            <p>
              Developed for New Zealand conditions, this balanced feed helps farmers raise strong, 
              healthy calves with excellent feed efficiency and growth performance.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/calf-feed-blend-nz.jpg" 
                alt="Calf Blend 17% Feed" 
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
                <h3 className="font-semibold">Optimized Protein</h3>
                <p>
                  17% protein level provides an excellent balance for steady growth and development.
                </p>
                <h3 className="font-semibold">Rumen Development</h3>
                <p>
                  Special fiber profile promotes healthy rumen development and function.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Highly Palatable</h3>
                <p>
                  Carefully selected ingredients ensure excellent palatability and intake.
                </p>
                <h3 className="font-semibold">Complete Nutrition</h3>
                <p>
                  Contains a full spectrum of vitamins and minerals for optimal calf health.
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
                <p>17% minimum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Energy</h3>
                <p>12.2 MJ ME/kg DM</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Fiber</h3>
                <p>12% maximum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Calcium</h3>
                <p>0.9%</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Phosphorus</h3>
                <p>0.5%</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Vitamin A, D, E</h3>
                <p>Added</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feeding Recommendations */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Feeding Guidelines</h2>
          <p>
            Feed at a rate of 1-2kg per calf per day depending on age and weight. 
            Introduce gradually over several days and ensure fresh water is always available.
          </p>
          <p>
            This balanced formula works well in combination with quality forage or pasture. 
            For tailored feeding programs, please consult with our nutrition specialists.
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

export default CalfBlend17Page;
