import React from "react";
import "./footer.css";
import FooterLogo from "./FooterLogo/FooterLogo";
const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-header">
        <div className="footer-header-left">
          get connected with us social networks
        </div>
        <div className="footer-header-right">
          <FooterLogo />
        </div>
      </div>

      <h1>2023 © copyright : coding Masters</h1>
    </div>
  );
};

export default Footer;
