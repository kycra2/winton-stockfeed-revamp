
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const PKEPage: React.FC = () => {
  return (
    <ProductLayout title="Palm Kernel Expeller (PKE)">
      <div className="space-y-8">
        {/* Intro Section with new image on the right */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <p className="text-lg">
              Winton Stock Feed supplies the Southland and South Otago Region with Palm Kernel.
            </p>
            <p>
              We have our own Auger and Bulk Trucks to deliver into silos and sheds on farm, 
              so we have complete control of our product from ship to farm.
            </p>
            <p>
              We offer PKE contracts and spot pricing through our locations in Timaru, 
              Christchurch, New Plymouth, Mt Maunganui and Waharoa.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/female-farmer-winton-stock-feed-southland+(1).png" 
              alt="Female Farmer in Southland" 
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
        </section>

        {/* Quick Info Card */}
        <Card className="bg-accent border-none shadow-md">
          <CardContent className="p-6 space-y-4">
            <h2 className="text-xl font-semibold text-wsf-blue">New to PKE?</h2>
            <p>Need a quick way to get feeding without the waste?</p>
            <Button variant="default" asChild className="mt-2">
              <Link to="#feed-trailers">Check out these great trailers here!</Link>
            </Button>
            <p className="pt-2 text-gray-700">
              Go to our Sales page to talk to a rep near you for today's PKE pricing.
            </p>
          </CardContent>
        </Card>

        {/* Benefits Section with Palm Nut Image */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">About Palm Kernel</h2>
          
          <div className="flex flex-col md:flex-row gap-4 items-start">
            <div className="flex-1">
              <p>
                Palm Kernel is a palatable feed stuff that is the by-product of palm oil extraction 
                and is recommended for calf and ruminant feeds. Palm Nut Kernel has the ability to replace some higher 
                cost protein sources while providing cost effective energy.
              </p>
            </div>
            
            <div className="md:w-1/3 w-full flex flex-col items-center md:items-end">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/palm-nut.png" 
                alt="Palm Nut" 
                className="rounded-md shadow-sm max-h-48 object-contain"
              />
              <p className="text-sm text-gray-600 italic mt-2">Palm Nut Kernel cut in half</p>
            </div>
          </div>
        </section>

        {/* Details Section with PKE truck image as a small side image */}
        <section className="space-y-4">
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="md:w-2/3 space-y-3">
              <p>The product originates from Asia and the Pacific Islands.</p>
              <p>
                Palm Kernel meal is also an excellent source of energy, protein and minerals for 
                larger ruminants. It can negate some of the negative effects of feeding high starch 
                levels on rumen health because it is supplying energy from the oil portion.
              </p>
              <p>
                This product can also help balance diets that are high in maize silage and also diets 
                low in digestible protein and high in fibre. Palm Kernel meal is also an excellent 
                economic emergency and drought relief feedstuff.
              </p>
              <p>
                Palm Kernel is a slow but very fermentable product. Palm Kernel has high digestibility 
                in ruminants, therefore provides constant energy release and help maintain rumen pH in 
                the optimum range for best rumen function and animal performance.
              </p>
            </div>
            <div className="md:w-1/3 flex flex-col items-center md:items-end">
              <img 
                src="https://github.com/kycra2/winton-stockfeed-revamp/blob/main/src/components/images/winton-stock-feed-auger-truck.jpg?raw=true" 
                alt="Our PKE Delivery Truck" 
                className="rounded-md shadow-sm max-h-60 object-contain"
              />
              <p className="text-sm text-gray-600 italic mt-2">Our PKE Delivery Truck</p>
            </div>
          </div>
        </section>

        {/* Specs Download Section - Fixed for mobile */}
        <section className="bg-wsf-blue bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-wsf-blue mb-2">
              Download PKE Specifications
            </h3>
            <p className="text-gray-700 mb-2">
              Get detailed information about our Palm Kernel Expeller (PKE) product.
            </p>
          </div>
          <Button 
            variant="default" 
            className="bg-wsf-blue hover:bg-wsf-blue-dark w-full sm:w-auto"
            onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/169438_WSF_A4_Flyers_PKE.pdf', '_blank')}
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
          </CardContent>
        </Card>
      </div>
    </ProductLayout>
  );
};

export default PKEPage;
