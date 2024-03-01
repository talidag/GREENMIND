import "./Hero.scss";
import plant from "../../../assets/plant_hero.svg";
import form from "../../../assets/form_hero.svg";
import downArrow from "../../../assets/arrow_down.svg";
import rightArrow from "../../../assets/arrow_right.svg";
import SpecificationCard from "../../molecules/SpecificationCard";
import SearchBox from "../../molecules/SearchBox";

const Hero = () => {
  const title = "Buy your dream plants";

  const specifications = [
    {
      number: 50,
      type: "Plant Species",
    },
    {
      number: 100,
      type: "Customers",
    },
  ];

  return (
    <main className="hero">
      <div className="hero__left">
        <h1>{title}</h1>
        <div className="hero__specifications">
          {specifications.map((specification, index) => (
            <SpecificationCard key={index} {...specification} />
          ))}
        </div>
        <SearchBox />
      </div>
      <div className="hero__right">
        <img src={plant} alt="Plant" className="hero__plant" />
        <img src={form} alt="" className="hero__form" />
        <img src={downArrow} alt="" className="hero__downArrow" />
        <img src={rightArrow} alt="" className="hero__rightArrow" />
      </div>
    </main>
  );
};

export default Hero;
