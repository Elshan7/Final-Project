import { FaFacebookF, FaTwitter } from "react-icons/fa";
import "./section6.css";
import { TiSocialInstagram } from "react-icons/ti";
import { GrGooglePlus } from "react-icons/gr";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Section6 = () => {

  useEffect(() => {
        AOS.init({
            once: false,
            duration: 2000,
            easing: "ease-out-cubic",
        });
    },[]);


  return (
    <section
      id="sct6"
      className="sct6 w-full h-[840px] flex justify-center items-center"
    >
      <div  data-aos-duration="1500" className="sct6-container w-[80%] h-[635px]  flex flex-col justify-between items-center">
        <h2  className="w-full h-[55px] text-[45px] font-[Montserrat] font-bold  text-center">
          OUR TEAM
        </h2>

        <div className="sct6-content w-full h-[520px]  flex flex-wrap justify-between items-center">

          <div data-aos-duration="2000" data-aos="fade-right" className="box-content w-[370px] h-[526px]  flex flex-col justify-between items-center">
            <div className="  box-img w-[370px] h-[334px] bg-[#FFFFFF]">
              <img
                className="object-cover hover:scale-105 duration-500 "
                src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/team-1-370x334.png"
                alt=""
              />
            </div>

            <div className="box-body w-full h-[160px]  flex flex-col justify-around">
              <h5 className="text-center font-[Montserrat] text-[20px] text-[#151515] font-bold tracking-wide">
                John Smith
              </h5>
              <p className="text-center text-[#777777]">
                John Smith is AutoPoint’s lead technician & the company’s
                initial founder.
              </p>
              <div className="social-icons flex justify-center gap-4 text-[20px]">
                <FaFacebookF />
                <FaTwitter />
                <TiSocialInstagram />
                <GrGooglePlus />
              </div>
            </div>
          </div>

          <div data-aos-duration="2000" data-aos="zoom-out-down"  className="box-content w-[370px] h-[526px]  flex flex-col justify-between items-center">
            <div className="  box-img w-[370px] h-[334px] bg-[#FFFFFF]">
              <img
                className="object-cover hover:scale-105 duration-500 "
                src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/team-2-370x334.png"
                alt=""
              />
            </div>

            <div className="box-body w-full h-[160px]  flex flex-col justify-around">
              <h5 className="text-center font-[Montserrat] text-[20px] text-[#151515] font-bold tracking-wide">
              James Anderson
              </h5>
              <p className="text-center text-[#777777]">
              James is our front-end specialist in car repairs with 10+ years of experience.
              </p>
              <div className="social-icons flex justify-center gap-4 text-[20px]">
                <FaFacebookF />
                <FaTwitter />
                <TiSocialInstagram />
                <GrGooglePlus />
              </div>
            </div>
          </div>

          <div data-aos-duration="2000" data-aos="fade-left" className="box-content w-[370px] h-[526px]  flex flex-col justify-between items-center">
            <div className="  box-img w-[370px] h-[334px] bg-[#FFFFFF]">
              <img
                className="object-cover hover:scale-105 duration-500 "
                src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/team-3-370x334.png"
                alt=""
              />
            </div>

            <div className="box-body w-full h-[160px]  flex flex-col justify-around">
              <h5 className="text-center font-[Montserrat] text-[20px] text-[#151515] font-bold tracking-wide">
              Peter Adams
              </h5>
              <p className="text-center text-[#777777]">
              Peter is one of our mechanics who joined our company a couple of years ago.
              </p>
              <div className="social-icons flex justify-center gap-4 text-[20px]">
                <FaFacebookF />
                <FaTwitter />
                <TiSocialInstagram />
                <GrGooglePlus />
              </div>
            </div>
          </div>


        </div>
      </div>
    </section>
  );
};

export default Section6;
