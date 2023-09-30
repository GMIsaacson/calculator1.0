import React, { useState } from "react";
import "../Calculator.css";

const LogCalculator = () => {
  const [base, setBase] = useState("");
  const [argument, setArgument] = useState("");
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState("");

  const calculateLog = () => {
    if (base && argument) {
      const resultLog = Math.log(argument) / Math.log(base);
      setResult(`Answer: y = ${resultLog}`);
      setSteps(
        `log${base}(${argument}) = ${resultLog}\n${base}^${resultLog} = ${argument}`
      );
    }
  };

  const clearFields = () => {
    setBase("");
    setArgument("");
    setResult("");
    setSteps("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Logarithm Calculator</h1>

        <div className="input-group">
          <input
            type="text"
            value={argument}
            onChange={(e) => setArgument(e.target.value)}
            placeholder="Enter the argument"
            className="input"
          />
        </div>
        <div className="input-group">
          <input
            type="text"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            placeholder="Enter the base (e for natural logarithm)"
            className="input"
          />
        </div>
        <button onClick={calculateLog} className="calculate-button">
          Calculate
        </button>

        {result && <div className="result">{result}</div>}
        {steps && <div className="steps">{steps}</div>}
        <div className="context">
          <h2>What is Log?</h2>
          <p>
            The logarithm, or log, is the inverse of the mathematical operation
            of exponentiation. This means that the log of a number is the number
            that a fixed base has to be raised to in order to yield the number.
          </p>
          {/* ... (rest of the context) ... */}
        </div>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default LogCalculator;
