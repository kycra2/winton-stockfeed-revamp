
import React from 'react';
import ProductLayout from '@/components/ProductLayout';

const AboutUs = () => {
  return (
    <ProductLayout title="About Us">
      <div className="space-y-8">
        {/* Company Overview Section */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold text-wsf-blue-dark">Company Overview</h2>
            <p className="leading-relaxed">
              Located in Winton, Central Southland, Winton Stock Feed is a privately owned business that was started in 1988. The company employs around 40 people.
            </p>

            <p className="leading-relaxed">
              The Winton office is the hub for our nationwide network of Sales Representatives and Distributors servicing the Dairy Industry throughout the North and South Islands.
            </p>
          </div>
          <div>
            <img 
              src="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/winton-stock-feed-southland.png" 
              alt="Winton Stock Feed Facility"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </div>

        {/* Molasses Business Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-blue-dark">Molasses Business Development</h2>
          <p className="leading-relaxed">
            Nelson Lindsay, the director of Winton Stock Feed, launched the molasses business in 2003 and has been shipping molasses in container form (as opposed to bulk) throughout New Zealand.
          </p>

          <p className="leading-relaxed">
            The use of containers, he says, is the key to the growth of his company in that it allows flexibility in his operation. "The benefits are that we can buy from several different places giving us lots of flexibility. We can go, in the Philippines, for example, into the back-blocks. We can buy from sources which have difficulty in getting enough products together to offer a ship tanker load."
          </p>
        </div>

        {/* Competitive Advantage Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-blue-dark">Our Competitive Advantage</h2>
          <p className="leading-relaxed">
            Another benefit is the cost of freight. We go to places which have container surpluses and where shipping companies want to get the containers out of there. We are taking them from container surplus areas and putting them into container deficit areas. It is all about being competitive – molasses is a commodity.
          </p>

          <p className="leading-relaxed">
            A large proportion of Winton Stock Feed's product was traditionally sourced from the Fiji Islands, but the company has now imports molasses from Indonesia, Thailand and the Philippines.
          </p>

          <p className="leading-relaxed">
            We can use different shipping companies, that service different ports by just changing our source of supply. You find your source to match the ships to go to those points which you want to go to. It's the flexibility which you have with containers which helps to make your operation competitive.
          </p>
        </div>

        {/* Operational Benefits Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-blue-dark">Operational Benefits</h2>
          <p className="leading-relaxed">
            Also, by using containers we can run lower stocks and don't have to have expensive port-side storage terminals which make for expensive storage costs.
          </p>

          <p className="leading-relaxed">
            We can pick up a container and get away from the most expensive land in the country – which is usually on the ports! Winton Stock Feed has experienced dramatic growth since its inception. The company operates extensively throughout New Zealand.
          </p>
        </div>

        {/* Company Growth Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-blue-dark">Company Growth</h2>
          <p className="leading-relaxed">
            Winton Stock Feed is the only wholly New Zealand owned molasses importer and has experienced massive growth in recent years due to the growth in its molasses operation. The company has innovated the use of using dry goods containers to import molasses originally from the sugar mills in Fiji. Now the product is sourced from a variety of countries, including Thailand, Indonesia and Australia.
          </p>

          <p className="leading-relaxed">
            The Company grew from being a Feed Mill based in the Southland and has become a New Zealand wide supplier and now serves many hundreds of farmers and Feed Mills and manufacturers. The company employs over 20 people including sales reps, covering the regions nationwide and molasses plants are run with a combination of contractor and company owned trucks.
          </p>
        </div>

        {/* National Presence Section */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-wsf-blue-dark">National Presence</h2>
          <p className="leading-relaxed">
            Seven depots located throughout New Zealand ensure ease of supply for farmers nationwide. The company supplies PKE throughout Southland, South Otago and the rest of New Zealand. WSF purchased PFC Stock feeds in Feb 2014, to take advantage of the growing pelleted feed market in Southland. We have devised a way to mix any liquid or powdered mineral supplement including non water soluble products like Mg Oxide into molasses.
          </p>
        </div>
      </div>
    </ProductLayout>
  );
};

export default AboutUs;
