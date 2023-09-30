import React, { useState } from "react";
import "../Calculator.css";

const FactorCalculator = () => {
  const [number, setNumber] = useState("");
  const [factors, setFactors] = useState([]);
  const [primeFactors, setPrimeFactors] = useState([]);
  const [factorPairs, setFactorPairs] = useState([]);
  const [steps, setSteps] = useState("");

  const calculateFactors = () => {
    const num = parseInt(number);
    if (isNaN(num) || num <= 0) {
      setSteps("Please enter a valid positive integer.");
      setFactors([]);
      setPrimeFactors([]);
      setFactorPairs([]);
      return;
    }

    const factorsArr = [];
    const primeFactorsArr = [];
    const factorPairsArr = [];

    for (let i = 1; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        factorsArr.push(i);
        factorsArr.push(num / i);

        if (isPrime(i)) {
          primeFactorsArr.push(i);
        }
        if (isPrime(num / i) && i !== num / i) {
          primeFactorsArr.push(num / i);
        }
      }
    }

    factorsArr.sort((a, b) => a - b);

    for (let i = 0; i < factorsArr.length / 2; i++) {
      factorPairsArr.push([
        factorsArr[i],
        factorsArr[factorsArr.length - 1 - i]
      ]);
    }

    setFactors(factorsArr);
    setPrimeFactors(primeFactorsArr);
    setFactorPairs(factorPairsArr);

    const primeFactorsString = primeFactorsArr.join(" × ");
    setSteps(
      `Factors: ${factorsArr.join(", ")}\n\nFactor Pairs: ${factorPairsArr
        .map((pair) => `(${pair[0]}, ${pair[1]})`)
        .join(" ")}\n\nPrime factors: ${num} = ${primeFactorsString}`
    );
  };

  const clearFields = () => {
    setNumber("");
    setFactors([]);
    setPrimeFactors([]);
    setFactorPairs([]);
    setSteps("");
  };

  const isPrime = (n) => {
    if (n <= 1) return false;
    if (n <= 3) return true;

    if (n % 2 === 0 || n % 3 === 0) return false;

    for (let i = 5; i * i <= n; i += 6) {
      if (n % i === 0 || n % (i + 2) === 0) return false;
    }

    return true;
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Factor Calculator</h1>
        <div className="input-group">
          <label className="label">
            Please provide a positive integer to calculate its factors and prime
            factors:
          </label>
          <input
            type="text"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="e.g., 120"
            className="input"
          />
        </div>
        <button onClick={calculateFactors} className="calculate-button">
          Calculate
        </button>
        <div className="result">
          <div className="result-section">
            <div className="result-header">Factors:</div>
            {factors.join(", ")}
          </div>
          <div className="result-section">
            <div className="result-header">Factor Pairs:</div>
            {factorPairs.map((pair, index) => (
              <div key={index} className="factor-pair">
                ({pair[0]}, {pair[1]})
              </div>
            ))}
          </div>
          <div className="result-section">
            <div className="result-header">Prime Factors:</div>
            {primeFactors.join(" × ")}
          </div>
        </div>
        <div className="steps">{steps}</div>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default FactorCalculator;
