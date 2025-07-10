
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MolassesHero from '@/components/molasses/MolassesHero';
import MolassesInfo from '@/components/molasses/MolassesInfo';
import WhyMolasses from '@/components/molasses/WhyMolasses';
import MolassesLocations from '@/components/molasses/MolassesLocations';
import MolassesDepots from '@/components/molasses/MolassesDepots';
import { Button } from '@/components/ui/button';
import { Download, ArrowRight } from 'lucide-react';

const Molasses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <MolassesHero />
        <MolassesInfo />
        <WhyMolasses />
        
        {/* Specs Download Section - Fixed for mobile */}
        <section className="py-8 bg-white">
          <div className="container-custom">
            <div className="bg-wsf-blue bg-opacity-10 p-6 rounded-lg shadow-md flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <h3 className="text-xl font-semibold text-wsf-blue mb-2">
                  Download Molasses Specifications
                </h3>
                <p className="text-gray-700 mb-2">
                  Get detailed information about our Molasses product.
                </p>
              </div>
              <Button 
                variant="default" 
                className="bg-wsf-blue hover:bg-wsf-blue-dark w-full sm:w-auto"
                onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Molasses.pdf', '_blank')}
              >
                <Download className="h-5 w-5 mr-2" />
                Download PDF
              </Button>
            </div>
          </div>
        </section>

        {/* Condose Link Section */}
        <section className="py-12 bg-wsf-cream">
          <div className="container-custom">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-wsf-blue-dark mb-6">
                Maximize Your Molasses Investment
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Take your molasses feeding to the next level with our fully automated Condose system. 
                Deliver precise mineral doses to every cow, every day with complete accuracy and reliability.
              </p>
              <Button 
                variant="default"
                className="bg-wsf-blue hover:bg-wsf-blue-dark text-lg px-8 py-3"
                onClick={() => window.location.href = '/condose'}
              >
                Discover Condose
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>
        
        <MolassesLocations />
        <MolassesDepots />
      </main>
      <Footer />
    </div>
  );
};

export default Molasses;
