'use client';

import React, { useState, useEffect } from 'react';
import MonacoEditor from 'react-monaco-editor';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';
import MyMonacoEditor from '../CodeEditor/MyMonacoEditor';



// Function to save code to the database
const saveCodeToDatabase = (code: string, section: string) => {
    // Implement your code to save to the database
    console.log(`Saving code for ${section}:`, code);
  };

  
const Customcode = () => {

    const [headerCode, setHeaderCode] = useState<string>('');
    const [footerCode, setFooterCode] = useState<string>('');
  
    useEffect(() => {
      // Save code to the database when it changes
      saveCodeToDatabase(headerCode, 'Header');
    }, [headerCode]);
  
    useEffect(() => {
      // Save code to the database when it changes
      saveCodeToDatabase(footerCode, 'Footer');
    }, [footerCode]);
  

  
    return ( 
      <div className="flex w-full  min-h-screen">
        <div className="w-1/4 min-h-screen flex flex-col justify-between">
          <Sidebar />
        </div>
        <div className="w-full bg-special-bg dark:bg-black-dark dark:text-white min-h-screen px-6 py-8 flex flex-col ">
          <div className=""><Header/></div>
          <div className="relative text-[2.25rem] py-6 font-semibold font-geist">Custom Code</div>
          <div className='relative   w-full rounded-[10px] flex flex-col bg-white dark:bg-gray-200 shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)]  h-auto'>

            <div className='p-6 flex flex-col items-start justify-start gap-2'>
                <div className="relative w-full flex flex-col items-start justify-start gap-2 text-left text-[1.5rem] text-text font-inter border-black dark:border-white border-b-2 border-solid">
                    <div className="relative tracking-[0.01em] font-medium">{`Add custom HTML & CSS`}</div>
                    <div className="relative text-[0.88rem] pb-2 shrink-0">{`Add custom code for more flexibiliy . Save your progress by pressing Cmd+Shift +s on Mac, or Ctrl +shift+S on Windows.`}</div>
                </div>
            </div>

             <div className="px-6 pb-6">
                {/* Section 1: Header Code */}
                <div className="text-2xl font-bold mb-4">Head Code</div>
                <MyMonacoEditor language='html' value={headerCode} onChange={setHeaderCode}  />
            {/* Section 2: Footer Code */}
                <div className="text-2xl font-bold mb-4">Footer Code</div>
                <MyMonacoEditor language="html" value={footerCode} onChange={setFooterCode}/>
             </div>

             <div className="relative text-[1.5rem] tracking-[0.01em] px-6 font-medium font-inter text-text text-left">Advance settings</div>
            <div className='flex flex-row pb-6 px-6 gap-4'>
                <div className='flex flex-col w-1/2 '>
                <div className="relative text-[1rem] leading-[1.5rem] font-medium font-medium-16-24 pb-2 text-gray-01 text-left inline-block w-[13.25rem]">Base tag: (href=)</div>
                <input type='text' className="relative rounded-[10px] focus:outline-none text-white dark:bg-mediumpurple bg-mediumblue w-2/3 h-[2.38rem]" />
                </div>

                <div className='flex flex-col w-1/2 '>
                    <div className="relative text-[1rem] leading-[1.5rem] font-medium font-medium-16-24 pb-2 text-gray-01 text-left inline-block w-[13.25rem]">Href prefix</div>
                    <input type='text' className="relative rounded-[10px] focus:outline-none text-white dark:bg-mediumpurple bg-mediumblue w-2/3 h-[2.38rem]" />
                </div>
            </div>

          </div>
        </div>
      </div>
     );
}
 
export default Customcode;