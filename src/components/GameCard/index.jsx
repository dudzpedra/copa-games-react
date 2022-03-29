import { useSelector } from 'react-redux';
import styles from './GameCard.module.css'

const GameCard = ({ item, children }) => {
  const selectedGames = useSelector(state => state.games.selectedGames)
  const isSelected = selectedGames.find(game => game.id === item.id)
  return (
    <div className={isSelected ? styles.selected : styles.card}>
      <img alt={item.titulo} src={item.urlImagem} />
      <p>{item.titulo}</p>
      <p>{item.ano}</p>
      <p>Nota: {item.nota}</p>
      {children}
    </div>
  );
};

export default GameCard;
