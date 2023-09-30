import React, { useState } from "react";
import "./Calculator.css";

const DownPaymentPercentageCalculator = () => {
  const [homePrice, setHomePrice] = useState("");
  const [upfrontCash, setUpfrontCash] = useState("");
  const [includeClosingCosts, setIncludeClosingCosts] = useState(false);
  const [closingCosts, setClosingCosts] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [downPaymentPercentage, setDownPaymentPercentage] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const calculateDownPaymentPercentage = () => {
    const homePriceValue = parseFloat(homePrice);
    const upfrontCashValue = parseFloat(upfrontCash);
    const closingCostsValue = includeClosingCosts
      ? parseFloat(closingCosts)
      : 0;
    const downPaymentValue = upfrontCashValue + closingCostsValue;
    const downPaymentPercentageValue =
      (downPaymentValue / homePriceValue) * 100;
    const loanAmountValue = homePriceValue - downPaymentValue;
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const termInMonths = parseFloat(loanTerm) * 12; // Term in months
    const monthlyPaymentValue =
      (loanAmountValue * rate) / (1 - Math.pow(1 + rate, -termInMonths));

    setDownPayment(downPaymentValue.toFixed(2));
    setDownPaymentPercentage(downPaymentPercentageValue.toFixed(1));
    setLoanAmount(loanAmountValue.toFixed(2));
    setMonthlyPayment(monthlyPaymentValue.toFixed(2));
  };
  const clearFields = () => {
    setHomePrice("");
    setUpfrontCash("");
    setIncludeClosingCosts(false);
    setClosingCosts("");
    setInterestRate("");
    setLoanTerm("");
    setDownPayment("");
    setDownPaymentPercentage("");
    setLoanAmount("");
    setMonthlyPayment("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h2>(slighly off)Down Payment Using upfront cash and home price</h2>
        <p className="title">
          If the home price and amount of upfront cash available are known, use
          the calculator below to calculate an estimate for a down payment
          percentage.
        </p>
        <div className="input-group">
          <label>Home Price:</label>
          <input
            type="number"
            value={homePrice}
            onChange={(e) => setHomePrice(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div className="input-group">
          <label>Upfront Cash Available:</label>
          <input
            type="number"
            value={upfrontCash}
            onChange={(e) => setUpfrontCash(e.target.value)}
            placeholder="Enter amount"
          />
        </div>
        <div className="input-group">
          <label>
            Include Closing Costs:
            <input
              type="checkbox"
              checked={includeClosingCosts}
              onChange={() => setIncludeClosingCosts(!includeClosingCosts)}
            />
          </label>
        </div>
        {includeClosingCosts && (
          <div className="input-group">
            <label>Closing Costs:</label>
            <input
              type="number"
              value={closingCosts}
              onChange={(e) => setClosingCosts(e.target.value)}
              placeholder="Enter amount"
            />
          </div>
        )}
        <div className="input-group">
          <label>Interest Rate:</label>
          <input
            type="number"
            step="0.01"
            value={interestRate}
            onChange={(e) => setInterestRate(e.target.value)}
            placeholder="Enter interest rate"
          />
        </div>
        <div className="input-group">
          <label>Loan Term (years):</label>
          <input
            type="number"
            value={loanTerm}
            onChange={(e) => setLoanTerm(e.target.value)}
            placeholder="Enter loan term"
          />
        </div>
        <button
          onClick={calculateDownPaymentPercentage}
          className="calculate-button"
        >
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>

        <div className="result">
          <h2>Results</h2>
          <div>Down Payment: ${downPayment}</div>
          <div>Down Payment Percentage: {downPaymentPercentage}%</div>
          <div>Closing Costs: ${includeClosingCosts ? closingCosts : 0}</div>
          <div>Loan Amount: ${loanAmount}</div>
          <div>Monthly Payment: ${monthlyPayment}</div>
        </div>
      </div>
    </div>
  );
};

export default DownPaymentPercentageCalculator;
