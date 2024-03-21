import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import DataContext from "../../context/DataContext";

interface IconProps {
  img: string;
  alt: string;
  link: string;
}

const Icon = ({ img, alt, link }: IconProps) => {
  const { shoppingCart } = useContext(DataContext);

  const objectValues: number[] = Object.values(shoppingCart);

  let totalItemsInCart = 0;

  if (objectValues) {
    totalItemsInCart = objectValues.reduce(
      (partialSum, quantity) => partialSum + quantity,
      0
    );
  }

  const location = useLocation();

  return (
    <Link to={link}>
      <img
        src={img}
        alt={alt}
        className={`/${link}` === location.pathname ? "selected" : ""}
      />
      {link === "order" && (
        <span className="shoppingCart-icon">{totalItemsInCart}</span>
      )}
    </Link>
  );
};

export default Icon;
