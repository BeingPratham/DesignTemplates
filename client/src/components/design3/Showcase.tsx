import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight, ChevronLeft } from "lucide-react";

const products = [
  {
    id: 1,
    title: "Vintage Elegance",
    description: "Heritage designs reimagined with contemporary materials.",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000"
  },
  {
    id: 2,
    title: "Art Deco Revival",
    description: "Bold geometrical patterns celebrating the golden age of design.",
    image: "https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000"
  },
  {
    id: 3,
    title: "Modern Classic",
    description: "Timeless silhouettes with a contemporary twist.",
    image: "https://images.unsplash.com/photo-1551232864-3f0890e580d9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000"
  },
  {
    id: 4,
    title: "Parisian Couture",
    description: "Exquisite craftsmanship inspired by haute couture traditions.",
    image: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000"
  }
];

const Showcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextProduct = () => {
    setActiveIndex((prev) => (prev + 1) % products.length);
  };
  
  const prevProduct = () => {
    setActiveIndex((prev) => (prev - 1 + products.length) % products.length);
  };
  
  const currentProduct = products[activeIndex];
  
  return (
    <section 
      id="showcase" 
      ref={sectionRef}
      className="py-20 md:py-32 bg-[hsl(var(--luxury-cream))]"
    >
      <div className="container mx-auto px-4">
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.8 }}
            className="flex items-center mb-6"
          >
            <div className="h-px w-12 bg-[hsl(var(--design3-accent))] mr-4"></div>
            <span className="uppercase tracking-[0.25em] text-[hsl(var(--design3-accent))]">Our Collections</span>
          </motion.div>
          
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
              className="mb-6 md:mb-0"
            >
              <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-[hsl(var(--luxury-black))]">
                Distinguished <br />Collections
              </h2>
              <p className="text-gray-600 max-w-md">
                Each piece in our collection represents the culmination of artistry, heritage, and innovation.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex space-x-3"
            >
              <button 
                onClick={prevProduct}
                className="w-12 h-12 border border-[hsl(var(--design3-accent))] flex items-center justify-center hover:bg-[hsl(var(--design3-accent))] hover:text-white transition-colors"
                aria-label="Previous product"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button 
                onClick={nextProduct}
                className="w-12 h-12 border border-[hsl(var(--design3-accent))] flex items-center justify-center hover:bg-[hsl(var(--design3-accent))] hover:text-white transition-colors"
                aria-label="Next product"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            key={`image-${activeIndex}`}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative overflow-hidden">
              <img 
                src={currentProduct.image} 
                alt={currentProduct.title} 
                className="w-full h-auto object-cover aspect-[4/5]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[hsl(var(--luxury-black))/50]"></div>
            </div>
            
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="absolute bottom-8 left-8 right-8 text-white"
            >
              <span className="inline-block py-1 px-3 bg-[hsl(var(--design3-accent))] text-white text-xs uppercase tracking-wider mb-3">
                Featured
              </span>
              <h3 className="text-2xl font-playfair font-bold mb-2">{currentProduct.title}</h3>
              <p className="opacity-90">{currentProduct.description}</p>
            </motion.div>
          </motion.div>
          
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.1 + index * 0.1 }}
                  className={`group cursor-pointer ${activeIndex === index ? 'ring-2 ring-[hsl(var(--design3-accent))]' : ''}`}
                  onClick={() => setActiveIndex(index)}
                >
                  <div className="aspect-[4/3] overflow-hidden mb-4 relative">
                    <img 
                      src={product.image} 
                      alt={product.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {activeIndex === index && (
                      <div className="absolute inset-0 bg-[hsl(var(--design3-accent))/30"></div>
                    )}
                  </div>
                  <h4 className="text-lg font-medium mb-1">{product.title}</h4>
                  <p className="text-sm text-gray-600">{product.description}</p>
                </motion.div>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 border-t border-gray-200 pt-8"
            >
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-2xl font-playfair font-bold mb-2">View Full Collection</h3>
                  <p className="text-gray-600">Explore our complete range of exclusive pieces.</p>
                </div>
                <a 
                  href="#" 
                  className="inline-flex items-center justify-center w-14 h-14 bg-[hsl(var(--design3-accent))] text-white rounded-full hover:bg-[hsl(var(--design3-accent))/90] transition-colors"
                >
                  <ChevronRight className="h-6 w-6" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-4 text-center"
        >
          <div className="p-6 border border-gray-200">
            <span className="text-[hsl(var(--design3-accent))] font-playfair font-bold text-5xl">23</span>
            <span className="block text-sm uppercase tracking-wider mt-2">Years of Excellence</span>
          </div>
          
          <div className="p-6 border border-gray-200">
            <span className="text-[hsl(var(--design3-accent))] font-playfair font-bold text-5xl">14</span>
            <span className="block text-sm uppercase tracking-wider mt-2">Master Artisans</span>
          </div>
          
          <div className="p-6 border border-gray-200">
            <span className="text-[hsl(var(--design3-accent))] font-playfair font-bold text-5xl">3</span>
            <span className="block text-sm uppercase tracking-wider mt-2">Global Ateliers</span>
          </div>
          
          <div className="p-6 border border-gray-200">
            <span className="text-[hsl(var(--design3-accent))] font-playfair font-bold text-5xl">∞</span>
            <span className="block text-sm uppercase tracking-wider mt-2">Timeless Designs</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
