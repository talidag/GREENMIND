import Subtitle from "../atoms/Subtitle";

interface ShowProductsProps {
  name: string;
  price: number;
}

const ShowProducts = ({ name, price }: ShowProductsProps) => {
  // Bring here list of products with prices with context
  // TO DO!

  // Add if there's one item multiple times Qty: 2

  return (
    <div className="best__popup__product">
      <p>{name}</p>
      <span>₱ {price}</span>
    </div>
  );
};

export default ShowProducts;
