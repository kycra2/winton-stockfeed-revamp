import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import ProductLayout from '@/components/ProductLayout';
import { Mountain, FileText } from 'lucide-react';
import SEOHead, { generateBreadcrumbSchema, generateProductSchema } from '@/components/SEOHead';

const goatProducts = [
  {
    title: "Goat Pellets",
    description: "Premium nutritious pellets designed for goats of all ages, providing essential nutrients like protein, energy, vitamins, and minerals",
    icon: Mountain,
    href: "/goat-feed/goat-pellets",
    color: "bg-primary/10 hover:bg-primary/20"
  }
];

const categories = [
  { title: "Dairy", href: "/products/dairy-feed", active: false },
  { title: "Calf", href: "/products/calf-feed", active: false },
  { title: "Sheep", href: "/products/sheep-feed", active: false },
  { title: "Deer", href: "/products/deer-feed", active: false },
  { title: "Goat", href: "/products/goat-feed", active: true },
  { title: "Chicken", href: "/products/chicken-feed", active: false },
  { title: "Molasses", href: "/molasses", active: false }
];

const goatFeedSchema = {
  "@context": "https://schema.org",
  "@graph": [
    generateProductSchema({
      name: "Goat Pellets",
      description: "Premium nutritious pellets designed for goats of all ages, providing essential nutrients like protein, energy, vitamins, and minerals.",
      category: "Goat Feed"
    }),
    generateBreadcrumbSchema([
      { name: "Home", url: "https://www.wintonstockfeed.co.nz" },
      { name: "Products", url: "https://www.wintonstockfeed.co.nz/products" },
      { name: "Goat Feed", url: "https://www.wintonstockfeed.co.nz/products/goat-feed" }
    ])
  ]
};

const GoatFeed: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("GOAT");

  return (
    <ProductLayout title="Goat Feed">
      <SEOHead
        title="Goat Feed NZ - Goat Pellets & Nutrition | Winton Stock Feed"
        description="Premium goat feed products for New Zealand farmers. Quality Goat Pellets providing essential protein, energy, vitamins and minerals for goats of all ages. Winton Stock Feed."
        keywords="goat feed NZ, goat pellets, goat nutrition, Winton Stock Feed goat feed, New Zealand goat farming"
        canonicalUrl="https://www.wintonstockfeed.co.nz/products/goat-feed"
        schema={goatFeedSchema}
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
          {goatProducts.map((product) => {
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
            <h2 className="text-3xl font-bold text-foreground mb-4">Premium Goat Feed Solutions</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Winton Stock Feed provides high-quality goat feed products designed to meet the nutritional needs of goats 
              at all life stages. Our carefully formulated feeds ensure optimal health, growth, and productivity for your herd.
            </p>
          </div>
        </div>

      </div>
    </ProductLayout>
  );
};

export default GoatFeed;