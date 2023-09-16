import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import Loader from "../components/Common/Loader";
import ProfileComponent from "../components/ProfileComponent";
export default function Profile({ currentUser }) {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (!res?.accessToken) {
        navigate("/login");
      } else {
        setLoading(false);
      }
    });
    return () => {};
  });

  return loading ? <Loader /> : <ProfileComponent currentUser={currentUser} />;
}
