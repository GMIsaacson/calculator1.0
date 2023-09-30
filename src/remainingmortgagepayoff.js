import React, { useState } from "react";
import "./Calculator.css";

const RemainingLoanTermCalculator = () => {
  const [unpaidPrincipalBalance, setUnpaidPrincipalBalance] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");
  const [result, setResult] = useState("");
  const [steps, setSteps] = useState("");

  const calculateRemainingLoanTerm = () => {
    // Parse input values to numbers
    const principalBalance = parseFloat(unpaidPrincipalBalance);
    const interestRatePercent = parseFloat(interestRate);
    const monthlyPaymentValue = parseFloat(monthlyPayment);

    // Calculate monthly interest rate
    const monthlyInterestRate = interestRatePercent / 12 / 100;

    // Calculate the remaining months
    const totalMonths =
      Math.log(
        monthlyPaymentValue /
          (monthlyPaymentValue - principalBalance * monthlyInterestRate)
      ) / Math.log(1 + monthlyInterestRate);

    // Calculate the remaining years and months
    const remainingYears = Math.floor(totalMonths / 12);
    const remainingMonths = Math.round(totalMonths % 12);

    // Display the result
    setResult(
      `Remaining Loan Term: ${remainingYears} years and ${remainingMonths} months`
    );
    setSteps(`Calculation steps go here...`);
  };

  const clearFields = () => {
    setUnpaidPrincipalBalance("");
    setInterestRate("");
    setMonthlyPayment("");
    setResult("");
    setSteps("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Correct Remaining Loan Term Calculator</h1>

        <div className="input-group">
          <label>Unpaid Principal Balance:</label>
          <input
            type="number"
            value={unpaidPrincipalBalance}
            onChange={(e) => setUnpaidPrincipalBalance(e.target.value)}
            placeholder="Enter unpaid principal balance"
          />
        </div>

        <div className="input-group">
          <label>Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter interest rate"
          />
        </div>

        <div className="input-group">
          <label>Monthly Payment:</label>
          <input
            type="number"
            value={monthlyPayment}
            onChange={(e) => setMonthlyPayment(e.target.value)}
            placeholder="Enter monthly payment"
          />
        </div>

        <button
          onClick={calculateRemainingLoanTerm}
          className="calculate-button"
        >
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>

        <div className="steps">{steps}</div>
        <div className="result">{result}</div>
      </div>
    </div>
  );
};

export default RemainingLoanTermCalculator;
