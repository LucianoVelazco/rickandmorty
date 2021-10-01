import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import './CardLocation.css'

export default function CardLocation() {
  const [ location, setLocation] = useState([]);
  const [ type, setType ] =  useState([]);
  const [ dimension, setDimension] = useState([]);
  const [ population, setPopulation] = useState([]);
  const [ creationDate, setCreationDate] = useState([]);
  return (
    <div>
      <div class='card'>
      <Card sx={{ maxWidth: 345 }}>
          <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            LocationName
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Type
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Dimension
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Population
          </Typography>
          <Typography gutterBottom variant="body1" component="div">
            Creation Date
          </Typography>
        </CardContent>
      </Card>
    </div>
    </div>
  );
}
