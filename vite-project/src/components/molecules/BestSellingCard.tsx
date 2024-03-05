import { useContext, useEffect } from "react";
import cart from "../../assets/Cart.svg";
import DataContext from "../../context/DataContext";

interface BestSellingCardProps {
  id: string;
  name: string;
  price: number;
  img: string;
}

type ShoppingCartType = {
  [itemId: string]: number;
};

const BestSellingCard = ({ id, name, price, img }: BestSellingCardProps) => {
  const { setPopupVisible, shoppingCart, setShoppingCart } =
    useContext(DataContext);

  // TO DO: move this a higher level

  const formatedPrice = price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const handleImgClick = (e: { currentTarget: { id: any } }) => {
    setPopupVisible(true);
    const itemId = e.currentTarget.id;

    if (itemId in shoppingCart) {
      setShoppingCart((prevCart: ShoppingCartType) => ({
        ...prevCart,
        [itemId]: prevCart[itemId] + 1,
      }));
    } else {
      setShoppingCart((prevCart) => ({ ...prevCart, [itemId]: 1 }));
    }
  };

  useEffect(() => {
    let timer1 = setTimeout(() => setPopupVisible(false), 2000);
    return () => {
      clearTimeout(timer1);
    };
  }, [shoppingCart]);

  return (
    <div className="best__card">
      <img src={img} alt="A plant image" className="best__image" />
      <div className="best__card__details">
        <div className="best__card__wrapper">
          <h5>{name}</h5>
          <p>₱ {formatedPrice}</p>
        </div>
        <img
          src={cart}
          alt={`Add item ${name} to cart`}
          className="cart-icon"
          onClick={handleImgClick}
          id={id}
        />
      </div>
    </div>
  );
};

export default BestSellingCard;
