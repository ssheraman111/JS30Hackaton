import { Box, Button, Input, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../Context/ProductContextProvider";
import "./EditProduct.css";
const currencies = [
  {
    value: "small",
    label: "small",
  },
  {
    value: "medium",
    label: "medium",
  },
  {
    value: "large",
    label: "large",
  },
  {
    value: "default",
    label: "",
  },
];
const EditProduct = () => {
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
            value={product.name || ""}
            onChange={handleInp}
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Name"
            name="name"
            placeholder="name"
          />
          <Input
            value={product.price || ""}
            onChange={handleInp}
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Price"
            name="price"
            placeholder="price"
          />
          <Input
            value={product.picture || ""}
            onChange={handleInp}
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Picture"
            name="picture"
            placeholder="picture"
          />
          <Input
            value={product.description || ""}
            onChange={handleInp}
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Description"
            name="description"
            placeholder="description"
          />
          <Input
            value={product.categories || ""}
            onChange={handleInp}
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Categories"
            name="categories"
            placeholder="categoties"
          />
          <Input
            value={product.size || ""}
            onChange={handleInp}
            sx={{ width: "60%" }}
            id="standard-basic"
            label="Size"
            name="size"
            placeholder="size"
          />

          <Button
            className="adminPageBtn"
            onClick={() => {
              saveEditedProduct(product);
              navigate("/");
            }}
            variant="outlined"
          >
            Save Edit
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
      </div>{" "}
    </div>
  );
};

export default EditProduct;
