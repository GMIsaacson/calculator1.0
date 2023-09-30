import React, { useState } from "react";
import "../Calculator.css";

const QuadraticFormulaCalculator = () => {
  const [a, setA] = useState("");
  const [b, setB] = useState("");
  const [c, setC] = useState("");
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState("");

  const calculateQuadraticFormula = () => {
    const discriminant = b * b - 4 * a * c;

    if (discriminant >= 0) {
      const root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
      const root2 = (-b - Math.sqrt(discriminant)) / (2 * a);

      setResult(`Solutions: x1 = ${root1}, x2 = ${root2}`);
      setSteps(
        `Steps:\nx = (-b ± √(b² - 4ac)) / (2a)\n= (-(${b}) ± √(${b}² - 4 * ${a} * ${c})) / (2 * ${a})\n= (${root1}, ${root2})`
      );
    } else {
      const realPart = -b / (2 * a);
      const imaginaryPart = Math.sqrt(Math.abs(discriminant)) / (2 * a);
      const root1 = `${realPart} + ${imaginaryPart}i`;
      const root2 = `${realPart} - ${imaginaryPart}i`;

      setResult(`There are two imaginary solutions: x = ${root1}, ${root2}`);
      setSteps(
        `Steps:\nx = (-b ± √(b² - 4ac)) / (2a)\n= (${realPart} ± ${imaginaryPart}i)\n= ${root1}, ${root2}`
      );
    }
  };

  const clearFields = () => {
    setA("");
    setB("");
    setC("");
    setResult("");
    setSteps("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Quadratic Formula Calculator</h1>
        <div className="input-group">{/* Existing input elements */}</div>
        <div className="input-group">
          <label className="label">a:</label>
          <input
            type="number"
            value={a}
            onChange={(e) => setA(Number(e.target.value))}
            placeholder="Enter a"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">b:</label>
          <input
            type="number"
            value={b}
            onChange={(e) => setB(Number(e.target.value))}
            placeholder="Enter b"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">c:</label>
          <input
            type="number"
            value={c}
            onChange={(e) => setC(Number(e.target.value))}
            placeholder="Enter c"
            className="input"
          />
        </div>
        <button
          onClick={calculateQuadraticFormula}
          className="calculate-button"
        >
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="context">
          <p>
            Equation: {`${a}x² + ${b}x + ${c} = 0`}
            <br />
            {result && `Solutions: ${result}`}
          </p>
        </div>
        <div className="steps">{steps}</div>
      </div>
    </div>
  );
};

export default QuadraticFormulaCalculator;
