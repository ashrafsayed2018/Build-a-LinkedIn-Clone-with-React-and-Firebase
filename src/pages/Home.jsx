import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import { HomeComponent } from "../components/HomeComponent";
import Loader from "../components/Common/Loader";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate;
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

  return loading ? <Loader /> : <HomeComponent />;
};
