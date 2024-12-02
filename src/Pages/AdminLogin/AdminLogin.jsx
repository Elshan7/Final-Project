import { useEffect, useState } from "react";
import "./AdminLogin.css";
import { FaRegUser } from "react-icons/fa6";
import { MdOutlineLock } from "react-icons/md";
import { useNavigate } from "react-router-dom";

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
      <section
        id="adminlogin"
        className="adminlogin-sct w-full h-lvh bg-center bg-cover flex justify-center items-center"
      >
        <div className="admincontainer w-[450px] h-[550px] bg-black border border-amber-400  rounded-lg flex justify-center items-center">
          <form
            action=""
            onSubmit={handleSubmit}
            className="w-[390px] h-[460px] admin-form"
          >
            <h2 className="w-[390px] h-[50px] text-center admin-h2 leading-5 text-[39px] tracking-wide text-white font-serif">
              Login
            </h2>
            <div className="input-group-admin w-[370px] h-[70px] ">
              <label
                className="text-[14px]  tracking-wide text-white"
                htmlFor=""
              >
                Username
              </label>

              <div className="w-[370px] h-[50px] input-group-admin  flex items-center outline-none border-b-2 border-[#adadad]">
                <div className="w-[40px] h-[50px] flex justify-center items-center bg-white border-r border-gray-500">
                  <FaRegUser className="text-[#adadad] text-[16px]" />
                </div>
                <input
                  className="w-[350px] h-[50px]  text-[#adadad] text-[16px] border-none outline-none"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  type="text"
                  placeholder="Type your username"
                />
              </div>
            </div>

            <div className="input-group-admin  w-[370px] h-[70px] second-input outline-none mt-7">
              <label
                className="text-[14px]  tracking-wide text-white"
                htmlFor=""
              >
                Password
              </label>

              <div className="w-[370px] h-[50px] input-group-admin   flex items-center outline-none border-b-2 border-[#adadad]">
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

            <div className="forgot w-[370px] h-[50px] flex justify-end">
              <a
                className="pt-3 text-[14px] text-white duration-1000 hover:text-[#007bff]"
                href=""
              >
                Forgot password?
              </a>
            </div>

            <button
              disabled={loading}
              className="button-admin w-[310px] h-[45px] ml-5  bg-sky-800 rounded-3xl text-white text-[16px] border-none cursor-pointer"
            >
              {loading ? "Logging in..." : "LOGIN"}
            </button>
          </form>
        </div>
      </section>
    </>
  );
};

export default AdminLogin;
