import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useProducts } from "../../Context/ProductContextProvider";

const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    description: "",
    price: 0,
    picture: "",
  });

  const { addProduct } = useProducts();

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
          onChange={handleInp}
          sx={{ width: "60%" }}
          id="standard-basic"
          label="Name"
          name="name"
        />
        <TextField
          onChange={handleInp}
          sx={{ width: "60%" }}
          id="standard-basic"
          label="Price"
          name="price"
        />
        <TextField
          onChange={handleInp}
          sx={{ width: "60%" }}
          id="standard-basic"
          label="Picture"
          name="picture"
        />
        <TextField
          onChange={handleInp}
          sx={{ width: "60%" }}
          id="standard-basic"
          label="Description"
          name="description"
        />

        <Button
          onClick={() => {
            addProduct(product);
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
