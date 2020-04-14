import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCVBKlZMxrA0D259FIH3smA1spTmEwZxa4",
    authDomain: "crwn-db-1252c.firebaseapp.com",
    databaseURL: "https://crwn-db-1252c.firebaseio.com",
    projectId: "crwn-db-1252c",
    storageBucket: "crwn-db-1252c.appspot.com",
    messagingSenderId: "58227728290",
    appId: "1:58227728290:web:a9095a858013a2d6dadcfb"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({promp: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;