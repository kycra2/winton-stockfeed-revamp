
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Package, Truck, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import SEOHead, { generateProductSchema, generateBreadcrumbSchema } from '@/components/SEOHead';

const feedTrailerSchema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProductSchema({
      name: "Feed Trailers",
      description: "Large capacity 2-tonne feed trailers designed in Winton for easy tractor loading and towing. Perfect for PKE or hay feeding in the paddock.",
      image: "https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/feed-trailer-winton-stock-feed.jpg",
      category: "Farm Equipment"
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://www.wintonstockfeed.co.nz" },
      { name: "Feed Trailers", url: "https://www.wintonstockfeed.co.nz/feed-trailers" }
    ])
  ]
};

const FeedTrailersPage: React.FC = () => {
  return (
    <ProductLayout title="Feed Trailers">
      <SEOHead
        title="Feed Trailers NZ - 2 Tonne PKE Trailers | Winton Stock Feed"
        description="Exclusive 2-tonne feed trailers designed in Winton. Large capacity for PKE or hay, easy tractor loading, quick hitch system. The best and strongest feed trailer around. Ideal for paddock feeding."
        keywords="feed trailers NZ, PKE trailers, farm trailers, feed out trailer, 2 tonne trailer, Winton Stock Feed trailers"
        canonicalUrl="https://www.wintonstockfeed.co.nz/feed-trailers"
        ogType="product"
        schema={feedTrailerSchema}
      />
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

        {/* Image Gallery - Updated to show full images */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            "https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/feed-trailer-winton-stock-feed-3.jpg",
            "https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/feed-trailer-winton-stock-feed.jpg",
            "https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/feed-trailer-winton-stock-feed-1.jpg"
          ].map((src, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img 
                src={src}
                alt={`Winton Stock Feed Trailer ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </section>

        {/* Benefits Section */}
        <section className="space-y-4">
          <p>
            The wide bin can hold 2 Tonne of PKE or up to three round bales, its easy to 
            load which reduces spillage and wastage.
          </p>
          
          <p>
            Curved trough means cows can reach all the feed, high sides and large capacity 
            means no spillage during filling and minimises wastage during feeding.
          </p>
          <p>
            These trailers are ideal for feeding PKE or straw/hay in the paddock, 
            Molasses can be added to the dry bales which increases feed intake.
          </p>
        </section>

        {/* Testimonial Section */}
        <section className="bg-gradient-to-br from-wsf-brown/5 to-wsf-blue/5 p-8 rounded-lg border-l-4 border-wsf-brown">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-wsf-brown">Safer, Stronger, Smarter</h3>
            <blockquote className="text-lg italic text-gray-700 leading-relaxed">
              "Winton Stock Feed nailed it with these 2-tonne feed trailers. They're solid, 
              well-designed, and tough enough to stand up to daily farm use. Most importantly, 
              the size means the team uses the tractor – much safer than towing with bikes."
            </blockquote>
            <p className="text-sm font-medium text-gray-600">
              — Scott Paterson, Waterside Dairies Ltd – Bay of Plenty
            </p>
          </div>
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
              className="w-full h-auto"
            />
          </div>
        </section>

        {/* Video Section */}
        <section className="space-y-4">
          <h3 className="text-xl font-semibold">See examples of the feed trailers in the video below</h3>
          <div className="aspect-video bg-gray-100 rounded-lg overflow-hidden">
            <iframe 
              className="w-full h-full" 
              src="https://www.youtube.com/embed/Ds-jsn7FLhA?si=dvE2ewobTOvSU49i" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </section>

        {/* WSF Team Support Section */}
        <section className="space-y-4 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-xl font-semibold text-wsf-brown">Dedicated Support</h3>
          <p>
            All our services are fully supported by our local WSF team. Our team have years of experience 
            in both farming and the feed sector and are trained to help support our clients throughout the season.
          </p>
          <p>
            WSF also use an independent consultant nutritionist who can be made available to our clients throughout the year.
          </p>
        </section>

        {/* Specs Download Section */}
        <section className="bg-wsf-blue bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <h3 className="text-xl font-semibold text-wsf-blue mb-2">
              Download Feed Trailer Specifications
            </h3>
            <p className="text-gray-700 mb-2">
              Get detailed information about our Feed Trailers.
            </p>
          </div>
          <Button 
            variant="default" 
            className="bg-wsf-blue hover:bg-wsf-blue-dark w-full sm:w-auto"
            onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/XL+Multi+Feed+Trailer+(updated).pdf', '_blank')}
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
