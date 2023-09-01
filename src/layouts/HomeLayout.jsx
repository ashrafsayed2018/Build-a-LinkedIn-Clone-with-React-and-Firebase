import { Home } from "../pages/Home";
import Navbar from "../components/Common/Navbar/Navbar";

const HomeLayout = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default HomeLayout;
