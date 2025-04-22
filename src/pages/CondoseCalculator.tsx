
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CondoseCalculator from "@/components/CondoseCalculator";

const CondoseCalculatorPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1 pt-24 md:pt-28">
        <div className="container-custom py-12 md:py-20">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-wsf-blue-dark">Conedose Recipe Calculator</h1>
            <p className="mt-4 text-gray-700">
              Use this calculator to determine the correct mix ratios for your Conedose system.
              Enter your ingredients and the calculator will show you the proper proportions and
              alert you to any potential issues with your mix.
            </p>
          </div>
          
          <CondoseCalculator />
          
          <div className="mt-10 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-3 text-wsf-blue-dark">Important Notes</h2>
            <ul className="list-disc ml-5 space-y-2">
              <li>The mineral ratio cannot exceed 1 part non-soluble minerals to 6 parts Molasses.</li>
              <li>For every 25KG bag of Magnesium Oxide or Lime Flour, your mix should contain 150KGs of Molasses.</li>
              <li>Water inclusion should be approximately 10% of your Molasses amount.</li>
              <li>The calculator will warn you if your total mix exceeds the capacity of your selected cone size.</li>
            </ul>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CondoseCalculatorPage;
