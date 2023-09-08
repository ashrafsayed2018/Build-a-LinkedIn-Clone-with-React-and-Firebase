import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { auth } from "../firebaseConfig";
export const loginApi = (email, password) => {
  try {
    let response = signInWithEmailAndPassword(auth, email, password);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};
export const registerApi = (email, password) => {
  try {
    let response = createUserWithEmailAndPassword(auth, email, password);
    console.log(response);
    return response;
  } catch (error) {
    return error;
  }
};

export const googleSignInApi = () => {
  try {
    let googleProvider = new GoogleAuthProvider();
    let res = signInWithPopup(auth, googleProvider);
    return res;
  } catch (error) {
    return error;
  }
};

export const onlogout = () => {
  try {
    signOut(auth);
  } catch (error) {
    return error;
  }
};
