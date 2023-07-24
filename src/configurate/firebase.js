// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyDcTvdD2FTnJyhfRx07oRq8077-7Wx6x6M",
  authDomain: "fir-auth-dcfdd.firebaseapp.com",
  projectId: "fir-auth-dcfdd",
  storageBucket: "fir-auth-dcfdd.appspot.com",
  messagingSenderId: "680236839207",
  appId: "1:680236839207:web:3a9fd8fe31bfdc29e5b902",
  measurementId: "G-YKNW7TS1LD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };