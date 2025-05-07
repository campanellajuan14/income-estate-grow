
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Menu, X, Home, Building2, Calculator, Award, MessageSquare } from "lucide-react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Building2 className="h-8 w-8 text-realestate-primary mr-2" />
              <span className="text-xl font-bold text-realestate-dark">Income<span className="text-realestate-primary">Plus</span></span>
            </Link>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-realestate-dark hover:text-realestate-primary transition-colors flex items-center">
              <Home className="w-4 h-4 mr-1" />
              <span>Home</span>
            </Link>
            <Link to="/properties" className="text-realestate-dark hover:text-realestate-primary transition-colors flex items-center">
              <Building2 className="w-4 h-4 mr-1" />
              <span>Properties</span>
            </Link>
            <Link to="/calculator" className="text-realestate-dark hover:text-realestate-primary transition-colors flex items-center">
              <Calculator className="w-4 h-4 mr-1" />
              <span>ROI Calculator</span>
            </Link>
            <Link to="/about" className="text-realestate-dark hover:text-realestate-primary transition-colors flex items-center">
              <Award className="w-4 h-4 mr-1" />
              <span>About Us</span>
            </Link>
            <Link to="/contact" className="text-realestate-dark hover:text-realestate-primary transition-colors flex items-center">
              <MessageSquare className="w-4 h-4 mr-1" />
              <span>Contact</span>
            </Link>
          </div>
          
          <div className="hidden md:flex">
            <Button variant="outline" className="mr-2 border-realestate-primary text-realestate-primary hover:bg-realestate-primary hover:text-white">
              Log In
            </Button>
            <Button className="bg-realestate-primary text-white hover:bg-realestate-secondary">
              Sign Up
            </Button>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-realestate-dark hover:text-realestate-primary focus:outline-none"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 animate-fade-in">
            <div className="flex flex-col space-y-3">
              <Link 
                to="/" 
                className="text-realestate-dark hover:text-realestate-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-50 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Home className="w-4 h-4 mr-2" />
                <span>Home</span>
              </Link>
              <Link 
                to="/properties" 
                className="text-realestate-dark hover:text-realestate-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-50 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Building2 className="w-4 h-4 mr-2" />
                <span>Properties</span>
              </Link>
              <Link 
                to="/calculator" 
                className="text-realestate-dark hover:text-realestate-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-50 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Calculator className="w-4 h-4 mr-2" />
                <span>ROI Calculator</span>
              </Link>
              <Link 
                to="/about" 
                className="text-realestate-dark hover:text-realestate-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-50 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Award className="w-4 h-4 mr-2" />
                <span>About Us</span>
              </Link>
              <Link 
                to="/contact" 
                className="text-realestate-dark hover:text-realestate-primary transition-colors px-4 py-2 rounded-md hover:bg-gray-50 flex items-center"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                <span>Contact</span>
              </Link>
              <div className="pt-2 flex flex-col space-y-2">
                <Button variant="outline" className="border-realestate-primary text-realestate-primary hover:bg-realestate-primary hover:text-white w-full">
                  Log In
                </Button>
                <Button className="bg-realestate-primary text-white hover:bg-realestate-secondary w-full">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
