import { useContext, useEffect, useState } from "react";
import cart from "../../../assets/Cart.svg";
import DataContext from "../../../context/DataContext";
import emptyHeart from "../../../assets/heart-empty.svg";
import fullHeart from "../../../assets/heart-full.svg";
import { useAuth0 } from "@auth0/auth0-react";
import PopupLogin from "./PopupLogin";

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
  const {
    setPopupVisible,
    shoppingCart,
    setShoppingCart,
    likedItems,
    setLikedItems,
  } = useContext(DataContext);

  const { isAuthenticated } = useAuth0();

  const [isPopupActive, setIsPopupActive] = useState(false);

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

  // TO DO: Popup still appearing blank if we swap fast between card and home

  const handleLikeClick = () => {
    if (isAuthenticated) {
      if (likedItems.includes(id)) {
        const filteredItems = likedItems.filter((item) => item !== id);
        setLikedItems(filteredItems);
      } else {
        setLikedItems((prevItems) => [...prevItems, id]);
      }
    } else {
      setIsPopupActive(true);
    }
  };

  return (
    <div className="best__card">
      <img
        src={`${likedItems.includes(id) ? fullHeart : emptyHeart}`}
        alt="add to favourites"
        onClick={handleLikeClick}
        className="best__card__fav"
      />
      <img src={img} alt="A plant image" className="best__image" />
      <div className="best__card__details">
        <div className="best__card__wrapper">
          <h5>{name}</h5>
          <p>₱ {formatedPrice}</p>
        </div>
        <img
          src={cart}
          alt={`Add item ${name} to cart`}
          className="best__card__icon"
          onClick={handleImgClick}
          id={id}
        />
      </div>
      {isPopupActive && <PopupLogin setIsPopupActive={setIsPopupActive} />}
    </div>
  );
};

export default BestSellingCard;
