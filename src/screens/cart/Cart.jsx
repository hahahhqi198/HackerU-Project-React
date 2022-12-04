import React, { useEffect, useState } from "react";
import "./Cart.css";
import CancelIcon from "@mui/icons-material/Cancel";
import CartHeader from "../../components/CartHeader/CartHeader";
import { useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
const Cart = ({ cart, setCart }) => {
  const [total, setTotal] = useState(0);
  const navigate = useNavigate();
  const handleInc = (id) => {
    setCart((preval) => {
      return preval.map((item) => {
        return item.id === id ? { ...item, qty: item.qty + 1 } : item;
      });
    });
  };
  const handleDec = (itm, index) => {
    if (itm.qty === 1) {
      setCart((preval) => {
        return preval.filter((i) => i.id !== itm.id && i);
      });
    } else {
      setCart((preval) => {
        return preval.map((item) => {
          if (item.id === itm.id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      });
    }
  };
  const handleDel = (id) => {
    setCart((preval) => {
      return preval.filter((i) => i.id !== id && i);
    });
  };
  const handleChecked = (id, value) => {
    setCart((val) => {
      return val.map((item) => {
        return item.id === id ? { ...item, checked: value } : item;
      });
    });
  };
  const handleSelectAll = (e) => {
    setCart((val) => {
      return val.map((item) => {
        return { ...item, checked: e.target.checked };
      });
    });
  };
  const handleDeleteSelected = () => {
    setCart((preval) => {
      return preval.filter((i) => i.checked !== true && i);
    });
  };
  useEffect(() => {
    setTotal(
      cart.reduce((total, item) => {
        return total + item.price * item.qty;
      }, 0)
    );
  }, [cart]);
  return (
    <div className="cart_screen">
      {cart.length > 0 && (
        <CartHeader
          heading="Cart"
          desc="List of cart items"
          total={`$${total}`}
        />
      )}
      <div className="cart_screen_actionbtn">
        <label className="select_all_btn" for="select_all_field">
          <input
            className="select_all_input"
            type="checkbox"
            id="select_all_field"
            onChange={handleSelectAll}
          />
          <span>Select All</span>
        </label>
        <DeleteIcon
          className="ccselected_delete_icon"
          onClick={handleDeleteSelected}
        />
      </div>
      {cart.length > 0 && (
        <div className="cart_items_list">
          {cart.map((item, index) => (
            <div className="cart_card">
              <input
                type="checkbox"
                className="cart_card_checkbox"
                checked={item.checked}
                onChange={(e) => handleChecked(item.id, e.target.checked)}
              />
              <div className="cart_card_imgwrap">
                <img src={item.image} alt="" />
              </div>
              <div className="cart_card_content">
                <div className="cart_cc_title">
                  {item.title.substring(0, 16)}
                </div>
                <div className="cart_cc_btns">
                  <span
                    className="cart_ccbtn_minus"
                    onClick={() => handleDec(item, index)}
                  >
                    -
                  </span>
                  <span className="cart_ccbtn_num">{item.qty}</span>
                  <span
                    className="cart_ccbtn_plus"
                    onClick={() => handleInc(item.id)}
                  >
                    +
                  </span>
                </div>
                <div
                  className="cart_cc_close"
                  onClick={() => handleDel(item.id)}
                >
                  <CancelIcon />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="cart_footer">
          <div
            className="cart_checkout_btn"
            onClick={() => navigate("/checkout")}
          >
            Go To Checkout
          </div>
        </div>
      )}
      {cart.length < 1 && (
        <div className="empty_cart_text">Your Cart is Empty!</div>
      )}
    </div>
  );
};

export default Cart;
