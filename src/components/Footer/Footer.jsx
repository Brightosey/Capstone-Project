import "./Footer.scss";
import { Link } from "react-router-dom";
import LinkedInIcon from "../../assets/Icons/X_twitter.svg";
import InstagramIcon from "../../assets/Icons/Instagram.svg";
import FacebookIcon from "../../assets/Icons/Facebook.svg";
import reloFoodsLogo from "../../assets/Logo/ReloFoods-logo.svg";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Logo Section */}
        <div className="footer__logo">
          <Link to="/">
            <img
              src={reloFoodsLogo}
              alt="ReloFoods-logo"
              className="footer__logo-image"
            />
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="footer__nav">
          <h2 className="footer__nav-title">Menu</h2>
          <ul className="footer__nav-list">
            <li className="footer__nav-item">
              <Link to="/" className="footer__nav-link">
                Home
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/about" className="footer__nav-link">
                About Us
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/contact" className="footer__nav-link">
                Contact
              </Link>
            </li>
            <li className="footer__nav-item">
              <Link to="/blog" className="footer__nav-link">
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        {/* Social Media Links */}
        <div className="footer__social">
          <h2 className="footer__social-title">Follow Us</h2>
          <div className="footer__social-icon">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img src={FacebookIcon} alt="Facebook" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img src={InstagramIcon} alt="Instagram" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="footer__social-link"
            >
              <img src={LinkedInIcon} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer__bottom">
        <p className="footer__copyright">
          &copy; {new Date().getFullYear()} ReloFoods. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
