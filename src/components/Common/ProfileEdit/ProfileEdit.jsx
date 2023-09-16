import { useState } from "react";
import "./ProfileEdit.scss";
import { EditProfile } from "../../../api/FirestoreApi";
export default function ProfileEdit({ onedit, currentUser }) {
  const [editInputs, setEditInputs] = useState({});

  const getInput = (event) => {
    let { name, value } = event.target;
    let input = { [name]: value };
    setEditInputs({ ...editInputs, ...input });
  };
  const updateProfileData = () => {
    EditProfile(currentUser?.userId, editInputs);
  };
  return (
    <div className="profile-card">
      <div className="edit-btn">
        <button onClick={onedit}>Go Back</button>
      </div>
      <div className="profile-edit-inputs">
        <input
          type="text"
          onChange={getInput}
          className="common-input"
          placeholder="name"
          name="name"
        />
        <input
          type="text"
          onChange={getInput}
          className="common-input"
          placeholder="headline"
          name="headline"
        />
        <input
          type="text"
          onChange={getInput}
          className="common-input"
          placeholder="location"
          name="location"
        />
        <input
          type="text"
          onChange={getInput}
          className="common-input"
          placeholder="company"
          name="company"
        />
        <input
          type="text"
          onChange={getInput}
          className="common-input"
          placeholder="collage"
          name="collage"
        />
      </div>
      <div className="save-container">
        <button className="save-btn" onClick={updateProfileData}>
          Save
        </button>
      </div>
    </div>
  );
}
