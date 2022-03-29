import '../styles/winners.css'
import { useSelector } from "react-redux";
import GameCard from "../components/GameCard/index";

const Winners = () => {
  const winner = useSelector((state) => state.games.winner);
  const vice = useSelector((state) => state.games.vice);

  return (
    <div className='winners'>
        <div>
          <h2>WINNER</h2>
          <GameCard item={winner} />
        </div>
        <div>
          <h2>VICE</h2>
          <GameCard item={vice} />
        </div>
    </div>
  );
};

export default Winners;
