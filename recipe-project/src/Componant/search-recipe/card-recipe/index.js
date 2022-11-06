import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import PopupCard from "../popup-card";
function RecipeCard({ recipe }) {
  const { image_url, title, recipe_id } = recipe;
  const [item, setItem] = useState("");
  const [open, setOpen] = useState(false);
  const onShowIngredients = () => {
    setItem(recipe_id);
    setOpen(true);
  };
  return (
    <Card sx={{ maxWidth: 345, marginBottom: 10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={image_url}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          variant="contained"
          color="primary"
          sx={{ width: "200px", margin: "auto" }}
          onClick={onShowIngredients}
        >
          Ingredients
        </Button>
        <PopupCard
          recipe_id={recipe_id}
          open={open}
          itemId={item}
          close={() => setOpen(false)}
          title={title}
        />
      </CardActions>
    </Card>
  );
}

export default RecipeCard;
