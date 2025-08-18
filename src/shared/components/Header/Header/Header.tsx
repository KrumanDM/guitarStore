import React from "react";
import { IconButton } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from "assets/images/logoStore.png";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import s from "./Header.module.css";
import SearchForm from "../SearchForm/SearchForm";
import { Navigation } from "shared/Navigation/Navigation"; // или скорректируй путь, если файл в другом месте

export const Header = () => {
  const navigate = useNavigate();

  const handleSearch = (query: string) => {
    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  return (
    <div className={s.header}>
      <div className={s.header__Container}>
        <div className={s.header__logoAndGuitars}>
          <a className={s.header__logo} href="/">
            <img src={logo} alt="Logo" />
          </a>

          <Navigation
            triggerClassName={s.header__storeContainer}
            sidebarClassName={s.header__sidebar}
            closeButtonClassName={s.close__button}
            triggerLabel="Категории"
          />
        </div>

        <div className={s.header__searchContainer}>
          <SearchForm onSearch={handleSearch} />
        </div>

        <div className={s.header__userContainer}>
          <div className={s.header__profile}>
            <Link to="/profile">
              <PermIdentityOutlinedIcon sx={{ fontSize: 30 }} />
            </Link>
          </div>
          <div className={s.header__favorite}>
            <FavoriteBorderOutlinedIcon sx={{ fontSize: 28 }} />
          </div>
          <div className={s.header__busket}>
            <Link to="/busket">
              <LocalMallOutlinedIcon sx={{ fontSize: 28 }} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};