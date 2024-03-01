import "./BestSelling.scss";
import Subtitle from "../../atoms/Subtitle";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import BestSellingCard from "../../molecules/BestSellingCard";
import plant1 from "../../../assets/Frame 9.png";
import plant2 from "../../../assets/Frame 8.png";
import plant3 from "../../../assets/Frame 7.png";

const BestSelling = () => {
  const bestTitle = "Best Selling Plants";
  const bestSubtitle =
    "Easiest way to healthy life by buying your favorite plants";

  const plants = [
    {
      img: plant1,
      text: "Natural Plants",
      price: 1400,
    },
    {
      img: plant2,
      text: "Artificial Plants",
      price: 900,
    },
    {
      img: plant3,
      text: "Desert Plants",
      price: 3500,
    },
  ];

  return (
    <section className="best">
      <div className="best__description">
        <Title title={bestTitle} />
        <Subtitle title={bestSubtitle} />
        <Button text="See more" color="#C1DCDC" />
      </div>
      <div className="best__cards">
        {plants.map((plant, index) => (
          <BestSellingCard key={index} {...plant} />
        ))}
      </div>
    </section>
  );
};

export default BestSelling;
