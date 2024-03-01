import "./Header.scss";
import logo from "../../assets/GREENMIND.svg";
import Icons from "../molecules/Icons";
import Navbar from "../molecules/Navbar";

const Header = () => {
  return (
    <header>
      <div className="logo__navbar__wrapper">
        <div className="logo">
          <a href="">
            <img src={logo} alt="GREENMIND logo" />
          </a>
        </div>
        <div className="navbar__container">
          <Navbar />
        </div>
      </div>
      <div className="icons__container">
        <Icons />
      </div>
    </header>
  );
};

export default Header;
