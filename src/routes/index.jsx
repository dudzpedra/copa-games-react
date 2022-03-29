import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "../App";
import Games from "./games";
import About from "./about";
import Contact from "./contact";
import Home from "./home";
import Selected from "./selected";
import Winners from "./winners";
import Results from "./results";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="games" element={<Games />} />
          <Route path="selected" element={<Selected />} />
          <Route path="results" element={<Results />} />
          <Route path="winners" element={<Winners />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRoutes;
