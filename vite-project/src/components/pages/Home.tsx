import Hero from "../organisms/Hero/Hero";
import BestSelling from "../organisms/BestSelling/BestSelling";
import AboutUs from "../organisms/AboutUs/AboutUs";
import Categories from "../organisms/Categories/Categories";
import Testimonials from "../organisms/Testimonials/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <BestSelling />
      <AboutUs />
      <Categories />
      <Testimonials />
    </>
  );
};

export default Home;
