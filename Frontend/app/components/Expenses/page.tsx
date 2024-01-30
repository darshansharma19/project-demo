'use client';

import React from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';

const Expenses = () => {


  interface DataEntry {
    items: string;
    shopName: string;
    date: string;
    paymentMethod: string;
    amount: number;
    icon?: string;
  }
  
  // Sample data list (replace with your actual data)
  const dataList: DataEntry[] = [
    { items: 'Item 1', shopName: 'Shop A', date: '2024-01-15', paymentMethod: 'Credit Card', amount: 50.0, icon: '/assets/Overview.svg' },
    { items: 'Item 2', shopName: 'Shop B', date: '2024-01-16', paymentMethod: 'Cash', amount: 30.0, icon: '/assets/Award.svg' },
    { items: 'Item 3', shopName: 'Shop C', date: '2024-01-17', paymentMethod: 'Credit Card', amount: 20.0, icon: '/assets/Transaction.svg' },
    { items: 'Item 4', shopName: 'Shop D', date: '2024-01-18', paymentMethod: 'Cash', amount: 10.0, icon: '/assets/Overview.svg' },
    // Add more entries as needed
  ];

  
    return ( 
      <div className="flex w-full  min-h-screen">
        <div className="min-w-1/4 min-h-screen flex flex-col justify-between ">
        <Sidebar />
      </div>
        <div className="w-full bg-special-bg dark:bg-black-dark dark:text-white min-h-screen px-6 py-8 flex flex-col ">
          <div className=""><Header/></div>
          <div className="relative text-[2.25rem] py-6 font-semibold font-geist">Expenses</div>
          <div className='relative rounded-[10px] flex flex-col bg-white dark:bg-gray-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-auto'>
          

            <table className="min-w-full p-6 overflow-hidden sm:min-w-1/4">
              <thead className=" border-special-bg dark:border-white border-b border-solid">
                <tr>
                  <th className="py-2 px-4  border-special-bg dark:border-white  border-b border-solid ">Items</th>
                  <th className="py-2 px-4  border-special-bg dark:border-white  border-b border-solid ">Shop Name</th>
                  <th className="py-2 px-4  border-special-bg dark:border-white  border-b border-solid ">Date</th>
                  <th className="py-2 px-4  border-special-bg dark:border-white  border-b border-solid ">Payment Method</th>
                  <th className="py-2 px-4  border-special-bg dark:border-white  border-b border-solid ">Amount</th>
                </tr>
              </thead> 
              <tbody>
                {dataList.map((entry, index) => (
                  <tr key={index}>
                    <td className="py-2 px-4 border-special-bg dark:border-white  border-b border-solid ">
                      <div className="flex items-center">
                        <img src={entry.icon} alt="Icon" className="w-6 h-6 rounded-md mr-2" />
                        {entry.items}
                      </div>
                    </td>
                    <td className="py-2 px-4  border-special-bg dark:border-white  border-b border-solid ">{entry.shopName}</td>
                    <td className="py-2 px-4 border-special-bg dark:border-white  border-b border-solid ">{entry.date}</td>
                    <td className="py-2 px-4 border-special-bg dark:border-white  border-b border-solid ">{entry.paymentMethod}</td>
                    <td className="py-2 px-4 border-special-bg dark:border-white  border-b border-solid ">{entry.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            
            <div className="flex justify-center items-center gap-4 p-4">
              <button className="bg-mediumblue dark:bg-mediumpurple text-white dark:text-white rounded-md px-4 py-2">Add Expense</button>
           </div>
          </div>
        </div>
     );
}
 
export default Expenses;