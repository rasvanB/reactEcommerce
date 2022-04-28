import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const config = {
    apiKey: "AIzaSyBr-M8c-xq0C0xzMeCR7Txk6DEevwrKrmM",
    authDomain: "crwn-db-a3382.firebaseapp.com",
    projectId: "crwn-db-a3382",
    storageBucket: "crwn-db-a3382.appspot.com",
    messagingSenderId: "125342814453",
    appId: "1:125342814453:web:14e7b602cab17f189f75bc",
    measurementId: "G-M7V3FCDM2W",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
