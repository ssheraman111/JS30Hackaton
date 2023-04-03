import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

import Button from "@mui/material/Button";

import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import IconOfNavbar from "../../images/IconOfNavbar.svg";
import LoginLogoutBtn from "../../images/LoginLogoutBtn.svg";
import { Link, Navigate, useNavigate, useSearchParams } from "react-router-dom";
import { ADMIN } from "../../helpers/consts";

import { TextField } from "@mui/material";
import { useAuth } from "../../Context/AuthContexProvider";

const pages = [
  { name: "Home", link: "/", id: 1 },
  { name: "Plant Care", link: "/plantcare", id: 2 },
  { name: "", link: "/*", id: 3 },
];
const settings = ["Profile", "Account", "Dashboard", "Logout"];

function Navbar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("q") || "");

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

  const {
    handleLogout,
    user: { email },
  } = useAuth();

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <img src={IconOfNavbar} alt="Error" />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            GREENSHOP
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            ></Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link key={index} to={page.link}>
                <Button
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Button>
              </Link>
            ))}
            {email === ADMIN ? (
              <Button
                onClick={() => navigate("/admin")}
                sx={{ my: 2, display: "block", color: "white" }}
              >
                <Typography id="pages_link">Admin page</Typography>
              </Button>
            ) : null}
          </Box>
          <Box>
            <IconButton size="large" aria-label="search" color="inherit">
              <SearchIcon />
              <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
                fullWidth
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </IconButton>
            <IconButton>
              <ShoppingCartIcon />
            </IconButton>
            {email ? (
              <Button
                variant="contained"
                onClick={handleLogout}
                sx={{ my: 2, color: "white" }}
              >
                <img src={LoginLogoutBtn} alt="" />
                Logout
              </Button>
            ) : (
              <Button
                variant="contained"
                onClick={() => navigate("/auth")}
                sx={{ my: 2, color: "white" }}
              >
                <img src={LoginLogoutBtn} alt="" />
                Login
              </Button>
            )}
            <h1>{email}</h1>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
