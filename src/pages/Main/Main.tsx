import React from "react";
import s from "./Main.module.css";
import mainPhoto from "assets/images/mainPhoto.webp";

const Main = () => {
  return (
    <div className={s.main}>
      <img className={s.main__img} src={mainPhoto} alt={"store"} />
      
    </div>
  );
};

export default Main;
