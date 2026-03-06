import React, { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import tw from '../../../helpers/tailwind';

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
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="fixed bottom-10 right-10 z-50">
      {isVisible && (
        <button
          type="button"
          onClick={scrollToTop}
          className={tw(
            'p-3',
            'rounded-full',
            'bg-mint',
            'text-white',
            'shadow-lg',
            'hover:bg-mint/80',
            'transition-all',
            'duration-300',
            'animate-bounce'
          )}
        >
          <FaArrowUp className="text-xl" />
        </button>
      )}
    </div>
  );
};

export default BackToTop;
