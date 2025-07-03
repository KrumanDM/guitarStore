import React from "react";
import { Header } from "shared/components/Header/Header/Header";
import s from "./Busket.module.css";

const Busket = () => {
  return (
    <>
      <Header />
      <div className={s.busket}>
        <h1 className={s.busket}>Busket</h1>
      </div>
    </>
  );
};

export default Busket;