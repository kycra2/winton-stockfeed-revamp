
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { FileText } from 'lucide-react';

const FeedQualityDeclarations = () => {
  return (
    <ProductLayout title="Feed Quality Declarations">
      <div className="space-y-8">
        <p className="text-lg leading-relaxed">
          Access our feed quality declarations and compliance documents. These documents provide 
          detailed information about the nutritional content, quality standards, and compliance
          certifications for our feed products.
        </p>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-wsf-blue-dark mb-4">Molasses Feed Declaration 23/24</h2>
            <p className="mb-4 text-gray-700">
              Feed declaration for Molasses products for the 2023-2024 season with detailed nutritional 
              information and quality specifications.
            </p>
            <Button 
              className="bg-wsf-blue hover:bg-wsf-blue-dark text-white"
              asChild
            >
              <a href="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/MOL_Feed_Declaration_23-24_season.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Molasses Feed Declaration 23/24
              </a>
            </Button>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-wsf-blue-dark mb-4">Molasses Feed Declaration 24/25</h2>
            <p className="mb-4 text-gray-700">
              Feed declaration for Molasses products for the 2024-2025 season with detailed nutritional 
              information and quality specifications.
            </p>
            <Button 
              className="bg-wsf-blue hover:bg-wsf-blue-dark text-white"
              asChild
            >
              <a href="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Molasses_Signed_Feed_Declaration_24-25.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Molasses Feed Declaration 24/25
              </a>
            </Button>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-wsf-blue-dark mb-4">Dry Feed Declaration 23/24</h2>
            <p className="mb-4 text-gray-700">
              Feed declaration for dry feed products with detailed nutritional 
              information and quality specifications.
            </p>
            <Button 
              className="bg-wsf-blue hover:bg-wsf-blue-dark text-white"
              asChild
            >
              <a href="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Dry_Feeds_Sign_Declaration_01-06-2023.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Dry Feed Declaration
              </a>
            </Button>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-wsf-blue-dark mb-4">Dry Feed Declaration 24/25</h2>
            <p className="mb-4 text-gray-700">
              Feed declaration for dry feed products for the 2024-2025 season with detailed nutritional 
              information and quality specifications.
            </p>
            <Button 
              className="bg-wsf-blue hover:bg-wsf-blue-dark text-white"
              asChild
            >
              <a href="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Dry_Feeds_Signed_Feed_Declaration_24-25.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Dry Feed Declaration 24/25
              </a>
            </Button>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-wsf-blue-dark mb-4">Stock Feed Declaration 23/24</h2>
            <p className="mb-4 text-gray-700">
              Feed declaration for stock feed products for the 2023-2024 season with detailed nutritional 
              information and quality specifications.
            </p>
            <Button 
              className="bg-wsf-blue hover:bg-wsf-blue-dark text-white"
              asChild
            >
              <a href="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Dry_Feeds_Sign_Declaration_01-06-2023+(1).pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Stock Feed Pellets Declaration 23/24
              </a>
            </Button>
          </div>

          <div className="border border-gray-200 rounded-lg p-6 shadow-sm bg-white">
            <h2 className="text-xl font-semibold text-wsf-blue-dark mb-4">Stock Feed Declaration 24/25</h2>
            <p className="mb-4 text-gray-700">
              Feed declaration for stock feed products for the 2024-2025 season with detailed nutritional 
              information and quality specifications.
            </p>
            <Button 
              className="bg-wsf-blue hover:bg-wsf-blue-dark text-white"
              asChild
            >
              <a href="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Dry_Feeds_Signed_Feed_Declaration_24-25+(1).pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Stock Feed Pellets Declaration 24/25
              </a>
            </Button>
          </div>
        </div>
      </div>
    </ProductLayout>
  );
};

export default FeedQualityDeclarations;
