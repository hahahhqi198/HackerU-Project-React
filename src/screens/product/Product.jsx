import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Data from "../../components/Data/Data";
import "./Product.css";
const Product = ({ cart, setCart }) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  useEffect(() => {
    let itm = Data.filter((item) => item.id == id && item);
    setProduct(itm[0]);
  }, []);

  const addToCart = () => {
    const isPresent = cart.find((item) => item.id === product.id);
    if (!isPresent) {
      setCart((preval) => {
        return [...preval, { ...product, qty: 1 }];
      });
    } else {
      setCart((preval) => {
        return preval.map((item) => {
          return item.id === product.id
            ? { ...item, qty: item.qty + 1, checked: false }
            : item;
        });
      });
    }
  };
  return (
    <div className="product_details">
      <div className="product_details_left">
        <div className="pdl_image_wrap">
          <img src={product.image} alt="" />
        </div>
      </div>
      <div className="product_details_right">
        <div className="product_details_rsubtitle">Products {`>>`} Details</div>
        <h1 className="product_details_righttitle">{product.title}</h1>
        <h2 className="product_details_rightprice">${product.price}</h2>
        <p className="product_details_rightdesc">{product.desc}</p>
        <button className="pdr_addtocart_btn" onClick={addToCart}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Product;
