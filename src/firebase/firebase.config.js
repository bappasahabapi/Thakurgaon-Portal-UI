// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCM0GXrgvyXeicitJW-X0-r_0vHSitRBzs",
  authDomain: "thakurgaon-portal.firebaseapp.com",
  projectId: "thakurgaon-portal",
  storageBucket: "thakurgaon-portal.appspot.com",
  messagingSenderId: "234838367881",
  appId: "1:234838367881:web:b0d841c2127c19bf24f058"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;