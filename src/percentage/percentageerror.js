import React, { useState } from "react";
import ../Calculator.css";

const PercentErrorCalculator = () => {
  const [observedValue, setObservedValue] = useState("");
  const [trueValue, setTrueValue] = useState("");
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState("");
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);

  const toggleDescriptionVisibility = () => {
    setIsDescriptionVisible(!isDescriptionVisible);
  };

  const calculatePercentError = () => {
    const observed = parseFloat(observedValue);
    const trueVal = parseFloat(trueValue);

    if (isNaN(observed) || isNaN(trueVal) || trueVal === 0) {
      setResult("Please enter valid observed and true values.");
      setSteps("");
    } else {
      const absoluteError = Math.abs(observed - trueVal);
      const relativeError = absoluteError / trueVal;
      const percentageError = (relativeError * 100).toFixed(4);

      const calculatedSteps = `
        Percent Error =
        |${observed} - ${trueVal}| / ${trueVal}
        =
        |${observed - trueVal}| / ${trueVal}
        =
        ${absoluteError.toFixed(4)} / ${trueVal}
        =
        ${relativeError.toFixed(4)}
        =
        ${percentageError}%
      `;

      setSteps(calculatedSteps);
      setResult(`Percent error = ${percentageError}%`);
    }
  };

  const clearFields = () => {
    setObservedValue("");
    setTrueValue("");
    setResult("");
    setSteps("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Percent Error Calculator</h1>
        <div className="input-group">
          <label className="label">Observed Value:</label>
          <input
            type="number"
            value={observedValue}
            onChange={(e) => setObservedValue(e.target.value)}
            placeholder="Enter observed value"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">True Value:</label>
          <input
            type="number"
            value={trueValue}
            onChange={(e) => setTrueValue(e.target.value)}
            placeholder="Enter true value"
            className="input"
          />
        </div>
        <button onClick={calculatePercentError} className="calculate-button">
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="result">Result: {result}</div>
        <button onClick={toggleDescriptionVisibility} className="toggle-button">
          {isDescriptionVisible ? "Hide Description" : "Show Description"}
        </button>
        {isDescriptionVisible && (
          <div className="description">
            <p>{`Percentage error is a measurement of the discrepancy between an observed (measured) and a true (expected, accepted, known etc.) value. It is typically used to compare measured vs. known values as well as to assess whether the measurements taken are valid.`}</p>
            <p>{`When measuring data, whether it be the density of some material, standard acceleration due to gravity of a falling object, or something else entirely, the measured value often varies from the true value. Error can arise due to many different reasons that are often related to human error, but can also be due to estimations and limitations of devices used in measurement. Calculating the percentage error provides a means to quantify the degree by which a measured value varies relative to the true value. A small percentage error means that the observed and true value are close while a large percentage error indicates that the observed and true value vary greatly. In most cases, a small percentage error is desirable, while a large percentage error may indicate an error or that an experiment or measurement technique may need to be re-evaluated. If, for example, the measured value varies from the expected value by 90%, there is likely an error, or the method of measurement may not be accurate.`}</p>
            <p>{`Computing percentage error: The computation of percentage error involves the use of the absolute error, which is simply the difference between the observed and the true value. The absolute error is then divided by the true value, resulting in the relative error, which is multiplied by 100 to obtain the percentage error.`}</p>
          </div>
        )}
        <div className="steps">
          {steps && "Steps:"} {steps}
        </div>
      </div>
    </div>
  );
};

export default PercentErrorCalculator;
