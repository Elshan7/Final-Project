import "./section1.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/autoplay';


const Section1 = () => {
  return (
    <section className="sct1">
    <Swiper
      rewind={true}
      navigation={true}
      autoplay={{ delay: 2000 }}
      modules={[Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <img className="object-cover h-[549px]" src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/slide-1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide><img className="object-cover h-[549px]  " src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/slide-2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="object-cover h-[549px]" src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/slide-3.jpg" alt="" /></SwiperSlide>
    
    </Swiper>
  </section>

  );
}

export default Section1



