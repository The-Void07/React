import { useState, useRef } from "react";

export default function Player() {
  const [enteredPlayerName, setPlayerName] = useState(null);
  const playerName = useRef();

  function handleClick() {
    setPlayerName(playerName.current.value);
    playerName.current.value = "";
  }

  return (
    <section id="player">
      <h2>Welcome {enteredPlayerName ?? "unknown entity"}</h2>
      <p>
        <input type="text" ref={playerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
