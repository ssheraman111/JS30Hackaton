import React from "react";
import Carousel from "../../Carousel/Carousel";
import SideBar from "../../SideBar/SideBar";
import ProductPage from "../ProductPage/ProductPage";

const HomePage = () => {
  return (
    <div>
      <Carousel />
      <SideBar />
      <ProductPage />
    </div>
  );
};

export default HomePage;
