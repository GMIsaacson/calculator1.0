import React, { useState } from "react";
import "./Calculator.css";

const DeferredPaymentLoanCalculator = () => {
  const [loanAmount, setLoanAmount] = useState("");
  const [loanTermYears, setLoanTermYears] = useState("");
  const [loanTermMonths, setLoanTermMonths] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [compoundingFrequency, setCompoundingFrequency] = useState("monthly");
  const [amountDueAtMaturity, setAmountDueAtMaturity] = useState("");
  const [totalInterest, setTotalInterest] = useState("");

  const calculateDeferredPaymentLoan = () => {
    const totalMonths = loanTermYears * 12 + parseInt(loanTermMonths);
    const monthlyInterestRate = interestRate / (12 * 100);
    const compoundFrequencyMap = {
      monthly: 12,
      semiannually: 2,
      quarterly: 4,
      monthlyapr: 1,
      semimonthly: 24,
      biweekly: 26,
      weekly: 52,
      daily: 365,
      continuously: 1
    };
    const compoundPerYear = compoundFrequencyMap[compoundingFrequency];

    const amountDueAtMaturity =
      loanAmount * Math.pow(1 + monthlyInterestRate, totalMonths);
    const totalInterest = amountDueAtMaturity - loanAmount;

    setAmountDueAtMaturity(amountDueAtMaturity.toFixed(2));
    setTotalInterest(totalInterest.toFixed(2));
  };

  const clearFields = () => {
    setLoanAmount("");
    setLoanTermYears("");
    setLoanTermMonths("");
    setInterestRate("");
    setCompoundingFrequency("monthly");
    setAmountDueAtMaturity("");
    setTotalInterest("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">Deferred Payment Loan Calculator</h1>
        <div className="input-group">
          <label className="label">Loan Amount:</label>
          <input
            type="number"
            value={loanAmount}
            onChange={(e) => setLoanAmount(e.target.value)}
            placeholder="Enter the loan amount"
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
            <option value="monthly">Monthly</option>
            <option value="semiannually">Semiannually</option>
            <option value="quarterly">Quarterly</option>
            <option value="monthlyapr">Monthly (APR)</option>
            <option value="semimonthly">Semimonthly</option>
            <option value="biweekly">Biweekly</option>
            <option value="weekly">Weekly</option>
            <option value="daily">Daily</option>
            <option value="continuously">Continuously</option>
          </select>
        </div>
        <button
          onClick={calculateDeferredPaymentLoan}
          className="calculate-button"
        >
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>
        <div className="result">
          Amount Due at Loan Maturity: ${amountDueAtMaturity}
        </div>
        <div className="result">Total Interest: ${totalInterest}</div>
      </div>
    </div>
  );
};

export default DeferredPaymentLoanCalculator;
