
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle, Globe, BarChart2, Clock } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 overflow-hidden">
      {/* Enhanced gradient background with modern color combination */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-700 via-primary-800 to-primary-900 z-0"></div>
      
      {/* Improved overlay pattern for depth with subtle texture */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay"></div>
      
      {/* Enhanced animated dots pattern */}
      <div className="absolute inset-0 opacity-15">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 1px)', 
          backgroundSize: '25px 25px' 
        }}></div>
      </div>
      
      {/* Animated geometric shapes for modern look */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-primary-400/10 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-40 right-10 w-40 h-40 bg-accent-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDuration: '8s' }}></div>
      <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-secondary-400/5 rounded-full blur-3xl"></div>

      <div className="container relative z-10 pt-16 pb-24 md:pb-32 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-5 py-2 mb-6 text-sm font-medium bg-white/10 backdrop-blur-md rounded-full text-white border border-white/20 shadow-lg"
            >
              <div className="flex items-center">
                <Globe className="w-4 h-4 mr-2 text-accent-300" />
                <span>Trusted by 10,000+ property investors</span>
              </div>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Make <span className="text-accent-300">smarter</span> real estate investments with <span className="bg-gradient-to-r from-accent-300 to-accent-400 bg-clip-text text-transparent">precise analytics.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-blue-50 leading-relaxed"
            >
              Analyze any investment property in seconds. Our software gives you accurate insights to know if a property will be profitable before you buy.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="#get-started"
                className="btn bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700 transition-all flex items-center justify-center gap-2 shadow-xl transform hover:translate-y-[-2px] duration-300"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="btn btn-secondary bg-transparent text-white border-white/40 hover:bg-white/10 flex items-center justify-center transform hover:translate-y-[-2px] duration-300 shadow-lg">
                <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
                  <path d="M8 5.14v14l11-7-11-7z"></path>
                </svg>
                Watch Demo
              </button>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="mt-8 space-y-4"
            >
              {[
                'Advanced ROI and cash flow analysis',
                'Detailed property comparison',
                'Long-term projection forecasting'
              ].map((feature, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  className="flex items-center bg-white/5 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/10 shadow-lg"
                >
                  <CheckCircle className="w-5 h-5 mr-3 text-accent-300 flex-shrink-0" />
                  <span className="text-blue-50">{feature}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="relative"
          >
            <div className="absolute -z-10 w-[300px] h-[300px] bg-primary-400/30 rounded-full blur-3xl top-10 -right-20"></div>
            <div className="absolute -z-10 w-[200px] h-[200px] bg-accent-500/20 rounded-full blur-2xl bottom-10 -left-10"></div>
            
            {/* Main image with enhanced styling */}
            <div className="relative z-10 drop-shadow-2xl perspective-1000">
              <div className="bg-white/10 backdrop-blur-lg p-4 rounded-2xl border border-white/20 shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-700">
                <img
                  src="public/lovable-uploads/370f38d8-7110-407d-bd9e-ff71c03f543b.png"
                  alt="Investment analysis dashboard"
                  className="rounded-lg shadow-2xl border border-white/10"
                />
              </div>
              
              {/* First floating element */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                className="absolute -bottom-10 -left-10 bg-white/10 backdrop-blur-lg p-4 rounded-xl border border-white/30 shadow-2xl transform rotate-[-5deg] max-w-[200px]"
              >
                <img 
                  src="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400" 
                  alt="Mobile App" 
                  className="rounded-lg shadow-xl"
                />
              </motion.div>
              
              {/* Enhanced analytics floating card */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-5 -right-10 glass-card p-4 rounded-xl border border-white/30 shadow-lg w-48"
              >
                <div className="flex items-center gap-2 mb-3">
                  <div className="p-1.5 bg-accent-500/30 rounded-full">
                    <BarChart2 className="w-4 h-4 text-accent-300" />
                  </div>
                  <span className="text-sm font-medium text-white">Live ROI Analytics</span>
                </div>
                <div className="bg-accent-500/20 rounded-lg p-3">
                  <div className="text-xs text-white/80 mb-1">Investment Return</div>
                  <div className="text-2xl font-bold text-white flex items-end">
                    21.5%
                    <span className="text-xs text-accent-300 ml-1.5 mb-1">↑ 2.3%</span>
                  </div>
                </div>
              </motion.div>
              
              {/* New floating element - time saving metric */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [-3, 3, -3] }}
                transition={{ duration: 3.5, delay: 0.2, repeat: Infinity, repeatType: "reverse" }}
                className="absolute -bottom-5 -right-5 glass-card py-2 px-3 rounded-lg border border-white/30 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1 bg-primary-400/30 rounded-full">
                    <Clock className="w-3 h-3 text-primary-300" />
                  </div>
                  <span className="text-xs font-medium text-white">Analysis in 30 seconds</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-5 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
      >
        <button className="flex flex-col items-center text-sm font-medium">
          <span className="mb-1 text-blue-100">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </motion.div>
      
      {/* Enhanced wave shape with better curve */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 51.76L60 57.96C120 64.94 240 77.96 360 70.76C480 64.94 600 38.74 720 22.36C840 5.96 960 -1.24 1080 12.56C1200 25.56 1320 60.14 1380 77.96L1440 96.56V115.16H1380C1320 115.16 1200 115.16 1080 115.16C960 115.16 840 115.16 720 115.16C600 115.16 480 115.16 360 115.16C240 115.16 120 115.16 60 115.16H0V51.76Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
