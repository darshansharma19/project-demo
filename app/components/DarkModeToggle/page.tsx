import { useState } from 'react';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setIsDarkMode((prevState) => !prevState);

    // You'll need to implement your logic to switch themes here
    // For this example, we'll just add a 'dark' class to the body
    const body = document.body;
    body.classList.toggle('dark');
  };

  return (
    <div className="flex flex-col gap-2 px-4 py-3 items-start justify-center cursor-pointer" onClick={toggleDarkMode}>
      <div className={`relative rounded-[10px] justify-center items-center bg-black1 w-[30px]  h-4 ${isDarkMode ? 'justify-end' : ''}`}>
        <div className={`className="relative justify-center items-center  rounded-full bg-white w-[10px] h-4 ${isDarkMode ? 'translate-x-5' : ''}`} />
      </div>
    
    
      <div className="relative text-base sm:text-lg md:text-xl leading-[1.5rem] font-regular-16-24 text-black1 text-left inline-block w-[9.75rem] h-[1.5rem]">
        <p className="m-0">Dark Mode</p>
        <p className="m-0">&nbsp;</p>
    </div>
    </div>
  );
};

export default DarkModeToggle;
