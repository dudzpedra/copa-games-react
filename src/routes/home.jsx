import { Link } from "react-router-dom"

const Home = () => {
    return (
        <div>
            <h2>Welcome to Copa Games 2.0!</h2>
            <Link to='/games'>
                <button>START</button>
            </Link>
        </div>
    )
}

export default Home