import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import SlidePanel from "../slidepanel/slidepanel";
import "./styles.css";

const languages = [
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "ar", label: "AR" },
];

const Header = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const currentLang = languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLangOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="header">
      <div className="header__container">
        <img
          src="/travel-tunisia-logo.png"
          alt="Travel Tunisia"
          className="logo-img"
        />

        <div className="header__right">
          <nav className="nav header__nav">
            <ul className="nav__list">
              <li className="nav__item">
                <a href="#destinations" className="nav__link">
                  {t("destinations")}
                  <img src="/stat_minus.png" alt="" className="nav__arrow" />
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">{t("about_us")}</a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">{t("services")}</a>
              </li>
            </ul>
          </nav>

          <div className="lang-dropdown" ref={dropdownRef}>
            <div
              className="lang-selected"
              onClick={() => setLangOpen(!langOpen)}
            >
              {currentLang.label}
              <img
                src="/stat_minus.png"
                alt=""
                className={`nav__arrow ${langOpen ? "open" : ""}`}
              />
            </div>

            {langOpen && (
              <ul className="lang-options">
                {languages.map((lang) => (
                  <li
                    key={lang.code}
                    className="lang-option"
                    onClick={() => changeLanguage(lang.code)}
                  >
                    {lang.label}
                  </li>
                ))}
              </ul>
            )}
          </div>

          <div className="header__cta">
            <div className="contact-us-button">
              {t("contact_us")}
              <span className="arrow-circle">
                <img src="/arrow_outward.svg" alt="arrow" />
              </span>
            </div>
          </div>
        </div>

        <div
          className={`header__menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <SlidePanel
        isMenuOpen={isMenuOpen}
        closeMenu={closeMenu}
        currentLang={currentLang}
        changeLanguage={changeLanguage}
      />
    </header>
  );
};

export default Header;
