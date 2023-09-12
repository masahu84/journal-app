// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu26BxfPT78MxRF5qTXW2g63lH4gnlUNI",
  authDomain: "journal-app-1a4c0.firebaseapp.com",
  projectId: "journal-app-1a4c0",
  storageBucket: "journal-app-1a4c0.appspot.com",
  messagingSenderId: "420281590294",
  appId: "1:420281590294:web:2731b4cc35f009ca1f4b37",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
