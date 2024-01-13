'use client';

import React from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';

const Mediaassets = () => {
    return ( 
      <div className="flex w-full min-h-screen">
        <div className="w-1/4 min-h-screen flex flex-col justify-between">
          <Sidebar />
        </div>
        <div className="w-full bg-special-bg min-h-screen px-6 py-8 flex flex-col justify-between">
          <div className=""><Header/></div>
          <div className='m-0  py-8 h-7 font-bold'>Project Assets</div>
          <div className='relative rounded-[10px] flex flex-col bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[51.13rem]'>
            <div className='flex flex-col items-end m-3'>
              <button className="flex justify-center items-center cursor-pointer relative rounded-[10px] bg-mediumblue w-52 h-12">
                <img className="relative w-7 h-7 overflow-hidden object-cover" alt="media" src="/assets/pajamas_media.svg" />
                <div className="relative text-[1.13rem] leading-6 font-semibold font-inter text-white  inline-block w-[7.56rem]">Upload Media</div>
              </button>
            </div>
            <div className='flex flex-col pt-8 justify-center items-center'>
              <img className="relative w-[418px] pb-4 h-[24.56rem] object-cover" alt="" src="/assets/tempImageo5kBYt1.png" />
              <b className="relative text-[2.5rem] pb-4 tracking-[0.01em] font-inter text-text">Project Media</b>
              <div className="relative text-[1rem] pb-4 leading-6 font-medium font-medium-16-24 text-gray-01 text-center inline-block w-[38.63rem]">You don’t have any media associated with this project</div>
              <div className="relative text-[1rem] leading-[1.5rem] text-center inline-block w-[38.63rem] text-dimgray font-inter">
                <span className="font-medium">{`Use the `}</span>
                <b className="text-mediumblue cursor-pointer">Upload Media</b>
                <span className="font-medium">{` button in the top right or `}</span>
                <b className="text-mediumblue">{`Drag & Drop`}</b>
                <span className="font-medium">{` to add assets that you can use throught your project `}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
     );
}
 
export default Mediaassets;