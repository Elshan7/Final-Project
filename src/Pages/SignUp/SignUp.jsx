import "./SignUp.css";
import { useEffect } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { signUpSchema } from "../../assets/schema/signUpSchema";
import Footer from "../HomePage/Footer/Footer";
import Header from "../HomePage/Header/Header";
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
      <Header />

      <section id="signup" className="w-full h-lvh flex">
        <div className="left-side w-[60%] h-lvh bg-center bg-no-repeat bg-cover"></div>

        <div className="right-side h-lvh w-[40%] bg-slate-50 flex justify-center items-center">
          <form
            onSubmit={handleSubmit}
            className=" w-[430px] h-lvh flex flex-col justify-center items-center"
          >
            <h2 className="h2-text w-[420px] h-[86px] font-[Poppins-Bold] text-[39px] text-[#333333] leading-[1.2] text-left">
              Sign Up
            </h2>

            <div className=" flex flex-col gap-6 ">
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
                  <p className="input-error ">{errors.fullname}</p>
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
                {errors.username && (
                  <p className="input-error">{errors.username}</p>
                )}
                {error && error.includes("Username already exists") && (
                  <p className="input-error">
                    Username already exists, please try another one.
                  </p>
                )}
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

            <div className=" w-[420px] h-[24px] flex gap-4 items-center mt-5">
              <input
                className="w-[16px] h-[16px] rounded-[2px] bg-[#e6e6e6]"
                id="term"
                type="checkbox"
                name="term"
                value={values.term}
                onChange={handleChange}
              />
              <span className="font-[Poppins-Regular] text-[15px] text-[#999999] leading-[1.4]">
                I agree to the{" "}
                <a
                  className="font-[Poppins-Regular] text-[15px] text-[#666666]"
                  href=""
                >
                  Terms of User
                </a>{" "}
              </span>
              {errors.term && <p className="input-error">{errors.term}</p>}
            </div>

            <div className="container-login w-[420px] h-[50px] mt-6 flex justify-between items-center">
              <button
                type="submit"
                disabled={loading}
                className=" w-[244px] h-[48px] font-[Poppins-Medium] text-[16px] text-white border-none rounded-[70px] cursor-pointer bg-black"
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>
              {error && <p className="input-error">Error: {error}</p>}
              <div
                className=" w-[137px] h-[42.5px] bg-white flex justify-center items-center gap-3 font-[Poppins-Regular] text-lg text-[#666666]'"
                onClick={() => navigate("/login")}
              >
                <a href="">Sign in </a>
                <FaArrowRightLong />
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
