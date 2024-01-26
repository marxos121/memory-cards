import { useState } from "react";
import PropTypes from "prop-types";

import { fetchCards } from "../fetchCards";

export default function Game({ cardsPerRound, setScore }) {
  const [cards, setCards] = useState(fetchCards(cardsPerRound));
  const [clicked, setClicked] = useState(new Set());

  function getNewCards() {
    setCards(fetchCards(cardsPerRound));
  }

  function onCardClicked(code) {
    if (clicked.has(code)) {
      setScore(0);
      setClicked(new Set());
    } else {
      const temp = new Set(clicked);
      temp.add(code);
      setClicked(temp);
      setScore((score) => score + 1);
    }
    getNewCards();
  }

  return (
    <div className="cards">
      {cards.map((card) => (
        <img
          className="card"
          src={card.image}
          key={card.code}
          alt={card.code}
          onClick={() => {
            onCardClicked(card.code);
          }}
        />
      ))}
    </div>
  );
}

Game.propTypes = {
  cardsPerRound: PropTypes.number.isRequired,
  setScore: PropTypes.func.isRequired,
};
