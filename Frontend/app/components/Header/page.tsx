'use client'
import React, { useRef } from 'react';
import Image from 'next/image';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../../Config/firebase';

const Header = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleClicked(): void {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }

  const [hasNotification, setHasNotification] = useState(false);

  // Function to simulate adding notifications
  const addNotification = () => {
    setHasNotification(true);
    // Simulating clearing notification after a delay (you can replace setTimeout with your logic)
    setTimeout(() => {
      setHasNotification(false);
    }, 3000); // Clearing after 3 seconds (adjust as needed)
  };

 const [user] = useAuthState(auth);
  const { displayName, photoURL } = user || {};

  

    return ( 
      <div className="relative flex flex-col lg:flex-row gap-2 w-full h-auto lg:h-12 text-left text-base dark:text-white text-black font-regular-16-24">
      <div className="relative flex w-full lg:w-2/3  h-auto lg:h-full">
        <input
          ref={inputRef}
          id="searchbar"
          placeholder={`Search here`}
          type="search"
          className="absolute rounded-xl focus:outline-none bg-white dark:bg-mediumpurple shadow-md w-full h-full lg:h-auto flex items-start justify-start p-2 gap-40 text-left dark:text-white text-base font-regular border overflow-hidden border-gray-300"
        />
        <div className="absolute p-1 top-0 right-0 flex items-center justify-center w-12 h-full lg:h-auto rounded-full cursor-pointer">
          <Image
            src="/assets/Search.svg"
            width={24}
            height={24}
            alt="Search"
            onClick={handleClicked}
          />
        </div>
      </div>
      <div className="relative flex w-full lg:w-1/2 h-auto lg:h-full">
        <div className="flex items-center justify-start px-2 w-full h-auto lg:h-full rounded-lg">
          <div className="relative" onClick={addNotification}>
            <Image
              src="/assets/bell.svg"
              width={24}
              height={24}
              alt="bell"
              className="relative flex items-start overflow-hidden shrink-0 object-cover justify-start"
            />
            {hasNotification && (
              <div className="absolute w-3 h-3 bg-green-500 rounded-full top-0 right-0 transform translate-x-1/2 -translate-y-1/2"></div>
            )}
          </div>
        </div>
        <div className="flex items-center justify-center w-full h-auto lg:h-full rounded-lg">
          <div className="flex items-center">
            <div className="mr-2">
              <Image
                src={photoURL || '/assets/avatar.svg'}
                width={40}
                height={40}
                alt="User Avatar"
                className="rounded-full "
              />
            </div>
            <span>{displayName}</span>
          </div>
        </div>
      </div>
    </div>
    
      
     );
}
 
export default Header;