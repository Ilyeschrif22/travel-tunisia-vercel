import "./styles.css";

const Footer = () => {
  return (
    <footer className="footer-wrapper">
      {/* MAIN FOOTER */}
      <div className="footer">
        <div className="left-footer-container">
          <img
            src="/travel-tunisia-logo.png"
            alt="Travel Tunisia Logo"
            className="logo-footer"
          />

          <p className="footer-title">
            Discover the Best Destinations in Tunisia
          </p>

          <p className="footer-text">
            Book your dream trip to Tunisia today and enjoy an unforgettable
            journey filled with culture, adventure, and relaxation.
          </p>
        </div>

        <div className="center-footer-container">
          <h4 className="footer-heading">Most Visited Destinations</h4>

          <ul className="footer-destinations">
            <li><a href="/destinations/tunisian-beaches">Tunisian Beaches</a></li>
            <li><a href="/destinations/bab-bhar">Bab Bhar</a></li>
            <li><a href="/destinations/el-jem">El Jem Amphitheatre</a></li>
            <li><a href="/destinations/sahara-desert">Sahara Desert</a></li>
            <li><a href="/destinations/sidi-bou-said">Sidi Bou Said</a></li>
            <li><a href="/destinations/medina-souks">Medina Souks</a></li>
            <li><a href="/destinations/tunisia-hotels">Hotels in Tunisia</a></li>
            <li><a href="/destinations/traditional-cafes">Traditional Cafés</a></li>
          </ul>
        </div>

        <div className="right-footer-container">
          <h4 className="footer-heading">Contact Us</h4>

          <ul className="footer-contact">
            <li>123 Cool Air Blvd, New York, NY 10001</li>
            <li>info@travel-tunisia.com</li>
            <li>+1 (555) 123-4567</li>
          </ul>

          <div className="footer-socials">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">Instagram</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* UNDER FOOTER */}
      <div className="footer-bottom">
        <img
          src="/travel-tunisia-logo.png"
          alt="Travel Tunisia Small Logo"
          className="footer-bottom-logo"
        />

        <p className="footer-bottom-text">
          © {new Date().getFullYear()} Travel Tunisia. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
