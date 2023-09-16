// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQaGoME2hIusFFWDeWhDO_wU1huWK3lPg",
  authDomain: "linked-in-9f9de.firebaseapp.com",
  projectId: "linked-in-9f9de",
  storageBucket: "linked-in-9f9de.appspot.com",
  messagingSenderId: "28937294224",
  appId: "1:28937294224:web:e5feabc2e74fae30de2315",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
export { app, auth, firestore };
