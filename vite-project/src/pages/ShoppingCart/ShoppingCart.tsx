import "./ShoppingCart.scss";
import { useContext } from "react";
import DataContext from "../../context/DataContext";
import ShoppingCartItem from "../../components/molecules/ShoppingCartItem";
import CartSummary from "../../components/molecules/CartSummary";
import cart from "./../../assets/cart.svg";
import { useNavigate } from "react-router";

const ShoppingCart = () => {
  const { shoppingCart } = useContext(DataContext);

  const navigate = useNavigate();

  const shoppingCartItems = Object.entries(shoppingCart);
  const objectValues: number[] = Object.values(shoppingCart);

  let totalItemsInCart = 0;

  if (objectValues) {
    totalItemsInCart = objectValues.reduce(
      (partialSum, quantity) => partialSum + quantity,
      0
    );
  }

  const anyValues = (Object.values(shoppingCart) as number[]).reduce(
    (acc, total) => acc + total,
    0
  );

  const handleSpanClick = () => {
    navigate("/products");
  };

  return (
    <div className="shopping">
      {anyValues < 1 ? (
        <div className="shopping__empty">
          <img src={cart} alt="Empty shopping cart" />
          <div className="shopping__empty__text">
            <h3>Your cart is empty</h3>
            <p>
              Browse our selection of products and add items to your cart to
              <span onClick={handleSpanClick}> start shopping!</span>
            </p>
          </div>
        </div>
      ) : (
        <>
          <div className="cart">
            <div className="cart__top">
              <h3>Shopping Cart</h3>
              <p>{totalItemsInCart} items</p>
            </div>
            <div className="cart__header">
              <p>Product Details</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            {shoppingCartItems.map((item, index) => (
              <ShoppingCartItem
                item={[item[0] as string, item[1] as number]}
                key={index}
              />
            ))}
          </div>
          <CartSummary />
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
