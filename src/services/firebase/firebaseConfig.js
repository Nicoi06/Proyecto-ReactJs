// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAyQO_Hfyava64YJT6lL4rI42tWMemv69U",
  authDomain: "proyecto-react-js-2848d.firebaseapp.com",
  projectId: "proyecto-react-js-2848d",
  storageBucket: "proyecto-react-js-2848d.firebasestorage.app",
  messagingSenderId: "67926879965",
  appId: "1:67926879965:web:5c7bde84b51e3918d5b534"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
