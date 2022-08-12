// Import the functions you need from the SDKs you need
// import firebase from 'firebase/compat/app';


import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBCjsAZMV_qbnGGnPxfnGSWSG8pIMqv6ok",
  authDomain: "ecommerce-clothe.firebaseapp.com",
  // databaseURL: "https://react-chat-99f6d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "ecommerce-clothe",
  storageBucket: "ecommerce-clothe.appspot.com",
  messagingSenderId: "165582172357",
  appId: "1:165582172357:web:81758d3e47cf7ec398c0ac"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
// export const db =firebase.firestore();
export default auth;
