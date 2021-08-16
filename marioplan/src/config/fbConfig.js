// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; 

var firebaseConfig = {
  apiKey: "AIzaSyB8HoucBYo0IWhBb_9j2Lea3twTGCOuubQ",
  authDomain: "net-ninja-marioplan-e10dd.firebaseapp.com",
  projectId: "net-ninja-marioplan-e10dd",
  storageBucket: "net-ninja-marioplan-e10dd.appspot.com",
  messagingSenderId: "366825548353",
  appId: "1:366825548353:web:e375de4bb71b1d3b3cb4c0",
  measurementId: "G-N34D80Y268",
};

// Initialize Firebase

firebase.initializeApp(firebaseConfig);
//firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
