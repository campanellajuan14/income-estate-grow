
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProperties from '@/components/FeaturedProperties';
import ROICalculator from '@/components/ROICalculator';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { TrendingUp, PiggyBank, BadgeDollarSign, LineChart } from 'lucide-react';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Why Choose Us Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-realestate-dark mb-2">Why Invest with IncomePlus</h2>
              <p className="text-realestate-gray max-w-xl mx-auto">
                We specialize in properties with proven income potential and help you maximize your returns
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-realestate-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-realestate-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-realestate-dark">Pre-Verified Income</h3>
                <p className="text-realestate-gray">
                  All properties include verified rental income history and projections
                </p>
              </div>
              
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-realestate-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <PiggyBank className="h-8 w-8 text-realestate-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-realestate-dark">Instant ROI Analysis</h3>
                <p className="text-realestate-gray">
                  Advanced tools to calculate potential returns before you invest
                </p>
              </div>
              
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-realestate-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <BadgeDollarSign className="h-8 w-8 text-realestate-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-realestate-dark">Financing Support</h3>
                <p className="text-realestate-gray">
                  Connect with lenders specializing in investment property financing
                </p>
              </div>
              
              <div className="p-6 text-center">
                <div className="w-16 h-16 bg-realestate-light rounded-full flex items-center justify-center mx-auto mb-4">
                  <LineChart className="h-8 w-8 text-realestate-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-realestate-dark">Market Insights</h3>
                <p className="text-realestate-gray">
                  Detailed market analysis and growth projections for each area
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <FeaturedProperties />
        
        <ROICalculator />
        
        <Testimonials />
        
        {/* CTA Section */}
        <section className="py-16 bg-realestate-primary text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Start Your Investment Journey?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white/80">
              Join thousands of successful investors who've found their perfect income-generating properties with us.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-realestate-primary hover:bg-gray-100">
                Browse Properties
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
