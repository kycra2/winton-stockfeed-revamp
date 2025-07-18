import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductLayout from '@/components/ProductLayout';
import { Beef, Rabbit, TreePine, Droplets, Mountain, Egg } from 'lucide-react';

const categories = [
  {
    title: "Dairy",
    description: "Premium feed solutions for dairy cattle including PKE, crushed grain, and specialised pellets",
    icon: Beef,
    href: "/products/dairy-feed",
    color: "bg-primary/10 hover:bg-primary/20"
  },
  {
    title: "Molasses",
    description: "Premium molasses products for enhanced palatability and nutrition",
    icon: Droplets,
    href: "/molasses",
    color: "bg-accent/10 hover:bg-accent/20"
  },
  {
    title: "Calf", 
    description: "Specialised nutrition for growing calves with premium calf blends and growers",
    icon: Mountain,
    href: "/products/calf-feed",
    color: "bg-secondary/10 hover:bg-secondary/20"
  },
  {
    title: "Sheep",
    description: "Nutritious feed formulations designed specifically for sheep farming", 
    icon: Rabbit,
    href: "/products/sheep-feed",
    color: "bg-primary/10 hover:bg-primary/20"
  },
  {
    title: "Deer",
    description: "Specialised feed products for deer farming operations",
    icon: TreePine,
    href: "/products/deer-feed",
    color: "bg-muted/10 hover:bg-muted/20"
  },
  {
    title: "Goat",
    description: "High-quality feed solutions designed for goat nutrition and health",
    icon: Mountain,
    href: "/products/goat-feed",
    color: "bg-secondary/10 hover:bg-secondary/20"
  },
  {
    title: "Chicken",
    description: "Premium poultry feed for optimal chicken health and egg production",
    icon: Egg,
    href: "/products/chicken-feed",
    color: "bg-accent/10 hover:bg-accent/20"
  }
];

const Products: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <ProductLayout title="Our Products">
      <div className="space-y-8">
        {/* Category Navigation Menu */}
        <div className="flex flex-wrap justify-center items-center gap-1 text-lg font-semibold text-muted-foreground mb-12">
          <Link
            to="/products"
            className="px-4 py-2 transition-colors text-primary font-bold"
          >
            ALL
          </Link>
          <span className="text-muted-foreground/50">|</span>
          {categories.map((category, index) => (
            <div key={category.title} className="flex items-center">
              <Link
                to={category.href}
                className="px-4 py-2 transition-colors hover:text-primary"
              >
                {category.title.toUpperCase()}
              </Link>
              {index < categories.length - 1 && (
                <span className="text-muted-foreground/50">|</span>
              )}
            </div>
          ))}
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Link key={category.title} to={category.href}>
                <Card className={`h-full transition-all duration-200 hover:shadow-lg ${category.color} border-border/50`}>
                  <CardHeader className="text-center">
                    <div className="mx-auto w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <IconComponent className="w-6 h-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl text-foreground">{category.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-muted-foreground">
                      {category.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

      </div>
    </ProductLayout>
  );
};

export default Products;