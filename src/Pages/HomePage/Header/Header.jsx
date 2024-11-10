import React from 'react'
import "./header.css"
import { MdLocationPin } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { FaRegUser } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartBold } from "react-icons/pi";

const Header = () => {
  return (
    <header className='w-full h-[230px] bg-[#FFFFFF] flex flex-col items-center relative '>

     <div className="header-up w-full h-[54px] bg-[#343434] flex justify-center items-center ">
        <div className="nav-up w-[80%] h-[48px] flex justify-between items-center">
          <p className='nav-up-text'>Monday - Friday: 08AM-06PM</p>
        </div>
     </div>

     <div className="header-mid w-full h-[135px] flex justify-center items-center border-b-2 ">
      <div className="nav-mid w-[80%] h-[135x]  flex justify-between items-center">
        <div className="logo">
          <img className='w-[157px] h-[50px]' src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/logo-default-314x100.png" alt="" />
        </div>

        <div className="nav-mid-text w-[563px] h-[58px]  flex ">

          <div className="left-mid w-[313px] h-[58px]  flex">
          <MdLocationPin className='w-[40.75px] h-[40px] text-[#cfd0d0] mr-1.5 mt-1' />
          <div className="unit-body w-[225px] h-[58px]">
          <a href="" className='text-[15px] text-[#151515]'>523 Sylvan Ave, 5th Floor
            <br/>
            Mountain View, CA 94041 USA
          </a>
          </div>

          
          </div>

          <div className="right-mid w-[250px] h-58px flex justify-end  ">
          <MdLocalPhone className='w-[40.75px] h-[40px] text-[#cfd0d0] mr-3 mt-1'/>
          <div className="unit-body2 ">
            <a href="tel:# text-[15px] text-[#151515]">+1 (844) 123 456 78</a>
            <br />
            <a href="mailto:# text-[15px] text-[#151515]">info@demolink.org</a>
          </div>

          </div>

        </div>

      </div>

     </div>

     <div className="header-down w-[80%] h-[64px] bg-[#343434]">
      <nav className='flex justify-between items-center'>
        <ul className='flex justify-around items-center w-[555px] h-[64px] text-[white] '>
          <li><a className='tracking-wider text-[#4675FF]' href="">HOME</a></li>
          <li><a className='tracking-wider duration-500 hover:text-[#4675FF]' href="">PAGES</a></li>
          <li><a className='tracking-wider duration-500 hover:text-[#4675FF]' href="">SHOP</a></li>
          <li><a className='tracking-wider duration-500 hover:text-[#4675FF]' href="">GALLERY</a></li>
          <li><a className='tracking-wider duration-500 hover:text-[#4675FF]' href="">CONTACT US</a></li>
        </ul>

        <div className="icons w-[130px] h-[64px]  flex items-center justify-around text-[white] ">
        <FaRegUser className='text-[22px] hover:cursor-pointer ' />
        <IoSearch className='text-[22px] hover:cursor-pointer' />
        <PiShoppingCartBold className='text-[22px] hover:cursor-pointer'/>

        </div>
      </nav>

     </div>

    </header>
  )
}

export default Header

