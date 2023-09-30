import React, { useState } from "react";
//import "../Calculator.css";
import "../../Calculator.css"; // Adjust the number of '../' based on the relative path to the CSS file

// Your rounding.js code here

const RoundingCalculator = () => {
  const [number, setNumber] = useState("");
  const [precision, setPrecision] = useState("");
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState("");

  const roundNumber = () => {
    if (!number || isNaN(number)) {
      setSteps("Please enter a valid number.");
      return;
    }

    if (!precision) {
      setSteps("Please select a valid precision.");
      return;
    }

    let roundedResult;
    let roundedTo = "";

    switch (precision) {
      case "1":
        roundedResult = parseFloat(number).toFixed(1);
        roundedTo = "nearest tenth (1)";
        break;
      case "2":
        roundedResult = parseFloat(number).toFixed(2);
        roundedTo = "nearest hundredth (2)";
        break;
      case "3":
        roundedResult = parseFloat(number).toFixed(3);
        roundedTo = "nearest thousandth (3)";
        break;
      case "4":
        roundedResult = parseFloat(number).toFixed(4);
        roundedTo = "nearest ten thousandth (4)";
        break;
      case "6":
        roundedResult = parseFloat(number).toFixed(6);
        roundedTo = "nearest hundred thousandth (6)";
        break;
      case "0":
        roundedResult = Math.round(parseFloat(number));
        roundedTo = "nearest whole number";
        break;
      case "-1":
        roundedResult = Math.round(parseFloat(number) / 10) * 10;
        roundedTo = "nearest ten";
        break;
      case "-2":
        roundedResult = Math.round(parseFloat(number) / 100) * 100;
        roundedTo = "nearest hundred";
        break;
      case "-3":
        roundedResult = Math.round(parseFloat(number) / 1000) * 1000;
        roundedTo = "nearest thousand";
        break;
      case "-6":
        roundedResult = Math.round(parseFloat(number) / 1000000) * 1000000;
        roundedTo = "nearest million";
        break;
      case "0.5":
        roundedResult = Math.round(parseFloat(number) * 2) / 2;
        roundedTo = "nearest 1/2 fraction";
        break;
      case "0.25":
        roundedResult = Math.round(parseFloat(number) * 4) / 4;
        roundedTo = "nearest 1/4 fraction";
        break;
      case "0.125":
        roundedResult = Math.round(parseFloat(number) * 8) / 8;
        roundedTo = "nearest 1/8 fraction";
        break;
      case "0.0625":
        roundedResult = Math.round(parseFloat(number) * 16) / 16;
        roundedTo = "nearest 1/16 fraction";
        break;
      case "0.03125":
        roundedResult = Math.round(parseFloat(number) * 32) / 32;
        roundedTo = "nearest 1/32 fraction";
        break;
      case "0.015625":
        roundedResult = Math.round(parseFloat(number) * 64) / 64;
        roundedTo = "nearest 1/64 fraction";
        break;
      default:
        setSteps("Please select a valid precision.");
        return;
    }

    setResult(`Result: ${roundedResult}`);
    setSteps(
      `The result of rounding ${number} to the ${roundedTo} is ${roundedResult}.`
    );
  };

  const clearFields = () => {
    setNumber("");
    setPrecision("");
    setResult("");
    setSteps("");
  };

  return (
    <div className="calculator">
      <h1 className="title">Rounding Calculator</h1>
      <div className="input-group">
        <label className="label">Number:</label>
        <input
          type="number"
          step="0.001"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          placeholder="Enter a number"
          className="input"
        />
      </div>
      <div className="input-group">
        <label className="label">Precision:</label>
        <select
          value={precision}
          onChange={(e) => setPrecision(e.target.value)}
          className="select"
        >
          <option value="">Select Precision</option>
          <option value="1">Decimal Tenths (1)</option>
          <option value="2">Decimal Hundredths (2)</option>
          <option value="3">Decimal Thousandths (3)</option>
          <option value="4">Decimal Ten Thousandths (4)</option>
          <option value="6">Decimal Hundred Thousandths (6)</option>
          <option value="0">Whole Number Ones (0)</option>
          <option value="-1">Whole Number Tens (-1)</option>
          <option value="-2">Whole Number Hundreds (-2)</option>
          <option value="-3">Whole Number Thousands (-3)</option>
          <option value="-6">Whole Number Millions (-6)</option>
          <option value="0.5">Fraction 1/2</option>
          <option value="0.25">Fraction 1/4</option>
          <option value="0.125">Fraction 1/8</option>
          <option value="0.0625">Fraction 1/16</option>
          <option value="0.03125">Fraction 1/32</option>
          <option value="0.015625">Fraction 1/64</option>
        </select>
      </div>

      <button onClick={roundNumber} className="calculate-button">
        Calculate
      </button>

      <div className="steps">{steps}</div>
      <div className="result">{result}</div>
      <button onClick={clearFields} className="clear-button">
        Clear
      </button>
    </div>
  );
};

export default RoundingCalculator;
