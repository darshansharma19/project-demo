'use client';
import React from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';

const UserNpermissions = () => {
    return ( 
      <div className="flex w-full min-h-screen">
      <div className="w-1/4 min-h-screen flex flex-col justify-between">
        <Sidebar />
      </div>
      <div className="w-full bg-special-bg dark:bg-black-dark dark:text-white min-h-screen px-6 py-8 flex flex-col ">
        <div className=""><Header/></div>
        <div className="relative text-[2.25rem] py-6 font-semibold font-geist">User and Permission</div>
        
      </div>
    </div>
     );
}
 
export default UserNpermissions;