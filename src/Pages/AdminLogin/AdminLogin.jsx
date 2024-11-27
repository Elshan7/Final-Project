import { useEffect, useState } from "react";
import "./AdminLogin.css";
import { FaRegUser, FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Footer from "../HomePage/Footer/Footer";
import Header from "../HomePage/Header/Header";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../../Redux/feature/login/loginSlice";

const AdminLogin = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, error, userInfo } = useSelector((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (username === "admin" && password === "elshan2831") {
      navigate("/admin");
      return;
    }

    dispatch(loginUser({ username, password }));
  };

  useEffect(() => {
    if (userInfo) {
      navigate(`/${userInfo.id}`);
    }
  }, [userInfo, navigate]);

  return (
    <>
      <Header />

      <section
        id="adminlogin"
        className="adminlogin-sct w-full h-lvh bg-center bg-cover flex justify-center items-center"
      >
        <div className="admincontainer w-[500px] h-[600px] bg-black rounded-lg flex justify-center items-center">
          <form
            action=""
            onSubmit={handleSubmit}
            className="w-[390px] h-[500px]"
          >
            <h2 className="w-[390px] h-[70px] text-center leading-5 text-[39px] tracking-wide text-white font-serif">
              Login
            </h2>
            <div className="input-group w-[390px] h-[70px]">
              <label
                className="text-[14px]  tracking-wide text-white"
                htmlFor=""
              >
                Username
              </label>

              <div className="w-[390px] h-[50px] flex items-center outline-none border-b-2 border-[#adadad]">
                <div className="w-[40px] h-[50px] flex justify-center items-center bg-white border-r border-gray-500">
                  <FaRegUser className="text-[#adadad] text-[16px]" />
                </div>
                <input
                  className="w-[350px] h-[50px] text-[#adadad] text-[16px] border-none outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Type your username"
                />
              </div>
            </div>

            <div className="input-group w-[390px] h-[70px] second-input outline-none mt-7">
              <label
                className="text-[14px]  tracking-wide text-white"
                htmlFor=""
              >
                Password
              </label>

              <div className="w-[390px] h-[50px] flex items-center outline-none border-b-2 border-[#adadad]">
                <div className="w-[40px] h-[50px] flex justify-center items-center bg-white border-r border-gray-500">
                  <MdOutlineLock className="text-[#adadad] text-[16px]" />
                </div>
                <input
                  className="w-[350px] h-[50px] text-[#adadad] text-[16px] border-none outline-none"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="Type your password"
                />
              </div>
            </div>

            {error && <p className="input-error text-red-600 mt-3">{error}</p>}

            <div className="forgot w-[390px] h-[50px] flex justify-end">
              <a
                className="pt-3 text-[14px] text-white duration-1000 hover:text-[#007bff]"
                href=""
              >
                Forgot password?
              </a>
            </div>

            <button
              disabled={loading}
              className="w-[390px] h-[50px] bg-slate-400 rounded-3xl text-white text-[16px] border-none cursor-pointer"
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
            <div className="text1 w-[390px] h-[50px] text-white flex justify-center items-end text-[14px]">
              Or Sign Up Using
            </div>
            <div className="icons w-[390px] h-[50px] flex justify-center items-center gap-3 mt-4">
              <a href="" className="bg-[#3b5998]">
                <FaFacebookF className="facebook" />
              </a>
              <a href="" className="bg-[#1da1f2]">
                {" "}
                <FaTwitter className="twitter" />
              </a>
              <a href="" className="bg-[#ea4335]">
                {" "}
                <FaGoogle className="twitter" />
              </a>
            </div>

            <div
              className="w-[390px] h-[65px] flex justify-center items-end"
              onClick={() => navigate("/signUp")}
            >
              <a className="text-white" href="">
                SIGN UP
              </a>
            </div>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default AdminLogin;
























// import  { useEffect, useState } from 'react';
// import './AdminLogin.css';
// import { FaRegUser, FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa6";
// import { MdOutlineLock } from "react-icons/md";
// import { useNavigate } from 'react-router-dom';
// import Footer from '../HomePage/Footer/Footer';
// import Header from '../HomePage/Header/Header';
// import { useDispatch, useSelector } from 'react-redux';
// import { loginUser } from '../../Redux/feature/login/loginSlice';


// const AdminLogin = () => {
//     const navigate = useNavigate();
//     const dispatch = useDispatch();


//     const [username, setUsername] = useState('');
//     const [password, setPassword] = useState('');
    

//     const { loading, error, userInfo } = useSelector((state) => state.login);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         dispatch(loginUser({ username, password })); 
//     };


//     useEffect(() => {
//         if (userInfo) {
//           navigate(`/${userInfo.id}`);  
//         }
//       }, [userInfo, navigate]);
      
    



//     return (

//       <>
//       <Header/>   

//         <section id='adminlogin' className='adminlogin-sct w-full h-lvh bg-center bg-cover flex justify-center items-center '>
//             <div className='admincontainer w-[500px] h-[600px] bg-black rounded-lg flex justify-center items-center'>
//                 <form action="" onSubmit={handleSubmit} className='w-[390px] h-[500px]'>
//                     <h2 className='w-[390px] h-[70px] text-center leading-5 text-[39px] tracking-wide text-white font-serif'>Login</h2>
//                     <div className="input-group w-[390px] h-[70px]">
//                         <label className='text-[14px]  tracking-wide text-white' htmlFor="">Username</label>

//                         <div className=" w-[390px] h-[50px] flex items-center outline-none border-b-2 border-[#adadad]  ">
//                             <div className=" w-[40px] h-[50px] flex justify-center items-center bg-white border-r border-gray-500 ">
//                                 <FaRegUser className=' text-[#adadad] text-[16px]' />
//                             </div>
//                             <input className='w-[350px] h-[50px] text-[#adadad] text-[16px] border-none outline-none'
//                                 value={username}
//                                 onChange={(e) => setUsername(e.target.value)}
//                                 type="text"
//                                 placeholder='Type your username'
//                             />

//                         </div>
//                     </div>

//                     <div className="input-group w-[390px] h-[70px] second-input outline-none mt-7">
//                         <label className='text-[14px]  tracking-wide text-white' htmlFor="">Password</label>

//                         <div className=" w-[390px] h-[50px] flex items-center outline-none border-b-2 border-[#adadad]">
//                             <div className=" w-[40px] h-[50px] flex justify-center items-center bg-white border-r border-gray-500">
//                                 <MdOutlineLock className=' text-[#adadad] text-[16px]' />
//                             </div>
//                             <input className='w-[350px] h-[50px] text-[#adadad] text-[16px] border-none outline-none'
//                                 value={password}
//                                 onChange={(e) => setPassword(e.target.value)}
//                                 type="password"
//                                 placeholder='Type your password'
//                             />

//                         </div>
//                     </div>

//                     {error && <p className="input-error text-red-600 mt-3 ">{error}</p>} 

//                     <div className=" forgot w-[390px] h-[50px] flex justify-end">
//                         <a className='pt-3 text-[14px] text-white duration-1000 hover:text-[#007bff]' href=''>Forgot password?</a>
//                     </div>

//                     <button disabled={loading} className='w-[390px] h-[50px] bg-slate-400 rounded-3xl text-white text-[16px] border-none cursor-pointer'>
//                     {loading ? 'Logging in...' : 'LOGIN'}
//                         </button>
//                     <div className="text1 w-[390px] h-[50px] text-white flex justify-center items-end text-[14px]">Or Sign Up Using</div>
//                     <div className="icons w-[390px] h-[50px] flex justify-center items-center gap-3 mt-4 ">
//                         <a href="" className='bg-[#3b5998]'>
//                             <FaFacebookF className='facebook' />
//                         </a>
//                         <a href="" className='bg-[#1da1f2]'> <FaTwitter className='twitter' /></a>
//                         <a href="" className='bg-[#ea4335]'> <FaGoogle className='twitter' /></a>
//                     </div>

//                     <div className=" w-[390px] h-[65px] flex justify-center items-end" onClick={() => navigate("/signUp")}>
//                         <a className='text-white' href="">SIGN UP</a>
//                     </div>

//                 </form>

//             </div>

//         </section>

//         <Footer/>

//         </>
//     )
// }


// export default AdminLogin