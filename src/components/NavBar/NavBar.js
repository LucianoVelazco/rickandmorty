import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import '../NavBar/NavBar.css'

const NavBar = () => {
  const [categories, setCategories] = useState('character');
  const [fetchResponse, setFetchResponse] = useState([]);
  const API = `https://rickandmortyapi.com/api/${categories}`
  useEffect(() => {
    fetch(API)
    .then((res)=>{
      res.json()
      .then((data)=>{
        console.log(data)
        setFetchResponse(data.results)
      })  
    })
  },[API])
  const handleChange = (event) => {
    setCategories(event.target.value);
  }
  const CharactersList = () => {
    const results =  fetchResponse.map(item =>(item.name))
    return results
  }
  return (
    <div className='navbar-container'>
      <div>
        <img className='navbar-container__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png'  alt='rickandmortylogo' />
      </div>
      <div className='navbar-container-form'>
          <div>
          <Box sx={{ minWidth: 250 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Categories</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={categories}
              label="Categories"
              onChange={handleChange}>
              <MenuItem value={'character'}>Characters</MenuItem>
              <MenuItem value={'episode'}>Episode</MenuItem>
              <MenuItem value={'location '}>Locations</MenuItem>
              <MenuItem value={'comparative'}>Comparative</MenuItem>
              </Select>
              </FormControl>
            </Box>
          </div>
          <div>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={fetchResponse ? CharactersList() : [] }
                sx={{ width: 300 }}
                renderInput={(params) => <TextField {...params} label="Movie" />}
              />
          </div>
         <div>
            <Stack direction="row" spacing={3}>
              <Button variant="contained">Search</Button>
            </Stack>
          </div>
      </div>
      <div className='navbar-container__menu'>
        <div>
          <p>Characters</p>
        </div>
        <div>
          <p>Episode</p>
        </div>
        <div>
          <p>Locations</p>
        </div>
      </div>
      
    </div>
  );
};

export default NavBar;
