import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ChevronDown } from "lucide-react";
import { scrollToElement } from "../../lib/smooth-scroll";

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  
  // Animation variants
  const titleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.6, 0.05, -0.01, 0.9]
      }
    })
  };
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen flex items-center relative overflow-hidden bg-[hsl(var(--luxury-black))]"
    >
      <div className="absolute inset-0 opacity-60">
        <img 
          src="https://images.unsplash.com/photo-1605289982774-9a6fef564df8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1400&q=80" 
          alt="Luxury boutique interior" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-7 text-white">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-[hsl(var(--luxury-gold))] text-sm md:text-lg uppercase tracking-[0.3em] mb-4 font-montserrat"
            >
              Introducing
            </motion.h4>
            
            <h1 className="text-5xl md:text-7xl font-playfair font-bold leading-tight mb-6">
              <motion.span
                custom={0}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={titleVariants}
                className="inline-block"
              >
                Luxury
              </motion.span>{" "}
              <motion.span
                custom={1}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                variants={titleVariants}
                className="inline-block"
              >
                Redefined
              </motion.span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.9 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg md:text-xl max-w-xl mb-10 text-[hsl(var(--luxury-cream))] font-light"
            >
              Experience the epitome of style and sophistication with our curated collection 
              of exclusive designer pieces.
            </motion.p>
            
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <motion.a 
                href="#showcase"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('showcase');
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="px-8 py-4 bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-black))] text-sm uppercase tracking-wider font-medium transition-transform hover:scale-105 text-center sm:text-left"
              >
                Explore Collection
              </motion.a>
              
              <motion.a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToElement('about');
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="px-8 py-4 border border-white text-white text-sm uppercase tracking-wider font-medium transition-transform hover:scale-105 text-center sm:text-left"
              >
                Our Story
              </motion.a>
            </div>
          </div>
          
          <div className="col-span-12 md:col-span-5 hidden md:block">
            <div className="parallax relative mt-20">
              <motion.img 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                src="https://images.unsplash.com/photo-1584917865442-de89df76afd3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=1000" 
                alt="Premium designer handbag" 
                className="w-full h-auto object-cover rounded-lg parallax-layer shadow-2xl" 
                data-depth="0.2" 
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 0.8, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute -bottom-10 -left-10 w-40 h-40 bg-[hsl(var(--design1-accent))] rounded-full opacity-80 parallax-layer" 
                data-depth="0.4"
              />
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="absolute -top-10 -right-10 w-32 h-32 border-4 border-[hsl(var(--luxury-gold))] rounded-lg parallax-layer" 
                data-depth="0.3"
              />
            </div>
          </div>
        </div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 0.6, 
          delay: 1.2,
          repeat: Infinity,
          repeatType: "reverse",
          repeatDelay: 0.5
        }}
        className="absolute bottom-10 left-0 right-0 flex justify-center"
      >
        <ChevronDown className="h-8 w-8 text-white" />
      </motion.div>
    </section>
  );
};

export default Hero;
