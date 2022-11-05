import React, { useState, useEffect } from "react";
import Axios from "axios";
import RecipeCard from "./card-recipe";
import style from "./style.module.css";
const searchApi = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

function SearchRecipe() {
  const [load, setLoad] = useState(false); //fetch data or not
  const [query, setQuery] = useState(""); //the input of url
  const [recipes, setRecipes] = useState([]); //fetch recipe that i wanna store them
  //function to search for recipe
  const searchRecipes = async () => {
    setLoad(true);
    const url = searchApi + query;
    const res = await Axios.get(url);
    const data = await res.data.meals;
    // console.log("data" + data);
    setRecipes(data);
    console.log(JSON.stringify(data) + "hello");
    setLoad(false);
  };
  useEffect(() => {
    searchRecipes();
  }, []);
  return (
    <div className="wrapper">
      <h2>Our Recipe </h2>
      <div className={style.recipes}>
        {recipes
          ? recipes.map((recipe) => (
              <RecipeCard recipe={recipe} key={recipe.idMeal} />
            ))
          : "no Recipe"}
      </div>
    </div>
  );
}

export default SearchRecipe;
