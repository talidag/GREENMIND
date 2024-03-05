import { useContext } from "react";
import SmallTitle from "../atoms/SmallTitle";
import ShowProducts from "./ShowProducts";
import DataContext from "../../context/DataContext";

const AddedToCard = () => {
  // TO DO: If we add more than 3 items, it overflows!
  const { shoppingCart } = useContext(DataContext);

  console.log(shoppingCart);

  const cartTitle = "Just added to your cart";
  return (
    <div className="best__popup">
      <SmallTitle title={cartTitle.toUpperCase()} />
      <div className="best__popup__products">
        {shoppingCart.map((product, index) => (
          <ShowProducts key={index} {...product} />
        ))}
      </div>
      <button>VIEW CART</button>
    </div>
  );
};

export default AddedToCard;
