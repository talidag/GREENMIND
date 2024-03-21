import "./BestSelling.scss";
import { useContext } from "react";
import Subtitle from "../../atoms/Subtitle";
import Title from "../../atoms/Title";
import Button from "../../atoms/Button";
import BestSellingCard from "../../molecules/BestSellingCard";
import AddedToCard from "../../molecules/AddedToCard";
import DataContext from "../../../context/DataContext";

const BestSelling = () => {
  const { plants, popupVisible } = useContext(DataContext);

  const bestTitle = "Best Selling Plants";
  const bestSubtitle =
    "Easiest way to healthy life by buying your favorite plants";

  // TO DO: Popup still appearing blank if we swap fast between card and home

  // const allItems = (Object.values(shoppingCart) as number[]).reduce(
  //   (acc, total) => acc + total,
  //   0
  // );

  // if (allItems === 0) {
  //   setPopupVisible(false);
  // }

  return (
    <section className="best">
      <div className="best__description">
        <Title title={bestTitle} />
        <Subtitle title={bestSubtitle} />
        <Button text="See more" color="#C1DCDC" link="/products" />
      </div>
      <div className="best__cards">
        {plants.map((plant) => (
          <BestSellingCard key={plant.id} {...plant} />
        ))}
      </div>
      {popupVisible && <AddedToCard />}
    </section>
  );
};

export default BestSelling;
