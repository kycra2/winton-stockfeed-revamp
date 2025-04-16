
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MolassesHero from '@/components/molasses/MolassesHero';
import MolassesInfo from '@/components/molasses/MolassesInfo';
import WhyMolasses from '@/components/molasses/WhyMolasses';
import MolassesLocations from '@/components/molasses/MolassesLocations';
import MolassesDepots from '@/components/molasses/MolassesDepots';
import ExpertInsight from '@/components/molasses/ExpertInsight';

const Molasses = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <MolassesHero />
        <MolassesInfo />
        <WhyMolasses />
        <ExpertInsight />
        <MolassesLocations />
        <MolassesDepots />
      </main>
      <Footer />
    </div>
  );
};

export default Molasses;
