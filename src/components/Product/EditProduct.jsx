import { Box, Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../Context/ProductContextProvider";

const AddProduct = () => {
  const { getProductDetails, productDetails, saveEditedProduct } =
    useProducts();
  const navigate = useNavigate();
  const [product, setProduct] = useState(productDetails);
  const { id } = useParams();

  useEffect(() => {
    setProduct(productDetails);
  }, [productDetails]);

  useEffect(() => {
    getProductDetails(id);
  }, []);

  const handleInp = (e) => {
    if (e.target.name == "price") {
      let obj = {
        ...product,
        [e.target.name]: Number(e.target.value),
      };
      setProduct(obj);
    } else {
      let obj = {
        ...product,
        [e.target.name]: e.target.value,
      };
      setProduct(obj);
    }
  };
  console.log(product);

  return (
    <div>
      <Box
        sx={{
          width: "40vw",
          margin: "5vh auto",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          background: " rgba(70, 163, 88, 0.1)",
          gap: "30px",
          padding: "20px",
        }}
      >
        <TextField
          sx={{ width: "60%" }}
          className="admin_inp"
          id="outlined-basic"
          label="Name"
          variant="outlined"
          name="name"
          size="small"
          onChange={handleInp}
          value={product.name || ""}
        />

        <TextField
          sx={{ width: "60%" }}
          className="admin_inp"
          id="outlined-basic"
          label="Price"
          variant="outlined"
          name="price"
          size="small"
          onChange={handleInp}
          value={product.price || ""}
        />
        <TextField
          sx={{ width: "60%" }}
          className="admin_inp"
          id="outlined-basic"
          label="Picture"
          variant="outlined"
          name="picture"
          size="small"
          onChange={handleInp}
          value={product.picture || ""}
        />
        <TextField
          sx={{ width: "60%" }}
          className="admin_inp"
          id="outlined-basic"
          label="Descripton"
          variant="outlined"
          name="description"
          size="small"
          onChange={handleInp}
          value={product.description || ""}
        />

        <Button
          onClick={() => {
            saveEditedProduct(product);
            navigate("/");
          }}
          sx={{ width: "40%" }}
          variant="outlined"
        >
          ADD
        </Button>
      </Box>
    </div>
  );
};

export default AddProduct;
