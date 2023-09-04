import { firestore } from "../firebaseConfig";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { toast } from "react-toastify";

const dbRef = collection(firestore, "posts");
export const postStatus = (object) => {
  addDoc(dbRef, object)
    .then(() => {
      toast.success("post added successfully");
    })
    .catch((error) => {
      toast.error(error);
    });
};
export const getStatus = (setAllStatus) => {
  onSnapshot(dbRef, (response) => {
    setAllStatus(
      response.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      })
    );
  });
};
