// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCM4iA8dMjEAl_XXIvWR21y2wlPJ2pmyU",
  authDomain: "netflixgpt-3935f.firebaseapp.com",
  projectId: "netflixgpt-3935f",
  storageBucket: "netflixgpt-3935f.firebasestorage.app",
  messagingSenderId: "584631962194",
  appId: "1:584631962194:web:03979c1c8f0dcb82a92d8b",
  measurementId: "G-70Y1X6YL4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();