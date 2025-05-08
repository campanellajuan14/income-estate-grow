
import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import FeatureSection from '../components/FeatureSection';
import PropertyAnalysis from '../components/PropertyAnalysis';
import FinancialAnalytics from '../components/FinancialAnalytics';
import Calculator from '../components/Calculator';
import Testimonials from '../components/Testimonials';
import Statistics from '../components/Statistics';
import Benefits from '../components/Benefits';
import CallToAction from '../components/CallToAction';

function Home() {
  // Smooth scroll to section when clicking on navigation links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    // Initial check for hash in URL
    if (window.location.hash) {
      setTimeout(handleHashChange, 100);
    }

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="relative">
        {/* Background decorative elements */}
        <div className="absolute top-[15%] right-0 w-64 h-64 bg-blue-100 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-30 z-0"></div>
        <div className="absolute bottom-[30%] left-0 w-80 h-80 bg-accent-100 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl opacity-40 z-0"></div>
        
        <PropertyAnalysis />
        <FeatureSection />
        <FinancialAnalytics />
        <Calculator />
        <Statistics />
        <Testimonials />
        <Benefits />
        <CallToAction />
      </div>
    </main>
  );
}

export default Home;
