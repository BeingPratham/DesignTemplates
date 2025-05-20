import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/design2/Hero";
import Showcase from "../components/design2/Showcase";
import About from "../components/design2/About";
import Contact from "../components/design2/Contact";
import { initScrollAnimations, initMouseParallax } from "../lib/animations";

const Design2 = () => {
  useEffect(() => {
    // Initialize animations
    initScrollAnimations();
    initMouseParallax();
    
    // Update document title
    document.title = "ATELIER - Luxury Craftsmanship";
  }, []);

  return (
    <motion.div
      className="design2"
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

export default Design2;
