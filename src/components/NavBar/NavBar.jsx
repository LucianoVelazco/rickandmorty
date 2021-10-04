import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import Autocomplete from '@mui/material/Autocomplete';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import '../NavBar/NavBar.css'

const NavBar = () => {
  const [categories, setCategories] = useState('character');
  const [ fetchResponse, setFetchResponse ] =  useState([]);
  const dispatch = useDispatch() 
  const API = `https://rickandmortyapi.com/api/${categories}`
  useEffect(() => {
    fetch(API)
    .then((res)=>{
      res.json()
      .then((data)=>{
        console.log(data)
        setFetchResponse(data.results)
        dispatch(actions.setList(data.results))
        dispatch(actions.setFilterList(data.results))
      })  
    })
  },[API, dispatch])
  const handleChange = (event) => {
    console.log(categories)
    setCategories(event.target.value);
    dispatch(actions.setCategories(event.target.value))
    
  }
  return (
    <div className='navbar-container'>
      <div>
        <img className='navbar-container__logo' src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Rick_and_Morty.svg/2560px-Rick_and_Morty.svg.png'  alt='rickandmortylogo' />
      </div>
      <div className='navbar-container__form'>
          <div className='navbar-container__form--categories'>
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
              <MenuItem value={'location'}>Locations</MenuItem>
              </Select>
              </FormControl>
            </Box>
          </div>
          <div className='navbar-container__form--autocomplete'>
              <Autocomplete
                disablePortal
                id="combo-box-demo"
                options={fetchResponse ? fetchResponse : []}
                sx={{ width: 600 }}
                getOptionLabel = {(option) => option.name ? option.name :''}
                onSelect={(option) => {
                  dispatch(actions.filterList(option.target.value))
                  console.log("{onSelect}",option.target.value)
                }}
                renderInput={(params) => <TextField {...params} label="Select" 
                onChange = {(event) => {
                  console.log("[navbar]", event.target.value)
                  dispatch(actions.filterList(event.target.value))
                }}/>}
              />
          </div>
      </div>
    </div>
  );
};

export default NavBar;
