import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Header from "../HomePage/Header/Header";
import Footer from "../HomePage/Footer/Footer";
import { Rating } from "@mui/material";
import "../../components/Rating/Rating";
import { FaShoppingBasket } from "react-icons/fa";
import { addToBasket } from "../../Redux/feature/basket/basketSlice";
import { useDispatch, useSelector } from "react-redux";

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
        setTotalPrice(response.data.newPrice); 
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
    setTotalPrice(newQuantity * product.newPrice); 
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      const newQuantity = quantity - 1;
      setQuantity(newQuantity);
      setTotalPrice(newQuantity * product.newPrice); 
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
    return <div className="flex justify-center items-center text-2xl">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  return (
    <>
      <Header />

      <div className="container mx-auto p-8 bg-gray-100">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-6 rounded-lg shadow-md">
          {/* Left: Product Image */}
          <img
            src={product.image}
            alt={product.title}
            className="w-full h-auto rounded-lg"
          />

          {/* Right: Product Details */}
          <div>
            <h1 className="text-3xl font-bold">{product.title}</h1>
            <div className="mt-4">
              <span className="text-2xl line-through mr-2 opacity-30">
                ${product.oldPrice}
              </span>
              <span className="text-red-500 text-3xl">${product.newPrice}</span>
            </div>
            <p className="mt-4 text-gray-600">
              From the steering system to the front and rear suspension, a
              gas-powered vehicle is filled with a host of parts that come
              together to power your car, truck or SUV down the road. While it
              may feel like a foreign language, having a working understanding
              of how the steering and suspension systems relate to the other
              parts of your vehicle is extremely helpful in visualizing how your
              vehicle functions.
            </p>
            <p className="mt-2">
              <strong className="mr-2">Category:</strong> {product.category}
            </p>
            <p>
              <strong className="mr-2">Tags:</strong> Car Details, Car Services
            </p>

            <Rating/>

            {/* Quantity and Total Price */}
            <div className="flex items-center space-x-4 mt-6">
              {/* Quantity Controls */}
              <div className="flex items-center border rounded-lg">
                <button
                  onClick={handleDecrement}
                  className="px-4 py-2 text-gray-600 hover:bg-gray-100"
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

              {/* Total Price */}
              <div className="text-lg">
                <strong>Total Price:</strong>{" "}
                <span className="text-red-500">${totalPrice.toFixed(2)}</span>
              </div>
            </div>

            {/* Add to Cart Button */}

            <button
              onClick={handleAddToCart}
              className={`px-6 py-2 mt-4 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 ${
                buttonState ? "bg-green-500" : "bg-[#E53E29]"
              } transition-all`}
            >
              {addedToCart ? <FaShoppingBasket /> : "Add to cart"}
            </button>

          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DetailPage;














