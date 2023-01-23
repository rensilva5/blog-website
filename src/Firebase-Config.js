// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firastore'
import { getAuth, GoogleAuthProvider} from  'fiebase/auth'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9nb1HKapVZWoEVcHey7rNoVdQRk0Yzm4",
  authDomain: "blogprojectwebsite.firebaseapp.com",
  projectId: "blogprojectwebsite",
  storageBucket: "blogprojectwebsite.appspot.com",
  messagingSenderId: "626846307565",
  appId: "1:626846307565:web:d5f457138f98e64626a8e4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()