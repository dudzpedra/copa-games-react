import { Link } from "react-router-dom";
import "./Header.module.css";
import lambda3 from '../../../assets/lambda3.svg'

const Header = () => {
  return (
    <header>
      <Link to="/">
        <img src={lambda3} alt="Logo Lambda3" id="header-logo"/>
      </Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </header>
  );
};

export default Header;
