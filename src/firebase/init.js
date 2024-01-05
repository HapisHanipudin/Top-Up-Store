// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1pFFpjNdLmk0uGNBMFb8IrZvsFWXA7MQ",
  authDomain: "gaming-store-32ee2.firebaseapp.com",
  projectId: "gaming-store-32ee2",
  storageBucket: "gaming-store-32ee2.appspot.com",
  messagingSenderId: "724097093017",
  appId: "1:724097093017:web:b9f27d7e3eb8ddc017d708",
  measurementId: "G-HE4PQQRHE9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const storage = getStorage();
export const db = getFirestore();
export const auth = getAuth();
