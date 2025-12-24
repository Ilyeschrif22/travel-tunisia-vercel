import "./styles.css";

const SlidePanel = ({ isMenuOpen, closeMenu }) => {
    return (
        <div
            id="slidePanel"
            className={`slide-panel ${isMenuOpen ? "active" : ""}`}
        >
            <span className="closeBtn" onClick={closeMenu}>
                &times;
            </span>

            <ul className="slidePanel-list">
                <div className="nav-list-item">
                    <li>
                        <a href="#destinations" onClick={closeMenu}>
                            Destinations
                        </a>
                    </li>
                    <img src="/add-icon.svg" className="nav-list-icon" alt="icon" />
                </div>

                <div className="nav-list-item">
                    <li>
                        <a href="#about" onClick={closeMenu}>
                            About Us
                        </a>
                    </li>
                    <img src="/add-icon.svg" className="nav-list-icon" alt="icon" />
                </div>

                <div className="nav-list-item">
                    <li>
                        <a href="#services" onClick={closeMenu}>
                            Services
                        </a>
                    </li>
                    <img src="/add-icon.svg" className="nav-list-icon" alt="icon" />
                </div>

                <div className="nav-list-item">
                    <li>
                        <a href="#contact" onClick={closeMenu}>
                            Contact
                        </a>
                    </li>
                    <img src="/add-icon.svg" className="nav-list-icon" alt="icon" />
                </div>
            </ul>

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
                        <a className="contact-phone" href="tel:+21612345678">+216 12 345 678</a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SlidePanel;
