import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from 'swiper';
import { Autoplay } from "swiper/modules";
import { Navigation, FreeMode } from "swiper/modules";
import SwiperComment from "../swiperComment/swiperComment";

import "swiper/css";
import "swiper/css/free-mode";
import "./SwiperComments.css";

export default function SwiperComments() {
  SwiperCore.use([Autoplay]);
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
        autoplay={{delay: 3000, disableOnInteraction: false}}
        speed={1000}
        breakpoints={{
          320: {
            slidesPerView: 1,
          },
          660: {
            slidesPerView: 2,
          },
          991: {
            slidesPerView: 3,
          }
        }}         
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
