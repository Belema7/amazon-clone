import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3ADpw5SnBnv1KnRUhLmcKBoybdS4yzZ4",
  authDomain: "clone-a6b2b.firebaseapp.com",
  projectId: "clone-a6b2b",
  storageBucket: "clone-a6b2b.firebasestorage.app",
  messagingSenderId: "91514635306",
  appId: "1:91514635306:web:d2cdf1c76e64eb9446af53"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);