import CardChatacters  from '../CardCharacter/CardCharacter.jsx';
import CardLocation from '../CardLocation/CardLocation.jsx'
import CardEpisode  from '../CardEpisodes/CardEpisodes.jsx'
import NavBar from '../NavBar/NavBar.jsx';
import { createTheme, ThemeProvider  } from '@mui/material/styles';
import { useSelector, useDispatch } from 'react-redux';
import * as actions from '../../redux/actions';
import Button from '@mui/material/Button';
import './Home.css'


function Home() {
  const list = useSelector((state) => state.list);
  const categories = useSelector((state) => state.categories);
  const filterlist = useSelector((state) => state.filterlist);
  const comparelist = useSelector((state) => state.comparelist);
  const dispatch = useDispatch() 
  const handledelete = (name) => {
    dispatch(actions.removecomparelist(name))
  }
  const findwinner = () => {
    let winner = 0
    comparelist.forEach(item => {
      const episodes = item.episode.length
      if (episodes > winner) {
        winner = episodes
      }
    })
    return winner
  }
  const theme = createTheme({
    palette: {
      primary:{
        main: "#ff9800",
      }
    },
  });
  return (
    <div>
      <NavBar />
      {  
      comparelist.length > 0  &&
      <div className='card-compare'> 
      <h1>Comparative List</h1>
      {  comparelist.map(item => (<div>
        <img src={item.image} alt={item.name}
        />
        <p className='card-compare__name'>{item.name}</p>
        <p className='card-compare__episodes'>Episodes: {item.episode.length}</p>
        {findwinner() === item.episode.length && <p className='card-compare__episodes--winner'>Winner!</p>}
        <ThemeProvider theme={theme}>
        <Button variant="outlined" onClick={()=>handledelete(item.name)} size="large" color="primary">Delete</Button>
        </ThemeProvider>
          </div>))}
      </div>
      }
      <h1 className='all-title'>All</h1>
      <div className='card-result'>
      {
        list && filterlist &&
        categories === 'character' ?
        filterlist.map(item => <CardChatacters key={item.name} {...item}/>)
        : categories === 'episode' ? filterlist.map(item => <CardEpisode key={item.name} {...item}/>)
        : filterlist.map(item => <CardLocation key={item.name} {...item}/>)
      }
      </div>
    </div>
  );
}

export default Home;