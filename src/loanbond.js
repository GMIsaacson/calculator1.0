import React, { useState } from "react";
import "./Calculator.css";

const BondCalculator = () => {
  const [dueAmount, setDueAmount] = useState("");
  const [loanTermYears, setLoanTermYears] = useState("");
  const [loanTermMonths, setLoanTermMonths] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("annually");
  const [amountReceived, setAmountReceived] = useState("");
  const [totalInterest, setTotalInterest] = useState("");

  const calculateBond = () => {
    const totalMonths = loanTermYears * 12 + parseInt(loanTermMonths);
    const monthlyInterestRate = interestRate / 12 / 100;
    const compoundFrequencyMap = {
      annually: 1,
      semiannually: 2,
      quarterly: 4,
      monthly: 12,
      semimonthly: 24,
      biweekly: 26,
      weekly: 52,
      daily: 365,
      continuously: 1
    };
    const compoundPerYear = compoundFrequencyMap[compoundingFrequency];

    const amountReceived =
      dueAmount /
      Math.pow(1 + monthlyInterestRate / compoundPerYear, totalMonths / 12);

    const totalPayments = dueAmount - amountReceived;
    setAmountReceived(amountReceived.toFixed(2));
    setTotalInterest(totalPayments.toFixed(2));
  };

  const clearFields = () => {
    setDueAmount("");
    setLoanTermYears("");
    setLoanTermMonths("");
    setInterestRate("");
    setCompoundingFrequency("annually");
    setAmountReceived("");
    setTotalInterest("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Incorrect Bond Calculator</h1>
        <div className="input-group">
          <label className="label">Predetermined Due Amount:</label>
          <input
            type="number"
            value={dueAmount}
            onChange={(e) => setDueAmount(e.target.value)}
            placeholder="Enter the predetermined due amount"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Loan Term:</label>
          <input
            type="number"
            value={loanTermYears}
            onChange={(e) => setLoanTermYears(e.target.value)}
            placeholder="Years"
            className="input"
          />
          <input
            type="number"
            value={loanTermMonths}
            onChange={(e) => setLoanTermMonths(e.target.value)}
            placeholder="Months"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Interest Rate (%):</label>
          <input
            type="number"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter the interest rate"
            className="input"
          />
        </div>
        <div className="input-group">
          <label className="label">Compounding Frequency:</label>
          <select
            value={compoundingFrequency}
            onChange={(e) => setCompoundingFrequency(e.target.value)}
            className="select"
          >
            <option value="annually">Annually (APY)</option>
            <option value="semiannually">Semiannually</option>
            <option value="quarterly">Quarterly</option>
            <option value="monthly">Monthly (APR)</option>
            <option value="semimonthly">Semimonthly</option>
            <option value="biweekly">Biweekly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
            <option value="continuously">Continuously</option>
          </select>
        </div>
        <button onClick={calculateBond} className="calculate-button">
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="result">
          Amount Received When Loan Starts: ${amountReceived}
        </div>
        <div className="result">Total Interest: ${totalInterest}</div>
      </div>
    </div>
  );
};

export default BondCalculator;
