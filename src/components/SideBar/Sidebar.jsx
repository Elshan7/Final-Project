import { useState } from "react";
import { FaHome, FaLayerGroup, FaChartBar, FaFilm, FaUsers } from "react-icons/fa";
import "./sidebar.css";

const Sidebar = ({ onMenuClick }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  const handleMenuClick = (page) => {
    if (typeof onMenuClick === "function") {
      onMenuClick(page);
    } else {
      console.error("onMenuClick prop is not a function");
    }
  };

  return (
    <div
      className={`sidebar ${isExpanded ? "expanded" : "collapsed"}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <ul className="sidebar-menu">
        <li onClick={() => handleMenuClick("Dashboard")}>
          <FaHome className="icon" />
          {isExpanded && <span>Dashboard</span>}
        </li>
        <li onClick={() => handleMenuClick("All Products")}>
          <FaLayerGroup className="icon" />
          {isExpanded && <span>All Products</span>}
        </li>
        <li onClick={() => handleMenuClick("Trending")}>
          <FaChartBar className="icon" />
          {isExpanded && <span>Trending</span>}
        </li>
        <li onClick={() => handleMenuClick("Information")}>
          <FaFilm className="icon" />
          {isExpanded && <span>Information</span>}
        </li>
        <li onClick={() => handleMenuClick("Users")}>
          <FaUsers className="icon" />
          {isExpanded && <span>Users</span>}
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;






