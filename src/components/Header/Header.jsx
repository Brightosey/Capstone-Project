import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import reloFoodsLogo from "../../assets/Logo/ReloFoods-logo.svg";
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
        <nav
          className={`header__nav ${
            isOpen ? "header__nav--open" : "header__nav--close"
          }`}
        >
          {isOpen && (
            <ul className="header__nav-list">
              <NavLink to="/" onClick={() => setIsOpen(false)}>
                <li className="header__nav-item"> Home</li>
              </NavLink>

              <NavLink to="/contact" onClick={() => setIsOpen(false)}>
                <li className="header__nav-item">Contact</li>
              </NavLink>

              <NavLink to="/post/:id" onClick={() => setIsOpen(false)}>
                <li className="header__nav-item">Blog</li>
              </NavLink>

              <NavLink to="/about" onClick={() => setIsOpen(false)}>
                <li className="header__nav-item">About</li>
              </NavLink>
            </ul>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
