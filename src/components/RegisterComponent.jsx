import { useState } from "react";
import { googleSignInApi, registerApi } from "../api/AuthAPI";

import "../sass/LoginComponent.scss";
import LinkedinLogo from "../assets/LinkedinLogo.png";
import GoogleButton from "react-google-button";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import { postUserData } from "../api/FirestoreApi";
export const RegisterComponent = () => {
  const [credentials, setCredentials] = useState({});
  const navigate = useNavigate();
  const register = async () => {
    try {
      let res = await registerApi(credentials.email, credentials.password);
      toast.success("account created");

      postUserData({ name: credentials.name, email: credentials.email });
      navigate("/");
      localStorage.setItem("userEmail", res.user.email);
    } catch (error) {
      toast.error("can not create an account");
    }
  };
  const googleSignin = async () => {
    await googleSignInApi();
    navigate("/");
  };
  return (
    <div className="login-wrapper">
      <img src={LinkedinLogo} alt="logo" className="linkedinLogo" />
      <div className="form">
        <h1 className="heading">Make the most of your professional life</h1>
        <div className="auth-inputs">
          <input
            type="text"
            className="common-input"
            placeholder="your name"
            onChange={(event) =>
              setCredentials({ ...credentials, name: event.target.value })
            }
          />
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
            placeholder="Password 6 or more characters"
            onChange={(event) =>
              setCredentials({ ...credentials, password: event.target.value })
            }
          />
          <button className="login-btn" onClick={register}>
            Agree & join
          </button>
          <hr className="hr-text" data-content="Or" />
          <div className="google-button-container">
            <GoogleButton className="google-btn" onClick={googleSignin} />
            <p className="goto-signup">
              already in linkedIn
              <span className="join-now" onClick={() => navigate("/login")}>
                sign in
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
