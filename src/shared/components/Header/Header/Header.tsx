import { Drawer, IconButton } from "@mui/material";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import logo from "assets/images/logoStore.png";
import LocalMallOutlinedIcon from '@mui/icons-material/LocalMallOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

import s from "./Header.module.css";
import SearchForm from "../SearchForm/SearchForm";

export const Header = () => {
  

  const [isOpenSidebar, setIsOpenSidebar] = useState(false);
  const handleDrawerToggle = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  const navigate = useNavigate();

const handleSearch = (query: string) => {
  if (query) {
    navigate(`/search?query=${encodeURIComponent(query)}`);
  }
};

  return (
    <div className={s.header}>
      <Drawer anchor="left" open={isOpenSidebar} onClose={handleDrawerToggle}>
        <div className={s.header__sidebar}>
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
          <IconButton
            className={s.close__button}
            edge="start"
            color="inherit"
            aria-label="close"
            onClick={handleDrawerToggle}
          >
            <CloseIcon />
          </IconButton>
        </div>
      </Drawer>

      <div className={s.header__Container}>
        <div className={s.header__logoAndGuitars}>
          <a className={s.header__logo} href="/">
            <img src={logo} alt="Logo" />
          </a>

          <div className={s.header__storeContainer}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
              <div style={{ fontSize: "16px" }}>Категории</div>
            </IconButton>
          </div>
        </div>
        <div className={s.header__searchContainer}>
          <SearchForm onSearch={handleSearch}/>
          </div>

        <div className={s.header__userContainer}>
          <div className={s.header__profile}>
            <Link to="/profile"><PermIdentityOutlinedIcon sx={{ fontSize: 30 }}/></Link>
          </div>
          <div className={s.header__favorite}>
            <FavoriteBorderOutlinedIcon sx={{ fontSize: 28 }}/>
          </div>
          <div className={s.header__busket}>
            <Link to="/busket"><LocalMallOutlinedIcon sx={{ fontSize: 28 }}/></Link>
          </div>
        </div>
      </div>
    </div>
  );
};
