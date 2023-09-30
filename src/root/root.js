import React, { useState } from "react";
import "../Calculator.css";

const SquareRootCalculator = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const calculateSquareRoot = () => {
    if (number !== "") {
      const squareRootValue = Math.sqrt(parseFloat(number));
      setResult(`Square root of ${number} = ${squareRootValue.toFixed(15)}`);
    }
  };

  const clearFields = () => {
    setNumber("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h2 className="sub-title">Square Root Calculator</h2>
      <div className="input-group">
        <label className="label">Number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="input"
        />
      </div>
      <button onClick={calculateSquareRoot} className="calculate-button">
        Calculate Square Root
      </button>

      <div className="result">{result}</div>
      <button onClick={clearFields} className="clear-button">
        Clear
      </button>
    </div>
  );
};

const CubeRootCalculator = () => {
  const [number, setNumber] = useState("");
  const [result, setResult] = useState("");

  const calculateCubeRoot = () => {
    if (number !== "") {
      const cubeRootValue = Math.cbrt(parseFloat(number));
      setResult(`Cube root of ${number} = ${cubeRootValue.toFixed(15)}`);
    }
  };

  const clearFields = () => {
    setNumber("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h2 className="sub-title">Cube Root Calculator</h2>
      <div className="input-group">
        <label className="label">Number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="input"
        />
      </div>
      <button onClick={calculateCubeRoot} className="calculate-button">
        Calculate Cube Root
      </button>

      <div className="result">{result}</div>
      <button onClick={clearFields} className="clear-button">
        Clear
      </button>
    </div>
  );
};

const GeneralRootCalculator = () => {
  const [number, setNumber] = useState("");
  const [root, setRoot] = useState("");
  const [result, setResult] = useState("");

  const calculateGeneralRoot = () => {
    if (number !== "" && root !== "") {
      const generalRootValue = Math.pow(
        parseFloat(number),
        1 / parseFloat(root)
      );
      setResult(`Root ${root} of ${number} = ${generalRootValue.toFixed(15)}`);
    }
  };

  const clearFields = () => {
    setNumber("");
    setRoot("");
    setResult("");
  };

  return (
    <div className="calculator">
      <h2 className="sub-title">General Root Calculator</h2>
      <div className="input-group">
        <label className="label">Number:</label>
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          className="input"
        />
        <label className="label">Root:</label>
        <input
          type="number"
          value={root}
          onChange={(e) => setRoot(e.target.value)}
          className="input"
        />
      </div>
      <button onClick={calculateGeneralRoot} className="calculate-button">
        Calculate General Root
      </button>

      <div className="result">{result}</div>
      <button onClick={clearFields} className="clear-button">
        Clear
      </button>
    </div>
  );
};

const RootCalculator = () => {
  return (
    <div className="App">
      <h1 className="title">Root Calculator</h1>
      <div className="calculators-container">
        <SquareRootCalculator />
        <CubeRootCalculator />
        <GeneralRootCalculator />
      </div>
    </div>
  );
};

export default RootCalculator;
