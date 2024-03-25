import AboutUs from "../components/organisms/Home/AboutUs/AboutUs";
import BestSelling from "../components/organisms/Home/BestSelling/BestSelling";
import Categories from "../components/organisms/Home/Categories/Categories";
import Hero from "../components/organisms/Home/Hero/Hero";
import Testimonials from "../components/organisms/Home/Testimonials/Testimonials";

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
