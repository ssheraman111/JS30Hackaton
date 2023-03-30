import CarouselFlowers1 from "../../images/CarouselFlowers1.svg";
import CarouselFlowers2 from "../../images/CarouselFlowers2.svg";
import CarouselFlowers3 from "../../images/CarouselFlowers3.svg";
import CarouselFlowers4 from "../../images/CarouselFlowers4.svg";
import CarouselFlowers5 from "../../images/CarouselFlowers5.svg";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./CarouselDetails.css";

// import required modules
import { Pagination } from "swiper";
import { Box } from "@mui/system";

export default function CarouselDetails() {
  return (
    <>
      <p>You may be interested in</p>
      <tr />
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
            <img src={CarouselFlowers1} alt="" />
            <p>Beach Spider Lily</p>
            <p>$129.00</p>
          </Box>
          <Box>
            <img src={CarouselFlowers2} alt="" />
            <p>Blushing Bromeliad</p>
            <p>$139.00</p>
          </Box>
          <Box>
            <img src={CarouselFlowers3} alt="" />
            <p>Aluminum Plant</p>
            <p>$179.00</p>
          </Box>
          <Box>
            <img src={CarouselFlowers4} alt="" />
            <p>Bird's Nest Fern</p>
            <p>$99.00</p>
          </Box>
          <Box>
            <img src={CarouselFlowers5} alt="" />
            <p>Chinese Evergreen</p>
            <p>$39.00</p>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <img src={CarouselFlowers1} alt="" />
            <p>Beach Spider Lily</p>
            <p>$129.00</p>
          </Box>
          <Box>
            <img src={CarouselFlowers2} alt="" />
            <p>Blushing Bromeliad</p>
            <p>$139.00</p>
          </Box>
          <Box>
            <img src={CarouselFlowers3} alt="" />
            <p>Aluminum Plant</p>
            <p>$179.00</p>
          </Box>
          <Box>
            <img src={CarouselFlowers4} alt="" />
            <p>Bird's Nest Fern</p>
            <p>$99.00</p>
          </Box>
          <Box>
            <img src={CarouselFlowers5} alt="" />
            <p>Chinese Evergreen</p>
            <p>$39.00</p>
          </Box>
        </SwiperSlide>
        <SwiperSlide>
          <Box>
            <img src={CarouselFlowers1} alt="" />
            <p>Beach Spider Lily</p>
            <p>$129.00</p>
          </Box>
          <Box>
            <img src={CarouselFlowers2} alt="" />
            <p>Blushing Bromeliad</p>
            <p>$139.00</p>
          </Box>
          <Box>
            <img src={CarouselFlowers3} alt="" />
            <p>Aluminum Plant</p>
            <p>$179.00</p>
          </Box>
          <Box>
            <img src={CarouselFlowers4} alt="" />
            <p>Bird's Nest Fern</p>
            <p>$99.00</p>
          </Box>
          <Box>
            <img src={CarouselFlowers5} alt="" />
            <p>Chinese Evergreen</p>
            <p>$39.00</p>
          </Box>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
