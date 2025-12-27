import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

const Contact = () => {
  const { t } = useTranslation();

  return (
    <div className="contact-container">
      <div className="contact-text-container">
        <p className="contact-text">
          {t("contact.discover")}<br />
          {t("contact.bookNow")}
        </p>

        <div className="contact-information">
          <p className="contact-adress-field">{t("contact.officeAddress")}: 123 Cool Air Blvd, New York, NY 10001</p>
          <p className="contact-email-field">{t("contact.email")}: info@travel-tunisia.com</p>
          <p className="contact-phone-field">{t("contact.phone")}: +1 (555) 123-4567</p>
        </div>

        <hr className="contact-divider" />

        <div className="social-media-icons">
          <img src="/facebook-svgrepo-com.svg" alt="Facebook" className="social-icon" />
          <img src="/twitter-154-svgrepo-com.svg" alt="Twitter" className="social-icon" />
          <img src="/instagram-svgrepo-com.svg" alt="Instagram" className="social-icon" />
          <img src="/whatsapp-svgrepo-com.svg" alt="WhatsApp" className="social-icon" />
        </div>
      </div>

      <div className="contact-form">
        <p className="form-title">{t("contact.getInTouch")}</p>

        <p className="form-name-label">{t("contact.fullName")}</p>
        <div className="form-name-container">
          <input type="text" placeholder={t("contact.placeholderFullName")} className="form-input-first-name" />
        </div>

        <p className="form-email-label">{t("contact.emailAddress")}</p>
        <div className="form-email-container">
          <input type="text" placeholder={t("contact.placeholderEmail")} className="form-input-email" />
        </div>

        <p className="form-phone-label">{t("contact.phoneNumber")}</p>
        <div className="form-phone-container">
          <input type="text" placeholder={t("contact.placeholderPhone")} className="form-input-phone" />
        </div>

        <div className="get-a-call-button">
          {t("contact.getACallBack")}
          <span className="arrow-circle-button-contact">
            <img src="/arrow_outward.svg" alt="arrow" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Contact;
