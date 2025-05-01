
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Phone, Download } from 'lucide-react';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Link } from 'react-router-dom';

const PrecalverPelletsPage: React.FC = () => {
  return (
    <ProductLayout title="Precalver Pellets">
      <div className="space-y-10 mb-12">
        {/* Intro Section with Image */}
        <section className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">Prepare Your Herd for a Healthy Start</h2>
            <p className="text-base leading-relaxed">
              Our Pre-Calver Pellets are specially formulated to support dairy cows during the critical 
              transition period before calving. Packed with magnesium, trace minerals, and balanced energy, 
              they help reduce the risk of metabolic issues, improve colostrum quality, and set your herd 
              up for a smooth calving season.
            </p>
            <p className="text-base leading-relaxed">
              Trusted by Kiwi farmers, these pellets are designed to work alongside New Zealand's 
              pasture-based systems — giving your cows the nutrition they need when it matters most.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-md">
            <AspectRatio ratio={16/9} className="bg-muted">
              <img 
                src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/WSF-12.jpg" 
                alt="Precalver Pellets" 
                className="w-full h-full object-cover"
              />
            </AspectRatio>
          </div>
        </section>

      
      </div>
    </ProductLayout>
  );
};

export default PrecalverPelletsPage;
