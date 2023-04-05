import { Details } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useProducts } from "../../../Context/ProductContextProvider";
import "./DetailsPage.css";

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
    <Box className="details__container">
      <Box className="left_block_of_img">
        <img className="details__img" src={product.picture} alt="" />
      </Box>
      <Box className="rigth_block_of_details">
        <Typography className="details__name" variant="h5">
          {product.name}
        </Typography>
        <Typography className="details__price">${product.price}</Typography>

        <Typography className="titleOfDescr">
          Short Description:
          <Typography className="details__descr">
            {product.description}
          </Typography>
        </Typography>
      </Box>
    </Box>
  );
};

export default DetailsPage;
