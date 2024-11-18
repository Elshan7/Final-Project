import React from 'react'

const Sample = () => {
  return (
    <div className='basket w-full h-auto bg-slate-300 flex justify-center items-center'>
        <div className="basket-container w-[95%] h-[90%] bg-slate-400">
            <h2 className='text-[30px] font-bold mb-5'>Shopping bag</h2>
            <div className="basket-content w-[70%] h-auto bg-slate-100 rounded-md ">
                <div className="basket-title w-full h-[30px] bg-orange-200">
                    <ul className='flex justify-between w-full'>
                        <li className='w-[45%] bg-red-400'><a href="">Product</a></li>
                        <li className='w-[90px]'><a href="">Price</a></li>
                        <li className='w-[100px]'><a href="">Quantity</a></li>
                        <li className='w-[100px] '><a href="">Total Price</a></li>
                    </ul>
                </div>

                <div className="basket-detail w-full h-auto bg-lime-400 flex items-center justify-between">
                   <div className="img-div w-[500px] h-[270px] bg-slate-500 flex items-center ">
                   <img className='w-[320px] h-[270px]' src="" alt="" />
                   <p>{item.title}</p>
                   </div>

                   <div className="price w-[90px] h-[250px] bg-slate-400 flex items-center justify-center">
                    <span>100$</span>
                   </div>

                   <div className="quantity w-[100px] h-[250px] bg-stone-400 flex items-center justify-center">
                    <button className='border w-5 h-5 flex items-center justify-center'>-</button>
                    <span className='mx-2'>2</span>
                    <button className='border w-5 h-5 flex items-center justify-center'>+</button>
                   </div>

                   <div className="total-price w-[100px] h-[250px] bg-slate-300 flex justify-center items-center">
                    <span>{item.newPrice}</span>
                   </div>

                   <div className="delete-icon">delete</div>
                </div>
            </div>

        </div>
      
    </div>
  )
}

export default Sample
