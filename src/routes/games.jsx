import '../styles/games.css'
import GamesList from "../components/GamesList";
import Instructions from "../components/Instructions";

const Games = () => {
  return (
    <div className='games-container'>
      <Instructions/>
      <GamesList />
    </div>
  );
};

export default Games;
