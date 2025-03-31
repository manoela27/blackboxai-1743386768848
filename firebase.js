import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCcVrqdNRI4qD_YF01PUxwEABpbsMLaDXs",
  authDomain: "repositoriodonadi.firebaseapp.com",
  databaseURL: "https://repositoriodonadi-default-rtdb.firebaseio.com",
  projectId: "repositoriodonadi",
  storageBucket: "repositoriodonadi.firebasestorage.app",
  messagingSenderId: "875455952905",
  appId: "1:875455952905:web:9b5689ce414647386fa0d8",
  measurementId: "G-JFF46YRRVL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
