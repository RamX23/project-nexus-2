// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB8zj6LIR7gBZKxYasjz1t-Keg3cobyqrM",
  authDomain: "hotel-login-93cda.firebaseapp.com",
  projectId: "hotel-login-93cda",
  storageBucket: "hotel-login-93cda.appspot.com",
  messagingSenderId: "382126343487",
  appId: "1:382126343487:web:ad98f15f204087b495bf8a",
  measurementId: "G-ZTG000FN6V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getAuth(app)