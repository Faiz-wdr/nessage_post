// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { Form } from "react-router-dom";

// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW1I9iAq1WM85OWWq15fn8XI4sCckdbSA",
  authDomain: "msgapp-83b16.firebaseapp.com",
  projectId: "msgapp-83b16",
  storageBucket: "msgapp-83b16.appspot.com",
  messagingSenderId: "1026053782655",
  appId: "1:1026053782655:web:574a5fd59a13b7f3aa934a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
