import Footer from "./components/organisms/Footer/Footer";
import Header from "./components/organisms/Header/Header";
import Contacts from "./pages/Contacts";
import Filters from "./pages/Filters";
import Home from "./pages/Home";
import Missing from "./pages/Missing/Missing";
import Products from "./pages/Products";
import Profile from "./pages/Profile/Profile";
import ShoppingCart from "./pages/ShoppingCart/ShoppingCart";
import "./index.scss";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./context/DataContext";
import AllProducts from "./pages/AllProducts";
import SuccessPayment from "./pages/SuccessPayment/SuccessPayment";
import { Auth0Provider } from "@auth0/auth0-react";

const domain = import.meta.env.VITE_AUTH0_DOMAIN;
const clientId = import.meta.env.VITE_AUTH0_CLIENT_ID;

function App() {
  return (
    <div className="app">
      <Auth0Provider
        domain={domain}
        clientId={clientId}
        redirectUri={"http://localhost:5173/profile"}
      >
        <DataProvider>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/order" element={<ShoppingCart />} />

            <Route path="/products" element={<AllProducts />} />
            <Route path="/products/:search" element={<Products />} />
            <Route path="/contacts" element={<Contacts />} />

            <Route path="/profile" element={<Profile />} />
            <Route path="/filters" element={<Filters />} />
            <Route path="/success" element={<SuccessPayment />} />
            <Route path="*" element={<Missing />} />
          </Routes>
          <Footer />
        </DataProvider>
      </Auth0Provider>
    </div>
  );
}

export default App;
