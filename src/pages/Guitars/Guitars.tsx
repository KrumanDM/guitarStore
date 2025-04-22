import React from "react";
import { Header } from "shared/Header/Header";
import s from "./Guitars.module.css";

const Guitars = () => {
  return (
    <>
      <Header />
      <div className={s.guitars}>
        <h1 className={s.guitars_mainTitle}>Guitars</h1>
      </div>
    </>
  );
};

export default Guitars;
