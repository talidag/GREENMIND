import SmallTitle from "../atoms/SmallTitle";
import Subtitle from "../atoms/Subtitle";

interface AboutUsCardProps {
  picture: string;
  alt: string;
  title: string;
  description: string;

  // [key: string]: string;
  // Not working because of key index
}

const AboutUsCard = ({
  picture,
  alt,
  title,
  description,
}: AboutUsCardProps) => {
  return (
    <div className="about__card">
      <div className="about__card__img-wrapper">
        <img src={picture} alt={alt} />
      </div>
      <SmallTitle title={title} />
      <Subtitle title={description} />
    </div>
  );
};

export default AboutUsCard;
