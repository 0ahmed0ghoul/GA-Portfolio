import React from 'react'
import { useState, useEffect } from "react";

const DarkMode = () => {
    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        if (darkMode) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }, [darkMode]);
    
  return (
    <div>DarkMode</div>
  )
}

export default DarkMode