import React, { useState } from "react";

import SlidePanel from "../slidepanel/slidepanel"


import "./styles.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        <img src="/travel-tunisia-logo.png" alt="Travel Tunisia" className="logo-img" />

        <div className="header__right">
          <nav className="nav header__nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#destinations" className="nav__link">
                  Destinations
                  <img
                    src="/stat_minus.png"
                    alt="dropdown icon"
                    style={{ width: '16px', height: '16px', verticalAlign: 'middle', marginLeft: '5px' }}
                  />
                </a>
              </li>

              <li className="nav__item">
                <a href="#about" className="nav__link">About Us</a>
              </li>

              <li className="nav__item">
                <a href="#services" className="nav__link">Services</a>
              </li>
            </ul>
          </nav>

          <div className="header__cta">
            <div className="contact-us-button">
              CONTACT US
              <span className="arrow-circle">
                <img src="/arrow_outward.svg" alt="arrow" />
              </span>
            </div>
          </div>
        </div>

        <div className={`header__menu-toggle ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <SlidePanel isMenuOpen={isMenuOpen} closeMenu={closeMenu} />

    </header>
  );
};

export default Header;