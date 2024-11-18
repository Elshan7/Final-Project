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
      <div className="card-img w-[298px] h-[270px]">
        <img className="object-cover h-[270px] w-full" src={item.image} alt="sekil" />
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
        <span className="text-red-700 text-[18px] mt-2">{item.newPrice}</span>
        <button onClick={handleAddToCart} className="bg-[#E53E29] py-[10px] px-[30px] mt-3 text-white text-[15px]">Add to cart</button>
        <FaHeart onClick={handleAddToWishlist} className="mt-2 cursor-pointer" />
      </div>
    </div>
  );
};

export default Card;













// import "./cards.css"
// import { MdOutlineStar } from "react-icons/md";
// import { FaHeart } from "react-icons/fa";
// import {  useDispatch } from "react-redux";
// import { addToFavorite } from '../../../../Redux/feature/favorite/favoriteSlice';




// const Card = ({item}) => {

//     const dispatch = useDispatch();

//     const handleAddToWishlist = () => {
//         dispatch (addToFavorite(item));
//       };
    
      


//   return (
   
//         <div className="card-content w-[300px] h-[478px]  flex flex-col items-center justify-between">

//             <div className="card-img w-[298px] h-[270px]">
//                 <img className='object-cover h-[270px] w-full' src={item.image}  alt="sekil" />
//             </div>

//             <div className="card-body w-full h-[208px]  flex flex-col items-center">
//                 <div className="card-ratings w-[238px] h-[35px]  mt-2 flex justify-center items-center border-b-[#e5e5e5] border-b-2">
//                 <MdOutlineStar />
//                 <MdOutlineStar />
//                 <MdOutlineStar />
//                 <MdOutlineStar />
//                 <MdOutlineStar />
//                 </div>

//                 <p className='text-[#000] text-[18px] mt-3'>{item.title}</p>

//                 <span className='text-red-700 text-[18px] mt-2'>{item.price}</span>

//                 <button  className='bg-[#E53E29] py-[10px] px-[30px] mt-3 text-white text-[15px] '>Add to cart</button>
//                 <FaHeart onClick={handleAddToWishlist} className='mt-2 cursor-pointer' />
            

//             </div>

//         </div>
    

//   )
// }

// export default Card
