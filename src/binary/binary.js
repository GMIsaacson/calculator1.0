import React, { useState } from "react";
import "../Calculator.css";

const BinaryCalculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [operation, setOperation] = useState("");
  const [resultBinary, setResultBinary] = useState("");
  const [resultDecimal, setResultDecimal] = useState("");
  const [steps, setSteps] = useState("");
  const [binaryToDecimalInput, setBinaryToDecimalInput] = useState("");
  const [decimalToBinaryInput, setDecimalToBinaryInput] = useState("");

  const calculateBinaryOperation = () => {
    const num1 = parseInt(input1, 2);
    const num2 = parseInt(input2, 2);

    let calculatedResult;
    let calculatedDecimalResult;
    let operationSymbol;

    switch (operation) {
      case "+":
        calculatedResult = (num1 + num2).toString(2);
        calculatedDecimalResult = num1 + num2;
        operationSymbol = "+";
        break;
      case "-":
        calculatedResult = (num1 - num2).toString(2);
        calculatedDecimalResult = num1 - num2;
        operationSymbol = "-";
        break;
      case "*":
        calculatedResult = (num1 * num2).toString(2);
        calculatedDecimalResult = num1 * num2;
        operationSymbol = "*";
        break;
      case "/":
        if (num2 !== 0) {
          calculatedResult = Math.floor(num1 / num2).toString(2);
          calculatedDecimalResult = Math.floor(num1 / num2);
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

    setSteps(
      `Binary Value: ${input1} ${operationSymbol} ${input2}\n= ${calculatedResult}\n\nDecimal Value: ${parseInt(
        input1,
        2
      )} ${operationSymbol} ${parseInt(
        input2,
        2
      )}\n= ${calculatedDecimalResult}`
    );

    setResultBinary(`Binary Result: ${calculatedResult}`);
    setResultDecimal(`Decimal Result: ${calculatedDecimalResult}`);
  };

  const convertBinaryToDecimal = () => {
    const decimalValue = parseInt(binaryToDecimalInput, 2);
    setResultDecimal(`Decimal Value: ${decimalValue}`);
    setSteps(
      `Converted Binary to Decimal: ${binaryToDecimalInput}\n= ${decimalValue}`
    );
  };

  const convertDecimalToBinary = () => {
    const binaryValue = parseInt(decimalToBinaryInput).toString(2);
    setResultBinary(`Binary Value: ${binaryValue}`);
    setSteps(
      `Converted Decimal to Binary: ${decimalToBinaryInput}\n= ${binaryValue}`
    );
  };

  const clearFields = () => {
    setInput1("");
    setInput2("");
    setOperation("");
    setResultBinary("");
    setResultDecimal("");
    setSteps("");
    setBinaryToDecimalInput("");
    setDecimalToBinaryInput("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Binary Calculator</h1>
        <div className="input-group">
          <label className="label">
            Binary Calculation - Add, Subtract, Multiply, or Divide:
          </label>
          <input
            type="text"
            value={input1}
            onChange={(e) => setInput1(e.target.value)}
            placeholder="Enter a binary number"
            className="input"
          />
          <select
            value={operation}
            onChange={(e) => setOperation(e.target.value)}
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
            value={input2}
            onChange={(e) => setInput2(e.target.value)}
            placeholder="Enter another binary number"
            className="input"
          />
        </div>
        <button onClick={calculateBinaryOperation} className="calculate-button">
          Calculate
        </button>

        <div className="input-group">
          <label className="label">Binary Value:</label>
          <input
            type="text"
            value={binaryToDecimalInput}
            onChange={(e) => setBinaryToDecimalInput(e.target.value)}
            placeholder="Enter a binary value"
            className="input"
          />
        </div>
        <button onClick={convertBinaryToDecimal} className="calculate-button">
          Convert Binary to Decimal
        </button>

        <div className="input-group">
          <label className="label">Decimal Value:</label>
          <input
            type="text"
            value={decimalToBinaryInput}
            onChange={(e) => setDecimalToBinaryInput(e.target.value)}
            placeholder="Enter a decimal value"
            className="input"
          />
        </div>
        <button onClick={convertDecimalToBinary} className="calculate-button">
          Convert Decimal to Binary
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="steps">{steps}</div>
        <div className="result">{resultBinary}</div>
        <div className="result">{resultDecimal}</div>
      </div>
    </div>
  );
};

export default BinaryCalculator;
