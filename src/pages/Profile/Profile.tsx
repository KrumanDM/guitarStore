import React from "react";
import { Header } from "shared/components/Header/Header/Header";
import s from "./Profile.module.css";

const Profile = () => {
  return (
    <>
      <Header />
      <div className={s.profile}>
        <h1 className={s.profile__mainTitle}>Profile</h1>
      </div>
    </>
  );
};

export default Profile;