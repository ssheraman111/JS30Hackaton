import * as React from "react";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import "./BurgerMenu.css";
import MenuIcon from "@mui/icons-material/Menu";
import { Box } from "@mui/system";
import { useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useAuth } from "../../../Context/AuthContexProvider";
import { ADMIN } from "../../../helpers/consts";
import { Button, Typography } from "@mui/material";
import LogOutLogIN from "../LogOutLogIN/LogOutLogIN";

const ITEM_HEIGHT = 48;

export default function BurgerMenu() {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  return (
    <>
      {" "}
      <div className="burgerMenu">
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="long-menu"
          MenuListProps={{
            "aria-labelledby": "long-button",
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: "20ch",
            },
          }}
        >
          <MenuItem onClick={handleClose}>
            <Box>
              <p onClick={() => navigate("/")}>Home</p>
              <p onClick={() => navigate("/video")}>Videos about Us</p>
              <p onClick={() => navigate("/bancCard")}>Add credit card</p>
              <IconButton onClick={() => navigate("/cart")}>
                <ShoppingCartIcon />
              </IconButton>
              {email === ADMIN ? (
                <Button
                  className="admin__btn_nav"
                  onClick={() => navigate("/admin")}
                >
                  <Typography id="pages_link">Admin page</Typography>
                </Button>
              ) : null}
            </Box>
          </MenuItem>
        </Menu>
      </div>
      <LogOutLogIN className="LogOutLogIN" />
    </>
  );
}
