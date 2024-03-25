interface ImageProps {
  img: string;
  alt: string;
  className: string;
}

const Image = ({ img, alt, className }: ImageProps) => {
  return <img src={img} alt={alt} className={className} />;
};

export default Image;
