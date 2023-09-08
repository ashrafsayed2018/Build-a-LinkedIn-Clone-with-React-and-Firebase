import "./index.scss";
import { onlogout } from "../../../api/AuthAPI";
const ProfilePopup = () => {
  return (
    <div className="popup-card">
      <ul className="popup-options">
        <li className="popup-option" onClick={onlogout}>
          Logout
        </li>
      </ul>
    </div>
  );
};

export default ProfilePopup;
