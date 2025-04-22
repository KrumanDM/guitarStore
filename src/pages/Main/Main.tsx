import React from "react";
import s from "./Main.module.css";
import mainPhoto from "../../assets/images/mainPhoto.webp";

const Main = () => {
  return (
    <div className={s.main}>
      <img className={s.main__img} src={mainPhoto} alt={"store"} />
      <h1 className={s.main__title}>Welcome to our guitar shop</h1>
    </div>
  );
};

export default Main;
