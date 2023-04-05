import "./Footer.css";
import * as React from "react";

import plant1 from "../../images/Group18.svg";
import plant2 from "../../images/Group19.svg";
import IconOfFooter from "../../images/IconOfNavbar.svg";
import Button from "@mui/material/Button";
const Footer = () => {
  return (
    <div className="MainfooterContainer">
      <div className="footerContainer">
        <div className="HeadFooter">
          <div className="Left">
            <div id="HeadFooterColumn-id" className="HeadFooterColumn">
              <img className="footer-img" src={plant1} />
              <h2>Garden Care</h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="HeadFooterColumn">
              <img className="footer-img" src={plant2} />
              <h2>Plant Renovation</h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="HeadFooterColumn">
              <img className="footer-img" src={plant1} />
              <h2>Watering Garden</h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div className="Right">
            <h2>Would you like to join newsletters?</h2>
            <input type="text" placeholder="enter your email address... " />
            <Button className="footerButton" variant="contained">
              Join
            </Button>
            <p>
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
          </div>
        </div>
        <div className="BodyFooter">
          <div className="Left2">
            <div>
              <img src={IconOfFooter} alt="" />
              <span>GRENSHOP</span>
            </div>
            <div>70 West Buckingham Ave. Farmingdale, NY 11735</div>
            <div>contact@greenshop.com</div>
          </div>
          <div className="number">+88 01911 717 490</div>
        </div>

        <div className="FooterBottom">
          © 2021 GreenShop. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
