import React, { useState } from "react";
import "../Calculator.css";

const ComprehensiveRandomGenerator = () => {
  const [lowerLimit, setLowerLimit] = useState("");
  const [upperLimit, setUpperLimit] = useState("");
  const [generateCount, setGenerateCount] = useState(1);
  const [precision, setPrecision] = useState(2);
  const [results, setResults] = useState([]);

  const generateRandomNumbers = () => {
    const lower = parseFloat(lowerLimit);
    const upper = parseFloat(upperLimit);
    const decimalPrecision = parseInt(precision);
    const count = parseInt(generateCount);

    if (
      isNaN(lower) ||
      isNaN(upper) ||
      isNaN(decimalPrecision) ||
      isNaN(count) ||
      lower >= upper
    ) {
      alert("Please enter valid input.");
      return;
    }

    const generatedResults = [];
    for (let i = 0; i < count; i++) {
      const randomNumber = Math.random() * (upper - lower) + lower;
      generatedResults.push(randomNumber.toFixed(decimalPrecision));
    }
    setResults(generatedResults);
  };

  const clearFields = () => {
    setLowerLimit("");
    setUpperLimit("");
    setGenerateCount(1);
    setPrecision(2);
    setResults([]);
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Comprehensive Random Number Generator</h1>
        <div className="input-group">
          <label className="label">Lower Limit:</label>
          <input
            type="number"
            step="0.01"
            value={lowerLimit}
            onChange={(e) => setLowerLimit(e.target.value)}
            placeholder="Enter lower limit"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Upper Limit:</label>
          <input
            type="number"
            step="0.01"
            value={upperLimit}
            onChange={(e) => setUpperLimit(e.target.value)}
            placeholder="Enter upper limit"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Generate:</label>
          <input
            type="number"
            min="1"
            value={generateCount}
            onChange={(e) => setGenerateCount(e.target.value)}
            placeholder="Enter count"
            className="input"
          />
          <span className="input-label">numbers</span>
        </div>
        <div className="input-group">
          <label className="label">Type of result to generate?</label>
        </div>
        <div className="input-group">
          <label className="label">Precision:</label>
          <input
            type="number"
            min="1"
            max="999"
            value={precision}
            onChange={(e) => setPrecision(e.target.value)}
            placeholder="Enter precision"
            className="input"
          />
          <span className="input-label">digits</span>
        </div>
        <button onClick={generateRandomNumbers} className="calculate-button">
          Generate Random Numbers
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="result">
          Result:{" "}
          {results.map((result, index) => (
            <div key={index}>{result}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComprehensiveRandomGenerator;
