import React, { useState, useEffect } from 'react';

const UpButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const aboutMeSection = document.getElementById('aboutme');
      if (aboutMeSection) {
        // Show button when scroll position is past the aboutme section
        const scrollPosition = window.scrollY + window.innerHeight;
        const sectionPosition = aboutMeSection.offsetTop + aboutMeSection.offsetHeight;
        setIsVisible(window.scrollY > sectionPosition - window.innerHeight);
      }
    };

    // Check on initial render
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  if (!isVisible) return null;

  return (
    <div 
      className='w-14 h-14 rounded-full bg-coral-red fixed bottom-10 right-10 flex justify-center items-center cursor-pointer transition-all duration-300 hover:scale-110 hover:bg-dark-coral-red shadow-lg z-50'
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
  );
};

export default UpButton;