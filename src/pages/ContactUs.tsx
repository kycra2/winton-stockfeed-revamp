import React from 'react';
import ProductLayout from '@/components/ProductLayout';
import { User, Users, Phone, Mail, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

const ContactCard = ({ name, role, phone, email, location, photoUrl }: {
  name: string;
  role?: string;
  phone?: string;
  email?: string;
  location?: string;
  photoUrl?: string;
}) => (
  <Card className="p-6 space-y-4">
    <div className="space-y-4">
      {/* Contact Information */}
      <div className="flex items-start gap-4">
        {!photoUrl && (
          <div className="bg-wsf-blue/10 p-3 rounded-full">
            <User className="h-6 w-6 text-wsf-blue" />
          </div>
        )}
        <div className="space-y-1 flex-1">
          <h3 className="font-semibold text-lg">{name}</h3>
          {role && <p className="text-gray-600">{role}</p>}
          {phone && (
            <div className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-gray-500" />
              <span>{phone}</span>
            </div>
          )}
          {email && (
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-gray-500" />
              <a href={`mailto:${email}`} className="text-wsf-blue hover:underline">
                {email}
              </a>
            </div>
          )}
          {location && (
            <div className="flex items-start gap-2">
              <MapPin className="h-4 w-4 text-gray-500 mt-0.5 flex-shrink-0" />
              <span className="text-sm leading-relaxed break-words">{location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Photo Section - Larger square with proper cropping */}
      {photoUrl && (
        <div className="flex justify-center pt-6 pb-2">
          <div className="w-48 h-48 rounded-lg overflow-hidden shadow-md bg-gray-100">
            <img 
              src={photoUrl} 
              alt={name} 
              className="w-full h-full object-cover object-top"
            />
          </div>
        </div>
      )}
    </div>
  </Card>
);

const ContactUs = () => {
  return (
    <ProductLayout title="Contact Us">
      <div className="space-y-12">
        {/* Office Locations Section - Moved to top */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-wsf-blue-dark">Our Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <ContactCard
              name="Main Office"
              location="139 Florence Road, Winton. PO Box 132 Winton 9741"
              phone="03 236 6089"
               email="office@wintonstockfeed.co.nz"
            />
            <ContactCard
              name="Blending Plant"
              location="139 Florence Rd, Winton"
            />
            <ContactCard
              name="Feed Mill"
              location="107 Clyde Street Invercargill"
            />
            <ContactCard
              name="Engineering Workshop"
              location="7 Montgomerie Street, Winton 9741"
            />
          </div>
        </section>

        {/* Office Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-wsf-blue-dark">In The Office</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContactCard
              name="Lisa Kennedy"
              role="Sales Team Orders"
              phone="0800 Molasses (0800 665277)"
              email="orders@wintonstockfeed.co.nz"
              photoUrl="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Lisa-kennedy.jpg"
            />
            <ContactCard
              name="Kathryn McEwing"
              role="Sales Team Orders"
              phone="0800 Molasses (0800 665277)"
              email="orders@wintonstockfeed.co.nz –"
              photoUrl="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Kathryn+McEwing+.jpg"
            />
            <ContactCard
              name="Bronwyn McCulloch"
              role="Admin"
              phone="03 236 6089"
              email="orders@wintonstockfeed.co.nz"
              photoUrl="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Bronwyn+McCulloch.jpg"
            />
            <ContactCard
              name="Tayla Muir"
              role="Admin"
              phone="03 236 6089"
              email="orders@wintonstockfeed.co.nz"
              photoUrl="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Tayla+Muir+.jpg"
            />
            <ContactCard
              name="Ray Sanson"
              role="Dispatcher/Logistics"
              phone="03 236 6089"
              email="rays@wintonstockfeed.co.nz"
              photoUrl="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Ray+Sanson.jpg"
            />
          </div>
        </section>

        {/* Sales Team Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-wsf-blue-dark">On The Road</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContactCard
              name="Jamie Stephens"
              role="North Island Sales Manager"
              phone="021 838 261"
              email="jamies@wintonstockfeed.co.nz"
              photoUrl="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/jamie-stephens.avif"
            />
            <ContactCard
              name="Brendon Corbett"
              role="Central / South Southland Sales Rep"
              phone="021 311 281"
              email="brendonc@wintonstockfeed.co.nz"
              photoUrl="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Brendon+Corbett.jpg"
            />
            <ContactCard
              name="Riaan Crous"
              role="Western Southland Sales Rep"
              phone="021 912 699"
              email="riaan@wintonstockfeed.co.nz"
              photoUrl="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Riaan+Crous.jpg"
            />
            <ContactCard
              name="Andy Chrystall"
              role="North Southland Sales Rep"
              phone="029 201 7361"
              email="andyc@wintonstockfeed.co.nz"
              photoUrl="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/thumbnail_andy-new.jpg"
            />
          </div>
        </section>

        {/* Executive Team Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-wsf-blue-dark">Executive Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContactCard
              name="Nelson Lindsay"
              role="Director"
              phone="027 435 5176"
              email="nelsonl@wintonstockfeed.co.nz"
              photoUrl="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/nelson.jpg"
            />
            <ContactCard
              name="Pierre Neame"
              role="General Manager"
              phone="029 235 0737"
              email="pierren@wintonstockfeed.co.nz"
              photoUrl="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/pierre.jpg"
            />
            <ContactCard
              name="Sharyn Goodman"
              role="Company Accountant"
              phone="03 236 6089"
              email="sharyng@wintonstockfeed.co.nz"
              photoUrl="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/Sharyn+Goodman.jpg"
            />
          </div>
        </section>
      </div>
    </ProductLayout>
  );
};

export default ContactUs;
