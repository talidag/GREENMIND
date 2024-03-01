import cart from "../../assets/Cart.svg";
import filter from "../../assets/FilterRight.svg";
import person from "../../assets/Person.svg";

const Icons = () => {
  return (
    <div className="icons__wrapper">
      <a href="">
        <img src={cart} alt="Shopping cart icon" />
      </a>
      <a href="">
        <img src={person} alt="Person icon" />
      </a>
      <div className="verticalLine"></div>
      <a href="">
        <img src={filter} alt="Filter icon" />
      </a>
    </div>
  );
};

export default Icons;
