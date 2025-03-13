import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import reloFoodsLogo from "../../assets/Logo/ReloFoods-logo.jpg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function clickButton() {
    setIsOpen((prev) => !prev);
  }

  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img
          src={reloFoodsLogo}
          alt="ReloFoods-logo"
          className="header__logo-image"
        />
      </Link>
      <div className="header__nav-container">
        <button className="header__button" onClick={clickButton}>
          {isOpen ? (
            <X className="header__icon" />
          ) : (
            <Menu className="header__icon" />
          )}
        </button>
        <nav className={`header__nav ${isOpen ? "header__nav--open" : "header__nav--close"}`}>
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <NavLink
                to="/"
                className="header__nav-link header__nav-link--home"
              >
                Home
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                to="/contact"
                className="header__nav-link header__nav-link--contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                to="/blog"
                className="header__nav-link header__nav-link--blog"
              >
                Blog
              </NavLink>
            </li>
            <li className="header__nav-item">
              <NavLink
                to="/about"
                className="header__nav-link header__nav-link--about"
              >
                About
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
