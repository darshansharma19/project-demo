"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import DarkModeToggle from "../DarkModeToggle/page";
import { useRouter, usePathname } from "next/navigation";
import { getAuth, signOut } from "firebase/auth";
import { app, auth } from "../../Config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useTheme } from "../../context/ThemeContext";

const Sidebar = () => {
  const pathname = usePathname();

  const { theme } = useTheme();
  useEffect(() => {}, [theme]);

  const [activeButton, setActiveButton] = useState("");

  const handleClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };

  const auth = getAuth(app);
  const signOut = async () => {
    try {
      await auth.signOut();
      // Remove user details from session
      sessionStorage.removeItem("user");
      console.log("Logout Successful");
      // Display success notification
      toast.success("LogOut successful!", {
        position: "top-center",
        autoClose: false, // 10 seconds
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className:
          "h-[3rem] w-[25rem] flex flex-row items-center justify-center py-[0.75rem] px-[1rem] text-center text-[1rem] text-white font-semibold-16-24 bg-mediumblue rounded-lg",
      });
      // Redirect to login page or do something else
      setTimeout(() => {
        // Redirect to Dashboard
        router.push("/");
      }, 1000);
    } catch (error) {
      console.error("Error signing out", error);

      // Display error notification
      toast.error("Error signing out", {
        position: "top-center",
        autoClose: false, // 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        className:
          "h-[3rem] w-[25rem] flex flex-row items-center justify-center py-[0.75rem] px-[1rem] text-center text-[1rem] text-white font-semibold-16-24 bg-red-500 rounded-lg",
      });
    }
  };

  const handleIsActive = (route: string) => {
    if (route === pathname) {
      return "active";
    } else {
      return "inactive";
    }
  };

  const buttonData = [
    { name: "Dashboard", icon: "/assets/Overview.svg" },
    { name: "Influencer", icon: "/assets/influencer.svg" },
    { name: "Integrations", icon: "/assets/Transaction.svg" },
    { name: "Profile", icon: "/assets/gg_profile.svg" },
    { name: "Media assets", icon: "/assets/baseline.svg" },
    { name: "Expenses", icon: "/assets/Group.svg" },
    { name: "Notifications", icon: "/assets/Vector.svg" },
    {
      name: "Settings",
      icon: "/assets/Settings.svg",
      options: [
        {
          name: "Integrations",
          icon: "/assets/carbon_ibm-cloud-pak-integration.svg",
        },
        { name: "Custom Code", icon: "/assets/mdi_code.svg" },
        {
          name: "Database Management",
          icon: "/assets/mdi_database-outline.svg",
        },
        { name: "Authentications", icon: "/assets/authentication.svg" },
        { name: "API's", icon: "/assets/light_api.svg" },
      ],
    },
    { name: "Users and Permissions", icon: "/assets/mdi_users.svg" },
  ];
  const buttonRoutes = [
    "/components/Dashboard",
    "/components/Influencer",
    "/components/Integrations",
    "/components/Profile",
    "/components/Mediaassets",
    "/components/Expenses",
    "/components/Notifications",
    "/components/Settings",
    "/components/Usersnpermission",
  ];

  const optionRoutes = [
    "/components/Integrations",
    "/components/CustomCode",
    "/components/DatabaseManagement",
    "/components/Authentication",
    "/components/APIs",
  ];

  const router = useRouter();

  return (
    <div className="flex bg-white lg:mx-auto lg:w-full lg:max-w-md h-full flex-row w-72 text-left text-sm text-black relative font-regular-16-24 dark:text-white dark:bg-gray-300">
      <ToastContainer />
      <div className="relative   w-48 flex flex-col items-center justify-start mx-7 py-12 gap-y-10 text-center text-[1.25rem] font-playfair-display ">
        <div className="relative w-full flex flex-row gap-2  items-center justify-start">
          <div className="flex items-center">
            <img
              src="/assets/tempImageR5opcn8.png"
              width={40}
              height={40}
              alt="logo"
            />
          </div>
          <i className="relative tracking-[0.08em] leading-8  inline-block font-semibold whitespace-pre-wrap">
            Flavor Trail
          </i>
        </div>
        {/* <div className="flex  flex-col w-full gap-y-4 py-3  text-left text-[1rem] font-regular-16-24">
                {buttonData.map((button, index) => (
                    <Link href={buttonRoutes[index]} key={index}
                        className={`rounded  bg-${handleIsActive(buttonRoutes[index]) === 'active' ? 'mediumblue dark:bg-mediumpurple' : 'white dark:bg-gray-300'}  font-${handleIsActive(buttonRoutes[index]) === 'active' ? 'semibold' : 'regular'} no-underline w-full flex cursor-pointer items-center justify-start pl-3 py-3 gap-3 text-${activeButton === button.name ? 'white' : 'black '} `}
                        onClick={() => handleClick(button.name)}
                        >
                        <img
                            src={handleIsActive(buttonRoutes[index]) === 'active' ? button.icon.replace('.svg', '_white.svg') : button.icon}
                            width={24}
                            height={24}
                            alt={button.name.toLowerCase()}
                            className="relative"
                        />
                        <span className={handleIsActive(buttonRoutes[index]) === 'active' ? 'text-white dark:text-white' : 'text-black dark:text-white'}>
                            {button.name}
                        </span>
                        
                    </Link>
                    
                ))} */}

        <div className="flex w-full flex-col gap-y-4 py-3 px-6 text-left text-[1rem] font-regular-16-24">
          {buttonData.map((button, index) => (
            <div
              key={index}
              className={`${button.name === "Settings" ? "group" : ""}`}
            >
              <Link
                href={buttonRoutes[index]}
                key={index}
                className={`rounded  bg-${
                  handleIsActive(buttonRoutes[index]) === "active"
                    ? "mediumblue dark:bg-mediumpurple"
                    : "white dark:bg-gray-300"
                }  font-${
                  handleIsActive(buttonRoutes[index]) === "active"
                    ? "semibold"
                    : "regular"
                } no-underline w-full flex cursor-pointer items-center justify-start pl-3 py-3 gap-3 text-${
                  activeButton === button.name ? "white" : "black "
                } `}
                onClick={() => handleClick(button.name)}
              >
                <img
                  src={
                    handleIsActive(buttonRoutes[index]) === "active"
                      ? button.icon.replace(".svg", ".svg")
                      : button.icon
                  }
                  width={24}
                  height={24}
                  alt={button.name.toLowerCase()}
                  className={`relative ${
                    theme === "dark" &&
                    handleIsActive(buttonRoutes[index]) === "active"
                      ? "invert mix-blend-lighten"
                      : ""
                  } `}
                />
                <span
                  className={
                    handleIsActive(buttonRoutes[index]) === "active"
                      ? "text-white dark:text-white"
                      : "text-black dark:text-white"
                  }
                >
                  {button.name}
                </span>
                {button.name === "Settings" ? (
                  <span className="w-4 h-4 pl-8 pr-2 dark:invert pb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="24"
                      viewBox="0 -960 960 960"
                      width="24"
                    >
                      <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
                    </svg>
                  </span>
                ) : (
                  ""
                )}
              </Link>
              {button.name === "Settings" ? (
                <div
                  className={`settings-options ${
                    handleIsActive(buttonRoutes[index]) === "active"
                      ? "flex"
                      : "hidden"
                  }  flex-col group-hover:flex`}
                >
                  {button.options?.map((option, idx) => {
                    return (
                      <Link
                        href={optionRoutes[idx]}
                        key={idx}
                        onClick={() => handleClick(option.name)}
                        className="w-full flex items-center justify-start  gap-3 flex-shrink-0 no-underline m-2 p-1  text-md dark:hover:bg-mediumpurple hover:bg-mediumblue text-black dark:text-white hover:text-white cursor-pointer rounded-md"
                      >
                        <img
                          src={option.icon}
                          width={24}
                          height={24}
                          alt={option.name.toLowerCase()}
                          className="relative"
                        />
                        <span>{option.name}</span>
                      </Link>
                    );
                  })}
                </div>
              ) : (
                ""
              )}
            </div>
          ))}
          <div className="flex w-full flex-col gap-y-4 px-4  text-left text-[1rem] font-regular-16-24">
            <div
              className={`rounded  no-underline w-full flex cursor-pointer items-center justify-start  `}
            >
              <DarkModeToggle />
              <span className="rounded no-underline w-full flex cursor-pointer items-center justify-start px-4 py-3 gap-3">
                Dark Mode
              </span>
            </div>
          </div>
          <button
            onClick={signOut}
            className="relative mt-14 rounded-lg no-underline cursor-pointer bg-mediumblue dark:bg-mediumpurple w-full  flex items-center justify-start py-3 pl-3 gap-3 text-white text-base font-semibold"
          >
            <div className="w-8 h-8 flex items-center justify-start">
              <img
                className="w-6 h-6 object-cover"
                alt="Logout"
                src="/assets/Logout.svg"
              />
            </div>
            <div className="leading-[1.5rem]">Logout</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
