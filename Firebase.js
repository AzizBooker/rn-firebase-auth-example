
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import  'firebase/auth'
import firebaseConfig from "./firebase.config";



const Firebase= initializeApp(firebaseConfig);
export default Firebase;
