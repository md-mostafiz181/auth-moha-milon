// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDDt2B8JL95Rf3t9bovqQueGMiKF-ZnlGg",
  authDomain: "auth-moha-milon-d206b.firebaseapp.com",
  projectId: "auth-moha-milon-d206b",
  storageBucket: "auth-moha-milon-d206b.firebasestorage.app",
  messagingSenderId: "716901101965",
  appId: "1:716901101965:web:e0915fd51016e10dcb0dc4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;