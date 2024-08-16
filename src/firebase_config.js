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
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
