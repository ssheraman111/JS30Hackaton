import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { Box } from "@mui/material";
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

  return (
    <div className="containerCards">
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
