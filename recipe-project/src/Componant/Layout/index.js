import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar";

const Layout = ({ loggedUser, setLoggedUser }) => {
  return (
    <React.Fragment>
      <Navbar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
