// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDyzkDkVrFsp3rydGWK0LWs5HOlWwwsZNI",
  authDomain: "mini-ecommerce-46dc6.firebaseapp.com",
  projectId: "mini-ecommerce-46dc6",
  storageBucket: "mini-ecommerce-46dc6.firebasestorage.app",
  messagingSenderId: "692942458606",
  appId: "1:692942458606:web:dbd3194cbe2904fa906dff"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);