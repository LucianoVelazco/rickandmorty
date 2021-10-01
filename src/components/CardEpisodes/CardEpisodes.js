import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './CardEpisodes.css'

export default function CardLocation() {
  const [ episode, setEpisode] = useState([]);
  const [ emision, setEmision ] =  useState([]);
  const [ code, setCode] = useState([]);
  return (
    <div>
      <div class='card'>
      <Card sx={{ maxWidth: 345 }}>
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Nombre
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Fecha de Emision
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Codigo de Episodio
          </Typography>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
