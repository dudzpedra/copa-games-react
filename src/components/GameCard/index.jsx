import styles from './GameCard.module.css'

const GameCard = ({ item }) => {
  return (
    <div className={styles.card}>
      <img alt={item.titulo} src={item.urlImagem} />
      <p>{item.titulo}</p>
      <p>{item.ano}</p>
      <p>Nota: {item.nota}</p>
    </div>
  );
};

export default GameCard;
