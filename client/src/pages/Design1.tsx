import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/design1/Hero";
import Showcase from "../components/design1/Showcase";
import About from "../components/design1/About";
import Contact from "../components/design1/Contact";
import { initScrollAnimations, initMouseParallax } from "../lib/animations";

const Design1 = () => {
  useEffect(() => {
    // Initialize animations
    initScrollAnimations();
    initMouseParallax();
    
    // Update document title
    document.title = "LUXE - Luxury Redefined";
  }, []);

  return (
    <motion.div
      className="design1"
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

export default Design1;
