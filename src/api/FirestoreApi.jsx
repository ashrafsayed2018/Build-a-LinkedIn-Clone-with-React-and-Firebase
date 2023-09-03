import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";

const dbRef = collection(firestore, "posts");
export const postStatus = (status) => {
  let data = {
    status: status,
  };
  addDoc(dbRef, data)
    .then(() => {
      toast.success("post added successfully");
    })
    .catch((error) => {
      toast.error(error);
    });
};
export const getPosts = () => {};
