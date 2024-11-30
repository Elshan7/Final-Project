import "./SignUp.css";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useFormik } from "formik";
import {  useNavigate } from "react-router-dom";
import { signUpSchema } from "../../assets/schema/signUpSchema";
import Footer from "../HomePage/Footer/Footer";
import { useDispatch, useSelector } from "react-redux";
import { signUpUser } from "../../Redux/feature/user/userSlice";


const SignUp = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error, userInfo } = useSelector((state) => state.user);

  const submit = (values, actions) => {
    dispatch(signUpUser(values)); 
    actions.resetForm(); 
  };

  const { values, errors, handleChange, handleSubmit } = useFormik({
    initialValues: {
      fullname: "",
      email: "",
      username: "",
      password: "",
      repeatPassword: "",
      term: "",
    },
    validationSchema: signUpSchema, 
    onSubmit: submit,
  });

  useEffect(() => {
    if (userInfo) {
      navigate("/login"); 
    }
  }, [userInfo, navigate]);



  return (
    <>

    <div className="logo-home w-full h-16 bg-slate-100  flex justify-center items-center">
      <div onClick={() => navigate("/")} className="sub-logo w-[90%]  cursor-pointer">
      <img className="w-[167px] h-[60px] " src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/logo-default-314x100.png" alt="" />
      </div>
     

    </div>
     

      <section id="signup" className="signup-sct w-full h-lvh flex  ">

        <div className="left-side w-[60%] h-lvh bg-center bg-no-repeat bg-cover"></div>

        <div className="right-side h-lvh w-[40%] bg-slate-50 flex justify-center items-center ">
          <form
            onSubmit={handleSubmit}
            className="signup-form w-[430px]  h-[750px] flex flex-col justify-center items-center"
          >
            <h2 className="h2-textUp w-[420px] h-[86px] font-[Poppins-Bold] text-[39px] text-[#333333] leading-[1.2] text-left">
              Sign Up
            </h2>

            <div className="flex registerBody flex-col gap-6">
            
              <div className="input-group2">
                <label className="label2" htmlFor="fullName">
                  Full Name
                </label>
                <input
                  id="fullName"
                  name="fullname"
                  className="input2"
                  type="text"
                  placeholder="Name..."
                  value={values.fullname}
                  onChange={handleChange}
                />
                {errors.fullname && (
                  <p className="input-error">{errors.fullname}</p>
                )}
              </div>

              <div className="input-group2">
                <label className="label2" htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  className="input2"
                  type="text"
                  placeholder="Email address..."
                  value={values.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="input-error">{errors.email}</p>}
              </div>

          
              <div className="input-group2">
                <label className="label2" htmlFor="username">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  className="input2"
                  type="text"
                  placeholder="Username..."
                  value={values.username}
                  onChange={handleChange}
                />
                <div className="error-messages flex">
                {errors.username && (
                  <p className="input-error">{errors.username}</p>
                )}
                {error && error.includes("Username already exists") && (
                  <p className="input-error ml-3">
                    Username already exists, please try another one.
                  </p>
                )}
                </div>

              </div>

          
              <div className="input-group2">
                <label className="label2" htmlFor="password">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  className="input2"
                  type="password"
                  placeholder="**********"
                  value={values.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <p className="input-error">{errors.password}</p>
                )}
              </div>

           
              <div className="input-group2">
                <label className="label2" htmlFor="repeatpassword">
                  Repeat Password
                </label>
                <input
                  id="repeatpassword"
                  name="repeatPassword"
                  className="input2"
                  type="password"
                  placeholder="**********"
                  value={values.repeatPassword}
                  onChange={handleChange}
                />
                {errors.repeatPassword && (
                  <p className="input-error">{errors.repeatPassword}</p>
                )}
              </div>
            </div>

            <div className="terms w-[420px] h-[24px] flex gap-4 items-center mt-5">
              <input
                className=" w-[16px] h-[16px] rounded-[2px] bg-[#e6e6e6]"
                id="term"
                type="checkbox"
                name="term"
                value={values.term}
                onChange={handleChange}
              />
              <span className=" font-[Poppins-Regular] text-[15px] text-[#999999] leading-[1.4]">
                I agree to the{" "}
                <a
                  className="font-[Poppins-Regular] text-[15px] text-[#3c3c3c]"
                  href=""
                >
                  Terms of Use
                </a>
              </span>
              {errors.term && <p className="input-error">{errors.term}</p>}
            </div>
          
            <div className="container-loginn w-[420px] h-[50px] mt-6 flex justify-between items-center">
              <button
                type="submit"
                disabled={loading}
                className="w-[224px] firstBtn h-[48px] font-[Poppins-Medium] text-[18px] text-white border-none rounded-[70px] cursor-pointer bg-black"
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
           
              <div
                className="w-[157px] h-[45px] bg-black rounded-2xl flex justify-center items-center gap-3 font-[Poppins-Regular] text-lg text-[#666666]'"
                onClick={() => navigate("/login")}
              >
                <a className="text-white text-[18px]" href="">Sign in </a>
                <FaArrowRightLong className="text-white" />
              </div>
            </div>
          </form>
        </div>

      </section>


      <Footer />
    </>
  );
};

export default SignUp;




