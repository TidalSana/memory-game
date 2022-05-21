import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import Header from "./components/header";
import Cards from "./components/card";
import "./style/App.css";

function App() {
  // current state, func to change score
  const [score, setScore] = useState(0);

  const addScore = () => {
    setScore(score + 1);
  };

  const [best, setBest] = useState(0);

  const addBest = () => {
    setBest(score);
  };

  const minusScore = () => {
    addBest();
    setScore(0);
  };

  return (
    <div className="App">
      <Header score={score} best={best} />
      <div className="content">
        <Cards addScore={addScore} minusScore={minusScore} addBest={addBest} />
      </div>
      <footer className="footer-div" id="footer">
        <p className="footer-text">
          Made by <FontAwesomeIcon icon={faGithub} />
          <a className="link" href="https://github.com/TidalSana">
            TidalSana
          </a>
          .2022.
        </p>
      </footer>
    </div>
  );
}

export default App;
