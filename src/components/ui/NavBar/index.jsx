import styles from './NavBar.module.css'
import { Link } from "react-router-dom";
import lambda3 from '../../../assets/lambda3.svg'

const NavBar = () => {
  return (
    <div className={styles.navbarContainer}>
      <Link to="/">
        <img src={lambda3} alt="Logo Lambda3" id="header-logo" />
      </Link>
      <nav>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>
    </div>
  );
};

export default NavBar