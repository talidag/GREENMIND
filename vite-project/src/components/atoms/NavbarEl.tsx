interface NavbarElProps {
  element: string;
}

const NavbarEl = ({ element }: NavbarElProps) => {
  return (
    <li className="navbar__element">
      <a href="">{element}</a>
    </li>
  );
};

export default NavbarEl;
