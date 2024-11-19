import "./cards.css";
import { MdOutlineStar } from "react-icons/md";

import { FaHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToFavorite } from "../../../../Redux/feature/favorite/favoriteSlice";
import { addToBasket } from "../../../../Redux/feature/basket/basketSlice";


const Card = ({ item }) => {
  const dispatch = useDispatch();

  const handleAddToWishlist = () => {
    console.log("Adding to favorite:", item); 
    dispatch(addToFavorite(item));
  };

  const handleAddToCart = () => {
    dispatch(addToBasket(item));
  }

  return (


    <div className="card-content w-[300px] h-[478px] flex flex-col items-center justify-between">
  <div className="card-img w-[298px] h-[270px] relative">
    <img className="object-cover h-[270px] w-full cursor-pointer" src={item.image} alt="sekil" />
    
    <FaHeart onClick={handleAddToWishlist} className="heart-icon" />
    
  </div>

  <div className="card-body w-full h-[208px] flex flex-col items-center">
    <div className="card-ratings w-[238px] h-[35px] mt-2 flex justify-center items-center border-b-[#e5e5e5] border-b-2">
      <MdOutlineStar />
      <MdOutlineStar />
      <MdOutlineStar />
      <MdOutlineStar />
      <MdOutlineStar />
    </div>
    <p className="text-[#000] text-[18px] mt-3">{item.title}</p>
    <div className="prices flex gap-3">
    <span className=" text-[18px] mt-2 line-through opacity-40">{item.oldPrice}$</span>
    <span className=" text-[18px] mt-2">{item.newPrice}$</span>
    
    </div>
    <button onClick={handleAddToCart} className="bg-[#E53E29] py-[10px] px-[30px] mt-3 text-white text-[15px]">Add to cart</button>
  </div>
</div>




  );
};

export default Card;







