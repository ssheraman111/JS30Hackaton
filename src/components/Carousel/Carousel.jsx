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
      >
        <SwiperSlide>
          <Box>
            <p>Welcome to GreenShop</p>
            <h1>
              Let’s Make a Better <span>Planet</span>
            </h1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <div>
              <Button variant="contained">SHOP NOW</Button>
            </div>
          </Box>
          <Box>
            <img src={littleFlower} alt="" />
            <img src={Flower} alt="" />
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <div class="video-bg">
            <video
              src="video-bg.mp4"
              type="video/mp4"
              autoplay
              muted
              loop
            ></video>
            <div class="effects"></div>
            <div class="video-bg__content">
              <h1>Video Background</h1>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <Box>
            <p>Welcome to GreenShop</p>
            <h1>
              Let’s Make a Better <span>Planet</span>
            </h1>
            <p>
              We are an online plant shop offering a wide range of cheap and
              trendy plants. Use our plants to create an unique Urban Jungle.
              Order your favorite plants!
            </p>
            <div>
              <Button variant="contained">SHOP NOW</Button>
            </div>
          </Box>
          <Box>
            <img src={littleFlower} alt="" />
            <img src={Flower} alt="" />
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
