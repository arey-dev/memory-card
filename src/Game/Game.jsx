import { useState, useEffect } from "react";
import { GameBoard } from "./GameBoard";

export function Game() {
  const [scores, setScores] = useState({ current: 0, best: 0 });

  return <GameBoard scores={scores} />;
}
