import "./App.css";
import React, { useEffect, useState } from "react";
import SearchRecipe from "./Componant/search-recipe";
import Navbar from "./Componant/Navbar";
import Header from "./Componant/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Register from "./Componant/Register";
import Login from "./Componant/Login";
import { BrowserRouter } from "react-router-dom";
import PageRouter from "./PageRouter";

function App() {
  return (
    <BrowserRouter>
      <PageRouter />
    </BrowserRouter>
  );
}

export default App;
