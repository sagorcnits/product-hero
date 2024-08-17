import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyADq9FfY5AffkUuKwxRFFvdJmqB30xVROc",
  authDomain: "product-hero-2a801.firebaseapp.com",
  projectId: "product-hero-2a801",
  storageBucket: "product-hero-2a801.appspot.com",
  messagingSenderId: "666330787297",
  appId: "1:666330787297:web:6f2aeb4051b52995be36a0",
  measurementId: "G-D24RLX04XV",
  // apiKey: import.meta.env.APIKEY,
  // authDomain: import.meta.env.AUTHDOMAIN,
  // projectId: import.meta.env.PROJECTID,
  // storageBucket: import.meta.env.STORAGEBUCKET,
  // messagingSenderId: import.meta.env.MESSAGINGSENDERID,
  // appId: import.meta.env.APPID,
  // measurementId: import.meta.env.MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
