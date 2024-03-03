import AboutUs from "./components/organisms/AboutUs/AboutUs";
import BestSelling from "./components/organisms/BestSelling/BestSelling";
import Header from "./components/organisms/Header/Header";
import Hero from "./components/organisms/Hero/Hero";
import "./index.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <BestSelling />
      <AboutUs />
    </div>
  );
}

export default App;
