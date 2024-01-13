'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import DarkModeToggle from '../DarkModeToggle/page';
import { useRouter, usePathname } from 'next/navigation';

const Sidebar = () => {
    const router = useRouter();
    const pathname = usePathname();

    const [activeButton, setActiveButton] = useState('');

    const handleClick = (buttonName: string) => {
      setActiveButton(buttonName);
    };

    

const handleIsActive = (route: string) => {
    if (route === pathname) {
      return 'active';
    } else {
      return 'inactive';
    }
  };
  
    const buttonData = [
        { name: 'Dashboard', icon: '/assets/Overview.svg' },
        { name: 'Influencer', icon: '/assets/influencer.svg' },
        { name: 'Integrations', icon: '/assets/Transaction.svg' },
        { name: 'Profile', icon: '/assets/gg_profile.svg' },
        { name: 'Media assets', icon: '/assets/baseline.svg' },
        { name: 'Expenses', icon: '/assets/Group.svg' },
        { name: 'Notifications', icon: '/assets/Vector.svg' },
        {
            name: "Settings",
            icon: "/assets/settings.svg",
            options: [
              { name: "Integrations" },
              { name: "Custom Code" },
              { name: "Database Management" },
              { name: "Authentications" },
              { name: "API's" },
            ],
          },
        { name: 'Users and Permissions', icon: '/assets/mdi_users.svg' },
     
    ];
    const buttonRoutes = [
        '/components/Dashboard',
        '/components/Influencer',
        '/components/Integrations',
        '/components/Profile',
        '/components/Mediaassets',
        '/components/Expenses',
        '/components/Notifications',
        '/components/Settings',
        '/components/Usersnpermission',
      ];

    return ( 
        <div className="flex bg-white sm:mx-auto sm:w-full sm:max-w-md h-full flex-row w-72 text-left text-sm text-black relative font-regular-16-24 dark:text-white dark:bg-gray-300">
            
            <div className="relative   w-48 flex flex-col items-center justify-start mx-7 py-12 gap-y-10 text-center text-[1.25rem] font-playfair-display ">
                <div className="relative w-full flex flex-row gap-2  items-center justify-start">
                    <div className="flex items-center">
                        <Image src="/assets/logo.svg" width={40} height={40} alt="logo" />
                    </div>
                    <i className="relative tracking-[0.08em] leading-8  inline-block font-semibold whitespace-pre-wrap">
                        Flavor Trail
                    </i>
                </div>
                {/* <div className="flex  flex-col w-full gap-y-4 py-3  text-left text-[1rem] font-regular-16-24">
                {buttonData.map((button, index) => (
                    <Link href={buttonRoutes[index]} key={index}
                        className={`rounded  bg-${handleIsActive(buttonRoutes[index]) === 'active' ? 'mediumblue dark:bg-mediumpurple' : 'white dark:bg-gray-300'}  font-${handleIsActive(buttonRoutes[index]) === 'active' ? 'semibold' : 'regular'} no-underline w-full flex cursor-pointer items-center justify-start pl-3 py-3 gap-3 text-${activeButton === button.name ? 'white' : 'black '} `}
                        onClick={() => handleClick(button.name)}
                        >
                        <Image
                            src={handleIsActive(buttonRoutes[index]) === 'active' ? button.icon.replace('.svg', '_white.svg') : button.icon}
                            width={24}
                            height={24}
                            alt={button.name.toLowerCase()}
                            className="relative"
                        />
                        <span className={handleIsActive(buttonRoutes[index]) === 'active' ? 'text-white dark:text-white' : 'text-black dark:text-white'}>
                            {button.name}
                        </span>
                        
                    </Link>
                    
                ))} */}

<div className="flex w-full flex-col gap-y-4 py-3 px-6 text-left text-[1rem] font-regular-16-24">
          {buttonData.map((button, index) => (
            <div key={index}>
              <Link
                href={buttonRoutes[index]}key={index}
                className={`rounded  bg-${handleIsActive(buttonRoutes[index]) === 'active' ? 'mediumblue dark:bg-mediumpurple' : 'white dark:bg-gray-300'}  font-${handleIsActive(buttonRoutes[index]) === 'active' ? 'semibold' : 'regular'} no-underline w-full flex cursor-pointer items-center justify-start pl-3 py-3 gap-3 text-${activeButton === button.name ? 'white' : 'black '} `}
                onClick={() => handleClick(button.name)}
                >
                <Image
                  src={handleIsActive(buttonRoutes[index]) === 'active' ? button.icon.replace('.svg', '_white.svg') : button.icon}
                  width={24}
                  height={24}
                  alt={button.name.toLowerCase()}
                  className="relative"
                />
                <span
                  className={handleIsActive(buttonRoutes[index]) === 'active' ? 'text-white dark:text-white' : 'text-black dark:text-white'}>
                  {button.name}
                </span>
              </Link>
              {button.name === "Settings" ? (
                <div
                  className={`settings-options ${
                    activeButton !== "Settings" ? "hidden" : ""
                  } flex flex-col`}
                >
                  {button.options?.map((option, idx) => {
                    return (
                      <Link href='' className="w-168 h-318 flex-shrink-0 m-2 p-1 text-md hover:bg-mediumblue hover:text-white cursor-pointer rounded-md" >
                        {option.name}
                      </Link>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
                <div className="flex w-full flex-col gap-y-4 px-4  text-left text-[1rem] font-regular-16-24">
                    <div className={`rounded  no-underline w-full flex cursor-pointer items-center justify-start  `}>
                        <DarkModeToggle />
                        <span className='rounded no-underline w-full flex cursor-pointer items-center justify-start px-4 py-3 gap-3'>Dark Mode</span>
                     </div>
                     
                </div>
                <Link href='/' className="relative mt-14 rounded-lg no-underline cursor-pointer bg-mediumblue dark:bg-mediumpurple w-full  flex items-center justify-start py-3 pl-3 gap-3 text-white text-base font-semibold">
                        <div className="w-8 h-8 flex items-center justify-start">
                            <img className="w-6 h-6 object-cover" alt="Logout" src="/assets/Logout.svg" />
                        </div>
                        <div className="leading-[1.5rem]">Logout</div>
                </Link> 
               
                </div>
                
                
            </div>

        </div>
     );
}
 
export default Sidebar;