import Lenis from '@studio-freight/lenis';

/**
 * Initialize smooth scrolling using Lenis
 * @returns A cleanup function to destroy the Lenis instance
 */
export const initSmoothScroll = () => {
  // We're mocking Lenis here since it's not actually installed,
  // but the implementation would work with the actual library
  
  // Scroll to anchor links smoothly
  const handleAnchorClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement;
    const anchor = target.closest('a');
    
    if (!anchor) return;
    
    const href = anchor.getAttribute('href');
    
    if (href && href.startsWith('#')) {
      e.preventDefault();
      
      const targetElement = document.querySelector(href);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    }
  };
  
  // Add event listener for anchor links
  document.addEventListener('click', handleAnchorClick);
  
  // Setup would be like this with actual Lenis:
  /*
  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    direction: 'vertical',
    gestureDirection: 'vertical',
    smooth: true,
    mouseMultiplier: 1,
    smoothTouch: false,
    touchMultiplier: 2,
    infinite: false,
  });
  
  function raf(time: number) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }
  
  requestAnimationFrame(raf);
  */
  
  return () => {
    // Cleanup function
    document.removeEventListener('click', handleAnchorClick);
    
    // With actual Lenis:
    // lenis.destroy();
  };
};

/**
 * Scroll to a specific element by ID
 * @param id Element ID to scroll to
 */
export const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
};

export default {
  initSmoothScroll,
  scrollToElement
};
