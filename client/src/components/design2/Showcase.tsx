import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fashionImages } from "../../lib/imageData";
import { 
  ChevronRight, 
  Eye, 
  ShoppingBag
} from "lucide-react";

const categories = ["All", "Apparel", "Accessories", "Footwear", "Home"];

// Get the collection data from our image library
const collectionItems = fashionImages.design2.showcase;

// Create product data with categories
const products = [
  {
    id: 1,
    title: "Handcrafted Collection",
    price: "$1,250",
    category: "Apparel",
    image: collectionItems[0].image
  },
  {
    id: 2,
    title: "Sustainable Series",
    price: "$850",
    category: "Accessories",
    image: collectionItems[1].image
  },
  {
    id: 3,
    title: "Limited Editions",
    price: "$1,680",
    category: "Apparel",
    image: collectionItems[2].image
  },
  {
    id: 4,
    title: "Recycled Materials Set",
    price: "$620",
    category: "Accessories",
    image: "https://images.unsplash.com/photo-1550614000-4895a10e1bfd?auto=format&fit=crop&w=800"
  }
];

const ProductCard = ({ product, index }: { product: typeof products[0], index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="overflow-hidden rounded-lg shadow-lg aspect-[4/5]">
        <motion.img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover"
          animate={{ 
            scale: isHovered ? 1.05 : 1,
          }}
          transition={{ duration: 0.4 }}
        />
      </div>
      
      <AnimatePresence>
        {isHovered && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6 rounded-lg"
          >
            <div className="flex justify-between items-end">
              <div>
                <h3 className="text-white font-bold text-lg">{product.title}</h3>
                <p className="text-white/80 font-semibold">{product.price}</p>
              </div>
              <div className="flex space-x-2">
                <button className="w-10 h-10 flex items-center justify-center bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors">
                  <Eye className="w-5 h-5 text-white" />
                </button>
                <button className="w-10 h-10 flex items-center justify-center bg-[hsl(var(--design2-accent))] rounded-full hover:bg-[hsl(var(--design2-accent))/80] transition-colors">
                  <ShoppingBag className="w-5 h-5 text-white" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <div className="mt-4 px-2">
        <h3 className="font-medium text-lg">{product.title}</h3>
        <div className="flex justify-between items-center">
          <p className="text-gray-600">{product.price}</p>
          <p className="text-sm text-[hsl(var(--design2-accent))]">{product.category}</p>
        </div>
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
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6 }}
            className="inline-block px-4 py-1 bg-[hsl(var(--design2-accent))/20] text-[hsl(var(--design2-accent))] rounded-full text-sm tracking-wider mb-3"
          >
            SIGNATURE PIECES
          </motion.span>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-[hsl(var(--luxury-black))]"
          >
            Handcrafted Collection
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-2xl mx-auto text-gray-600 text-lg mb-12"
          >
            Every piece represents the perfect balance of ethical sourcing, masterful craftsmanship, and timeless design.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <Tabs>
                <TabsList>
              <TabsTrigger
                key={category}
                value={category}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-[hsl(var(--design2-accent))] text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </TabsTrigger>
              </TabsList>
              </Tabs>
            ))}
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a href="#" className="inline-flex items-center text-[hsl(var(--design2-accent))] font-medium hover:underline">
            View Full Collection <ChevronRight className="ml-1 h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
