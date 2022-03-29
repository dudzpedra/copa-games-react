import "../styles/home.css";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import logo from '../assets/logo.png'

const Home = () => {
  return (
    <div className='container'>
      <div className='info'>
        <h2>Boas vindas a</h2>
        <h1>Copa Games</h1>
        <p>
          A Lambda3 está organizando uma Copa do Mundo de games, e precisamos de
          sua ajuda para determinar quais gamesestarão no pódio e quem é o
          grande campeão. O resultado de cada partida é determinado de acordo
          com a nota do público para cada um dos games.
        </p>
        <Link to="/games">
          <Button variant="contained">START</Button>
        </Link>
      </div>
      <img src={logo} alt="Copa Games Logo" />
    </div>
  );
};

export default Home;
