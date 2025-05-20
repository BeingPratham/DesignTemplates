import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen relative overflow-hidden bg-[hsl(var(--luxury-black))]"
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 1 }}
        className="absolute inset-0 z-0"
      >
        <img 
          src="https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&h=1080" 
          alt="Luxury interior" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[hsl(var(--luxury-black))] via-transparent to-[hsl(var(--luxury-black))/80]"></div>
      </motion.div>
      
      <div className="container mx-auto px-4 relative z-10 h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 text-white max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex items-center mb-6"
            >
              <div className="h-px w-12 bg-[hsl(var(--design3-accent))] mr-4"></div>
              <span className="uppercase tracking-[0.25em] text-[hsl(var(--design3-accent))]">Timeless Elegance</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-white"
            >
              <span className="block leading-tight">Heritage of</span>
              <span className="block text-[hsl(var(--design3-accent))] leading-tight">Craftsmanship</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
              className="text-xl text-gray-300 mb-10 max-w-xl"
            >
              Maison represents the perfect harmony of tradition and innovation, offering discerning clients 
              a curated collection of exquisite pieces with unparalleled attention to detail.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-col sm:flex-row items-start gap-6"
            >
              <a 
                href="#showcase" 
                className="group flex items-center px-8 py-4 bg-[hsl(var(--design3-accent))] text-white text-sm uppercase tracking-wider font-medium hover:bg-[hsl(var(--design3-accent))/90] transition-colors"
              >
                Discover Collection
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              
              <a 
                href="#" 
                className="group relative text-white text-sm uppercase tracking-wider font-medium hover:text-[hsl(var(--design3-accent))] transition-colors pl-8"
              >
                <span className="absolute left-0 top-1/2 -translate-y-1/2 h-px w-6 bg-[hsl(var(--design3-accent))]"></span>
                Our Heritage
              </a>
            </motion.div>
          </div>
          
          <div className="md:col-span-5 hidden md:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ 
                duration: 1.2, 
                delay: 1,
                type: "spring",
                stiffness: 100
              }}
              className="relative"
            >
              <div className="border-4 border-[hsl(var(--design3-accent))] p-4 -rotate-3 transform">
                <img 
                  src="https://images.unsplash.com/photo-1524324463413-57e3d8392091?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000" 
                  alt="Luxury item" 
                  className="w-full h-auto rotate-3 transform shadow-2xl"
                />
              </div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 1.5 }}
                className="absolute -bottom-12 -left-12 bg-[hsl(var(--luxury-black))] p-6 border border-[hsl(var(--design3-accent))]"
              >
                <span className="text-[hsl(var(--design3-accent))] font-bold text-5xl font-playfair">23</span>
                <span className="block text-white uppercase tracking-wider text-sm mt-1">Years of Excellence</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.8 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex space-x-24"
        >
          <div className="text-center">
            <span className="text-[hsl(var(--design3-accent))] block text-sm uppercase tracking-wider">Paris</span>
            <span className="text-white/60 text-xs">Flagship Store</span>
          </div>
          
          <div className="text-center">
            <span className="text-[hsl(var(--design3-accent))] block text-sm uppercase tracking-wider">Milan</span>
            <span className="text-white/60 text-xs">Design Studio</span>
          </div>
          
          <div className="text-center">
            <span className="text-[hsl(var(--design3-accent))] block text-sm uppercase tracking-wider">New York</span>
            <span className="text-white/60 text-xs">Gallery</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
