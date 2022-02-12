import React from "react";

const Header = ({ title }) => {
  return (
    <div className="header">
      <div className="header-image"></div>
      <div className="text-header">
      <h6>{title}</h6>
      <p>Miguel Ferreira Mota / 107067 / Grupa 1</p>
      </div>
    </div>
  );
};

export default Header;
