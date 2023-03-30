import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="HeadFooter">
          <div>GardenCare</div>
          <div>Plant Renovation</div>
          <div>Watering Garden</div>
          <div>Newsletters</div>
        </div>
        <div className="BodyFooter">
          <div>Logo</div>
          <div>Adress</div>
          <div>Contacts</div>
          <div>Phone</div>
        </div>
        <div className="FootFooter">
          <ul>My Accout</ul>
          <ul>Help & Guide</ul>
          <ul>Categories</ul>
          <ul>Social Media</ul>
        </div>
        <div className="FooterBottom">
          © 2021 GreenShop. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
