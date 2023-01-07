import { useState, useEffect } from "react";
import { GameBoard } from "./GameBoard";
import { useData } from "./hooks";
import { storeCard, isCardStored, resetStoredCards } from "./game_utils";

export function Game() {
  const pokemons = useData(8);

  const [scores, setScores] = useState({ current: 0, best: 0 });

  const updateScore = (point) => {
    const score = scores.current + 1;

    setScores((prevScores) => {
      const score = scores.current + point;

      if (score > scores.best) {
        return { current: score, best: score };
      }

      return { ...prevScores, current: score };
    });
  };

  const resetScore = () => {
    setScores((prevScores) => {
      return { ...prevScores, current: 0 };
    });
  };

  const play = (id) => {
    if (!isCardStored(id)) {
      storeCard(id);
      updateScore(1);
    } else {
      resetScore();
      resetStoredCards();
    }
  };

  const handleCardClick = (e) => {
    const target = e.target.closest(".card");

    if (!target || target.tagName !== "DIV") return;

    const id = target.getAttribute("data-id");

    play(id);
  };

  return (
    <GameBoard
      cards={pokemons}
      scores={scores}
      onHandleCardClick={handleCardClick}
    />
  );
}
