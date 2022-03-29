import '../styles/results.css'
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import GameCard from "../components/GameCard"

const Results = () => {
    const winner = useSelector(state => state.games.winner)
    const navigate = useNavigate()
    setTimeout(() => navigate('/winners'), 3000)
    return (
        <div className='results-container'>
            <GameCard item={winner} />
        </div>
    )
}

export default Results