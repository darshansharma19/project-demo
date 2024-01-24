'use client';
import React from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';
import { useState } from 'react';



interface NotificationEntry {
  id: number;
  heading: string;
  content: string;
  recipient: string;
  date: string;
  time: string;
}

interface NotificationCardProps {
  notification: NotificationEntry;
  onDoneClick: (id: number) => void;
}

const NotificationCard: React.FC<NotificationCardProps> = ({ notification, onDoneClick }) => {
  return (
    <div className="relative rounded-lg shadow-xl bg-background-light dark:bg-gray-200 dark:text-white box-border w-[264px] h-[240px] object-contain overflow-hidden flex flex-col p-6 border-solid border-border">
      {/* Section 1: Heading */}
      <div className="flex flex-col justify-center items-center  border-special-bg dark:border-white  border-b border-solid">
        <div className="relative text-[1rem] leading-6 capitalize font-bold-16-24 text-gray-02 dark:text-white text-left ">
          {notification.heading}
        </div>
      </div>

      {/* Section 2: Notification Content */}
      <div className="relative w-full flex flex-col items-start justify-start gap-6 text-left text-default-black dark:text-white font-medium-14-20">
        <div className="flex flex-col items-start justify-start gap-4">
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="relative leading-7 capitalize font-semibold font-semibold-20-28 inline-block w-[19rem]">
              {notification.content}
            </div>
            <div className="relative text-[0.88rem] leading-5 font-regular-14-20 text-gray-03 inline-block w-[8rem]">
              {`For: ${notification.recipient}`}
            </div>
          </div>
          <div className="flex flex-col items-start justify-start gap-1">
            <div className="relative leading-7 capitalize font-semibold inline-block w-[7.81rem]">{notification.date}</div>
            <div className="relative text-[0.88rem] leading-5 font-regular-14-20 text-gray-03 inline-block w-[7.81rem]">{notification.time}</div>
          </div>
        </div>
      </div>

      {/* Section 3: Done Button */}
      <div className="flex flex-row gap-2 justify-center items-center p-6">
        <div
          className="relative rounded bg-mediumblue w-32 flex flex-row items-center justify-center py-2 px-5 box-border gap-2 text-left text-[0.88rem] text-white font-medium-14-20 cursor-pointer"
          onClick={() => onDoneClick(notification.id)}
        >
          <div className="relative leading-5 capitalize font-medium">Done</div>
          <img className="relative w-4 h-4 overflow-hidden shrink-0" alt="" src="/assets/chevron-right (1)_white.svg" />
        </div>
      </div>
    </div>
  );
};


const Notifications = () => {

  const [notificationList, setNotificationList] = useState<NotificationEntry[]>([
    {
      id: 1,
      heading: 'Notification',
      content: 'Reserve a Table',
      recipient: 'Mr. Patrick',
      date: '20 Dec',
      time: '12:30 pm',
    },
    // Add more entries as needed
    {
      id: 2,
      heading: 'Notification',
      content: 'Reserve a Table',
      recipient: 'Mr. Patrick',
      date: '20 Dec',
      time: '12:30 pm',
    },

    // Add more entries as needed
    {
      id: 3,
      heading: 'Notification',
      content: 'Reserve a Table',
      recipient: 'Mr. Patrick',
      date: '20 Dec',
      time: '12:30 pm',
    },
    // Add more entries as needed
    {
      id: 4,
      heading: 'Notification',
      content: 'Reserve a Table',
      recipient: 'Mr. Patrick',
      date: '20 Dec',
      time: '12:30 pm',
    },
    // Add more entries as needed
    {
      id: 5,
      heading: 'Notification',
      content: 'Reserve a Table',
      recipient: 'Mr. Patrick',
      date: '20 Dec',
      time: '12:30 pm',
    },
    // Add more entries as needed
    {
      id: 6,
      heading: 'Notification',
      content: 'Reserve a Table',
      recipient: 'Mr. Patrick',
      date: '20 Dec',
      time: '12:30 pm',
    },

  ]);
  
  const handleDoneClick = (id: number) => {
    const updatedList = notificationList.filter((notification) => notification.id !== id);
    setNotificationList(updatedList);
  };

    return ( 
    <div className="flex min-h-screen">
      <div className="w-1/4 min-h-screen flex flex-col justify-between">
        <Sidebar />
      </div>
      <div className="w-full bg-special-bg dark:bg-black-dark dark:text-white px-8 py-8 flex flex-col justify-between">
          <div className=""><Header/></div>
          <div className="relative text-[2.25rem] py-6 font-semibold font-geist">Notifications</div>
        <div className='m-0  py-6 flex flex-col gap-6 h-full font-bold'>
          <div className="flex flex-row flex-wrap gap-8">
              
          {notificationList.map((notification) => (
            <NotificationCard key={notification.id} notification={notification} onDoneClick={handleDoneClick} />
          ))}
          </div>
        </div>
      </div>
    </div>
     );
}
 
export default Notifications;