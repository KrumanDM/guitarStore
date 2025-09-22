import React from "react";
import { Header } from "shared/components/Header/Header/Header";
import s from "./Guitars.module.css";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";

const Guitars = () => {
  const guitars = useSelector((state: RootState) => state.guitars.items);

  return (
    <>
      <Header />
      <div className={s.guitars}>
        <h1 id="guitars-title" className={s.guitars_mainTitle}>
          Guitars
        </h1>

        <ul
  role="list"
  aria-labelledby="guitars-title"
  className={s.guitars_list}
>
  {guitars.map((guitar) => (
    <li key={guitar.id} role="listitem" className={s.guitars_item}>
    <img
      src={guitar.image}
      alt={`${guitar.title} — ${guitar.brand}`}
      className={s.guitar_image}
    />
    <div className={s.guitar_header}>
      <img
        src={guitar.logo}
        alt={`${guitar.brand} logo`}
        className={s.guitar_logo}
      />
      <span className={s.guitar_title}>{guitar.title}</span>
    </div>
    <span className={s.guitar_brand}>{guitar.brand}</span> —{" "}
    <span className={s.guitar_price}>${guitar.price}</span>
  </li>
  
  ))}
</ul>

      </div>
    </>
  );
};

export default Guitars;
