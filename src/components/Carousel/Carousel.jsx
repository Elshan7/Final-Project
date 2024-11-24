
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import './carousel.css';
import { EffectCoverflow, Pagination } from 'swiper/modules';

export default function Carousel () {
  return (
    <div id='detail-carousel' className='detail'>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={3}
        spaceBetween={5}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        
        <SwiperSlide>
          <img className='w-full h-[140px]' src="https://autopart.ththeme.net/wp-content/uploads/2021/10//product-9-350x350.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[140px]'  src="https://autopart.ththeme.net/wp-content/uploads/2021/10//product-32-350x350.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[140px]'  src="https://autopart.ththeme.net/wp-content/uploads/2021/10//product-22-350x350.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[140px]'  src="https://autopart.ththeme.net/wp-content/uploads/2021/10//product-39-350x350.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img className='w-full h-[140px]'  src="https://autopart.ththeme.net/wp-content/uploads/2021/10//product-24-350x350.jpg" />
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
}
