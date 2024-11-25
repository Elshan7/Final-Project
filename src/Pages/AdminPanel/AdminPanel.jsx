// import { useState, useEffect } from "react";
// import Sidebar from "../../components/SideBar/Sidebar";
// import { useDispatch, useSelector } from "react-redux";
// import { getProduct } from "../../Redux/feature/product/productSlice";
// import { MdDelete, MdEdit } from "react-icons/md";
// import NestedModal from "../../components/NestedModal/NestedModal"; // Import the NestedModal

// const AdminPanel = () => {
//   const [selectedPage, setSelectedPage] = useState("Dashboard");
//   const [selectedProduct, setSelectedProduct] = useState(null); // State to store the product to edit
//   const dispatch = useDispatch();
//   const { value = [] } = useSelector((state) => state.product);

//   // Fetch products when "All Products" page is selected
//   useEffect(() => {
//     if (selectedPage === "All Products") {
//       dispatch(getProduct());
//     }
//   }, [dispatch, selectedPage]);

//   const handleEditClick = (product) => {
//     setSelectedProduct(product); // Set the selected product to be edited
//   };

//   const renderContent = () => {
//     switch (selectedPage) {
//       case "Dashboard":
//         return <h1 className="text-3xl font-bold p-6 text-center">Welcome to the Dashboard</h1>;
//       case "All Products":
//         return (
//           <div className="p-6 w-full flex justify-center items-center flex-col gap-4">
//             <h1 className="text-3xl font-bold mb-6">ALL Products</h1>

//             <div className="mb-6 flex justify-center items-center w-[600px]">
//               <input
//                 type="text"
//                 placeholder="Please enter product name"
//                 className="p-2 w-[80%] border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-gray-300"
//               />
//               <button className="p-2 w-[20%] bg-black text-white rounded-r-md hover:bg-gray-800">
//                 Search
//               </button>
//             </div>

//             <div className="overflow-x-auto w-[60%]">
//               <table className="table-auto w-full border-collapse border border-gray-300">
//                 <thead>
//                   <tr>
//                     <th className="bg-black text-white px-4 py-2 border border-gray-300">
//                       ID
//                     </th>
//                     <th className="bg-black text-white px-4 py-2 border border-gray-300">
//                       Image
//                     </th>
//                     <th className="bg-black text-white px-4 py-2 border border-gray-300">
//                       Category
//                     </th>
//                     <th className="bg-black text-white px-4 py-2 border border-gray-300">
//                       Title
//                     </th>
//                     <th className="bg-black text-white px-4 py-2 border border-gray-300">
//                       Price
//                     </th>
//                     <th className="bg-black text-white px-4 py-2 border border-gray-300">
//                       Option
//                     </th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {value &&
//                     value.map((item) => (
//                       <tr key={item.id} className="text-center">
//                         <td className="px-4 py-2 border border-gray-300">
//                           {item.id}
//                         </td>
//                         <td className="px-4 py-2 border border-gray-300">
//                           <img
//                             src={item.image}
//                             alt={item.title}
//                             className="w-20 h-20 object-cover rounded-full"
//                           />
//                         </td>
//                         <td className="px-4 py-2 border border-gray-300">
//                           {item.category}
//                         </td>
//                         <td className="px-4 py-2 border border-gray-300">
//                           {item.title}
//                         </td>
//                         <td className="px-4 py-2 border border-gray-300">
//                           $ {item.newPrice}
//                         </td>
//                         <td className="px-4 py-2 border border-gray-300">
//                           <div className="text-black flex gap-3 justify-center items-center rounded-md">
//                             <MdDelete className="text-2xl duration-700 cursor-pointer hover:text-red-500" />
//                             <MdEdit
//                               className="text-2xl duration-700 cursor-pointer hover:text-blue-500"
//                               onClick={() => handleEditClick(item)} // Handle edit click
//                             />
//                           </div>
//                         </td>
//                       </tr>
//                     ))}
//                 </tbody>
//               </table>
//             </div>
//           </div>
//         );
//       default:
//         return <h1 className="text-3xl text-center font-bold p-6">Page Not Found</h1>;
//     }
//   };

//   return (
//     <div className="flex">
//       <Sidebar onMenuClick={setSelectedPage} />
//       <div className="w-full">{renderContent()}</div>

//       {/* Only show the NestedModal if there's a selected product to edit */}
//       {selectedProduct && (
//         <NestedModal
//           product={selectedProduct}
//           onClose={() => setSelectedProduct(null)} // Close modal and reset selected product
//         />
//       )}
//     </div>
//   );
// };

// export default AdminPanel;













import { useState } from "react";
import Sidebar from "../../components/SideBar/Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProduct } from "../../Redux/feature/product/productSlice";
import { MdDelete,  } from "react-icons/md";
import NestedModal from "../../components/NestedModal/NestedModal";

const AdminPanel = () => {
  const [selectedPage, setSelectedPage] = useState("Dashboard");
  const dispatch = useDispatch();
  const { value = [] } = useSelector((state) => state.product);

  useEffect(() => {
    if (selectedPage === "All Products") {
      dispatch(getProduct());
    }
  }, [dispatch, selectedPage]);

  const renderContent = () => {
    switch (selectedPage) {
      case "Dashboard":
        return <h1 className="text-3xl font-bold p-6 text-center">Welcome to the Dashboard</h1>;
      case "All Products":
        return (
          <div className="p-6 w-full flex justify-center items-center flex-col gap-4">
            <h1 className="text-3xl font-bold mb-6">ALL Products</h1>

            <div className="mb-6 flex justify-center items-center w-[600px]">
              <input
                type="text"
                placeholder="Please enter product name"
                className="p-2 w-[80%] border border-gray-300 rounded-l-md focus:outline-none focus:ring focus:ring-gray-300"
              />
              <button className="p-2 w-[20%] bg-black text-white rounded-r-md hover:bg-gray-800">
                Search
              </button>
            </div>

            <div className="overflow-x-auto w-[60%]">
              <table className="table-auto w-full border-collapse border border-gray-300">
                <thead>
                  <tr>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      ID
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Image
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Category
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Title
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Price
                    </th>
                    <th className="bg-black text-white px-4 py-2 border border-gray-300">
                      Option
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {value &&
                    value.map((item) => (
                      <tr key={item.id} className="text-center">
                        <td className="px-4 py-2 border border-gray-300">
                          {item.id}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-20 h-20 object-cover rounded-full"
                          />
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          {item.category}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          {item.title}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          $ {item.newPrice}
                        </td>
                        <td className="px-4 py-2 border border-gray-300">
                          <div className="text-black flex gap-3 justify-center items-center rounded-md">
                            <MdDelete className="text-2xl duration-700 cursor-pointer hover:text-red-500" />
                            <NestedModal item={item} />
                            
                          </div>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        );
      default:
        return <h1 className="text-3xl text-center font-bold p-6">Page Not Found</h1>;
    }
  };

  return (
    <div className="flex">
      <Sidebar onMenuClick={setSelectedPage} />
      <div className="w-full">{renderContent()}</div>
    </div>
  );
};

export default AdminPanel;


