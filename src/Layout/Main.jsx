import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/shared/Footer";
import Navbar from "../Pages/shared/Navbar/Navbar";

const Main = () => {
  const location = useLocation();
  const noheadar =
    location.pathname.includes("login") || location.pathname.includes("signup");

  return (
    <div>
      {noheadar || <Navbar></Navbar>}
      <Outlet></Outlet>
      {noheadar || <Footer></Footer>}
    </div>
  );
};

export default Main;
