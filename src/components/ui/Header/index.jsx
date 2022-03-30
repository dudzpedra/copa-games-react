import BurgerMenu from "../BurgerMenu";
import NavBar from "../NavBar";
import Social from "../Social";
import "./Header.module.css";

const Header = () => {
  return (
    <header>
      <NavBar />
      <Social />
      <BurgerMenu />
    </header>
  );
};

export default Header;
