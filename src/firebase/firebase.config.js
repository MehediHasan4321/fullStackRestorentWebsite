
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-EpS05MH750nuJWHY5rca6YvghRR5ZyA",
  authDomain: "fullstckrestorentwebsite.firebaseapp.com",
  projectId: "fullstckrestorentwebsite",
  storageBucket: "fullstckrestorentwebsite.appspot.com",
  messagingSenderId: "1065956529104",
  appId: "1:1065956529104:web:10710364114074c3fd5fd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app