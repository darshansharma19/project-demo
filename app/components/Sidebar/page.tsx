'use client';

import React from 'react';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import DarkModeToggle from '../DarkModeToggle/page';

const Sidebar = () => {
    const [activeButton, setActiveButton] = useState('');

    const handleClick = (buttonName: string) => {
      setActiveButton(buttonName);
    };
  
    const buttonData = [
        { name: 'Dashboard', icon: '/assets/Overview.svg' },
        { name: 'Influencer', icon: '/assets/influencer.svg' },
        { name: 'Integrations', icon: '/assets/Transaction.svg' },
        { name: 'Profile', icon: '/assets/gg_profile.svg' },
        { name: 'Media assets', icon: '/assets/baseline.svg' },
        { name: 'Expenses', icon: '/assets/Group.svg' },
        { name: 'Notifications', icon: '/assets/Vector.svg' },
        { name: 'Settings', icon: '/assets/Settings.svg' },
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
        <div className="flex sm:mx-auto sm:w-full sm:max-w-md flex-row w-full text-left text-sm text-black relative font-regular-16-24 ">
            
            <div className="relative w-48 flex flex-col items-center justify-start px-7 py-12 gap-y-10 text-center text-[1.25rem] text-black font-playfair-display">
                <div className="relative w-full flex gap-2  items-center justify-start">
                    <div className="flex items-center">
                        <Image src="/assets/logo.svg" width={40} height={40} alt="logo" />
                    </div>
                    <i className="relative tracking-[0.08em] leading-[2rem] inline-block font-semibold whitespace-pre-wrap">
                        Flavour Trail
                    </i>
                </div>
                <div className="flex w-full flex-col gap-y-4 py-3 text-left text-[1rem] font-regular-16-24">
                {buttonData.map((button, index) => (
                    <Link href={buttonRoutes[index]} key={index}
                        
                        className={`rounded bg-${activeButton === button.name ? 'mediumblue' : 'white'} font-${activeButton === button.name ? 'semibold' : 'regular'} no-underline w-full flex cursor-pointer items-center justify-start px-4 py-3 gap-3 text-${activeButton === button.name ? 'white' : 'black'}`}
                        onClick={() => handleClick(button.name)}
                        >
                        <Image
                            src={activeButton === button.name ? button.icon.replace('.svg', '_white.svg') : button.icon}
                            width={24}
                            height={24}
                            alt={button.name.toLowerCase()}
                            className="relative"
                        />
                        <span className={activeButton === button.name ? 'text-white' : 'text-black'}>
                            {button.name}
                        </span>
                        
                    </Link>
                ))}
                <div className="flex w-full flex-col gap-y-4 px-4  text-left text-[1rem] font-regular-16-24">
                    <div className={`rounded  no-underline w-full flex cursor-pointer items-center justify-start  `}>
                        <DarkModeToggle />
                        <span className='rounded no-underline w-full flex cursor-pointer items-center justify-start px-4 py-3 gap-3'>Dark Mode</span>
                     </div>
                     
                </div>
                <Link href='/' className="relative mt-14 rounded-lg no-underline cursor-pointer bg-mediumblue w-full  flex items-center justify-start py-3 px-4 gap-3 text-white text-base font-semibold">
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