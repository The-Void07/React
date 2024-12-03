import { useState } from "react";
import { calculateInvestmentResults } from "../util/investment.js";

const objList = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function UserInput() {
  const [userInput, setUserInput] = useState(objList);

  function handleInput(inputIdentifier, newValue) {
    setUserInput((preValue) => {
      return {
        ...preValue,
        [inputIdentifier]: newValue,
      };
    });
  }

  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={userInput.initialInvestment}
            onChange={(event) =>
              handleInput("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={userInput.annualInvestment}
            onChange={(event) =>
              handleInput("annualInvestment", event.target.value)
            }
            required
          />
        </p>
      </div>

      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            value={userInput.expectedReturn}
            onChange={(event) =>
              handleInput("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={userInput.duration}
            onChange={(event) => handleInput("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
