
import { getAuth,createUserWithEmailAndPassword } from "firebase/auth";
import { initializeApp } from 'firebase/app';
import  'firebase/auth'
import {API_KEY,AUTH_DOMAIN,PROJECT_ID,MESSAGING_SENDERID,APPID,MEASUREMENTID} from '@env'
// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain:AUTH_DOMAIN ,
  projectId:PROJECT_ID ,
  storageBucket: PROJECT_ID,
  messagingSenderId:MESSAGING_SENDERID ,
  appId: APPID,
  measurementId: MEASUREMENTID
};




const Firebase= initializeApp(firebaseConfig);
export default Firebase;
