
import React from 'react';
import ProductLayout from '../components/ProductLayout';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Zap, DollarSign, Target, Settings, Shield, Calculator, Download } from 'lucide-react';

const Condose = () => {
  const benefits = [
    {
      icon: <Target className="w-8 h-8 text-wsf-blue" />,
      title: "Accurate",
      description: "Provides an accurate molasses and mineral dose, and can be used with minerals that have strict dosage thresholds such as Rumensin®."
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-wsf-blue" />,
      title: "Reliable",
      description: "Self cleaning automatic system with high reliability and greatest level of mineral dose certainty."
    },
    {
      icon: <DollarSign className="w-8 h-8 text-wsf-blue" />,
      title: "Economic",
      description: "Provides the lowest cost means of delivering essential soluble or insoluble minerals to your herd."
    },
    {
      icon: <Zap className="w-8 h-8 text-wsf-blue" />,
      title: "Effective",
      description: "Provides a reliable mineral dose to every cow, every day that improving herd health and productivity."
    },
    {
      icon: <Settings className="w-8 h-8 text-wsf-blue" />,
      title: "Flexible",
      description: "Delivers a wide range of macro and micro minerals and additives at any dosage rate."
    }
  ];

  const whyInvest = [
    {
      title: "Farm Performance",
      description: "A key tool enabling farmers to get minerals right in every cow, every day. Improved animal health, feed conversion efficiency and milk production."
    },
    {
      title: "Lowest Cost",
      description: "Use quality, low cost insoluble minerals versus expensive soluble sulphates and chlorides."
    },
    {
      title: "Zero Waste",  
      description: "Cows love molasses. Limeflour and magnesium are in the cows rather than blown around the paddock!"
    },
    {
      title: "Agile",
      description: "Change the mineral regime as quickly as the diet and pasture dictate."
    },
    {
      title: "Simple",
      description: "No need for multiple mineral systems on the farm."
    },
    {
      title: "Lease Available",
      description: "Available on a fully maintained operating lease providing cost certainty."
    },
    {
      title: "Facial Eczema",
      description: "The lowest cost and most reliable FE treatment system - period."
    }
  ];

  return (
    <ProductLayout title="Condose - Fully Automated Mineral Dispenser">
      {/* Hero Section */}
      <div className="mb-12">
        <div className="flex flex-col lg:flex-row items-center gap-8 mb-8">
          <div className="lg:w-1/3">
            <img 
              src="/lovable-uploads/3e09f268-ff8d-4b14-89b9-094199595f99.png" 
              alt="Conedose Logo" 
              className="max-w-full h-auto"
            />
          </div>
          <div className="lg:w-2/3">
            <h2 className="text-2xl font-bold text-wsf-blue-dark mb-4">
              Getting the correct amount of minerals into every cow every day is a real challenge.
            </h2>
            <p className="text-lg text-gray-700 mb-4">
              Failure to deliver minerals correctly has a huge cost in animal health and productivity.
            </p>
            <p className="text-lg text-gray-700">
              <strong>Conedose solves this problem</strong> by mixing any mineral at any dosage with molasses, 
              which is fed out to every cow every day, accurately, reliably and economically.
            </p>
          </div>
        </div>
        
        <div className="text-center bg-wsf-blue text-white p-6 rounded-lg mb-8">
          <h3 className="text-xl font-semibold mb-2">Accurate mineral doses reaching every cow, every day</h3>
          <p className="text-lg">accurately, reliably and economically.</p>
        </div>

        {/* Calculator Button Section */}
        <div className="text-center bg-wsf-cream p-6 rounded-lg mb-8">
          <h3 className="text-2xl font-bold text-wsf-blue-dark mb-4">Calculate Your Perfect Mix</h3>
          <p className="text-lg text-gray-700 mb-6">
            Use our Condose Recipe Calculator to determine the correct mix ratios for your system and ensure optimal mineral delivery.
          </p>
          <Button 
            variant="default"
            className="bg-wsf-blue hover:bg-wsf-blue-dark text-lg px-8 py-3"
            onClick={() => window.location.href = '/conedose-calculator'}
          >
            <Calculator className="h-5 w-5 mr-2" />
            Open Calculator
          </Button>
        </div>

        {/* PDF Download Section */}
        <div className="text-center bg-white border border-gray-200 p-6 rounded-lg">
          <h3 className="text-2xl font-bold text-wsf-blue-dark mb-4">Expert Insights on Mineral Nutrition</h3>
          <p className="text-lg text-gray-700 mb-6">
            Download Howard de Klerk's comprehensive guide on dairy cow mineral basics and learn how proper mineral supplementation can improve your herd's performance.
          </p>
          <Button 
            variant="outline"
            className="bg-white border-wsf-blue text-wsf-blue hover:bg-wsf-blue hover:text-white text-lg px-8 py-3"
            onClick={() => window.open('https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/con005hdeklerkdairycowmineralbasics+(1).pdf', '_blank')}
          >
            <Download className="h-5 w-5 mr-2" />
            Download Mineral Basics Guide
          </Button>
        </div>
      </div>

      {/* Benefits Grid */}
      <div className="mb-12">
        <h2 className="section-title text-center mb-8">Key Benefits</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <Card key={index} className="service-card">
              <CardContent className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-wsf-blue-dark mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-700">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* How It Works */}
      <div className="mb-12">
        <Card className="bg-wsf-cream">
          <CardContent className="p-8">
            <h2 className="section-title text-center mb-6">How does Conedose work?</h2>
            <div className="text-lg text-gray-700 space-y-4">
              <p>
                The Conedose system uses compressed air to mix soluble and insoluble minerals with molasses 
                which acts as a mineral suspension carrier and masks the sometimes bitter taste of minerals.
              </p>
              <p>
                The fully automated system manages the mixing process, delivery to each cow in-shed 
                and is self-cleaning after every milking.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Why Invest */}
      <div className="mb-12">
        <h2 className="section-title text-center mb-8">Why Invest in Conedose?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyInvest.map((item, index) => (
            <Card key={index} className="card-highlight">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-wsf-blue-dark mb-3">
                  {item.title}
                </h3>
                <p className="text-gray-700">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Testimonials */}
      <div className="mb-12">
        <h2 className="section-title text-center mb-8">What Our Customers Say</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <Card className="bg-white border-l-4 border-wsf-blue">
            <CardContent className="p-6">
              <p className="text-gray-700 italic mb-4">
                "Since using Conedose, we would not be without it. It is certainly here to stay. 
                It is a key tool for animal health on this property."
              </p>
              <div className="text-right">
                <p className="font-semibold text-wsf-blue-dark">Kevin Langley</p>
                <p className="text-sm text-gray-600">Share Farmer, Virbickas and Presow Farm, Edgecumbe</p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white border-l-4 border-wsf-blue">
            <CardContent className="p-6">
              <p className="text-gray-700 italic mb-4">
                "At Kintore Farm we have been using the Conedose system to get both micro and macro minerals 
                into the cows on our two dairy units. We have found it to be more reliable and accurate than 
                dusting and water dosing, proven through blood test results. It is also labour efficient and 
                more cost effective than mineral feed pellets. I would recommend Conedose to anyone who is 
                looking at reliably getting minerals to their high producing cows in a cost effective way."
              </p>
              <div className="text-right">
                <p className="font-semibold text-wsf-blue-dark">Nick Hoogeveen</p>
                <p className="text-sm text-gray-600">General Manager, Kintore Farm Ltd, Carew</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Contact CTA */}
      <div className="text-center">
        <Card className="bg-wsf-blue text-white">
          <CardContent className="p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to boost your productivity?</h3>
            <p className="text-lg mb-6">For more information on how Conedose can benefit your farm:</p>
            <div className="space-y-2 text-lg">
              <p><strong>Free Phone:</strong> 0800 MOLASSES</p>
              <p><strong>Phone:</strong> 03 236 6089</p>
              <p><strong>Email:</strong> office@wintonstockfeed.co.nz</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </ProductLayout>
  );
};

export default Condose;
