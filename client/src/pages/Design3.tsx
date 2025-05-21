import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Hero from "../components/design3/Hero";
import Showcase from "../components/design3/Showcase";
import About from "../components/design3/About";
import Contact from "../components/design3/Contact";
import { initScrollAnimations, initMouseParallax } from "../lib/animations";
import Navbar from "@/components/Navbar";

const Design3 = () => {
  useEffect(() => {
    // Initialize animations
    initScrollAnimations();
    initMouseParallax();
    
    // Update document title
    document.title = "MAISON - Timeless Elegance";
  }, []);

  return (
    <motion.div
      className="design3"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar/>
      <Hero />
      <Showcase />
      <About />
      <Contact />
    </motion.div>
  );
};

export default Design3;
