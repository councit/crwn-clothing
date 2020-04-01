import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDAU2qY-Q37lWCxB5fpOgMKEu4mmriOqds',
  authDomain: 'crwn-db-7a5a0.firebaseapp.com',
  databaseURL: 'https://crwn-db-7a5a0.firebaseio.com',
  projectId: 'crwn-db-7a5a0',
  storageBucket: 'crwn-db-7a5a0.appspot.com',
  messagingSenderId: '322004695607',
  appId: '1:322004695607:web:fd150ef019dfc641b7ddb2',
  measurementId: 'G-RHXQWE8J6S'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
