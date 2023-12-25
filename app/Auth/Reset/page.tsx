import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';


const Reset = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-15">
    <div 
            className="
                flex 
                min-h-full 
                flex-col 
                justify-center 
                py-10 
                sm:px-6 
                lg:px-8 
               bg-white
            "
        >
    <div className="sm:mx-auto sm:w-full sm:max-w-md relative [filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] w-full flex flex-col items-center justify-start text-lg text-black font-ubuntu">
          <h2 
                    className="
                        mt-6 
                        text-3xl 
                        tracking-tight 
                        relative 
                        leading-[2.25rem] 
                        font-bold 
                        font-ubuntu 
                        text-black1 
                        text-left
                    "
                >
                <Image
                  height={48}
                  width={48}
                  className="mx-auto w-auto justify-center relative align-middle object-cover rounded-md"
                  src="/assets/logo.svg"
                  alt="Logo"
                />   Flavour Trail
            </h2>
      </div>
         
                
        
    <form action="" className='[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] shrink-0 flex w-full overflow-y-hidden flex-col items-center justify-start gap-[1.5rem] text-center text-[1rem] text-black font-semibold-16-24'>
        <div className="relative w-full flex flex-col items-center justify-center text-center text-lg sm:text-[1.5rem] text-black font-inter">
          <b className="relative leading-10 sm:leading-[2.5rem] inline-block w-full sm:w-[21.38rem]">Forgot Password?</b>
        </div>
        <div className="relative text-[0.9rem] sm:text-[1.13rem] leading-[1.5rem] sm:leading-[1.63rem] font-inter text-gray-01 text-center inline-block w-full sm:w-[21.38rem]">
          Enter your email address to get the password reset link.
        </div>          
                          {/* Email Input */}

        <div className="shrink-0 flex flex-col items-start justify-start gap-[0.5rem]">
            <div className="relative leading-[1.5rem] font-medium inline-block overflow-hidden shadow-sm text-ellipsis whitespace-nowrap shrink-0">Email Address</div>
            <input type='email'
              id='email'
              placeholder='johndoe@gmail.com'
              className="rounded-lg box-border w-[25rem] h-[3rem] flex flex-row items-start justify-start py-[0.75rem] px-[1rem] text-gray-01 border-[1px] border-solid border-gray-03" />    
        </div>
           
        <div className="relative w-full flex flex-col items-start justify-start gap-5 text-left text-sm text-dimgray font-semibold">
          <div className="rounded cursor-pointer bg-mediumblue w-full sm:w-[25rem] py-8 h-12 flex items-center justify-center px-[0.75rem] box-border text-[1rem] text-white">
            <button className="relative leading-6 bg-transparent cursor-pointer text-white font-semibold inline-block w-[10rem] sm:w-auto">Password Reset</button>
          </div>
        </div>   
        <Link href='/' className="relative text-[0.88rem] sm:text-[1rem] leading-[1.25rem] no-underline sm:leading-[1.5rem] font-semibold text-gray-02 text-center inline-block overflow-hidden text-ellipsis whitespace-nowrap w-full sm:w-[21.38rem]">
          Back to login
        </Link>
    </form>
    </div>    
                  
  </main>
  )
}

export default Reset;