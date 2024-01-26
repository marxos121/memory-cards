import { useState, useEffect } from "react";
import { prepareDeck } from "./fetchCards";
import "./App.css";

import Game from "./components/game";
import DifficultySlider from "./components/difficulty-slider";
import Header from "./components/header";
import Infotab from "./components/infotab";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const [score, setScore] = useState(0);
  const [cardsPerRound, setCardsPerRound] = useState(6);
  const [showInfo, setShowInfo] = useState(false);

  const totalDeckSize = 52;

  useEffect(() => {
    prepareDeck().then(() => {
      setLoading(false);
    });
  }, []);

  function restart() {
    setIsPlaying(false);
    setScore(0);
  }

  if (!isPlaying) {
    return (
      <>
        <Header showInfo={() => setShowInfo(true)} restart={restart} />
        <DifficultySlider
          initialValue={cardsPerRound}
          onConfirm={(value) => {
            setIsPlaying(true);
            setCardsPerRound(+value);
          }}
        />
        {showInfo && <Infotab hide={() => setShowInfo(false)} />}
      </>
    );
  } else if (isLoading) {
    return (
      <>
        <Header
          score={score}
          max_score={totalDeckSize}
          showInfo={() => setShowInfo(true)}
          restart={restart}
        />
        {showInfo && <Infotab hide={() => setShowInfo(false)} />}
      </>
    );
  } else {
    return (
      <>
        <Header
          score={score}
          max_score={totalDeckSize}
          showInfo={() => setShowInfo(true)}
          restart={restart}
        />
        <Game cardsPerRound={cardsPerRound} setScore={setScore} score={score} />
      </>
    );
  }
}

export default App;
