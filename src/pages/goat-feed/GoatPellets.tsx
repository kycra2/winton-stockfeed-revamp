import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProductLayout from '@/components/ProductLayout';
import { Mountain, FileText } from 'lucide-react';

const categories = [
  { title: "Dairy", href: "/products/dairy-feed", active: false },
  { title: "Calf", href: "/products/calf-feed", active: false },
  { title: "Sheep", href: "/products/sheep-feed", active: false },
  { title: "Deer", href: "/products/deer-feed", active: false },
  { title: "Goat", href: "/products/goat-feed", active: true },
  { title: "Chicken", href: "/products/chicken-feed", active: false },
  { title: "Molasses", href: "/molasses", active: false }
];

const GoatPellets: React.FC = () => {
  return (
    <ProductLayout title="Goat Pellets">
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

        <div className="space-y-8">
        <Card className="shadow-lg">
          <CardHeader className="bg-primary/5">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Mountain className="w-6 h-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl text-foreground">Goat Pellets</CardTitle>
                <CardDescription className="text-base">Goat Pellets</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="p-8 space-y-6">
            {/* Product Description */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Product Description</h3>
              <p className="text-muted-foreground leading-relaxed">
                WSF Goat Pellets are a type of livestock feed, typically formulated as a nutritious, balanced diet for goats of 
                all ages. They are designed to provide essential nutrients like protein, energy, vitamins, and minerals. These 
                pellets are generally made from a blend of grains, by-products, and added vitamins and minerals, and are 
                often used as a supplement to hay or pasture grazing.
              </p>
            </div>

            {/* Ingredients */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Ingredients Selected From</h3>
              <p className="text-muted-foreground leading-relaxed">
                Barley, Wheat, Wheat by-products, Oilseed meals and by-products, Palm Kernel, Molasses, Minerals 
                (including Lime, Dicalcium Phosphate, Magnesium, Salt), Vitamins and Trace Minerals, Flavouring.
              </p>
            </div>

            {/* Feeding Recommendations */}
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-3">Feeding Recommendations</h3>
              <div className="space-y-3 text-muted-foreground">
                <p>Feed at up to 250 grams per day. Transition onto Goat Pellets by starting at 50 grams per day and working 
                up to 250 grams over 10-14 days. Ensure equal access to all animals to reduce risk of gorging.</p>
                <p>WSF Goat Pellets should be fed alongside an adequate amount of forage. Ensure drinking water is available.</p>
                <p className="font-medium">STORE IN A COOL DRY PLACE.</p>
                <p className="text-sm italic">SUITABLE AS A FEED FOR GOATS</p>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-muted/30 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-foreground mb-3">To Order</h3>
              <div className="space-y-2 text-muted-foreground">
                
                <p><span className="font-medium">Winton Office:</span> 03 236 6089</p>
              </div>
            </div>

            {/* PDF Download */}
            <div className="flex justify-center pt-4">
              <Button 
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
                asChild
              >
                <a 
                  href="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Goat+Pellets.pdf" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <FileText className="w-5 h-5" />
                  Download Goat Pellets Product Sheet
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
        </div>
      </div>
    </ProductLayout>
  );
};

export default GoatPellets;