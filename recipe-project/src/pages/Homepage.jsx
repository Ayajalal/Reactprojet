import React from "react";
import { Carousel } from "react-responsive-carousel";
import Header from "../Componant/Header";
import SearchRecipe from "../Componant/search-recipe";

const Homepage = () => {
  return (
    <>
      <Carousel infiniteLoop showStatus={false} autoPlay interval={5000}>
        <Header imageUrl="/assets/images/recipes-header-bg.jpg" />
        <Header imageUrl="/assets/images/recipes-header-bg1.jpg" />
        <Header imageUrl="/assets/images/recipes-header-bg2.jpg" />
      </Carousel>

      <SearchRecipe />
    </>
  );
};

export default Homepage;
