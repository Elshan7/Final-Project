import { useDispatch, useSelector } from 'react-redux';
import Header from '../HomePage/Header/Header';
import Footer from '../HomePage/Footer/Footer';
import { MdOutlineStar } from 'react-icons/md';
import { MdDelete } from "react-icons/md";
import { deleteFromFavorite } from '../../Redux/feature/favorite/favoriteSlice';

const Favorite = () => {
    const wishListItems = useSelector((state) => state.favorite.items);
    const dispatch = useDispatch();

    const removeWishlist = (item) => {
        dispatch(deleteFromFavorite(item));
    };

    return (
        <>
            <Header />

           <section className='fav-sct  h-auto flex justify-center items-center m-4 bg-slate-100'>

          <div className="container-fav w-[90%] h-auto  flex flex-wrap gap-6">

          {wishListItems.length > 0 ? (
                wishListItems.map((item) => (
                    <div key={item.id} className="card-content w-[300px] h-[478px] flex flex-col items-center justify-between">
                        <div className="card-img w-[298px] h-[270px]">
                            <img className='object-cover h-[270px] w-full' src={item.image} alt="sekil" />
                        </div>

                        <div className="card-body  w-full h-[208px] flex flex-col items-center">
                            <div className="card-ratings w-[238px] h-[35px] mt-2 flex justify-center items-center border-b-[#e5e5e5] border-b-2">
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                                <MdOutlineStar />
                            </div>

                            <p className='text-[#000] text-[18px] mt-3'>{item.title}</p>
                            <span className='text-red-700 text-[18px] mt-2'>{item.price}</span>

                            <MdDelete className='text-[24px] duration-500 mt-2 cursor-pointer hover:text-red-600' onClick={() => removeWishlist(item)} />
                        </div>
                    </div>
                ))
            ) : (
                <p>No items in your favorites list</p>
            )}


          </div>

           </section>

            <Footer />
        </>
    );
};

export default Favorite;














// import { useDispatch, useSelector } from 'react-redux';
// import Header from '../HomePage/Header/Header';
// import Footer from '../HomePage/Footer/Footer';
// import { MdOutlineStar } from 'react-icons/md';
// import { MdDelete } from "react-icons/md";
// import { deleteFromFavorite } from '../../Redux/feature/favorite/favoriteSlice';

// const Favorite = ({item}) => {

//     const wishListItems = useSelector((state) => state.favorite.items);

//     const dispatch = useDispatch();

//     const removeWishlist = () => {
//         dispatch(deleteFromFavorite(item));
//       };


//   return (
//     <>

//     <Header/>

//        {wishListItems.length > 0 ? (
//         wishListItems.map((item) => (

//             <div key={item.id} item={item} className="card-content w-[300px] h-[478px]  flex flex-col items-center justify-between">

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
//                 <MdDelete className='mt-2 cursor-pointer' onClick={() => removeWishlist(item)} />
            

//             </div>

//         </div>


//         ))
//       ) : (
//         <p>No items in the basket</p>
//       )}

//       <Footer/>

//     </>
//   )
// }

// export default Favorite
