import "../styles/home.css";
import Avatar from "../components/Avatar";
import Welcome from "../components/Welcome";

const Home = () => {
  return (
    <div className='home-container'>
      <Avatar id="logo" />
      <Welcome />
    </div>
  );
};

export default Home;
