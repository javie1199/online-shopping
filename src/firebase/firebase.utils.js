// import { initializeApp } from "firebase/app";

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

// The web app's Firebase configuration
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

// Sign in with google account
// https://firebase.google.com/docs/auth/web/google-signin
const provider = new GoogleAuthProvider();
export const auth = firebase.auth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Reference collection data in firebaseStore
export const fireStore = firebase.firestore();

// Create new doc for Users Collection
export const createUserProfileDocumentation = async (
  userAuth,
  additionalData
) => {
  // Check if Google user signed in, if not ignore it
  if (!userAuth) return;

  // If user signed in by Google account, grap that user
  const userRef = fireStore.doc(`users/${userAuth.uid}`);

  // take snapShot of that user
  const snapShot = await userRef.get();

  // Check if user exists in db, if not, add that user in db
  if (!snapShot.exists) {
    // take info from that user
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error create user", error.message);
    }
  }
  // return that user
  return userRef;
};

export default firebase;
