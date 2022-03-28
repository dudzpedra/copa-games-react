import { Link } from "react-router-dom";
import GamesList from "../components/GamesList";

const Games = () => {
  return (
    <div>
      <GamesList />
      <Link to="/selected">SUBMIT GAMES</Link>
    </div>
  );
};

export default Games;
