import "./styles.css";

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <p className="why-choose-us-title">WHY CHOOSE US</p>
      <p className="why-choose-us-subtitle">Travel Tunisia: Your Partner for Unforgettable Memories</p>
      <div className="reasons-container">
        <div className="reason-card">
          <img src="/guides-svgrepo-com.svg" alt="Expert Guides" className="reason-icon" />
          <h3 className="reason-title">Authentic Local Guides</h3>
          <p className="reason-description">
            Explore Tunisia with friendly local guides who know the culture and hidden gems. While they may not be professional tour guides, their personal experience and passion will give you a genuine insight into Tunisian life.
          </p>
        </div>

        <img src="/card-image.jpg" alt="Sidi Bou Said" className="card-image" />

        <div className="reason-card">
          <img src="/money-receive-svgrepo-com.svg" alt="Affordable Prices" className="reason-icon" />
          <h3 className="reason-title">Affordable Prices for Every Traveler</h3>
          <p className="reason-description">
            We offer budget-friendly tours designed to make your Tunisian adventure accessible without compromising on quality. Enjoy great value and unforgettable experiences without breaking the bank.
          </p>
        </div>
      </div>



        <div className="reasons-container">
                    <img src="/card-image2.jpg" alt="Sidi Bou Said" className="card-image" />

        <div className="reason-card">
          <img src="/flexible.svg" alt="Expert Guides" className="reason-icon" />
          <h3 className="reason-title">Personalized and Flexible Itineraries</h3>
          <p className="reason-description">
Our tours adapt to your interests and pace, letting you discover Tunisia in a way that suits you best , whether it’s relaxing on the beach or exploring historic sites.</p>
        </div>


        <div className="reason-card">
          <img src="/experiences.svg" alt="Affordable Prices" className="reason-icon" />
          <h3 className="reason-title">Rich Cultural Experiences</h3>
          <p className="reason-description">
Dive into Tunisia’s vibrant culture, history, and natural beauty through unique activities and visits, guided by locals who share their stories and traditions with warmth and authenticity.          </p>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
