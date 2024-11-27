import "./footer.css";
import { IoLocationSharp } from "react-icons/io5";
import { FaRegClock } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { IoLogoGoogleplus } from "react-icons/io";
import { FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full h-[540px] bg-[#343434]">
      <div className="footer-up w-full h-[402px] flex justify-center items-center">
        <div className="footer-up-container w-[80%] h-[273px] flex ">
          <div data-aos="zoom-in-down" className="footer-part1 w-[33.3%] h-[273px] ">
            <h5 className="font-[Montserrat] text-[20px] text-[#FFF] duration-700 cursor-pointer tracking-wide font-bold hover:text-blue-600 hover:ml-2">
              OUR CONTACTS
            </h5>
            <div className="line w-[25%] h-[2.4px] mt-4"></div>

            <ul className="w-full h-[128px] flex flex-col mt-5 ">
              <li className="h-[58px] w-[70%]  flex items-center ">
                <IoLocationSharp className="location w-[40px] h-[40px] " />
                <a className="w-[225px] h-[48px]  ml-1 text-[#FFFFFF]" href="">
                  523 Sylvan Ave, 5th Floor <br />
                  Mountain View, CA 94041 USA
                </a>
              </li>

              <li className="h-[58px] w-[70%]  mt-6 flex items-center">
                <FaRegClock className="clock w-[36px] h-[36px]" />
                <div className="li-sub w-[225px] h-[48px] ml-2 text-[#FFFFFF]">
                  <div className="up-li">
                    <span>Weekdays:</span>{" "}
                    <span className="ml-2">08:00am - 08:00pm</span>
                  </div>

                  <div className="down-li">
                    <span>Weekends:</span>{" "}
                    <span className="ml-2">10:00am - 06:00pm</span>
                  </div>
                </div>
              </li>
            </ul>
          </div>

          <div data-aos="zoom-in-down"  className="footer-part2 w-[33.3%] h-[273px] ">
            <h5 className="font-[Montserrat] text-[20px] cursor-pointer duration-700 text-[#FFF] tracking-wide font-bold hover:text-blue-600 hover:ml-2 ">
              QUICK LINKS
            </h5>
            <div className="line w-[25%] h-[2.4px] mt-4 "></div>

            <ul className="w-[250px] h-[156px]  flex mt-5  ">
              <div className="li-left w-[50%] h-156px text-white  flex flex-col justify-between">
                <li>
                  <a
                    className=" duration-700 hover:ml-2 hover:text-[#1e52e8]"
                    href=""
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className=" duration-700 hover:ml-2 hover:text-[#1e52e8]"
                    href=""
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    className=" duration-700 hover:ml-2 hover:text-[#1e52e8]"
                    href=""
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    className=" duration-700 hover:ml-2 hover:text-[#1e52e8]"
                    href=""
                  >
                    Events
                  </a>
                </li>
                <li>
                  <a
                    className=" duration-700 hover:ml-2 hover:text-[#1e52e8]"
                    href=""
                  >
                    Blog
                  </a>
                </li>
              </div>

              <div className="li-right w-[50%] h-[124px] text-white flex flex-col justify-between">
                <li>
                  <a
                    className=" duration-700 hover:ml-2 hover:text-[#1e52e8]"
                    href=""
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className=" duration-700 hover:ml-2 hover:text-[#1e52e8]"
                    href=""
                  >
                    Gallery
                  </a>
                </li>
                <li>
                  <a
                    className=" duration-700 hover:ml-2 hover:text-[#1e52e8]"
                    href=""
                  >
                    Testimonials
                  </a>
                </li>
                <li>
                  <a
                    className=" duration-700 hover:ml-2 hover:text-[#1e52e8]"
                    href=""
                  >
                    Contact Us
                  </a>
                </li>
              </div>
            </ul>
          </div>

          <div data-aos="zoom-in-down" className="footer-part3 w-[33.3%] h-[273px] ">
            <h5 className="font-[Montserrat] text-[20px] text-[#FFF] duration-700 cursor-pointer tracking-wide font-bold hover:text-blue-600 hover:ml-2">
              GET IN TOUCH
            </h5>
            <div className="line w-[25%] h-[2.4px] mt-4 "></div>
            <p className="part3-text w-[375px] h-[48px] duration-700 cursor-pointer   mt-5 hover:text-white">
              We are always ready to help you solve any issue you may have with
              your vehicle.
            </p>
            <div className="part3-buttons w-[356px] h-[69px] flex  items-center mt-5">
              <button className="footer-down-button bg-[#1e52e8] w-[212px] h-[59px] rounded-md duration-1000 border-none text-white hover:opacity-70 hover:bg-gradient-to-tr from-[#1e52e8] to-[#74a6fc]">
                GET A FREE QUOTE
              </button>
              <a
                href="/map"
                className="text-white underline underline-offset-8 ml-4 decoration-2 duration-700 hover:text-[#1e52e8]"
              >
                VIEW ON MAP
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-down w-full h-[138px] bg-[#2e2e2e] flex justify-center items-center">
        <div className="footer-down-container w-[80%] h-[78px] flex justify-center items-center ">
          <div className="down-part1 w-[33.3%] h-[78px] flex items-center ">
            <div className="payment w-[198px] h-[43px] flex justify-between items-center ">
              <img
                className="w-[45px] h-[15px]"
                src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/payment-1-45x15.png"
                alt=""
              />
              <img
                className="w-[46px] h-[28px]"
                src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/payment-2-46x28.png"
                alt=""
              />
              <img
                className="w-[62px] h-[17px]"
                src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/payment-3-62x17.png"
                alt=""
              />
            </div>
          </div>
          <div className="down-part2 w-[33.3%] h-[78px]  flex justify-center items-center gap-3">
            <a
              className="footer-icon w-[32px] h-[32px] rounded-full border-solid border  flex justify-center items-center"
              href=""
            >
              <FaFacebookF />
            </a>
            <a
              className="footer-icon w-[32px] h-[32px] rounded-full border-solid border flex justify-center items-center"
              href=""
            >
              <FaTwitter />
            </a>
            <a
              className="footer-icon w-[32px] h-[32px] rounded-full border-solid border flex justify-center items-center"
              href=""
            >
              <TiSocialInstagram />
            </a>
            <a
              className="footer-icon w-[32px] h-[32px] rounded-full border-solid border flex justify-center items-center"
              href=""
            >
              <IoLogoGoogleplus />
            </a>
            <a
              className="footer-icon w-[32px] h-[32px] rounded-full border-solid border flex justify-center items-center"
              href=""
            >
              <FaSkype />
            </a>
          </div>
          <div className="down-part3 w-[33.3%] h-[78px] flex justify-end items-center  ">
            <p className="part3-text  ">© 2024 Unit. All rights reserved.</p>{" "}
            <br />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
