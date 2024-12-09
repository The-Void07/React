import Player from "./components/Player.jsx";
import Timer from "./components/TimerChallenge.jsx";

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <Timer title="Beginner" targetTime={1} />
        <Timer title="Easy" targetTime={5} />
        <Timer title="Medium" targetTime={10} />
        <Timer title="Hard" targetTime={15} />
      </div>
    </>
  );
}

export default App;
