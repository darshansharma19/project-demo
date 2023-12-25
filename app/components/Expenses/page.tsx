'use client';
import React from 'react';
import Sidebar from '../Sidebar/page';


const Expenses = () => {
    return ( 
        <div className="flex min-h-screen">
      <div className="w-1/4 min-h-screen flex flex-col justify-between">
        <Sidebar />
      </div>
      <div className="w-3/4 min-h-screen px-12 py-8 flex flex-col justify-between">
        <div>Expenses</div>
      </div>
    </div>
     );
}
 
export default Expenses;