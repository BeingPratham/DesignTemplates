import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Star } from "lucide-react";

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-[hsl(var(--luxury-black))] text-white relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[hsl(var(--luxury-cream))] to-transparent opacity-10"></div>
      <div className="absolute bottom-0 right-0 w-1/3 h-full bg-[hsl(var(--design3-accent))] opacity-5"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8 }}
              className="flex items-center mb-6"
            >
              <div className="h-px w-12 bg-[hsl(var(--design3-accent))] mr-4"></div>
              <span className="uppercase tracking-[0.25em] text-[hsl(var(--design3-accent))]">Our Legacy</span>
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-white"
            >
              Timeless Tradition <span className="text-[hsl(var(--design3-accent))]">Refined</span>
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg mb-6 text-gray-300"
            >
              Founded in 2000, Maison emerged from a vision to preserve the centuries-old traditions 
              of exceptional craftsmanship while embracing innovative techniques.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg mb-10 text-gray-300"
            >
              Each piece in our collection tells a story – a narrative of heritage, expertise, and 
              artistic vision that transcends fleeting trends and stands as a testament to enduring luxury.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex space-x-4"
            >
              {[1, 2, 3, 4, 5].map((_, index) => (
                <Star 
                  key={index} 
                  className="h-6 w-6 text-[hsl(var(--design3-accent))]" 
                  fill="currentColor"
                />
              ))}
            </motion.div>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4 text-gray-400 italic"
            >
              "The epitome of sophistication and masterful craftsmanship."
              <span className="block mt-2 text-sm font-semibold text-white">— Vogue Magazine</span>
            </motion.p>
          </div>
          
          <div className="md:col-span-7 lg:col-span-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="relative"
              >
                <div className="aspect-[3/4] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1530653333484-8e3c8a2b5ea8?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&h=900" 
                    alt="Craftsman working" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-[hsl(var(--luxury-black))/90] border-l-4 border-[hsl(var(--design3-accent))]">
                  <h3 className="text-lg font-bold mb-2">Expert Artisans</h3>
                  <p className="text-sm text-gray-300">Each craftsperson specializes in traditional techniques refined over decades.</p>
                </div>
              </motion.div>
              
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="relative"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1621886292650-320c50ce7b27?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600" 
                      alt="Premium materials" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[hsl(var(--luxury-black))/90] border-l-4 border-[hsl(var(--design3-accent))]">
                    <h3 className="text-lg font-bold mb-1">Rare Materials</h3>
                    <p className="text-sm text-gray-300">Sourced from the finest suppliers worldwide.</p>
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="relative"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1581974944026-5d6ed762f617?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600" 
                      alt="Design studio" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[hsl(var(--luxury-black))/90] border-l-4 border-[hsl(var(--design3-accent))]">
                    <h3 className="text-lg font-bold mb-1">Design Excellence</h3>
                    <p className="text-sm text-gray-300">Where heritage meets contemporary vision.</p>
                  </div>
                </motion.div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-8 pt-8 border-t border-gray-800"
            >
              <a 
                href="#" 
                className="inline-block px-8 py-4 border border-[hsl(var(--design3-accent))] text-[hsl(var(--design3-accent))] text-sm uppercase tracking-wider font-medium hover:bg-[hsl(var(--design3-accent))] hover:text-white transition-colors"
              >
                Discover Our Process
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
