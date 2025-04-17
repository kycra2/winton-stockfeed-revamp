
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Package, Truck } from 'lucide-react';
import { Link } from 'react-router-dom';

const FeedTrailersPage: React.FC = () => {
  return (
    <ProductLayout title="Feed Trailers">
      <div className="space-y-8">
        {/* Intro Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">EXCLUSIVE TO WINTON STOCK FEED</h2>
          <p className="text-xl font-medium">The Best and Strongest Feed Trailer Around.</p>
          <p>
            This Feed Trailer has been designed in Winton for large capacity and ease of tractor loading and towing.
          </p>
          <p>
            The large open bin will suit any sized farm wanting to feed out in the paddock easily. 
            The wide bin makes loading easy and the tractor quick hitch makes hitching and towing a 
            breeze without getting out of the tractor.
          </p>
        </section>

        {/* Image Gallery */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/feed-trailer-winton-stock-feed-3.jpg" 
              alt="Winton Stock Feed Trailer" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/feed-trailer-winton-stock-feed.jpg" 
              alt="Winton Stock Feed Trailer" 
              className="w-full h-64 object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/feed-trailer-winton-stock-feed-1.jpg" 
              alt="Winton Stock Feed Trailer" 
              className="w-full h-64 object-cover"
            />
          </div>
        </section>

        {/* Benefits Section */}
        <section className="space-y-4">
          <p>
            The wide bin can hold 2 Tonne of PKE or up to three round bales, its easy to 
            load which reduces spillage and wastage.
          </p>
          <p>
            The curved shape means cows can reach all the feed.
          </p>
          <p>
            Curved trough means cows can reach all the feed, high sides and large capacity 
            means no spillage during filling and minimises wastage during feeding.
          </p>
        </section>

        {/* Specifications Section with Image */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">Trailer Specifications</h2>
            <p>
              Our trailers hold up to 2 Tonne of Palm Kernel Expeller which means more feed for your cattle. 
              The trailer is also wider than others (1.58 mtrs) and this means less wastage due to spillage. Perfect!!
            </p>
            <p>
              The trailers come with a quick hitch system which is designed to be removed easily during use. 
              No more back breaking hassles, using a feed trailer is now easy.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <img 
              src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/winton-stock-feed-trailer-specs.jpg" 
              alt="Winton Stock Feed Trailer Specifications" 
              className="w-full h-auto object-cover"
            />
          </div>
        </section>

        {/* Video Section */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">See examples of the feed trailers in the video below</h3>
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            {/* Video placeholder - This would be replaced with an actual video component */}
            <p className="text-gray-500">Video content would be displayed here</p>
          </div>
        </section>

        {/* Contact Card */}
        <Card className="bg-wsf-blue text-white border-none shadow-lg">
          <CardContent className="p-6 space-y-4">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <h3 className="text-xl font-semibold">Get in Touch</h3>
            </div>
            <p>
              Call us on 0800 665277 or 03 2366089 to inquire about our feed trailers.
            </p>
            <p>
              We can arrange a demonstration or discuss your specific needs.
            </p>
          </CardContent>
        </Card>
      </div>
    </ProductLayout>
  );
};

export default FeedTrailersPage;
