import React, { useState } from "react";
import "./Calculator.css";

const DownPaymentCalculator = () => {
  const [upfrontCash, setUpfrontCash] = useState("");
  const [downPaymentPercentage, setDownPaymentPercentage] = useState("");
  const [includeClosingCosts, setIncludeClosingCosts] = useState(false);
  const [closingCosts, setClosingCosts] = useState("");
  const [interestRate, setInterestRate] = useState("");
  const [loanTerm, setLoanTerm] = useState("");
  const [homePrice, setHomePrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [loanAmount, setLoanAmount] = useState("");
  const [monthlyPayment, setMonthlyPayment] = useState("");

  const calculateDownPayment = () => {
    const cashAvailable = parseFloat(upfrontCash);
    const percent = parseFloat(downPaymentPercentage) / 100;
    const closingCostsValue = includeClosingCosts
      ? parseFloat(closingCosts)
      : 0;
    const rate = parseFloat(interestRate) / 100 / 12; // Monthly interest rate
    const termInMonths = parseFloat(loanTerm) * 12; // Term in months

    const downPaymentAmount = cashAvailable * percent;
    const homePriceValue = cashAvailable + closingCostsValue;
    const loanAmountValue = homePriceValue - downPaymentAmount;
    const monthlyPaymentValue =
      (loanAmountValue * rate) / (1 - Math.pow(1 + rate, -termInMonths));

    setHomePrice(homePriceValue.toFixed(2));
    setDownPayment(downPaymentAmount.toFixed(2));
    setLoanAmount(loanAmountValue.toFixed(2));
    setMonthlyPayment(monthlyPaymentValue.toFixed(2));
  };
  const clearFields = () => {
    setUpfrontCash("");
    setDownPaymentPercentage("");
    setIncludeClosingCosts(false);
    setClosingCosts("");
    setInterestRate("");
    setLoanTerm("");
    setHomePrice("");
    setDownPayment("");
    setLoanAmount("");
    setMonthlyPayment("");
  };

  return (
    <div className="App">
      <div className="calculator">
        <h1 className="title">
          The three calculations below offer different ways to help calculate an
          estimated down payment.
        </h1>
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
          <label>Down Payment (%):</label>
          <input
            type="number"
            value={downPaymentPercentage}
            onChange={(e) => setDownPaymentPercentage(e.target.value)}
            placeholder="Enter percentage"
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
        <button onClick={calculateDownPayment} className="calculate-button">
          Calculate
        </button>
        <button onClick={clearFields} className="clear-button">
          Clear
        </button>

        <div className="result">
          <h2>Results</h2>
          <div>Home Price: ${homePrice}</div>
          <div>Down Payment: ${downPayment}</div>
          <div>Closing Costs: ${includeClosingCosts ? closingCosts : 0}</div>
          <div>Loan Amount: ${loanAmount}</div>
          <div>Monthly Payment: ${monthlyPayment}</div>
        </div>
      </div>
    </div>
  );
};

export default DownPaymentCalculator;
