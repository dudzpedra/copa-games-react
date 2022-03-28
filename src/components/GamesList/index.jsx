import Grid from "../ui/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { gamesActions } from "../../store/features/gamesSlice";
import fetchData from "../../services/api";
import GameCard from "../GameCard";

const GamesList = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games.allGames);
  const getData = async () => {
    const data = await fetchData();
    dispatch(gamesActions.setAllGames(data));
  };

  useEffect(() => {
    getData();
  });

  const handleSelect = (item) => {
    dispatch(gamesActions.selectGame(item));
  };

  return (
    <Grid>
      {allGames.map((item) => (
        <div key={item.id}>
          <GameCard item={item} onClick={() => handleSelect(item)} />
        </div>
      ))}
    </Grid>
  );
};

export default GamesList;
