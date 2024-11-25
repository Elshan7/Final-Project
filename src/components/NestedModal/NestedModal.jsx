// import React, { useState } from "react";
// import Box from "@mui/material/Box";
// import Modal from "@mui/material/Modal";
// import Button from "@mui/material/Button";
// import { useDispatch } from "react-redux";
// import { updateProduct } from "../../Redux/feature/product/productSlice"; // Import the updateProduct action

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: 400,
//   bgcolor: "black",
//   border: "2px solid #000",
//   boxShadow: 24,
//   pt: 2,
//   px: 4,
//   pb: 3,
// };

// const NestedModal = ({ product, onClose }) => {
//   const [open, setOpen] = useState(false);
//   const [formData, setFormData] = useState({
//     title: product?.title || "",
//     category: product?.category || "",
//     price: product?.newPrice || "",
//     image: product?.image || "",
//   });

//   const dispatch = useDispatch();

//   const handleOpen = () => setOpen(true);
//   const handleClose = () => {
//     setOpen(false);
//     onClose();
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSave = () => {
//     const updatedProduct = {
//       id: product.id,
//       ...formData,
//     };
//     dispatch(updateProduct(updatedProduct)); // Dispatch the updateProduct action
//     handleClose();
//   };

//   return (
//     <React.Fragment>
//       <Button onClick={handleOpen}>Edit</Button>
//       <Modal open={open} onClose={handleClose}>
//         <Box sx={style}>
//           <div className="flex flex-col gap-4">
//             <input
//               type="text"
//               name="title"
//               value={formData.title}
//               onChange={handleChange}
//               placeholder="Title"
//               className="p-2 border rounded"
//             />
//             <input
//               type="text"
//               name="category"
//               value={formData.category}
//               onChange={handleChange}
//               placeholder="Category"
//               className="p-2 border rounded"
//             />
//             <input
//               type="text"
//               name="price"
//               value={formData.price}
//               onChange={handleChange}
//               placeholder="Price"
//               className="p-2 border rounded"
//             />
//             <input
//               type="text"
//               name="image"
//               value={formData.image}
//               onChange={handleChange}
//               placeholder="Image URL"
//               className="p-2 border rounded"
//             />
//             <Button variant="contained" color="primary" onClick={handleSave}>
//               Save
//             </Button>
//           </div>
//         </Box>
//       </Modal>
//     </React.Fragment>
//   );
// };

// export default NestedModal;










import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { MdEdit } from 'react-icons/md';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};



export default function NestedModal({item}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <Button onClick={handleOpen}>
      <MdEdit  className="text-2xl duration-700 cursor-pointer hover:text-red-500" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 450 }}>
         <div className="modul-title flex flex-col gap-2">
         <label className='text-xl text-white ' htmlFor="">Title:</label>
         <input type="text" value={item.title} className='shadow-md focus:shadow-lg rounded-xl w-80 h-7 border border-yellow-400' />
         </div>

         <div className="modul-category flex flex-col gap-2 mt-2">
         <label className='text-xl text-white ' htmlFor="">Category:</label>
         <input value={item.category} type="text" className='shadow-md focus:shadow-lg rounded-xl w-80 h-7 border border-yellow-400' />
         </div>


         <div className="modul-image flex flex-col gap-2 mt-2">
         <label className='text-xl text-white ' htmlFor="">Image:</label>
        <div className="sub-pic flex justify-center items-center ">
        <img  className='  items-center w-32 object-cover h-32 rounded-full' src={item.image} alt="sekil" />
        </div>
        <input type="text" className='mt-2 shadow-md focus:shadow-lg rounded-xl w-80 h-7 border border-yellow-400' />
         </div>

         <div className="modul-category flex flex-col gap-2 mt-4">
         <label className='text-xl text-white ' htmlFor="">Price:</label>
         <input value={item.newPrice} type="text" className='shadow-md focus:shadow-lg rounded-xl w-80 h-7 border border-yellow-400' />
         </div>

         <button className='text-white text-md w-32 h-10 bg-green-600 rounded-xl mt-4 mr-4'>SAVE</button>


        </Box>
      </Modal>
    </div>
  );
}
