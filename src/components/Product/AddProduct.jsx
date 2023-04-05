import React, { useState } from "react";
import { useProducts } from "../../Context/ProductContextProvider";
import "./AddProduct.css";

import { Box, Button, Input, TextField } from "@mui/material";
const currencies = [
  {
    value: "Small",
    label: "Small",
  },
  {
    value: "Medium",
    label: "Medium",
  },
  {
    value: "Large",
    label: "Large",
  },
  {
    value: "default",
    label: "",
  },
];

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

  return (
    <div className="admin-page__container">
      <div className="admin-page_second__container">
        <Box
          sx={{
            width: "40vw",
            margin: "5vh auto",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            gap: "30px",
            padding: "20px",
          }}
        >
          <Input
            onChange={handleInp}
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Name"
            name="name"
            placeholder="name"
          />
          <Input
            onChange={handleInp}
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Price"
            name="price"
            placeholder="price"
          />
          <Input
            onChange={handleInp}
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Picture"
            name="picture"
            placeholder="picture"
          />
          <Input
            onChange={handleInp}
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Description"
            name="description"
            placeholder="description"
          />
          <Input
            onChange={handleInp}
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Categories"
            name="categories"
            placeholder="categoties"
          />
          <TextField
            className="sizeButton"
            sx={{ width: "60%" }}
            id="filled-select-currency-native"
            select
            name="size"
            defaultValue="default"
            SelectProps={{
              native: true,
            }}
            helperText="Please select size"
            variant="filled"
          >
            {currencies.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </TextField>

          <Button
            className="adminPageBtn"
            onClick={() => {
              addProduct(product);
            }}
            variant="outlined"
          >
            ADD
          </Button>
        </Box>
        <Box className="info__block">
          <h2 className="titleOfInfoBlock">Attention</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
            incidunt repellendus praesentium labore dignissimos ducimus
            cupiditate ex, accusantium quo reprehenderit rerum necessitatibus
            similique voluptates eum earum maxime modi rem. Id!
          </p>
        </Box>
      </div>
    </div>
  );
};

export default AddProduct;
