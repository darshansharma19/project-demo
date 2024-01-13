'use client';
import React from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';

const Notifications = () => {
    return ( 
    <div className="flex min-h-screen">
      <div className="w-1/4 min-h-screen flex flex-col justify-between">
        <Sidebar />
      </div>
      <div className="w-full bg-special-bg px-8 py-8 flex flex-col justify-between">
          <div className=""><Header/></div>
        <div className='m-0  py-12 flex flex-col gap-6 h-full font-bold'>
          <div className="relative w-full flex flex-col items-start justify-start gap-2 text-left  text-text font-geist">
            <div className="relative text-[1.38rem] font-semibold font-geist">Notifications</div>
          </div>
          
          <div className="flex flex-row flex-wrap gap-8">
            <div className="relative rounded-lg shadow-xl   bg-background-light box-border w-[264px] h-[240px] object-contain overflow-hidden flex flex-col  p-6   border-solid border-border">
               <div className='flex flex-col justify-center items-center'>
                 <div className='relative text-[1rem] leading-6] capitalize font-bold-16-24 text-gray-02 text-left'>Notification</div>
               </div>
                <div className="relative w-full flex flex-col items-start justify-start gap-6 text-left  text-default-black font-medium-14-20">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold font-semibold-20-28 inline-block w-[19rem]">{`Reserve a Table `}</div>
                    <div className="relative text-[0.88rem]  leading-5 font-regular-14-20 text-gray-03 inline-block w-[8rem]">{`Mr . patrick `}</div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold inline-block w-[7.81rem]">20 Dec</div>
                    <div className="relative text-[0.88rem] leading-5 font-regular-14-20 text-gray-03 inline-block w-[7.81rem]">12:30 pm</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center p-6'>
                <div className="relative rounded bg-mediumblue w-32 flex flex-row items-center justify-center py-2 px-5 box-border gap-2 text-left text-[0.88rem] text-white font-medium-14-20">
                    <div className="relative leading-5 capitalize font-medium">{`done `}</div>
                    <img className="relative w-4 h-4 overflow-hidden shrink-0" alt="" src="/assets/chevron-right (1)_white.svg" />
                  </div>
                </div>
            </div>
            <div className="relative rounded-lg shadow-xl  bg-background-light box-border w-[264px] h-[240px] object-contain overflow-hidden flex flex-col  p-6   border-solid border-border">
               <div className='flex flex-col justify-center items-center'>
                 <div className='relative text-[1rem] leading-6] capitalize font-bold-16-24 text-gray-02 text-left'>Notification</div>
               </div>
                <div className="relative w-full flex flex-col items-start justify-start gap-6 text-left  text-default-black font-medium-14-20">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold font-semibold-20-28 inline-block w-[19rem]">{`Reserve a Table `}</div>
                    <div className="relative text-[0.88rem]  leading-5 font-regular-14-20 text-gray-03 inline-block w-[8rem]">{`Mr . patrick `}</div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold inline-block w-[7.81rem]">20 Dec</div>
                    <div className="relative text-[0.88rem] leading-5 font-regular-14-20 text-gray-03 inline-block w-[7.81rem]">12:30 pm</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center p-6'>
                <div className="relative rounded bg-mediumblue w-32 flex flex-row items-center justify-center py-2 px-5 box-border gap-2 text-left text-[0.88rem] text-white font-medium-14-20">
                    <div className="relative leading-5 capitalize font-medium">{`done `}</div>
                    <img className="relative w-4 h-4 overflow-hidden shrink-0" alt="" src="/assets/chevron-right (1)_white.svg" />
                  </div>
                </div>
            </div>
            <div className="relative rounded-lg shadow-xl  bg-background-light box-border w-[264px] h-[240px] object-contain overflow-hidden flex flex-col  p-6   border-solid border-border">
               <div className='flex flex-col justify-center items-center'>
                 <div className='relative text-[1rem] leading-6] capitalize font-bold-16-24 text-gray-02 text-left'>Notification</div>
               </div>
                <div className="relative w-full flex flex-col items-start justify-start gap-6 text-left  text-default-black font-medium-14-20">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold font-semibold-20-28 inline-block w-[19rem]">{`Reserve a Table `}</div>
                    <div className="relative text-[0.88rem]  leading-5 font-regular-14-20 text-gray-03 inline-block w-[8rem]">{`Mr . patrick `}</div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold inline-block w-[7.81rem]">20 Dec</div>
                    <div className="relative text-[0.88rem] leading-5 font-regular-14-20 text-gray-03 inline-block w-[7.81rem]">12:30 pm</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center p-6'>
                <div className="relative rounded bg-mediumblue w-32 flex flex-row items-center justify-center py-2 px-5 box-border gap-2 text-left text-[0.88rem] text-white font-medium-14-20">
                    <div className="relative leading-5 capitalize font-medium">{`done `}</div>
                    <img className="relative w-4 h-4 overflow-hidden shrink-0" alt="" src="/assets/chevron-right (1)_white.svg" />
                  </div>
                </div>
            </div>
            <div className="relative rounded-lg shadow-xl  bg-background-light box-border w-[264px] h-[240px] object-contain overflow-hidden flex flex-col  p-6   border-solid border-border">
               <div className='flex flex-col justify-center items-center'>
                 <div className='relative text-[1rem] leading-6] capitalize font-bold-16-24 text-gray-02 text-left'>Notification</div>
               </div>
                <div className="relative w-full flex flex-col items-start justify-start gap-6 text-left  text-default-black font-medium-14-20">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold font-semibold-20-28 inline-block w-[19rem]">{`Reserve a Table `}</div>
                    <div className="relative text-[0.88rem]  leading-5 font-regular-14-20 text-gray-03 inline-block w-[8rem]">{`Mr . patrick `}</div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold inline-block w-[7.81rem]">20 Dec</div>
                    <div className="relative text-[0.88rem] leading-5 font-regular-14-20 text-gray-03 inline-block w-[7.81rem]">12:30 pm</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center p-6'>
                <div className="relative rounded bg-mediumblue w-32 flex flex-row items-center justify-center py-2 px-5 box-border gap-2 text-left text-[0.88rem] text-white font-medium-14-20">
                    <div className="relative leading-5 capitalize font-medium">{`done `}</div>
                    <img className="relative w-4 h-4 overflow-hidden shrink-0" alt="" src="/assets/chevron-right (1)_white.svg" />
                  </div>
                </div>
            </div>
            <div className="relative rounded-lg shadow-xl  bg-background-light box-border w-[264px] h-[240px] object-contain overflow-hidden flex flex-col  p-6   border-solid border-border">
               <div className='flex flex-col justify-center items-center'>
                 <div className='relative text-[1rem] leading-6] capitalize font-bold-16-24 text-gray-02 text-left'>Notification</div>
               </div>
                <div className="relative w-full flex flex-col items-start justify-start gap-6 text-left  text-default-black font-medium-14-20">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold font-semibold-20-28 inline-block w-[19rem]">{`Reserve a Table `}</div>
                    <div className="relative text-[0.88rem]  leading-5 font-regular-14-20 text-gray-03 inline-block w-[8rem]">{`Mr . patrick `}</div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold inline-block w-[7.81rem]">20 Dec</div>
                    <div className="relative text-[0.88rem] leading-5 font-regular-14-20 text-gray-03 inline-block w-[7.81rem]">12:30 pm</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center p-6'>
                <div className="relative rounded bg-mediumblue w-32 flex flex-row items-center justify-center py-2 px-5 box-border gap-2 text-left text-[0.88rem] text-white font-medium-14-20">
                    <div className="relative leading-5 capitalize font-medium">{`done `}</div>
                    <img className="relative w-4 h-4 overflow-hidden shrink-0" alt="" src="/assets/chevron-right (1)_white.svg" />
                  </div>
                </div>
            </div>
            <div className="relative rounded-lg shadow-xl  bg-background-light box-border w-[264px] h-[240px] object-contain overflow-hidden flex flex-col  p-6   border-solid border-border">
               <div className='flex flex-col justify-center items-center'>
                 <div className='relative text-[1rem] leading-6] capitalize font-bold-16-24 text-gray-02 text-left'>Notification</div>
               </div>
                <div className="relative w-full flex flex-col items-start justify-start gap-6 text-left  text-default-black font-medium-14-20">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold font-semibold-20-28 inline-block w-[19rem]">{`Reserve a Table `}</div>
                    <div className="relative text-[0.88rem]  leading-5 font-regular-14-20 text-gray-03 inline-block w-[8rem]">{`Mr . patrick `}</div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold inline-block w-[7.81rem]">20 Dec</div>
                    <div className="relative text-[0.88rem] leading-5 font-regular-14-20 text-gray-03 inline-block w-[7.81rem]">12:30 pm</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center p-6'>
                <div className="relative rounded bg-mediumblue w-32 flex flex-row items-center justify-center py-2 px-5 box-border gap-2 text-left text-[0.88rem] text-white font-medium-14-20">
                    <div className="relative leading-5 capitalize font-medium">{`done `}</div>
                    <img className="relative w-4 h-4 overflow-hidden shrink-0" alt="" src="/assets/chevron-right (1)_white.svg" />
                  </div>
                </div>
            </div>
            <div className="relative rounded-lg shadow-xl  bg-background-light box-border w-[264px] h-[240px] object-contain overflow-hidden flex flex-col  p-6   border-solid border-border">
               <div className='flex flex-col justify-center items-center'>
                 <div className='relative text-[1rem] leading-6] capitalize font-bold-16-24 text-gray-02 text-left'>Notification</div>
               </div>
                <div className="relative w-full flex flex-col items-start justify-start gap-6 text-left  text-default-black font-medium-14-20">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold font-semibold-20-28 inline-block w-[19rem]">{`Reserve a Table `}</div>
                    <div className="relative text-[0.88rem]  leading-5 font-regular-14-20 text-gray-03 inline-block w-[8rem]">{`Mr . patrick `}</div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold inline-block w-[7.81rem]">20 Dec</div>
                    <div className="relative text-[0.88rem] leading-5 font-regular-14-20 text-gray-03 inline-block w-[7.81rem]">12:30 pm</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center p-6'>
                <div className="relative rounded bg-mediumblue w-32 flex flex-row items-center justify-center py-2 px-5 box-border gap-2 text-left text-[0.88rem] text-white font-medium-14-20">
                    <div className="relative leading-5 capitalize font-medium">{`done `}</div>
                    <img className="relative w-4 h-4 overflow-hidden shrink-0" alt="" src="/assets/chevron-right (1)_white.svg" />
                  </div>
                </div>
            </div>
            <div className="relative rounded-lg shadow-xl  bg-background-light box-border w-[264px] h-[240px] object-contain overflow-hidden flex flex-col  p-6   border-solid border-border">
               <div className='flex flex-col justify-center items-center'>
                 <div className='relative text-[1rem] leading-6] capitalize font-bold-16-24 text-gray-02 text-left'>Notification</div>
               </div>
                <div className="relative w-full flex flex-col items-start justify-start gap-6 text-left  text-default-black font-medium-14-20">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold font-semibold-20-28 inline-block w-[19rem]">{`Reserve a Table `}</div>
                    <div className="relative text-[0.88rem]  leading-5 font-regular-14-20 text-gray-03 inline-block w-[8rem]">{`Mr . patrick `}</div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold inline-block w-[7.81rem]">20 Dec</div>
                    <div className="relative text-[0.88rem] leading-5 font-regular-14-20 text-gray-03 inline-block w-[7.81rem]">12:30 pm</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center p-6'>
                <div className="relative rounded bg-mediumblue w-32 flex flex-row items-center justify-center py-2 px-5 box-border gap-2 text-left text-[0.88rem] text-white font-medium-14-20">
                    <div className="relative leading-5 capitalize font-medium">{`done `}</div>
                    <img className="relative w-4 h-4 overflow-hidden shrink-0" alt="" src="/assets/chevron-right (1)_white.svg" />
                  </div>
                </div>
            </div>
            <div className="relative rounded-lg shadow-xl  bg-background-light box-border w-[264px] h-[240px] object-contain overflow-hidden flex flex-col  p-6   border-solid border-border">
               <div className='flex flex-col justify-center items-center'>
                 <div className='relative text-[1rem] leading-6] capitalize font-bold-16-24 text-gray-02 text-left'>Notification</div>
               </div>
                <div className="relative w-full flex flex-col items-start justify-start gap-6 text-left  text-default-black font-medium-14-20">
                  <div className="flex flex-col items-start justify-start gap-4">
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold font-semibold-20-28 inline-block w-[19rem]">{`Reserve a Table `}</div>
                    <div className="relative text-[0.88rem]  leading-5 font-regular-14-20 text-gray-03 inline-block w-[8rem]">{`Mr . patrick `}</div>
                    </div>
                    <div className="flex flex-col items-start justify-start gap-1">
                    <div className="relative leading-7 capitalize font-semibold inline-block w-[7.81rem]">20 Dec</div>
                    <div className="relative text-[0.88rem] leading-5 font-regular-14-20 text-gray-03 inline-block w-[7.81rem]">12:30 pm</div>
                    </div>
                  </div>
                </div>
                <div className='flex flex-row gap-2 justify-center items-center p-6'>
                <div className="relative rounded bg-mediumblue w-32 flex flex-row items-center justify-center py-2 px-5 box-border gap-2 text-left text-[0.88rem] text-white font-medium-14-20">
                    <div className="relative leading-5 capitalize font-medium">{`done `}</div>
                    <img className="relative w-4 h-4 overflow-hidden shrink-0" alt="" src="/assets/chevron-right (1)_white.svg" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Notifications;