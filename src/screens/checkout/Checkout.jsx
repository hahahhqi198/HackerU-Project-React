import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Checkout.css";
const Checkout = ({ setCart }) => {
  const [data, setData] = useState({
    name: "",
    email: "",
    address: "",
    phone: "",
  });
  const [orderPlaced, setOrderPlaced] = useState();
  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };
  const handleCheckout = () => {
    localStorage.clear();
    setCart([]);
    setOrderPlaced(true);
  };
  return (
    <div className="checkout_screen">
      {!orderPlaced && (
        <div className="checkout_form">
          <h1 className="checkout_form_heading">Order Now!</h1>
          <input
            type="text"
            className="checkout_form_field"
            onChange={handleChange}
            name="name"
            placeholder="Enter Your Name"
            value={data.value}
            autoComplete="off"
          />
          <input
            type="email"
            className="checkout_form_field"
            onChange={handleChange}
            name="email"
            placeholder="Enter Your Email"
            value={data.value}
            autoComplete="off"
          />
          <input
            type="tel"
            className="checkout_form_field"
            onChange={handleChange}
            name="phone"
            placeholder="Enter Your Phone Number"
            value={data.value}
            autoComplete="off"
          />
          <textarea
            className="checkout_form_field checkout_form_addressfield"
            onChange={handleChange}
            name="phone"
            placeholder="Enter Your Phone Address"
            value={data.value}
          ></textarea>
          <button className="checkout_screen_chbtn" onClick={handleCheckout}>
            Checkout
          </button>
        </div>
      )}
      {orderPlaced && (
        <div className="checkout_form_orderplaced">
          Your order will arrive soon!
        </div>
      )}
    </div>
  );
};

export default Checkout;
