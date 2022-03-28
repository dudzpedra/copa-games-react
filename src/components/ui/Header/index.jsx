import { Link } from "react-router-dom";
import "./Header.module.css";

const Header = () => {
  return (
    <header>
      <Link to="/">
        <h2>Copa Games 2.0</h2>
      </Link>
      <nav>
        <Link to="/games">Games</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
