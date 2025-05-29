
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
            <div className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-gray-500" />
              <span>{location}</span>
            </div>
          )}
        </div>
      </div>

      {/* Photo Section - Square and prominent with more padding */}
      {photoUrl && (
        <div className="flex justify-center pt-6 pb-2">
          <div className="w-32 h-32 rounded-lg overflow-hidden shadow-md bg-gray-100">
            <img 
              src={photoUrl} 
              alt={name} 
              className="w-full h-full object-contain"
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
        {/* Office Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-wsf-blue-dark">In The Office</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContactCard
              name="Lisa Kennedy & Kathryn McEwing"
              role="Sales Team Orders"
              phone="0800 Molasses (0800 665277)"
              email="office@wintonstockfeed.co.nz"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <ContactCard
              name="Main Office"
              location="139 Florence Road, Winton. PO Box 132 Winton 9741"
              phone="03 236 6089"
            />
            <ContactCard
              name="Engineering Workshop"
              location="7 Montgomerie Street, Winton 9741"
            />
          </div>
        </section>

        {/* Sales Team Section */}
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-wsf-blue-dark">On The Road</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ContactCard
              name="Jamie Stephens"
              role="North Island"
              phone="021 838 261"
              email="jamies@wintonstockfeed.co.nz"
            />
            <ContactCard
              name="Phillip Campbell"
              role="North Otago- South Canterbury"
              phone="021 863 345"
              email="phillipc@wintonstockfeed.co.nz"
            />
            <ContactCard
              name="Brendon Corbett"
              role="Southland Sales Rep"
              phone="021 311 281"
              email="brendonc@wintonstockfeed.co.nz"
            />
            <ContactCard
              name="Riaan Crous"
              role="Southland Sales Rep"
              phone="021 912 699"
              email="riaan@wintonstockfeed.co.nz"
            />
            <ContactCard
              name="Andy Chrystall"
              role="Southland Sales Rep"
              phone="029 201 7361"
              email="andyc@wintonstockfeed.co.nz"
              photoUrl="https://evp-5783e02c62446-6a755ff09bfda58c6e9423a7c237a863.s3.us-east-1.amazonaws.com/andy.jpg"
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
              email="nelson@wintonstockfeed.co.nz"
            />
            <ContactCard
              name="Pierre Neame"
              role="General Manager"
              phone="029 235 0737"
              email="pierre@wintonstockfeed.co.nz"
            />
            <ContactCard
              name="Dougal McDonald"
              role="Engineer"
              phone="029 200 1629"
              email="dougal@wintonstockfeed.co.nz"
            />
            <ContactCard
              name="Sharyn Goodman"
              role="Accountant"
              phone="03 236 6089"
              email="sharyn@wintonstockfeed.co.nz"
            />
          </div>
        </section>
      </div>
    </ProductLayout>
  );
};

export default ContactUs;
