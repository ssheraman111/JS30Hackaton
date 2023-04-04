import littleFlower from "../../images/littleFlower.svg";
import Flower from "../../images/Flower.svg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Carousel.css";

// import required modules
import { Pagination } from "swiper";
import { Box } from "@mui/system";
import { Button } from "@mui/material";

export default function Carousel() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
        style={{ backgroundColor: "#46A358", height: "40rem" }}
      >
        <SwiperSlide className="slider">
          <Box className="slideLeftSide">
            <p className="slidePar">Welcome to GreenShop</p>
            <h1 className="sideh1">
              Let’s Make a Better <span className="slideh1span">Planet</span>
            </h1>
            <p className="slideSecondPar">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <div>
              <Button className="slideBtnShop" variant="contained">
                SHOP NOW
              </Button>
            </div>
          </Box>
          <Box className="slideBoxOfImg">
            <img className="firstImg" src={littleFlower} alt="" />
            <img className="secondImg" src={Flower} alt="" />
          </Box>
        </SwiperSlide>

        <SwiperSlide className="slider">
          <Box className="slideLeftSide">
            <p className="slidePar">Welcome to GreenShop</p>
            <h1 className="sideh1">
              Let’s Make a Better <span className="slideh1span">Planet</span>
            </h1>
            <p className="slideSecondPar">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <div>
              <Button className="slideBtnShop" variant="contained">
                SHOP NOW
              </Button>
            </div>
          </Box>
          <Box className="slideBoxOfImg">
            <img className="firstImg" src={littleFlower} alt="" />
            <img className="secondImg" src={Flower} alt="" />
          </Box>
        </SwiperSlide>
        <SwiperSlide className="slider">
          <Box className="slideLeftSide">
            <p className="slidePar">Welcome to GreenShop</p>
            <h1 className="sideh1">
              Let’s Make a Better <span className="slideh1span">Planet</span>
            </h1>
            <p className="slideSecondPar">
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <div>
              <Button className="slideBtnShop" variant="contained">
                SHOP NOW
              </Button>
            </div>
          </Box>
          <Box className="slideBoxOfImg">
            <img className="firstImg" src={littleFlower} alt="" />
            <img className="secondImg" src={Flower} alt="" />
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
