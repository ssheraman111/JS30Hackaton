import "./Footer.css";
import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import plant1 from "../../images/Group18.svg";
import plant2 from "../../images/Group19.svg";

const Footer = () => {
  return (
    <div>
      <div className="footerContainer">
        <div className="HeadFooter">
          <div className="Left">
            <div className="HeadFooterColumn">
              <img src={plant1} />
              <h2>Garden Care</h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="HeadFooterColumn">
              <img src={plant2} />
              <h2>Plant Renovation</h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
            <div className="HeadFooterColumn">
              <img src={plant1} />
              <h2>Watering Garden</h2>
              <p>
                We are an online plant shop offering a wide range of cheap and
                trendy plants.
              </p>
            </div>
          </div>
          <div className="Right">
            <h2>Would you like to join newsletters?</h2>
            <p>
              We usually post offers and challenges in newsletter. We’re your
              online houseplant destination. We offer a wide range of
              houseplants and accessories shipped directly from our (green)house
              to yours!
            </p>
            <Stack
              component="form"
              sx={{
                width: "25ch",
              }}
              spacing={2}
              noValidate
              autoComplete="off"
            >
              <TextField
                hiddenLabel
                id="filled-hidden-label-normal"
                defaultValue="Normal"
                variant="filled"
              />
            </Stack>
          </div>
        </div>
        <div className="BodyFooter">
          <div className="Left2">
            <div>Logo</div>
            <div>70 West Buckingham Ave. Farmingdale, NY 11735</div>
            <div>contact@greenshop.com</div>
          </div>
          <div className="Right">+88 01911 717 490</div>
        </div>
        <div className="FootFooter">
          <div className="Left">
            <ul>My Accout</ul>
            <ul>Help & Guide</ul>
            <ul>Categories</ul>
          </div>
          <ul className="Right">Social Media</ul>
        </div>
        <div className="FooterBottom">
          © 2021 GreenShop. All Rights Reserved.
        </div>
      </div>
    </div>
  );
};

export default Footer;
