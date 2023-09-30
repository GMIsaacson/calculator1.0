import React, { useState } from "react";
import "../Calculator.css";

const GCDCalculator = () => {
  const [numbers, setNumbers] = useState("");
  const [gcd, setGCD] = useState("");
  const [steps, setSteps] = useState("");

  const calculateGCD = () => {
    const numsArray = numbers.split(",").map((num) => parseInt(num.trim(), 10));
    if (numsArray.some(isNaN)) {
      setSteps("Please enter valid numbers separated by commas.");
      setGCD("");
      return;
    }

    const resultGCD = numsArray.reduce((a, b) => gcdTwoNumbers(a, b));

    setGCD(`GCD(${numbers}) = ${resultGCD}`);
    setSteps(`Steps:\nGCD(${numbers}) = ${resultGCD}`);
  };

  const gcdTwoNumbers = (a, b) => {
    if (b === 0) return a;
    return gcdTwoNumbers(b, a % b);
  };

  const clearFields = () => {
    setNumbers("");
    setGCD("");
    setSteps("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Greatest Common Divisor (GCD) Calculator</h1>
        <div className="input-group">
          <label className="label">
            Please provide numbers separated by a comma (","):
          </label>
          <input
            type="text"
            value={numbers}
            onChange={(e) => setNumbers(e.target.value)}
            placeholder="e.g., 24, 36, 48"
            className="input"
          />
        </div>
        <button onClick={calculateGCD} className="calculate-button">
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="result">{gcd}</div>
        <div className="steps">{steps}</div>
      </div>
    </div>
  );
};

export default GCDCalculator;
