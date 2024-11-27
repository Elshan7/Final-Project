import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import { Rating } from "@mui/material";
import { FaShoppingBasket } from "react-icons/fa";
import { addToBasket } from "../../Redux/feature/basket/basketSlice";
import { useDispatch, useSelector } from "react-redux";
import Carousel from "../../components/Carousel/Carousel";

const DetailPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(0);

  const [addedToCart, setAddedToCart] = useState(false);
  const [buttonState, setButtonState] = useState(false);

  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket.items);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://66ffcd724da5bd237552095c.mockapi.io/products/${id}`
        );
        setProduct(response.data);
        setTotalPrice(Number(response.data.newPrice) || 0); // Ensure newPrice is a number
        setLoading(false);
      } catch (err) {
        console.error("Error fetching product:", err);
        setError("Failed to load product details.");
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleIncrement = () => {
    const newQuantity = quantity + 1;
    setQuantity(newQuantity);
    setTotalPrice(newQuantity * (Number(product?.newPrice) || 0));
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * (Number(product?.newPrice) || 0));
    }
  };

  const handleAddToCart = () => {
    if (basket.some((existingItem) => existingItem.id === product.id)) {
      alert("Item is already in the basket!");
      return;
    }

    dispatch(addToBasket(product));

    setButtonState(true);
    setAddedToCart(true);

    setTimeout(() => {
      setButtonState(false);
      setAddedToCart(false);
    }, 1000);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center text-2xl mt-5">
        Loading...
      </div>
    );
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <Header />

      <div className="container mx-auto p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-lg">
          <div className="left-side">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-[500px] rounded-lg object-cover"
            />
            <div className="detail-img grid grid-cols-3 gap-2">
              <div className="swiper-container col-span-3 mt-5">
                <Carousel />
              </div>
            </div>
          </div>

          <div className="right-side flex flex-col justify-evenly">
            <h1 className="text-3xl font-bold">{product.title}</h1>

            <div className="mt-4">
              <span className="text-xl text-black font-bold mr-3">Price:</span>
              <span className="text-xl line-through mr-2 opacity-30">
                ${product.oldPrice}
              </span>
              <span className="text-red-500 text-2xl">
                ${Number(product.newPrice).toFixed(2)}
              </span>
            </div>

            <p className="text-[16px] text-gray-600">
              <strong className="font-bold leading-8 tracking-wider text-black text-xl">
                Description:
              </strong>{" "}
              From the steering system to the front and rear suspension, a
              gas-powered vehicle is filled with a host of parts that come
              together to power your car, truck or SUV down the road. While it
              may feel like a foreign language, having a working understanding
              of how the steering and suspension systems relate to the other
              parts of your vehicle is extremely helpful in visualizing how your
              vehicle functions.
            </p>

            <div className="small-details flex flex-col gap-4">
              <p className="text-md">
                <strong className="mr-2 text-xl">Category:</strong>{" "}
                {product.category}
              </p>

              <p>
                <strong className="mr-2 text-xl">Tags:</strong> Car Details, Car
                Services
              </p>

              <p className="text-xl font-bold flex items-center gap-2">
                Rating:
                <Rating />
              </p>
            </div>

            <div className="flex items-center space-x-4 mt-6">
              <div className="flex items-center border w-44 h-12 justify-center rounded-lg">
                <button
                  onClick={handleDecrement}
                  className="px-4 py-2 hover:bg-gray-100"
                >
                  -
                </button>
                <input
                  type="text"
                  value={quantity}
                  readOnly
                  className="w-12 text-center border-l border-r"
                />
                <button
                  onClick={handleIncrement}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
                >
                  +
                </button>
              </div>

              <div className="text-lg">
                <strong className="text-xl mr-2">Total Price:</strong>{" "}
                <span className="text-red-500">
                  ${Number(totalPrice).toFixed(2)}
                </span>
              </div>
            </div>

            <div className="btn-down">
              <button
                onClick={handleAddToCart}
                className={`flex justify-center items-center w-56 h-14 text-xl text-white font-semibold rounded-lg transition-all ${
                  buttonState ? "bg-green-500" : "bg-red-500 hover:bg-gray-400"
                }`}
              >
                {addedToCart ? <FaShoppingBasket /> : "Add to cart"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetailPage;











// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";
// import Header from "../HomePage/Header/Header";
// import Footer from "../HomePage/Footer/Footer";
// import { Rating } from "@mui/material";
// import "../../components/Rating/Rating";
// import { FaShoppingBasket } from "react-icons/fa";
// import { addToBasket } from "../../Redux/feature/basket/basketSlice";
// import { useDispatch, useSelector } from "react-redux";
// import Carousel from "../../components/Carousel/Carousel";

// const DetailPage = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const [loading, setLoading] = useState(true);

//   const [error, setError] = useState(null);

//   const [quantity, setQuantity] = useState(1);
//   const [totalPrice, setTotalPrice] = useState(0);

//   const [addedToCart, setAddedToCart] = useState(false);
//   const [buttonState, setButtonState] = useState(false);

//   const dispatch = useDispatch();
//   const basket = useSelector((state) => state.basket.items);

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         setLoading(true);
//         const response = await axios.get(
//           `https://66ffcd724da5bd237552095c.mockapi.io/products/${id}`
//         );
//         setProduct(response.data);
//         setTotalPrice(response.data.newPrice);
//         setLoading(false);
//       } catch (err) {
//         console.error("Error fetching product:", err);
//         setError("Failed to load product details.");
//         setLoading(false);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   const handleIncrement = () => {
//     const newQuantity = quantity + 1;
//     setQuantity(newQuantity);
//     setTotalPrice(newQuantity * product.newPrice);
//   };

//   const handleDecrement = () => {
//     if (quantity > 1) {
//       const newQuantity = quantity - 1;
//       setQuantity(newQuantity);
//       setTotalPrice(newQuantity * product.newPrice);
//     }
//   };

//   const handleAddToCart = () => {
//     if (basket.some((existingItem) => existingItem.id === product.id)) {
//       alert("Item is already in the basket!");
//       return;
//     }

//     dispatch(addToBasket(product));

//     setButtonState(true);
//     setAddedToCart(true);

//     setTimeout(() => {
//       setButtonState(false);
//       setAddedToCart(false);
//     }, 1000);
//   };

//   if (loading) {
//     return (
//       <div className="flex justify-center items-center text-2xl mt-5">
//         Loading...
//       </div>
//     );
//   }

//   if (error) {
//     return <div className="text-red-500">{error}</div>;
//   }

//   return (
//     <>
//       <Header />

//       <div className="container mx-auto p-8 ">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-lg">
//           <div className="left-side ">
//             <img
//               src={product.image}
//               alt={product.title}
//               className="w-full h-[500px] rounded-lg object-cover "
//             />

//             <div className="detail-img grid grid-cols-3 gap-2  ">
          
//       <div className="swiper-container col-span-3 mt-5"> 
//     <Carousel />
//   </div>
//             </div>
//           </div>

//           <div className="right-side  flex flex-col justify-evenly ">
//             <h1 className="text-3xl font-bold">{product.title}</h1>

//             <div className="mt-4">
//               <span className="text-xl text-black font-bold mr-3">Price:</span>
//               <span className="text-xl line-through mr-2 opacity-30">
//                 ${product.oldPrice}
//               </span>
//               <span className="text-red-500 text-2xl">${product.newPrice}</span>
//             </div>

//             <p className=" text-[16px] text-gray-600">
//               <strong className="font-bold leading-8 tracking-wider text-black text-xl">
//                 Description :
//               </strong>{" "}
//               From the steering system to the front and rear suspension, a
//               gas-powered vehicle is filled with a host of parts that come
//               together to power your car, truck or SUV down the road. While it
//               may feel like a foreign language, having a working understanding
//               of how the steering and suspension systems relate to the other
//               parts of your vehicle is extremely helpful in visualizing how your
//               vehicle functions.
//             </p>

//             <div className="small-details flex flex-col gap-4">
//               <p className="text-md">
//                 <strong className="mr-2 text-xl">Category:</strong>{" "}
//                 {product.category}
//               </p>

//               <p>
//                 <strong className="mr-2 text-xl">Tags:</strong> Car Details, Car
//                 Services
//               </p>

//               <p className="text-xl font-bold flex items-center gap-2">
//                 Rating:
//                 <Rating />
//               </p>
//             </div>

//             <div className="flex items-center space-x-4 mt-6">
//               <div className="flex items-center border w-44 h-12 justify-center rounded-lg ">
//                 <button
//                   onClick={handleDecrement}
//                   className="px-4 py-2   hover:bg-gray-100"
//                 >
//                   -
//                 </button>
//                 <input
//                   type="text"
//                   value={quantity}
//                   readOnly
//                   className="w-12 text-center border-l border-r"
//                 />
//                 <button
//                   onClick={handleIncrement}
//                   className="px-4 py-2 text-gray-600 hover:bg-gray-100"
//                 >
//                   +
//                 </button>
//               </div>

//               <div className="text-lg">
//                 <strong className="text-xl mr-2">Total Price:</strong>{" "}
//                 <span className="text-red-500">${totalPrice.toFixed(2)}</span>
//               </div>
//             </div>

//             <div className="btn-down">
//               <button
//                 onClick={handleAddToCart}
//                 className={`flex justify-center items-center w-56 h-14 text-xl text-white font-semibold rounded-lg transition-all ${
//                   buttonState ? "bg-green-500" : "bg-red-500 hover:bg-gray-400"
//                 }`}
//               >
//                 {addedToCart ? <FaShoppingBasket /> : "Add to cart"}
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default DetailPage;
