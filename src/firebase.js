import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from "firebase/storage";

import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAYERLxR3tUNgz9TtODovbtsxwnMvYdLi4",
  authDomain: "play-penny.firebaseapp.com",
  projectId: "play-penny",
  storageBucket: "play-penny.appspot.com",
  messagingSenderId: "417967852730",
  appId: "1:417967852730:web:7771265ea364053551c683",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
export default app;
