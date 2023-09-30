import React, { useState } from "react";
import "../Calculator.css";

const ExponentCalculator = () => {
  const [base, setBase] = useState("");
  const [exponent, setExponent] = useState("");
  const [result, setResult] = useState("");
  const [showDescription, setShowDescription] = useState(false);

  const calculateExponent = () => {
    const baseValue = parseFloat(base);
    const exponentValue = parseFloat(exponent);

    if (isNaN(baseValue) || isNaN(exponentValue)) {
      setResult("Please enter valid base and exponent.");
    } else {
      const resultValue = Math.pow(baseValue, exponentValue);
      setResult(`${base} ^ ${exponent} = ${resultValue}`);
    }
  };

  const clearFields = () => {
    setBase("");
    setExponent("");
    setResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Exponent Calculator</h1>
        <div className="input-group">
          <label className="label">Base:</label>
          <input
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            placeholder="Enter base"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Exponent:</label>
          <input
            type="number"
            value={exponent}
            onChange={(e) => setExponent(e.target.value)}
            placeholder="Enter exponent"
            className="input"
          />
        </div>
        <button onClick={calculateExponent} className="calculate-button">
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="result">Result: {result}</div>
        <button
          onClick={() => setShowDescription(!showDescription)}
          className="toggle-description-button"
        >
          {showDescription ? "Hide Description" : "Show Description"}
        </button>
        {showDescription && (
          <div className="description">
            <p>
              Exponentiation is a mathematical operation, involving the base a
              and an exponent n. In the case where n is a positive integer,
              exponentiation corresponds to repeated multiplication of the base,
              n times.
            </p>
            {/* ... (rest of the description) ... */}
          </div>
        )}
      </div>
    </div>
  );
};

export default ExponentCalculator;
