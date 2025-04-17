import React from "react";
import { Link } from "react-router-dom";
import s from "./Header.module.css";

export const Header = () => {
  return (
    <div className={s.header}>
      <div className={s.headerContainer}>
        <div className={s.logoAndGuitars}>
          <a className={s.logo} href="">
            guitarStore
          </a>
          <div className={s.storeContainer}>
            <Link to="/guitars">
              <button>guitars</button>
            </Link>
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
