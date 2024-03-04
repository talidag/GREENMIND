import Header from "./components/organisms/Header/Header";
import Contacts from "./components/pages/Contacts";
import Filters from "./components/pages/Filters";
import Home from "./components/pages/Home";
import Missing from "./components/pages/Missing";
import Products from "./components/pages/Products";
import Profile from "./components/pages/Profile";
import ShoppingCart from "./components/pages/ShoppingCart";
import "./index.scss";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/products/:search" element={<Products />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/order" element={<ShoppingCart />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/filters" element={<Filters />} />
        <Route path="*" element={<Missing />}></Route>
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
