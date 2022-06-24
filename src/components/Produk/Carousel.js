import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import {Navigation, Pagination} from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation'
import 'swiper/css/pagination'

const Carousel = () => {
  return (
    <Swiper
        slidesPerView={1}
        spaceBetween={50}
        centeredSlides={true}
        navigation={true}
        pagination={true}
        modules={[Pagination, Navigation,]}
        className='mySwiper '
    >
    <SwiperSlide><img src='img/productimg.png'/></SwiperSlide>

    </Swiper>
  )
}

export default Carousel