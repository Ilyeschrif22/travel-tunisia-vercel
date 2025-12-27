import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Location from "./components/location/location";
import Contact from "./components/contact/contact";

import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="hero-wrapper">
        <Header />
        <Hero />
      </div>

      <Location /> 
      <Contact />
    </div>
  );
}

export default App;
