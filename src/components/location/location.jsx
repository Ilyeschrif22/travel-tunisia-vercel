import React, { useRef } from "react";
import { useTranslation } from "react-i18next";
import "./styles.css";

const Location = () => {
    const { t } = useTranslation();
    const scrollRef = useRef(null);

    const locations = [
        { src: "/1.webp", titleKey: "Tunisia beaches" },
        { src: "/2.webp", titleKey: "Bab bhar" },
        { src: "/3.webp", titleKey: "El jem" },
        { src: "/1.webp", titleKey: "Sahara Desert" },
        { src: "/1.webp", titleKey: "Sidi Bou Said" },
        { src: "/1.webp", titleKey: "Souk el medina" },
        { src: "/1.webp", titleKey: "Tunisia hotels" },
        { src: "/1.webp", titleKey: "Tunisia traditional cafee" },
    ];

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 600;
            if (direction === "left") {
                scrollRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
            } else {
                scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
            }
        }
    };

    return (
        <div className="locations-container">
            <p className="most-visited-locations">{t("mostVisited")}</p>
            <h1 className="locations-title">{t("chooseLocation")}</h1>

            <div className="location-images-wrapper">
                <button className="scroll-btn left" onClick={() => scroll("left")} aria-label="Scroll Left">
  <img src="/arrow_outward.svg" alt="Scroll Left" className="scroll-icon left-icon" />
</button>
              


                <div className="location-images-carousel" ref={scrollRef}>
                    <div className="image-track">
                        {locations.map((loc, i) => (
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

                  <button className="scroll-btn right" onClick={() => scroll("right")} aria-label="Scroll Right">
  <img src="/arrow_outward.svg" alt="Scroll Right" className="scroll-icon right-icon" />
</button>
            </div>
        </div>
    );
};

export default Location;
