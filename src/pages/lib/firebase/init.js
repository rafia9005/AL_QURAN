import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBBs33yiF0qn-xc3O0K1rScYJKITsi2li0",
  authDomain: "excellent-grove-383514.firebaseapp.com",
  databaseURL:
    "https://excellent-grove-383514-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "excellent-grove-383514",
  storageBucket: "excellent-grove-383514.appspot.com",
  messagingSenderId: "308418951318",
  appId: "1:308418951318:web:09c54f8518dbce4c69aab7",
  measurementId: "G-VSRJFVE5T0",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
