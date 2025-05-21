import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  ArrowRight, 
  MapPin, 
  Mail, 
  Phone, 
  Instagram, 
  Facebook, 
  Twitter 
} from "lucide-react";
import { sharedImages } from "../../lib/imageData";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-[hsl(var(--luxury-cream))] relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-[hsl(var(--luxury-black))] clip-path-slant"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <span className="inline-block px-4 py-1 rounded-full bg-[hsl(var(--design4-accent))/10] text-[hsl(var(--design4-accent))] text-sm font-medium mb-4">
              Connect With Us
            </span>
            
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6">
              Bespoke Consultations
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience our personalized approach to luxury. Schedule a consultation with our 
              specialists to discover how we can bring your vision to life.
            </p>
          </motion.div>
          
          <Card className="border-0 shadow-xl overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-[hsl(var(--luxury-black))] p-8 md:p-12"
              >
                <div className="h-full flex flex-col">
                  <h3 className="text-2xl font-playfair font-bold mb-6 text-white">Contact Information</h3>
                  <p className="text-gray-400 mb-12">
                    Reach out to us directly or schedule an appointment at one of our exclusive locations.
                  </p>
                  
                  <div className="space-y-8 mb-auto">
                    <div className="flex items-start">
                      <div className="bg-[hsl(var(--design4-accent))] rounded-full p-2 mr-4">
                        <MapPin className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Visit Us</h4>
                        <p className="text-gray-400">
                          420 Luxury Avenue<br />
                          New York, NY 10022
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[hsl(var(--design4-accent))] rounded-full p-2 mr-4">
                        <Mail className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Email Us</h4>
                        <p className="text-gray-400">clientservices@opulent.com</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="bg-[hsl(var(--design4-accent))] rounded-full p-2 mr-4">
                        <Phone className="h-5 w-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium mb-1">Call Us</h4>
                        <p className="text-gray-400">+1 (212) 555-0192</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-12 pt-8 border-t border-gray-800">
                    <h4 className="text-white font-medium mb-4">Follow Our Journey</h4>
                    <div className="flex space-x-4">
                      <a 
                        href="#" 
                        className="bg-white/10 hover:bg-[hsl(var(--design4-accent))] transition-colors p-2 rounded-full"
                        aria-label="Instagram"
                      >
                        <Instagram className="h-5 w-5 text-white" />
                      </a>
                      <a 
                        href="#" 
                        className="bg-white/10 hover:bg-[hsl(var(--design4-accent))] transition-colors p-2 rounded-full"
                        aria-label="Facebook"
                      >
                        <Facebook className="h-5 w-5 text-white" />
                      </a>
                      <a 
                        href="#" 
                        className="bg-white/10 hover:bg-[hsl(var(--design4-accent))] transition-colors p-2 rounded-full"
                        aria-label="Twitter"
                      >
                        <Twitter className="h-5 w-5 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <CardContent className="p-8 md:p-12">
                  <h3 className="text-2xl font-playfair font-bold mb-8">Send Us a Message</h3>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="firstName" className="text-sm font-medium mb-1 block">
                          First Name
                        </Label>
                        <Input 
                          id="firstName" 
                          className="border-gray-300 focus:border-[hsl(var(--design4-accent))] focus:ring-[hsl(var(--design4-accent))]" 
                        />
                      </div>
                      
                      <div>
                        <Label htmlFor="lastName" className="text-sm font-medium mb-1 block">
                          Last Name
                        </Label>
                        <Input 
                          id="lastName" 
                          className="border-gray-300 focus:border-[hsl(var(--design4-accent))] focus:ring-[hsl(var(--design4-accent))]" 
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-1 block">
                        Email Address
                      </Label>
                      <Input 
                        id="email" 
                        type="email" 
                        className="border-gray-300 focus:border-[hsl(var(--design4-accent))] focus:ring-[hsl(var(--design4-accent))]" 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="subject" className="text-sm font-medium mb-1 block">
                        Subject
                      </Label>
                      <Input 
                        id="subject" 
                        className="border-gray-300 focus:border-[hsl(var(--design4-accent))] focus:ring-[hsl(var(--design4-accent))]" 
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium mb-1 block">
                        Your Message
                      </Label>
                      <Textarea 
                        id="message" 
                        rows={5} 
                        className="border-gray-300 focus:border-[hsl(var(--design4-accent))] focus:ring-[hsl(var(--design4-accent))]" 
                      />
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <Checkbox id="newsletter" />
                      <div className="grid gap-1.5 leading-none">
                        <Label
                          htmlFor="newsletter"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Subscribe to newsletter
                        </Label>
                        <p className="text-sm text-gray-500">
                          Receive exclusive updates on new collections and events.
                        </p>
                      </div>
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="bg-[hsl(var(--design4-accent))] hover:bg-[hsl(var(--design4-accent))]/90 transition-colors w-full py-6 text-sm uppercase tracking-wider font-medium flex items-center justify-center"
                    >
                      Send Message <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </motion.div>
            </div>
          </Card>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-20"
          >
            <h3 className="text-2xl font-playfair font-bold mb-8 text-center">Our Showrooms</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="relative overflow-hidden rounded-md group cursor-pointer">
                <img 
                  src={sharedImages.contact} 
                  alt="New York Showroom" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--luxury-black))] to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-lg font-bold text-white">New York</h4>
                  <p className="text-white/80 text-sm">Flagship Store</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-md group cursor-pointer">
                <img 
                  src={sharedImages.team[0].image} 
                  alt="London Showroom" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--luxury-black))] to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-lg font-bold text-white">London</h4>
                  <p className="text-white/80 text-sm">European Headquarters</p>
                </div>
              </div>
              
              <div className="relative overflow-hidden rounded-md group cursor-pointer">
                <img 
                  src={sharedImages.team[1].image} 
                  alt="Tokyo Showroom" 
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--luxury-black))] to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-lg font-bold text-white">Tokyo</h4>
                  <p className="text-white/80 text-sm">Asian Flagship</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .clip-path-slant {
          clip-path: polygon(0 0, 100% 0, 100% 60%, 0 100%);
        }
      `}} />
    </section>
  );
};

export default Contact;
