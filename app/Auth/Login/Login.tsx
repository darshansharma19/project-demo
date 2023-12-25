'use client';

import React from 'react';
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);


    return (
        
                <form action="" className='[filter:drop-shadow(0px_4px_4px_rgba(0,_0,_0,_0.25))] shrink-0 flex w-full overflow-y-hidden flex-col items-center justify-start gap-[1.5rem] text-center text-[1rem] text-black font-semibold-16-24'>

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
                        <Link href='/Auth/Reset' className="relative text-sm font-medium no-underline text-mediumblue text-right inline-block w-32 cursor-pointer">Forgot Password?</Link>
                    </div>
                         <input type={showPassword ? 'text' : 'password'} 
                         id='password'
                         placeholder='...........' 
                         className="rounded-lg box-border w-[25rem] h-[3rem] text-justify text-bold flex flex-row items-start justify-start py-[0.75rem] px-[1rem] text-gray-02 border-[1px] border-solid border-gray-02" />    
                    </div>

                    {/* Checkbox */}

                    <div className="relative w-full flex flex-col items-start justify-start gap-4 text-left text-base text-black font-semibold">
                        <div className="flex flex-row items-center justify-start gap-4">
                            <div className="relative w-4 h-4 rounded-sm">
                                <input className="absolute cursor-pointer w-full h-full object-cover" type= 'checkbox' id='checkbox' />
                            </div>
                            <div className="relative leading-6 font-light w-60 text-[1rem] font-light-16-24 text-black text-left inline-block">Keep me signed in</div>
                        </div>

                        {/* Login Button */}

                            <button className="relative rounded bg-mediumblue w-full h-[3rem] flex flex-row items-center justify-center py-[1rem] px-[0.75rem] box-border text-center text-[1rem] text-white font-semibold-16-24 cursor-pointer">
                                <div className="relative leading-6 font-semibold w-40">Login</div>
                            </button>
                    </div>

                    {/* Or */}

                    <div className="relative w-full flex flex-col items-center justify-start text-center text-[0.88rem] text-gray-01 font-regular-14-20">
                            <div className="absolute my-0 mx-[!important] top-[1.11rem] left-[calc(50%_-_171.25px)] box-border w-[21.41rem] h-[0.03rem] opacity-[0.25] z-[0] border-t-[0.5px] border-solid border-gray-02">
                    </div>
                    <div className="bg-special-main-bg cursor-pointer shrink-0 flex flex-row items-start justify-start p-[0.5rem] z-[1]">
                            <button className="relative leading-[1.25rem] bg-transparent inline-block w-[7rem] cursor-pointer shrink-0">or sign in with</button>
                        </div>
                    </div>

                    {/* Social Media Buttons */}

                    <button className="relative cursor-pointer rounded bg-gray-04 w-full h-[3rem] flex flex-row items-center justify-center py-[0.75rem] px-[4.31rem] box-border gap-[1rem] text-center text-[1rem] text-gray-02 font-regular-16-24">
                        {/* <img className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover" alt="" src="Google.png"> */}
                        <Image
                            height={24}
                            width={24}
                            className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover"
                            src="assets/Google.svg"
                            alt="Google"
                        />
                        <div className="relative cursor-pointer leading-[1.5rem]">Continue with Google</div>
                    </button>

                    <Link className="relative no-underline text-[1rem] leading-[1.5rem] font-semibold cursor-pointer font-semibold-16-24 bg-transparent text-mediumblue text-center inline-block overflow-hidden text-ellipsis whitespace-nowrap w-[25rem] h-[1.5rem]" href='/Auth/Signup' >Create an account</Link>

                </form>
        
    );
}

export default Login;