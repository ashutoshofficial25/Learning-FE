import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = ({ search, setSearch }) => {
  return (
    <div className="header">
      <Link to="/" className="header_container">
        <img
          className="header_image"
          src="https://static.vecteezy.com/system/resources/previews/003/731/316/original/web-icon-line-on-white-background-image-for-web-presentation-logo-icon-symbol-free-vector.jpg"
          alt="logo-img"
        />
        <div className="search_box">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />{" "}
        </div>
      </Link>
      <div className="header_right">
        <Link to="/checkout" className="headerOption_basket">
          {" "}
          Cart
        </Link>
      </div>
    </div>
  );
};

export default Header;
