'use client';

import React from 'react'
import Image from 'next/image'
import { useState } from 'react';
import Link from 'next/link';



const Signup = () => {

  const [showPassword, setShowPassword] = useState(false);

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
                        relative text-[1.63rem]
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
    <b className="relative text-[1.5rem] leading-[1.75rem] inline-block font-bold-24-28 text-black text-center w-[21.38rem]">Create an account</b>

                  {/* Name Input */}
            <div className="shrink-0 flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative leading-[1.5rem] font-medium inline-block overflow-hidden shadow-sm text-ellipsis whitespace-nowrap shrink-0">Name</div>
                <input type='Name'
                  id='Name'
                  placeholder='Tanzir Rahman'
                  className="rounded-lg box-border w-[25rem] h-[3rem] flex flex-row items-start justify-start py-[0.75rem] px-[1rem] text-gray-02 border-[1px] border-solid border-gray-02" />    
            </div>

                            {/* Email Input */}

            <div className="shrink-0 flex flex-col items-start justify-start gap-[0.5rem]">
                <div className="relative leading-[1.5rem] font-medium inline-block overflow-hidden shadow-sm text-ellipsis whitespace-nowrap shrink-0">Email Address</div>
                <input type='email'
                  id='email'
                  placeholder='johndoe@gmail.com'
                  className="rounded-lg box-border w-[25rem] h-[3rem] flex flex-row items-start justify-start py-[0.75rem] px-[1rem] text-gray-02 border-[1px] border-solid border-gray-02" />    
            </div>
                
                              {/* Password Input */}

            <div className="shrink-0 flex flex-col items-start justify-start gap-0.5">
              <div className="w-full flex items-center justify-between">
                  <div className="relative leading-[1.5rem] font-medium inline-block overflow-hidden text-ellipsis whitespace-nowrap shrink-0">Password</div>
                  {/* <div className="relative text-sm font-medium text-mediumblue text-right inline-block w-32 cursor-pointer">Forgot Password?</div> */}
              </div>
                <input type={showPassword ? 'text' : 'password'} 
                id='password'
                placeholder='...........' 
                className="rounded-lg box-border w-[25rem] h-[3rem] text-justify text-bold flex flex-row items-start justify-start py-[0.75rem] px-[1rem] text-gray-02 border-[1px] border-solid border-gray-02" />    
            </div>

{/* Signup */}
            <div className="relative w-full flex flex-col items-start justify-start gap-5 text-left text-sm text-dimgray font-semibold">
                  <div className="shrink-0 flex flex-row items-center justify-start">
                    <div className="relative leading-5">
                      <span className="font-light">{`By continuing, you agree to our `}</span>
                      <span className="text-mediumblue cursor-pointer">terms of service.</span>
                    </div>
                  </div>
                  <div className="rounded cursor-pointer bg-mediumblue w-full sm:w-[25rem] h-[3rem] flex items-center justify-center py-3 px-[0.75rem] box-border text-[1rem] text-white">
                    <button className="relative leading-6 bg-transparent text-white cursor-pointer font-semibold inline-block w-[10rem] sm:w-auto">Sign up</button>
                  </div>
                </div>

{/* Or */}

            <div className="relative w-full flex flex-col items-center justify-start text-center text-[0.88rem] text-gray-01 font-regular-14-20">
                    <div className="absolute my-0 mx-[!important] top-[1.11rem] left-[calc(50%_-_171.25px)] box-border w-[21.41rem] h-[0.03rem] opacity-[0.25] z-[0] border-t-[0.5px] border-solid border-gray-02">
            </div>
            <div className="bg-special-main-bg shrink-0 flex flex-row items-start justify-start p-[0.5rem] z-[1]">
                    <button className="relative leading-[1.25rem] inline-block w-[7rem] cursor-pointer shrink-0">or sign up with</button>
                </div>
            </div>

{/* Social Media Buttons */}

            <button className="relative cursor-pointer rounded bg-gray-04 w-full h-[3rem] flex flex-row items-center justify-center py-[0.75rem] px-[4.31rem] box-border gap-[1rem] text-center text-[1rem] text-gray-02 font-regular-16-24">
                {/* <img className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover" alt="" src="Google.png"> */}
                <Image
                    height={24}
                    width={24}
                    className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
                    src="/assets/Google.svg"
                    alt="Google"
                />
                <div className="relative cursor-pointer leading-[1.5rem]">Continue with Google</div>
            </button>

            <div className="relative text-sm sm:text-base text-center inline-block overflow-hidden whitespace-nowrap w-full sm:w-[21.38rem] h-7 sm:h-[1.5rem] text-darkgray font-inter">
              <span>{`Already have an account? `}</span>
              <Link href="/"
                 className="font-semibold no-underline text-mediumblue"> Sign in here
              </Link>
            </div>
    </form>
    </div>    
                  
  </main>
  )
}

export default Signup;