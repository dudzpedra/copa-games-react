import "../styles/winners.css";
import { useDispatch, useSelector } from "react-redux";
import GameCard from "../components/GameCard/index";
import star1 from "../assets/winner.svg";
import star2 from "../assets/vice.svg";
import UIButton from "../components/ui/UIButton";
import { Link } from "react-router-dom";
import { startOver } from "../store/actions/gamesActions";

const Winners = () => {
  const winner = useSelector((state) => state.games.winner);
  const vice = useSelector((state) => state.games.vice);
  const dispatch = useDispatch()

  const handleStart = () => dispatch(startOver())

  return (
    <div className="winners-container">
      <div className="winners">
        <div>
          <h2 id='winner-title'>WINNER</h2>
          <div className="winner-card">
            <img src={star1} alt="Star with number 1" id="star1" />
            <GameCard item={winner} />
          </div>
        </div>
        <div>
          <h2 id='winner-title'>VICE</h2>
          <div className="vice-card">
            <img src={star2} alt="Star with number 2" id="star2" />
            <GameCard item={vice} />
          </div>
        </div>
      </div>
      <Link to='/games'>
        <UIButton onClick={handleStart} text="START AGAIN" />
      </Link>
    </div>
  );
};

export default Winners;
