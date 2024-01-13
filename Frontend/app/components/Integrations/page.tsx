'use client';
import React from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';

const Integrations = () => {
    return ( 
    <div className="flex min-h-screen">
      <div className="w-1/4 min-h-screen flex flex-col justify-between">
        <Sidebar />
      </div>
      <div className="w-full bg-special-bg px-8 py-8 flex flex-col justify-between">
          <div className=""><Header/></div>
        <div className='m-0  py-12 flex flex-col gap-6 h-full font-bold'>
          <div className="relative w-full flex flex-col items-start justify-start gap-2 text-left text-4xl text-text font-geist">
            <div className="relative text-[2.25rem] font-semibold font-geist">Integrations</div>
            <div className="relative text-[1.13rem] tracking-[0.01em] leading-[1.38rem] font-light font-inter text-text-secondary text-left">
              Select and connect tools you use to integrate with your workflow
            </div>
          </div>
          <div className="relative w-full flex flex-row items-start justify-between text-left text-sm text-background-offwhite font-geist">
            <div className="flex flex-row items-start justify-start gap-2">
              <div className="rounded-481xl bg-mediumblue flex flex-row items-start justify-start py-2 px-3 gap-2 border border-solid border-primary-light ">
                <div className="relative text-white">All Integrations</div>
                <div className="rounded-lg bg-white w-6 flex items-center justify-center text-text">
                  <div className="relative">6</div>
                </div>
              </div>
            </div>
            <div className="rounded-481xl cursor-pointer bg-background-light overflow-hidden flex flex-row items-start justify-start p-1 ">
              <div className="rounded-481xl bg-mediumblue flex flex-row items-start justify-start p-2 border border-solid border-primary-light">
                <img className="relativ object-cover" alt="dots" src="/assets/DotsNine.svg" />
              </div>
              <div className="flex flex-row items-start justify-start p-2">
                <img className="relativ object-cover" alt="list" src="/assets/List.svg" />
              </div>
            </div>
          </div>
          <div className="flex flex-row flex-wrap gap-8">
            <div className="relative  bg-background-light box-border w-[264px] h-[189px] object-contain overflow-hidden flex flex-col items-start justify-start p-6  text-left text-[1.13rem] text-text font-inter border-[1px] border-solid border-border">
              
                <div className="rounded-[409.72px] w-8 h-8" >
                <img className="relative w-full h-[2rem] overflow-hidden object-cover" alt="" src="/assets/mdi_github.svg" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
                  <div className="w-[16.5rem] flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] font-medium">Github</div>
                  </div>
                  <div className="h-7 flex flex-row items-center justify-center text-[0.75rem]">
                    <div className="rounded-356xl cursor-pointer bg-background-light shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-center py-[0.38rem] px-[0.75rem] gap-[0.38rem] border-[0.8px] border-solid border-border">
                      <div className="relative">Connect</div>
                      <img className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 object-cover" alt="" src="/assets/CloudArrowUp.svg" />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem] font-inter text-text text-left">{`API key `}</div>
                  <input type="text" className="relative focus:outline-none rounded-[375px] bg-background-light shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] box-border w-full h-6 border-[0.8px] border-solid border-border" />
                </div>
            </div>
            <div className="relative bg-background-light box-border w-[264px] h-[189px] object-contain overflow-hidden flex flex-col items-start justify-start p-6  text-left text-[1.13rem] text-text font-inter border-[1px] border-solid border-border">
              
                <div className="rounded-[409.72px] w-8 h-8" >
                <img className="relative w-full h-[2rem] overflow-hidden object-cover" alt="" src="/assets/googlemaps.svg" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
                  <div className="w-[16.5rem] flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] font-medium">Google Maps</div>
                  </div>
                  <div className="h-7 flex flex-row items-center justify-center text-[0.75rem]">
                    <div className="rounded-356xl bg-background-light shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-center py-[0.38rem] px-[0.75rem] gap-[0.38rem] border-[0.8px] border-solid border-border">
                      <div className="relative cursor-pointer">Connect</div>
                      <img className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 object-cover" alt="" src="/assets/CloudArrowUp.svg" />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem] font-inter text-text text-left">{`API key `}</div>
                  <input type="text" className="relative focus:outline-none  rounded-[375px] bg-background-light shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] box-border w-full h-6 border-[0.8px] border-solid border-border" />
                </div>
            </div>
            <div className="relative  bg-background-light box-border w-[264px] h-[189px] object-contain overflow-hidden flex flex-col items-start justify-start p-6  text-left text-[1.13rem] text-text font-inter border-[1px] border-solid border-border">
              
                <div className="rounded-[409.72px] w-8 h-8" >
                <img className="relative w-full h-[2rem] overflow-hidden object-cover" alt="" src="/assets/googleanalytics.svg" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
                  <div className="w-[16.5rem] flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] font-medium">Google Analytics</div>
                  </div>
                  <div className="h-7 flex flex-row items-center justify-center text-[0.75rem]">
                    <div className="rounded-356xl cursor-pointer bg-background-light shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-center py-[0.38rem] px-[0.75rem] gap-[0.38rem] border-[0.8px] border-solid border-border">
                      <div className="relative ">Connect</div>
                      <img className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 object-cover" alt="" src="/assets/CloudArrowUp.svg" />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem] font-inter text-text text-left">{`API key `}</div>
                  <input type="text" className="relative focus:outline-none rounded-[375px] bg-background-light shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] box-border w-full h-6 border-[0.8px] border-solid border-border" />
                </div>
            </div>
            <div className="relative  bg-background-light box-border w-[264px] h-[189px] object-contain overflow-hidden flex flex-col items-start justify-start p-6  text-left text-[1.13rem] text-text font-inter border-[1px] border-solid border-border">
              
                <div className="rounded-[409.72px] w-8 h-8" >
                <img className="relative w-full h-[2rem] overflow-hidden object-cover" alt="" src="/assets/instagram.svg" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
                  <div className="w-[16.5rem] flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] font-medium">Instagram</div>
                  </div>
                  <div className="h-7 flex flex-row items-center justify-center text-[0.75rem]">
                    <div className="rounded-356xl cursor-pointer bg-background-light shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-center py-[0.38rem] px-[0.75rem] gap-[0.38rem] border-[0.8px] border-solid border-border">
                      <div className="relative ">Connect</div>
                      <img className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 object-cover" alt="" src="/assets/CloudArrowUp.svg" />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem] font-inter text-text text-left">{`API key `}</div>
                  <input type="text" className="relative focus:outline-none rounded-[375px] bg-background-light shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] box-border w-full h-6 border-[0.8px] border-solid border-border" />
                </div>
            </div>
            <div className="relative  bg-background-light box-border w-[264px] h-[189px] object-contain overflow-hidden flex flex-col items-start justify-start p-6  text-left text-[1.13rem] text-text font-inter border-[1px] border-solid border-border">
              
                <div className="rounded-[409.72px] w-8 h-8" >
                <img className="relative w-full h-[2rem] overflow-hidden object-cover" alt="" src="/assets/googleoptimize.svg" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
                  <div className="w-[16.5rem] flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] font-medium">Google Optimize</div>
                  </div>
                  <div className="h-7 flex flex-row items-center justify-center text-[0.75rem]">
                    <div className="rounded-356xl cursor-pointer bg-background-light shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-center py-[0.38rem] px-[0.75rem] gap-[0.38rem] border-[0.8px] border-solid border-border">
                      <div className="relative">Connect</div>
                      <img className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 object-cover" alt="" src="/assets/CloudArrowUp.svg" />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem] font-inter text-text text-left">{`API key `}</div>
                  <input type="text" className="relative focus:outline-none rounded-[375px] bg-background-light shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] box-border w-full h-6 border-[0.8px] border-solid border-border" />
                </div>
            </div>
            <div className="relative  bg-background-light box-border w-[264px] h-[189px] object-contain overflow-hidden flex flex-col items-start justify-start p-6  text-left text-[1.13rem] text-text font-inter border-[1px] border-solid border-border">
              
                <div className="rounded-[409.72px] w-8 h-8" >
                <img className="relative w-full h-[2rem] overflow-hidden object-cover" alt="" src="/assets/tiktok.svg" />
                </div>
                <div className="self-stretch flex flex-col items-start justify-start gap-[0.63rem]">
                  <div className="w-[16.5rem] flex flex-col items-start justify-start">
                    <div className="relative tracking-[0.01em] font-medium">Tik Tok</div>
                  </div>
                  <div className="h-7 flex flex-row items-center justify-center text-[0.75rem]">
                    <div className="rounded-356xl cursor-pointer bg-background-light shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] flex flex-row items-center justify-center py-[0.38rem] px-[0.75rem] gap-[0.38rem] border-[0.8px] border-solid border-border">
                      <div className="relative ">Connect</div>
                      <img className="relative w-[1rem] h-[1rem] overflow-hidden shrink-0 object-cover" alt="" src="/assets/CloudArrowUp.svg" />
                    </div>
                  </div>
                  <div className="relative text-[0.88rem] font-inter text-text text-left">{`API key `}</div>
                  <input type="text" className="relative rounded-[375px] bg-background-light shadow-[0px_3px_6px_-4px_rgba(0,_0,_0,_0.12),_0px_6px_16px_rgba(0,_0,_0,_0.08),_0px_9px_28px_8px_rgba(0,_0,_0,_0.05)] box-border w-full h-6 focus:outline-none border-[0.8px] border-solid border-border" />
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Integrations;