import SmallTitle from "../atoms/SmallTitle";
import quotes from "../../assets/quotes.svg";
import star from "../../assets/star.svg";

interface TestimonialsCardProps {
  text: string;
  name: string;
  ocupation: string;
  picture: string;
  rating: number;
}

const TestimonialsCard = ({
  text,
  name,
  ocupation,
  picture,
  rating,
}: TestimonialsCardProps) => {
  return (
    <div className="testimonials__card">
      <div className="testimonials__card__top">
        <p>{text}</p>
      </div>
      <div className="testimonials__card__bottom">
        <div className="testimonials__card__left">
          <div className="testimonials__card__quote">
            <img
              src={picture}
              alt={`${name} picture`}
              className="testimonials__card__person"
            />
            <img
              src={quotes}
              alt="quotation mark"
              className="testimonials__card__quotes"
            />
          </div>
          <div className="testimonials__card__name">
            <SmallTitle title={name} />
            <p>{ocupation}</p>
          </div>
        </div>
        <div className="testimonials__card__rating">
          <img src={star} alt="star icon" />
          <p>{rating.toFixed(1).toString()} </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsCard;
