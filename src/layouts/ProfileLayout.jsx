import { useState, useMemo } from "react";

import { getCurrentUser } from "../api/FirestoreApi";
import Navbar from "../components/Common/Navbar/Navbar";
import Profile from "../pages/Profile";

export default function ProfileLayout() {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => {
    getCurrentUser(setCurrentUser);
  }, []);
  return (
    <div>
      <Navbar />
      <Profile currentUser={currentUser} />
    </div>
  );
}

ProfileLayout;
