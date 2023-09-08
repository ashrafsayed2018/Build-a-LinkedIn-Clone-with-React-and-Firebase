import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";

const postRef = collection(firestore, "posts");
const userRef = collection(firestore, "users");
export const postStatus = (object) => {
  addDoc(postRef, object)
    .then(() => {
      toast.success("post added successfully");
    })
    .catch((error) => {
      toast.error(error);
    });
};
export const getStatus = (setAllStatus) => {
  onSnapshot(postRef, (response) => {
    setAllStatus(
      response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    );
  });
};

export const postUserData = (object) => {
  addDoc(userRef, object)
    .then(() => {})
    .catch((error) => {
      console.log(error);
    });
};

export const getCurrentUser = (setCurrentUser) => {
  let currentEmail = localStorage.getItem("userEmail");
  onSnapshot(userRef, (response) => {
    setCurrentUser(
      response.docs
        .map((doc) => {
          return { ...doc.data(), userId: doc.id };
        })
        .filter((user) => {
          return user.email === currentEmail;
        })[0]
    );
  });
};
