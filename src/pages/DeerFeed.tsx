
import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { FileDown } from 'lucide-react';

const DeerFeed = () => {
  return (
    <ProductLayout title="Supreme Deer Nuts">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
         <section className="space-y-4">
  <p>
    Our Supreme Deer Nuts provide an ideal way to supplement feed without the wastage of grains and to ensure the correct
    balance of vitamins and minerals. They can be kept up to 4 months without deterioration.
  </p>
  <p>
    Available in 25kg bags, bulk bags and bulk delivery.
  </p>
</section>


          <section>
            <h2 className="text-xl font-semibold mb-4">Typical Analysis</h2>
            <ul className="space-y-2 text-gray-700">
              <li>Energy: 12.5% MJME/kg DM</li>
              <li>Crude Protein: 13.0% Minimum</li>
              <li>Fibre: 6.9% Maximum</li>
              <li>Fat: 5% Maximum</li>
              <li>Salt: 1.0% Maximum</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-semibold mb-4">Ingredients Selected From</h2>
            <p className="text-gray-700">
              Barley, Wheat, Soybean Meal, Molasses, Di-Calcium Phosphate, Lime, Salt, 
              Sodium Bentonite and a vitamin and mineral premix.
            </p>
          </section>
        </div>

        <div>
          <img 
            src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/deer-feed-new-zealand-farm+(1)+(1).png"
            alt="New Zealand deer farm"
            className="rounded-lg shadow-md w-full h-auto mb-6"
          />
        </div>
      </div>

      <section className="mt-8 space-y-6">
        <h2 className="text-xl font-semibold">Feeding Recommendations</h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 space-y-3">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li>Introduce feed slowly to avoid risks of digestive upset.</li>
            <li>Build up to required feed intake level over 1-2 weeks eg start at 250g per day and increase 500-750g per day.</li>
            <li>Intake may increase to 1-2kg per day for mature stock when pasture availability is poor.</li>
            <li>Ensure sufficient fibre intake by providing access to hay.</li>
            <li>Ensure fresh water is available at all times.</li>
          </ul>
        </div>
      </section>

      <div className="mt-8">
        <a 
          href="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Supreme+Deer+Nuts.pdf"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="default" className="gap-2">
            <FileDown className="h-4 w-4" />
            Download Supreme Deer Nuts PDF
          </Button>
        </a>
      </div>

      <Card className="mt-12 p-6 bg-gray-50">
        <div className="space-y-4">
          <p className="text-gray-700">All our grain is sourced locally from local growers.</p>
          <div className="border-t pt-4">
            <h3 className="font-semibold mb-2">Pricing Terms & Conditions</h3>
            <p className="text-gray-700">All prices are Ex Store, Exclusive of GST, and subject to change, call us for the latest prices.</p>
          </div>
        </div>
      </Card>
    </ProductLayout>
  );
};

export default DeerFeed;
