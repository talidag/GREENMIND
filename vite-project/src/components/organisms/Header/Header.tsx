import "./Header.scss";
import Icon from "../../molecules/Icon";
import Navbar from "../../molecules/Navbar";
import logo from "../../../assets/GREENMIND.svg";
import cart from "../../../assets/Cart.svg";
import filter from "../../../assets/FilterRight.svg";
import person from "../../../assets/Person.svg";

const Header = () => {
  const iconsData = [
    {
      img: cart,
      alt: "Shopping cart icon",
      link: "",
    },
    {
      img: person,
      alt: "Person cart icon",
      link: "",
    },
    {
      img: filter,
      alt: "Filter cart icon",
      link: "",
    },
  ];
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
        <div className="icons__wrapper">
          {iconsData.map((icon, index) => (
            <Icon key={index} {...icon} />
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
