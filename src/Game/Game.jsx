import { useState, useEffect } from "react";
import { GameBoard } from "./GameBoard";
import { useData } from "./hooks/useData";

export function Game() {
  const pokemons = useData();

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

  const handleCardClick = (e) => {
    updateScore(1);
  };

  return (
    <GameBoard
      cards={pokemons}
      scores={scores}
      onHandleCardClick={handleCardClick}
    />
  );
}
