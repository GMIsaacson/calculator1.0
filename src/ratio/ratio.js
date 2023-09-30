import React, { useState } from "react";
import "../Calculator.css";

const RatioCalculator = () => {
  const [valueA, setValueA] = useState("");
  const [valueB, setValueB] = useState("");
  const [valueC, setValueC] = useState("");
  const [valueD, setValueD] = useState("");
  const [ratioResult, setRatioResult] = useState("");
  const [ratioWork, setRatioWork] = useState("");

  const [scaleValueA, setScaleValueA] = useState("");
  const [scaleValueB, setScaleValueB] = useState("");
  const [scalingFactor, setScalingFactor] = useState("");

  const calculateRatio = () => {
    if (valueA && valueB && valueC) {
      const ratioAB = parseFloat(valueA) / parseFloat(valueB);
      const ratioCD = parseFloat(valueC) / ratioAB;
      setRatioResult(
        `${valueA} : ${valueB} = ${valueC} : ${ratioCD.toFixed(15)}`
      );
      setRatioWork(
        `${valueA} : ${valueB} = 1 : ${ratioAB.toFixed(15)}\n= ${(
          1 / ratioAB
        ).toFixed(15)} : 1\n\n${valueC}\n${valueC} + ${ratioCD.toFixed(
          15
        )}\n= ${(parseFloat(valueC) + ratioCD).toFixed(15)}\n\nPercentage:\n${
          ratioCD.toFixed(15) * 100
        }%`
      );
    } else if (valueA && valueB && valueD) {
      const ratioAB = parseFloat(valueA) / parseFloat(valueB);
      const ratioCD = parseFloat(valueD) * ratioAB;
      setRatioResult(`${valueA} : ${valueB} = ${ratioCD} : ${valueD}`);
      setRatioWork(
        `${valueA} : ${valueB} = 1 : ${ratioAB.toFixed(15)}\n= ${(
          1 / ratioAB
        ).toFixed(15)} : 1\n\n${ratioCD}\n${ratioCD} - ${valueD}\n= ${(
          ratioCD - parseFloat(valueD)
        ).toFixed(15)}\n\nPercentage:\n${
          ((ratioCD - parseFloat(valueD)) / parseFloat(valueD)).toFixed(15) *
          100
        }%`
      );
    }
  };

  const calculateRatioScaling = () => {
    if (scaleValueA && scaleValueB && scalingFactor) {
      const scaledA = parseFloat(scaleValueA) / parseFloat(scalingFactor);
      const scaledB = parseFloat(scaleValueB) / parseFloat(scalingFactor);
      setRatioResult(
        `${scaleValueA} : ${scaleValueB} scaled ${scalingFactor} times = ${scaledA} : ${scaledB}`
      );
    }
  };

  const clearFields = () => {
    setValueA("");
    setValueB("");
    setValueC("");
    setValueD("");
    setRatioResult("");
    setRatioWork("");
  };

  const clearScalingFields = () => {
    setScaleValueA("");
    setScaleValueB("");
    setScalingFactor("");
    setRatioResult("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Ratio Calculator</h1>
        <div className="input-group">
          <input
            type="number"
            value={valueA}
            onChange={(e) => setValueA(e.target.value)}
            placeholder="A"
            className="input"
          />
          <div className="equal-sign">:</div>
          <input
            type="number"
            value={valueB}
            onChange={(e) => setValueB(e.target.value)}
            placeholder="B"
            className="input"
          />
          <div className="equal-sign">=</div>
          <input
            type="number"
            value={valueC}
            onChange={(e) => setValueC(e.target.value)}
            placeholder="C"
            className="input"
          />
          <div className="equal-sign">:</div>
          <input
            type="number"
            value={valueD}
            onChange={(e) => setValueD(e.target.value)}
            placeholder="D"
            className="input"
          />
        </div>
        <button onClick={calculateRatio} className="calculate-button">
          Calculate
        </button>
        <div className="result">{ratioResult}</div>
        <div className="result">{ratioWork}</div>
        <h2 className="sub-title">Ratio Scaling Calculator</h2>
        <div className="input-group">
          <input
            type="number"
            value={scaleValueA}
            onChange={(e) => setScaleValueA(e.target.value)}
            placeholder="A"
            className="input"
          />
          <div className="equal-sign">:</div>
          <input
            type="number"
            value={scaleValueB}
            onChange={(e) => setScaleValueB(e.target.value)}
            placeholder="B"
            className="input"
          />
          <label className="label">Shrink/Enlarge Factor:</label>
          <input
            type="number"
            value={scalingFactor}
            onChange={(e) => setScalingFactor(e.target.value)}
            placeholder="Factor"
            className="input"
          />
        </div>
        <button onClick={calculateRatioScaling} className="calculate-button">
          Calculate
        </button>
        <button onClick={clearScalingFields} className="clear-button">
          Clear
        </button>
        <div className="result">{ratioResult}</div>
      </div>
    </div>
  );
};

export default RatioCalculator;
