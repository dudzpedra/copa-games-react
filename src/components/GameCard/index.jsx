import './GameCard.module.css'

const GameCard = ({ item, onClick }) => {
  return (
    <div className="card">
      <img alt={item.titulo} src={item.urlImagem} style={{ width: 300 }} />
      <p>{item.titulo}</p>
      <p>{item.ano}</p>
      <p>Nota: {item.nota}</p>
      <button onClick={onClick}>select game</button>
    </div>
  );
};

export default GameCard;
