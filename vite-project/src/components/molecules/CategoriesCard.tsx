import { useState } from "react";
import Button from "../atoms/Button";
import SmallTitle from "../atoms/SmallTitle";
import Subtitle from "../atoms/Subtitle";

interface CategoriesCardProps {
  image: string;
  title: string;
  text: string;
  link: string;
  index: number;
}

const CategoriesCard = ({
  image,
  title,
  text,
  link,
  index,
}: CategoriesCardProps) => {
  const [classN, setClassN] = useState(false);

  return (
    <div
      className={`categories__card ${
        classN || index == 1 ? "categories__selected" : null // to change here in the future with hovered element
      }`}
      onMouseOver={() => setClassN(true)}
      onMouseLeave={() => setClassN(false)}
    >
      <img src={image} alt={title} />
      <SmallTitle title={title} />
      <Subtitle title={text} />
      <Button text="Explore" color="white" link={link} />
    </div>
  );
};

export default CategoriesCard;
