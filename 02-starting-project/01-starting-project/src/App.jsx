import { useState } from "react";
import Header from "./components/Header.jsx";
import UserInput from "./components/User-input.jsx";
import Results from "./components/Results-table.jsx";

const objList = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

function App() {
  const [userInput, setUserInput] = useState(objList);

  const inputIsValid = userInput.duration >= 1;

  function handleInput(inputIdentifier, newValue) {
    setUserInput((preValue) => {
      return {
        ...preValue,
        [inputIdentifier]: +newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput onInputChange={handleInput} list={userInput} />
      {inputIsValid && <Results list={userInput} />}
      {!inputIsValid && (
        <p className="center">Please enter a duration greater then zero.</p>
      )}
    </>
  );
}

export default App;
