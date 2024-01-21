'use client'
import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


const Dashboard = () => {
  const router = useRouter();

  // Analytics data
  const [analyticsData, setAnalyticsData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('');
        const data = await response.json();
        setAnalyticsData(data);
      } catch (error) {
        console.error('Error fetching analytics data:', error);
      }
    };

    fetchData();
  }, []);

  // Session check
  useEffect(() => {
    const user = sessionStorage.getItem('user');
    if (!user) {
      router.push('/');
    }
  }, []);

  const [activeOption, setActiveOption] = useState('Influencers');
  const options = ['Influencers', 'Restaurants', 'Location'];

  const renderContent = () => {
    switch (activeOption) {
      case 'Influencers':
        return <div>Your Influencers content here</div>;
      case 'Restaurants':
        return <div>Your Restaurants content here</div>;
      case 'Location':
        return <div>Your Location content here</div>;
      default:
        return null;
    }
  };
  
  const [chartactiveOption, setChartActiveOption] = useState('Weekly');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleOptionClick = (chartoption: any) => {
    setChartActiveOption(chartoption);
    setShowDropdown(false);
  };

  const chartoptions = ['Weekly', 'Monthly'];

  const chartrenderContent = () => {
    switch (chartactiveOption) {
      case 'Weekly':
        return <div>Your Weekly content here</div>;
      case 'Monthly':
        return <div>Your Monthly content here</div>;
      default:
        return null;
    }
  };
  
  return ( 
    <div className="flex bg-special-bg dark:bg-black-dark w-full min-h-screen">
      <div className="w-1/4 min-h-screen  flex flex-col justify-between">
        <Sidebar />
      </div>
      <div className="w-full mx-6  my-8 flex flex-col ">
        <div className=""><Header/></div>

          
            {/* Top Content */}
            <div className="relative flex flex-row gap-8 w-full h-60">
              <div className=" relative cursor-pointer w-72 h-60  dark:text-white flex flex-col items-start justify-start text-left text-gray-800 font-bold">
                {/* Content for Dashboard */}
                
                    {/* Dashboard Content */}
                    
                        <b className="leading-8 cursor-pointer">Dashboard</b>
                        {/* <div className="rounded-lg bg-white shadow-md pt-5 pb-5 pl-6 pr-6 gap-5 text-black">
                        <div className="relative  flex flex-col items-start justify-start text-left text-[1.38rem] text-default-black font-medium-14-20">
                          <div className="box-border w-[19rem] flex flex-row items-center justify-between pt-[0rem] px-[0rem] pb-[0.75rem] border-b-[1px] border-solid border-gray-06">
                          <div className="relative leading-[2rem] capitalize font-extrabold">240,399</div>
                          <div className="relative text-[0.88rem] leading-[1.25rem] capitalize font-medium text-secondary text-right">Total app Downloads</div>
                          </div>
                        </div>
                          <div className="rounded bg-mediumblue h-28  text-sm text-white flex flex-row justify-between">
                            
                          </div>
                          <div className="flex items-center  p-5 pb-1 justify-between h-5 text-xs text-gray-400">
                            <div className="flex items-center cursor-pointer gap-2">
                              <img className="w-4 h-4 object-contain" alt="" src="/assets/chevron-right.svg" />
                              <div className="font-medium">Previous</div>
                            </div>
                            <div className="flex cursor-pointer items-center gap-1">
                              <div className="rounded-full bg-primary-color w-1 h-1" />
                              <div className="rounded-full bg-gray-300 w-1 h-1" />
                              <div className="rounded-full bg-gray-300 w-1 h-1" />
                            </div>
                            <div className="flex cursor-pointer items-center gap-2">
                              <div className="font-medium">Next</div>
                              <img className="w-4 h-4 object-cover" alt="" src="/assets/chevron-right(1).svg" />
                            </div>
                          </div>
                        </div> */}
              <div className="relative rounded-lg flex flex-col items-center shadow-md bg-white dark:bg-gray-200 w-full h-[14.5rem]">
                <div className="relative box-border w-full flex flex-row items-center justify-between my-2 px-5 gap-2 text-left text-[1.38rem] text-default-black dark:text-white font-medium-14-20 border-b-[1px] border-solid border-gray-06">
                  <div className="relative leading-[2rem] capitalize font-extrabold">240,399</div>
                  <div className="relative text-[0.68rem] leading-[1.25rem] capitalize font-medium text-secondary dark:text-white text-right">Total app Downloads</div>
                </div>
                <div className="relative rounded-lg flex flex-row bg-mediumblue dark:bg-mediumpurple w-64  h-[8.13rem]" >

                </div>
              </div>
                      
                
              </div>
              <div className=" relative cursor-pointer w-72 h-60 dark:text-gray-03 flex flex-col items-start justify-start text-left ">
                {/* Content for Goals */}
               
                  {/* Goals Content */}
                 
                      <div className="leading-8 font-header-22-32 text-gray-02 text-left">Active Users</div>
                      {/* <div className="relative rounded-lg bg-white w-full h-[14.5rem] shadow-md p-5 gap-5 text-black">
                        <div className="box-border w-[19rem]  shrink-0 flex flex-row items-center justify-between pt-0 px-0 pb-3 border-b-[1px] border-solid border-gray-06">
                          <div className="shrink-0 flex flex-row pb-2 items-center justify-start gap-[0.56rem]">
                            <div className="relative leading-[2rem] capitalize font-extrabold">20,000</div>
                            <div className="rounded bg-special-bg cursor-pointer shrink-0 flex flex-row items-start justify-start p-[0.5rem]">
                              <img className="relative w-4 h-[1rem] overflow-hidden shrink-0 object-cover" alt="" src="/assets/edit.svg" />
                            </div>
                          </div>
                          <div className="relative text-[0.88rem] leading-5 capitalize font-medium text-secondary text-right">May, 2023</div>
                        </div>
                        <div className="relative w-full h-32 pt-5 flex flex-row items-start justify-start gap-[1rem] text-left text-[0.75rem] text-gray-02 font-medium-12-16">
                          <div className="h-32 flex flex-col items-start justify-center gap-6">
                            <div className="shrink-0 flex flex-row items-start justify-start gap-1">
                              <img className="relative w-6 h-6 overflow-hidden shrink-0 object-cover" alt="" src="/assets/Award.svg" />
                              <div className="shrink-0 flex flex-col items-start justify-start gap-1">
                              <div className="relative leading-[1rem] inline-block w-[7.25rem]">Target Achieved</div>
                              <b className="relative text-[1rem] leading-[1.5rem] capitalize inline-block text-default-black w-[7rem]">$12,500</b>
                              </div>
                            </div>
                            <div className="shrink-0 flex flex-row items-start justify-start gap-[0.25rem]">
                              <img className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover" alt="" src="/assets/octicon_goal-16.svg" />
                              <div className="shrink-0 flex flex-col items-start justify-start gap-[0.25rem]">
                              <div className="relative leading-[1rem] inline-block w-[7.25rem]">This month Target</div>
                              <b className="relative text-[1rem] leading-[1.5rem] capitalize inline-block text-default-black w-[7rem]">$20,000</b>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start gap-[0.88rem] text-center text-gray-04">
                            <div className="shrink-0 flex flex-col items-center justify-start gap-[0.38rem]">
                              <div className="bg-white shrink-0 w-32 h-16 flex flex-col items-center justify-start">
                                <div className="relative shrink-0 flex w-full h-full flex-col items-start justify-start">
                                    <img className="relative rounded-lg w-32 h-16 object-cover" alt="" src="/assets/Ellipse23.svg" />
                                    <img className="absolute rounded-lg w-[6.83rem] h-16 object-cover -top-5.87rem" alt="" src="/assets/Ellipse24.svg" />
                                </div>
                                <img className="relative my-0 mx-[!important] w-9 h-9 object-cover mt-[-2.31rem]" alt="" src="/assets/Meter.svg" />
                              </div>
                              <div className="w-[9rem] shrink-0 flex flex-row items-center justify-between">
                                <div className="relative leading-[1rem] font-medium inline-block w-[1.63rem] shrink-0">$0</div>
                                <div className="relative text-[1rem] leading-[1.5rem] font-semibold text-default-black inline-block w-[1.88rem] shrink-0">12K</div>
                                <div className="relative leading-[1rem] font-medium text-right inline-block w-[2rem] shrink-0">$20k</div>
                              </div>
                            </div>
                            <div className="relative leading-[1rem] font-medium text-default-black text-left">Target vs Achievement</div>
                          </div>
                        </div>
                      </div> */}
                    <div className="relative rounded-lg bg-white dark:bg-gray-200 dark:text-white shadow-md w-full h-[14.5rem] flex flex-col items-start justify-start box-border text-center text-[0.75rem] text-gray-01 font-bold-16-24">
                    <div className="relative box-border w-full flex flex-row items-center justify-between my-2 px-5 gap-2 text-left text-[1.38rem] text-default-black dark:text-white font-medium-14-20 border-b-[1px] border-solid border-gray-06">
                      <div className="relative leading-[2rem] capitalize font-extrabold">20,000</div>
                      <div className="relative text-[0.68rem] leading-[1.25rem] capitalize font-medium text-secondary dark:text-white text-right">May,2023</div>
                    </div> 
                    </div>
              
                
              </div>
              <div className=" relative cursor-pointer w-72 h-60 dark:text-gray-03 flex flex-col items-start justify-start text-left ">
                {/* Content for Partners */}
               
                  {/* Partners Content */}
                 
                      <div className="leading-8 font-header-22-32 text-gray-02 text-left justify-between flex flex-row gap-36">
                        <div className="relative leading-8">Partners</div>
                        <div className="shrink-0 flex flex-row items-center justify-end gap-2 text-[0.75rem]">
                          <div className="relative leading-[1rem] font-medium cursor-pointer">View All</div>
                          <img className="relative w-4 h-4 overflow-hidden shrink-0 object-cover" alt="" src="/assets/chevron-right(1).svg" />
                        </div>
                      </div>
                      {/* <div className="relative rounded-lg bg-white w-full h-[14.5rem] shadow-md p-5 gap-5 text-black">
                        <div className="box-border w-[19rem]  shrink-0 flex flex-row items-center justify-between pt-0 px-0 pb-3 border-b-[1px] border-solid border-gray-06">
                          <div className="shrink-0 flex flex-row pb-2 items-center justify-start gap-[0.56rem]">
                            <div className="relative leading-[2rem] capitalize font-extrabold">20,000</div>
                            <div className="rounded bg-special-bg cursor-pointer shrink-0 flex flex-row items-start justify-start p-[0.5rem]">
                              <img className="relative w-4 h-[1rem] overflow-hidden shrink-0 object-cover" alt="" src="/assets/edit.svg" />
                            </div>
                          </div>
                          <div className="relative text-[0.88rem] leading-5 capitalize font-medium text-secondary text-right">May, 2023</div>
                        </div>
                        <div className="relative w-full h-32 pt-5 flex flex-row items-start justify-start gap-[1rem] text-left text-[0.75rem] text-gray-02 font-medium-12-16">
                          <div className="h-32 flex flex-col items-start justify-center gap-6">
                            <div className="shrink-0 flex flex-row items-start justify-start gap-1">
                              <img className="relative w-6 h-6 overflow-hidden shrink-0 object-cover" alt="" src="/assets/Award.svg" />
                              <div className="shrink-0 flex flex-col items-start justify-start gap-1">
                              <div className="relative leading-[1rem] inline-block w-[7.25rem]">Target Achieved</div>
                              <b className="relative text-[1rem] leading-[1.5rem] capitalize inline-block text-default-black w-[7rem]">$12,500</b>
                              </div>
                            </div>
                            <div className="shrink-0 flex flex-row items-start justify-start gap-[0.25rem]">
                              <img className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0 object-cover" alt="" src="/assets/octicon_goal-16.svg" />
                              <div className="shrink-0 flex flex-col items-start justify-start gap-[0.25rem]">
                              <div className="relative leading-[1rem] inline-block w-[7.25rem]">This month Target</div>
                              <b className="relative text-[1rem] leading-[1.5rem] capitalize inline-block text-default-black w-[7rem]">$20,000</b>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-center justify-start gap-[0.88rem] text-center text-gray-04">
                            <div className="shrink-0 flex flex-col items-center justify-start gap-[0.38rem]">
                              <div className="bg-white shrink-0 w-32 h-16 flex flex-col items-center justify-start">
                                <div className="relative shrink-0 flex w-full h-full flex-col items-start justify-start">
                                    <img className="relative rounded-lg w-32 h-16 object-cover" alt="" src="/assets/Ellipse23.svg" />
                                    <img className="absolute rounded-lg w-[6.83rem] h-16 object-cover -top-5.87rem" alt="" src="/assets/Ellipse24.svg" />
                                </div>
                                <img className="relative my-0 mx-[!important] w-9 h-9 object-cover mt-[-2.31rem]" alt="" src="/assets/Meter.svg" />
                              </div>
                              <div className="w-[9rem] shrink-0 flex flex-row items-center justify-between">
                                <div className="relative leading-[1rem] font-medium inline-block w-[1.63rem] shrink-0">$0</div>
                                <div className="relative text-[1rem] leading-[1.5rem] font-semibold text-default-black inline-block w-[1.88rem] shrink-0">12K</div>
                                <div className="relative leading-[1rem] font-medium text-right inline-block w-[2rem] shrink-0">$20k</div>
                              </div>
                            </div>
                            <div className="relative leading-[1rem] font-medium text-default-black text-left">Target vs Achievement</div>
                          </div>
                        </div>
                      </div> */}
                    <div className="relative rounded-lg bg-white dark:bg-gray-200 dark:text-white shadow-md w-full h-[14.5rem] flex flex-col items-start justify-start p-6 box-border text-center text-[0.75rem] text-gray-01 font-bold-16-24"></div>
              
                
              </div>
            </div>
          
{/* Bottom Content */}

<div className='flex flex-row gap-12'>
            {/* Bottom Left Content */}
          <div className="relative w-72  flex flex-col pt-8  items-start justify-start gap-2 text-left text-[1.38rem] text-gray-02 font-regular-12-16">
              <div className=" w-80 shrink-0 flex flex-row gap-2 items-center dark:text-white justify-between">
                <div className="relative leading-8">Top Rated</div>
                <div className="shrink-0 flex flex-row items-center justify-start gap-2 text-[0.75rem]">
                  <div className="relative leading-[1rem] font-medium cursor-pointer">View All</div>
                  <img className="relative w-4 h-4 overflow-hidden shrink-0 object-cover" alt="" src="/assets/chevron-right(1).svg" />
                </div>
              </div>
              <div className="rounded-lg w-72 bg-white dark:bg-gray-200 dark:text-white shadow-md shrink-0 flex flex-col items-start justify-start pt-4 px-4 pb-[2.13rem] gap-3 text-[1rem] text-secondary">
                <div className="relative w-72 cursor-pointer  flex flex-row items-start justify-start text-left text-[1rem] text-secondary font-bold-16-24">
                  {options.map((option) => (
                    <div
                      key={option}
                      className={`flex flex-col items-start justify-start p-[0.5rem] ${
                        activeOption === option
                          ? 'text-primary-color border-b-[2px] border-solid border-primary-color'
                          : ''
                      }`}
                      onClick={() => setActiveOption(option)}
                    >
                      <b className="relative leading-[1.5rem] capitalize">{option}</b>
                    </div>
                  ))}
                </div>
                {renderContent()}
              </div>
          </div>
          {/* Bottom Right Content */}
          <div className='flex flex-col w-full pt-8 pr-12 gap-2 text-left text-[1.38rem] text-gray-02   font-regular-12-16'>
              <div className="relative dark:text-white leading-8">Load Time Analytics</div> 
              <div className="rounded-lg w-full bg-white dark:bg-gray-200 dark:text-white shadow-md shrink-0 flex flex-col items-start justify-start pt-4 px-6  pb-[2.13rem] gap-3 text-[1rem] text-secondary">
                <div className="relative w-full flex flex-row items-center justify-between text-left text-[1rem] text-default-black dark:text-mediumpurple font-medium-12-16">
                  <div className="flex flex-row items-center cursor-pointer justify-start gap-[0.75rem]" onClick={() => setShowDropdown(!showDropdown)}>
                    <div className="relative leading-[1.5rem] font-semibold">{chartactiveOption} Comparison</div>
                    <img className="relative w-[1.5rem] h-[1.5rem] overflow-hidden shrink-0" alt="" src="/assets/chevron-down (1).svg" />
                  </div>
                  {showDropdown && (
                    <div className="absolute top-full cursor-pointer left-0 mt-2 bg-white dark:bg-gray-200 border border-gray-200 rounded-md shadow-md">
                      {chartoptions.map((chartoption) => (
                        <div
                          key={chartoption}
                          className="p-2 cursor-pointer hover:bg-mediumblue hover:text-white"
                          onClick={() => handleOptionClick(chartoption)}
                        >
                          {chartoption} Comparison
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="flex flex-row items-center justify-end gap-[1.5rem] text-[0.75rem] text-secondary">
                    <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                      <div className="relative rounded-sm bg-mediumblue dark:bg-mediumpurple w-[1rem] h-[0.5rem]" />
                      <div className="relative leading-[1rem] font-medium">
                        {chartactiveOption === 'Weekly' ? 'This week' : 'This month'}
                      </div>
                    </div>
                    <div className="flex flex-row items-center justify-start gap-[0.5rem]">
                      <div className="relative rounded-sm bg-gray-05 w-[1rem] h-[0.5rem]" />
                      <div className="relative leading-[1rem] font-medium">
                        {chartactiveOption === 'Weekly' ? 'Last week' : 'Last month'}
                      </div>
                    </div>
                  </div>
                </div>
                    {chartrenderContent()}
              </div>

              <div className=" w-full shrink-0 flex flex-row gap-2 items-center justify-between">
                <div className="relative dark:text-white leading-8">Best Feature Used In The Product</div>
                <div className="relative leading-[1rem] text-[0.75rem] font-medium cursor-pointer">*Compare to last month</div>
              </div> 
              <div className="rounded-lg w-full bg-white dark:bg-gray-200 dark:text-white shadow-md shrink-0 flex flex-col items-start justify-start pt-4 px-6  pb-[2.13rem] gap-3 text-[1rem] text-secondary">
              <div>
                {analyticsData ? (
                  // Render your analytics data here
                  <p>{JSON.stringify(analyticsData)}</p>
                ) : (
                  // Loading state or error handling
                  <p>Loading...</p>
                )}
              </div>
              </div>
          </div>

          
</div>
      </div>
    </div>
    
  );
};
 
export default Dashboard;



