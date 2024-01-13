'use client';
import React, { useState } from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';

const Influencers = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index: any) => {
    setSelectedCardIndex((prevIndex) => (prevIndex === index ? null : index));
  };


  const handleBackClick = () => {
    setSelectedCardIndex(null);
  };

  // Sample data for the user profiles
  const userProfiles = [
    {
      name: 'Sakshi Keswani',
      imageUrl: '/assets/image-2.png',
      socialIcons: [
        '/assets/linear-instagram.svg',
        '/assets/messages2.svg',
        '/assets/profile.svg',
      ],
    },
    // Add more profiles as needed
  ];

  const renderContent = () => {
    return userProfiles.map((userProfile, index) => (
      <div
        key={index}
        className="relative rounded-lg bg-background-light box-border w-[274px] h-[270px] object-contain overflow-hidden flex flex-col items-center justify-start p-5 text-left text-[1.13rem] text-text font-inter border-[1px] border-solid border-border"
      >
        {selectedCardIndex === index ? (
          <>
            <div className="absolute top-0 left-0 mt-2 ml-1">
              <button
                className="bg-transparent"
                onClick={handleBackClick}
              >
                <img src="/assets/chevron-down.svg" alt="" />
              </button>
            </div>
            <div className="flex items-start">
              <img
                className="relative rounded-[12.39px] w-12 h-12 object-cover"
                alt="image"
                src={userProfile.imageUrl}
              />
              <div className="ml-4">
                <div className="relative text-[1.08rem] font-inter mb-1 text-black text-left inline-block">
                  {userProfile.name}
                </div>
                {/* Add other details here */}
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="relative text-[1.08rem] font-inter mb-1 text-black text-left inline-block w-[8.61rem]">
              Sakshi Keswani
            </div>
            <img
              onClick={() => handleCardClick(index)}
              className="relative rounded-[12.39px] w-full h-[11.12rem] object-cover cursor-pointer"
              alt="image"
              src="/assets/image-2.png"
            />
            <div className="flex flex-row mt-2 gap-8">
              {userProfile.socialIcons.map((icon, iconIndex) => (
                <div
                  key={iconIndex}
                  className="relative cursor-pointer rounded-[6.2px] w-8 h-8 bg-mediumblue shadow-[0px_4px_5px_rgba(0,_0,_0,_0.25)] box-border border-[0.6px] border-solid border-mediumblue"
                >
                  <img
                    className="relative py-1 w-full h-[1.55rem] overflow-hidden object-cover"
                    alt=""
                    src={icon}
                  />
                </div>
              ))}
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
      <div className="w-full bg-special-bg dark:bg-black px-8 py-8 flex flex-col justify-between">
        <div className=""><Header /></div>
        <div className='m-0  py-12 flex flex-col gap-6 h-full font-bold'>
          <div className="relative w-full flex flex-col items-start justify-start gap-2 text-left text-4xl text-text font-geist">
            <div className="relative text-[2.25rem] font-semibold font-geist">Influencer</div>
          </div>
          <div className="flex flex-row flex-wrap gap-6">
            {renderContent()}
            {/* Add more cards as needed */}
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Influencers;
