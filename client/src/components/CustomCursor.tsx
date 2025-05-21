import React, { useEffect, useState } from 'react';

// Updated cursor component with more subtle design
const CustomCursor = () => {
  // We're using a simpler cursor approach based on user feedback
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) {
        setIsVisible(true);
      }
      
      // Update cursor position with a slight delay for smoother movement
      requestAnimationFrame(() => {
        setPosition({ 
          x: e.clientX, 
          y: e.clientY 
        });
      });
    };
    
    const handleMouseEnter = () => {
      // Keep normal cursor visible
      document.body.style.cursor = 'auto';
      setIsVisible(true);
    };
    
    const handleMouseLeave = () => {
      document.body.style.cursor = 'auto';
      setIsVisible(false);
    };
    
    const handleLinkHover = () => {
      setIsHovering(true);
    };
    
    const handleLinkLeave = () => {
      setIsHovering(false);
    };
    
    // Add event listeners
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseenter', handleMouseEnter);
    document.addEventListener('mouseleave', handleMouseLeave);
    
    // Handle interactive elements
    const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
    interactiveElements.forEach(element => {
      element.addEventListener('mouseenter', handleLinkHover);
      element.addEventListener('mouseleave', handleLinkLeave);
    });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleLinkHover);
        element.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, [isVisible]);
  
  // Don't render the custom cursor element until mouse moves
  if (!isVisible) return null;
  
  return (
    <div 
      className="custom-cursor-ring" 
      style={{ 
        transform: `translate(${position.x}px, ${position.y}px)`,
        width: isHovering ? '40px' : '20px',
        height: isHovering ? '40px' : '20px',
        opacity: isHovering ? 0.7 : 0.4,
        border: `1px solid ${isHovering ? '#ffffff' : 'rgba(255,255,255,0.7)'}`,
        transition: 'width 0.3s ease, height 0.3s ease, opacity 0.3s ease'
      }}
    />
  );
};

export default CustomCursor;