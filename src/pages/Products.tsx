import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ProductLayout from '@/components/ProductLayout';
import { Beef, Rabbit, TreePine, Truck, Droplets } from 'lucide-react';

const categories = [
  {
    title: "Dairy Feed",
    description: "Premium feed solutions for dairy cattle including PKE, crushed grain, and specialized pellets",
    icon: Beef,
    href: "/dairy-feed",
    color: "bg-primary/10 hover:bg-primary/20"
  },
  {
    title: "Sheep Feed", 
    description: "Nutritious feed formulations designed specifically for sheep farming",
    icon: Rabbit,
    href: "/sheep-feed",
    color: "bg-secondary/10 hover:bg-secondary/20"
  },
  {
    title: "Deer Feed",
    description: "Specialized feed products for deer farming operations", 
    icon: TreePine,
    href: "/deer-feed",
    color: "bg-accent/10 hover:bg-accent/20"
  },
  {
    title: "Feed Trailers",
    description: "Professional feed delivery services with modern trailer systems",
    icon: Truck,
    href: "/feed-trailers", 
    color: "bg-muted/10 hover:bg-muted/20"
  },
  {
    title: "Molasses",
    description: "High-quality molasses products for livestock nutrition enhancement",
    icon: Droplets,
    href: "/molasses",
    color: "bg-primary/10 hover:bg-primary/20"
  }
];

const Products: React.FC = () => {
  return (
    <ProductLayout title="Our Products">
      <div className="space-y-8">
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

        {/* Product Categories Details */}
        <div className="space-y-12 mt-12">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="border-t border-border pt-8">
                <div className="flex items-center gap-3 mb-6">
                  <IconComponent className="w-8 h-8 text-primary" />
                  <h2 className="text-2xl font-bold text-foreground">{category.title}</h2>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                  {category.description}
                </p>
                <Link 
                  to={category.href}
                  className="inline-flex items-center gap-2 text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  Explore {category.title} →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </ProductLayout>
  );
};

export default Products;