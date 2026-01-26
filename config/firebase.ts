// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getReactNativePersistence, initializeAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD4K1oA3V7qTENRl5BviI8PvxbODYe7X74",
  authDomain: "expense-tracker-fc489.firebaseapp.com",
  projectId: "expense-tracker-fc489",
  storageBucket: "expense-tracker-fc489.firebasestorage.app",
  messagingSenderId: "82458649399",
  appId: "1:82458649399:web:f35d718dfce13a02acf0b2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//auth
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
});

//database
export const firestore = getFirestore(app);