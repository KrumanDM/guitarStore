import { React, useState } from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={s.header}>
      {isOpen && (
        <div className={s.modal}>
          <div className={s.buttonModalContainer}>
            <Link to="/guitars">
              <button className={s.buttonModal}>Elecric Guitars</button>
            </Link>
            <Link to="/guitars">
              <button className={s.buttonModal}>Acoustic Guitars</button>
            </Link>
            <Link to="/guitars">
              <button className={s.buttonModal}>Bass Guitars</button>
            </Link>
          </div>
          <div className={s.closeButton} onClick={openModalHandler}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="30"
              height="30"
              viewBox="0 0 50 50"
            >
              <path d="M 7.71875 6.28125 L 6.28125 7.71875 L 23.5625 25 L 6.28125 42.28125 L 7.71875 43.71875 L 25 26.4375 L 42.28125 43.71875 L 43.71875 42.28125 L 26.4375 25 L 43.71875 7.71875 L 42.28125 6.28125 L 25 23.5625 Z"></path>
            </svg>
          </div>
        </div>
      )}
      <div className={s.headerContainer}>
        <div className={s.logoAndGuitars}>
          <a className={s.logo} href="">
            guitarStore
          </a>
          <div className={s.storeContainer}>
            <button className={s.cta} onClick={openModalHandler}>
              <span className={s.hoverUnderlineAnimation}> Guitars </span>
            </button>

            <button>drums</button>
            <button>acoustic</button>
          </div>
        </div>

        <div className={s.userContainer}>
          <div className={s.searchContainer}>
            <button>search</button>
          </div>

          <div className={s.profile}>
            <button>profile</button>
          </div>
          <div className={s.busket}>
            <button>busket</button>
          </div>
        </div>
      </div>
    </div>
  );
};
