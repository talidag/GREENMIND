import { useContext } from "react";
import cart from "../../assets/Cart.svg";
import DataContext from "../../context/DataContext";

interface BestSellingCardProps {
  img: string;
  text: string;
  price: number;
  handleImgClick: (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => void;
}

const BestSellingCard = ({ img, text, price }: BestSellingCardProps) => {
  const { handleImgClick } = useContext(DataContext);

  const formatedPrice = price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="best__card">
      <img src={img} alt="A plant image" className="best__image" />
      <div className="best__card__details">
        <div className="best__card__wrapper">
          <h5>{text}</h5>
          <p>₱ {formatedPrice}</p>
        </div>
        <img
          src={cart}
          alt={`Add item ${text} to cart`}
          className="cart-icon"
          onClick={handleImgClick}
          id={text}
        />
      </div>
    </div>
  );
};

export default BestSellingCard;
