import React from "react";
import "./CartHeader.css";
const CartHeader = ({ heading, desc, total }) => {
  return (
    <div className="cart_header">
      <div className="section_header_left">
        <div className="section_hl_heading">{heading}</div>
        <div className="section_hl_desc">{desc}</div>
      </div>
      <div className="section_header_right">
        <span className="cart_total">Total: {total}</span>
      </div>
    </div>
  );
};

export default CartHeader;
