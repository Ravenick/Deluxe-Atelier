// BackToTop.jsx
import React, { useState, useEffect } from 'react';

function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);

  // Monitor position rules to keep tracking light on memory execution
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className={`back-to-top-btn ${isVisible ? 'show' : ''}`} 
      onClick={scrollToTop}
      aria-label="Back to top"
    >
      <span className="akar-icons--chevron-up"></span>
    </button>
  );
}

export default BackToTop;
