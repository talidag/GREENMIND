import NavbarEl from "../atoms/NavbarEl";

const Navbar = () => {
  const navLinks = ["Home", "Products", "Contacts"];
  return (
    <nav>
      <ul className="navbar__list">
        {navLinks.map((link, index) => (
          <NavbarEl key={index} element={link} />
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
