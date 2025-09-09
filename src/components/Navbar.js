import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Logo */}
        <div className="navbar-logo">
          <Link to="/">LUMINU</Link>
        </div>

        {/* Mobile menu button */}
        <div className="menu-icon" onClick={toggleMenu}>
          <span className={isMenuOpen ? 'bar bar1' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar bar2' : 'bar'}></span>
          <span className={isMenuOpen ? 'bar bar3' : 'bar'}></span>
        </div>

        {/* Navigation Menu */}
        <ul className={isMenuOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <a href="#about" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              About
            </a>
          </li>
          <li className="nav-item">
            <a href="#solutions" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              Solutions
            </a>
          </li>
          <li className="nav-item">
            <a href="#why-choose-us" className="nav-link" onClick={() => setIsMenuOpen(false)}>
              choose us
            </a>
          </li>
        </ul>

        {/* Contact Button */}
        <div className="navbar-cta">
          <Link to="/contact" className="cta-button">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
