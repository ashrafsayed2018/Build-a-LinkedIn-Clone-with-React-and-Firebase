import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { HomeComponent } from "../components/HomeComponent";
import Loader from "../components/Common/Loader";

export const Home = ({ currentUser }) => {
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

  return loading ? <Loader /> : <HomeComponent currentUser={currentUser} />;
};
