import { useDispatch, useSelector } from "react-redux";
import fetchData from "../services/api";
import { gamesActions } from "../store/features/gamesSlice";
import { useEffect } from "react";
import '../styles/games.css'

const Games = () => {
  const dispatch = useDispatch();
  const allGames = useSelector((state) => state.games.allGames);
  const selectedGames = useSelector((state) => state.games.selectedGames);

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

  //TODO transfer the sorting logic to the store
  const handleSort = () => dispatch(gamesActions.sortByName());
  return (
    <div>
      <div className="all-games-list">
        {allGames.map((item) => (
          <div key={item.id} className="game-card">
            <img
              alt={item.titulo}
              src={item.urlImagem}
              style={{ width: 300 }}
            />
            <p>{item.titulo}</p>
            <p>{item.ano}</p>
            <p>Nota: {item.nota}</p>
            <button onClick={() => handleSelect(item)}>select game</button>
          </div>
        ))}
      </div>
      {selectedGames.map((item) => (
        <div key={item.id} className="game-card">
          <p>{item.titulo}</p>
          <p>{item.console}</p>
        </div>
      ))}
      <button onClick={handleSort}>Sort By Name</button>
    </div>
  );
};

export default Games;
