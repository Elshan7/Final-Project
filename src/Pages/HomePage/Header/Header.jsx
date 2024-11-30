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
import { Drawer } from "antd";
import { FaBarsStaggered } from "react-icons/fa6";

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

  const handleSubItemClick = (subItem) => {
    if (subItem === "OUR LOCATION") {
      navigate("/map");
    }
    if (subItem === "ABOUT US") {
      navigate("/about");
    }
    if (subItem === "OUR SERVICES") {
      navigate("/service");
    }
  };

  const handleMenuItemClick = (itemTitle) => {
    if (itemTitle === "HOME") {
      navigate("/");
    }
  };

  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

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
          <div className="flex items-center gap-3">
            <button className="drawer-btn" type="primary" onClick={showDrawer}>
              <FaBarsStaggered className="text-3xl" />
            </button>

            <div onClick={() => navigate("/")} className="logo cursor-pointer">
              <img
                data-aos="fade-down"
                data-aos-duration="1500"
                className="w-[157px] h-[50px] header-logo"
                src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/logo-default-314x100.png"
                alt="Logo"
              />
            </div>
          </div>
          <div className="responsive-icons w-[170px] h-[64px] flex items-center justify-evenly text-[white] bg-[#5D5D5D]">
            <BasicMenu showLogout={location.pathname !== "/"} />
            <Badge badgeContent={totalLength2} color="primary">
              <MdFavoriteBorder
                onClick={() => navigate("/favorite")}
                className="text-[22px] hover:cursor-pointer"
              />
            </Badge>

            <IoSearch
              onClick={() => navigate("/search")}
              className="text-[22px] hover:cursor-pointer"
            />

            <Badge badgeContent={totalLength} color="primary">
              <PiShoppingCartBold
                onClick={() => navigate("/basket")}
                className="text-[22px] hover:cursor-pointer"
                color="action"
              />
            </Badge>
          </div>
          {/* <button className="drawer-btn" type="primary" onClick={showDrawer}>
          <FaBarsStaggered className="text-3xl" />
          </button>

          <div onClick={() => navigate("/")} className="logo cursor-pointer">
            <img
              data-aos="fade-down"
              data-aos-duration="1500"
              className="w-[157px] h-[50px] header-logo"
              src="https://livedemo00.template-help.com/wt_prod-25548/unit-car-repair/images/logo-default-314x100.png"
              alt="Logo"
            />
          </div> */}

          <div className="nav-mid-text w-[563px] h-[58px] flex">
            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              className="left-mid w-[313px] h-[58px] flex"
            >
              <MdLocationPin
                onClick={() => navigate("/service")}
                className="w-[40.75px] cursor-pointer h-[40px] text-[#cfd0d0] mr-1.5 mt-1"
              />
              <div className="unit-body w-[225px] h-[58px]">
                <a href="#" className="text-[15px] text-[#151515]">
                  523 Sylvan Ave, 5th Floor
                  <br />
                  Mountain View, CA 94041 USA
                </a>
              </div>
            </div>

            <div
              data-aos="fade-down"
              data-aos-duration="1500"
              className="right-mid w-[250px] h-[58px] flex justify-end"
            >
              <MdLocalPhone className="w-[40.75px] cursor-pointer h-[40px] text-[#cfd0d0] mr-3 mt-1" />
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

        <Drawer
          title="Unit Car Repair"
          onClose={onClose}
          open={open}
          placement="left"
          size="small"
        >
          <nav className="flex flex-col items-start">
            <ul className="menu flex flex-col items-start w-[555px] gap-3 text-black">
              {menuItems.map((menu) => (
                <li
                  key={menu.id}
                  className="menu-item relative cursor-pointer"
                  onClick={() =>
                    dispatch(
                      setActiveItem(activeItem === menu.id ? null : menu.id)
                    )
                  }
                  role="menuitem"
                  aria-expanded={activeItem === menu.id}
                  tabIndex="0"
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
                            className="py-1 px-2 hover:bg-gray-200 cursor-pointer"
                            onClick={() => handleSubItemClick(subItem)}
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
          </nav>
        </Drawer>
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
                onClick={() => handleMenuItemClick(menu.title)}
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
                          onClick={() => handleSubItemClick(subItem)}
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
            <BasicMenu showLogout={location.pathname !== "/"} />
            <Badge badgeContent={totalLength2} color="primary">
              <MdFavoriteBorder
                onClick={() => navigate("/favorite")}
                className="text-[22px] hover:cursor-pointer"
              />
            </Badge>

            <IoSearch
              onClick={() => navigate("/search")}
              className="text-[22px] hover:cursor-pointer"
            />

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









// const [subItem, setSubItem] = useState(false);

// const subItemClick = () => {
//   setSubItem(true);
// };

{
  /* <nav className="flex justify-between items-center">
            <ul className="menu   flex flex-col gap-4 w-[555px] text-black">
              <li>
                <span onClick={subItemClick}>Home</span>
                <ul
                  className={
                    subItem === true
                      ? "subitem-ul-active flex flex-col gap-4"
                      : "subitem-ul"
                  }
                >
                  <li>
                    <a href="">WHY CHOOSE US</a>
                  </li>
                  <li>
                    <a href="">OUR SERVICES</a>
                  </li>
                  <li>
                    <a href="">ALL PRODUCTS</a>
                  </li>
                  <li>
                    <a href="">STATISTICS</a>
                  </li>
                  <li>
                    <a href="">OUR TEAM</a>
                  </li>
                  <li>
                    <a href="">OUR LOCATION</a>
                  </li>
                </ul>
              </li>

              <li>
                <span onClick={subItemClick}>PAGES</span>
                <ul
                  className={
                    subItem === true
                      ? "subitem-ul-active flex flex-col gap-4"
                      : "subitem-ul"
                  }
                >
                  <li>
                    <a href="">ABOUT US</a>
                  </li>
                  <li>
                    <a href="">WHAT WE OFFER</a>
                  </li>
                  <li>
                    <a href="">OUR TEAM</a>
                  </li>
                  <li>
                    <a href="">WHAT WE OFFER</a>
                  </li>
                  <li>
                    <a href="">OUR TEAM</a>
                  </li>
                
                </ul>
              </li>


            </ul>
          </nav> */
}
