import React from "react";
import "./ProductCard.css";
const ProductCard = ({ title, desc, price, id, image, btnClick, discount }) => {
  return (
    <div className="product_card">
      {discount && <div className="product_discount_badge">{discount}</div>}
      <div className="product_card_img">
        <img src={image} alt="" />
      </div>
      <div className="product_card_title">{title}</div>
      <div className="product_card_desc">
        {desc.substr(0, 60)}
        {desc.length > 60 && "..."}
      </div>
      <div className="product_card_price">${price}</div>
      <div className="product_card_btn" onClick={btnClick}>
        View Details
      </div>
    </div>
  );
};

export default ProductCard;
