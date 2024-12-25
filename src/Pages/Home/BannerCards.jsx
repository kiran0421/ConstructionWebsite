import React from "react";
import styles from "./Home.module.css";
const BannerCards = (props) => {
  return (
    <div
      className={`${styles.bannercards} flex flex-col items-center justify-center`}
    >
      <div>{props.caption}</div>
      <div>{props.info}</div>
    </div>
  );
};

export default BannerCards;
