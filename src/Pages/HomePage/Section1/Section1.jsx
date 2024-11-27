import "./section1.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import 'swiper/css/autoplay';



const Section1 = () => {


  return (
    <section className="sct1 flex justify-center items-center">

<div className="container-sct1 w-[80%]  h-80  absolute z-10 flex justify-end  ">
  <div className="left-content w-[44%] h-80  flex flex-col justify-evenly  items-end ">
    <p data-aos-duration="2000" data-aos="fade-down-right" className="text-end text-white text-[22px] tracking-widest cursor-pointer ">All  Types Of</p>
    <h2 data-aos-duration="2000" data-aos="fade-down-left" className="text-end text-[60px] text-white font-bold duration-700 cursor-pointer hover:opacity-60  ">CAR REPAIR</h2>
    <p data-aos-duration="2000" data-aos="zoom-in-up" className="text-[#D3D3D3] tracking-wide duration-700 cursor-pointer text-end text-[16px] hover:text-white  ">We provide all types of diagnostic, repair, and maintenance services for cars and vehicles of our clients.</p>
    <button data-aos-duration="2000"  data-aos="zoom-out-down" className="bg-blue-600 text-lg tracking-wider duration-700  w-48 h-12 rounded-lg text-white hover:opacity-75 ">READ MORE</button>

  </div>
</div>
    <Swiper
      rewind={true}
      navigation={true}
      autoplay={{ delay: 2000 }}
      modules={[Navigation]}
      className="mySwiper w-full"
    >
      <SwiperSlide>
        <img className="object-cover w-full h-[549px]" src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/slide-1.jpg" alt="" />
      </SwiperSlide>
      <SwiperSlide><img className="object-cover w-full h-[549px]  " src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/slide-2.jpg" alt="" /></SwiperSlide>
      <SwiperSlide><img className="object-cover w-full h-[549px]" src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/slide-3.jpg" alt="" /></SwiperSlide>
    
    </Swiper>
  </section>

  );
}

export default Section1



