interface IconProps {
  img: string;
  alt: string;
  link: string;
}

const Icon = ({ img, alt, link }: IconProps) => {
  return (
    <a href={link}>
      <img src={img} alt={alt} />
    </a>
  );
};

export default Icon;
