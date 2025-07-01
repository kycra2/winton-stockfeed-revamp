
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MolassesHero from '@/components/molasses/MolassesHero';
import MolassesInfo from '@/components/molasses/MolassesInfo';
import WhyMolasses from '@/components/molasses/WhyMolasses';
import MolassesLocations from '@/components/molasses/MolassesLocations';
import MolassesDepots from '@/components/molasses/MolassesDepots';
import ExpertInsight from '@/components/molasses/ExpertInsight';
import { Button } from '@/components/ui/button';
import { FileDown } from 'lucide-react';

const Molasses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <MolassesHero />
        <MolassesInfo />
        <WhyMolasses />
        <ExpertInsight />
        
        {/* PDF Download Section */}
        <section className="py-8 bg-white">
          <div className="container-custom">
            <div className="text-center">
              <a 
                href="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Molasses.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button variant="default" className="gap-2">
                  <FileDown className="h-4 w-4" />
                  Download Molasses PDF
                </Button>
              </a>
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
