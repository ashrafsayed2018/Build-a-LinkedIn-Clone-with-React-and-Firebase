import { useState } from "react";

import ProfileCard from "./Common/ProfileCard/ProfileCard";
import ProfileEdit from "./Common/ProfileEdit/ProfileEdit";

export default function ProfileComponent({ currentUser }) {
  const [isEdit, setIsEdit] = useState(false);
  const onEdit = () => {
    setIsEdit(!isEdit);
  };
  return (
    <div>
      {isEdit ? (
        <ProfileEdit onedit={onEdit} currentUser={currentUser} />
      ) : (
        <ProfileCard currentUser={currentUser} onedit={onEdit} />
      )}
    </div>
  );
}
