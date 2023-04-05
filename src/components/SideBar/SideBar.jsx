import * as React from "react";
import Box from "@mui/material/Box";

import Slider from "@mui/material/Slider";

import CssBaseline from "@mui/material/CssBaseline";
import List from "@mui/material/List";

import { Button, TextField, Typography } from "@mui/material";
import Divider from "@mui/material/Divider";
import "./SideBar.css";

import {
  FormControlLabel,
  FormLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";

import picSideBar from "../../images/SuperSaleBanner.svg";
import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../Context/ProductContextProvider";

const drawerWidth = 240;
function valuetext(value) {
  return `${value}°C`;
}

export default function SideBar() {
  const { fetchByParams, getProducts } = useProducts();

  // slider
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  // slider
  return (
    <Grid>
      <Box className="sidebar__container">
        <List className="sidebar-first-part">
          <FormLabel
            className="sidebar-first__title"
            id="demo-radio-buttons-group-label"
          >
            Categories
          </FormLabel>

          <RadioGroup
            className="radioGroup"
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("categories", e.target.value)}
          >
            <FormControlLabel
              className="categorie__all"
              value="All"
              control={<Radio />}
              label="All"
            />
            <FormControlLabel
              className="categories__hose-plants"
              value="House Plants"
              control={<Radio />}
              label="House Plants"
            />
            <FormControlLabel
              className="categories__potter-plants"
              value="Potter Plants"
              control={<Radio />}
              label="Potter Plants"
            />
            <FormControlLabel
              className="categories__seeds"
              value="Seeds"
              control={<Radio />}
              label="Seeds"
            />
            <FormControlLabel
              className="categories__small-plants"
              value="Small Plants"
              control={<Radio />}
              label="Small Plants"
            />
            <FormControlLabel
              className="categories__big-plants"
              value="Big Plants"
              control={<Radio />}
              label="Big Plants"
            />
            <FormControlLabel
              className="categories__succulents"
              value="Succulents"
              control={<Radio />}
              label="Succulents"
            />
            <FormControlLabel
              className="categories__terrariums"
              value="Terrariums"
              control={<Radio />}
              label="Terrariums"
            />
            <FormControlLabel
              className="categories__gardening"
              value="Gardening"
              control={<Radio />}
              label="Gardening"
            />
            <FormControlLabel
              className="categories__accessories"
              value="Accessories"
              control={<Radio />}
              label="Accessories"
            />
          </RadioGroup>
        </List>

        {/* Slider */}
        <List className="slider">
          <FormLabel
            className="slider__title"
            id="demo-radio-buttons-group-label"
          >
            Price Range
          </FormLabel>
          <Box className="slider_box">
            <Slider
              className="slider-oun"
              max={2000}
              min={100}
              getAriaLabel={() => "Temperature range"}
              value={value}
              onChange={handleChange}
              valueLabelDisplay="auto"
              getAriaValueText={valuetext}
            />

            <Typography className="slider__price">
              Price:
              <span className="slider__span">
                {value[0]}$ - {value[1]}$
              </span>
            </Typography>
            <Button className="slider__btn" variant="text">
              Filter
            </Button>
          </Box>
        </List>
        {/* Slider */}
        <List className="sidebar-second-part">
          <FormLabel
            className="sidbar-second-part__title"
            id="demo-radio-buttons-group-label"
          >
            Size
          </FormLabel>
          <RadioGroup
            className="categories__all"
            aria-labelledby="demo-radio-buttons-group-label"
            defaultValue="All"
            name="radio-buttons-group"
            onChange={(e) => fetchByParams("size", e.target.value)}
          >
            <FormControlLabel
              className="categorie__all"
              value="All"
              control={<Radio />}
              label="All"
            />
            <FormControlLabel
              className="categories__small"
              value="Small"
              control={<Radio />}
              label="Small"
            />
            <FormControlLabel
              className="categories__medium"
              value="Medium"
              control={<Radio />}
              label="Medium"
            />
            <FormControlLabel
              className="categories__large"
              value="Large"
              control={<Radio />}
              label="Large"
            />
          </RadioGroup>
        </List>

        <img className="add__img" src={picSideBar} />
      </Box>
    </Grid>
  );
}
