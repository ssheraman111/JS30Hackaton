import { Details } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../Context/ProductContextProvider";

const DetailsPage = () => {
  const {
    getProductDetails,
    productDetails: product,
    getRandomProducts,
  } = useProducts();

  const { id } = useParams();

  useEffect(() => {
    getProductDetails(id);

    getRandomProducts();
  }, []);

  return (
    <Box>
      <Box className="left_block_of_img">
        <img src={product.picture} alt="" />
      </Box>
      <Box>
        <Typography variant="h5">{product.name}</Typography>
        <Typography>{product.price}</Typography>
        <hr />
        <Typography>
          Short Description:
          <Typography>{product.description}</Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailsPage;
