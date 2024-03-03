interface HeroImgProps {
  img: string;
  alt: string;
  className: string;
}

const HeroImg = ({ img, alt, className }: HeroImgProps) => {
  return <img src={img} alt={alt} className={className} />;
};

export default HeroImg;
