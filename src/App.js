import React, { useEffect, useState } from "react"
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from './screens/home/Home';
import Products from './screens/products/Products';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Product from './screens/product/Product';
import Cart from "./screens/cart/Cart";
import Checkout from "./screens/checkout/Checkout";
function App() {
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) !== null
      ? JSON.parse(localStorage.getItem("cart"))
      : []
  );
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart))
  }, [cart])
  return (
    <div className="App">
      <Router>
        <Navbar cart={cart} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<Product setCart={setCart} cart={cart} />} />
          <Route path="/cart" element={<Cart setCart={setCart} cart={cart} />} />
          <Route path="/checkout" element={<Checkout setCart={setCart} />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
