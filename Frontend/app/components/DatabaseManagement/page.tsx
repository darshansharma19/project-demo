'use client';

import React from 'react';

import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';
import Users from './Users';
import RestaurantOwner from './RestaurantOwner';
import Influencerlist from './Influencelist';





const DatabaseManagement = () => {
 const router = useRouter();
const [activeOption, setActiveOption] = useState('');
const [page, setPage] = useState<
    "Users" | "Restaurant Owner" | "Influencers"
  >("Users");

    return ( 
      <div className="flex w-full min-h-screen">
        <div className="w-1/4 min-h-screen flex flex-col justify-between">
          <Sidebar />
        </div>
        <div className="w-full bg-special-bg min-h-screen px-6 py-6 flex flex-col">
          <div className=""><Header/></div>
          <div className='m-0  py-8 h-7 font-bold'>Database Management- user</div>
        <div className='relative rounded-[10px] flex flex-row bg-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-auto'>
            <div className="overflow-hidden w-1/4 p-2 h-full flex flex-col border-black">
              <div className="w-full justify-center flex flex-row gap-2 ">
                
                  {/* <!-- Button 1 --> */}

                  <button className="bg-mediumblue hover:bg-blue-700 text-white font-bold py-2 px-4 h-[36px] w-[43px] rounded-[5px] flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M7 9V7H21V9H7ZM7 13V11H21V13H7ZM7 17V15H21V17H7ZM4 9C3.71667 9 3.47933 8.904 3.288 8.712C3.09667 8.52 3.00067 8.28267 3 8C3 7.71667 3.096 7.47933 3.288 7.288C3.48 7.09667 3.71733 7.00067 4 7C4.28333 7 4.521 7.096 4.713 7.288C4.905 7.48 5.00067 7.71733 5 8C5 8.28333 4.904 8.521 4.712 8.713C4.52 8.905 4.28267 9.00067 4 9ZM4 13C3.71667 13 3.47933 12.904 3.288 12.712C3.09667 12.52 3.00067 12.2827 3 12C3 11.7167 3.096 11.4793 3.288 11.288C3.48 11.0967 3.71733 11.0007 4 11C4.28333 11 4.521 11.096 4.713 11.288C4.905 11.48 5.00067 11.7173 5 12C5 12.2833 4.904 12.521 4.712 12.713C4.52 12.905 4.28267 13.0007 4 13ZM4 17C3.71667 17 3.47933 16.904 3.288 16.712C3.09667 16.52 3.00067 16.2827 3 16C3 15.7167 3.096 15.4793 3.288 15.288C3.48 15.0967 3.71733 15.0007 4 15C4.28333 15 4.521 15.096 4.713 15.288C4.905 15.48 5.00067 15.7173 5 16C5 16.2833 4.904 16.521 4.712 16.713C4.52 16.905 4.28267 17.0007 4 17Z"
                        fill="white"
                      />
                    </svg>
                  </button>

                  {/* <!-- Button 2 --> */}

                  <button className="bg-mediumblue hover:bg-blue-700 text-white font-bold h-[36px] w-[43px] py-2 px-4 rounded-[5px] flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M9.25001 22L8.85001 18.8C8.63335 18.7167 8.42935 18.6167 8.23801 18.5C8.04668 18.3833 7.85901 18.2583 7.67501 18.125L4.70001 19.375L1.95001 14.625L4.52501 12.675C4.50835 12.5583 4.50001 12.446 4.50001 12.338V11.663C4.50001 11.5543 4.50835 11.4417 4.52501 11.325L1.95001 9.375L4.70001 4.625L7.67501 5.875C7.85835 5.74167 8.05001 5.61667 8.25001 5.5C8.45001 5.38333 8.65001 5.28333 8.85001 5.2L9.25001 2H14.75L15.15 5.2C15.3667 5.28333 15.571 5.38333 15.763 5.5C15.955 5.61667 16.1423 5.74167 16.325 5.875L19.3 4.625L22.05 9.375L19.475 11.325C19.4917 11.4417 19.5 11.5543 19.5 11.663V12.337C19.5 12.4457 19.4833 12.5583 19.45 12.675L22.025 14.625L19.275 19.375L16.325 18.125C16.1417 18.2583 15.95 18.3833 15.75 18.5C15.55 18.6167 15.35 18.7167 15.15 18.8L14.75 22H9.25001ZM12.05 15.5C13.0167 15.5 13.8417 15.1583 14.525 14.475C15.2083 13.7917 15.55 12.9667 15.55 12C15.55 11.0333 15.2083 10.2083 14.525 9.525C13.8417 8.84167 13.0167 8.5 12.05 8.5C11.0667 8.5 10.2373 8.84167 9.56201 9.525C8.88668 10.2083 8.54935 11.0333 8.55001 12C8.55001 12.9667 8.88768 13.7917 9.56301 14.475C10.2383 15.1583 11.0673 15.5 12.05 15.5Z"
                        fill="white"
                      />
                    </svg>
                  </button>

                  {/* <!-- Button 3 --> */}

                  <button className="bg-mediumblue hover:bg-blue-700 text-white h-[36px] w-[87px] font-bold py-2 px-4 rounded-[5px] flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M20 18.6904L12.7 22.7404C12.2 23.0004 11.7 23.0004 11.2 22.7404L4 18.6904L17.05 5.54043L17.4 5.44043C17.7 5.44043 17.87 5.57043 17.9 5.84043L20 18.6904ZM9.35 5.74043L4.8 13.2904L6.7 1.34043C6.73 1.07043 6.9 0.94043 7.2 0.94043C7.4 0.94043 7.53 1.00043 7.6 1.19043L9.75 5.14043L9.35 5.74043ZM13.85 7.00043L4.3 16.5904L11.55 4.29043C11.65 4.09043 11.8 4.00043 12 4.00043C12.2 4.00043 12.33 4.09043 12.4 4.29043L13.85 7.00043Z"
                        fill="white"
                      />
                    </svg>
                    Firebase
                  </button>

                  {/* <!-- Button 4 --> */}

                  <button className="bg-mediumblue hover:bg-blue-700 text-white h-[36px] w-[43px] font-bold py-2 px-4 rounded-[5px] flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                    >
                      <path
                        d="M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z"
                        fill="white"
                      />
                    </svg>
                  </button>
                
              </div>

              <div className="flex flex-col justify-content items-center">
                <button
                  className="w-[157px] h-[36px] my-2 mx-6 flex-shrink-0 rounded-[5px] hover:bg-mediumblue text-black
              hover:text-white text-5xl font-semibold flex items-center justify-center"
                  onClick={() => setPage("Users")}
                >
                  {" "}
                  Users
                </button>

                <button
                  className="w-[157px] h-[36px] my-2 mx-6 flex-shrink-0 rounded-[5px] hover:bg-mediumblue text-black
              hover:text-white text-5xl font-semibold  flex items-center justify-center"
                  onClick={() => setPage("Restaurant Owner")}
                >
                  {" "}
                  Restaurant Owner
                </button>

                <button
                  className="w-[157px] h-[36px] my-2 mx-6 flex-shrink-0 rounded-[5px] hover:bg-mediumblue text-black
              hover:text-white text-5xl font-semibold  flex items-center justify-center"
                  onClick={() => setPage("Influencers")}
                >
                  {" "}
                  Influencers
                </button>
              </div>  
            </div>


            {/* Right Side Part for Users page */}

          <div className="flex w-3/4 border-box justify-center overflow-hidden">
            <div className="p-2">
              {((): JSX.Element => {
                return {
                  Users: <Users />,
                  "Restaurant Owner": <RestaurantOwner />,
                  Influencers: <Influencerlist />,
                }[page];
              })()}
            </div>
          </div>

        </div>
        </div>
      </div>
     );
}
 
export default DatabaseManagement;