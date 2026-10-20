import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">MyWebsite</div>

      <div className="nav-links">
        <NavLink to="/">Главная</NavLink>
        <NavLink to="/about">О нас</NavLink>
        <NavLink to="/contact">Контакты</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;