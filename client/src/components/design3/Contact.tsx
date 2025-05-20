import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Instagram, 
  Facebook, 
  Twitter, 
  Send 
} from "lucide-react";

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-[hsl(var(--luxury-cream))] relative">
      <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-[hsl(var(--luxury-black))] to-transparent opacity-5"></div>
      
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.8 }}
            className="flex items-center justify-center mb-6"
          >
            <div className="h-px w-12 bg-[hsl(var(--design3-accent))] mr-4"></div>
            <span className="uppercase tracking-[0.25em] text-[hsl(var(--design3-accent))]">Reach Out</span>
            <div className="h-px w-12 bg-[hsl(var(--design3-accent))] ml-4"></div>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-6"
          >
            Exclusive Consultation
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 text-lg"
          >
            Our client relations team is available to provide personalized assistance 
            and schedule private viewings of our collections.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-2 space-y-8"
          >
            <Card className="overflow-hidden border-0 shadow-lg">
              <CardContent className="p-8 bg-[hsl(var(--luxury-black))] text-white">
                <h3 className="text-2xl font-playfair font-bold mb-6 text-[hsl(var(--design3-accent))]">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 text-[hsl(var(--design3-accent))] mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold mb-1">Main Showroom</h4>
                      <p className="text-gray-300">
                        18 Rue Saint-Honoré<br />
                        75001 Paris, France
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 text-[hsl(var(--design3-accent))] mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-300">+33 1 42 60 70 80</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-[hsl(var(--design3-accent))] mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-300">clientele@maison.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 text-[hsl(var(--design3-accent))] mt-1 mr-4" />
                    <div>
                      <h4 className="font-semibold mb-1">Hours</h4>
                      <p className="text-gray-300">
                        Monday to Saturday: 10am - 7pm<br />
                        Sunday: By appointment only
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 pt-8 border-t border-gray-800">
                  <h4 className="font-semibold mb-4">Follow Us</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-gray-400 hover:text-[hsl(var(--design3-accent))] transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[hsl(var(--design3-accent))] transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-[hsl(var(--design3-accent))] transition-colors">
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="aspect-w-4 aspect-h-3 rounded-lg overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1527384028877-7f36d05d1463?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=600" 
                alt="Maison boutique interior" 
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <h3 className="text-2xl font-playfair font-bold mb-8">Request a Private Consultation</h3>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="firstName" className="text-sm font-medium mb-1 block">
                        First Name*
                      </Label>
                      <Input id="firstName" className="w-full" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="lastName" className="text-sm font-medium mb-1 block">
                        Last Name*
                      </Label>
                      <Input id="lastName" className="w-full" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-1 block">
                        Email Address*
                      </Label>
                      <Input id="email" type="email" className="w-full" required />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium mb-1 block">
                        Phone Number*
                      </Label>
                      <Input id="phone" type="tel" className="w-full" required />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="interest" className="text-sm font-medium mb-1 block">
                      Area of Interest*
                    </Label>
                    <Input id="interest" className="w-full" placeholder="e.g. Fine Jewelry, Ready-to-Wear, Home Decor" required />
                  </div>
                  
                  <div>
                    <Label htmlFor="message" className="text-sm font-medium mb-1 block">
                      Your Message
                    </Label>
                    <Textarea id="message" rows={5} className="w-full" placeholder="Please share any specific requirements or questions you may have" />
                  </div>
                  
                  <div className="flex items-center">
                    <input 
                      type="checkbox" 
                      id="newsletter" 
                      className="h-4 w-4 rounded border-gray-300 text-[hsl(var(--design3-accent))] focus:ring-[hsl(var(--design3-accent))]"
                    />
                    <label htmlFor="newsletter" className="ml-2 block text-sm text-gray-600">
                      Subscribe to our newsletter for exclusive invitations and collection previews
                    </label>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full px-8 py-4 bg-[hsl(var(--design3-accent))] hover:bg-[hsl(var(--design3-accent))/90] text-white text-sm uppercase tracking-wider font-medium flex items-center justify-center"
                  >
                    Submit Inquiry <Send className="ml-2 h-4 w-4" />
                  </Button>
                  
                  <p className="text-center text-xs text-gray-500 mt-4">
                    By submitting this form, you agree to our privacy policy and terms of service.
                  </p>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl font-playfair font-bold mb-6">Global Presence</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div>
              <h4 className="font-bold text-[hsl(var(--design3-accent))] mb-2">Paris</h4>
              <p className="text-gray-600">18 Rue Saint-Honoré<br />75001 Paris, France</p>
            </div>
            
            <div>
              <h4 className="font-bold text-[hsl(var(--design3-accent))] mb-2">Milan</h4>
              <p className="text-gray-600">Via Montenapoleone, 8<br />20121 Milan, Italy</p>
            </div>
            
            <div>
              <h4 className="font-bold text-[hsl(var(--design3-accent))] mb-2">New York</h4>
              <p className="text-gray-600">687 Fifth Avenue<br />New York, NY 10022, USA</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
