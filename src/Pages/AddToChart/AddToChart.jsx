import { useDispatch, useSelector } from "react-redux";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import { MdDelete } from "react-icons/md";
import { deleteFromBasket } from "../../Redux/feature/basket/basketSlice";
import { useState } from "react";

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

  return (
    <>
      <Header />

      <section className="cart-sct my-3">
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
          basketItems.map((item, index) => {
            if (!item) {
              return null; // Skip invalid items
            }

            return (
              <div
                key={item.id}
                className="basket w-full h-auto flex justify-center items-center"
              >
                <div className="basket-container w-[95%] h-[90%] flex my-1">
                  <div className="basket-content w-[75%] h-auto rounded-md ">
                    <div className="basket-detail w-full h-auto flex items-center justify-between ">
                      <div className="img-div w-[500px] h-[270px] flex items-center ">
                        <img
                          className="w-[320px] h-[270px] object-contain"
                          src={item.image || "/path/to/default-image.jpg"} // Fallback image
                          alt={item.title || "Product"} // Fallback alt text
                        />
                        <p>{item.title}</p>
                      </div>

                      <div className="price w-[90px] h-[250px] flex items-center justify-center">
                        <span>${item.newPrice}</span>
                      </div>

                      <div className="quantity w-[100px] h-[250px] flex items-center justify-center">
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

                      <div className="total-price w-[100px] h-[250px] flex justify-center items-center">
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
            );
          })
        ) : (
          <p className="text-center my-4 text-2xl">No items in the cart.</p>
        )}
      </section>

      <Footer />
    </>
  );
};

export default AddToChart;
