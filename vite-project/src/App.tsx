import Header from "./components/organisms/Header/Header";
<<<<<<< HEAD
import Hero from "./components/organisms/Hero/Hero";
import Testimonials from "./components/organisms/Testimonials/Testimonials";
=======
import Contacts from "./components/pages/Contacts";
import Filters from "./components/pages/Filters";
import Home from "./components/pages/Home";
import Missing from "./components/pages/Missing";
import Products from "./components/pages/Products";
import Profile from "./components/pages/Profile";
import ShoppingCart from "./components/pages/ShoppingCart";
>>>>>>> 95d452c... feat: Added react-router and links and small improvments to the Header
import "./index.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
<<<<<<< HEAD
      <Hero />
      <BestSelling />
      <AboutUs />
      <Categories />
      <Testimonials />
=======
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/order" element={<ShoppingCart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/filters" element={<Filters />} />
        <Route path="*" element={<Missing />}></Route>
      </Routes>
      {/* <Footer /> */}
>>>>>>> 95d452c... feat: Added react-router and links and small improvments to the Header
    </div>
  );
}

export default App;
