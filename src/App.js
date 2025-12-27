import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Location from "./components/location/location";
import Contact from "./components/contact/contact";

import "./App.css";
import WhyChooseUs from "./components/whychooseus/whychooseus";

function App() {
  return (
    <div className="page">
      <div className="hero-wrapper">
        <Header />
        <Hero />
      </div>

       <Location /> 
      <WhyChooseUs />
      <Contact />
    </div>
  );
}

export default App;
