import React from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import styles from "./styles.module.css";
import cookie from "react-cookies";

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
              toast.success(`Hope to see you back soon, ${loggedUser.name}.`);
              setLoggedUser(null);
              cookie.remove("user", { path: "/" });
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
