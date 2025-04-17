
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
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/precalver-feed-southland.png" 
                alt="Precalver Pellets" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </section>

        {/* Key Benefits - 2 columns for desktop */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold text-wsf-brown pb-3 mb-6 border-b border-gray-200">Key Benefits</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Column 1 */}
            <div className="space-y-4">
              <Card className="bg-accent border-none shadow-sm h-full">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-wsf-blue mb-2">High Magnesium Content</h3>
                  <p className="text-sm leading-relaxed">
                    Formulated with elevated levels of magnesium to help prevent metabolic issues 
                    like milk fever during the transition period.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent border-none shadow-sm h-full">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-wsf-blue mb-2">Balanced Energy Levels</h3>
                  <p className="text-sm leading-relaxed">
                    Provides a safe, controlled energy source to support optimal body condition 
                    without causing excessive weight gain.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent border-none shadow-sm h-full">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-wsf-blue mb-2">Added Trace Minerals & Vitamins</h3>
                  <p className="text-sm leading-relaxed">
                    Fortified with essential trace elements such as selenium, iodine, and 
                    vitamin E to support calf development and overall cow health.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent border-none shadow-sm h-full">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-wsf-blue mb-2">Palatable & Easy to Feed</h3>
                  <p className="text-sm leading-relaxed">
                    Made with high-quality ingredients for excellent palatability, ensuring consistent intake 
                    even in unpredictable South Island weather.
                  </p>
                </CardContent>
              </Card>
            </div>
            
            {/* Column 2 */}
            <div className="space-y-4">
              <Card className="bg-accent border-none shadow-sm h-full">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-wsf-blue mb-2">Supports Colostrum Quality</h3>
                  <p className="text-sm leading-relaxed">
                    Nutrient profile supports the development of high-quality colostrum, 
                    giving newborn calves a stronger start.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent border-none shadow-sm h-full">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-wsf-blue mb-2">Reduced Risk of Calving Issues</h3>
                  <p className="text-sm leading-relaxed">
                    Helps reduce the incidence of difficult calvings by ensuring cows are 
                    well-prepared nutritionally before birth.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent border-none shadow-sm h-full">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-wsf-blue mb-2">Formulated for New Zealand Conditions</h3>
                  <p className="text-sm leading-relaxed">
                    Designed specifically for NZ dairy systems and pasture-based feeding — works in 
                    harmony with local feed availability and grazing.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="bg-accent border-none shadow-sm h-full">
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-wsf-blue mb-2">Convenient Pellet Form</h3>
                  <p className="text-sm leading-relaxed">
                    Easy to handle, store, and feed — ideal for in-shed feeding, troughs, or trailers 
                    during the pre-calving window.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Usage Recommendations Section */}
        <section className="mt-12 pt-6 border-t border-gray-200">
          <h2 className="text-2xl font-semibold text-wsf-brown mb-6">Usage Recommendations</h2>
          <div className="bg-gray-50 rounded-lg p-5 shadow-sm">
            <ul className="space-y-4">
              <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-wsf-blue">
                <p className="text-base">
                  Feed Pre-Calver Pellets during the critical 3-4 weeks before calving to help prepare 
                  the cow's metabolism for the demands of calving and lactation.
                </p>
              </li>
              
              <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-wsf-blue">
                <p className="text-base">
                  Recommended feeding rates vary based on farm conditions and individual cow needs. 
                  Typically, 1-2kg per cow per day provides optimal benefits when used as part of a 
                  balanced transition diet.
                </p>
              </li>
              
              <li className="bg-white p-4 rounded-lg shadow-sm border-l-4 border-wsf-blue">
                <p className="text-base">
                  For best results, introduce gradually and ensure consistent daily feeding throughout 
                  the pre-calving period.
                </p>
              </li>
            </ul>
          </div>
        </section>

        {/* Contact Section */}
        <section className="mt-10">
          <Card className="bg-wsf-blue text-white border-none shadow-lg">
            <CardContent className="p-5">
              <div className="flex items-center gap-2 mb-3">
                <Phone className="h-5 w-5" />
                <h3 className="text-xl font-semibold">Get in Touch</h3>
              </div>
              <p className="mb-2">
                Call us on 0800 665277 or 03 2366089.
              </p>
              <p>
                We can discuss your herd's specific needs and recommend the right feeding program 
                for your pre-calving cows.
              </p>
              <Button variant="outline" className="mt-4 bg-white text-wsf-blue hover:bg-gray-100">
                <Link to="/contact-us" className="flex items-center gap-2">
                  Contact Us Today
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </ProductLayout>
  );
};

export default PrecalverPelletsPage;
