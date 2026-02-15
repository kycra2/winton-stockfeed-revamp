
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import SEOHead from '@/components/SEOHead';

const HEALTH_AND_SAFETY_PDF = "https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/H_S_Signed_Policy_Statement_November_2024.pdf";
const HEALTH_AND_SAFETY_IMG = "https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/winton-health-and-safety.jpg";

const HealthAndSafety = () => (
  <div className="flex min-h-screen flex-col">
    <Navbar />
    <SEOHead
      title="Health and Safety | Winton Stock Feed"
      description="Winton Stock Feed's health and safety policy for farm deliveries across New Zealand. Our commitment to safe practices on your property."
      keywords="health and safety, farm safety, stock feed delivery, Winton Stock Feed"
      canonicalUrl="https://www.wintonstockfeed.co.nz/health-and-safety"
    />
    <main className="flex-1 pt-24 md:pt-28">
      <div className="container-custom py-12 md:py-20">
        <h1 className="text-3xl md:text-5xl font-bold mb-8 text-wsf-blue-dark">Health and Safety At Your Place</h1>
        <div className="flex flex-col md:flex-row md:gap-10 mb-8">
          <div className="flex-1 space-y-8">
            <p>
              As a service provider we are delivering to hundreds of farms, NZ wide.
            </p>
            <p>
              We receive several Health &amp; Safety Plans and Contractor agreements each week, some of these are 60 pages or more.
            </p>
            <p>
              It is not practical or even possible for all of our number of drivers, reps and technicians to have read your latest safety plan and signed it and remembered the important stuff when visiting your place.
            </p>
            <p>
              With some advice from Worksafe NZ and help from some of our farmer customers, we have developed a <span className="font-semibold">DELIVERY SITE AGREEMENT</span>, this is the safety plan that our team adhere to when at your place.
            </p>
            <p>
              This is not meant to replace our obligations to adhere to your rules, but to bring them together in a common format that makes us both comply to legislation and offers practical rules to keep our people safe.
            </p>

            <div className="bg-wsf-cream/60 p-5 rounded-lg mb-2">
              <p className="font-semibold text-lg mb-2">The Delivery Site Agreement covers:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>WSF’s Commitment to Health &amp; Safety and our obligations to our employees and contractors</li>
                <li>A Hazard register detailing the Hazards relating to the activities we undertake on farm.</li>
                <li>WSF staff will stay within the immediate area of the work/delivery being undertaken.</li>
                <li>Our promise to report any hazards and accidents or near misses as they may occur at your place. We will sign (or text) in and out where required.</li>
                <li>If there are particular hazards in the area of delivery (like overhead powerlines near auger delivery area) we will note these and they will appear on all your order forms.</li>
                <li>The main contact person will be noted on all order forms so drivers can make contact in the event of accidents or for reporting damage or hazards promptly.</li>
                <li>WSF will leave a docket in the office or other suitable place detailing the delivered product.</li>
                <li>
                  Clients/farm operators can download the latest version of the Delivery Site Agreement{" "}
                  <a href={HEALTH_AND_SAFETY_PDF} target="_blank" rel="noopener noreferrer" className="text-wsf-blue underline hover:text-wsf-blue-dark">here</a>{" "}
                  at any time for your records.
                </li>
              </ul>
            </div>

            <div className="mt-8 space-y-4">
              <p className="text-xl font-semibold">Have you covered Molasses Tanks in your safety plan &amp; Hazard Register?</p>
              <p>Do your staff know never to enter a molasses tank or silo?</p>
              <div className="p-5 bg-wsf-brown/10 rounded">
                <p className="font-semibold">Molasses Tanks:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>No one should ever enter a molasses tank, they can asphyxiate quickly.</li>
                  <li>Water or other contaminants can make their way into a molasses tank and start fermentation, especially if you have used a different feed in the molasses tank before.</li>
                  <li>
                    The space above the molasses can fill up with Carbon Dioxide and a person entering the tank to clean it or retrieve something can collapse instantly, and so to can any person trying to rescue them.
                  </li>
                </ul>
              </div>
              <div className="p-5 bg-wsf-brown/10 rounded">
                <p className="font-semibold">Silos:</p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>People should never enter a silo with product in it without proper training and equipment.</li>
                  <li>A person can easily drown in product, be crushed or caught in augers.</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="flex-1 mt-12 md:mt-0 flex flex-col items-center md:items-start md:pl-6">
            <img
              src={HEALTH_AND_SAFETY_IMG}
              alt="Winton Health and Safety"
              className="rounded-lg shadow-lg mb-8 w-full max-w-md"
            />
            <a
              href={HEALTH_AND_SAFETY_PDF}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary w-full text-center block"
            >
              Download Health &amp; Safety Policy (PDF)
            </a>
            <Link
              to="/contact-us"
              className="mt-4 underline text-wsf-blue hover:text-wsf-blue-dark text-center block"
            >
              Contact us with any queries
            </Link>
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default HealthAndSafety;

