import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import IconOfNavbar from "../../images/IconOfNavbar.svg";
import LoginLogoutBtn from "../../images/LoginLogoutBtn.svg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ADMIN } from "../../helpers/consts";
import Menu from "@mui/material/Menu";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import { useAuth } from "../../Context/AuthContexProvider";
import "./Navbar.css";
import { useProducts } from "../../Context/ProductContextProvider";
import { Input, TextField } from "@mui/material";
import { Search } from "@mui/icons-material";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const pages = [
  { name: "Home", link: "/", id: 1 },
  { name: "Videos about Us", link: "/video", id: 2 },

  { name: "Add credit card", link: "/bancCard", id: 3 },
  { name: "", link: "/*", id: 4 },
];

function Navbar() {
  const navigate = useNavigate();

  const {
    handleLogout,
    user: { email },
  } = useAuth();
  // ++++++++++++++++++
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

  // ++++++++++++++++++

  // search
  const { fetchByParams, getProducts } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("q") || "");

  React.useEffect(() => {
    setSearchParams({ q: search });
    getProducts();
  }, [search]);
  // search

  return (
    <AppBar className="Nav__container" position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters className="block-of-icons-in-navabr">
          <img src={IconOfNavbar} alt="Error" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            className="title__nav"
          >
            GREENSHOP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link className="linkNav" key={index} to={page.link}>
                <Button
                  className="pages__btn_nav"
                  sx={{ my: 2, color: "black", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            {email === ADMIN ? (
              <Button
                className="admin__btn_nav"
                onClick={() => navigate("/admin")}
                sx={{ my: 2, display: "block", color: "black" }}
              >
                <Typography id="pages_link">Admin page</Typography>
              </Button>
            ) : null}
          </Box>

          <Box className="main-right-icons">
            <Input
              placeholder="Search…"
              inputProps={{ "aria-label": "search" }}
              onChange={(e) => setSearch(e.target.value)}
              value={search}
              className="searchNav"
            />

            <IconButton className="cartNav" onClick={() => navigate("/cart")}>
              <ShoppingCartIcon />
            </IconButton>
            {email ? (
              <Button
                className="logBtn"
                variant="contained"
                onClick={handleLogout}
                sx={{ my: 2, color: "white" }}
              >
                <img src={LoginLogoutBtn} alt="" />
                Logout
              </Button>
            ) : (
              <Button
                className="logBtn"
                variant="contained"
                onClick={() => navigate("/auth")}
                sx={{ my: 2, color: "white" }}
              >
                <img src={LoginLogoutBtn} alt="" />
                Login
              </Button>
            )}
          </Box>

          {email ? (
            <Box
              className="accounAvatar"
              sx={{ flexGrow: 0, marginLeft: "23px" }}
            >
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
                </MenuItem>
              </Menu>
            </Box>
          ) : (
            ""
          )}

          <BurgerMenu />
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
