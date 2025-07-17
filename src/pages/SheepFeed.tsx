
import React from 'react';
import { Link } from 'react-router-dom';
import ProductLayout from '@/components/ProductLayout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package2, ArrowRight } from 'lucide-react';

const sheepProducts = [
  {
    name: 'Sheep Nuts',
    description: 'Formulated from grains and wheat products to give an economic feed that will keep your stock in optimum condition in times of poor feed availability.',
    path: '/products/sheep-nuts',
    features: ['Energy: 12.5% MJME/kg DM', 'Crude Protein: 11.0% Minimum', 'Available in 25kg bags, bulk bags and bulk delivery']
  }
];

const categories = [
  { name: 'Dairy Feed', path: '/products/dairy-feed' },
  { name: 'Calf Feed', path: '/products/calf-feed' },
  { name: 'Sheep Feed', path: '/products/sheep-feed' },
  { name: 'Deer Feed', path: '/products/deer-feed' }
];

const SheepFeedPage = () => {
  return (
    <ProductLayout title="Sheep Feed">
      {/* Category Navigation */}
      <div className="mb-8">
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Link key={category.name} to={category.path}>
              <Button 
                variant={category.path === '/products/sheep-feed' ? 'default' : 'outline'}
                className="mb-2"
              >
                {category.name}
              </Button>
            </Link>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sheepProducts.map((product) => (
          <Card key={product.name} className="h-full flex flex-col hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-xl text-wsf-brown">{product.name}</CardTitle>
              <CardDescription className="text-gray-600">
                {product.description}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col justify-between">
              <div className="space-y-2 mb-4">
                {product.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                    <Package2 className="h-4 w-4 text-wsf-blue" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              <Link to={product.path}>
                <Button className="w-full group">
                  View Details
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Back to Products */}
      <div className="mt-8 text-center">
        <Link to="/products">
          <Button variant="outline">
            ← Back to All Products
          </Button>
        </Link>
      </div>
    </ProductLayout>
  );
};

export default SheepFeedPage;
