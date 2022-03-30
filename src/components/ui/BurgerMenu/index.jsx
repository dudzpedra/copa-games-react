import s from "./Menu.module.css";
import menuImg from "../../../assets/menu.png";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { useState } from "react";
import {useNavigate} from 'react-router-dom'

const BurgerMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  
  const handleHome = () => {
      navigate('/')
    setAnchorEl(null);
  };
  
  const handleAbout = () => {
      navigate('/about')
    setAnchorEl(null);
  };
  
  const handleContact = () => {
      navigate('/contact')
    setAnchorEl(null);
  };
  
  return (
    <div className={s.menuContainer}>
      <Button
        id="basic-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <img src={menuImg} alt="Menu" />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        <MenuItem onClick={handleHome}>Home</MenuItem>
        <MenuItem onClick={handleAbout}>About</MenuItem>
        <MenuItem onClick={handleContact}>Contact</MenuItem>
      </Menu>
    </div>
  );
};

export default BurgerMenu;
