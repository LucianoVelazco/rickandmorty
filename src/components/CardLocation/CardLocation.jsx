import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './CardLocation.css'

export default function CardLocation(
  {
    name,
    type, 
    dimension,
    residents,
    created,
}) {
  return (
    <div>
      <div className='card'>
      <Card sx={{ maxWidth: 345 }}>
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {type}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {dimension}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {residents && residents.length}
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            {created}
          </Typography>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
