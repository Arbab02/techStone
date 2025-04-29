import { useState, useEffect } from 'react';
import { IoArrowUp } from "react-icons/io5";
const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
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
    isVisible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-4 right-5 p-3 rounded-full bg-blue-500 text-white  shadow-lg hover:bg-blue-700 transition-all"
      >
        <IoArrowUp size={20} />
      </button>
    )
  );
};

export default ScrollToTopButton;
