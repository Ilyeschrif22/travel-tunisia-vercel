import "./styles.css";

const Hero = () => {
    return (
        <div className="hero__section">
            <div className="hero-text">
                Discover Authentic Tunisian Tours & Cultural Experiences
            </div>
            <p className="hero-subtext">
                Experience the beauty of Tunisia with expertly curated tours showcasing ancient ruins, stunning beaches, and vibrant culture
            </p>
            <div className="get-started-button">
                GET STARTED NOW
                <span className="arrow-circle-button">
                    <img src="/arrow_outward.svg" alt="arrow" />
                </span>
            </div>
        </div>
    )
}

export default Hero;