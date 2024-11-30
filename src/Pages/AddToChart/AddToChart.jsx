import { useDispatch, useSelector } from "react-redux";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import { MdDelete } from "react-icons/md";
import { deleteFromBasket } from "../../Redux/feature/basket/basketSlice";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { RxDotFilled } from "react-icons/rx";
import "./AddToChart.css"

const AddToChart = () => {
  const basketItems = useSelector((state) => state.basket.items);
  const dispatch = useDispatch();

  const handleDeleteFromCart = (item) => {
    dispatch(deleteFromBasket(item));
  };

  const [quantities, setQuantities] = useState(basketItems.map(() => 1));

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



  const calculateTotal = () => {
    return basketItems.reduce((total, item, index) => {
      return total + item.newPrice * quantities[index];
    }, 0);
  };




  return (
    <>
      <Header />

      <div className="tracking flex w-full h-6  mt-2 ">
                <span className='flex items-center gap-2 ml-4 text-sm font-semibold tracking-wider'><RxDotFilled className='font-bold text-black text-md' /> HOME <FaArrowRightLong className="text-gray-950 text-sm" /> AddToCart </span>
            </div>


      <section className="cart-sct my-3">
        <div className="basket-title w-full h-[40px]  flex justify-start bg-slate-300">
          <ul className="baskett-ul flex justify-around w-[80%]  ">
            <li className="w-[300px]  flex justify-center items-center  ">
              <a  className="cart-a text-xl font-semibold flex items-center" href=""><RxDotFilled />Product</a>
            </li>
            <li className="w-[150px]  flex justify-center items-center">
              <a className="cart-a text-xl font-semibold flex items-center" href=""><RxDotFilled />Title</a>
            </li>
            <li className="w-[150px]  flex justify-center items-center">
              <a className="cart-a text-xl font-semibold flex items-center" href=""><RxDotFilled />Price</a>
            </li>
            <li className="  flex justify-center items-center w-[150px] ">
              <a className=" cart-atext-xl font-semibold flex items-center" href=""><RxDotFilled />Quantity</a>
            </li>
            <li className="flex justify-center items-center w-[100px]  ">
              <a className=" cart-a cart-a text-xl font-semibold flex items-center" href=""><RxDotFilled />SUM</a>
            </li>
          </ul>
        </div>

        {basketItems.length > 0 ? (
          basketItems.map((item, index) => {
            if (!item) {
              return null; 
            }

            return (
              <div
                key={item.id}
                className="basket w-full h-auto  flex justify-center items-center shadow-md "
              >
                <div className="basket-container w-[95%] h-[90%] flex my-1">
                  <div className="basket-content  w-[85%] h-auto rounded-md ">
                    <div className="basket-detail w-full h-auto flex items-center justify-between  ">

                      <div className="img-div w-[323px] h-[270px] flex justify-around items-center  ">
                        <img
                          className="basketimg w-[320px] h-[270px] object-contain"
                          src={item.image || "/path/to/default-image.jpg"} 
                          alt={item.title || "Product"} 
                        />
                        
                      </div>

                      <div className="title w-[200px] h-[270px]  flex items-center">
                      <p className="basket-titlee text-xl">{item.title}</p>
                      </div>

                      <div className="price w-[110px] h-[250px] flex items-center justify-center   ">
                        <span className=" text-xl">$ {item.newPrice}</span>
                      </div>

                      <div className=" text-2xl quantity  w-[200px] h-[250px] flex items-center justify-center">
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

                      <div className="text-xl total-price w-[80px] h-[250px] flex justify-center items-center">
                        <span>
                          ${(item.newPrice * quantities[index]).toFixed(2)}
                        </span>
                      </div>

                      <MdDelete
                        onClick={() => handleDeleteFromCart(item)}
                        className="w-8 ml-5 h-13 cursor-pointer duration-700 text-[28px] hover:text-red-500"
                      />

                    </div>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <p className="text-center my-4 text-2xl">No items in the cart.</p>
        )}

        
        {basketItems.length > 0 && (
          <div className="total-amount  w-[80%] flex justify-end my-5 ">
            <div className="text-xl bg-slate-200  font-semibold flex justify-center items-center  w-80">
              <span className="mr-3  text-2xl">Total Amount: </span>
              <span className="text-2xl">${calculateTotal().toFixed(2)}</span>
            </div>
          </div>
        )}

      </section>

      <Footer />
    </>
  );
};

export default AddToChart;
