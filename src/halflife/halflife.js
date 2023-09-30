import React, { useState } from "react";
import "../Calculator.css";

const HalfLifeCalculator = () => {
  const [initialQuantity, setInitialQuantity] = useState("");
  const [remainingQuantity, setRemainingQuantity] = useState("");
  const [time, setTime] = useState("");
  const [halfLife, setHalfLife] = useState("");
  const [resultHalfLife, setResultHalfLife] = useState("");
  const [resultMeanLifetime, setResultMeanLifetime] = useState("");
  const [resultDecayConstant, setResultDecayConstant] = useState("");

  const calculateHalfLife = () => {
    if (initialQuantity && remainingQuantity && time) {
      const tHalfLife =
        (time * Math.log(2)) / Math.log(initialQuantity / remainingQuantity);
      setHalfLife(tHalfLife);
      const meanLifetime = tHalfLife / Math.log(2);
      setResultMeanLifetime(`Mean Lifetime, τ = ${meanLifetime.toFixed(12)}`);
      const decayConstant = Math.log(2) / tHalfLife;
      setResultDecayConstant(
        `Decay Constant, λ = ${decayConstant.toFixed(12)}`
      );
    }
  };

  const clearFields = () => {
    setInitialQuantity("");
    setRemainingQuantity("");
    setTime("");
    setHalfLife("");
    setResultHalfLife("");
    setResultMeanLifetime("");
    setResultDecayConstant("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Half-Life Calculator</h1>
        <div className="input-group">
          <label className="label">Initial Quantity (N0):</label>
          <input
            type="number"
            value={initialQuantity}
            onChange={(e) => setInitialQuantity(e.target.value)}
            placeholder="Enter initial quantity"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Remaining Quantity (Nt):</label>
          <input
            type="number"
            value={remainingQuantity}
            onChange={(e) => setRemainingQuantity(e.target.value)}
            placeholder="Enter remaining quantity"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Time (t):</label>
          <input
            type="number"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Enter time"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Half-Life (t1/2):</label>
          <input
            type="number"
            value={halfLife}
            onChange={(e) => setHalfLife(e.target.value)}
            placeholder="Enter half-life"
            className="input"
          />
        </div>
        <button onClick={calculateHalfLife} className="calculate-button">
          Calculate
        </button>
        <div className="result">{resultHalfLife}</div>
        <div className="result">{resultMeanLifetime}</div>
        <div className="result">{resultDecayConstant}</div>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

const HalfLifeConversionCalculator = () => {
  const [conversionValue, setConversionValue] = useState("");
  const [conversionType, setConversionType] = useState("");
  const [conversionResult, setConversionResult] = useState("");

  const calculateConversion = () => {
    if (conversionType === "halfLife" && conversionValue) {
      const meanLifetime = parseFloat(conversionValue) / Math.log(2);
      setConversionResult(`Mean Lifetime, τ = ${meanLifetime.toFixed(12)}`);
      const decayConstant = Math.log(2) / parseFloat(conversionValue);
      setConversionResult(
        (prevResult) =>
          `${prevResult}\nDecay Constant, λ = ${decayConstant.toFixed(12)}`
      );
    } else if (conversionType === "meanLifetime" && conversionValue) {
      const halfLife = parseFloat(conversionValue) * Math.log(2);
      setConversionResult(`Half-Life, t1/2 = ${halfLife.toFixed(12)}`);
      const decayConstant =
        Math.log(2) / (parseFloat(conversionValue) * Math.log(2));
      setConversionResult(
        (prevResult) =>
          `${prevResult}\nDecay Constant, λ = ${decayConstant.toFixed(12)}`
      );
    } else if (conversionType === "decayConstant" && conversionValue) {
      const halfLife = Math.log(2) / parseFloat(conversionValue);
      setConversionResult(`Half-Life, t1/2 = ${halfLife.toFixed(12)}`);
      const meanLifetime = 1 / parseFloat(conversionValue);
      setConversionResult(
        (prevResult) =>
          `${prevResult}\nMean Lifetime, τ = ${meanLifetime.toFixed(12)}`
      );
    }
  };

  const clearFields = () => {
    setConversionValue("");
    setConversionType("");
    setConversionResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">
          Half-Life, Mean Lifetime, and Decay Constant Conversion
        </h1>
        <div className="input-group">
          <label className="label">Conversion Type:</label>
          <select
            value={conversionType}
            onChange={(e) => setConversionType(e.target.value)}
            className="select"
          >
            <option value="">Select Conversion Type</option>
            <option value="halfLife">Half-Life, t1/2</option>
            <option value="meanLifetime">Mean Lifetime, τ</option>
            <option value="decayConstant">Decay Constant, λ</option>
          </select>
        </div>
        <div className="input-group">
          <label className="label">Conversion Value:</label>
          <input
            type="number"
            value={conversionValue}
            onChange={(e) => setConversionValue(e.target.value)}
            placeholder="Enter conversion value"
            className="input"
          />
        </div>
        <button onClick={calculateConversion} className="calculate-button">
          Calculate
        </button>
        <div className="result">{conversionResult}</div>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export { HalfLifeCalculator, HalfLifeConversionCalculator };
