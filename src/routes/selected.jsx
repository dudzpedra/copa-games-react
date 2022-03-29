import '../styles/selected.css'
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "../components/ui/Grid";
import { gamesActions } from "../store/features/gamesSlice";
import GameCard from '../components/GameCard/index'
import { Button } from "@mui/material";

const Selected = () => {
  const dispatch = useDispatch();
  const selectedGames = useSelector((state) => state.games.selectedGames);

  const handleStart = () => dispatch(gamesActions.sortGames());

  return (
    <div className="container">
      <Link to='/winners'>
        <Button variant="contained" onClick={handleStart}>Start Competition</Button>
      </Link>
      <Grid>
        {selectedGames.map((item) => (
          <div key={item.id}>
          <GameCard item={item} />
        </div>
        ))}
      </Grid>
    </div>
  );
};

export default Selected;
