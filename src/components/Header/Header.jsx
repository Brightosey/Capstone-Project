import "./Header.scss";
import { NavLink, Link } from "react-router-dom";
import reloFoodsLogo from "../../assets/Logo/ReloFoods-logo.svg";
import { Menu, X } from "lucide-react";
import { useState } from "react";

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
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
        <button className="header__button" onClick={toggleMenu}>
          {isOpen ? (
            <X className="header__icon" />
          ) : (
            <Menu className="header__icon" />
          )}
        </button>

        <nav className={`header__nav ${isOpen ? "header__nav--open" : ""}`}>
          <ul className="header__nav-list">
            {["/", "/about", "/blog", "/contact",].map((route, i) => (
              <li key={i} onClick={() => setIsOpen(false)}>
                <NavLink to={route} className="header__nav-item">{route === "/" ? "HOME" : route.replace("/", "").toUpperCase()}</NavLink>
              </li>
            ))}
            {/* <li>
              <NavLink to="/" className="header__nav-item" onClick={() => setIsOpen(false)}>Home</NavLink>
            </li>
            <li>
              <NavLink to="/about" className="header__nav-item" onClick={() => setIsOpen(false)}>About</NavLink>
            </li>
            <li>
              <NavLink to="/Blog" className="header__nav-item" onClick={() => setIsOpen(false)}>Blog</NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="header__nav-item" onClick={() => setIsOpen(false)}>Contact</NavLink>
            </li> */}
          </ul>
        </nav>
      </div>
      {isOpen && <div className="header__overlay"></div>}
    </header>
  );
}

export default Header;
