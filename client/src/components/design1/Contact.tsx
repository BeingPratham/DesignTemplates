import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Instagram, 
  Facebook, 
  Phone, 
  Mail, 
  MapPin,
  Clock,
  Send
} from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-[hsl(var(--luxury-cream))]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <motion.h4 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="text-[hsl(var(--design1-accent))] text-sm uppercase tracking-[0.3em] mb-3 font-montserrat"
            >
              Get In Touch
            </motion.h4>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-[hsl(var(--luxury-black))]"
            >
              Personalized Experience
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mb-10 text-gray-600"
            >
              Our dedicated concierge team is available to provide personalized guidance and expertise for your unique needs.
            </motion.p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-12">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <div className="flex items-center mb-2">
                  <MapPin className="w-5 h-5 mr-2 text-[hsl(var(--design1-accent))]" />
                  <h5 className="text-lg font-bold">Visit Our Flagship</h5>
                </div>
                <p className="text-gray-600 pl-7">
                  123 Luxury Avenue<br />
                  New York, NY 10001<br />
                  United States
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="flex items-center mb-2">
                  <Clock className="w-5 h-5 mr-2 text-[hsl(var(--design1-accent))]" />
                  <h5 className="text-lg font-bold">Opening Hours</h5>
                </div>
                <p className="text-gray-600 pl-7">
                  Monday - Friday: 10am - 8pm<br />
                  Saturday: 10am - 6pm<br />
                  Sunday: 12pm - 5pm
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <div className="flex items-center mb-2">
                  <Mail className="w-5 h-5 mr-2 text-[hsl(var(--design1-accent))]" />
                  <h5 className="text-lg font-bold">Contact</h5>
                </div>
                <p className="text-gray-600 pl-7">
                  Email: concierge@luxe.com<br />
                  <span className="flex items-center mt-1">
                    <Phone className="w-4 h-4 mr-1" /> +1 (212) 555-7890
                  </span>
                </p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <h5 className="text-lg font-bold mb-2">Follow Us</h5>
                <div className="flex space-x-4">
                  <a href="#" className="text-[hsl(var(--luxury-black))] hover:text-[hsl(var(--design1-accent))] transition-colors">
                    <Instagram className="w-6 h-6" />
                  </a>
                  <a href="#" className="text-[hsl(var(--luxury-black))] hover:text-[hsl(var(--design1-accent))] transition-colors">
                    <Facebook className="w-6 h-6" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <form className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-playfair font-bold mb-6">Request an Appointment</h3>
              
              <div className="mb-6">
                <Label htmlFor="name" className="block text-sm uppercase tracking-wide text-gray-700 mb-2">
                  Full Name
                </Label>
                <Input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--design1-accent))]" 
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="email" className="block text-sm uppercase tracking-wide text-gray-700 mb-2">
                  Email Address
                </Label>
                <Input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--design1-accent))]" 
                />
              </div>
              
              <div className="mb-6">
                <Label htmlFor="interest" className="block text-sm uppercase tracking-wide text-gray-700 mb-2">
                  Area of Interest
                </Label>
                <Select>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--design1-accent))]">
                    <SelectValue placeholder="Select an area of interest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ready-to-wear">Ready-to-Wear</SelectItem>
                    <SelectItem value="accessories">Accessories</SelectItem>
                    <SelectItem value="bespoke">Bespoke Services</SelectItem>
                    <SelectItem value="home">Home Collection</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div className="mb-8">
                <Label htmlFor="message" className="block text-sm uppercase tracking-wide text-gray-700 mb-2">
                  Your Message
                </Label>
                <Textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[hsl(var(--design1-accent))]" 
                />
              </div>
              
              <Button 
                type="submit" 
                className="w-full px-8 py-4 bg-[hsl(var(--luxury-black))] hover:bg-black text-white text-sm uppercase tracking-wider font-medium transition-transform hover:scale-105 flex items-center justify-center"
              >
                Submit Request <Send className="ml-2 h-4 w-4" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
