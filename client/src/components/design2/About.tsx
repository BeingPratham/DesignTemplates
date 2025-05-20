import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { 
  Leaf, 
  Award, 
  HeartHandshake, Axis3d
} from "lucide-react";

const features = [
  {
    icon: <Leaf className="h-6 w-6 text-white" />,
    title: "Sustainable",
    description: "Ethically sourced materials and eco-conscious production methods."
  },
  {
    icon: <Award className="h-6 w-6 text-white" />,
    title: "Excellence",
    description: "Uncompromising quality standards in every handcrafted piece."
  },
  {
    icon: <HeartHandshake className="h-6 w-6 text-white" />,
    title: "Fair Trade",
    description: "Supporting artisan communities through equitable partnerships."
  },
  {
    icon: <Axis3d className="h-6 w-6 text-white" />,
    title: "Innovative",
    description: "Pushing boundaries with pioneering design techniques."
  }
];

const Feature = ({ feature, index }: { feature: typeof features[0], index: number }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 + (index * 0.1) }}
      className="flex flex-col items-center p-6"
    >
      <div className="w-14 h-14 bg-[hsl(var(--design2-accent))] rounded-full flex items-center justify-center mb-4 shadow-lg">
        {feature.icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
      <p className="text-gray-600 text-center">{feature.description}</p>
    </motion.div>
  );
};

const About = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[hsl(var(--design2-accent))/5]" />
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-[hsl(var(--luxury-cream))/50] rounded-tr-full" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-xl">
              <div className="aspect-w-4 aspect-h-5">
                <img 
                  src="https://images.unsplash.com/photo-1541348263662-e068662d82af?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000" 
                  alt="Artisan craftsmanship" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -bottom-10 -right-10 bg-white p-6 shadow-lg rounded-lg max-w-xs"
            >
              <Badge className="bg-[hsl(var(--design2-accent))] mb-2">Our Commitment</Badge>
              <p className="text-sm text-gray-600 italic">
                "Every stitch represents our commitment to preserving traditional craftsmanship while embracing sustainable innovation."
              </p>
              <p className="mt-2 text-sm font-semibold">— Founder & Creative Director</p>
            </motion.div>
          </motion.div>
          
          <div>
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 bg-[hsl(var(--design2-accent))/20] text-[hsl(var(--design2-accent))] rounded-full text-sm tracking-wider mb-4"
            >
              OUR STORY
            </motion.span>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-playfair font-bold mb-8 text-[hsl(var(--luxury-black))]"
            >
              The Artisan's Journey
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg mb-6 text-gray-600"
            >
              Established in 1998, Atelier began as a small workshop dedicated to preserving traditional craftsmanship techniques passed down through generations.
            </motion.p>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-lg mb-10 text-gray-600"
            >
              Today, we blend time-honored methods with innovative, sustainable practices to create pieces that stand as testaments to both heritage and forward-thinking design philosophy.
            </motion.p>
            
            <motion.a 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              href="#" 
              className="inline-block px-8 py-4 bg-[hsl(var(--design2-accent))] text-white text-sm uppercase tracking-wider font-medium rounded-sm hover:bg-[hsl(var(--design2-accent))/90] transition-colors"
            >
              Our Process
            </motion.a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-white rounded-xl p-8 shadow-lg relative">
          {features.map((feature, index) => (
            <Feature key={index} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
