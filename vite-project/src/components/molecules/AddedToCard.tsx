import { useContext } from "react";
import SmallTitle from "../atoms/SmallTitle";
import ShowProducts from "./ShowProducts";
import DataContext from "../../context/DataContext";

const AddedToCard = () => {
  const { shoppingCart } = useContext(DataContext);

  const entriesArray = Object.entries(shoppingCart);
  const cartTitle = "Just added to your cart";

  return (
    <div className="best__popup">
      <SmallTitle title={cartTitle.toUpperCase()} />
      <div className="best__popup__products">
        {entriesArray.map((product, index) => (
          <ShowProducts key={index} id={product[0]} qty={product[1]} />
        ))}
      </div>
      <button>VIEW CART</button>
    </div>
  );
};

export default AddedToCard;
