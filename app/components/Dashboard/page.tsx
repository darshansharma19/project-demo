'use client';
import React from 'react';
import Sidebar from '../Sidebar/page';

const Dashboard = () => {
    return ( 
        <div className="flex min-h-screen w-56 px-12 py-8 flex-col justify-between p-15">
            <Sidebar />
        </div>
     );
}
 
export default Dashboard;