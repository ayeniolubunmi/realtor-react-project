// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAF3W1gwY-Vf7s093OGvmTepkC9FnE05ZI",
  authDomain: "realtor-clone-project-d397e.firebaseapp.com",
  projectId: "realtor-clone-project-d397e",
  storageBucket: "realtor-clone-project-d397e.appspot.com",
  messagingSenderId: "166021683662",
  appId: "1:166021683662:web:4b87a70ba6e678b32ab39f"
};
// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
export const auth = getAuth();