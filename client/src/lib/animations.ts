// Note: GSAP is mocked here since we don't have it installed
// In a real implementation, we would properly import the libraries
const gsap = {
  to: (element: any, options: any) => {},
  from: (element: any, options: any) => {},
  registerPlugin: (plugin: any) => {}
};

const ScrollTrigger = {
  create: (options: any) => {},
  maxScroll: (element: any) => 0
};

/**
 * Initialize scroll animations for elements with data-animate attribute
 */
export const initScrollAnimations = () => {
  // Text split animation
  // Simplified animation logic that just sets up event listeners
  // In a real implementation with GSAP, this would animate elements
  
  // Add scroll event listener for basic scroll animations
  window.addEventListener('scroll', () => {
    // This would normally animate elements as they scroll into view
    console.log('Scroll animations would run here');
  });
  
  // This is just a placeholder - in real implementation with GSAP, 
  // this would set up scroll-triggered animations
  document.querySelectorAll('.scroll-reveal').forEach(el => {
    // Mark elements as having animations applied
    el.classList.add('animation-ready');
  });
  
  // For parallax elements
  document.querySelectorAll('.parallax-on-scroll').forEach(el => {
    // Mark elements as having animations applied
    el.classList.add('parallax-ready');
  });
};

/**
 * Initialize parallax effect on mousemove
 */
export const initMouseParallax = () => {
  // Simplified mousemove parallax effect
  window.addEventListener('mousemove', (e) => {
    const mouseX = e.clientX / window.innerWidth;
    const mouseY = e.clientY / window.innerHeight;
    
    document.querySelectorAll('.parallax-layer').forEach(layer => {
      const element = layer as HTMLElement;
      const depth = element.dataset.depth ? parseFloat(element.dataset.depth) : 0.1;
      const moveX = (mouseX - 0.5) * 40 * depth;
      const moveY = (mouseY - 0.5) * 40 * depth;
      
      // Apply transform directly instead of using GSAP
      element.style.transform = `translate(${moveX}px, ${moveY}px)`;
    });
  });
};

/**
 * Split text for animation - returns an array of elements
 * This is a utility function that should be used in a React component
 */
export const splitText = (text: string) => {
  return text.split(' ').map((word, i) => ({
    word,
    delay: i * 100
  }));
};

/**
 * Initialize a staggered animation for child elements
 * This is a simplified version that adds classes instead of using GSAP
 */
export const staggerAnimation = (
  parent: string, 
  children: string, 
  options = { 
    y: 20, 
    opacity: 0, 
    stagger: 0.1, 
    duration: 0.6, 
    ease: "power3.out" 
  }
) => {
  const parentEl = document.querySelector(parent);
  if (!parentEl) return;
  
  const childEls = parentEl.querySelectorAll(children);
  
  // Add animation classes to elements
  childEls.forEach((el, index) => {
    const animationDelay = index * options.stagger;
    const htmlEl = el as HTMLElement;
    
    // Apply some basic CSS animations
    htmlEl.style.transitionDelay = `${animationDelay}s`;
    htmlEl.style.transitionDuration = `${options.duration}s`;
    htmlEl.classList.add('animate-in');
  });
};

export default {
  initScrollAnimations,
  initMouseParallax,
  splitText,
  staggerAnimation
};
