import AboutUs from "./components/organisms/AboutUs/AboutUs";
import BestSelling from "./components/organisms/BestSelling/BestSelling";
import Categories from "./components/organisms/Categories/Categories";
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
      <Categories />
    </div>
  );
}

export default App;
