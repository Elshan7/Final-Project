import React from 'react'
import "./cards.css"
import { MdOutlineStar } from "react-icons/md";

const Card = () => {
  return (
   
        <div className="card-content w-[300px] h-[478px]  flex flex-col items-center justify-between">

            <div className="card-img w-[298px] h-[270px]">
                <img className='object-cover h-[270px] w-full' src="https://autopart.ththeme.net/wp-content/uploads/2021/10//product-15-350x350.jpg" alt="" />
            </div>

            <div className="card-body w-full h-[208px]  flex flex-col items-center">
                <div className="card-ratings w-[238px] h-[35px]  mt-2 flex justify-center items-center border-b-[#e5e5e5] border-b-2">
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                <MdOutlineStar />
                </div>

                <p className='text-[#000] text-[18px] mt-3'>Wheels KM651 Slide</p>

                <span className='text-red-700 text-[18px] mt-2'>$196.00</span>

                <button className='bg-[#E53E29] py-[10px] px-[30px] mt-3 text-white text-[15px] '>Add to cart</button>
            

            </div>

        </div>
    

  )
}

export default Card
