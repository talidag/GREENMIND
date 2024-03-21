import Footer from "./components/organisms/Footer/Footer";
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
import { DataProvider } from "./context/DataContext";
import AllProducts from "./components/pages/AllProducts";
import SuccessPayment from "./components/pages/SuccessPayment";

function App() {
  return (
    <div className="app">
      <DataProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:search" element={<Products />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/order" element={<ShoppingCart />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/filters" element={<Filters />} />
          <Route path="/success" element={<SuccessPayment />} />
          <Route path="*" element={<Missing />} />
        </Routes>
        <Footer />
      </DataProvider>
    </div>
  );
}

export default App;
