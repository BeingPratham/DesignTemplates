import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [followerPosition, setFollowerPosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Make cursor visible once mouse has moved
      if (!isVisible) {
        setIsVisible(true);
      }
      
      setPosition({ x: e.clientX, y: e.clientY });
      // The follower lags slightly behind the cursor for a nicer effect
      setTimeout(() => {
        setFollowerPosition({ x: e.clientX, y: e.clientY });
      }, 80);
    };
    
    const handleMouseEnter = () => {
      document.body.style.cursor = 'none';
    };
    
    const handleMouseLeave = () => {
      document.body.style.cursor = 'auto';
      setIsVisible(false);
    };
    
    const handleMouseDown = () => {
      setIsHovering(true);
    };
    
    const handleMouseUp = () => {
      setIsHovering(false);
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
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);
    
    // Get all interactive elements
    const checkAndAddListeners = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
      interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleLinkHover);
        element.addEventListener('mouseleave', handleLinkLeave);
      });
    };
    
    // Initial check
    checkAndAddListeners();
    
    // Set up a mutation observer to monitor DOM changes
    const observer = new MutationObserver(() => {
      checkAndAddListeners();
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
      
      // Clean up the observer
      observer.disconnect();
      
      // Clean up link event listeners
      const interactiveElements = document.querySelectorAll('a, button, input, select, textarea, [role="button"]');
      interactiveElements.forEach(element => {
        element.removeEventListener('mouseenter', handleLinkHover);
        element.removeEventListener('mouseleave', handleLinkLeave);
      });
    };
  }, [isVisible]);
  
  if (!isVisible) return null;
  
  return (
    <>
      <div 
        className="custom-cursor bg-white" 
        style={{ 
          transform: `translate(${position.x}px, ${position.y}px) scale(${isHovering ? 2.5 : 1})`,
          opacity: isVisible ? 1 : 0
        }}
      />
      <div 
        className="cursor-follower bg-white" 
        style={{ 
          transform: `translate(${followerPosition.x}px, ${followerPosition.y}px) scale(${isHovering ? 0.5 : 1})`,
          opacity: isVisible ? 0.5 : 0
        }}
      />
    </>
  );
};

export default CustomCursor;