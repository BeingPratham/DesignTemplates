import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "wouter";
import { useDesign } from "../contexts/DesignContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { designNumber, setDesignNumber, brandName } = useDesign();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Handle scrolling effect on navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Set design color for indicator dots
  const getDesignButtonClass = (num: number) => {
    const baseClass = "w-3 h-3 rounded-full transition-opacity duration-300";
    const isActive = designNumber === num ? "opacity-100" : "opacity-50";
    
    switch (num) {
      case 1:
        return `${baseClass} ${isActive} bg-[hsl(var(--design1-accent))]`;
      case 2:
        return `${baseClass} ${isActive} bg-[hsl(var(--design2-accent))]`;
      case 3:
        return `${baseClass} ${isActive} bg-[hsl(var(--design3-accent))]`;
      case 4:
        return `${baseClass} ${isActive} bg-[hsl(var(--design4-accent))]`;
      default:
        return baseClass;
    }
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  // Close mobile menu when changing design
  const handleDesignChange = (num: number) => {
    setDesignNumber(num);
    setMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white dark:bg-gray-900 shadow-md py-2" : "py-4"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="brand-logo">
            <Link href={`/design${designNumber}`}>
              <motion.span
                key={brandName}
                className="text-2xl font-playfair font-bold tracking-tight cursor-pointer"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                {brandName}
              </motion.span>
            </Link>
          </div>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-10 items-center">
          <a href="#home" className="nav-item text-sm uppercase tracking-widest font-medium hover:text-[hsl(var(--luxury-gold))] transition-colors">Home</a>
          <a href="#showcase" className="nav-item text-sm uppercase tracking-widest font-medium hover:text-[hsl(var(--luxury-gold))] transition-colors">Collections</a>
          <a href="#about" className="nav-item text-sm uppercase tracking-widest font-medium hover:text-[hsl(var(--luxury-gold))] transition-colors">About</a>
          <a href="#contact" className="nav-item text-sm uppercase tracking-widest font-medium hover:text-[hsl(var(--luxury-gold))] transition-colors">Contact</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-6">
          <div className="design-selector flex space-x-3">
            <button 
              onClick={() => handleDesignChange(1)} 
              className={getDesignButtonClass(1)}
              aria-label="Design 1"
            />
            <button 
              onClick={() => handleDesignChange(2)} 
              className={getDesignButtonClass(2)}
              aria-label="Design 2"
            />
            <button 
              onClick={() => handleDesignChange(3)} 
              className={getDesignButtonClass(3)}
              aria-label="Design 3"
            />
            <button 
              onClick={() => handleDesignChange(4)} 
              className={getDesignButtonClass(4)}
              aria-label="Design 4"
            />
          </div>
        </div>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden focus:outline-none" 
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>
      
      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-gray-900 absolute w-full shadow-lg"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              <a 
                href="#home" 
                className="py-2 text-sm uppercase tracking-widest font-medium hover:text-[hsl(var(--luxury-gold))] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </a>
              <a 
                href="#showcase" 
                className="py-2 text-sm uppercase tracking-widest font-medium hover:text-[hsl(var(--luxury-gold))] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Collections
              </a>
              <a 
                href="#about" 
                className="py-2 text-sm uppercase tracking-widest font-medium hover:text-[hsl(var(--luxury-gold))] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </a>
              <a 
                href="#contact" 
                className="py-2 text-sm uppercase tracking-widest font-medium hover:text-[hsl(var(--luxury-gold))] transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact
              </a>
              
              <div className="design-selector flex space-x-4 py-4">
                <button 
                  onClick={() => handleDesignChange(1)} 
                  className={getDesignButtonClass(1)}
                  aria-label="Design 1"
                />
                <button 
                  onClick={() => handleDesignChange(2)} 
                  className={getDesignButtonClass(2)}
                  aria-label="Design 2"
                />
                <button 
                  onClick={() => handleDesignChange(3)} 
                  className={getDesignButtonClass(3)}
                  aria-label="Design 3"
                />
                <button 
                  onClick={() => handleDesignChange(4)} 
                  className={getDesignButtonClass(4)}
                  aria-label="Design 4"
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
