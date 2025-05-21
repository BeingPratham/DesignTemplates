// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Link } from "wouter";
// import { useDesign } from "../contexts/DesignContext";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const { designNumber, setDesignNumber, brandName } = useDesign();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const getDesignButtonClass = (num: number) => {
//     const baseClass = "w-3 h-3 rounded-full transition-opacity duration-300";
//     const isActive = designNumber === num ? "opacity-100" : "opacity-50";

//     switch (num) {
//       case 1:
//         return `${baseClass} ${isActive} bg-[hsl(var(--design1-accent))]`;
//       case 2:
//         return `${baseClass} ${isActive} bg-[hsl(var(--design2-accent))]`;
//       case 3:
//         return `${baseClass} ${isActive} bg-[hsl(var(--design3-accent))]`;
//       case 4:
//         return `${baseClass} ${isActive} bg-[hsl(var(--design4-accent))]`;
//       default:
//         return baseClass;
//     }
//   };

//   const toggleMobileMenu = () => {
//     setMobileMenuOpen(!mobileMenuOpen);
//   };

//   const handleDesignChange = (num: number) => {
//     setDesignNumber(num);
//     setMobileMenuOpen(false);
//   };

//   return (
//     <motion.nav
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-white dark:bg-gray-900 shadow-md py-2"
//           : "py-4 bg-white dark:bg-gray-900"
//       }`}
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5, ease: "linear" }}
//     >
//       <div className="container mx-auto px-4 flex justify-between items-center">
//         <div className="flex items-center">
//           <div className="brand-logo">
//             <Link href={`/design${designNumber}`}>
//               <motion.span
//                 key={brandName}
//                 className="text-2xl font-playfair font-bold tracking-tight cursor-pointer text-orange-600 dark:text-orange-400"
//                 initial={{ opacity: 0, y: 10 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: 0 }}
//                 transition={{ duration: 0.3, ease: "easeOut" }}
//               >
//                 {brandName}
//               </motion.span>
//             </Link>
//           </div>
//         </div>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex space-x-10 items-center">
//           {["Home", "Collections", "About", "Contact"].map((label) => (
//             <a
//               key={label}
//               href={`#${label.toLowerCase()}`}
//               className="nav-item text-sm uppercase tracking-widest font-medium text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-colors"
//             >
//               {label}
//             </a>
//           ))}
//         </div>

//         <div className="hidden md:flex items-center space-x-6">
//           <div className="design-selector flex space-x-3">
//             {[1, 2, 3, 4].map((num) => (
//               <button
//                 key={num}
//                 onClick={() => handleDesignChange(num)}
//                 className={getDesignButtonClass(num)}
//                 aria-label={`Design ${num}`}
//               />
//             ))}
//           </div>
//         </div>

//         {/* Mobile menu button */}
//         <button
//           className="md:hidden focus:outline-none text-orange-600 dark:text-orange-400"
//           onClick={toggleMobileMenu}
//           aria-label="Toggle mobile menu"
//         >
//           {mobileMenuOpen ? (
//             <X className="w-6 h-6" />
//           ) : (
//             <Menu className="w-6 h-6" />
//           )}
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       <AnimatePresence>
//         {mobileMenuOpen && (
//           <motion.div
//             className="md:hidden bg-white dark:bg-gray-900 absolute w-full shadow-lg"
//             initial={{ height: 0, opacity: 0 }}
//             animate={{ height: "auto", opacity: 1 }}
//             exit={{ height: 0, opacity: 0 }}
//             transition={{ duration: 0.3 }}
//           >
//             <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
//               {["Home", "Collections", "About", "Contact"].map((label) => (
//                 <a
//                   key={label}
//                   href={`#${label.toLowerCase()}`}
//                   className="py-2 text-sm uppercase tracking-widest font-medium text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-colors"
//                   onClick={() => setMobileMenuOpen(false)}
//                 >
//                   {label}
//                 </a>
//               ))}

//               <div className="design-selector flex space-x-4 py-4">
//                 {[1, 2, 3, 4].map((num) => (
//                   <button
//                     key={num}
//                     onClick={() => handleDesignChange(num)}
//                     className={getDesignButtonClass(num)}
//                     aria-label={`Design ${num}`}
//                   />
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </motion.nav>
//   );
// };

// export default Navbar;


import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { useDesign } from "../contexts/DesignContext";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const { designNumber, setDesignNumber, brandName } = useDesign();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const handleDesignChange = (num: number) => {
    setDesignNumber(num);
    setMobileMenuOpen(false);
  };

  const getDesignButtonClass = (num: number) => {
    const baseClass = "w-3 h-3 rounded-full transition-opacity duration-300";
    const isActive = designNumber === num ? "opacity-100" : "opacity-50";

    switch (num) {
      case 1:
        return `${baseClass} ${isActive} bg-[hsl(var(--design1-accent))]`;
      case 2:
        return `${baseClass} ${isActive} bg-[hsl(var(--design2-accent))]`;
      case 3:
        return `${baseClass} ${isActive} bg-[hsl(var(--design3-accent))]`;
      case 4:
        return `${baseClass} ${isActive} bg-[hsl(var(--design4-accent))]`;
      default:
        return baseClass;
    }
  };

  return (
    <motion.nav
      className="fixed w-full z-50 py-4"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        {/* Brand */}
        <div className="flex items-center">
          <Link href={`/design${designNumber}`}>
            <motion.span
              key={brandName}
              className="text-2xl font-playfair font-bold tracking-tight cursor-pointer text-orange-600 dark:text-orange-400"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {brandName}
            </motion.span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-10 items-center">
          {["Home", "Collections", "About", "Contact"].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="nav-item text-sm uppercase tracking-widest font-medium text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-colors"
            >
              {label}
            </a>
          ))}
        </div>

        {/* Design selector desktop */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="design-selector flex space-x-3">
            {[1, 2, 3, 4].map((num) => (
              <button
                key={num}
                onClick={() => handleDesignChange(num)}
                className={getDesignButtonClass(num)}
                aria-label={`Design ${num}`}
              />
            ))}
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden focus:outline-none text-orange-600 dark:text-orange-400"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {mobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="md:hidden absolute w-full"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4 bg-transparent">
              {["Home", "Collections", "About", "Contact"].map((label) => (
                <a
                  key={label}
                  href={`#${label.toLowerCase()}`}
                  className="py-2 text-sm uppercase tracking-widest font-medium text-orange-600 dark:text-orange-400 hover:text-orange-800 dark:hover:text-orange-300 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {label}
                </a>
              ))}

              <div className="design-selector flex space-x-4 py-4">
                {[1, 2, 3, 4].map((num) => (
                  <button
                    key={num}
                    onClick={() => handleDesignChange(num)}
                    className={getDesignButtonClass(num)}
                    aria-label={`Design ${num}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
