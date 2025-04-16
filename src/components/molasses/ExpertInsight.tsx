import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExpertInsight = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container-custom">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Read Below The Observations Of An Industry Expert On How Molasses Can Improve Your Farm Production
          </h2>

          <div className="relative mb-12">
            <div className="grid md:grid-cols-2 gap-8 items-center bg-gradient-to-r from-wsf-blue/20 to-transparent p-8 rounded-xl border border-white/10 backdrop-blur-sm z-10 relative">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold mb-4 text-wsf-blue-light">Howard de Klerk</h3>

                <p className="text-lg">
                  Howard de Klerk is a leading dairy nutrition consultant, optimising dairy systems to maximise dairy profits.
                </p>

                <ul className="space-y-4 mb-6">
                  <li className="flex items-start">
                    <span className="text-wsf-blue-light mr-2">•</span>
                    <span>Howard is highly experienced in formulating cost effective diets and observing cow signals with many years overseas and local experience in this area.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wsf-blue-light mr-2">•</span>
                    <span>He focuses on improving profitability rather than being production driven.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wsf-blue-light mr-2">•</span>
                    <span>Howard is a member of NZARN and also registered as a nutritionist overseas. Howard is passionate about the dairy industry and how to get better production results for New Zealand farmers.</span>
                  </li>
                </ul>

                <p className="text-lg font-medium">
                  For more information on how molasses can boost your productivity – download 2 of Howard's learnings below:
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="border-wsf-blue-light text-wsf-blue-light hover:bg-wsf-blue-light hover:text-white"
                    onClick={() =>
                      window.open(
                        '/src/components/molasses/con005hdeklerkdairycowmineralbasics.pdf',
                        '_blank'
                      )
                    }
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Mineral Basics
                  </Button>

                  <Button
                    variant="outline"
                    size="lg"
                    className="border-wsf-blue-light text-wsf-blue-light hover:bg-wsf-blue-light hover:text-white"
                    onClick={() =>
                      window.open(
                        '/src/components/molasses/J22164_WSF_Molasses_Flyer_A4_2019.pdf',
                        '_blank'
                      )
                    }
                  >
                    <Download className="mr-2 h-5 w-5" />
                    Download Molasses In New Zealand
                  </Button>
                </div>
              </div>

              <div className="flex justify-center">
                <img
                  src="https://github.com/kycra2/winton-stockfeed-revamp/blob/main/src/components/images/howard-de-klerk.jpg?raw=true"
                  alt="Howard de Klerk"
                  className="max-w-full h-auto rounded-xl shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertInsight;
