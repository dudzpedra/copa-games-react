import { useSelector } from "react-redux";
import GameCard from "../components/GameCard/index";
import Grid from "../components/ui/Grid";

const Winners = () => {
  const winner = useSelector((state) => state.games.winner);
  const vice = useSelector((state) => state.games.vice);

  return (
    <div>
      <Grid>
        <div>
          <h2>WINNER</h2>
          <GameCard item={winner} />
        </div>
        <div>
          <h2>VICE</h2>
          <GameCard item={vice} />
        </div>
      </Grid>
    </div>
  );
};

export default Winners;
