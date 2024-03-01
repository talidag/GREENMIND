interface SpecifcationCardProps {
  number: number;
  type: string;
}

const SpecificationCard = ({ number, type }: SpecifcationCardProps) => {
  return (
    <div className="specification__card">
      <h3>{number}+</h3>
      <p>{type}</p>
    </div>
  );
};

export default SpecificationCard;
