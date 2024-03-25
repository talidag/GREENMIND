import { useContext } from "react";
import SmallTitle from "../../atoms/SmallTitle";
import ShowProducts from "../ShowProducts";
import DataContext from "../../../context/DataContext";
import { useNavigate } from "react-router";

const AddedToCard = () => {
  const { shoppingCart } = useContext(DataContext);

  const navigate = useNavigate();

  const entriesArray = Object.entries(shoppingCart);
  const cartTitle = "Just added to your cart";

  return (
    <div className="best__popup">
      <SmallTitle title={cartTitle.toUpperCase()} />
      <div className="best__popup__products">
        {entriesArray.map((product, index) => {
          if (product[1] === 0) return;
          return <ShowProducts key={index} id={product[0]} qty={product[1]} />;
        })}
      </div>
      <button onClick={() => navigate("/order")}>VIEW CART</button>
    </div>
  );
};

export default AddedToCard;
