import React, { useState } from 'react';
import './Login.css';
import { FaRegUser, FaFacebookF, FaTwitter, FaGoogle } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Footer from '../../Pages/HomePage/Footer/Footer';
import Header from '../../Pages/HomePage/Header/Header';


const Login = () => {
    const navigate = useNavigate();


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');


    const checkApi = async () => {
        const res = await axios.get("https://66ffcd724da5bd237552095c.mockapi.io/users");
        const users = res.data;

        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            navigate(`/welcome/${user.id}`);
        } else {
            setError('Invalid username or password');
        }
};


const handleSubmit = (e) => {
    e.preventDefault(); 
    checkApi(); 
};


    return (

      <>
      <Header/>   

        <section id='login' className='login-sct w-full h-lvh bg-center bg-cover flex justify-center items-center '>
            <div className='container w-[500px] h-[600px] bg-white rounded-lg flex justify-center items-center'>
                <form action="" onSubmit={handleSubmit} className='w-[390px] h-[500px]'>
                    <h2 className='w-[390px] h-[70px] text-center leading-5 text-[39px] tracking-wide text-[#333333] font-serif'>Login</h2>
                    <div className="input-group w-[390px] h-[70px]">
                        <label className='text-[14px]  tracking-wide text-[#333333]' htmlFor="">Username</label>

                        <div className=" w-[390px] h-[50px] flex items-center outline-none border-b-2 border-[#adadad]  ">
                            <div className=" w-[40px] h-[50px] flex justify-center items-center">
                                <FaRegUser className=' text-[#adadad] text-[16px]' />
                            </div>
                            <input className='w-[350px] h-[50px] text-[#adadad] text-[16px] border-none outline-none'
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                type="text"
                                placeholder='Type your username'
                            />

                        </div>
                    </div>

                    <div className="input-group w-[390px] h-[70px] second-input outline-none mt-7">
                        <label className='text-[14px]  tracking-wide text-[#333333]' htmlFor="">Password</label>

                        <div className=" w-[390px] h-[50px] flex items-center outline-none border-b-2 border-[#adadad]">
                            <div className=" w-[40px] h-[50px] flex justify-center items-center">
                                <MdOutlineLock className=' text-[#adadad] text-[16px]' />
                            </div>
                            <input className='w-[350px] h-[50px] text-[#adadad] text-[16px] border-none outline-none'
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                type="password"
                                placeholder='Type your password'
                            />

                        </div>
                    </div>

                    <div className=" forgot w-[390px] h-[50px] flex justify-end">
                        <a className='pt-3 text-[14px] text-[#666666] duration-1000 hover:text-[#007bff]' href=''>Forgot password?</a>
                    </div>

                    <button className='w-[390px] h-[50px] bg-slate-400 rounded-3xl text-white text-[16px] border-none cursor-pointer'>
                        LOGIN
                        </button>
                    <div className="text1 w-[390px] h-[50px] text-[#666666] flex justify-center items-end text-[14px]">Or Sign Up Using</div>
                    <div className="icons w-[390px] h-[50px] flex justify-center items-center gap-3 mt-4 ">
                        <a href="" className='bg-[#3b5998]'>
                            <FaFacebookF className='facebook' />
                        </a>
                        <a href="" className='bg-[#1da1f2]'> <FaTwitter className='twitter' /></a>
                        <a href="" className='bg-[#ea4335]'> <FaGoogle className='twitter' /></a>
                    </div>

                    <div className=" w-[390px] h-[65px] flex justify-center items-end" onClick={() => navigate("/signUp")}>
                        <a href="">SIGN UP</a>
                    </div>

                </form>

            </div>

        </section>

        <Footer/>

        </>
    )
}


export default Login