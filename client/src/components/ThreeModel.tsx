import React, { useRef, useEffect, useState } from "react";

// A simpler 3D-like display component that doesn't rely on Three.js
type ThreeSceneProps = {
  backgroundColor?: string;
  className?: string;
  interactive?: boolean;
  autoRotate?: boolean;
};

const ThreeScene = ({ 
  backgroundColor = "#000000", 
  className = "h-80 w-full rounded-lg overflow-hidden",
  interactive = true,
  autoRotate = true
}: ThreeSceneProps) => {
  const [rotation, setRotation] = useState(0);
  const boxRef = useRef<HTMLDivElement>(null);
  
  // Auto-rotate animation
  useEffect(() => {
    if (!autoRotate) return;
    
    const interval = setInterval(() => {
      setRotation(prev => (prev + 1) % 360);
    }, 50);
    
    return () => clearInterval(interval);
  }, [autoRotate]);
  
  // Mouse interaction for rotation
  useEffect(() => {
    if (!interactive || !boxRef.current) return;
    
    let startX = 0;
    let startY = 0;
    let startRotationX = 0;
    let startRotationY = 0;
    let currentRotationX = 0;
    let currentRotationY = 0;
    let isDragging = false;
    
    const handleMouseDown = (e: MouseEvent) => {
      isDragging = true;
      startX = e.clientX;
      startY = e.clientY;
      startRotationX = currentRotationX;
      startRotationY = currentRotationY;
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      
      const deltaX = e.clientX - startX;
      const deltaY = e.clientY - startY;
      
      currentRotationX = startRotationX + deltaY * 0.5;
      currentRotationY = startRotationY + deltaX * 0.5;
      
      if (boxRef.current) {
        boxRef.current.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;
      }
    };
    
    const handleMouseUp = () => {
      isDragging = false;
    };
    
    const element = boxRef.current;
    
    element.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseup', handleMouseUp);
    
    return () => {
      element?.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [interactive]);
  
  return (
    <div className={className} style={{ backgroundColor, perspective: '800px' }}>
      <div 
        ref={boxRef} 
        className="w-full h-full flex items-center justify-center relative transition-transform"
        style={{ 
          transform: `rotateY(${rotation}deg)`,
          transformStyle: 'preserve-3d'
        }}
      >
        {/* Gold cube */}
        <div 
          className="absolute w-40 h-40 bg-gradient-to-br from-yellow-300 to-yellow-600" 
          style={{ 
            transform: 'translateZ(20px)',
            boxShadow: '0 0 30px rgba(212, 175, 55, 0.6)'
          }}
        />
        
        {/* Shadow/reflective surface */}
        <div 
          className="absolute w-60 h-60 rounded-full bg-black/30 blur-md"
          style={{ transform: 'translateZ(-40px) rotateX(90deg)' }}
        />
        
        {/* Reflective light */}
        <div 
          className="absolute w-10 h-10 bg-white rounded-full blur-xl opacity-50"
          style={{ transform: 'translateZ(60px) translate(-15px, -15px)' }}
        />
      </div>
    </div>
  );
};

export default ThreeScene;
