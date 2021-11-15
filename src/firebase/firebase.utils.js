// import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
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

export const fireStore = firebase.firestore();

// Sign in with google account
// https://firebase.google.com/docs/auth/web/google-signin
const provider = new GoogleAuthProvider();
export const auth = getAuth();
// const auth = getAuth();
export const signInWithGoogle = () =>
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
    });

export default firebase;
