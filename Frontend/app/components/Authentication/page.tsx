'use client';
import React from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';

const Integrations = () => {
    return ( 
            <div className="flex min-h-screen">
                <div className="w-1/4 min-h-screen flex flex-col justify-between">
                    <Sidebar />
                </div>
                <div className="w-full bg-special-bg dark:bg-black-dark dark:text-white px-8 py-8 flex flex-col justify-between">
                    <div className=""><Header/></div>
                    <div className='m-0  py-12 flex flex-col gap-6 h-full font-bold'>
                        <div className="relative w-full flex flex-col items-start justify-start gap-2 text-left text-4xl text-text font-geist">
                        <div className="relative text-[2.25rem] py-6 font-semibold font-geist">Authentications</div>
                        </div>
                    
                        <div className="flex flex-row flex-wrap gap-8">
                            <div className="relative cursor-pointer bg-background-light dark:bg-gray-200 dark:text-white items-center justify-center box-border w-[264px] h-[189px] object-contain overflow-hidden flex flex-col p-6  text-left text-[1.13rem] text-text font-inter shadow-lg"> 
                                <img className="relative w-12 h-12 overflow-hidden m-2 object-cover" alt="google" src="/assets/Google.svg" />
                                <div className="relative text-[1rem]  tracking-[0.01em] font-medium font-inter text-text text-left">{`Continue with Google `}</div>
                            </div>
                            <div className="relative cursor-pointer bg-background-light dark:bg-gray-200 dark:text-white items-center justify-center box-border w-[264px] h-[189px] object-contain overflow-hidden flex flex-col p-6  text-left text-[1.13rem] text-text font-inter shadow-lg"> 
                                <img className="relative w-12 h-12 overflow-hidden m-2 object-cover" alt="instagram" src="/assets/skill-icons_instagram.svg" />
                                <div className="relative text-[1rem]  tracking-[0.01em] font-medium font-inter text-text text-left">{`Continue with Instagram `}</div>
                            </div>
                            <div className="relative cursor-pointer bg-background-light dark:bg-gray-200 dark:text-white items-center justify-center box-border w-[264px] h-[189px] object-contain overflow-hidden flex flex-col p-6  text-left text-[1.13rem] text-text font-inter shadow-lg"> 
                                <img className="relative w-12 h-12 overflow-hidden m-2 object-cover" alt="tiktok" src="/assets/logos_tiktok-icon.svg" />
                                <div className="relative text-[1rem]   tracking-[0.01em] font-medium font-inter text-text text-left">{`Continue with Tiktok `}</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
}
 
export default Integrations;