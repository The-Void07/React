import Player from "./Components/Player.jsx";
import Gameboard from "./Components/Gameboard.jsx";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player initialName="Player-1" symbol="X" />
          <Player initialName="Player-2" symbol="O" />
        </ol>
      </div>
      <Gameboard />
    </main>
  );
}

export default App;
