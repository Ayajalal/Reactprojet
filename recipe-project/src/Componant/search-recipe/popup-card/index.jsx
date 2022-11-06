import { Dialog, DialogTitle,DialogContent,Grid } from '@mui/material'
import React,{useEffect,useState} from 'react'
import Axios from 'axios';
function PopupCard({open,close,itemId,title}) {
    const [ingredient, setIngredients] = useState({}); //fetch recipe that i wanna store them
    const [ingredientData,setIngredientData]=useState([]);
const image='';
  const [load, setLoad] = useState(false); 
const ingredientsItem=[];
  const url="https://forkify-api.herokuapp.com/api/get?rId="
  const getIngredients=async()=>{
    setLoad(true);
const res= await Axios.get(url+itemId);
const data=res.data.recipe;

setIngredients(data);
setIngredientData(data.ingredients);

setLoad(false);
  }
  useEffect(() => {
    
  itemId&&getIngredients();
  }, [itemId]);
 
  
  


  return (
   
  <Dialog open={open} onClose={close} fullScreen>

    <DialogTitle > {title}</DialogTitle>
    <DialogContent>
<Grid container  rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6} >  <img src={ingredient.image_url}></img></Grid>
  <Grid item xs={6} >
  
    {ingredientData.map((item,index)=>{
    return<p key={index}>{item}</p>
    })
    }
  </Grid>
</Grid>
    
    </DialogContent>
    
  </Dialog>
  )
}

export default PopupCard