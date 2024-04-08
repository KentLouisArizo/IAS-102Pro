import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBwWGS85pFGmGdfji7l1GkRClUcMr54pFA",
  authDomain: "ias-project-7250f.firebaseapp.com",
  projectId: "ias-project-7250f",
  storageBucket: "ias-project-7250f.appspot.com",
  messagingSenderId: "56711106133",
  appId: "1:56711106133:web:9b22a5f452f20a3b688edc",
  measurementId: "G-LS9LNPBTB0"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };