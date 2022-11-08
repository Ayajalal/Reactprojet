import "./App.css";
import React, { useEffect, useState } from "react";
import SearchRecipe from "./Componant/search-recipe";
import Navbar from "./Componant/Navbar";
import Header from "./Componant/Header";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Register from "./Componant/Register";
import Login from "./Componant/Login";

function App() {
  const [loggedUser, setLoggedUser] = useState(null);

  useEffect(() => {}, []);

  return (
    <React.Fragment>
      <SearchRecipe />
      {/* <Navbar />
      {loggedUser ? (
        <>
          <Carousel infiniteLoop showStatus={false} autoPlay interval={5000}>
            <Header imageUrl="/assets/images/recipes-header-bg.jpg" />
            <Header imageUrl="/assets/images/recipes-header-bg1.jpg" />
            <Header imageUrl="/assets/images/recipes-header-bg2.jpg" />
          </Carousel>

          <SearchRecipe />
        </>
      ) : (
        <>
          <Register />
          <Login />
        </>
      )} */}
    </React.Fragment>
  );
}

export default App;
