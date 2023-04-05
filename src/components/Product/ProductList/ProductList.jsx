import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, IconButton } from "@mui/material";
import ProductCard from "../ProductCard";
import { useProducts } from "../../../Context/ProductContextProvider";
import "./ProductList.css";
import FilterListIcon from "@mui/icons-material/FilterList";

import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
const ITEM_HEIGHT = 48;
const ProductList = () => {
  const { getProducts, products } = useProducts();

  const [searchParams] = useSearchParams();
  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  }, []);

  // Pagination
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  //Skol'ko stranits
  const itemsPerPage = 9;
  const count = Math.ceil(products.length / itemsPerPage);

  const currentData = () => {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  };
  // for filter
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className="containerCards">
      {/* waerdtehjkgjfhkdgjsfgwhjfkmlkfjdhs */}
      <div>
        <IconButton
          aria-label="more"
          id="long-button"
          aria-controls={open ? "long-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-haspopup="true"
          onClick={handleClick}
        >
          <FilterListIcon />
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
          <MenuItem onClick={handleClose}>emir</MenuItem>
        </Menu>
      </div>
      {/* waerdtehjkgjfhkdgjsfgwhjfkmlkfjdhs */}
      <div>
        <Box className="list_card">
          {currentData().map((item) => (
            <ProductCard className="flexCard" item={item} key={item.id} />
          ))}
        </Box>
      </div>
      <Stack className="poginationCard" spacing={2}>
        <Pagination
          className="pogination"
          count={count}
          variant="outlined"
          shape="rounded"
          onChange={handleChange}
        />
      </Stack>
    </div>
  );
};

export default ProductList;
