import { MouseEvent } from "react";
import Button from "../atoms/Button";
import SmallTitle from "../atoms/SmallTitle";
import Subtitle from "../atoms/Subtitle";

interface CategoriesCardProps {
  image: string;
  title: string;
  text: string;
  link: string;
  selectedIndex: number;
}

const CategoriesCard = ({
  image,
  title,
  text,
  link,
  selectedIndex,
}: CategoriesCardProps) => {
  const handleHover = (e: MouseEvent<HTMLDivElement, MouseEvent>) => {
    console.log(e.target); // Logs only the hovered element. (img / p). Do I need to find a way to extract the index from here?
  };

  return (
    <div
      className={`categories__card ${
        selectedIndex === 1 ? "categories__selected" : null
        // to change here in the future with hovered element
      }`}
      onMouseOver={(e) => handleHover(e)}
    >
      <img src={image} alt={title} />
      <SmallTitle title={title} />
      <Subtitle title={text} />
      <Button text="Explore" color="white" link={link} />
    </div>
  );
};

export default CategoriesCard;
