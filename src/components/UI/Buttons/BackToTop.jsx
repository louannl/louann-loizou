import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import { GlassLayer } from '../../liquid-glass/glass-layer';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 400) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-5 right-5 z-50 sm:bottom-8 sm:right-8">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          data-glass-host=""
          className="portfolio-glass-button grid h-12 w-12 place-items-center rounded-full"
        >
          <GlassLayer material="tinted" />
          <FaArrowUp className="text-lg" aria-hidden="true" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
