import  { useState } from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";
import { MdEdit } from "react-icons/md";
import { updateUser } from "../../Redux/feature/login/loginSlice";
 

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "black",
  border: "2px solid #000",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function UserModal({ item }) {
  const [open, setOpen] = useState(false);
  const [fullname, setFullname] = useState(item.fullname);
  const [email, setEmail] = useState(item.email);
  const [username, setUsername] = useState(item.username);
  const [image, setImage] = useState(item.image);

  const dispatch = useDispatch();

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSave = () => {
    const updatedUser = {
      id: item.id, 
      fullname,
      email,
      username: username, 
      image,
    };

  
    dispatch(updateUser(updatedUser))
      .then(() => handleClose()) 
      .catch((error) => console.error("Failed to update user:", error));
  };

  return (
    <div>
      <Button onClick={handleOpen}>
        <MdEdit className="text-2xl duration-700 cursor-pointer hover:text-red-500" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 450 }}>
          <div className="modal-title flex flex-col gap-2">
            <label className="text-xl text-white" htmlFor="">
              Fullname:
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullname(e.target.value)}
              className="shadow-md focus:shadow-lg rounded-xl w-80 h-7 border border-yellow-400"
            />
          </div>

          <div className="modal-category flex flex-col gap-2 mt-2">
            <label className="text-xl text-white" htmlFor="">
              Email:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-md focus:shadow-lg rounded-xl w-80 h-7 border border-yellow-400"
            />
          </div>

          <div className="modal-image flex flex-col gap-2 mt-2">
            <label className="text-xl text-white" htmlFor="">
              Image:
            </label>
            <div className="sub-pic flex justify-center items-center">
              <img
                className="items-center w-32 object-cover h-32 rounded-full"
                src={image}
                alt={fullname || "user"}
              />
            </div>
            <input
              type="text"
              value={image}
              onChange={(e) => setImage(e.target.value)}
              className="mt-2 shadow-md focus:shadow-lg rounded-xl w-80 h-7 border border-yellow-400"
            />
          </div>

          <div className="modal-price flex flex-col gap-2 mt-4">
            <label className="text-xl text-white" htmlFor="">
              Username:
            </label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="shadow-md focus:shadow-lg rounded-xl w-80 h-7 border border-yellow-400"
            />
          </div>

          <button
            className="text-white text-md w-32 h-10 bg-green-600 rounded-xl mt-4 mr-4"
            onClick={handleSave}
          >
            SAVE
          </button>
        </Box>
      </Modal>
    </div>
  );
}