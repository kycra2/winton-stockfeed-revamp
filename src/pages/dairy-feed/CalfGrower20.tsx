
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';

const CalfGrower20Page: React.FC = () => {
  return (
    <ProductLayout title="Calf Grower 20%">
      <div className="space-y-8">
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">High-Protein Calf Development Formula</h2>
            <p className="text-lg">
              Our premium Calf Grower 20% feed is a high-protein formula designed to maximize growth 
              potential in young calves during critical development stages.
            </p>
            <p>
              With 20% protein content, this superior feed provides enhanced nutrition for optimal muscle 
              development, skeletal growth, and immune system support.
            </p>
            <p>
              Specifically formulated for New Zealand farming conditions, this high-performance feed 
              helps producers achieve excellent growth rates and sturdy, healthy animals.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/calf-feeding-nz.jpg" 
                alt="Calf Grower 20% Feed" 
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
                <h3 className="font-semibold">High Protein Formula</h3>
                <p>
                  20% protein content for accelerated growth rates and optimal development.
                </p>
                <h3 className="font-semibold">Superior Ingredients</h3>
                <p>
                  Premium quality components selected for digestibility and nutrient bioavailability.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Enhanced Development</h3>
                <p>
                  Supports robust skeletal and muscle development for healthy, productive animals.
                </p>
                <h3 className="font-semibold">Immune Support</h3>
                <p>
                  Contains added vitamins and minerals that support immune function in young calves.
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
                <p>20% minimum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Energy</h3>
                <p>12.5 MJ ME/kg DM</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Fiber</h3>
                <p>10% maximum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Calcium</h3>
                <p>1.0%</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Phosphorus</h3>
                <p>0.6%</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Trace Minerals</h3>
                <p>Fortified</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feeding Recommendations */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Feeding Guidelines</h2>
          <p>
            Recommended feeding rate is 1-2.5kg per head per day depending on age, size, and desired growth rate. 
            Gradually introduce to the diet and ensure clean, fresh water is always available.
          </p>
          <p>
            This high-protein product is ideal for intensive rearing systems or when rapid growth is desired. 
            For specific feeding programs tailored to your operation, please consult with our nutritional specialists.
          </p>
        </section>

        {/* Available In Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Available In</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>25kg bags</li>
            <li>Bulk (1 tonne bags)</li>
            <li>Bulk delivery to farm</li>
          </ul>
        </section>

        {/* PDF Download Section */}
        <section className="bg-wsf-blue bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-wsf-blue mb-2">
              Download Calf Grower 20% Specifications
            </h3>
            <p className="text-gray-700 mb-2">
              Get detailed information about our Calf Grower 20% product.
            </p>
          </div>
          <Button 
            variant="default" 
            className="bg-wsf-blue hover:bg-wsf-blue-dark w-full sm:w-auto"
            onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Calf+Grower+20%25.pdf', '_blank')}
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

export default CalfGrower20Page;
