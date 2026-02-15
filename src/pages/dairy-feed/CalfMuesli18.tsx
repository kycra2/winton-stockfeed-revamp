
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';
import SEOHead, { generateProductSchema } from '@/components/SEOHead';

const categories = [
  { title: "Dairy", href: "/products/dairy-feed", active: false },
  { title: "Calf", href: "/products/calf-feed", active: true },
  { title: "Sheep", href: "/products/sheep-feed", active: false },
  { title: "Deer", href: "/products/deer-feed", active: false },
  { title: "Goat", href: "/products/goat-feed", active: false },
  { title: "Chicken", href: "/products/chicken-feed", active: false },
  { title: "Molasses", href: "/molasses", active: false }
];

const CalfMuesli18Page: React.FC = () => {
  return (
    <ProductLayout title="Calf Muesli 18%">
      <SEOHead
        title="Calf Muesli 18% - Textured Calf Feed | Winton Stock Feed"
        description="Calf Muesli 18% protein textured feed for young calves. Palatable and nutritious calf starter from Winton Stock Feed NZ."
        keywords="calf muesli, 18% protein, textured feed, calf starter, calf feed, Winton Stock Feed"
        canonicalUrl="https://www.wintonstockfeed.co.nz/dairy-feed/calf-muesli-18"
        schema={generateProductSchema({ name: "Calf Muesli 18%", description: "18% protein textured muesli feed for young calves.", category: "Calf Feed" })}
      />
      <div className="space-y-8">
        {/* Category Navigation Menu */}
        <div className="flex flex-wrap justify-center items-center gap-1 text-lg font-semibold text-muted-foreground mb-12">
          <Link 
            to="/products"
            className="px-4 py-2 transition-colors hover:text-primary"
          >
            ALL
          </Link>
          <span className="text-muted-foreground/50">|</span>
          {categories.map((category, index) => (
            <div key={category.title} className="flex items-center">
              <Link
                to={category.href}
                className={`px-4 py-2 transition-colors ${
                  category.active 
                    ? "text-primary font-bold" 
                    : "hover:text-primary"
                }`}
              >
                {category.title.toUpperCase()}
              </Link>
              {index < categories.length - 1 && (
                <span className="text-muted-foreground/50">|</span>
              )}
            </div>
          ))}
        </div>
        {/* Intro Section */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">Premium Textured Calf Feed</h2>
            <p className="text-lg">
              Our Calf Muesli 18% is a premium textured feed specially designed for optimal nutrition and 
              early feed intake in young calves.
            </p>
            <p>
              This palatable muesli-style feed contains 18% protein with a carefully balanced blend of grains, 
              protein meals, and essential nutrients to promote healthy development.
            </p>
            <p>
              The textured format encourages early feed consumption and helps transition calves from liquid 
              to solid feed while supporting rumen development for long-term health and productivity.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/southland-stock-feed-calves.png" 
                alt="Calf Muesli 18% Feed" 
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
                <h3 className="font-semibold">Textured Formula</h3>
                <p>
                  Muesli-style texture encourages earlier feed intake and smoother weaning transition.
                </p>
                <h3 className="font-semibold">Superior Palatability</h3>
                <p>
                  Highly palatable mix that calves readily consume, supporting consistent growth.
                </p>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold">Balanced Nutrition</h3>
                <p>
                  18% protein with optimal energy levels for growth and early rumen development.
                </p>
                <h3 className="font-semibold">Added Coccidiostat</h3>
                <p>
                  Contains coccidiosis prevention for added health protection during vulnerable stages.
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
                <p>18% minimum</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Energy</h3>
                <p>12.5 MJ ME/kg DM</p>
              </div>
              <div>
                <h3 className="text-wsf-blue font-medium">Fibre</h3>
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
                <h3 className="text-wsf-blue font-medium">Vitamins & Minerals</h3>
                <p>Complete profile</p>
              </div>
            </div>
          </div>
        </section>

        {/* Feed Components */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Key Ingredients</h2>
          <p>
            Our Calf Muesli contains a premium blend of:
          </p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Kibbled grains for digestibility</li>
            <li>Quality protein meals</li>
            <li>Molasses for palatability</li>
            <li>Essential vitamin and mineral premix</li>
            <li>Carefully selected fibre sources</li>
          </ul>
        </section>

        {/* Feeding Recommendations */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Feeding Guidelines</h2>
          <p>
            Introduce gradually from day 4, offering small amounts. As calves grow, increase feeding rate to 
            1-2kg per head per day. Ensure clean, fresh water is always available.
          </p>
          <p>
            This premium textured feed is ideal for early introduction to solid feed and for promoting 
            smooth weaning transitions. For detailed feeding plans, please consult our nutrition specialists.
          </p>
        </section>

        {/* Available In Section */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-brown">Available In</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>25kg bags</li>
            
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

export default CalfMuesli18Page;
