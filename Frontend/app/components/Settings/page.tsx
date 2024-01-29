'use client';
import React from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';
import Link from 'next/link';

const Setting = () => {
    return ( 
      <div className="flex w-full min-h-screen">
      <div className="min-w-1/4 min-h-screen flex flex-col justify-between ">
        <Sidebar />
      </div>
      <div className="w-full bg-special-bg dark:bg-black-dark dark:text-white min-h-screen px-6 py-8 flex flex-col ">
        <div className=""><Header/></div>
        <div className="relative text-[2.25rem] py-6 font-semibold font-geist">Settings</div>
        <div className='flex flex-row flex-wrap gap-2'>
          <Link href='/components/Integrations'  className='relative no-underline flex flex-col cursor-pointer items-center justify-center  px-6 pb-6 rounded-lg bg-white dark:bg-gray-200 dark:text-white shadow-[0px_20px_25px_rgba(76,_103,_100,_0.1)] w-40 h-36'>
            <b className="relative text-[1rem] leading-6 capitalize font-bold-16-24 text-gray-02 ">Integrations</b>
            <img className="relative w-[6.25rem] pt-5 h-[6.25rem] overflow-hidden object-contain" alt="" src="/assets/carbon_ibm-cloud-pak-integration.svg" />
          </Link>
          <Link href='/components/CustomCode'  className='relative no-underline flex flex-col cursor-pointer items-center justify-center  px-6 pb-6 rounded-lg bg-white dark:bg-gray-200 dark:text-white shadow-[0px_20px_25px_rgba(76,_103,_100,_0.1)] w-40 h-36'>
            <b className="relative text-[1rem] leading-6 capitalize font-bold-16-24 text-gray-02 ">Custom Code</b>
            <img className="relative w-[6.25rem] pt-5 h-[6.25rem] overflow-hidden object-contain" alt="" src="/assets/mdi_code.svg" />
          </Link>
          <Link href='/components/DatabaseManagement' className='relative no-underline flex flex-col cursor-pointer items-center justify-center  px-6 pb-6 rounded-lg bg-white dark:bg-gray-200 dark:text-white shadow-[0px_20px_25px_rgba(76,_103,_100,_0.1)] w-40 h-36'>
            <b className="relative text-[1rem] leading-6 capitalize font-bold-16-24 text-gray-02 text-nowrap ">Database Management</b>
            <img className="relative w-[6.25rem] pt-5 h-[6.25rem] overflow-hidden object-contain" alt="" src="/assets/mdi_database-outline.svg" />
          </Link>
          <Link href='/components/Authentication' className='relative no-underline flex flex-col cursor-pointer items-center justify-center  px-6 pb-6 rounded-lg bg-white dark:bg-gray-200 dark:text-white shadow-[0px_20px_25px_rgba(76,_103,_100,_0.1)] w-40 h-36'>
            <b className="relative text-[1rem] leading-6 capitalize font-bold-16-24 text-gray-02 ">Authentications</b>
            <img className="relative w-[6.25rem] pt-5 h-[6.25rem] overflow-hidden object-contain" alt="" src="/assets/authentication.svg" />
          </Link>
          <Link href='/components/APIs' className='relative no-underline flex flex-col cursor-pointer items-center justify-center  px-6 pb-6 rounded-lg bg-white dark:bg-gray-200 dark:text-white shadow-[0px_20px_25px_rgba(76,_103,_100,_0.1)] w-40 h-36'>
            <b className="relative text-[1rem] leading-6 capitalize font-bold-16-24 text-gray-02 ">APIs</b>
            <img className="relative w-[6.25rem] pt-5 h-[6.25rem] overflow-hidden object-contain" alt="" src="/assets/light_api.svg" />
          </Link>
        </div>
      </div>
    </div>
     );
}
 
export default Setting;