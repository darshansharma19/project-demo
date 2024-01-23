'use client'
import React from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';
import Link from 'next/link';

const Profile = () => {
    return ( 
    <div className="flex min-h-screen">
        <div className="w-1/4 min-h-screen flex flex-col justify-between">
          <Sidebar />
        </div>
        <div className="w-full bg-special-bg dark:bg-black-dark dark:text-white px-6 py-8 flex flex-col justify-between">
          <div className=""><Header/></div>
          <div className='m-0 py-8 flex flex-col gap-6 h-7 font-bold'>Profile </div>
          <div className="relative rounded-[10px] flex flex-row bg-white dark:bg-gray-200 dark:text-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[51.13rem]" >     
  {/* Profile Form */}
                <div className="flex p-8 w-1/2 flex-col">
                 <Link href='' className="flex no-underline font-bold  font-segoe-ui text-tertiary text-left flex-row gap-0 items-start">  
                  <img className="relative w-5 h-5 object-contain cursor-pointer" alt="" src="/assets/chevron-down.svg"  /> User Profile 
                 </Link >  
                 <div className="relative box-border my-7  w-96 h-[0.06rem] border-t-[1px] border-solid border-mediumblue dark:border-mediumpurple" />                  
                 <img className="relative rounded-[50%] mx-2 w-24 h-[6.25rem] object-cover" alt="" src="/assets/Ellipse-1.svg" />
                  {/* Profile Form */}
                  <form action="" className="my-8 mx-2 w-80">
                    {/* Full Name */}
                    <div className="shrink-0 flex w-80 flex-col items-start justify-start gap-[0.5rem]">
                      <div className="relative leading-[1.5rem] font-segoe-ui text-tertiary font-medium inline-block overflow-hidden shadow-sm text-ellipsis whitespace-nowrap shrink-0">Full Name</div>
                      <input type='Name'
                        id='Name'
                        placeholder='John Smith'
                        className="rounded-lg focus:outline-none box-border w-80 h-[3rem] flex flex-row items-start justify-start py-5 px-4 text-gray-01 border-[1px] border-solid border-gray-03" />    
                    </div>
                    {/* Phone Number */}
                    <div className="shrink-0 flex w-80 py-5 flex-col items-start justify-start gap-[0.5rem]">
                      <div className="relative leading-[1.5rem] font-segoe-ui text-tertiary font-medium inline-block overflow-hidden shadow-sm text-ellipsis whitespace-nowrap shrink-0">Mobile Number</div>
                      <input type='tel'
                        id='Phone Number'
                        placeholder='+1 16538552163'
                        className="rounded-lg focus:outline-none box-border w-80 h-[3rem] flex flex-row items-start justify-start py-5 px-4 text-gray-01 border-[1px] border-solid border-gray-03" />    
                    </div>
                    {/* Email Address */}
                    <div className="shrink-0 flex w-80 flex-col items-start justify-start gap-[0.5rem]">
                      <div className="relative leading-[1.5rem] font-segoe-ui text-tertiary font-medium inline-block overflow-hidden shadow-sm text-ellipsis whitespace-nowrap shrink-0">Email Address</div>
                      <input type='email'
                        id='Email Address'
                        placeholder='Bob.smith22@gmail.com'
                        className="rounded-lg focus:outline-none box-border w-80 h-[3rem] flex flex-row items-start justify-start py-5 px-4 text-gray-01 border-[1px] border-solid border-gray-03" />    
                    </div>
                    {/* Joined On Date */}
                    <div className="shrink-0 flex w-80 py-5 flex-col items-start justify-start gap-2">
                      <div className="relative leading-[1.5rem] font-segoe-ui text-tertiary font-medium inline-block overflow-hidden shadow-sm text-ellipsis whitespace-nowrap shrink-0">Joined On</div>
                      <input type='date'
                        id='Date Joined'
                        className="rounded-lg focus:outline-none box-border w-80 h-[3rem] flex flex-row items-start justify-start py-5 px-4 text-gray-01 border-[1px] border-solid border-gray-03" />    
                    </div>
                    <div className="relative leading-6  font-segoe-ui text-tertiary font-medium inline-block overflow-hidden shadow-sm text-ellipsis whitespace-nowrap shrink-0">Savings/Coin</div>  
                    <div className='flex flex-row'>
                      <div className="shrink-0 flex flex-col  w-1/2 items-start justify-start gap-2">
                         <input type='number'
                          id='savings'
                          placeholder='20'
                          className="rounded-lg focus:outline-none w-40 box-border  h-[3rem] flex flex-row items-start justify-start py-5 px-4 text-gray-01 border-[1px] border-solid border-gray-03" />    
                      </div>
                      <div className="shrink-0 flex flex-col py-[2px] px-3 w-1/2 items-start justify-start gap-2">
                      <button
                        id="button"
                        type="button"
                        aria-label="Update Savings"
                        className="rounded-lg focus:outline-none w-40 box-border bg-white dark:bg-mediumpurple dark:text-white h-11 flex items-center justify-center  px-4 text-mediumblue border border-solid border-mediumblue"
                      >
                        Update Savings
                      </button>
        
                      </div>
                    </div>
                  </form>
                </div>
                      {/* Details */}
                <div className="flex p-8 w-1/2 flex-col">
                 <b className="flex  pl-2 font-bold flex-row gap-0 leading-7 font-segoe-ui text-tertiary text-left items-start">   
                  History and Recent Bookings
                 </b>  
                 <div className="relative box-border my-5  w-96 h-[0.06rem] border-t-[1px] border-solid border-mediumblue dark:border-mediumpurple" />
                <div className="relative flex flex-row gap-7 w-full h-[6.19rem] text-left text-[0.75rem] text-tertiary font-segoe-ui">
                  <div className="flex flex-col pl-2 gap-1 w-2/3">
                    <b className="relative text-[0.88rem] leading-6 font-segoe-ui text-tertiary text-left">Sea Grill of Merrick Park</b>
                    <div className="relative text-[0.75rem] leading-5 font-segoe-ui text-mediumblue dark:text-mediumpurple text-left">Reserved</div>
                    <div className="relative w-full h-[1.25rem] text-left text-[0.75rem] text-tertiary font-segoe-ui">
                      <img className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem]" alt="" src="/assets/material-symbols_date-range.svg" />
                      <b className="absolute top-[0.06rem] left-[2.19rem]">17 December 2022 | 12:15 PM</b>
                    </div>
                    <div className="relative w-full h-[1.25rem] text-left text-[0.75rem] text-tertiary font-segoe-ui">
                      <img className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem]" alt="" src="/assets/mdi_person-multiple.svg" />
                      <b className="absolute top-[0.06rem] left-[2.19rem]">2 Guests</b>
                    </div>
                  </div>
                  <div className="flex flex-col pr-2 gap-1 w-1/3">
                    <div className="relative text-[0.63rem] leading-6 font-segoe-ui text-tertiary text-right">2 hrs ago</div>
                    <div className="relative text-[0.63rem] leading-5 [text-decoration:underline] font-segoe-ui text-deeppink text-right">Cancel Booking</div>
                    <b className="relative text-[0.75rem] font-segoe-ui text-tertiary text-right">Saved : $2</b>
                  </div>  
                </div>
                <div className="relative box-border my-5  w-96 h-[0.06rem] border-t-[1px] border-solid border-mediumblue dark:border-mediumpurple" />
                <div className="relative flex flex-row gap-7 w-full h-[6.19rem] text-left text-[0.75rem] text-tertiary font-segoe-ui">
                  <div className="flex flex-col pl-2 gap-1 w-2/3">
                    <b className="relative text-[0.88rem] leading-6 font-segoe-ui text-tertiary text-left">Sea Grill North Miami Beach</b>
                    <div className="relative text-[0.75rem] leading-5 font-segoe-ui text-deeppink text-left">Cancelled</div>
                    <div className="relative w-full h-[1.25rem] text-left text-[0.75rem] text-tertiary font-segoe-ui">
                      <img className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem]" alt="" src="/assets/material-symbols_date-range.svg" />
                      <b className="absolute top-[0.06rem] left-[2.19rem]">17 December 2022 | 12:15 PM</b>
                    </div>
                    <div className="relative w-full h-[1.25rem] text-left text-[0.75rem] text-tertiary font-segoe-ui">
                      <img className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem]" alt="" src="/assets/mdi_person-multiple.svg" />
                      <b className="absolute top-[0.06rem] left-[2.19rem]">2 Guests</b>
                    </div>
                  </div>
                  <div className="flex flex-col pr-2 gap-1 w-1/3">
                    <div className="relative text-[0.63rem] leading-6 font-segoe-ui text-tertiary text-right">2 Days ago</div>
                    <div className="relative text-[0.63rem] leading-5 [text-decoration:underline] font-segoe-ui text-transparent text-right"> ads </div>
                    <b className="relative text-[0.75rem] font-segoe-ui text-tertiary text-right">Saved : $0</b>
                  </div>  
                </div>
                <div className="relative box-border my-5  w-96 h-[0.06rem] border-t-[1px] border-solid border-mediumblue dark:border-mediumpurple" />
                <div className="relative flex flex-row gap-7 w-full h-[6.19rem] text-left text-[0.75rem] text-tertiary font-segoe-ui">
                  <div className="flex flex-col pl-2 gap-1 w-2/3">
                    <b className="relative text-[0.88rem] leading-6 font-segoe-ui text-tertiary text-left">Villagio Restaurant and Bar</b>
                    <div className="relative text-[0.75rem] leading-5 font-segoe-ui text-mediumblue dark:text-mediumpurple text-left">Completed</div>
                    <div className="relative w-full h-[1.25rem] text-left text-[0.75rem] text-tertiary font-segoe-ui">
                      <img className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem]" alt="" src="/assets/material-symbols_date-range.svg" />
                      <b className="absolute top-[0.06rem] left-[2.19rem]">17 December 2022 | 12:15 PM</b>
                    </div>
                    <div className="relative w-full h-[1.25rem] text-left text-[0.75rem] text-tertiary font-segoe-ui">
                      <img className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem]" alt="" src="/assets/mdi_person-multiple.svg" />
                      <b className="absolute top-[0.06rem] left-[2.19rem]">2 Guests</b>
                    </div>
                  </div>
                  <div className="flex flex-col pr-2 gap-1 w-1/3">
                    <div className="relative text-[0.63rem] leading-6 font-segoe-ui text-tertiary text-right">10 Days ago</div>
                    <div className="relative text-[0.63rem] leading-5 [text-decoration:underline] font-segoe-ui text-transparent text-right">Cancel Booking</div>
                    <b className="relative text-[0.75rem] font-segoe-ui text-tertiary text-right">Saved : $2</b>
                  </div>  
                </div>
                <div className="relative box-border my-5  w-96 h-[0.06rem] border-t-[1px] border-solid border-mediumblue dark:border-mediumpurple" />
                <div className="relative flex flex-row gap-7 w-full h-[6.19rem] text-left text-[0.75rem] text-tertiary font-segoe-ui">
                  <div className="flex flex-col pl-2 gap-1 w-2/3">
                    <b className="relative text-[0.88rem] leading-6 font-segoe-ui text-tertiary text-left">Villagio Restaurant and Bar</b>
                    <div className="relative text-[0.75rem] leading-5 font-segoe-ui text-mediumblue dark:text-mediumpurple text-left">Completed</div>
                    <div className="relative w-full h-[1.25rem] text-left text-[0.75rem] text-tertiary font-segoe-ui">
                      <img className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem]" alt="" src="/assets/material-symbols_date-range.svg" />
                      <b className="absolute top-[0.06rem] left-[2.19rem]">17 December 2022 | 12:15 PM</b>
                    </div>
                    <div className="relative w-full h-[1.25rem] text-left text-[0.75rem] text-tertiary font-segoe-ui">
                      <img className="absolute top-[0rem] left-[0rem] w-[1.25rem] h-[1.25rem]" alt="" src="/assets/mdi_person-multiple.svg" />
                      <b className="absolute top-[0.06rem] left-[2.19rem]">2 Guests</b>
                    </div>
                  </div>
                  <div className="flex flex-col pr-2 gap-1 w-1/3">
                    <div className="relative text-[0.63rem] leading-6 font-segoe-ui text-tertiary text-right">10 Days ago</div>
                    <div className="relative text-[0.63rem] leading-5 [text-decoration:underline] font-segoe-ui text-transparent text-right">Cancel Booking</div>
                    <b className="relative text-[0.75rem] font-segoe-ui text-tertiary text-right">Saved : $2</b>
                  </div>  
                </div>
                <div className="relative box-border my-5  w-96 h-[0.06rem] border-t-[1px] border-solid border-mediumblue dark:border-mediumpurple" />
                
                <Link href='' className="relative w-full h-[2.5rem] text-center text-[1rem] text-white font-segoe-ui">
                  <div className="absolute top-[0rem] left-[0rem] rounded bg-mediumblue dark:bg-mediumpurple w-96 h-[2.5rem]" />
                  <b className="absolute top-[0.5rem] left-[0.11rem] leading-[1.5rem] inline-block w-[400px]">Save/Update Details</b>
                </Link >
              </div> 
          </div>
        </div>
    </div>
     );
}
 
export default Profile;