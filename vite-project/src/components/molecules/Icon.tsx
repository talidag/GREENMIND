import { Link, useLocation } from "react-router-dom";

interface IconProps {
  img: string;
  alt: string;
  link: string;
}

const Icon = ({ img, alt, link }: IconProps) => {
  const location = useLocation();
  console.log(location.pathname);
  console.log(link);
  return (
    <Link to={link}>
      <img
        src={img}
        alt={alt}
        className={`/${link}` === location.pathname ? "selected" : ""}
      />
    </Link>
  );
};

export default Icon;
