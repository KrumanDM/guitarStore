import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "assets/images/ibanez.webp";
import LocalMallOutlinedIcon from "@mui/icons-material/LocalMallOutlined";
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined";

import s from "./Header.module.css";
import SearchForm from "../SearchForm/SearchForm";
import { Navigation } from "shared/Navigation/Navigation";
import { useMediaQuery } from "react-responsive";
import PhoneIcon from "@mui/icons-material/Phone";
import SearchIcon from "@mui/icons-material/Search";


export const Header = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery({ query: "(max-width: 850px)" });
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const searchRef = useRef<HTMLDivElement>(null);

  const handleOpenSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  const handleSearch = (query: string) => {
    if (query) {
      navigate(`/search?query=${encodeURIComponent(query)}`);
    }
  };

  // Закрытие по клику вне формы
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target as Node)
      ) {
        setIsSearchOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsSearchOpen(false);
      }
    };

    if (isSearchOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isSearchOpen]);

  return (
    <div className={s.header}>
      <div className={s.header__Container}>
        {isMobile ? (
          <>
          <div className={s.header__navigationAndCall}>
            <Navigation
              triggerClassName={s.header__storeContainer}
              sidebarClassName={s.header__sidebar}
              closeButtonClassName={s.close__button}
              triggerLabel=""
            />
            <PhoneIcon sx={{ margin: '10px' }}/>
            </div>
            <a className={s.header__logo} href="/">
              <img src={logo} alt="Logo" />
            </a>
            
            <div className={s.header__userContainer}>
            <div
              onClick={handleOpenSearch}
              className={s.searchContainer}
              aria-label="Поиск"
            >
              <SearchIcon />
            </div>
              <div className={s.header__profile}>
                <Link
                  to="/profile"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <PermIdentityOutlinedIcon sx={{ fontSize: 30 }} />
                </Link>
              </div>
              <div className={s.header__busket}>
                <Link
                  to="/busket"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <LocalMallOutlinedIcon sx={{ fontSize: 28 }} />
                </Link>
              </div>
            </div>

            {isSearchOpen && (
              <div
                ref={searchRef}
                className={s.result}
                role="search"
              >
                
                <SearchForm onSearch={handleSearch} />
              </div>
            )}
          </>
        ) : (
          <>
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
                <Link
                  to="/profile"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <PermIdentityOutlinedIcon sx={{ fontSize: 30 }} />
                </Link>
              </div>

              <div className={s.header__busket}>
                <Link
                  to="/busket"
                  style={{ color: "inherit", textDecoration: "none" }}
                >
                  <LocalMallOutlinedIcon sx={{ fontSize: 28 }} />
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
