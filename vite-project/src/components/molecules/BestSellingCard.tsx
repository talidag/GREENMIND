interface BestSellingCardProps {
  img: string;
  text: string;
  price: number;
}

const BestSellingCard = ({ img, text, price }: BestSellingCardProps) => {
  const formatedPrice = price.toLocaleString("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return (
    <div className="best__card">
      <img src={img} alt="A plant image" />
      <h5>{text}</h5>
      <p>₱ {formatedPrice}</p>
    </div>
  );
};

export default BestSellingCard;
