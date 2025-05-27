import React from 'react'
import ContactSection from '../components/ContactSection'
import Hero from '../components/Hero'
import ServicesSection from '../components/ServicesSection'
import Header from '@/components/Header'
import Footer from '@/components/Footer'



function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
        <Header />
          <Hero />
            <ServicesSection />
            {/* <ProcessSection /> */}
            <ContactSection />
        <Footer />
        </div>
  )
}

export default LandingPage
