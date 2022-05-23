// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2jAr9L3FiOuxWTLm6wtD-KN5UVJWsy-o",
  authDomain: "manufacturer-website-23b93.firebaseapp.com",
  projectId: "manufacturer-website-23b93",
  storageBucket: "manufacturer-website-23b93.appspot.com",
  messagingSenderId: "140499928437",
  appId: "1:140499928437:web:08c0f1e4bc54f117997f3c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
export default auth;