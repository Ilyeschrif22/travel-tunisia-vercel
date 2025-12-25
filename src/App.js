import Header from "./components/header/header";
import Hero from "./components/hero/hero";
import Location from "./components/location/location";

import "./App.css";

function App() {
  return (
    <div className="page">
      <div className="hero-wrapper">
        <Header />
        <Hero />
      </div>

      <Location />
    </div>
  );
}

export default App;
