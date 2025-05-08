
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown, CheckCircle } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-24 overflow-hidden">
      {/* Enhanced gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 z-0"></div>
      
      {/* Overlay pattern for depth */}
      <div className="absolute inset-0 opacity-10 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3')] bg-cover bg-center mix-blend-overlay"></div>
      
      {/* Animated dots pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{ 
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)', 
          backgroundSize: '30px 30px' 
        }}></div>
      </div>

      <div className="container relative z-10 pt-20 pb-24 md:pb-32 text-white">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-xl"
          >
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 text-sm font-medium bg-white/20 backdrop-blur-sm rounded-full text-white border border-white/20"
            >
              Trusted by 10,000+ property investors
            </motion.span>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              Make smarter real estate investments with precise analytics.
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="text-lg md:text-xl mb-8 text-blue-50"
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
                className="btn bg-white text-primary-600 hover:bg-gray-100 hover:text-primary-700 transition-all flex items-center justify-center gap-2 shadow-lg transform hover:translate-y-[-2px] duration-300"
              >
                <span>Get Started Free</span>
                <ArrowRight className="w-5 h-5" />
              </a>
              <button className="btn btn-secondary bg-transparent text-white border-white hover:bg-white/10 flex items-center justify-center transform hover:translate-y-[-2px] duration-300">
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
              className="mt-8 space-y-3"
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
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 mr-2 text-accent-300" />
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
            <div className="absolute -z-10 w-[200px] h-[200px] bg-primary-400/30 rounded-full blur-3xl top-10 -right-10"></div>
            <div className="absolute -z-10 w-[150px] h-[150px] bg-accent-500/20 rounded-full blur-2xl bottom-10 -left-10"></div>
            
            {/* Main image */}
            <div className="relative z-10 drop-shadow-2xl">
              <div className="bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/20 shadow-2xl">
                <img
                  src="public/lovable-uploads/617743ca-3d0f-416c-80cf-f841751e4967.png"
                  alt="Professional investor"
                  className="rounded-lg shadow-xl"
                />
              </div>
              
              {/* Floating app screenshot */}
              <motion.img
                initial={{ y: 0 }}
                animate={{ y: [-5, 5, -5] }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
                src="https://images.pexels.com/photos/6801874/pexels-photo-6801874.jpeg?auto=compress&cs=tinysrgb&w=400"
                alt="Mobile App"
                className="absolute -bottom-10 -left-10 w-56 rounded-lg shadow-xl border-4 border-white/90"
              />
              
              {/* Floating stats card */}
              <motion.div
                initial={{ y: 0 }}
                animate={{ y: [5, -5, 5] }}
                transition={{ duration: 5, delay: 0.5, repeat: Infinity, repeatType: "reverse" }}
                className="absolute top-5 -right-10 bg-white/10 backdrop-blur-md p-3 rounded-lg border border-white/20 shadow-lg w-40"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="w-3 h-3 rounded-full bg-accent-400"></div>
                  <span className="text-xs font-medium text-white">Live ROI Analytics</span>
                </div>
                <div className="bg-accent-500/20 rounded-md p-2">
                  <div className="text-xs text-white mb-1">Investment Return</div>
                  <div className="text-lg font-bold text-white">21.5%</div>
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
          <span className="mb-1">Scroll to explore</span>
          <ChevronDown className="w-5 h-5" />
        </button>
      </motion.div>
      
      {/* Animated shape */}
      <div className="absolute bottom-0 left-0 right-0 h-16 z-10">
        <svg viewBox="0 0 1440 116" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 51.76L60 57.96C120 64.94 240 77.96 360 70.76C480 64.94 600 38.74 720 22.36C840 5.96 960 -1.24 1080 12.56C1200 25.56 1320 60.14 1380 77.96L1440 96.56V115.16H1380C1320 115.16 1200 115.16 1080 115.16C960 115.16 840 115.16 720 115.16C600 115.16 480 115.16 360 115.16C240 115.16 120 115.16 60 115.16H0V51.76Z" fill="white" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
