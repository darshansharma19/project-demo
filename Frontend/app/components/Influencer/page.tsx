'use client';
import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';
import { getFirestore } from "firebase/firestore";
import { app } from '@/app/Config/firebase'
import { collection, getDocs } from 'firebase/firestore';
import { set } from 'firebase/database';
import TiktokInfluencer from './TiktokInfluencers';



const Influencers = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);
  const [data, setData] = useState<any[]>([]); // Changed to an array

  useEffect(() => {
    const db = getFirestore(app);

    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "instagramUsers"));
        const fetchedData = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data from Firestore:', error);
      }
    };

    fetchData();
  }, []);


  const handleCardClick = (index: any) => {
    setSelectedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  const handleBackClick = () => {
    setSelectedCardIndex(null);
  };

  
  
  

    

  const renderContent = () => {
    return data.map((profile: any, index: number) => (
      <div
        key={index}
        className="relative rounded-lg bg-background-light dark:bg-gray-200 dark:text-white box-border w-[300px] h-auto object-contain overflow-hidden flex flex-col  justify-start p-5 text-left text-[1.13rem] text-text font-inter  shadow-lg  dark:shadow-gray-800 "
      >
        {selectedCardIndex === index ? (
          <>
            <div className="absolute top-0 left-0 mt-2 mx-1">
              <button
                className="bg-transparent"
                onClick={handleBackClick}
              >
                <img src="/assets/chevron-down.svg" alt="" />
              </button>
            </div>
            <div className="flex items-start px-2">
              <img
                className="relative rounded-[12.39px] w-12 h-12 object-cover"
                alt="image"
                src={profile.profile_img}
              />
              <div className="ml-4 flex flex-col gap-0 p-1">
                <div className="relative text-[1.08rem] font-inter mb-1  dark:text-white text-left inline-block object-contain">
                  {profile.name}
                </div>
                {/* Add other details here */}
                <div className="relative text-[1.08rem] font-inter pb-1 dark:text-white text-left inline-block">
                  {profile.followers}
                </div>
              </div>
            </div>
            <div className='flex flex-col mt-4 '>
                <div className="relative text-[1.08rem] flex flex-row justify-end  gap-5  font-inter  dark:text-white text-left">
                 <span className='w-2/3'>City:</span> <span className='w-1/3'>{profile.city}</span>
                </div>
                <div className="relative text-[1.08rem] flex flex-row justify-center gap-5 font-inter  dark:text-white text-left">
                 <span className='w-2/3' >State:</span> <span className='w-1/3'>{profile.state}</span>
                </div>
                <div className="relative text-[1.08rem] flex flex-row justify-center gap-5 font-inter  dark:text-white text-left">
                 <span className='w-2/3' >Potential Reach:</span> <span className='w-1/3'>{profile.potential_reach}</span>
                </div>
            </div>
          </>
        ) : (
          <>
            <img
              onClick={() => handleCardClick(index)}
              className="relative rounded-[12.39px] w-full h-[11.12rem] object-fill cursor-pointer"
              alt="image"
              src={profile.profile_img}
            />
            <div className="relative text-[1.08rem] pt-4 whitespace-nowrap hover:whitespace-normal font-inter mb-2  text-left inline-block w-[8.61rem]">
              {profile.name}
            </div>
            <div className="flex flex-row mt-2 justify-start items-end gap-8">
            {/* {profile.socialIcons.map((icon: string, iconIndex: number) => ( */}
                <div
                  // key={iconIndex}
                  className="relative cursor-pointer rounded-[6.2px] w-8 h-8 bg-mediumblue dark:bg-mediumpurple shadow-[0px_4px_5px_rgba(0,_0,_0,_0.25)] box-border border-[0.6px] border-solid border-mediumblue"
                >
                  <img
                    className="relative py-1 w-full h-[1.55rem] overflow-hidden object-cover"
                    alt=""
                    // src={icon}
                    src={profile.type === 'instagram' ? '/assets/linear-instagram.svg' : profile.type === 'tikTok' ? '/assets/icons8-tiktok.svg' : ''}
                  />
                </div>
              {/* ))} */}
              {/* <div
                  // key={iconIndex}
                  className="relative cursor-pointer rounded-[6.2px] w-8 h-8 bg-mediumblue shadow-[0px_4px_5px_rgba(0,_0,_0,_0.25)] box-border border-[0.6px] border-solid border-mediumblue"
                >
                  <img
                    className="relative py-1 w-full h-[1.55rem] overflow-hidden object-cover"
                    alt=""
                    // src={icon}
                    src='/assets/messages2.svg'
                  />
                </div> */}
                 <div className="relative text-[1.08rem] font-inter pb-1 dark:text-white text-left inline-block">
                  {profile.followers}
                </div>
                {/* <div
                  // key={iconIndex}
                  className="relative cursor-pointer rounded-[6.2px] w-8 h-8 bg-mediumblue shadow-[0px_4px_5px_rgba(0,_0,_0,_0.25)] box-border border-[0.6px] border-solid border-mediumblue"
                >
                  <img
                    className="relative py-1 w-full h-[1.55rem] overflow-hidden object-cover"
                    alt=""
                    // src={icon}
                    onClick={() => handleCardClick(index)}
                    src='/assets/profile.svg'
                  />
                </div> */}
            </div>
          </>
        )}
      </div>
    ));
  };


  

  return (
    <div className="flex min-h-screen">
      <div className="w-1/4 min-h-screen  flex flex-col justify-between">
        <Sidebar />
      </div>
      <div className="w-full bg-special-bg dark:bg-black-dark dark:text-white px-8 py-8 flex flex-col justify-between">
        <div className=""><Header /></div>
        <div className='m-0  py-12 flex flex-col gap-6 h-full font-bold'>
          <div className="relative w-full flex flex-col items-start justify-start gap-2 text-left text-4xl text-text font-geist">
            <div className="relative text-[2.25rem] font-semibold font-geist">Influencer</div>
          </div>
          <div className="flex flex-row flex-wrap gap-6">
            {renderContent()}
            {/* Add more cards as needed */}
            <TiktokInfluencer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Influencers;