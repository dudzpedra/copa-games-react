import Grid from "../ui/Grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import fetchData from "../../services/api";
import GameCard from "../GameCard";
import UIButton from "../ui/UIButton";
import { setGames, selectGame } from "../../store/actions/gamesActions";

const GamesList = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games.allGames);

  const getData = async () => {
    const data = await fetchData();
    dispatch(setGames(data));
  };

  useEffect(() => {
    getData();
  });

  const handleSelect = (item) => {
    dispatch(selectGame(item));
  };

  return (
    <Grid>
      {allGames.map((item) => (
        <div key={item.id}>
          <GameCard item={item}>
            <UIButton text='SELECT' onClick={() => handleSelect(item)} />
          </GameCard>
        </div>
      ))}
    </Grid>
  );
};

export default GamesList;
