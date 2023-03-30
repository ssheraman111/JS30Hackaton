import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

import ProductCard from "../ProductCard";

import { useProducts } from "../../../Context/ProductContextProvider";

const ProductList = () => {
  const { getProducts, products } = useProducts();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <Box sx={{ display: "flex", flexDirection: "column" }}>
      <Typography id="product_list_title">Блог</Typography>

      <Box id="list_card">
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </Box>
    </Box>
  );
};

export default ProductList;
