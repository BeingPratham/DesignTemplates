// import React from "react";
// import { motion } from "framer-motion";
// import { fashionImages } from "../../lib/imageData";

// interface FashionImages {
//   design1: {
//     hero: {
//       main: string;
//     };
//   };
// }

// const textVariant = {
//   hidden: { opacity: 0, y: 50 },
//   visible: (i: number) => ({
//     opacity: 1,
//     y: 0,
//     transition: {
//       delay: i * 0.15,
//       duration: 0.6,
//       ease: "easeOut",
//     },
//   }),
// };

// const Hero: React.FC = () => {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#F4F1ED] text-[#2C2C2C]">
//       {/* Background Image */}
//       <motion.img
//         src={(fashionImages as FashionImages).design1.hero.main}
//         alt="Luxury fashion model"
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 12, ease: "easeInOut" }}
//         className="absolute inset-0 w-full h-full object-cover z-0"
//       />

//       {/* Translucent Black Overlay */}
//       <div className="absolute inset-0 bg-black/50 z-10" />

//       {/* Floating Blobs (Optional Decoration) */}
//       <motion.div
//         className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#B79D71]/20 rounded-full filter blur-3xl z-10"
//         animate={{ y: [0, 30, 0], rotate: [0, 360, 0] }}
//         transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
//       />

//       {/* Foreground Content */}
//       <div className="relative z-20 px-6 pt-32 pb-16 flex flex-col items-start max-w-5xl mx-auto text-white">
//         <motion.span
//           initial={{ opacity: 0, x: -20 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ delay: 0.2, duration: 0.6 }}
//           className="text-sm uppercase tracking-[0.25em] text-[#F4E9D8] font-semibold mb-4"
//         >
//           New Collection 2025
//         </motion.span>

//         <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-[1.2]">
//           {"Timeless Design Meets".split(" ").map((word, i) => (
//             <motion.span
//               key={i}
//               custom={i}
//               initial="hidden"
//               animate="visible"
//               variants={textVariant}
//               className="inline-block mr-2"
//             >
//               {word}
//             </motion.span>
//           ))}
//           <br />
//           {"Effortless Elegance".split(" ").map((word, i) => (
//             <motion.span
//               key={i + 10}
//               custom={i + 5}
//               initial="hidden"
//               animate="visible"
//               variants={textVariant}
//               className="inline-block mr-2"
//             >
//               {word}
//             </motion.span>
//           ))}
//         </h1>

//         <motion.p
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.2, duration: 0.6 }}
//           className="mt-6 text-md md:text-lg text-gray-200 max-w-xl"
//         >
//           Explore a harmonious blend of modern sophistication and traditional
//           elegance — curated to elevate your lifestyle.
//         </motion.p>

//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.6, duration: 0.6 }}
//           className="mt-8"
//         >
//           <motion.a
//             href="#showcase"
//             whileHover={{ scale: 1.05 }}
//             whileTap={{ scale: 0.95 }}
//             className="inline-block px-8 py-3 bg-[#B79D71] text-white font-semibold tracking-wide rounded-full shadow-lg hover:bg-[#a68e60] transition"
//           >
//             Explore Collection
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Hero;



import React from "react";
import { motion } from "framer-motion";
import { fashionImages } from "../../lib/imageData";

interface FashionImages {
  design1: {
    hero: {
      main: string;
    };
  };
}

const textVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-[#F4F1ED] text-[#2C2C2C] flex items-center">
      {/* Background Image */}
      <motion.img
        src={(fashionImages as FashionImages).design1.hero.main}
        alt="Luxury fashion model"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 12, ease: "easeInOut" }}
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Translucent Black Overlay */}
      <div className="absolute inset-0 bg-black/50 z-10" />

      {/* Floating Blobs (Optional Decoration) */}
      <motion.div
        className="absolute top-[-100px] right-[-100px] w-[300px] h-[300px] bg-[#B79D71]/20 rounded-full filter blur-3xl z-10"
        animate={{ y: [0, 30, 0], rotate: [0, 360, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: "easeInOut" }}
      />

      {/* Foreground Content */}
      <div className="relative z-20 px-6 max-w-5xl mx-auto text-white flex flex-col items-start">
        <motion.span
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-sm uppercase tracking-[0.25em] text-[#F4E9D8] font-semibold mb-4"
        >
          New Collection 2025
        </motion.span>

        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight leading-[1.2]">
          {"Timeless Design Meets".split(" ").map((word, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textVariant}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
          <br />
          {"Effortless Elegance".split(" ").map((word, i) => (
            <motion.span
              key={i + 10}
              custom={i + 5}
              initial="hidden"
              animate="visible"
              variants={textVariant}
              className="inline-block mr-2"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="mt-6 text-md md:text-lg text-gray-200 max-w-xl"
        >
          Explore a harmonious blend of modern sophistication and traditional
          elegance — curated to elevate your lifestyle.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          className="mt-8"
        >
          <motion.a
            href="#showcase"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-8 py-3 bg-[#B79D71] text-white font-semibold tracking-wide rounded-full shadow-lg hover:bg-[#a68e60] transition"
          >
            Explore Collection
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
