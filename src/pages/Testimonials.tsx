
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import SEOHead from '@/components/SEOHead';

const testimonialSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "name": "Customer Testimonials - Winton Stock Feed",
  "description": "Read what New Zealand farmers say about Winton Stock Feed products and service",
  "review": [
    {
      "@type": "Review",
      "author": { "@type": "Organization", "name": "Nourish South" },
      "reviewBody": "Since introducing molasses to our goat herd, we've seen a remarkable improvement in animal health.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    },
    {
      "@type": "Review", 
      "author": { "@type": "Person", "name": "Gregor & Lynne Ramsay" },
      "reviewBody": "Winton Stock Feeds are more than just a feed company. They are a vital part of the success of our business.",
      "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" }
    }
  ]
};

const Testimonials = () => {
  return (
    <ProductLayout title="Customer Testimonials">
      <SEOHead
        title="Customer Testimonials - Winton Stock Feed | NZ Farmer Reviews"
        description="Read what New Zealand farmers say about Winton Stock Feed. Testimonials from dairy farmers, goat farmers and more about our molasses, PKE and stock feed products and service."
        keywords="Winton Stock Feed reviews, stock feed testimonials, NZ farmer reviews, molasses reviews, PKE reviews"
        canonicalUrl="https://wintonstockfeed.co.nz/testimonials"
        schema={testimonialSchema}
      />
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

        {/* Sam O'Brien Testimonial */}
        <Card className="shadow-lg max-w-4xl mx-auto">
          <CardContent className="p-8">
            <div className="flex mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <blockquote className="text-gray-700 mb-6 italic text-lg leading-relaxed">
              "We contract milk 700 cows at Scots Gap and have been using Winton Stock Feed for a number of years. Over the last two years especially, they've been fantastic to work with. Their knowledge around feeding cows, boosting production, and managing pasture is top-notch and aligns really well with our system. We've also recently started working with an independent nutritionist through Winton Stock Feed, and heading into next season, we're focused on hitting those 1% gains to maximise our production as much as possible."
            </blockquote>
            <div className="border-t pt-6">
              <p className="font-semibold text-wsf-blue-dark text-lg">Sam O'Brien</p>
              <p className="text-gray-600">Bush View Dairies Ltd</p>
            </div>
          </CardContent>
        </Card>

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
