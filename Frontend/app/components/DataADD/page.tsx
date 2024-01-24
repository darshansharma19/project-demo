'use Client'

import React from 'react';  
import { db } from '@/app/Config/firebase';
import { tikTokUsers } from '../InstaUserData/page';
import { getFirestore } from "firebase/firestore";
import { app } from '@/app/Config/firebase'
import { collection, addDoc } from 'firebase/firestore';
import { set } from 'firebase/database';


const DataAdd = () => {

    const handleDataAdd = async () => {
        try {
          const instaUsersCollection = collection(db, 'tiktokUsers');

          // Loop through each user in the array and add to the collection
          for (const userData of tikTokUsers) {
            // Add user data to the 'instaUsers' collection
            const docRef = await addDoc(instaUsersCollection, userData);
      
            console.log('Document written with ID: ', docRef.id);
            console.log('docRef: ', docRef);
          }
        } catch (error) {
          console.error('Error adding documents: ', error);
          throw error; // Propagate the error for handling in the calling code
        
        }
      };

    return ( 
                <button onClick={handleDataAdd}>
                    Data Add
                </button>
     );
}
 
export default DataAdd;