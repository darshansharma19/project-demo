'use client';

import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    const updatedMode = !isDarkMode;
    setIsDarkMode(updatedMode);
    localStorage.setItem('theme', updatedMode ? 'dark' : 'light');
    if (updatedMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <div
    id='dark-mode-toggle'
    className={`relative flex border-2 border-solid items-center justify-start w-8 h-3 p-[2px] cursor-pointer rounded-full  transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900' : 'bg-white'
    } `}
    onClick={toggleDarkMode}
  >
    <div
      id='switch'
      className={`absolute w-3 h-3 bg-black rounded-full shadow-md transition-transform duration-300 ${
        isDarkMode ? ' dark:bg-white bg-gray-900 transform translate-x-full' : 'bg-gray-900 dark:bg-white transform translate-x-0'
      }`}
    ></div>
  </div>
  );
};

export default DarkModeToggle;
