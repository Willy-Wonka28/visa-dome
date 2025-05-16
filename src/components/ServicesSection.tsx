
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, User, Info, LockKeyhole, ScrollText, PlaneTakeoff } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      title: "Legalization",
      icon: <Info className="h-8 w-8 text-burgundy" />,
      meta: "",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Passports*",
      icon: <PlaneTakeoff className="h-8 w-8 text-burgundy" />,
      meta: "Nigeria & West Africa",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Police Clearance Certificate*",
      icon: <ScrollText className="h-8 w-8 text-burgundy" />,
      meta: "For Nigerians and Diaspora Nigerians",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    },
    {
      title: "Block Accounts*",
      icon: <LockKeyhole className="h-8 w-8 text-burgundy" />,
      meta: "Germany Studies",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    }
  ];

  return (
    <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Visa Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We offer a wide range of visa services to help you navigate the complex immigration process with ease.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="text-xl font-semibold text-burgundy">{service.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col gap-4 items-start justtify-start">
              <p className="font-semibold text-burgundy">{service.meta}</p>
                <p className="text-gray-600">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
