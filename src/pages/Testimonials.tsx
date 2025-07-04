
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
                "We've been using Winton Stock Feed's molasses for our dairy operation for over 5 years now. The quality is consistently excellent and the delivery service is reliable. Our cows love it and we've seen a noticeable improvement in milk production since switching to their products."
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-semibold text-wsf-blue-dark">Sarah Thompson</p>
                <p className="text-gray-600">Thompson Dairy Farm, Canterbury</p>
                <p className="text-sm text-gray-500">Dairy Farmer - 450 cow operation</p>
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
                "The team at Winton Stock Feed really understands our needs. Their PKE quality is outstanding and their technical support has been invaluable in helping us optimize our feed programs. Great service, competitive pricing, and most importantly - results we can see in our herd."
              </blockquote>
              <div className="border-t pt-4">
                <p className="font-semibold text-wsf-blue-dark">Mike Johnson</p>
                <p className="text-gray-600">Riverside Farm, Southland</p>
                <p className="text-sm text-gray-500">Farm Manager - 600 cow dairy operation</p>
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
