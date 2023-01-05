import { CardsGrid } from "./CardsGrid";
import { ScoreBoard } from "./ScoreBoard";

export function GameBoard(props) {
  return (
    <div className="container container--board flex">
      <ScoreBoard />
      <CardsGrid />
    </div>
  );
}