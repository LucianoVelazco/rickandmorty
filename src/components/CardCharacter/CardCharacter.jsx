import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import './CardCharacter.css'


export default function CardCharacters(
  {
    name, 
    gender, 
    location,
    episode,
    image
}
)
 {
   const dispatch = useDispatch() 
   const comparelist = useSelector((state) => state.comparelist);
  const handletocompare = () => {
    const finditcharacter = comparelist.filter(item =>(item.name === name))
    if (comparelist.length < 3 && finditcharacter.length === 0 ){
      dispatch(actions.addcomparelist(
        {
          name: name,
          gender:gender,
          location: location,
          image: image,
          episode: episode 
        }
        )) 
    }
  }
  return (
    <>
    <Box sx={{ flexGrow: 1 }} >
        <Box display="grid" gridTemplateColumns="repeat(3, 1fr)">
          <Box gridColumn="span 5">
      <Card sx={{ maxWidth: 345 }} className='card' >
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
        />
        <CardContent >
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {gender}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
           {location && location.name}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {episode && episode[0]}
          </Typography>
        </CardContent>
        <Button variant="contained" onClick={handletocompare}>Compare</Button>
      </Card>
            </Box>
        </Box>

    </Box>
    </>
  );
}
