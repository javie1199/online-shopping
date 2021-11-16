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

// Sign in with google account
// https://firebase.google.com/docs/auth/web/google-signin
const provider = new GoogleAuthProvider();
export const auth = getAuth();
export const fireStore = firebase.firestore();
// const auth = getAuth();
export const signInWithGoogle = () => signInWithPopup(auth, provider);

// Add new user to database (Collections) -> Create a function to do that
export const createUserProfileDocumentation = async (
  userAuth,
  additionalData
) => {
  // Get user from Google Authentication -> Check if that use exist in db -> if not then add user, otherwise ignore it.
  if (!userAuth) return;

  const userRef = fireStore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    // create variable to add to collections
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
};

export default firebase;
