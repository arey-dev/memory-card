export function ScoreBoard(props) {
  const { currentScore, bestScore } = props;

  return (
    <div className="scoreboard typography-scoreboard">
      <span>Current Score: {currentScore}</span>
      <span>Best Score: {bestScore}</span>
    </div>
  );
}
