import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ArrowRight } from "lucide-react";

const values = [
  {
    id: "innovation",
    title: "Innovation",
    content: "We relentlessly pursue groundbreaking techniques and novel materials that challenge conventional boundaries."
  },
  {
    id: "exclusivity",
    title: "Exclusivity",
    content: "Our limited-edition pieces ensure a truly unique experience for the most discerning clientele."
  },
  {
    id: "craftsmanship",
    title: "Craftsmanship",
    content: "Every creation embodies exceptional skill and meticulous attention to detail by our master artisans."
  },
  {
    id: "sustainability",
    title: "Sustainability",
    content: "We integrate eco-conscious practices throughout our creative process and supply chain."
  }
];

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  // Animated underline variant
  const underlineVariants = {
    hidden: { width: 0 },
    visible: { 
      width: "100%",
      transition: { duration: 0.8, ease: "easeInOut", delay: 0.2 }
    }
  };
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-[hsl(var(--luxury-black))] text-white relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[hsl(var(--design4-accent))/10] to-transparent"></div>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 0.1 } : { opacity: 0 }}
        transition={{ duration: 1 }}
        className="absolute top-1/3 left-1/4 w-64 h-64 rounded-full bg-[hsl(var(--design4-accent))/50] filter blur-3xl"
      ></motion.div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: -20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 rounded-full bg-[hsl(var(--design4-accent))/20] text-[hsl(var(--design4-accent))] text-sm font-medium mb-4"
          >
            Our Philosophy
          </motion.span>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-6 relative inline-block"
          >
            <span className="relative z-10">Redefining Luxury</span>
            <motion.div 
              className="absolute bottom-2 left-0 h-3 bg-[hsl(var(--design4-accent))/30 z-0" 
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={underlineVariants}
            ></motion.div>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-300 mb-16"
          >
            Opulent challenges traditional notions of luxury through rule-breaking designs that 
            merge artistic expression with functional excellence. Founded in 2010, our vision transcends 
            fleeting trends to create modern heirlooms that inspire and captivate.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-5"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-[hsl(var(--design4-accent))]/20 to-transparent rounded-lg blur-md"></div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-lg">
                <img 
                  src="https://images.unsplash.com/photo-1558454566-d527994acb5e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000" 
                  alt="Creative director at work" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--luxury-black))] to-transparent opacity-60"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold mb-2">Elara Deveraux</h3>
                  <p className="text-[hsl(var(--design4-accent))]">Founder & Creative Director</p>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 p-6 border border-[hsl(var(--design4-accent))/30 backdrop-blur-sm"
            >
              <p className="italic text-gray-300 mb-4">
                "Our mission is to create objects of desire that provoke emotion and challenge convention. 
                True luxury is found in the unexpected."
              </p>
              <div className="w-12 h-1 bg-[hsl(var(--design4-accent))]"></div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="md:col-span-7"
          >
            <h3 className="text-2xl font-playfair font-bold mb-8">Our Core Values</h3>
            
            <Accordion type="single" collapsible className="w-full">
              {values.map((value, index) => (
                <motion.div
                  key={value.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + (index * 0.1) }}
                >
                  <AccordionItem value={value.id} className="border-b border-gray-800">
                    <AccordionTrigger className="text-lg font-medium hover:text-[hsl(var(--design4-accent))]">
                      {value.title}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      {value.content}
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              ))}
            </Accordion>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <div className="text-4xl font-playfair font-bold text-[hsl(var(--design4-accent))] mb-3">12+</div>
                <p className="text-sm text-gray-300">International Design Awards</p>
              </div>
              
              <div className="p-6 bg-white/5 backdrop-blur-sm">
                <div className="text-4xl font-playfair font-bold text-[hsl(var(--design4-accent))] mb-3">28</div>
                <p className="text-sm text-gray-300">Countries With Exclusive Retailers</p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="mt-10"
            >
              <a 
                href="#" 
                className="inline-flex items-center group"
              >
                <span className="text-[hsl(var(--design4-accent))] group-hover:text-white transition-colors">
                  Discover Our Creative Process
                </span>
                <div className="ml-2 w-8 h-8 rounded-full border border-[hsl(var(--design4-accent))] flex items-center justify-center group-hover:bg-[hsl(var(--design4-accent))] transition-colors">
                  <ArrowRight className="h-4 w-4 group-hover:text-white transition-colors" />
                </div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
