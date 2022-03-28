import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store";
import Games from "./routes/games";
import About from "./routes/about";
import Contact from "./routes/contact";
import Home from "./routes/home";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="home" element={<Home />}/>
            <Route path="games" element={<Games />}/>
            <Route path="about" element={<About />}/>
            <Route path="contact" element={<Contact />}/>
          </Route>        
        </Routes>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
