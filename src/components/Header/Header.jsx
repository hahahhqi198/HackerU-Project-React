import React from "react";
import "./Header.css";
import HeaderImg from "../../assets/images/header.png";
const Header = () => {
  return (
    <>
      <div className="header_section">
        <div className="header_left">
          <div className="header_left_bubble1"></div>
          <div className="header_left_bubble2"></div>
          <div className="header_left_bubble3"></div>
          <div className="header_left_bubble4"></div>
          <div className="header_left_content">
            <div className="header_left_heading">
              <h1>Mobile</h1>
              <h1>Accessories</h1>
            </div>
            <div className="header_left_subheading">We Know Your Mobile!</div>
            <div className="header_left_btnwrap">
              <a href="#popularList" class="header_left_btn" role="button">
                Shop Now!
              </a>
            </div>
          </div>
        </div>
        <div className="header_right">
          <div className="header_right_background">
            <img src={HeaderImg} alt="" />
          </div>
        </div>
      </div>
      <div className="header_section_mobile">
        <img src={HeaderImg} alt="" />
        <div className="header_left_contentmb">
          <div className="header_left_headingmb">
            <h1>Mobile</h1>
            <h1>Accessories</h1>
          </div>
          <div className="header_left_subheadingmb">We Know Your Mobile!</div>
        </div>
      </div>
    </>
  );
};

export default Header;
