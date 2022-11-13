import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

const Navbar = ({ loggedUser, setLoggedUser }) => {
  return (
    <nav className={styles.navbarContainer}>
      <h1>Recipes</h1>
      {loggedUser ? (
        <span className={styles.navbarContent}>
          <p>
            Welcome, <span>{loggedUser.name}</span>.
          </p>
          <a
            href=""
            onClick={(event) => {
              event.preventDefault();
              setLoggedUser(null);
            }}
          >
            logout
          </a>
        </span>
      ) : (
        <ul className={styles.navbarButtons}>
          <li>
            <Link to="">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
