import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";

const AddProduct = () => {
  const [product, setProduct] = useState("");

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
          id="standard-basic"
          label="Name"
          name="standart"
        />
        <TextField
          sx={{ width: "60%" }}
          id="standard-basic"
          label="Price"
          name="price"
        />
        <TextField
          sx={{ width: "60%" }}
          id="standard-basic"
          label="Picture"
          name="picture"
        />
        <TextField
          sx={{ width: "60%" }}
          id="standard-basic"
          label="Description"
          name="description"
        />

        <Button sx={{ width: "40%" }} variant="outlined">
          ADD
        </Button>
      </Box>
    </div>
  );
};

export default AddProduct;
