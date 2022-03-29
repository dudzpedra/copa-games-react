import Menu from "../Menu";
import NavBar from "../NavBar";
import Social from "../Social";
import "./Header.module.css";

const Header = () => {
  return (
    <header>
      <NavBar />
      <Social />
      <Menu />
    </header>
  );
};

export default Header;
