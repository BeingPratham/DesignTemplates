import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/design4/Hero";
import Showcase from "../components/design4/Showcase";
import About from "../components/design4/About";
import Contact from "../components/design4/Contact";
import { initScrollAnimations, initMouseParallax } from "../lib/animations";

const Design4 = () => {
  useEffect(() => {
    // Initialize animations
    initScrollAnimations();
    initMouseParallax();
    
    // Update document title
    document.title = "OPULENT - Distinctive Luxury";
  }, []);

  return (
    <motion.div
      className="design4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Showcase />
      <About />
      <Contact />
    </motion.div>
  );
};

export default Design4;
