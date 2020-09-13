import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {mapDbToFeBouncyCastle} from '../redux/products/bouncy-castles.utils';

const config = {
  apiKey: 'AIzaSyAJYSZgb3VsdDS_p2qpZ6Q0vFsQEJRpvhw',
  authDomain: 'funparty-firebase-a59dd.firebaseapp.com',
  databaseURL: 'https://funparty-firebase-a59dd.firebaseio.com',
  projectId: 'funparty-firebase-a59dd',
  storageBucket: 'funparty-firebase-a59dd.appspot.com',
  messagingSenderId: '607826203788',
  appId: '1:607826203788:web:bbd6860596e9f305c217a9',
  measurementId: 'G-7XET6G43E8',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) {
    return;
  }
  
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  
  if (!snapShot.exists) {
    const {displayName, email} = userAuth;
    const createAt = new Date();
    
    try {
      await userRef.set({
        displayName,
        email,
        createAt,
        ...additionalData,
      });
    } catch (e) {
      console.log('error creating user: ', e);
    }
  }
  
  return userRef;
};

export const convertBouncyCastlesCollectionToMap = (collection) => {
  const transformedCollection = collection.docs.map((doc) => {
    return mapDbToFeBouncyCastle(doc.data());
  });
  
  return transformedCollection;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey);
  
  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });
  
  return await batch.commit();
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const SignInWithGoogle = async () => await auth.signInWithPopup(provider);

export default firebase;
