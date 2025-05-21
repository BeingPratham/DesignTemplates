import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import ThreeScene from "../ThreeModel";
import { fashionImages } from "../../lib/imageData";

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });

  // Image and text animation variants with fixed easing
  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 1.2,
        ease: "easeOut"
      }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="min-h-screen relative overflow-hidden"
    >
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-[hsl(var(--design2-accent))/10] to-[hsl(var(--luxury-cream))]" />
      
      <div className="container mx-auto px-4 relative z-10 h-screen flex items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <motion.span
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, x: -20 },
                visible: { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.6 }
                }
              }}
              className="inline-block px-4 py-1 bg-[hsl(var(--design2-accent))/20] text-[hsl(var(--design2-accent))] rounded-full text-sm tracking-wider mb-6"
            >
              SUSTAINABLE LUXURY
            </motion.span>
            
            <motion.h1
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { 
                    staggerChildren: 0.1,
                    delayChildren: 0.1
                  }
                }
              }}
              className="text-5xl md:text-7xl font-playfair font-bold mb-8 text-[hsl(var(--luxury-black))]"
            >
              <motion.span
                variants={textVariants}
                className="block"
              >
                Artisanal
              </motion.span>
              <motion.span
                variants={textVariants}
                className="block"
              >
                Excellence
              </motion.span>
            </motion.h1>
            
            <motion.p
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { 
                  opacity: 1, 
                  y: 0,
                  transition: { 
                    duration: 0.8,
                    delay: 0.4
                  }
                }
              }}
              className="text-lg mb-10 text-gray-600 max-w-md"
            >
              Discover our meticulously crafted collection where timeless elegance meets sustainable innovation.
            </motion.p>
            
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: { 
                  opacity: 1,
                  transition: { 
                    staggerChildren: 0.2,
                    delayChildren: 0.6
                  }
                }
              }}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.4 }
                  }
                }}
                href="#showcase"
                className="px-8 py-4 bg-[hsl(var(--design2-accent))] text-white text-sm uppercase tracking-wider font-medium transition-all hover:bg-[hsl(var(--design2-accent))/90] hover:shadow-lg text-center sm:text-left rounded-sm"
              >
                View Collection
              </motion.a>
              
              <motion.a
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { 
                    opacity: 1, 
                    y: 0,
                    transition: { duration: 0.4 }
                  }
                }}
                href="#about"
                className="px-8 py-4 border border-[hsl(var(--design2-accent))] text-[hsl(var(--design2-accent))] text-sm uppercase tracking-wider font-medium transition-all hover:bg-[hsl(var(--design2-accent))/10] text-center sm:text-left rounded-sm"
              >
                Our Process
              </motion.a>
            </motion.div>
          </div>
          
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={imageVariants}
            className="relative hidden md:block"
          >
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--design2-accent))/30] to-transparent z-10" />
              <img
                src={fashionImages.design2.hero.main}
                alt="Artisanal bohemian fashion"
                className="w-full h-auto"
              />
            </div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="absolute -bottom-16 -left-16 w-40 h-40 rounded-full border-2 border-[hsl(var(--design2-accent))] parallax-layer overflow-hidden"
              data-depth="0.4"
            >
              <img 
                src={fashionImages.design2.hero.secondary} 
                alt="Artisanal design detail" 
                className="w-full h-full object-cover rounded-full"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="absolute -top-10 -right-10 bg-white p-6 rounded-lg shadow-lg"
            >
              <span className="block text-sm text-gray-500 mb-1">Design Collection</span>
              <span className="block text-xl font-playfair font-bold">Spring/Summer</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[hsl(var(--luxury-cream))] to-transparent"
      />
    </section>
  );
};

export default Hero;
