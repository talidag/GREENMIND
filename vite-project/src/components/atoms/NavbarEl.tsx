import { Link, useLocation } from "react-router-dom";

interface NavbarElProps {
  element: string;
}

const NavbarEl = ({ element }: NavbarElProps) => {
  const location = useLocation(); // For styling purposes!
  const lowerCaseEl = element.toLowerCase();
  return (
    <li
      className={`navbar__element ${
        location.pathname === `/${lowerCaseEl}` ? "selected" : ""
      }`}
    >
      <Link to={`${lowerCaseEl}`}>{element}</Link>
    </li>
  );
};

export default NavbarEl;
