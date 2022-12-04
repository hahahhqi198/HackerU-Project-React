import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";
import Logo from "../../assets/images/cart.png";
import Cart from "@mui/icons-material/ShoppingBasket";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ cart }) => {
  const [active, setActive] = useState("home");
  const [expand, setExpand] = useState(false);
  let navigate = useNavigate();
  const handleActive = (item) => {
    setActive(item);
    handleRedirect(`${item}`);
    setExpand(false);
  };
  const handleRedirect = (path) => {
    navigate(path);
  };
  useEffect(() => {
    setActive(window.location.pathname);
  }, []);
  return (
    <div className="navbar_wrapper">
      <div className="navbar_content">
        <div className="navbar_brand" onClick={() => navigate("/")}>
          <img src={Logo} alt="" />
        </div>
        <div className="navbar_items">
          <div className="navbar_item">
            <div className="navbar_item_text" onClick={() => handleActive("/")}>
              Home
            </div>
          </div>
          <div className="navbar_item">
            <div
              className="navbar_item_text"
              onClick={() => handleActive("/products")}
            >
              Products
            </div>
          </div>
          <div className="navbar_item">
            <div
              className="navbar_item_text"
              onClick={() => handleActive("/cart")}
            >
              <Cart sx={{ fontSize: "35px" }} />
              <span className="navbar_item_cartbadge">{cart.length}</span>
            </div>
          </div>
        </div>
        <div className="toggle_btn" onClick={() => setExpand(!expand)}>
          <MenuIcon />
        </div>
      </div>

      <div className={`mobile_bar ${expand && "expand"}`}>
        <div
          onClick={() => handleActive("/")}
          className={`mobile_bar_item ${
            active === "/" && "mobile_bar_activeitem"
          }`}
        >
          Home
        </div>
        <div
          onClick={() => {
            handleActive("/products");
          }}
          className={`mobile_bar_item ${
            active === "/products" && "mobile_bar_activeitem"
          }`}
        >
          Products
        </div>
        <div
          onClick={() => {
            handleActive("/cart");
          }}
          className={`mobile_bar_item ${
            active === "/cart" && "mobile_bar_activeitem"
          }`}
        >
          <Cart sx={{ fontSize: "25px" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
