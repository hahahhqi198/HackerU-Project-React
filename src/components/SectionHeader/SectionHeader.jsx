import React from "react";
import "./SectionHeader.css";
const SectionHeader = ({ heading, desc, btnText, btnClick }) => {
  return (
    <div className="section_header">
      <div className="section_header_left">
        <div className="section_hl_heading">{heading}</div>
        <div className="section_hl_desc">{desc}</div>
      </div>
      <div className="section_header_right">
        {btnText && (
          <button onClick={btnClick} className="section_headerr_btn">
            {btnText}
          </button>
        )}
      </div>
    </div>
  );
};

export default SectionHeader;
