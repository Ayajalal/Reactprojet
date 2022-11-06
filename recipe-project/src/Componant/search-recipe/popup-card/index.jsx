import { Dialog, DialogTitle,DialogContent,Grid } from '@mui/material'
import React,{useEffect,useState} from 'react'
import Axios from 'axios';
function PopupCard({open,close,itemId,title}) {
    const [ingredient, setIngredients] = useState({}); //fetch recipe that i wanna store them
const image='';
const ingredientsItem=[];
  const url="https://forkify-api.herokuapp.com/api/get?rId="
  const getIngredients=async()=>{
const res= await Axios.get(url+itemId);
// console.log(res.data.recipe);
const data=res.data.recipe;
// const{ingredients,image_url}=data;
setIngredients(data);


  }
  useEffect(() => {
    
  itemId&&getIngredients();
  }, [itemId]);
 
  
  const {ingredients,image_url} =ingredient;
  ingredientsItem.push(ingredient)
  console.log("d"+ingredients)
  return (
  <Dialog open={open} onClose={close} fullScreen>

    <DialogTitle > {title}</DialogTitle>
    <DialogContent>
<Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6} >  <img src={image_url}></img></Grid>
  <Grid item xs={6} >
    ggggggg
    {/* {ingredient.ingredients.map((item)=>{
      return <p>{item}</p>
    })} */}
  </Grid>
</Grid>
    
    </DialogContent>
    
  </Dialog>
  )
}

export default PopupCard