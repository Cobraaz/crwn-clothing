import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyD8-dYvtWFPlPZy1jk2SuJD5A9ZKoNXeok",
    authDomain: "crwn-db-c824b.firebaseapp.com",
    databaseURL: "https://crwn-db-c824b.firebaseio.com",
    projectId: "crwn-db-c824b",
    storageBucket: "crwn-db-c824b.appspot.com",
    messagingSenderId: "490330000902",
    appId: "1:490330000902:web:1244358d092710d9f8bd87",
    measurementId: "G-NJJECZ3NRB"
  };

  firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;