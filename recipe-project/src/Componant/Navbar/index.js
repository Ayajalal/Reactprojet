import React from "react";
import styles from "./styles.module.css";

const Navbar = () => {
  return (
    <nav className={styles.navbarContainer}>
      <h1>Recipes</h1>
      <p>
        Welcome, <span>UserName</span>
      </p>
    </nav>
  );
};

export default Navbar;
