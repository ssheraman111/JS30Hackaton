import React from "react";

import Box from "@mui/material/Box";

import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";

import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import LoginLogoutBtnFor from "../../../images/LoginLogoutBtn.svg";
import "./LogOutLogIN.css";
import { useAuth } from "../../../Context/AuthContexProvider";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
const LogOutLogIN = () => {
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  const navigate = useNavigate();
  return (
    <div className="LogOutLogIN">
      {email ? (
        <Box sx={{ flexGrow: 0, marginLeft: "23px" }}>
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <Avatar src="/static/images/avatar/2.jpg" />
            </IconButton>
          </Tooltip>
          <Menu
            sx={{ mt: "45px" }}
            id="menu-appbar"
            anchorEl={anchorElUser}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorElUser)}
            onClose={handleCloseUserMenu}
          >
            <MenuItem onClick={handleCloseUserMenu}>
              <Typography textAlign="center">{email}</Typography>
              {email ? (
                <Button
                  className="logBtn"
                  variant="contained"
                  onClick={handleLogout}
                  sx={{ my: 2, color: "white" }}
                >
                  <img src={LoginLogoutBtnFor} alt="" />
                  Logout
                </Button>
              ) : (
                <Button
                  className="logBtn"
                  variant="contained"
                  onClick={() => navigate("/auth")}
                  sx={{ my: 2, color: "white" }}
                >
                  <img src={LoginLogoutBtnFor} alt="" />
                  Login
                </Button>
              )}
            </MenuItem>
          </Menu>
        </Box>
      ) : (
        ""
      )}
    </div>
  );
};

export default LogOutLogIN;
