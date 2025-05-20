import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useDesign } from "../contexts/DesignContext";

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const { designNumber } = useDesign();

  // Get design-specific accent color
  const getCursorColor = () => {
    switch (designNumber) {
      case 1:
        return "bg-[hsl(var(--design1-accent))]";
      case 2:
        return "bg-[hsl(var(--design2-accent))]";
      case 3:
        return "bg-[hsl(var(--design3-accent))]";
      case 4:
        return "bg-[hsl(var(--design4-accent))]";
      default:
        return "bg-[hsl(var(--luxury-gold))]";
    }
  };

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    // Only add custom cursor on desktop
    if (window.innerWidth > 768) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseenter", handleMouseEnter);
      window.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter);
      window.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Don't render on mobile
  if (typeof window !== "undefined" && window.innerWidth <= 768) {
    return null;
  }

  return (
    <>
      <motion.div
        className={`custom-cursor ${getCursorColor()} hidden md:block mix-blend-difference`}
        style={{
          opacity: isVisible ? 1 : 0,
        }}
        animate={{
          x: mousePosition.x - 10,
          y: mousePosition.y - 10,
        }}
        transition={{
          type: "spring",
          mass: 0.1,
          stiffness: 800,
          damping: 30,
        }}
      />
      <motion.div
        className={`cursor-follower border-2 border-[hsl(var(--luxury-gold))] hidden md:block`}
        style={{
          opacity: isVisible ? 0.5 : 0,
        }}
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
        }}
        transition={{
          type: "spring",
          mass: 0.4,
          stiffness: 400,
          damping: 35,
        }}
      />
    </>
  );
};

export default CustomCursor;
