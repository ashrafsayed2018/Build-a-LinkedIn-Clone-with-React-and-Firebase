import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../components/LoginComponent";
import Loader from "../components/Common/Loader";
const Login = () => {
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(auth, (res) => {
      if (res?.accessToken) {
        navigate("/");
      } else {
        setLoading(false);
      }
    });
    return () => {};
  });
  return loading ? <Loader /> : <LoginComponent />;
};

export default Login;
