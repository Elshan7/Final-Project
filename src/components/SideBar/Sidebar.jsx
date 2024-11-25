import { useState } from "react";
import { FaHome, FaLayerGroup, FaChartBar, FaFilm, FaUsers } from "react-icons/fa";
import "./sidebar.css";

const Sidebar = ({ onMenuClick }) => {
  const [isExpanded, setIsExpanded] = useState(true);

  const handleMouseEnter = () => setIsExpanded(true);
  const handleMouseLeave = () => setIsExpanded(false);

  const handleMenuClick = (page) => {
    onMenuClick(page);
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
        <li onClick={() => handleMenuClick("Movies")}>
          <FaFilm className="icon" />
          {isExpanded && <span>Movies</span>}
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











// import  { useState } from "react";
// import { FaHome, FaLayerGroup, FaChartBar, FaFilm, FaUsers } from "react-icons/fa";
// import "./sidebar.css"; 

// const Sidebar = () => {
//   const [isExpanded, setIsExpanded] = useState(true);

//   const handleMouseEnter = () => {
//     setIsExpanded(true);
//   };

//   const handleMouseLeave = () => {
//     setIsExpanded(false);
//   };

//   return (
//     <div
//       className={` sidebar ${isExpanded ? "expanded" : "collapsed"}`}
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <ul className="sidebar-menu">
//         <li>
//           <FaHome className="icon" />
//           {isExpanded && <span>Dashboard</span>}
//         </li>
//         <li>
//           <FaLayerGroup className="icon" />
//           {isExpanded && <span>All Products</span>}
//         </li>
//         <li>
//           <FaChartBar className="icon" />
//           {isExpanded && <span>Trending</span>}
//         </li>
//         <li>
//           <FaFilm className="icon" />
//           {isExpanded && <span>Movies</span>}
//         </li>
//         <li>
//           <FaUsers className="icon" />
//           {isExpanded && <span>Users</span>}
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default Sidebar;