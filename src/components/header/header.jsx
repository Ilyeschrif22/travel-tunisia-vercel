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
  const [langOpenDesktop, setLangOpenDesktop] = useState(false);
  const [langOpenMobile, setLangOpenMobile] = useState(false);

  const dropdownRef = useRef(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const currentLang =
    languages.find((l) => l.code === i18n.language) || languages[0];

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setLangOpenDesktop(false);
    setLangOpenMobile(false);
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setLangOpenDesktop(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
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
              <li className="nav__item destinations-dropdown">
                <a href="#destinations" className="nav__link">
                  {t("destinations")}
                  <img src="/stat_minus.png" alt="" className="nav__arrow" />
                </a>
                <div className="dropdown-multi-menu">
                  <ul className="dropdown-menu main-menu">
                    <li><a href="#home">{t("home") || "Home Page"}</a></li>
                    <li><a href="#about">{t("about") || "About"}</a></li>
                    <li><a href="#service">{t("service") || "Service"}</a></li>
                    <li><a href="#service-details">{t("service_details") || "Service Details"}</a></li>
                    <li><a href="#reviews">{t("reviews") || "Reviews"}</a></li>

                  </ul>
                  <ul className="dropdown-menu side-menu">
                    <li><a href="#blog">{t("blog") || "Blog"}</a></li>
                    <li><a href="#blog-details">{t("blog_details") || "Blog Details"}</a></li>
                    <li><a href="#contact">{t("contact_menu") || "Contact"}</a></li>
                  </ul>
                </div>
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
              onClick={() => setLangOpenDesktop(!langOpenDesktop)}
            >
              {currentLang.label}
              <img
                src="/stat_minus.png"
                alt=""
                className={`nav__arrow ${langOpenDesktop ? "open" : ""}`}
              />
            </div>

            {langOpenDesktop && (
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

        <div className="header__mobile-right">
          <div className="lang-dropdown lang-dropdown--mobile">
            <div
              className="lang-selected"
              onClick={() => setLangOpenMobile(!langOpenMobile)}
            >
              {currentLang.label}
              <img
                src="/stat_minus.png"
                alt=""
                className={`nav__arrow ${langOpenMobile ? "open" : ""}`}
              />
            </div>

            {langOpenMobile && (
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

          <div
            className={`header__menu-toggle ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
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
