import React, {  } from 'react';
import PropTypes from 'prop-types'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './CardCharacter.css'

function CardCharacters(
  {
    name, 
    gender, 
    location,
    episode,
    image
}) {
  return (
    <div>
      <div className='card'>
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="200"
          image={image}
          alt={name}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {gender}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {location}
          </Typography>
          <Typography gutterBottom variant="body2" component="div">
            {episode}
          </Typography>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}


export default CardCharacters