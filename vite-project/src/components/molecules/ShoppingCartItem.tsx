import { FC, useContext } from "react";
import DataContext from "../../context/DataContext";

interface ShoppingCartItemProps extends Array<string | number> {}

const ShoppingCartItem: FC<{ item: ShoppingCartItemProps }> = ({ item }) => {
  const { plants, setShoppingCart } = useContext(DataContext);

  const plant = plants.find((pl) => pl.id === item[0]);

  const handleAddToCart = (item: ShoppingCartItemProps) => {
    setShoppingCart((prevCard: Record<string, number>) => ({
      ...prevCard,
      [item[0]]: (prevCard[item[0]] || 0) + 1,
    }));
  };

  const handleRemoveFromCart = (item: ShoppingCartItemProps) => {
    setShoppingCart((prevCard: Record<string, number>) => ({
      ...prevCard,
      [item[0]]: (prevCard[item[0]] || 0) - 1,
    }));
  };

  return (
    <div className="cart__item">
      {(item[1] as number) > 0 && (
        <>
          <div className="cart__item__product">
            <img src={plant?.img} alt={plant?.name} />
            <h4>{plant?.name}</h4>
          </div>
          <p>₱ {plant?.price}</p>

          <div className="cart__item__quantity">
            <button onClick={() => handleRemoveFromCart(item)}>-</button>

            <p>{item[1]}</p>
            <button onClick={() => handleAddToCart(item)}>+</button>
          </div>
          <div className="cart__item__price">
            <p>
              ₱{" "}
              {plant && plant.price && typeof item[1] === "number"
                ? plant.price * item[1]
                : 0}
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCartItem;
