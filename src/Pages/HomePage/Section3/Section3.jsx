import "./section3.css"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { FaArrowRight } from "react-icons/fa6";


const Section3 = () => {
  return (
    <section  id="sct3" className=' sct3 w-full h-[470px]  '>

        <h2 className="sct3-h2 font-[Montserrat] text-[40px] font-bold mt-4  ">OUR SERVICES</h2>

<Swiper 
        slidesPerView={3}
        spaceBetween={0}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        data-aos-duration="2000" data-aos="flip-left"
        className="mySwiper sct3-swiper w-full sct3-slide h-[411px]"
      >
        <SwiperSlide className="sct3-slide flex sct3-swiper justify-between items-center">
            <img className="sct3-img" src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/services-4-250x362.png" alt="" />
            <div className="sct3-text w-[236px] h-[186px]  flex flex-col justify-around">
                <h3 className="sct3-h3">WHEEL CHANGE</h3>
                <div className="icon-sct3">
                <FaArrowRight />
                </div>
            </div>
            </SwiperSlide>

        <SwiperSlide className="sct3-slide flex justify-between items-center">
            <img className="sct3-img" src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/services-1-250x362.png" alt="" />
            <div className="sct3-text w-[236px] h-[186px]  flex flex-col justify-around">
                <h3 className="sct3-h3">OIL CHANGE</h3>
                <div className="icon-sct3">
                <FaArrowRight />
                </div>
            </div>
            </SwiperSlide>

        <SwiperSlide className="sct3-slide flex justify-between items-center">
            <img className="sct3-img" src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/services-2-250x362.png" alt="" />
            <div className="sct3-text w-[236px] h-[186px]  flex flex-col justify-around">
                <h3 className="sct3-h3 ">REPAIR ENGINE</h3>
                <div className="icon-sct3">
                <FaArrowRight />
                </div>
            </div>
            </SwiperSlide>

        <SwiperSlide className="sct3-slide flex justify-between items-center">
            <img className="sct3-img" src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/services-3-250x362.png" alt="" />
            <div className="sct3-text w-[236px] h-[186px]  flex flex-col justify-around">
                <h3 className="sct3-h3">BRAKE REPAIR</h3>
                <div className="icon-sct3">
                <FaArrowRight />
                </div>
            </div>
            </SwiperSlide>
      </Swiper>
      
    </section>
  )
}

export default Section3
