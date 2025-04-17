import React from "react";
import { Header } from "../../shared/Header/Header";
import s from "./Guitars.module.css";

const Guitars = () => {
  return (
    <>
      <Header />
      <div className={s.guitarsConatiner}>
        <h1 className={s.mainTitle}>Guitars</h1>
      </div>
    </>
  );
};

export default Guitars;
