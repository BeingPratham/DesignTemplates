import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const products = [
  {
    id: 1,
    title: "Avant-Garde",
    description: "Contemporary pieces that push the boundaries of design.",
    image: "https://images.unsplash.com/photo-1549388604-817d15aa0110?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
  },
  {
    id: 2,
    title: "Heritage",
    description: "Timeless classics reimagined for the modern connoisseur.",
    image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
  },
  {
    id: 3,
    title: "Artisanal",
    description: "Handcrafted pieces with unparalleled attention to detail.",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
  },
  {
    id: 4,
    title: "Bespoke",
    description: "Custom creations tailored to discerning tastes.",
    image: "https://images.unsplash.com/photo-1489987707025-afc232f7ea0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
  }
];

const ProductItem = ({ product, index }: { product: typeof products[0], index: number }) => {
  const itemRef = useRef(null);
  const isInView = useInView(itemRef, { once: true, margin: "-100px" });
  
  return (
    <motion.div 
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="design-showcase-item rounded-lg overflow-hidden bg-white shadow-lg"
    >
      <div className="h-80 overflow-hidden product-card-3d">
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform hover:scale-105" 
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-playfair font-bold mb-2">{product.title}</h3>
        <p className="text-gray-600 mb-4">{product.description}</p>
        <a href="#" className="text-[hsl(var(--design1-accent))] font-medium hover:underline inline-flex items-center">
          Discover <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
        </a>
      </div>
    </motion.div>
  );
};

const Showcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  
  return (
    <section id="showcase" ref={sectionRef} className="py-20 md:py-32 bg-[hsl(var(--luxury-cream))]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.h4 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="text-[hsl(var(--design1-accent))] text-sm uppercase tracking-[0.3em] mb-3 font-montserrat"
          >
            Our Collections
          </motion.h4>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-[hsl(var(--luxury-black))]"
          >
            Curated Elegance
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 text-lg"
          >
            Each piece is meticulously selected to reflect the pinnacle of craftsmanship and design innovation.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <ProductItem key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Showcase;
