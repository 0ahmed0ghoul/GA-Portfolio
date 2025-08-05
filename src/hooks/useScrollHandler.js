// hooks/useScrollHandler.js
import { useEffect } from 'react';

export const useScrollHandler = () => {
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1);
      if (hash) {
        const element = document.getElementById(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
          
          // Clean up URL after scrolling
          setTimeout(() => {
            window.history.replaceState(null, null, ' ');
          }, 1000);
        }
      }
    };

    // Initial check on load
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
};