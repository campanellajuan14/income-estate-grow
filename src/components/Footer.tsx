
import React from 'react';
import { Link } from 'react-router-dom';
import { Building2, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-realestate-dark text-white">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-realestate-primary mr-2" />
              <span className="text-xl font-bold">Income<span className="text-realestate-primary">Plus</span></span>
            </div>
            <p className="text-gray-400 mb-4">
              Your trusted partner for finding high-yield investment properties with verified income potential.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-realestate-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-realestate-primary transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-realestate-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-realestate-primary transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-realestate-primary transition-colors">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/calculator" className="text-gray-400 hover:text-realestate-primary transition-colors">
                  ROI Calculator
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-realestate-primary transition-colors">
                  Investment Blog
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-realestate-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-realestate-primary transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-realestate-primary mr-2 mt-0.5" />
                <span className="text-gray-400">
                  123 Investment Blvd<br />
                  Chicago, IL 60601
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 text-realestate-primary mr-2" />
                <a href="tel:+18005551234" className="text-gray-400 hover:text-realestate-primary transition-colors">
                  (800) 555-1234
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 text-realestate-primary mr-2" />
                <a href="mailto:info@incomeplus.com" className="text-gray-400 hover:text-realestate-primary transition-colors">
                  info@incomeplus.com
                </a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to our newsletter for investment insights and exclusive property listings.
            </p>
            <div className="space-y-2">
              <Input
                type="email"
                placeholder="Your email address"
                className="bg-gray-800 border-gray-700 text-white"
              />
              <Button className="w-full bg-realestate-primary hover:bg-realestate-secondary">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800 mt-8 text-center md:flex md:justify-between md:text-left">
          <p className="text-gray-500 mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} IncomePlus. All rights reserved.
          </p>
          <div className="space-x-4 text-gray-500">
            <Link to="/privacy" className="hover:text-realestate-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-realestate-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
