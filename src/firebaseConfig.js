// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBuGgNVaYYxx7Wg97goZQm24H4pUxCPYuA",
  authDomain: "linkedin-clone-11827.firebaseapp.com",
  projectId: "linkedin-clone-11827",
  storageBucket: "linkedin-clone-11827.appspot.com",
  messagingSenderId: "663791855045",
  appId: "1:663791855045:web:5f3fe7b38025848f6c17ac",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { app, auth };
