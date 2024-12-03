import { calculateInvestmentResults } from "../util/investment.js";

export default function UserInput({ onInputChange, list }) {
  return (
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            value={list.initialInvestment}
            onChange={(event) =>
              onInputChange("initialInvestment", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            value={list.annualInvestment}
            onChange={(event) =>
              onInputChange("annualInvestment", event.target.value)
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
            value={list.expectedReturn}
            onChange={(event) =>
              onInputChange("expectedReturn", event.target.value)
            }
            required
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            value={list.duration}
            onChange={(event) => onInputChange("duration", event.target.value)}
            required
          />
        </p>
      </div>
    </section>
  );
}
