// Import the functions you need from the SDKs you need
import firebase, { initializeApp } from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCh1ANkhamcy4nAuOAfQpjnbd08tzZ3m6g",
  authDomain: "fir-dee89.firebaseapp.com",
  projectId: "fir-dee89",
  storageBucket: "fir-dee89.appspot.com",
  messagingSenderId: "86897820550",
  appId: "1:86897820550:web:405e34276c685b91f6a207",
  measurementId: "G-WY5R5VVCS8"
};

// Initialize Firebase
const Firebaseapp = firebase.initializeApp(firebaseConfig);

const analytics = getAnalytics(Firebaseapp);

const auth = getAuth(Firebaseapp);



export default {Firebaseapp, auth, analytics};


