import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import reloFoodsLogo from "../../assets/Logo/ReloFoods-logo.jpg";

function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img
          src={reloFoodsLogo}
          alt="ReloFoods-logo"
          className="header__logo-image"
        />
      </Link>
      <nav className="header__nav">
        <ul className="header__nav-list">
          <li className="header__nav-item">
            <NavLink to="/" className="header__nav-link">
              Home
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/contact" className="header__nav-link">
              Contact
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/blog" className="header__nav-link">
              Blog
            </NavLink>
          </li>
          <li className="header__nav-item">
            <NavLink to="/about" className="header__nav-link">
              About
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
