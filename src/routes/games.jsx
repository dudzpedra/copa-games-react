import "../styles/games.css";
import GamesList from "../components/GamesList";
import Instructions from "../components/Instructions";
import { useEffect, useState } from "react";
import { useSelector} from 'react-redux'
import { Alert } from "@mui/material";
import GamesTitle from "../components/GamesTitle";

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
      <GamesTitle />
      <Instructions />
      <GamesList />
    </div>
  );
};

export default Games;
