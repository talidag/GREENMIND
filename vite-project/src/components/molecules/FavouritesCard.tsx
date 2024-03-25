import { useContext } from "react";
import DataContext from "../../context/DataContext";
import fullHeart from "../../assets/heart-full.svg";
import cart from "../../assets/Cart.svg";

interface BestSellingCardProps {
  id: string;
  name: string;
  price: number;
  img: string;
}

type ShoppingCartType = {
  [itemId: string]: number;
};

const FavouritesCard = ({ id, name, price, img }: BestSellingCardProps) => {
  const { likedItems, setLikedItems, shoppingCart, setShoppingCart } =
    useContext(DataContext);

  const handleLikeClick = () => {
    const filteredItems = likedItems.filter((item) => item !== id);
    setLikedItems(filteredItems);
  };

  const handleImgClick = (e: { currentTarget: { id: any } }) => {
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

  return (
    <div className="favourite">
      <img
        src={fullHeart}
        alt="add to favourites"
        onClick={handleLikeClick}
        className="favourite__heart"
      />
      <img src={img} alt="A plant image" className="favourite__image" />
      <div className="favourite__details">
        <div className="favourite__wrapper">
          <h5>{name}</h5>
          <p>₱ {price}</p>
        </div>
        <div className="favourite__options">
          <img
            src={cart}
            alt={`Add item ${name} to cart`}
            className="favourite__icon"
            id={id}
            onClick={handleImgClick}
          />
        </div>
      </div>
    </div>
  );
};

export default FavouritesCard;
