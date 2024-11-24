import "./header.css";
import { MdLocationPin } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { IoSearch } from "react-icons/io5";
import { PiShoppingCartBold } from "react-icons/pi";
import { useNavigate, useLocation } from "react-router-dom";
import { MdFavoriteBorder } from "react-icons/md";
import { Badge } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef, useState } from "react";
import { setActiveItem } from "../../../Redux/feature/menu/menuSlice";
import BasicMenu from "../../../components/BasicMenu/BasicMenu";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const dispatch = useDispatch();
  const activeItem = useSelector((state) => state.menu.activeItem);
  const menuItems = useSelector((state) => state.menu.value);

  const handleMouseEnter = (id) => {
    dispatch(setActiveItem(id));
  };

  const handleMouseLeave = () => {
    dispatch(setActiveItem(null));
  };

  const [scroll, setScroll] = useState(false);
  const headerDownRef = useRef();

  const handleScroll = () => {
    const scrollY = window.scrollY;
    if (scrollY > 220) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { totalLength } = useSelector((item) => item.basket);
  const { totalLength2 } = useSelector((item) => item.favorite);

  return (
    <header
      id="header"
      className="w-full h-[230px] bg-[#FFFFFF] flex flex-col items-center relative"
    >
      <div className="header-up w-full h-[54px] bg-[#343434] flex justify-center items-center">
        <div className="nav-up w-[80%] h-[48px] flex justify-between items-center">
          <p className="nav-up-text">Monday - Friday: 08AM-06PM</p>
        </div>
      </div>

      <div className="header-mid w-full h-[135px] flex justify-center items-center border-b-2">
        <div className="nav-mid w-[80%] h-[135x] flex justify-between items-center">
          <div onClick={() => navigate("/")} className="logo cursor-pointer">
            <img
              className="w-[157px] h-[50px]"
              src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/logo-default-314x100.png"
              alt="Logo"
            />
          </div>

          <div className="nav-mid-text w-[563px] h-[58px] flex">
            <div className="left-mid w-[313px] h-[58px] flex">
              <MdLocationPin className="w-[40.75px] h-[40px] text-[#cfd0d0] mr-1.5 mt-1" />
              <div className="unit-body w-[225px] h-[58px]">
                <a href="#" className="text-[15px] text-[#151515]">
                  523 Sylvan Ave, 5th Floor
                  <br />
                  Mountain View, CA 94041 USA
                </a>
              </div>
            </div>

            <div className="right-mid w-[250px] h-[58px] flex justify-end">
              <MdLocalPhone className="w-[40.75px] h-[40px] text-[#cfd0d0] mr-3 mt-1" />
              <div className="unit-body2">
                <a href="tel:#" className="text-[15px] text-[#151515]">
                  +1 (844) 123 456 78
                </a>
                <br />
                <a href="mailto:#" className="text-[15px] text-[#151515]">
                  info@demolink.org
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        ref={headerDownRef}
        className={`header-down w-[80%] h-[64px] bg-[#343434] ${
          scroll ? "sticky-header" : ""
        }`}
      >
        <nav className="flex justify-between items-center">
          <ul className="menu flex justify-around items-center w-[555px] text-[white]">
            {menuItems.map((menu) => (
              <li
                key={menu.id}
                className="menu-item relative cursor-pointer"
                onMouseEnter={() => handleMouseEnter(menu.id)}
                onMouseLeave={handleMouseLeave}
              >
                <a className="tracking-wider duration-500 hover:text-[#4675FF]">
                  {menu.title}
                </a>

                {activeItem === menu.id && (
                  <div className="submenu-content">
                    <ul className="submenu z-10 absolute top-full left-0 bg-white text-black p-3 shadow-lg">
                      {menu.items.map((subItem, index) => (
                        <li
                          key={index}
                          className="py-1 px-2 hover:bg-gray-200 hover:cursor-pointer"
                        >
                          {subItem}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </li>
            ))}
          </ul>

          <div className="icons w-[170px] h-[64px] flex items-center justify-evenly text-[white] bg-[#5D5D5D]">
            <BasicMenu
              showLogout={location.pathname !== "/"} 
            />
            <Badge badgeContent={totalLength2} color="primary">
              <MdFavoriteBorder
                onClick={() => navigate("/favorite")}
                className="text-[22px] hover:cursor-pointer"
              />
            </Badge>

            <IoSearch onClick={() => navigate("/search")}  className="text-[22px] hover:cursor-pointer" />

            <Badge badgeContent={totalLength} color="primary">
              <PiShoppingCartBold
                onClick={() => navigate("/basket")}
                className="text-[22px] hover:cursor-pointer"
                color="action"
              />
            </Badge>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;





















// import "./header.css";
// import { MdLocationPin } from "react-icons/md";
// import { MdLocalPhone } from "react-icons/md";
// import { IoSearch } from "react-icons/io5";
// import { PiShoppingCartBold } from "react-icons/pi";
// import { useNavigate } from "react-router-dom";
// import { MdFavoriteBorder } from "react-icons/md";
// import { Badge } from "@mui/material";
// import { useDispatch, useSelector } from "react-redux";
// import { useEffect, useRef, useState } from "react";
// import { setActiveItem } from "../../../Redux/feature/menu/menuSlice";
// import BasicMenu from "../../../components/BasicMenu/BasicMenu";

// const Header = () => {
//   const navigate = useNavigate();

//   const dispatch = useDispatch();
//   const activeItem = useSelector((state) => state.menu.activeItem);
//   const menuItems = useSelector((state) => state.menu.value);

//   const handleMouseEnter = (id) => {
//     dispatch(setActiveItem(id));
//   };

//   const handleMouseLeave = () => {
//     dispatch(setActiveItem(null));
//   };

//   const [scroll, setScroll] = useState(false);
//   const headerDownRef = useRef();

//   const handleScroll = () => {
//     const scrollY = window.scrollY;
//     if (scrollY > 220) {
//       setScroll(true);
//     } else {
//       setScroll(false);
//     }
//   };

//   useEffect(() => {
//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const { totalLength } = useSelector((item) => item.basket);
//   const { totalLength2 } = useSelector((item) => item.favorite);

//   return (
//     <header
//       id="header"
//       className="w-full h-[230px] bg-[#FFFFFF] flex flex-col items-center relative "
//     >
//       <div className="header-up w-full h-[54px] bg-[#343434] flex justify-center items-center ">
//         <div className="nav-up w-[80%] h-[48px] flex justify-between items-center">
//           <p className="nav-up-text">Monday - Friday: 08AM-06PM</p>
//         </div>
//       </div>

//       <div className="header-mid w-full h-[135px] flex justify-center items-center border-b-2 ">
//         <div className="nav-mid w-[80%] h-[135x]  flex justify-between items-center">
//           <div onClick={() => navigate("/")} className="logo cursor-pointer">
//             <img
//               className="w-[157px] h-[50px]"
//               src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/logo-default-314x100.png"
//               alt=""
//             />
//           </div>

//           <div className="nav-mid-text w-[563px] h-[58px]  flex ">
//             <div className="left-mid w-[313px] h-[58px]  flex">
//               <MdLocationPin className="w-[40.75px] h-[40px] text-[#cfd0d0] mr-1.5 mt-1" />
//               <div className="unit-body w-[225px] h-[58px]">
//                 <a href="" className="text-[15px] text-[#151515]">
//                   523 Sylvan Ave, 5th Floor
//                   <br />
//                   Mountain View, CA 94041 USA
//                 </a>
//               </div>
//             </div>

//             <div className="right-mid w-[250px] h-58px flex justify-end  ">
//               <MdLocalPhone className="w-[40.75px] h-[40px] text-[#cfd0d0] mr-3 mt-1" />
//               <div className="unit-body2 ">
//                 <a href="tel:# text-[15px] text-[#151515]">
//                   +1 (844) 123 456 78
//                 </a>
//                 <br />
//                 <a href="mailto:# text-[15px] text-[#151515]">
//                   info@demolink.org
//                 </a>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <div
//         ref={headerDownRef}
//         className={`header-down w-[80%] h-[64px] bg-[#343434] ${
//           scroll ? "sticky-header" : ""
//         }`}
//       >
//         <nav className="flex justify-between items-center">
//           <ul className="menu flex justify-around items-center w-[555px] text-[white]">
//             {menuItems.map((menu) => (
//               <li
//                 key={menu.id}
//                 className="menu-item relative cursor-pointer"
//                 onMouseEnter={() => handleMouseEnter(menu.id)}
//                 onMouseLeave={handleMouseLeave}
//               >
//                 <a className="tracking-wider duration-500 hover:text-[#4675FF]">
//                   {menu.title}
//                 </a>

//                 {activeItem === menu.id && (
//                   <div className="submenu-content">
//                     <ul className="submenu z-10 absolute top-full left-0 bg-white text-black p-3 shadow-lg">
//                       {menu.items.map((subItem, index) => (
//                         <li
//                           key={index}
//                           className="py-1 px-2 hover:bg-gray-200 hover:cursor-pointer"
//                         >
//                           {subItem}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </li>
//             ))}
//           </ul>

//           <div className="icons w-[170px] h-[64px] flex items-center justify-evenly text-[white] bg-[#5D5D5D]">
//             <BasicMenu />
//             <Badge badgeContent={totalLength2} color="primary">
//               <MdFavoriteBorder
//                 onClick={() => navigate("/favorite")}
//                 className="text-[22px] hover:cursor-pointer"
//               />
//             </Badge>

//             <IoSearch className="text-[22px] hover:cursor-pointer" />

//             <Badge badgeContent={totalLength} color="primary">
//               <PiShoppingCartBold
//                 onClick={() => navigate("/basket")}
//                 className="text-[22px] hover:cursor-pointer"
//                 color="action"
//               />
//             </Badge>
//           </div>
//         </nav>
//       </div>
//     </header>
//   );
// };

// export default Header;
