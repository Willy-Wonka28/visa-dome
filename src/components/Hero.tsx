import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <div className="md:pr-12 flex flex-col justify-center items-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Simplifying Your Visa Application Process
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              We help you navigate complex visa requirements with professional guidance and support every step of the way.
            </p>
            {/* <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <Button className="bg-burgundy hover:bg-burgundy-dark text-white px-8 py-2 text-lg">
                Get Started
              </Button>
              <Button variant="outline" className="border-burgundy text-burgundy hover:bg-burgundy hover:text-white px-8 py-2 text-lg">
                Learn More
              </Button>
            </div> */}
          </div>
        </div>

    {/* form */}
    <div className="w-full bg-white shadow-md p-4 flex flex-col items-center">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center w-full max-w-4xl">
        {/* Dropdown: Citizenship */}
        <div className="flex-1 relative">
          <label className="text-sm text-gray-500 mb-1 block">For citizens of</label>
          <select className="w-full border border-gray-300 px-3 py-2 h-20 appearance-none focus:outline-none">
            <option>Nigeria</option>
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
        </div>

        {/* Dropdown: Destination */}
        <div className="flex-1 relative">
          <label className="text-sm text-gray-500 mb-1 block">Traveling to</label>
          <select className="w-full border border-gray-300 px-3 py-2 h-20 appearance-none focus:outline-none">
            <option>Which country?</option>   
            <option>United States of America</option> 
          </select>
          <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
        </div>

        {/* Button */}
        <button className="bg-burgundy text-white px-6 py-2 mt-1 h-20 sm:mt-6 hover:bg-burgundy transition">
          Check requirements
        </button>
      </div>

      {/* Support Links */}
      {/* <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-700">
        <span className="flex items-center gap-1">
          <span role="img" aria-label="whatsapp">🟢</span> WhatsApp
        </span>
        <span className="flex items-center gap-1">
          📞 +1-800-345-6541
        </span>
      </div> */}
    </div>

      </div>
    </section>
  );
};

export default Hero;
