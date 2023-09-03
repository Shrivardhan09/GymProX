// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBNTsR-KiUNKEpJpR3VUxsNH6giCu9WQ4E",
  authDomain: "vproject-4a360.firebaseapp.com",
  projectId: "vproject-4a360",
  storageBucket: "vproject-4a360.appspot.com",
  messagingSenderId: "929968955722",
  appId: "1:929968955722:web:b873ffcbf1137ce99e21b3",
  measurementId: "G-BRCJP58HVJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
