import Marca from "../../components/Marca";
import { Link } from "react-router-dom";
import img from "../../assets/chevron.svg";
import s from './GamesTitle.module.css'

const GamesTitle = () => {
  return (
    <div className={s.gamesTitle}>
      <div className={s.backBtn}>
        <img src={img} alt="Go back" className={s.chevron} />
        <Link to="/" className={s.backLink}>
          <p className={s.backMsg}>Voltar para o Início</p>
        </Link>
      </div>
      <Marca />
    </div>
  );
};

export default GamesTitle;
