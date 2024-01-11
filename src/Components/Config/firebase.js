// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDR-EveBW1NE5893gqO9t6er1f3MVTrD90",
  authDomain: "contact-app-2c79f.firebaseapp.com",
  projectId: "contact-app-2c79f",
  storageBucket: "contact-app-2c79f.appspot.com",
  messagingSenderId: "573096850953",
  appId: "1:573096850953:web:0b86a1f289fce32ab22ad8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);