import AboutUs from "./components/organisms/AboutUs/AboutUs";
import BestSelling from "./components/organisms/BestSelling/BestSelling";
import Categories from "./components/organisms/Categories/Categories";
import Footer from "./components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import Hero from "./components/organisms/Hero/Hero";
import Testimonials from "./components/organisms/Testimonials/Testimonials";
import "./index.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <BestSelling />
      <AboutUs />
      <Categories />
      <Testimonials />
    </div>
  );
}

export default App;
