// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBT4YWAuTBhX1JNkAfj8oauYBBt0bUWUvU",
  authDomain: "orebi-ecommerce.firebaseapp.com",
  projectId: "orebi-ecommerce",
  storageBucket: "orebi-ecommerce.appspot.com",
  messagingSenderId: "224470041905",
  appId: "1:224470041905:web:0516d4b7845c73a7f9dc10"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default firebaseConfig