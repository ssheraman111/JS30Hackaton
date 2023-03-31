import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";

import Divider from "@mui/material/Divider";

import { FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";
import picSideBar from "../../images/SuperSaleBanner.svg";
const drawerWidth = 240;

export default function SideBar() {
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      ></AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List
          sx={{ display: "flex", flexDirection: "column", marginLeft: "13%" }}
        >
          <FormLabel id="demo-radio-buttons-group-label">Categories</FormLabel>

          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
          >
            <FormControlLabel value="All" control={<Radio />} label="All" />
            <FormControlLabel
              value="House Plants"
              control={<Radio />}
              label="House Plants"
            />
            <FormControlLabel
              value="Potter Plants"
              control={<Radio />}
              label="Potter Plants"
            />
            <FormControlLabel value="Seeds" control={<Radio />} label="Seeds" />
            <FormControlLabel
              value="Small Plants"
              control={<Radio />}
              label="Small Plants"
            />
            <FormControlLabel
              value="Big Plants"
              control={<Radio />}
              label="Big Plants"
            />
            <FormControlLabel
              value="Succulents"
              control={<Radio />}
              label="Succulents"
            />
            <FormControlLabel
              value="Terrariums"
              control={<Radio />}
              label="Terrariums"
            />
            <FormControlLabel
              value="Gardening"
              control={<Radio />}
              label="Gardening"
            />
            <FormControlLabel
              value="Accessories"
              control={<Radio />}
              label="Accessories"
            />
          </RadioGroup>
        </List>
        <Divider />
        <List
          sx={{ display: "flex", flexDirection: "column", marginLeft: "13%" }}
        >
          <FormLabel id="demo-radio-buttons-group-label">Size</FormLabel>
          <RadioGroup
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
          >
            <FormControlLabel value="Small" control={<Radio />} label="Small" />
            <FormControlLabel
              value="Medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel value="Large" control={<Radio />} label="Large" />
          </RadioGroup>
        </List>
        <img src={picSideBar} />
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
      ></Box>
    </Box>
  );
}
