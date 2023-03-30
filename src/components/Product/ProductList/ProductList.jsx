import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import * as React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const ProductList = () => {
  const [searchParams] = useSearchParams();
  useEffect(() => {
    // getProducts();
  }, [searchParams]);

  useEffect(() => {
    getProducts();
  });

  // Pagination
  const [page, setPage] = useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };

  //Skol'ko stranits
  const itemsPerPage = 9;
  const count = Math.ceil(products.lenght / itemsPerPage);

  const currentData = () => {
    const begin = (page - 1) * itemsPerPage;
    const end = begin + itemsPerPage;
    return products.slice(begin, end);
  };

  return (
    <div>
      (
      <Stack spacing={2}>
        <Pagination count={10} shape="rounded" />
        <Pagination count={10} variant="outlined" shape="rounded" />
      </Stack>
      );
    </div>
  );
};

export default ProductList;
