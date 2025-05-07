
import React from 'react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-realestate-dark h-[500px] md:h-[600px] flex items-center">
      {/* Overlay with dark gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-realestate-dark to-transparent opacity-90"></div>
      
      {/* Background image */}
      <div className="absolute inset-0 z-[-1]">
        <img
          src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80"
          alt="Real Estate Investment"
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 z-10">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 animate-fade-in">
            Find Your Next <span className="text-realestate-primary">Income Property</span>
          </h1>
          <p className="text-white text-xl mb-8 opacity-90 animate-fade-in">
            Discover high-yield investment properties with detailed income analytics and ROI projections
          </p>
          
          <div className="bg-white p-4 rounded-lg shadow-lg animate-slide-up">
            <div className="flex flex-col md:flex-row gap-2">
              <div className="flex-grow">
                <Input
                  type="text"
                  placeholder="City, neighborhood, or ZIP"
                  className="h-12 w-full"
                />
              </div>
              <div className="flex-grow md:flex-grow-0">
                <Button className="h-12 w-full bg-realestate-primary hover:bg-realestate-secondary text-white flex items-center justify-center">
                  <Search className="w-5 h-5 mr-2" />
                  <span>Search Properties</span>
                </Button>
              </div>
            </div>
            <div className="mt-3 flex flex-wrap gap-2">
              <Button variant="outline" size="sm" className="border-realestate-gray text-realestate-dark">
                Multi-Family
              </Button>
              <Button variant="outline" size="sm" className="border-realestate-gray text-realestate-dark">
                Commercial
              </Button>
              <Button variant="outline" size="sm" className="border-realestate-gray text-realestate-dark">
                Vacation Rental
              </Button>
              <Button variant="outline" size="sm" className="border-realestate-gray text-realestate-dark">
                Under $500K
              </Button>
            </div>
          </div>
          
          <div className="mt-6 flex items-center justify-start gap-8 text-white animate-fade-in">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-realestate-primary">2,500+</span>
              <span className="text-sm">Income Properties</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-realestate-primary">$1.2B</span>
              <span className="text-sm">Property Value</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-realestate-primary">12%+</span>
              <span className="text-sm">Average ROI</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
