// InfluencersTable.tsx
'use client';
import React, { useEffect, useState } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { getFirestore } from "firebase/firestore";
import { app } from '@/app/Config/firebase'
import { collection, getDocs } from 'firebase/firestore';
import { set } from 'firebase/database';

const InfluencersTable: React.FC = () => {

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

  return (
        <div className="max-h-96 overflow-y-scroll border border-black dark:border-white border-solid">
            {data.map((profile: any, index: number) => (
            <table key={index} className="flex flex-row gap-2 p-2 justify-center items-center">
                <tr className="w-1/4  overflow-hidden whitespace-nowrap hover:overflow-visible hover:whitespace-normal">{profile.name}</tr>
                <tr className="w-1/4  ">{profile.rating || '*****'}</tr>
                <tr className="w-1/4  ">{profile.followers}</tr>
                <tr className="w-1/4  ">{profile.potential_reach}</tr>
            </table>
            ))}
        </div>
    
  );
};

export default InfluencersTable;
