import React from "react";
import ProductList from "../../Product/ProductList/ProductList";
import SideBar from "../../SideBar/SideBar";

const ProductPage = () => {
  return (
    <div style={{ display: "flex" }}>
      <SideBar />
      <ProductList />
    </div>
  );
};

export default ProductPage;
