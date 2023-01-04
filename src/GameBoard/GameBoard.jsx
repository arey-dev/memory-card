import { CardsGrid } from './CardsGrid/CardsGrid'
import { ScoreBoard } from './ScoreBoard'

export function GameBoard(props) {
  return (
    <div className="container container--board flex">
      <ScoreBoard />
      <CardsGrid />
    </div>
  )
}