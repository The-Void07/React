import Player from "./Components/Player.jsx";
import Gameboard from "./Components/Gameboard.jsx";
import { useState } from "react";

function App() {
  const [activePlayer, setActivePlayer] = useState("X");

  function handleSelectSquare() {
    setActivePlayer((curActivePlayer) => (curActivePlayer === "X" ? "O" : "X"));
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            initialName="Player-1"
            symbol="X"
            isActive={activePlayer === "X"}
          />
          <Player
            initialName="Player-2"
            symbol="O"
            isActive={activePlayer === "O"}
          />
        </ol>
      </div>
      <Gameboard
        onSelectSquare={handleSelectSquare}
        activePlayerSymbol={activePlayer}
      />
    </main>
  );
}

export default App;
