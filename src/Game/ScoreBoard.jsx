export function ScoreBoard(props) {
  const { current, best } = props.scores;

  return (
    <div className="scoreboard typography-scoreboard">
      <span>Current Score: {current}</span>
      <span>Best Score: {best}</span>
    </div>
  );
}
