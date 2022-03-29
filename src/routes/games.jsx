import "../styles/games.css";
import GamesList from "../components/GamesList";
import Instructions from "../components/Instructions";
import Marca from "../components/Marca";
import { Link } from "react-router-dom";
import img from "../assets/chevron.svg";
import { useEffect, useState } from "react";
import { useSelector} from 'react-redux'
import { Alert } from "@mui/material";

const Games = () => {
  const selectedGames = useSelector((state) => state.games.selectedGames);
  const amount = useSelector((state) => state.games.amount);
  const [showAlert, setShowAlert] = useState(false);

  useEffect(() => {
    if (selectedGames.length === amount) {
      setShowAlert(true);
      setTimeout(() => setShowAlert(false), 4000)
    }
  }, [selectedGames, amount]);
  return (
    <div className="games-container">
      {showAlert && (
        <Alert severity="success">You've selected {amount} games! You can now click on submit games.</Alert>
      )}
      <div className="games-title">
        <div className="back-btn">
          <img src={img} alt="Go back" id="chevron" />
          <Link to="/" id="back-link">
            <p>Voltar para o Início</p>
          </Link>
        </div>
        <Marca />
      </div>
      <Instructions />
      <GamesList />
    </div>
  );
};

export default Games;
