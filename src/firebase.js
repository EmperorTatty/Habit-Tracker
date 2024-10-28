// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDAi72dBhuCFTvx-9fxvsNNhBaQzCD0fM4",
  authDomain: "habit-tracker-8a04c.firebaseapp.com",
  projectId: "habit-tracker-8a04c",
  storageBucket: "habit-tracker-8a04c.appspot.com",
  messagingSenderId: "934790104446",
  appId: "1:934790104446:web:feb7d0a4372afdf1781f2f",
  measurementId: "G-NVWQ60PBPJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);