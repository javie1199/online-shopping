// import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyDkjrkGOeRgfy_I0GyvYdizZaGH1KClxBw",
  authDomain: "online-shopping-db-f67c6.firebaseapp.com",
  projectId: "online-shopping-db-f67c6",
  storageBucket: "online-shopping-db-f67c6.appspot.com",
  messagingSenderId: "41367459386",
  appId: "1:41367459386:web:d3d20fa25a7cefadef4703",
};

// Initialize Firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
