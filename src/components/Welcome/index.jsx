import marca from '../../assets/marca.svg'
import UIButton from '../ui/UIButton';
import { Link } from "react-router-dom";

const Welcome = () => {
  return (
    <div className="info">
      <h1>Boas vindas a</h1>
      <img src={marca} alt="Marca Copa Games" />
      <p>
        A Lambda3 está organizando uma Copa do Mundo de games, e precisamos de
        sua ajuda para determinar quais gamesestarão no pódio e quem é o grande
        campeão. O resultado de cada partida é determinado de acordo com a nota
        do público para cada um dos games.
      </p>
      <Link to="/games">
        <UIButton text="START" />
      </Link>
    </div>
  );
};

export default Welcome