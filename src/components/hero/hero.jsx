import { useTranslation } from "react-i18next";
import "./styles.css";

const Hero = () => {
    const { t } = useTranslation();

    return (
        <div className="hero__section">
            <div className="hero-text">
                {t("hero_title")}
            </div>

            <p className="hero-subtext">
                {t("hero_subtitle")}
            </p>

            <div className="get-started-button">
                {t("hero_cta")}
                <span className="arrow-circle-button">
                    <img src="/arrow_outward.svg" alt="arrow" />
                </span>
            </div>
        </div>
    );
};

export default Hero;
