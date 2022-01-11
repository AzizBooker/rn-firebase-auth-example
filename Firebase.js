
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import  'firebase/auth'
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIcwDU7sKW_binujZz2w9Efrcm-vEnQag",
  authDomain: "rn-firebase-auth-example.firebaseapp.com",
  projectId: "rn-firebase-auth-example",
  storageBucket: "rn-firebase-auth-example.appspot.com",
  messagingSenderId: "400688105109",
  appId: "1:400688105109:web:4c5535803c01838b46fd9c",
  measurementId: "G-7XYTT0WX0C"
};




const Firebase= initializeApp(firebaseConfig);
export default Firebase;
