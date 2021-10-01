import CardChatacters  from './CardCharacter/CardCharacter';
import CardLocation from './CardLocation/CardLocation'
import CardEpisode  from './CardEpisodes/CardEpisodes'
import NavBar from './NavBar/NavBar';


function Home() {
  return (
    <div>
      <NavBar />
      <CardChatacters /> 
      <CardLocation />
      <CardEpisode />
    </div>
  );
}

export default Home;