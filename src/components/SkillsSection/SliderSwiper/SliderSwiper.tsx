
import { Swiper, SwiperSlide } from 'swiper/react';
import { slides } from './SliderData';
// Import Swiper styles
import "swiper/css";

import { Slide } from './Slide';

const SwiperContainer = () => {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={4}
      breakpoints={{
        // when window width is >= 1024px
        1024: {
          slidesPerView: 4,
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        // when window width is >= 600px
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        }
      }}
        
    >
      {slides.map((slide) => (
        <SwiperSlide key={slide.id}>
          <Slide img={slide.img} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperContainer;
