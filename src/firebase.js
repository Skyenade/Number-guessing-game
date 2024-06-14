import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBO0jp1KNmrIy0-FVsorbOHx-1ElHDHGR4",
  authDomain: "midterm-firebase-50839.firebaseapp.com",
  projectId: "midterm-firebase-50839",
  storageBucket: "midterm-firebase-50839.appspot.com",
  messagingSenderId: "466010448346",
  appId: "1:466010448346:web:1cbe37256a6ffd998520e3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export {auth};