// import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, FreeMode } from "swiper/modules";
import SwiperComment from "../swiperComment/swiperComment";

import "swiper/css";
import 'swiper/css/free-mode';
// import "swiper/css/navigation";
import "./SwiperComments.css";

export default function SwiperComments() {
  return (
    <div className="sliderComments">
      <Swiper
        navigation={true}
        modules={[Navigation, FreeMode]}
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={19}
        freeMode={true}
        loop={true}
      >
        <SwiperSlide>
          <SwiperComment />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperComment />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperComment />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperComment />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperComment />
        </SwiperSlide>
        <SwiperSlide>
          <SwiperComment />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
