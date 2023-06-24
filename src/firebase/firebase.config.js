// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-PytNXuIgLtw7xluE1e4OcGnr1Zlu8bk",
  authDomain: "summer-camp-curlinury.firebaseapp.com",
  projectId: "summer-camp-curlinury",
  storageBucket: "summer-camp-curlinury.appspot.com",
  messagingSenderId: "1007043519446",
  appId: "1:1007043519446:web:6d15b83d8d1a0022253a77"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;