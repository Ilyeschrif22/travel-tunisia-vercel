import React, { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

const languages = [
    { code: "en", label: "EN" },
    { code: "fr", label: "FR" },
    { code: "ar", label: "AR" },
];

const SlidePanel = ({ isMenuOpen, closeMenu, currentLang, changeLanguage }) => {
    const { t } = useTranslation();
    const [langOpen, setLangOpen] = useState(false);
    const dropdownRef = useRef(null);

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
        <div id="slidePanel" className={`slide-panel ${isMenuOpen ? "active" : ""}`}>
            <span className="closeBtn" onClick={closeMenu}>
                &times;
            </span>

            <ul className="slidePanel-list">
                <div className="nav-list-item">
                    <li>
                        <a href="#destinations" onClick={closeMenu}>
                            {t("destinations")}
                        </a>
                    </li>
                    <img src="/add-icon.svg" className="nav-list-icon" alt="icon" />
                </div>

                <div className="nav-list-item">
                    <li>
                        <a href="#about" onClick={closeMenu}>
                            {t("about_us")}
                        </a>
                    </li>
                    <img src="/add-icon.svg" className="nav-list-icon" alt="icon" />
                </div>

                <div className="nav-list-item">
                    <li>
                        <a href="#services" onClick={closeMenu}>
                            {t("services")}
                        </a>
                    </li>
                    <img src="/add-icon.svg" className="nav-list-icon" alt="icon" />
                </div>

                <div className="nav-list-item">
                    <li>
                        <a href="#contact" onClick={closeMenu}>
                            {t("contact_us")}
                        </a>
                    </li>
                    <img src="/add-icon.svg" className="nav-list-icon" alt="icon" />
                </div>
            </ul>

            <div className="lang-dropdown" ref={dropdownRef} style={{ marginTop: "30px" }}>
                <div className="lang-selected" onClick={() => setLangOpen(!langOpen)}>
                    {currentLang.label}
                    <img
                        src="/stat_minus.png"
                        alt=""
                        className={`nav__arrow ${langOpen ? "open" : ""}`}
                        style={{ marginLeft: "8px" }}
                    />
                </div>

                {langOpen && (
                    <ul className="lang-options">
                        {languages.map((lang) => (
                            <li
                                key={lang.code}
                                className="lang-option"
                                onClick={() => {
                                    changeLanguage(lang.code);
                                    setLangOpen(false);
                                    closeMenu();
                                }}
                            >
                                {lang.label}
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            <div className="contact-info">
                <ul className="contact-list">
                    <li>
                        <p className="contact-email-label">Email:</p>
                        <a className="contact-email" href="mailto:info@traveltunisia.com">
                            info@traveltunisia.com
                        </a>
                    </li>
                    <li>
                        <p className="contact-phone-label">Phone:</p>
                        <a className="contact-phone" href="tel:+21612345678">
                            +216 12 345 678
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SlidePanel;
