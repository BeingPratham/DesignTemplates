import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { fashionImages } from "../../lib/imageData";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-[hsl(var(--luxury-black))] text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-1/3 h-full bg-[hsl(var(--design1-accent))] opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div className="md:order-2">
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-[hsl(var(--luxury-gold))] text-sm uppercase tracking-[0.3em] mb-3 font-montserrat"
            >
              Our Philosophy
            </motion.h4>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-white"
            >
              The Art of Luxury
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mb-6 text-gray-300"
            >
              Founded on principles of exceptional quality and design innovation, our boutique stands 
              as a testament to the enduring allure of luxury craftsmanship.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg mb-10 text-gray-300"
            >
              We collaborate with the world's most visionary designers and artisans to curate 
              collections that transcend trends and inspire connoisseurs.
            </motion.p>
            
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="#" 
              className="inline-block px-8 py-4 border border-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-gold))] text-sm uppercase tracking-wider font-medium transition-transform hover:scale-105"
            >
              Our Expertise
            </motion.a>
          </div>
          
          <div className="md:order-1 relative">
            <div className="aspect-w-4 aspect-h-5 rounded-lg overflow-hidden parallax">
              <motion.img 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.8 }}
                src={fashionImages.design1.about.image} 
                alt="Fashion designer at work" 
                className="w-full h-full object-cover parallax-layer" 
                data-depth="0.1" 
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute -bottom-10 -right-10 w-48 h-48 border-2 border-[hsl(var(--luxury-gold))] rounded-lg parallax-layer" 
              data-depth="0.2"
            />
            
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 0.2, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="absolute -top-10 -left-10 w-32 h-32 bg-[hsl(var(--design1-accent))] opacity-20 rounded-full parallax-layer" 
              data-depth="0.3"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
