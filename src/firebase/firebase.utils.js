import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
