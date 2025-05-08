
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, BarChart2, X, Menu } from 'lucide-react';

const Header: React.FC = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Close mobile menu when clicking outside
  useEffect(() => {
    if (!isOpen) return;
    
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.mobile-sidebar') && !target.closest('.mobile-menu-button')) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-md py-2' : 'bg-white/95 backdrop-blur-md py-4'
    }`}>
      <div className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 relative z-10"
          aria-label="IncomePlus Home"
        >
          <div className="bg-primary-500 text-white p-1.5 rounded">
            <BarChart2 className="h-6 w-6" />
          </div>
          <span className="font-bold text-xl text-primary-700">IncomePlus</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-10">
          {[
            { path: '/', label: 'Home' },
            { path: '/features', label: 'Features' },
            { path: '/pricing', label: 'Pricing' },
          ].map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`font-medium hover:text-primary-500 transition-colors duration-200 text-gray-700 relative group ${
                location.pathname === item.path ? 'text-primary-500' : ''
              }`}
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-primary-500 transition-all duration-300 group-hover:w-full ${
                location.pathname === item.path ? 'w-full' : ''
              }`}></span>
            </Link>
          ))}
          <Link
            to="/auth"
            className="font-medium text-gray-700 hover:text-primary-500 transition-colors duration-200"
          >
            Sign In
          </Link>
        </nav>

        <div className="flex items-center space-x-3">
          <Link
            to="/auth"
            className="hidden md:flex items-center space-x-1 btn btn-primary shadow-md hover:shadow-lg transition-all duration-200"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </Link>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50 mobile-menu-button"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      <div 
        className={`fixed md:hidden inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div 
          className={`mobile-sidebar fixed top-0 right-0 w-3/4 max-w-sm h-full bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${
            isOpen ? 'translate-x-0' : 'translate-x-full'
          } flex flex-col`}
        >
          <div className="flex items-center justify-between p-4 border-b border-gray-100">
            <span className="font-bold text-xl text-primary-700">Menu</span>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
              aria-label="Close menu"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {[
              { path: '/', label: 'Home' },
              { path: '/features', label: 'Features' },
              { path: '/pricing', label: 'Pricing' },
            ].map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center p-3 rounded-lg transition-colors duration-200 ${
                  location.pathname === item.path 
                    ? 'bg-primary-50 text-primary-600 font-medium' 
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              to="/auth"
              className="flex items-center p-3 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              Sign In
            </Link>
          </div>
          
          <div className="p-4 border-t border-gray-100">
            <Link
              to="/auth"
              className="flex items-center justify-center w-full py-3 rounded-lg bg-primary-500 text-white hover:bg-primary-600 transition-colors duration-200"
              onClick={() => setIsOpen(false)}
            >
              <span>Get Started Free</span>
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
