// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLt9rUb_gPOFLCwv1okTfVLtZNYtgB3r8",
  authDomain: "social-media-13a8e.firebaseapp.com",
  projectId: "social-media-13a8e",
  storageBucket: "social-media-13a8e.appspot.com",
  messagingSenderId: "1082063956738",
  appId: "1:1082063956738:web:6d79fbb66d805c88eeb01b",
  databaseURL: "https://social-media-13a8e-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);