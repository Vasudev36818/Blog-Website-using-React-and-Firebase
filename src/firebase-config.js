// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getAuth,GoogleAuthProvider} from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQwj3USY9bLz56UiuBw5wEe7qoKhIEG_M",
  authDomain: "blog-writing-react-project.firebaseapp.com",
  projectId: "blog-writing-react-project",
  storageBucket: "blog-writing-react-project.appspot.com",
  messagingSenderId: "84974728339", 
  appId: "1:84974728339:web:2479a876cc226fa3008966"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db=getFirestore(app);
export const auth=getAuth(app);
export const provider =new GoogleAuthProvider();