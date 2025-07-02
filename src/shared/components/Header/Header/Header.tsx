import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

import s from "./Header.module.css";


export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };



  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
const handleDrawerToggle = () => {
  setIsOpenSidebar(!isOpenSidebar);
};


  return (
    <div className={s.header}>

<Drawer
    anchor="left"
    open={isOpenSidebar}
    onClose={handleDrawerToggle}
  >
    <div className={s.sidebar}>
      <ul>
        <li>
          <Link to="/guitars">Guitars</Link>
        </li>
        <li>
          <Link to="/drums">Drums</Link>
        </li>
        <li>
          <Link to="/acoustic">Acoustic</Link>
        </li>
      </ul>
      <IconButton className={s.close__button} edge="start" color="inherit" aria-label="close" onClick={handleDrawerToggle}>
        <CloseIcon />
      </IconButton>
    </div>
  </Drawer>

      {isOpen && (
        <div className={s.modal}>
          <div className={s.modal__buttonContainer}>
            <Link to="/guitars">
              <button className={s.modal__button}>Elecric Guitars</button>
            </Link>
            <Link to="/guitars">
              <button className={s.modal__button}>Acoustic Guitars</button>
            </Link>
            <Link to="/guitars">
              <button className={s.modal__button}>Bass Guitars</button>
            </Link>
          </div>
          <div className={s.modal__closeButton} onClick={openModalHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="22"
              height="22"
              viewBox="0 0 50 50"
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
          </div>
        </div>
      )}
      <div className={s.header__Container}>
        <div className={s.header__logoAndGuitars}>
          <a className={s.header__logo} href="">
            guitarStore
          </a>
          <div className={s.header__storeContainer}>
      
          
      <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerToggle}>
        <MenuIcon />
      </IconButton>

            <button className={s.header__cta} onClick={openModalHandler}>
              <span className={s.header__hoverUnderlineAnimation}> Guitars </span>
            </button>
            <button>drums</button>
            <button>acoustic</button>
          </div>
        </div>

        <div className={s.header__userContainer}>
          <div className={s.header__searchContainer}>
            <button>search</button>
          </div>

          <div className={s.header__profile}>
            <button>profile</button>
          </div>
          <div className={s.header__busket}>
            <button>busket</button>
          </div>
        </div>
      </div>
    </div>
  );
};
