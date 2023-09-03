import { useNavigate } from "react-router-dom";
import "./navbar.scss";
import LinkedinLogo from "../../../assets/LinkedinLogo.png";
import { AiOutlineHome } from "react-icons/ai";
import {
  AiOutlineUserSwitch,
  AiOutlineSearch,
  AiOutlineMessage,
  AiOutlineBell,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";
import User from "../../../assets/user.png";
const Navbar = () => {
  let navigate = useNavigate();
  const gotoRoute = (route) => {
    navigate(route);
  };

  return (
    <div className="navbar">
      <img className="linkedinLogo" src={LinkedinLogo} alt="logo" />
      <div className="react-icons">
        <AiOutlineHome
          size={30}
          className="react-icon"
          onClick={() => gotoRoute("/")}
        />
        <AiOutlineUserSwitch size={30} className="react-icon" />
        <BsBriefcase size={30} className="react-icon" />
        <AiOutlineSearch size={30} className="react-icon" />
        <AiOutlineMessage size={30} className="react-icon" />
        <AiOutlineBell size={30} className="react-icon" />
        <img
          src={User}
          alt="user"
          style={{ width: "40px" }}
          className="react-icon"
        />
      </div>
    </div>
  );
};

export default Navbar;
