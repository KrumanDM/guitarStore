import React from "react";
import s from "./Main.module.css";
import mainPhoto from "../assets/images/mainPhoto.webp";

const Main = () => {
  return (
    <div className={s.mainConatiner}>
      <img className={s.img} src={mainPhoto} alt={"store"} />
      <h1 className={s.mainTitle}>Welcome to our guitar shop</h1>
    </div>
  );
};

export default Main;
