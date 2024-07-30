// firebase-config.js

import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import {
  getFirestore,
  collection,
  doc,
  setDoc,
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDhPUkqiqku9P2vzCGvZmWzdo0nDzAKTR0",
  authDomain: "babysync-pwa.firebaseapp.com",
  projectId: "babysync-pwa",
  storageBucket: "babysync-pwa.appspot.com",
  messagingSenderId: "526444280562",
  appId: "1:526444280562:web:2e1de1423b222427b76e6b",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, collection, doc, setDoc };
