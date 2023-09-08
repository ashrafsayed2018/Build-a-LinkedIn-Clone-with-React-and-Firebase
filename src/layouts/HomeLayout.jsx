import { useMemo, useState } from "react";

import { Home } from "../pages/Home";
import Navbar from "../components/Common/Navbar/Navbar";

import { getCurrentUser } from "../api/FirestoreApi";

const HomeLayout = () => {
  const [currentUser, setCurrentUser] = useState({});
  useMemo(() => getCurrentUser(setCurrentUser), []);
  return (
    <div>
      <Navbar />
      <Home currentUser={currentUser} />
    </div>
  );
};

export default HomeLayout;
