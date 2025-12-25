import React from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

const Location = () => {
    const { t } = useTranslation();

    const locations = [
        { src: "/1.jpg", titleKey: "Tunisia beaches" },
        { src: "/3.jpg", titleKey: "Bab bhar" },
        { src: "/2.jpg", titleKey: "El jem" },
        { src: "/4.jpg", titleKey: "Sahara Desert" },
        { src: "/5.jpg", titleKey: "Sidi Bou Said" },
        { src: "/6.jpg", titleKey: "Souk el medina" }
    ];

    const duplicatedLocations = [...locations, ...locations];

    return (
        <div className="locations-container">
            <p className="most-visited-locations">{t("mostVisited")}</p>
            <h1 className="locations-title">{t("chooseLocation")}</h1>

            <div className="location-images-carousel">
                <div className="image-track">
                    {duplicatedLocations.map((loc, i) => (
                        <div className="location-card" key={i}>
                            <img
                                className="location-image"
                                src={loc.src}
                                alt={t(`locations.${loc.titleKey}`)}
                            />
                            <div className="location-description">
                                <h3>{t(`locations.${loc.titleKey}`)}</h3>
                                <div className="location-arrow">
                                    <img src="/arrow_outward.svg" className="arrow" alt="arrow" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Location;
