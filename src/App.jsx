import "./App.css";
import AboutYou from "./components/AboutYou";
import Explore from "./components/Explore";
import WhyUs from "./components/WhyUs";
import Hero from "./components/homepage/Hero";

function App() {
  return (
    <>
    <Hero/>
    <AboutYou/>
      <WhyUs />
      <Explore />
    </>
  );
}

export default App;
