import React from "react";
import { useDesign } from "../contexts/DesignContext";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Instagram, Facebook, Twitter, Linkedin, ArrowRight } from "lucide-react";

const Footer = () => {
  const { brandName, designNumber } = useDesign();

  // Function to get accent color class based on current design
  const getAccentColor = () => {
    switch (designNumber) {
      case 1: return "hover:text-[hsl(var(--design1-accent))]";
      case 2: return "hover:text-[hsl(var(--design2-accent))]";
      case 3: return "hover:text-[hsl(var(--design3-accent))]";
      case 4: return "hover:text-[hsl(var(--design4-accent))]";
      default: return "hover:text-[hsl(var(--luxury-gold))]";
    }
  };

  return (
    <footer className="py-16 bg-[hsl(var(--luxury-black))] text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-playfair font-bold mb-6">{brandName}</h3>
            <p className="text-gray-400 mb-8 max-w-md">
              We curate exceptional pieces that embody the pinnacle of luxury craftsmanship, 
              connecting discerning clients with the world's most visionary designers.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`text-gray-400 transition-colors ${getAccentColor()}`} aria-label="Instagram">
                <Instagram />
              </a>
              <a href="#" className={`text-gray-400 transition-colors ${getAccentColor()}`} aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className={`text-gray-400 transition-colors ${getAccentColor()}`} aria-label="Linkedin">
                <Linkedin />
              </a>
              <a href="#" className={`text-gray-400 transition-colors ${getAccentColor()}`} aria-label="Twitter">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#showcase" className={`text-gray-400 transition-colors ${getAccentColor()}`}>
                  Collections
                </a>
              </li>
              <li>
                <a href="#about" className={`text-gray-400 transition-colors ${getAccentColor()}`}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className={`text-gray-400 transition-colors ${getAccentColor()}`}>
                  Services
                </a>
              </li>
              <li>
                <a href="#" className={`text-gray-400 transition-colors ${getAccentColor()}`}>
                  Lookbook
                </a>
              </li>
              <li>
                <a href="#contact" className={`text-gray-400 transition-colors ${getAccentColor()}`}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-bold mb-6">Newsletter</h4>
            <p className="text-gray-400 mb-4">
              Subscribe to receive updates on new collections and exclusive events.
            </p>
            <form className="flex">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-gray-800 text-white rounded-l-md focus:outline-none border-gray-700 focus:ring-0 focus:border-gray-600" 
              />
              <Button 
                type="submit" 
                className="px-4 py-3 bg-[hsl(var(--luxury-gold))] text-[hsl(var(--luxury-black))] rounded-r-md hover:bg-[hsl(var(--luxury-gold))/90]"
              >
                <ArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} {brandName}. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className={`transition-colors ${getAccentColor()}`}>
              Privacy Policy
            </a>
            <a href="#" className={`transition-colors ${getAccentColor()}`}>
              Terms of Service
            </a>
            <a href="#" className={`transition-colors ${getAccentColor()}`}>
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
