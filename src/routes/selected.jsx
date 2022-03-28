import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "../components/ui/Grid";
import { gamesActions } from "../store/features/gamesSlice";

const Selected = () => {
  const dispatch = useDispatch();
  const selectedGames = useSelector((state) => state.games.selectedGames);

  const handleSort = () => dispatch(gamesActions.sortByName());
  const handleStart = () => dispatch(gamesActions.sortGames());

  return (
    <div>
      <Grid>
        {selectedGames.map((item) => (
          <div key={item.id} className="game-card">
            <img
              src={item.urlImagem}
              alt={item.titulo}
              style={{ width: 300 }}
            />
            <p>{item.titulo}</p>
            <p>{item.ano}</p>
            <p>{item.nota}</p>
          </div>
        ))}
      </Grid>
      <button onClick={handleSort}>Sort By Name</button>
      <Link to='/winners'>
        <button onClick={handleStart}>Start Competition</button>
      </Link>
    </div>
  );
};

export default Selected;
