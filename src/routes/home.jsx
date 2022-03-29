import "../styles/home.css";
import { Link } from "react-router-dom";
import logo from '../assets/logo.svg'
import UIButton from "../components/ui/UIButton";
import marca from '../assets/marca.svg'

const Home = () => {
  return (
    <div className='home-container'>
      <div className='info'>
        <h1>Boas vindas a</h1>
        <img src={marca} alt="Marca Copa Games" id="marca" />
        <p>
          A Lambda3 está organizando uma Copa do Mundo de games, e precisamos de
          sua ajuda para determinar quais gamesestarão no pódio e quem é o
          grande campeão. O resultado de cada partida é determinado de acordo
          com a nota do público para cada um dos games.
        </p>
        <Link to="/games">
          <UIButton text='START' />
        </Link>
      </div>
      <img src={logo} alt="Copa Games Logo" id="logo" />
    </div>
  );
};

export default Home;
