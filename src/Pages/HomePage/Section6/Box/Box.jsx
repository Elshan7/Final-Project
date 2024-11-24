
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TiSocialInstagram } from "react-icons/ti";
import { GrGooglePlus } from "react-icons/gr";

const Box = () => {
  return (
   <div className="box-content w-[370px] h-[526px]  flex flex-col justify-between items-center">
    <div className="  box-img w-[370px] h-[334px] bg-[#FFFFFF]">
        <img className='object-cover hover:scale-105 duration-500 ' src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/team-1-370x334.png" alt="" />
    </div>

    <div className="box-body w-full h-[160px]  flex flex-col justify-around">
        <h5 className='text-center font-[Montserrat] text-[20px] text-[#151515] font-bold tracking-wide'>John Smith</h5>
        <p className='text-center text-[#777777]'>John Smith is AutoPoint’s lead technician & the company’s initial founder.</p>
        <div className="social-icons flex justify-center gap-4 text-[20px]">
        <FaFacebookF />
        <FaTwitter />
        <TiSocialInstagram />
        <GrGooglePlus />

        </div>

    </div>

   </div>
  )
}

export default Box
