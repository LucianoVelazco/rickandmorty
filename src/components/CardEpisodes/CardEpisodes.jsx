import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './CardEpisodes.css'

export default function CardEpisodes(
  {
    name,
    air_date,
    espisode
  }) 
  {
 
  return (
    <div>
      <div className='card'>
      <Card sx={{ maxWidth: 345 }}>
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {air_date}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {espisode}
          </Typography>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
