import { Outlet } from "react-router-dom";
import "./App.css";
import Footer from "./components/ui/Footer";
import Header from "./components/ui/Header";

function App() {
  

  return (
    <div className="App">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
