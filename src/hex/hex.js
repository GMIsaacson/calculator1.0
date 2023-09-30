import React, { useState } from "react";
import "../Calculator.css";

const HexCalculator = () => {
  const [hexInput1, setHexInput1] = useState("");
  const [hexInput2, setHexInput2] = useState("");
  const [hexOperation, setHexOperation] = useState("");
  const [resultHex, setResultHex] = useState("");
  const [resultDecimal, setResultDecimal] = useState("");
  const [hexToDecimalInput, setHexToDecimalInput] = useState("");
  const [decimalToHexInput, setDecimalToHexInput] = useState("");
  const [steps, setSteps] = useState("");

  const calculateHexOperation = () => {
    if (!hexInput1 || !hexInput2 || !hexOperation) {
      setSteps("Please enter valid inputs and select an operation.");
      return;
    }

    let num1 = parseInt(hexInput1, 16);
    let num2 = parseInt(hexInput2, 16);
    let calculatedResult;
    let operationSymbol;

    switch (hexOperation) {
      case "+":
        calculatedResult = (num1 + num2).toString(16).toUpperCase();
        operationSymbol = "+";
        break;
      case "-":
        calculatedResult = (num1 - num2).toString(16).toUpperCase();
        operationSymbol = "-";
        break;
      case "*":
        calculatedResult = (num1 * num2).toString(16).toUpperCase();
        operationSymbol = "*";
        break;
      case "/":
        if (num2 !== 0) {
          calculatedResult = Math.floor(num1 / num2)
            .toString(16)
            .toUpperCase();
          operationSymbol = "/";
        } else {
          setSteps("Cannot divide by zero.");
          return;
        }
        break;
      default:
        setSteps("Please select a valid operation.");
        return;
    }

    setResultHex(
      `Hex Value: ${hexInput1} ${operationSymbol} ${hexInput2}\n= ${calculatedResult}`
    );
    setResultDecimal(
      `Decimal Value: ${num1} ${operationSymbol} ${num2}\n= ${parseInt(
        calculatedResult,
        16
      )}`
    );
    setSteps("");
  };

  const convertHexToDecimal = () => {
    const decimalValue = parseInt(hexToDecimalInput, 16);
    setResultDecimal(`Decimal Value: ${decimalValue}`);
    setSteps(
      `Converted Hex to Decimal: ${hexToDecimalInput}\n= ${decimalValue}`
    );
  };

  const convertDecimalToHex = () => {
    const hexValue = parseInt(decimalToHexInput).toString(16).toUpperCase();
    setResultHex(`Hex Value: ${hexValue}`);
    setSteps(`Converted Decimal to Hex: ${decimalToHexInput}\n= ${hexValue}`);
  };

  const clearFields = () => {
    setHexInput1("");
    setHexInput2("");
    setHexOperation("");
    setResultHex("");
    setResultDecimal("");
    setHexToDecimalInput("");
    setDecimalToHexInput("");
    setSteps("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Hexadecimal Calculator</h1>
        <div className="input-group">
          <label className="label">
            Hexadecimal Calculation - Add, Subtract, Multiply, or Divide:
          </label>
          <input
            type="text"
            value={hexInput1}
            onChange={(e) => setHexInput1(e.target.value.toUpperCase())}
            placeholder="Enter a hexadecimal value"
            className="input"
          />
          <select
            value={hexOperation}
            onChange={(e) => setHexOperation(e.target.value)}
            className="select"
          >
            <option value="">Select Operation</option>
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input
            type="text"
            value={hexInput2}
            onChange={(e) => setHexInput2(e.target.value.toUpperCase())}
            placeholder="Enter another hexadecimal value"
            className="input"
          />
          <button onClick={calculateHexOperation} className="calculate-button">
            Calculate
          </button>
        </div>

        <div className="input-group">
          <label className="label">Hexadecimal Value:</label>
          <input
            type="text"
            value={hexToDecimalInput}
            onChange={(e) => setHexToDecimalInput(e.target.value.toUpperCase())}
            placeholder="Enter a hexadecimal value"
            className="input"
          />
          <button onClick={convertHexToDecimal} className="calculate-button">
            Convert Hex to Decimal
          </button>
        </div>

        <div className="input-group">
          <label className="label">Decimal Value:</label>
          <input
            type="text"
            value={decimalToHexInput}
            onChange={(e) => setDecimalToHexInput(e.target.value)}
            placeholder="Enter a decimal value"
            className="input"
          />
          <button onClick={convertDecimalToHex} className="calculate-button">
            Convert Decimal to Hex
          </button>
        </div>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="steps">{steps}</div>
        <div className="result">{resultHex}</div>
        <div className="result">{resultDecimal}</div>
      </div>
    </div>
  );
};

export default HexCalculator;
