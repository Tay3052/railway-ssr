import { Outlet } from "react-router-dom";
import "../assets/css/Header.scss";

const Header = () => {
  return (
    <>
      <div className="header">
        <h1>自己紹介</h1>
      </div>
      <Outlet />
    </>
  );
};

export default Header;
