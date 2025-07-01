import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Package2, AlertCircle, FileDown } from 'lucide-react';

const SheepFeedPage = () => {
  return (
    <ProductLayout title="Sheep Feed">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-brown">Premium Sheep Nuts</h2>
            <p className="text-gray-700">
              Sheep Nuts are formulated from grains and wheat products to give an economic feed 
              that will keep your stock in optimum condition in times of poor feed availability.
            </p>
            <p className="text-gray-700">
              They provide an ideal way to supplement feed without the wastage of grains and to 
              ensure the correct balance of vitamins and minerals. They can be used as an emergency 
              feed supply and will last up to 4 months without deterioration when stored under cool, 
              dry conditions.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Typical Analysis</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Energy: 12.5% MJME/kg DM</li>
              <li>Crude Protein: 11.0% Minimum</li>
              <li>Fibre: 7% Maximum</li>
              <li>Fat: 5% Maximum</li>
              <li>Salt: 1.5% Maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Ingredients Selected From</h2>
            <p className="text-gray-700">
              Barley, Wheat, Molasses, Lime, Salt and a specialised vitamin and mineral mix.
            </p>
          </section>
        </div>

        <div>
          <img 
            src="/lovable-uploads/cf8ae7a3-7c36-4b92-abfa-4c854710d102.png"
            alt="New Zealand sheep farm"
            className="rounded-lg shadow-md w-full h-auto mb-6"
          />
        </div>
      </div>

      <section className="mt-8 space-y-6">
        <h2 className="text-xl font-semibold">Premium Sheep Nuts: Optimal Nutrition</h2>
        <p className="text-gray-700">
          Our Sheep Nuts are meticulously formulated to provide a balanced and economic feed solution 
          for your livestock. Designed to supplement feed during periods of poor availability, these 
          nuts ensure your sheep maintain optimal condition and health.
        </p>
        <p className="text-gray-700">
          The carefully selected blend of grains, wheat products, and specialized mineral mix 
          guarantees essential nutrients while minimizing feed wastage.
        </p>
      </section>

      <section className="mt-8 space-y-6">
        <h2 className="text-xl font-semibold">Feeding Recommendations</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Feed 60 to 120 grams per day (One 40kg bag per 400 sheep) depending on other feed available.</li>
            <li>Start slowly, say 30 to 60 grams for the first week.</li>
            <li>Train ewes to nut feeding well before lambing.</li>
            <li>Ensure equal access to each sheep.</li>
          </ul>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Sheep+Nuts.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="default" className="gap-2">
            <FileDown className="h-4 w-4" />
            Download Sheep Nuts PDF
          </Button>
        </a>
      </div>

      <section className="mt-8">
        <Card className="p-6 bg-gray-50">
          <div className="flex items-center gap-4 text-gray-700">
            <Package2 className="h-6 w-6" />
            <p>Available in 25kg bags, bulk bags and bulk delivery.</p> 
            <p> All prices are Ex Store, Exclusive of GST, and subject to change, call us for the latest prices.</p>
          </div>
          
        </Card>
      </section>

      <Card className="mt-12 p-6 bg-wsf-blue text-white">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <AlertCircle className="h-5 w-5" />
            <p>Storage Recommendation</p>
          </div>
          <p>Store in cool, dry conditions for optimal preservation up to 4 months.</p>
        </div>
      </Card>
    </ProductLayout>
  );
};

export default SheepFeedPage;
