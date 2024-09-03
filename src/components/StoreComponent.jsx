import React, { useState } from "react";
import "../App.css";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Cart from "./Cart/Cart";
import ContactInformation from "./ContactInformatiom/ContactInformation";
import ShipmentInformation from "./ShipmentInformation/ ShipmentInformation";
import Order from "./Order/Order";
import Header from "./Header";
import ProductList from "./ProductList";

const StoreComponent = () => {
  const [cart, setCart] = useState([]);
  const location = useLocation();

  const addToBasket = (product) => {
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  return (
    <div className="App">
      <Header cart={cart} />
      {location.pathname !== "/" && (
        <nav className="navbar">
          <ul>
            <li>
              <Link to="/store">Store</Link>
            </li>
            <li>
              <Link to="/cart">Cart</Link>
            </li>
            <li>
              <Link to="/contact_information">Contact information</Link>
            </li>
            <li>
              <Link to="/shipment_information">Shipment information</Link>
            </li>
            <li>
              <Link to="/order">Order</Link>
            </li>
          </ul>
        </nav>
      )}
      <Routes>
        <Route
          path="/store"
          element={<ProductList addToBasket={addToBasket} />}
        />
        <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>} />
        <Route path="/contact_information" element={<ContactInformation />} />
        <Route path="/shipment_information" element={<ShipmentInformation />} />
        <Route path="/order" element={<Order />} />
      </Routes>
    </div>
  );
};
export default StoreComponent;
