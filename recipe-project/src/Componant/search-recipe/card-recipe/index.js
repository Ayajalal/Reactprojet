import React from "react";

function RecipeCard({ recipe }) {
  const { idMeal, strMeal } = recipe;
  return (
    <div>
      {idMeal}
      {strMeal}
    </div>
  );
}

export default RecipeCard;
