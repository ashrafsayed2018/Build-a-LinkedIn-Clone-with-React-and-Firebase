import { useState } from "react";
import { loginApi, googleSignInApi } from "../api/AuthAPI";

import "../sass/LoginComponent.scss";
import LinkedinLogo from "../assets/LinkedinLogo.png";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
const LoginComponent = () => {
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();
  const login = async () => {
    try {
      let res = await loginApi(credentials.email, credentials.password);
      toast.success("sign in to linkedIn");
      navigate("/");
    } catch (error) {
      toast.error("please check email or password");
    }
  };
  const googleSignin = async () => {
    let res = await googleSignInApi();
    console.log(res);
  };
  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} alt="logo" className="linkedinLogo" />
      <div className="form">
        <h1 className="heading">Sign in</h1>
        <p className="sub-heading">Stay updated on your professinal world</p>
        <div className="auth-inputs">
          <input
            type="text"
            className="common-input"
            placeholder="Email or Phone"
            onChange={(event) =>
              setCredentials({ ...credentials, email: event.target.value })
            }
          />
          <input
            type="text"
            className="common-input"
            placeholder="Password"
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
          />
          <button className="login-btn" onClick={login}>
            Sign in
          </button>
          <hr className="hr-text" data-content="Or" />
          <div className="google-button-container">
            <GoogleButton className="google-btn" onClick={googleSignin} />
            <p className="goto-signup">
              new in linkedIn{" "}
              <span className="join-now" onClick={() => navigate("/register")}>
                join now
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
