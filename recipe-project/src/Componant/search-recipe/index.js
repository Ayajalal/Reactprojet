import React, { useState, useEffect } from "react";
import Axios from "axios";
import RecipeCard from "./card-recipe";
import style from "./style.module.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { width } from "@mui/system";
const searchApi = "https://forkify-api.herokuapp.com/api/search?q=";

function SearchRecipe() {
  const [load, setLoad] = useState(false); //fetch data or not
  const [query, setQuery] = useState("pizza"); //the input of url
  const [recipes, setRecipes] = useState([]); //fetch recipe that i wanna store them
  //function to search for recipe
  const searchRecipes = async () => {
    setLoad(true);
    const url = searchApi + query;
    const res = await Axios.get(url); //asycn
    const data = res.data.recipes;

    console.log(data);
    setRecipes(data);
    // console.log(recipes);
    setLoad(false);
  };
  useEffect(() => {
    searchRecipes();
    // console.log(recipes + "kkk");
  }, []);
  const onSubmit = (e) => {
    e.preventDefault();
    searchRecipes();
  };
  return (
    <div className={style.wrapper}>
      {/* const {recipes}=recipes; */}
      <Box sx={{ flexGrow: 1 }}>
        <h2>Our Recipe </h2>
        <TextField
          id="outlined-basic"
          defaultValue={query}
          variant="filled"
          onChange={(e) => setQuery(e.target.value)}
          sx={{ marginBottom: "20px", marginRight: 10 }}
        />
        <Button
          size="large"
          variant="contained"
          color="primary"
          sx={{ height: 53 }}
          onClick={onSubmit}
        >
          Search
        </Button>
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {recipes
            ? recipes.map((recipe, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <RecipeCard recipe={recipe} key={recipe.recipe_id} />
                </Grid>
              ))
            : "no Recipe"}
        </Grid>{" "}
      </Box>
    </div>
  );
}

export default SearchRecipe;
