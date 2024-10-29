// Create ThemeToggle Component
import React, { useState } from 'react';
import './ThemeToggle.css';  // Custom CSS for the toggle switch

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    document.body.classList.toggle('dark-mode', !darkMode);
    setDarkMode(!darkMode);
  };

  return (
    <div className="theme-toggle">
      <input 
        type="checkbox" 
        id="switch" 
        className="checkbox" 
        onChange={toggleTheme} 
        checked={darkMode} 
      />
      <label htmlFor="switch" className="label">
        <span className="inner" />
        <span className="switch" />
      </label>
    </div>
  );
};

export default ThemeToggle;
