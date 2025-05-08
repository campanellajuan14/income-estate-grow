
import { useEffect } from 'react';
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
        {/* Enhanced background decorative elements */}
        <div className="absolute top-[10%] right-0 w-96 h-96 bg-primary-50/70 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl opacity-60 z-0"></div>
        <div className="absolute top-[40%] left-0 w-80 h-80 bg-accent-100/60 rounded-full translate-y-1/3 -translate-x-1/3 blur-3xl opacity-60 z-0"></div>
        <div className="absolute bottom-[20%] right-[10%] w-72 h-72 bg-secondary-100/50 rounded-full blur-3xl opacity-50 z-0"></div>
        
        {/* Decorative lines */}
        <div className="absolute left-0 right-0 top-[25%] h-px bg-gradient-to-r from-transparent via-primary-200/30 to-transparent"></div>
        <div className="absolute left-0 right-0 top-[55%] h-px bg-gradient-to-r from-transparent via-accent-200/30 to-transparent"></div>
        <div className="absolute left-0 right-0 bottom-[30%] h-px bg-gradient-to-r from-transparent via-primary-200/30 to-transparent"></div>
        
        <PropertyAnalysis />
        <FeatureSection />
        <FinancialAnalytics />
        
        {/* Subtle divider between sections */}
        <div className="container mx-auto px-4">
          <div className="w-full max-w-5xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8"></div>
          </div>
        </div>
        
        <Calculator />
        <Statistics />
        
        {/* Subtle divider with accent color */}
        <div className="container mx-auto px-4">
          <div className="w-full max-w-5xl mx-auto">
            <div className="h-px bg-gradient-to-r from-transparent via-accent-200/50 to-transparent my-8"></div>
          </div>
        </div>
        
        <Testimonials />
        <Benefits />
        <CallToAction />
      </div>
    </main>
  );
}

export default Home;
