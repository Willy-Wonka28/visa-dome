
import React from 'react';

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      title: "Submit Application",
      description: "Fill out our easy-to-use online application form with your personal details and visa requirements."
    },
    {
      number: "02",
      title: "Document Review",
      description: "Our experts will review your documents and provide guidance on any additional requirements."
    },
    {
      number: "03",
      title: "Application Processing",
      description: "We submit your application to the appropriate authorities and track its progress."
    },
    {
      number: "04",
      title: "Visa Approval",
      description: "Receive your visa approval notification and prepare for your journey abroad."
    }
  ];

  return (
    <section id="process" className="py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Application Process</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We've simplified the visa application process into four easy steps to ensure a hassle-free experience.
          </p>
        </div>

        <div className="relative">
          {/* Process timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-200"></div>
          
          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className={`flex flex-col md:flex-row items-center mb-12 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="bg-white p-6 rounded-lg shadow-md border border-gray-100">
                    <span className="text-5xl font-bold text-burgundy-lighter opacity-40">{step.number}</span>
                    <h3 className="text-xl font-bold text-gray-900 mt-2">{step.title}</h3>
                    <p className="text-gray-600 mt-2">{step.description}</p>
                  </div>
                </div>
                
                <div className="hidden md:flex items-center justify-center w-12 h-12 rounded-full bg-burgundy text-white font-bold border-4 border-white shadow-xl z-10 my-4 md:my-0 md:mx-4">
                  {parseInt(step.number)}
                </div>
                
                <div className={`md:w-1/2 ${index % 2 === 0 ? 'md:pl-12' : 'md:pr-12 md:text-right'}`}>
                  {index % 2 === 0 ? (
                    <div className="h-full" />
                  ) : (
                    <div className="h-full" />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
