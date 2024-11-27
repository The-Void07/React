export default function Gameover({ winner, onRestart }) {
  return (
    <div id="game-over">
      <h2>Game Over</h2>
      <div>{winner && <p> {winner} won!</p>}</div>
      <div>{!winner && <p> It's a draw.</p>}</div>
      <button onClick={onRestart}>Rematch</button>
    </div>
  );
}
