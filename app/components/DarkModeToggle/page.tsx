'use client';

import React from 'react';

import { useState, useEffect } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div
      id='dark-mode-toggle'
      className={`relative flex border-2 border-solid items-center justify-start w-8 h-3 cursor-pointer rounded-full  bg-white dark:bg-gray-900`}
      onClick={toggleDarkMode}
    >
      <div
        id='switch'
        className={`absolute w-3 h-3 bg-black rounded-full shadow-md dark:bg-white transition-transform duration-300 ${
          isDarkMode ? 'transform translate-x-0' : 'transform translate-x-full'
        }`}
      ></div>
    </div>
  );
};

export default DarkModeToggle;
