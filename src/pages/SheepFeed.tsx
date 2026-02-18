
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductLayout from '@/components/ProductLayout';
import { Package2 } from 'lucide-react';
import SEOHead, { generateBreadcrumbSchema, generateProductSchema } from '@/components/SEOHead';

const sheepProducts = [
  {
    title: "Sheep Nuts",
    description: "Formulated from grains and wheat products to give an economic feed that will keep your stock in optimum condition in times of poor feed availability.",
    icon: Package2,
    href: "/products/sheep-nuts",
    color: "bg-primary/10 hover:bg-primary/20"
  }
];

const categories = [
  { title: "Dairy", href: "/products/dairy-feed", active: false },
  { title: "Calf", href: "/products/calf-feed", active: false },
  { title: "Sheep", href: "/products/sheep-feed", active: true },
  { title: "Deer", href: "/products/deer-feed", active: false },
  { title: "Goat", href: "/products/goat-feed", active: false },
  { title: "Chicken", href: "/products/chicken-feed", active: false },
  { title: "Molasses", href: "/molasses", active: false }
];

const sheepFeedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProductSchema({
      name: "Sheep Nuts",
      description: "Formulated from grains and wheat products to give an economic feed that will keep your stock in optimum condition in times of poor feed availability.",
      category: "Sheep Feed"
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://www.wintonstockfeed.co.nz" },
      { name: "Products", url: "https://www.wintonstockfeed.co.nz/products" },
      { name: "Sheep Feed", url: "https://www.wintonstockfeed.co.nz/products/sheep-feed" }
    ])
  ]
};

const SheepFeedPage: React.FC = () => {
  console.log("SheepFeedPage component is rendering");
  const [selectedCategory, setSelectedCategory] = useState("SHEEP");

  return (
    <ProductLayout title="Sheep Feed">
      <SEOHead
        title="Sheep Feed NZ - Sheep Nuts & Pellets | Winton Stock Feed"
        description="Premium sheep feed products for New Zealand farmers. Sheep Nuts formulated from quality grains and wheat products. Economic feed to maintain stock in optimum condition. Winton Stock Feed."
        keywords="sheep feed NZ, sheep nuts, sheep pellets, sheep nutrition, Winton Stock Feed sheep feed, Southland sheep feed"
        canonicalUrl="https://www.wintonstockfeed.co.nz/products/sheep-feed"
        schema={sheepFeedSchema}
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

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sheepProducts.map((product) => {
            const IconComponent = product.icon;
            return (
              <Link key={product.title} to={product.href}>
                <Card className={`h-full transition-all duration-200 hover:shadow-lg ${product.color} border-border/50`}>
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{product.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      {product.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Product Information */}
        <div className="mt-12 space-y-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Premium Sheep Feed Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Winton Stock Feed provides high-quality sheep feed products designed to maintain your flock in optimal condition 
              during challenging periods. Our nutritionally balanced feeds help ensure your sheep receive the essential nutrients 
              needed for health, growth, and productivity throughout the year.
            </p>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
};

export default SheepFeedPage;
