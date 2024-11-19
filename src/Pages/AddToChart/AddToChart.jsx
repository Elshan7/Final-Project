
import { useDispatch, useSelector } from 'react-redux';
// import Card from '../HomePage/Section4/Card/Card';
import Header from '../HomePage/Header/Header';
import Footer from '../HomePage/Footer/Footer';
// import { MdOutlineStar } from 'react-icons/md';
import { MdDelete } from "react-icons/md";
import { deleteFromBasket } from '../../Redux/feature/basket/basketSlice';
import { useState } from 'react';



const AddToChart = () => {
  const basketItems = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  const handleDeleteFromCart = (item) => {
    dispatch(deleteFromBasket(item));
  };

  const [quantities, setQuantities] = useState(
    basketItems.map(() => 1) 
  );

  const handleIncrement = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((q, i) => (i === index ? q + 1 : q))
    );
  };

  const handleDecrement = (index) => {
    setQuantities((prevQuantities) =>
      prevQuantities.map((q, i) => (i === index && q > 1 ? q - 1 : q))
    );
  };

  return (
    <>
      <Header />

    <section className='cart-sct my-3'>

    <div className="basket-title w-full h-[40px]  flex justify-start bg-slate-300">

                  <ul className="flex justify-around w-[70%] ">

                    <li className="w-[300px]  flex justify-center items-center">
                      <a href="">Product</a>
                    </li>
                    <li className="w-[200px]  flex justify-center items-center">
                      <a href="">Short Description</a>
                    </li>
                    <li className="w-[100px]  flex justify-center items-center">
                      <a href="">Price</a>
                    </li>
                    <li className=" flex justify-center items-center w-[100px] ">
                      <a href="">Quantity</a>
                    </li>
                    <li className="flex justify-center items-center w-[100px]  ">
                      <a href="">Total Price</a>
                    </li>

                  </ul>
     </div>

    {basketItems.length > 0 ? (
        basketItems.map((item, index) => (
          <div
            key={item.id}
            className="basket w-full h-auto  flex justify-center items-center"
          >
            <div className="basket-container w-[95%] h-[90%]  flex my-1">

              <div className="basket-content w-[75%] h-auto  rounded-md ">

                <div className="basket-detail w-full h-auto  flex items-center justify-between ">
                  <div className="img-div w-[500px] h-[270px] flex items-center ">
                    <img
                      className="w-[320px] h-[270px] object-contain"
                      src={item.image}
                      alt=""
                    />
                    <p className=''>{item.title}</p>
                  </div>

                  <div className="price w-[90px] h-[250px]  flex items-center justify-center">
                    <span>${item.newPrice}</span>
                  </div>

                  <div className="quantity w-[100px] h-[250px]  flex items-center justify-center">
                    <button
                      onClick={() => handleDecrement(index)}
                      className="border w-5 h-5 flex items-center justify-center"
                    >
                      -
                    </button>
                    <span className="mx-2">{quantities[index]}</span>
                    <button
                      onClick={() => handleIncrement(index)}
                      className="border w-5 h-5 flex items-center justify-center"
                    >
                      +
                    </button>
                  </div>

                  <div className="total-price w-[100px] h-[250px]  flex justify-center items-center">
                    <span>
                      ${(item.newPrice * quantities[index]).toFixed(2)}
                    </span>
                  </div>

                  <MdDelete
                    onClick={() => handleDeleteFromCart(item)}
                    className="cursor-pointer duration-700 text-[25px] hover:text-red-500"
                  />
                </div>

              </div>
            </div>
          </div>
        ))
      ) : (
        <p>No items in the cart.</p>
      )}



    </section>

      <Footer/>
    </>
  );
};


export default AddToChart;




















// const AddToChart = () => {

//     const basketItems = useSelector((state) => state.basket.items);
//     const dispatch = useDispatch();

//     const handleDeleteFromCart =(item) => {
//       dispatch(deleteFromBasket(item));
//     };

//     const [count,setCount] = useState(1);

//     const increment = () => {
//       setCount(count + 1);
//     }

//     const decrement = () => {
//       if (count > 1) {
//         setCount(count - 1);
//       }
//     };


//   return (

   



//     <>
//     <Header/>

// {basketItems.length > 0 ? (
//         basketItems.map((item) => (




//           <div key={item.id}  className='basket w-full h-auto bg-slate-300 flex justify-center items-center'>
//           <div className="basket-container w-[95%] h-[90%] bg-slate-400">
       
//               <div className="basket-content w-[70%] h-auto bg-slate-100 rounded-md ">
//                   <div className="basket-title w-full h-[30px] bg-orange-200">
//                       <ul className='flex justify-between w-full'>
//                           <li className='w-[45%] bg-red-400'><a href="">Product</a></li>
//                           <li className='w-[90px]'><a href="">Price</a></li>
//                           <li className='w-[100px]'><a href="">Quantity</a></li>
//                           <li className='w-[100px] '><a href="">Total Price</a></li>
//                       </ul>
//                   </div>
  
//                   <div className="basket-detail w-full h-auto bg-lime-400 flex items-center justify-between">
//                      <div className="img-div w-[500px] h-[270px] bg-slate-500 flex items-center ">
//                      <img className='w-[320px] h-[270px] object-contain' src={item.image}  alt="" />
//                      <p>{item.title}</p>
//                      </div>
  
//                      <div className="price w-[90px] h-[250px] bg-slate-400 flex items-center justify-center">
//                       <span>100$</span>
//                      </div>
  
//                      <div className="quantity w-[100px] h-[250px] bg-stone-400 flex items-center justify-center">
//                       <button onClick={decrement} className='border w-5 h-5 flex items-center justify-center'>-</button>
//                       <span className='mx-2'>{count}</span>
//                       <button onClick={increment} className='border w-5 h-5 flex items-center justify-center'>+</button>
//                      </div>
  
//                      <div className="total-price w-[100px] h-[250px] bg-slate-300 flex justify-center items-center">
//                       <span>{item.newPrice}</span>
//                      </div>
  
//                      <MdDelete onClick={() => handleDeleteFromCart(item)} className='cursor-pointer' />
//                   </div>
//               </div>
  
//           </div>
        
//       </div>





//     //       <div key={item.id}  className="card-content w-[300px] h-[478px] flex flex-col items-center justify-between">
//     //   <div className="card-img w-[298px] h-[270px]">
//     //     <img className="object-cover h-[270px] w-full" src={item.image} alt="sekil" />
//     //   </div>

//     //   <div className="card-body w-full h-[208px] flex flex-col items-center">
//     //     <div className="card-ratings w-[238px] h-[35px] mt-2 flex justify-center items-center border-b-[#e5e5e5] border-b-2">
//     //       <MdOutlineStar />
//     //       <MdOutlineStar />
//     //       <MdOutlineStar />
//     //       <MdOutlineStar />
//     //       <MdOutlineStar />
//     //     </div>

//     //     <p className="text-[#000] text-[18px] mt-3">{item.title}</p>
//     //     <span className="text-red-700 text-[18px] mt-2">{item.price}</span>
//     //     <MdDelete onClick={() => handleDeleteFromCart(item)} className='text-[20px] cursor-pointer' />
//     //     {/* <button onClick={handleAddToCart} className="bg-[#E53E29] py-[10px] px-[30px] mt-3 text-white text-[15px]">Add to cart</button> */}
        
//     //   </div>
//     // </div>




//         ))
//       ) : (
//         <p>No items in the basket</p>
//       )}

//       <Footer/>
      
//     </>
//   )
// }

// export default AddToChart
