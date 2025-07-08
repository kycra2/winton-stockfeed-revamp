
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';

const Testimonials = () => {
  return (
    <ProductLayout title="Customer Testimonials">
      <div className="space-y-12">
        {/* Introduction */}
        <div className="text-center">
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it - hear what our customers have to say about their experience with Winton Stock Feed.
          </p>
        </div>

        {/* Written Testimonials */}
        <div className="grid md:grid-cols-2 gap-8">
          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "Since introducing molasses to our goat herd, we've seen a remarkable improvement in animal health. Issues that used to take time and money to manage simply disappeared. Its now a daily part of our feeding routine- simple, effective and great for rumen health. Highly recommend"
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-semibold text-wsf-blue-dark">Nourish South</p>
                <p className="text-gray-600">Goat Milk Farm Dunedin</p>
              </div>
            </CardContent>
          </Card>

          <Card className="shadow-lg">
            <CardContent className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <blockquote className="text-gray-700 mb-4 italic">
                "Winton Stock Feeds are more than just a feed company. They are a vital part of the success of our business by providing a quality product, on-time and with excellent service. We look forward to enjoying a long-lasting and prosperous relationship."
              </blockquote>
              <div className="border-t pt-4 flex items-center gap-4">
                <img 
                  src="/lovable-uploads/89c11db7-36cb-4c2b-b1ec-350302978f41.png" 
                  alt="Ramsay Dairies Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <p className="font-semibold text-wsf-blue-dark">Gregor & Lynne Ramsay</p>
                  <p className="text-gray-600">Ramsay Dairies</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Video Testimonial Section */}
        <div className="space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-wsf-blue-dark mb-4">
              Video Testimonial
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Watch one of our valued customers share their experience with Winton Stock Feed.
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-4xl">
              <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
                <iframe 
                  width="100%" 
                  height="100%" 
                  src="https://www.youtube.com/embed/pKOtrZCR44Y?si=kfv_dfpcvJUbU6jB" 
                  title="Customer Testimonial - Winton Stock Feed" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  allowFullScreen
                  className="absolute inset-0"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center bg-gray-50 p-8 rounded-lg">
          <h3 className="text-xl font-semibold text-wsf-blue-dark mb-2">
            Ready to Experience the Difference?
          </h3>
          <p className="text-gray-600 mb-4">
            Join hundreds of satisfied customers across New Zealand who trust Winton Stock Feed.
          </p>
          <a 
            href="/contact-us" 
            className="inline-block bg-wsf-blue text-white px-6 py-3 rounded hover:bg-wsf-blue-dark transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>
    </ProductLayout>
  );
};

export default Testimonials;
