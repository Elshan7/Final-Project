import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { FaRegUser } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setShowLogout, selectShowLogout } from "../../Redux/feature/logout/logoutSlice" ; 

export default function BasicMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showLogout = useSelector(selectShowLogout); 

  React.useEffect(() => {
    const currentPath = window.location.pathname;

   
    if (currentPath === "/" || currentPath === "/login" || currentPath === "/signup") {
      dispatch(setShowLogout(false)); 
    } else {
      dispatch(setShowLogout(true)); 
    }
  }, [window.location.pathname, dispatch]);

  const handleMouseEnter = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMouseLeave = () => {
    setAnchorEl(null);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    handleClose();
    navigate("/");
  };

  return (
    <div 
      className="basicmenu"
      onMouseLeave={handleMouseLeave} 
    >
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onMouseEnter={handleMouseEnter} 
      >
        <FaRegUser />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleMouseLeave} 
        MenuListProps={{
          'aria-labelledby': 'basic-button',
          onMouseLeave: handleMouseLeave, 
        }}
      >
        <MenuItem onClick={() => navigate("/login")}>Login</MenuItem>
        <MenuItem onClick={() => navigate("/signup")}>Register</MenuItem>
        {showLogout && (
          <MenuItem onClick={handleLogout}>
            Logout
          </MenuItem>
        )}
      </Menu>
    </div>
  );
}









