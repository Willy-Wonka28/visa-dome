import ContactSection from '@/components/ContactSection'
import Hero from '@/components/Hero'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import React, { useEffect, useState } from 'react'
import { ArrowUp, ChevronDown } from 'lucide-react';

function VisaPage() {
  const [selectedTab, setSelectedTab] = useState('tourist');
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const renderContent = () => {
    if (selectedTab === 'tourist') {
      return (
        <div className="border border-burgundy p-4 rounded-md">
          <p className="text-burgundy font-bold">A visa is not required for this destination.</p>
          <p className="mt-2">Visa is not required for a stay up to 30 days.</p>
          <p className="mt-2">Effective 1 April 2022, non-Malaysians may enter Malaysia without prior approval from the Malaysian authorities (i.e. MyTravelPass / MyEntry not required).</p>
        </div>
      );
    } else if (selectedTab === 'business') {
      return (
        <div className="border border-burgundy p-4 rounded-md">
          <p className="text-burgundy font-bold">A visa is not required for this destination.</p>
          <p className="mt-2">Visa is not required for business visits up to 30 days.</p>
        </div>
      );
    }
  };

  return (
    <div>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
      <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center">
          <div className="md:pr-12 flex flex-col justify-center items-center">
            <p className="text-2xl text-center text-gray-600 mb-8 w-3/4">
            🇺🇸 Find the right United States of America Visa for your trip with price, requirements, and application time
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
    <div className="sticky top-0 z-20 bg-white shadow-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-center gap-4">
          {/* Dropdown: Destination */}
          <div className="flex-1 relative">
            <label className="text-sm text-gray-500 mb-1 block">Your travel destination</label>
            <select className="w-full border border-gray-300 px-3 py-2 h-20 appearance-none focus:outline-none">
              <option>United States of America</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
          </div>

          {/* Dropdown: Visa Type */}
          <div className="flex-1 relative">
            <label className="text-sm text-gray-500 mb-1 block">Visa type</label>
            <select className="w-full border border-gray-300 px-3 py-2 h-20 appearance-none focus:outline-none">
              <option>Tourist Visa</option> 
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
          </div>

          {/* Dropdown: Your Citizenship */}
          <div className="flex-1 relative">
            <label className="text-sm text-gray-500 mb-1 block">Your citizenship</label>
            <select className="w-full border border-gray-300 px-3 py-2 h-20 appearance-none focus:outline-none">
              <option>Nigeria</option> 
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
          </div>

          {/* Dropdown: Destination */}
          <div className="flex-1 relative">
            <label className="text-sm text-gray-500 mb-1 block">Living in</label>
            <select className="w-full border border-gray-300 px-3 py-2 h-20 appearance-none focus:outline-none">
              <option>United States of America</option> 
            </select>
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none text-gray-500" />
          </div>
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
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-2xl font-bold mb-4">United States of America Visa Types</h2>
          <p className="text-gray-600 mb-6">You can apply for all the available US online visas with VisaHQ depending on your needs and nationality.</p>
          <div className="flex gap-4">
            <div className="w-1/4">
              <div
                className={`cursor-pointer p-4 border ${selectedTab === 'tourist' ? 'border-burgundy' : 'border-gray-300'} rounded-md mb-4`}
                onClick={() => setSelectedTab('tourist')}
              >
                <p className="font-bold">Tourist visa</p>
                <p className="text-burgundy">not required</p>
              </div>
              <div
                className={`cursor-pointer p-4 border ${selectedTab === 'business' ? 'border-burgundy' : 'border-gray-300'} rounded-md`}
                onClick={() => setSelectedTab('business')}
              >
                <p className="font-bold">Business visa</p>
                <p className="text-burgundy">not required</p>
              </div>
            </div>
            <div className="w-3/4">
              {renderContent()}
            </div>
          </div>
        </div>
        <ContactSection />
        {showScrollButton && (
        <button
          className="fixed bottom-4 right-4 bg-burgundy text-white p-3 rounded-full shadow-lg hover:bg-burgundy-dark transition"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll to top"
        >
          <ArrowUp />
        </button>
      )}
      </div>
      <Footer />
    </div>
  )
}

export default VisaPage