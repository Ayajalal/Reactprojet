import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../Navbar";

const Layout = ({ loggedUser, setLoggedUser }) => {
  return (
    <React.Fragment>
      <Navbar loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Outlet />
    </React.Fragment>
  );
};

export default Layout;
