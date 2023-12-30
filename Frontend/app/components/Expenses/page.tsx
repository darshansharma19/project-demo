'use client';
import React from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';


const Expenses = () => {
    return ( 
        <div className="flex min-h-screen">
      <div className="w-1/4 min-h-screen flex flex-col justify-between">
        <Sidebar />
      </div>
      <div className="w-3/4 min-h-screen px-12 py-8 flex flex-col justify-between">
        <div className=""><Header/></div>
        <div className='m-0 px-2 py-12 h-full font-bold'>Expenses</div>
      </div>
    </div>
     );
}
 
export default Expenses;