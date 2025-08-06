import React, { useState, useEffect } from "react";

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full max-w-[1280px] mx-auto">
    <div 
          className={`w-14 h-14 rounded-full bg-coral-red fixed bottom-6 right-4 sm:bottom-10 sm:right-8 lg:right-[max(calc(50%-640px),2rem)] flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-dark-coral-red shadow-lg z-50 ${
            isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
          onClick={scrollToTop}
          title="Scroll to top"
          aria-label="Scroll to top"
        >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-white"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </div>
    </div>
  );
};

export default UpButton;