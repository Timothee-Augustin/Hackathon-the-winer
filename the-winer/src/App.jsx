import React from "react";

import {
  BrowserRouter as Router,
  NavLink,
  Switch,
  Route,
} from "react-router-dom";

import Home from "./components/Home";
import logo5 from "./components/assets/logo5.png";
import Game from "./components/Game";
import "./App.css";

function App() {
  return (
    <>
      <Router>
        <ul>
          <NavLink activeClassName="current" className="link" exact to="/">
            Accueil
          </NavLink>
          <img className="logo" src={logo5} alt="" />
          <NavLink activeClassName="current" className="link" exact to="/game">
            Jouer
          </NavLink>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/game" component={Game} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
