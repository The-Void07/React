import { useState, useRef } from "react";

export default function Timer({ title, targetTime }) {
  const timer = useRef();
  const [timeStarted, setTimeStarted] = useState(false);
  const [timeExpired, setTimeExpired] = useState(false);

  function handleStart() {
    timer.current = setTimeout(() => {
      setTimeExpired(true);
    }, targetTime * 1000);
    setTimeStarted(true);
  }

  function handleStop() {
    clearTimeout(timer.current);
    setTimeStarted(false);
  }

  return (
    <section className="challenge">
      <h2>{title}</h2>
      {timeExpired && <p>You lost!</p>}
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? "s" : ""}
      </p>
      <button onClick={timeStarted ? handleStop : handleStart}>
        {timeStarted ? "Stop" : "Start"} Challenge
      </button>
      <p className={timeStarted ? "active" : ""}>
        {timeStarted ? "Timer is running" : "Timer inactive"}
      </p>
    </section>
  );
}
