import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import IconOfNavbar from "../../images/IconOfNavbar.svg";
import LoginLogoutBtn from "../../images/LoginLogoutBtn.svg";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { ADMIN } from "../../helpers/consts";
import { useAuth } from "../../AuthContexProvider";
import { TextField } from "@mui/material";

const pages = [
  { name: "Home", link: "/", id: 1 },
  { name: "Plant Care", link: "/plantcare", id: 2 },
  { name: "", link: "/*", id: 4 },
];

function Navbar() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = React.useState(searchParams.get("q") || "");

  React.useEffect(() => {
    setSearchParams({ q: search });
  }, [search]);

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
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page, index) => (
              <Link key={index} to={page.link}>
                <Button sx={{ my: 2, color: "white", display: "block" }}>
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
            <Button size="large" aria-label="search" color="inherit">
              <SearchIcon />
              <TextField
                id="standard-basic"
                label="Search"
                variant="standard"
                fullWidth
                onChange={(e) => setSearch(e.target.value)}
                value={search}
              />
            </Button>
            <IconButton onClick={() => navigate("/cart")}>
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;
