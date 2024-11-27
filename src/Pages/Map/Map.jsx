import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import { RxDotFilled } from "react-icons/rx";
import { FaArrowRightLong } from "react-icons/fa6";

const Map = () => {
  return (
    <>

    <Header/>
      <div className="map-magaza w-full h-[680px] flex flex-col gap-3 justify-center items-center">

      <div className="tracking flex w-[90%] h-6   mt-2  ">
                <span className='flex items-center gap-2  text-sm font-semibold tracking-wider'><RxDotFilled className='font-bold text-black text-md' /> HOME <FaArrowRightLong className="text-gray-950 text-sm" /> MAP </span>
            </div>

        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1370972.154798971!2d47.51275921263635!3d40.48259829293837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4030873df9684fcd%3A0x44c7e8d98597a6f!2sKontakt%20%22Azadl%C4%B1q%20metrosu%22!5e0!3m2!1sen!2saz!4v1729423131014!5m2!1sen!2saz"
          
          height="600"
          className="map-iframe w-[90%] mt-3"
          title="Responsive google Map"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        >
        </iframe>

      </div>

      <Footer/>
    </>
  );
};

export default Map;
