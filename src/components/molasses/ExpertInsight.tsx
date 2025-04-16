
import React from 'react';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ExpertInsight = () => {
  return (
    <section className="py-20 bg-black text-white">
      <div className="container-custom px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 md:mb-12 text-center">
            Read Below The Observations Of An Industry Expert On How Molasses Can Improve Your Farm Production
          </h2>

          <div className="relative mb-8 md:mb-12">
            <div className="relative z-10 grid md:grid-cols-2 gap-8 items-start bg-gradient-to-r from-wsf-blue/20 to-transparent p-4 md:p-8 rounded-xl border border-white/10 backdrop-blur-sm">
              
              {/* Image Section - Order switched for mobile */}
              <div className="md:order-2 flex justify-center items-start mb-6 md:mb-0">
                <img
                  src="https://github.com/kycra2/winton-stockfeed-revamp/blob/main/src/components/images/howard-de-klerk.jpg?raw=true"
                  alt="Howard de Klerk"
                  className="max-w-full h-auto rounded-xl shadow-lg"
                />
              </div>

              {/* Text Section */}
              <div className="space-y-4 md:space-y-6 md:order-1">
                <h3 className="text-xl md:text-2xl font-bold text-wsf-blue-light">Howard de Klerk</h3>

                <p className="text-base md:text-lg">
                  Howard de Klerk is a leading dairy nutrition consultant, optimising dairy systems to maximise dairy profits.
                </p>

                <ul className="space-y-3 md:space-y-4">
                  <li className="flex items-start">
                    <span className="text-wsf-blue-light mr-2 flex-shrink-0">•</span>
                    <span className="text-sm md:text-base">Howard is highly experienced in formulating cost effective diets and observing cow signals with many years overseas and local experience in this area.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wsf-blue-light mr-2 flex-shrink-0">•</span>
                    <span className="text-sm md:text-base">He focuses on improving profitability rather than being production driven.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-wsf-blue-light mr-2 flex-shrink-0">•</span>
                    <span className="text-sm md:text-base">Howard is a member of NZARN and also registered as a nutritionist overseas. Howard is passionate about the dairy industry and how to get better production results for New Zealand farmers.</span>
                  </li>
                </ul>

                <p className="text-base md:text-lg font-small">
                  For more information on how molasses can boost your productivity – download 2 of Howard's learnings below:
                </p>

                <div className="flex flex-col gap-4">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-wsf-blue-light text-wsf-blue-light hover:bg-wsf-blue-light hover:text-white w-full md:w-auto"
                    onClick={() =>
                      window.open(
                        '/src/components/molasses/con005hdeklerkdairycowmineralbasics.pdf',
                        '_blank'
                      )
                    }
                  >
                    <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Download Mineral Basics
                  </Button>

                  <Button
                    variant="outline"
                    size="sm"
                    className="border-wsf-blue-light text-wsf-blue-light hover:bg-wsf-blue-light hover:text-white w-full md:w-auto"
                    onClick={() =>
                      window.open(
                        '/src/components/molasses/J22164_WSF_Molasses_Flyer_A4_2019.pdf',
                        '_blank'
                      )
                    }
                  >
                    <Download className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                    Download Molasses In New Zealand
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertInsight;
