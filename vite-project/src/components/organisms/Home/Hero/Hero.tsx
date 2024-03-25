import "./Hero.scss";
import plant from "../../../../assets/plant_hero.svg";
import form from "../../../../assets/form_hero.svg";
import downArrow from "../../../../assets/arrow_down.svg";
import rightArrow from "../../../../assets/arrow_right.svg";
import SpecificationCard from "../../../molecules/Hero/SpecificationCard";
import SearchBox from "../../../molecules/Hero/SearchBox";
import Image from "../../../atoms/Image";

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

  const heroImg = [
    {
      img: plant,
      alt: "Plant",
      className: "hero__plant",
    },
    {
      img: form,
      alt: "",
      className: "hero__form",
    },
    {
      img: downArrow,
      alt: "",
      className: "hero__downArrow",
    },
    {
      img: rightArrow,
      alt: "",
      className: "hero__rightArrow",
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
        {heroImg.map((img, index) => (
          <Image key={index} {...img} />
        ))}
      </div>
    </main>
  );
};

export default Hero;
