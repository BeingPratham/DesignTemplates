import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Clock, Mail, Phone, Instagram, Facebook } from "lucide-react";

const ContactInfo = ({ icon, title, children }: { icon: React.ReactNode, title: string, children: React.ReactNode }) => {
  return (
    <div className="flex items-start">
      <div className="bg-[hsl(var(--design2-accent))/10] p-3 rounded-full mr-4">
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-1">{title}</h3>
        {children}
      </div>
    </div>
  );
};

const Contact = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section id="contact" ref={sectionRef} className="py-20 md:py-32 bg-[hsl(var(--luxury-cream))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 bg-[hsl(var(--design2-accent))/20] text-[hsl(var(--design2-accent))] rounded-full text-sm tracking-wider mb-3"
          >
            CONNECT WITH US
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-6"
          >
            Bespoke Consultation
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 text-lg"
          >
            Our atelier specialists are available to provide personalized guidance for your unique requirements.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-2"
          >
            <Card className="overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8 bg-[hsl(var(--design2-accent))] text-white">
                  <h3 className="text-2xl font-playfair font-bold mb-6">Contact Information</h3>
                  <p className="mb-8 opacity-90">
                    Fill out the form and our team will get back to you within 24 hours.
                  </p>
                  
                  <div className="space-y-6">
                    <ContactInfo icon={<Phone className="h-5 w-5 text-[hsl(var(--design2-accent))]" />} title="Phone">
                      <p>+1 (212) 555-8970</p>
                    </ContactInfo>
                    
                    <ContactInfo icon={<Mail className="h-5 w-5 text-[hsl(var(--design2-accent))]" />} title="Email">
                      <p>appointments@atelier.com</p>
                    </ContactInfo>
                    
                    <ContactInfo icon={<MapPin className="h-5 w-5 text-[hsl(var(--design2-accent))]" />} title="Location">
                      <p>210 Fashion Avenue<br />New York, NY 10018</p>
                    </ContactInfo>
                    
                    <ContactInfo icon={<Clock className="h-5 w-5 text-[hsl(var(--design2-accent))]" />} title="Hours">
                      <p>Monday - Friday: 10am - 7pm<br />Saturday: By appointment</p>
                    </ContactInfo>
                  </div>
                  
                  <div className="mt-10 flex space-x-4">
                    <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a href="#" className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition-colors">
                      <Facebook className="h-5 w-5" />
                    </a>
                  </div>
                </div>
                
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-medium mb-1 block">
                        Full Name
                      </Label>
                      <Input id="name" className="w-full" />
                    </div>
                    
                    <div>
                      <Label htmlFor="email" className="text-sm font-medium mb-1 block">
                        Email Address
                      </Label>
                      <Input id="email" type="email" className="w-full" />
                    </div>
                    
                    <div>
                      <Label htmlFor="phone" className="text-sm font-medium mb-1 block">
                        Phone Number
                      </Label>
                      <Input id="phone" type="tel" className="w-full" />
                    </div>
                    
                    <div>
                      <Label htmlFor="message" className="text-sm font-medium mb-1 block">
                        How can we help you?
                      </Label>
                      <Textarea id="message" rows={4} className="w-full" />
                    </div>
                    
                    <Button type="submit" className="bg-[hsl(var(--design2-accent))] hover:bg-[hsl(var(--design2-accent))/90] text-white w-full">
                      Send Message
                    </Button>
                  </form>
                </CardContent>
              </div>
            </Card>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4">Our Services</h3>
                
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[hsl(var(--design2-accent))] mr-3" />
                    <div>
                      <h4 className="font-medium">Custom Design Consultation</h4>
                      <p className="text-gray-600 text-sm">Collaborate with our designers to create bespoke pieces.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[hsl(var(--design2-accent))] mr-3" />
                    <div>
                      <h4 className="font-medium">Private Shopping Experience</h4>
                      <p className="text-gray-600 text-sm">Exclusive after-hours appointments for a personalized selection.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[hsl(var(--design2-accent))] mr-3" />
                    <div>
                      <h4 className="font-medium">Tailoring & Alterations</h4>
                      <p className="text-gray-600 text-sm">Expert fitting and customization for the perfect fit.</p>
                    </div>
                  </li>
                  
                  <li className="flex items-start">
                    <div className="h-2 w-2 mt-2 rounded-full bg-[hsl(var(--design2-accent))] mr-3" />
                    <div>
                      <h4 className="font-medium">Collection Preview</h4>
                      <p className="text-gray-600 text-sm">Early access to upcoming seasonal collections.</p>
                    </div>
                  </li>
                </ul>
                
                <div className="mt-8">
                  <img 
                    src="https://images.unsplash.com/photo-1606292445447-61e67cb26c36?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&h=400" 
                    alt="Atelier workspace" 
                    className="w-full h-auto rounded-lg"
                  />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
