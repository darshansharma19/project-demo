'use client';

import React from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';

const DatabaseManagement = () => {
    return ( 
      <div className="flex w-full min-h-screen">
        <div className="w-1/4 min-h-screen flex flex-col justify-between">
          <Sidebar />
        </div>
        <div className="w-full bg-special-bg min-h-screen px-6 py-6 flex flex-col justify-between">
          <div className=""><Header/></div>
          <div className='m-0  py-8 h-7 font-bold'>Database Management- user</div>
          <div className='relative rounded-[10px] flex flex-col bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[51.13rem]'>
            
          </div>
        </div>
      </div>
     );
}
 
export default DatabaseManagement;