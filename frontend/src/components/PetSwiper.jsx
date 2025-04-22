import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import Img1 from "../assets/images/pets/golden/1.png";
import Img2 from "../assets/images/pets/golden/2.png";
import Img3 from "../assets/images/pets/golden/3.png";
import Img4 from "../assets/images/pets/golden/4.png";
import Img5 from "../assets/images/pets/golden/5.png";

const PetSwiper = () => {
  const images = [Img1, Img2, Img3, Img4, Img5];
  return (
    <Swiper
      loop
      grabCursor
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={30}
      slidesPerView={3}
      navigation
      breakpoints={{
        0: {
          slidesPerView: 1,
        },

        639: {
          slidesPerView: 2,
        },
        865: {
          slidesPerView: 3,
        },
      }}>
      {images.map((img, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="img h-72">
              <img src={img} alt="" />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default PetSwiper;
