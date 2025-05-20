import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ArrowRight, ArrowUpRight, Plus } from "lucide-react";

const categories = ["All", "Limited Edition", "Seasonal", "Bespoke"];

const products = [
  {
    id: 1,
    title: "Celestial Collection",
    description: "Avant-garde designs inspired by cosmic phenomena.",
    category: "Limited Edition",
    image: "https://images.unsplash.com/photo-1594969155368-f19235a826fc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000"
  },
  {
    id: 2,
    title: "Neo Baroque",
    description: "Reimagining classical elements through a contemporary lens.",
    category: "Seasonal",
    image: "https://images.unsplash.com/photo-1615312414738-aa6508144ca2?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000"
  },
  {
    id: 3,
    title: "Metamorphosis",
    description: "Transformative pieces that evolve with wear and time.",
    category: "Limited Edition",
    image: "https://images.unsplash.com/photo-1595951960408-a7259a6d8d00?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000"
  },
  {
    id: 4,
    title: "Architect's Dream",
    description: "Structural silhouettes inspired by iconic architectural marvels.",
    category: "Bespoke",
    image: "https://images.unsplash.com/photo-1542389087-4a2c86941c83?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&h=1000"
  }
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden rounded-md">
        <div className="aspect-[3/4] overflow-hidden">
          <motion.img
            src={product.image}
            alt={product.title}
            className="w-full h-full object-cover"
            animate={{ 
              scale: isHovered ? 1.05 : 1,
            }}
            transition={{ duration: 0.5 }}
          />
        </div>
        
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[hsl(var(--luxury-black))] to-transparent opacity-60"
          animate={{ opacity: isHovered ? 0.8 : 0.6 }}
          transition={{ duration: 0.3 }}
        ></motion.div>
        
        <div className="absolute inset-x-0 bottom-0 p-6">
          <div className="overflow-hidden">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
            >
              <span className="inline-block px-3 py-1 text-xs uppercase tracking-wider bg-[hsl(var(--design4-accent))] text-white rounded-full mb-2">
                {product.category}
              </span>
              <h3 className="text-xl font-bold text-white mb-2">{product.title}</h3>
              <p className="text-white/80 text-sm mb-4">{product.description}</p>
            </motion.div>
          </div>
          
          <AnimatePresence>
            {isHovered && (
              <motion.a
                href="#"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center text-[hsl(var(--design4-accent))] hover:text-white transition-colors"
              >
                Explore Collection <ArrowRight className="ml-2 h-4 w-4" />
              </motion.a>
            )}
          </AnimatePresence>
        </div>
        
        <motion.button
          className="absolute top-4 right-4 w-10 h-10 rounded-full bg-[hsl(var(--design4-accent))] flex items-center justify-center"
          animate={{ 
            scale: isHovered ? 1 : 0,
            opacity: isHovered ? 1 : 0
          }}
          transition={{ duration: 0.3 }}
        >
          <Plus className="h-5 w-5 text-white" />
        </motion.button>
      </div>
    </motion.div>
  );
};

const Showcase = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState("All");
  
  // Filter products based on selected category
  const filteredProducts = activeCategory === "All" 
    ? products 
    : products.filter(product => product.category === activeCategory);
  
  return (
    <section id="showcase" ref={sectionRef} className="py-20 md:py-32 bg-[hsl(var(--luxury-cream))]">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.6 }}
              className="inline-block px-4 py-1 rounded-full bg-[hsl(var(--design4-accent))/10] text-[hsl(var(--design4-accent))] text-sm font-medium mb-4"
            >
              Featured Collections
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl md:text-5xl font-playfair font-bold mb-4"
            >
              Visionary Designs
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-600 max-w-md"
            >
              Explore our boundary-pushing collections that redefine contemporary luxury through innovative materials and unexpected forms.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 md:mt-0"
          >
            <a 
              href="#" 
              className="group inline-flex items-center text-[hsl(var(--design4-accent))] hover:text-[hsl(var(--design4-accent))/80] transition-colors"
            >
              <span className="mr-2">View All Collections</span>
              <div className="w-8 h-8 rounded-full border border-[hsl(var(--design4-accent))] flex items-center justify-center group-hover:bg-[hsl(var(--design4-accent))] transition-colors">
                <ArrowUpRight className="h-4 w-4 group-hover:text-white transition-colors" />
              </div>
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-12"
        >
          <Tabs defaultValue="All" className="w-full" onValueChange={setActiveCategory}>
            <TabsList className="bg-transparent border-b border-gray-200 w-full flex justify-start overflow-x-auto">
              {categories.map((category) => (
                <TabsTrigger 
                  key={category} 
                  value={category}
                  className="px-4 py-2 font-medium data-[state=active]:text-[hsl(var(--design4-accent))] data-[state=active]:border-b-2 data-[state=active]:border-[hsl(var(--design4-accent))] rounded-none"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            
            <TabsContent value={activeCategory} className="mt-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="bg-[hsl(var(--luxury-black))] text-white p-8 md:p-12 rounded-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <h3 className="text-2xl md:text-3xl font-playfair font-bold mb-4">
                Exclusive Membership Program
              </h3>
              <p className="text-white/80 mb-6 max-w-2xl">
                Join our inner circle for early access to limited editions, private events, and personalized concierge services.
              </p>
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 bg-[hsl(var(--design4-accent))] text-white text-sm uppercase tracking-wider font-medium hover:bg-[hsl(var(--design4-accent))/90] transition-colors"
              >
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
            
            <div className="md:col-span-4 flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 bg-[hsl(var(--design4-accent))/30 rounded-full blur-lg"></div>
                <div className="relative w-24 h-24 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[hsl(var(--design4-accent))] to-[hsl(var(--design4-accent))/60] flex items-center justify-center">
                  <span className="font-playfair text-3xl md:text-4xl font-bold">OP</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
