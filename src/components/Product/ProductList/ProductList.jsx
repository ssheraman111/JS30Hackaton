import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box, Typography } from "@mui/material";
import ProductCard from "../ProductCard";
import { useProducts } from "../../../Context/ProductContextProvider";
import "./ProductList.css";

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

  //   useEffect(() => {
  //     getProducts();
  //   }, []);

  return (
    <>
      <div>
        <Box id="list_card">
          {currentData().map((item) => (
            <ProductCard item={item} key={item.id} />
          ))}
        </Box>
        <Stack spacing={2}>
          <Pagination
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "60px",
            }}
            count={count}
            variant="outlined"
            shape="rounded"
            onChange={handleChange}
          />
        </Stack>
      </div>
    </>
  );
};

export default ProductList;
