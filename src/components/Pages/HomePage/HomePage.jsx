import React from "react";
import Carousel from "../../Carousel/Carousel";
import SideBar from "../../SideBar/SideBar";
import CarouselDetails from "../../Carousel/CarouselDetails";
import ProductPage from "../ProductPage/ProductPage";
import Block1 from "../../HomePageBody/Block1";
import Block2 from "../../HomePageBody/Block2";

const HomePage = () => {
  return (
    <div>
      <Carousel />

      {/* <SideBar /> */}

      <ProductPage />
      <Block2 />
      <Block1 />
    </div>
  );
};

export default HomePage;
