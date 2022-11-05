import React from "react";
import styles from "./styles.module.css";

const Header = ({ imageUrl }) => {
  return (
    <header
      className={styles.headerContainer}
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></header>
  );
};

export default Header;
