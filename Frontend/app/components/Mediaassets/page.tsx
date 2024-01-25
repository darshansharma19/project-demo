'use client';

import React, { useState } from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';
import { useTheme } from '../../context/ThemeContext';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';

const Mediaassets = () => {
  
  const { theme } = useTheme();
  console.log("theme", theme);
  const [isDarkMode, _] = useState(theme);


  // For Uploading Files

  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [downloadURL, setDownloadURL] = useState<string | null>(null);

  const storage = getStorage();


  const handleClick = (e: React.ChangeEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (target.files && target.files[0]) {
      setFile(target.files[0]);
    }
  };

  const handleUploadClick = async () => {
    if (!file) {
      console.error('No file selected!');
      return;
    }

    setUploading(true);

    const storageRef = ref(storage, `uploads/${file.name}`);
    await uploadBytes(storageRef, file);

    const downloadURL = await getDownloadURL(storageRef);
    setDownloadURL(downloadURL);

    setUploading(false);
  };


    return ( 
      <div className="flex w-full min-h-screen">
        <div className="w-1/4 min-h-screen flex flex-col justify-between">
          <Sidebar />
        </div>
        <div className="w-full bg-special-bg dark:bg-black-dark dark:text-white min-h-screen px-6 py-8 flex flex-col justify-between">
          <div className=""><Header/></div>
          <div className="relative text-[2.25rem] py-6 font-semibold font-geist">Project Assets</div>
          <div className='relative rounded-[10px] flex flex-col bg-white dark:bg-gray-200 dark:text-white shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25)] w-full h-[51.13rem]'>
            <div className='flex flex-col items-end m-3'>
              {/* <input type="file" onChange={handleClick} /> */}
              <button
                onClick={handleUploadClick}
                disabled={uploading}
                className="flex justify-center items-center cursor-pointer rounded-[10px] bg-mediumblue dark:bg-mediumpurple dark:text-mediumpurple w-52 h-12 relative overflow-hidden"
              >
                <input
                  type="file"
                  name="Upload Media"
                  id=""
                  onChange={handleClick}
                  className="absolute inset-0 opacity-0 w-full h-full cursor-pointer"
                />
                <img
                  className="relative w-7 h-7 overflow-hidden object-cover"
                  alt="media"
                  src="/assets/pajamas_media.svg"
                />
                <div className="relative text-[1.13rem] leading-6 font-semibold font-inter text-white inline-block w-[7.56rem]">
                  Upload Media
                </div>
              </button>
            </div>
            {downloadURL && (
              <div className='flex flex-col pt-8 justify-center items-center'>
                {/* dark mode svg */}
                <img className={`relative w-[418px] pb-4 h-[24.56rem] object-cover ${theme==="dark"?"invert mix-blend-lighten":""}`} alt="" src="/assets/tempImageo5kBYt1.png" />
                <b className="relative text-[2.5rem] pb-4 tracking-[0.01em] font-inter text-text">Project Media</b>
                <div className="relative text-[1rem] pb-4 leading-6 font-medium font-medium-16-24 text-gray-01 text-center inline-block w-[38.63rem]">You don’t have any media associated with this project</div>
                <div className="relative text-[1rem] leading-[1.5rem] text-center inline-block w-[38.63rem] text-dimgray font-inter">
                  <span className="font-medium">{`Use the `}</span>
                  <b className="text-mediumblue dark:text-mediumpurple cursor-pointer">Upload Media</b>
                  <span className="font-medium">{` button in the top right or `}</span>
                  <b className="text-mediumblue dark:text-mediumpurple cursor-pointer">{`Drag & Drop`}</b>
                  <span className="font-medium">{` to add assets that you can use throught your project `}</span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
     );
}
 
export default Mediaassets;