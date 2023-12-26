'use client'
import React from 'react';

const Header = () => {
    return ( 
    <div className="relative flex flex-row gap-2 w-full h-12 text-left text-base text-black font-regular-16-24">
        <input
            id='searchbar'
            placeholder='Search here'
            type="search"
            className="relative rounded-xl focus:outline-none bg-white shadow-md w-full h-full flex items-start justify-start p-2 gap-40 text-left text-base font-regular border overflow-hidden border-gray-300"
        />


        <div className="flex items-center justify-center w-1/3 h-full rounded-lg bg-gray-200">
          Bell
        </div>
        <div className="flex items-center justify-center w-1/3 h-full rounded-lg bg-gray-200">
          Avatar
        </div>
    </div>
      
     );
}
 
export default Header;