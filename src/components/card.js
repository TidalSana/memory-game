import React from "react";
import "../style/card.css";

import Kirby from "./kirby";

let shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

const Cards = (props) => {
  const { addScore, minusScore } = props;

  // array of objects
  const kirbyAbilities = shuffleArray(Kirby);

  const resetArray = () => {
    const allImages = document.querySelectorAll(".image-card");
    allImages.forEach((item) => {
      if (item.className.includes("true")) {
        item.classList.remove("true");
        item.classList.add("false");
      }
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const target = e.target;
    console.log(target.className);
    if (target.className.includes("false")) {
      target.classList.add("true");
      target.classList.remove("false");
      addScore();
      return;
    }
    resetArray();
    minusScore();
  };

  return (
    <div className="play-area">
      {kirbyAbilities.map((ability) => {
        return (
          <div key={ability.id} className="card" onClick={handleClick}>
            <img
              src={ability.img}
              className={`image-card false ${ability.name}`}
              alt={ability.name}
            ></img>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
