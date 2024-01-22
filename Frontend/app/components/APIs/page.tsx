'use client';

import React, { useState, useEffect } from 'react';
import Sidebar from '../Sidebar/page';
import Header from '../Header/page';
import Modal from '../Modal/Modal';




  
const APIs = () => {


  const [connectedAppsModal, setConnectedAppsModal] = useState(false);
  const [v1TokenModal, setV1TokenModal] = useState(false);
  const [apiTokenModal, setApiTokenModal] = useState(false);
  const [webhookModal, setWebhookModal] = useState(false);

  const openModal = (modalType: string) => {
    switch (modalType) {
      case 'connectedApps':
        setConnectedAppsModal(true);
        break;
      case 'v1Token':
        setV1TokenModal(true);
        break;
      case 'apiToken':
        setApiTokenModal(true);
        break;
      case 'webhook':
        setWebhookModal(true);
        break;
      default:
        break;
    }
  };

  const closeModal = (modalType: string) => {
    switch (modalType) {
      case 'connectedApps':
        setConnectedAppsModal(false);
        break;
      case 'v1Token':
        setV1TokenModal(false);
        break;
      case 'apiToken':
        setApiTokenModal(false);
        break;
      case 'webhook':
        setWebhookModal(false);
        break;
      default:
        break;
    }
  };


  
    return ( 
      <div className="flex w-full  min-h-screen">
        <div className="w-1/4 min-h-screen flex flex-col justify-between">
          <Sidebar />
        </div>
        <div className="w-full bg-special-bg dark:bg-black-dark dark:text-white min-h-screen px-6 py-8 flex flex-col ">
          <div className=""><Header/></div>
          <div className='m-0  py-8 h-7 font-bold'>Custom codes</div>
          <div className='relative   w-full rounded-[10px] flex flex-col h-auto'>

  
      {/* Connected Apps Section */}
         
          <div className="flex flex-row pb-4">
            <div className='relative text-[1.5rem] w-2/3 tracking-[0.01em] font-medium font-inter text-text text-left'>Connected Apps</div>
            <div className='w-1/3 flex justify-end'>
              <button onClick={() => openModal('connectedApps')} className="flex bg-mediumblue cursor-pointer dark:bg-mediumpurple text-white px-4 py-2 h-10 rounded justify-center items-center">
                Find Apps
              </button>
            </div>
          </div>
          <div className=" relative pb-8 text-start text-[1rem] leading-6 font-medium font-medium-16-24 text-gray-01 text-nowrap inline-block ">Third-party apps with acess to your site data.</div>
        

      {/* API Access Section */}
      
       
        <div className="flex flex-row pb-4 justify-start ">
            <div className='relative text-[1.5rem] tracking-[0.01em] w-2/3 font-medium font-inter text-text text-left'>API Access</div>
            <div className='flex w-1/2 justify-end'>
              <button onClick={() => openModal('v1Token')} className="bg-mediumblue cursor-pointer dark:bg-mediumpurple text-white px-4 py-2 h-10 rounded mr-4">
                Generate V1 Token
              </button>
              <button onClick={() => openModal('apiToken')} className="bg-black cursor-pointer dark:bg-mediumpurple text-white px-4 py-2 h-10 rounded">
                Generate API Token
              </button>
            </div>
         </div>
         <div className="relative text-[1rem] pb-8 w-2/3 text-start leading-6 font-medium font-medium-16-24 text-gray-01 inline-block ">A site API token allows your site to interact with Webflow’s rest API allowing you to extend then native capabilities webflow provides.</div>
        
        
      

      {/* Webhooks Section */}
          <div className="flex flex-row pb-4">
            <div className='relative text-[1.5rem] w-2/3 tracking-[0.01em] font-medium font-inter text-text text-left'>Webhooks</div>
            <div className='w-1/3 flex justify-end'>
              <button onClick={() => openModal('webhook')} className="flex  cursor-pointer bg-mediumblue dark:bg-mediumpurple text-white px-4 py-2 h-10 rounded justify-center items-center">
                + Add Webhook
              </button>
            </div>
          </div>
          <div className=" relative pb-8 text-start text-[1rem] leading-6 font-medium font-medium-16-24 text-gray-01 text-nowrap inline-block ">Third-party apps with acess to your site data.</div>
        

      {/* Modals */}
      <Modal show={connectedAppsModal} onClose={() => closeModal('connectedApps')} title="Connected Apps Modal">
        {/* Content for the Connected Apps Modal */}
      </Modal>
      <Modal show={v1TokenModal} onClose={() => closeModal('v1Token')} title="Generate V1 Token Modal">
        {/* Content for the Generate V1 Token Modal */}
      </Modal>
      <Modal show={apiTokenModal} onClose={() => closeModal('apiToken')} title="Generate API Token Modal">
        {/* Content for the Generate API Token Modal */}
      </Modal>
      <Modal show={webhookModal} onClose={() => closeModal('webhook')} title="Add Webhook Modal">
        {/* Content for the Add Webhook Modal */}
      </Modal>
    

          </div>
        </div>
      </div>
     );
}
 
export default APIs;