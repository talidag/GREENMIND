import { useContext } from "react";
import DataContext from "../../context/DataContext";

interface ShowProductsProps {
  id: string;
  qty: number | unknown;
}

const ShowProducts = ({ id, qty }: ShowProductsProps) => {
  const { plants } = useContext(DataContext);

  const plantToDisplay = plants.find((plant) => plant.id === id);

  return (
    <div className="best__popup__product">
      {plantToDisplay && (
        <>
          <div className="best__popup__wrapper">
            <p>{plantToDisplay.name}</p>
            <span>x {qty as number}</span>
          </div>

          <span>₱ {plantToDisplay.price * (qty as number)}</span>
        </>
      )}
    </div>
  );
};

export default ShowProducts;
