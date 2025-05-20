import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import ThreeScene from "../ThreeModel";
import { ArrowDownCircle } from "lucide-react";

const Hero = () => {
  const heroRef = useRef(null);
  const isInView = useInView(heroRef, { once: true });
  const controls = useAnimation();
  
  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);
  
  // Animation variants for staggered animations
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.17, 0.55, 0.55, 1] }
    }
  };

  const textRevealVariants = {
    hidden: { width: "0%" },
    visible: { 
      width: "100%",
      transition: { duration: 1.2, ease: [0.17, 0.55, 0.55, 1], delay: 0.5 }
    }
  };
  
  return (
    <section 
      id="home" 
      ref={heroRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-[hsl(var(--luxury-black))] to-[hsl(var(--design4-accent))/20]"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-[hsl(var(--design4-accent))/5] backdrop-blur-3xl rounded-bl-full"></div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.15 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[hsl(var(--design4-accent))/30] filter blur-3xl"
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10 h-screen flex flex-col justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial="hidden"
            animate={controls}
            variants={containerVariants}
            className="order-2 md:order-1"
          >
            <div className="overflow-hidden mb-4">
              <motion.div variants={textRevealVariants} className="w-32 h-1 bg-[hsl(var(--design4-accent))]"></motion.div>
            </div>
            
            <motion.h4 
              variants={itemVariants}
              className="text-[hsl(var(--design4-accent))] text-sm uppercase tracking-[0.3em] mb-4 font-medium"
            >
              Distinctive Luxury
            </motion.h4>
            
            <div className="overflow-hidden">
              <motion.h1 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-playfair font-bold mb-6 text-white"
              >
                Bold<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[hsl(var(--design4-accent))] to-white">
                  Innovation
                </span>
              </motion.h1>
            </div>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-300 mb-10 max-w-lg"
            >
              Experience luxury that defies convention, where visionary design meets uncompromising quality 
              in every meticulously crafted piece.
            </motion.p>
            
            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6"
            >
              <a 
                href="#showcase" 
                className="relative overflow-hidden group px-8 py-4 bg-transparent text-white text-sm uppercase tracking-wider font-medium border border-[hsl(var(--design4-accent))] hover:text-[hsl(var(--luxury-black))] transition-colors duration-300 inline-flex items-center justify-center"
              >
                <span className="relative z-10">Discover Collections</span>
                <div className="absolute inset-0 bg-[hsl(var(--design4-accent))] transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </a>
              
              <a 
                href="#about" 
                className="relative overflow-hidden group px-8 py-4 bg-white/5 backdrop-blur-sm text-white text-sm uppercase tracking-wider font-medium hover:bg-white/10 transition-all inline-flex items-center justify-center"
              >
                Our Philosophy
                <div className="absolute bottom-0 left-0 w-0 h-0.5 bg-[hsl(var(--design4-accent))] group-hover:w-full transition-all duration-300"></div>
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="order-1 md:order-2 mb-10 md:mb-0 relative z-0"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[hsl(var(--design4-accent))/30] to-transparent rounded-full blur-lg"></div>
              <div className="h-[450px] relative">
                <ThreeScene
                  backgroundColor="transparent"
                  className="w-full h-full rounded-full overflow-hidden"
                  autoRotate={true}
                />
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.5 }}
              className="absolute -bottom-10 right-10 bg-[hsl(var(--luxury-black))/80 backdrop-blur-md p-4 rounded-lg border border-[hsl(var(--design4-accent))/50]"
            >
              <span className="block text-white text-sm font-medium">New Collection</span>
              <span className="block text-[hsl(var(--design4-accent))] font-bold">AVANT 2023</span>
            </motion.div>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.6, 
            delay: 2,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 1
          }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white"
        >
          <ArrowDownCircle className="h-10 w-10 text-[hsl(var(--design4-accent))]" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
